// api/diagnostic-dashboard.js
// Reads all pre-task and post-task diagnostic sheets for all sites,
// looks up each (site, name, last initial, team) tuple in the Roster
// to get the S-XXXX student token, and returns answers + AI scores
// with the token in place of the legacy hashed pseudonym.
//
// Required environment variables (point at the NEW per-site diagnostic sheets
// created during the Roster-anonymizer migration):
//   GOOGLE_SHEET_ID_NEW_YORK_1, GOOGLE_SHEET_ID_NEW_YORK_2, GOOGLE_SHEET_ID_NEW_YORK_3, GOOGLE_SHEET_ID_TN
//   GOOGLE_SHEET_ID_NEW_YORK_1_POST, GOOGLE_SHEET_ID_NEW_YORK_2_POST, GOOGLE_SHEET_ID_NEW_YORK_3_POST, GOOGLE_SHEET_ID_TN_POST
//   GOOGLE_SHEET_ID_ROSTER  ← new: the private Roster sheet, used to map (site, name, lastInitial, team) → token
//   GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY
//
// New source-sheet schema (21 cols), tab "Pre-Task Diagnostic" / "Post-Task Diagnostic":
//   Timestamp | First Name | Last Initial | Team |
//   Q1 Answer | Q1 Not Yet | Q2 Answer | Q2 Not Yet | … | Q8 Answer | Q8 Not Yet |
//   Submitted At
//
// AI scores: the new submission flow doesn't yet write AI columns, so aiScores[*]
// and aiTotal come back null. The dashboard already gracefully handles missing AI
// columns; until you wire score-diagnostic.js into the new flow, growth charts
// will be based on raw answers only.

export const config = { runtime: 'edge' };

const PRE_SHEET_IDS = {
  NY1: 'GOOGLE_SHEET_ID_NEW_YORK_1',
  NY2: 'GOOGLE_SHEET_ID_NEW_YORK_2',
  NY3: 'GOOGLE_SHEET_ID_NEW_YORK_3',
  TN:  'GOOGLE_SHEET_ID_TN',
};

const POST_SHEET_IDS = {
  NY1: 'GOOGLE_SHEET_ID_NEW_YORK_1_POST',
  NY2: 'GOOGLE_SHEET_ID_NEW_YORK_2_POST',
  NY3: 'GOOGLE_SHEET_ID_NEW_YORK_3_POST',
  TN:  'GOOGLE_SHEET_ID_TN_POST',
};

// Site code → label as stored in the Roster sheet by the Anonymizer.
const STATE_TO_LABEL = {
  NY1: 'Gotham Tech',
  NY2: 'Claremont International',
  NY3: 'South Bronx',
  TN:  'Crosstown',
};

const PRE_TAB  = 'Pre-Task Diagnostic';
const POST_TAB = 'Post-Task Diagnostic';

export default async function handler(req) {
  const serviceEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey   = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const rosterId     = process.env.GOOGLE_SHEET_ID_ROSTER;

  if (!serviceEmail || !privateKey) {
    return respond({ error: 'Server credentials not configured' }, 500);
  }
  if (!rosterId) {
    return respond({ error: 'GOOGLE_SHEET_ID_ROSTER not configured' }, 500);
  }

  try {
    const accessToken = await getAccessToken(serviceEmail, privateKey);

    // Pull all 8 source sheets + the Roster in parallel.
    // Each .catch returns empty rows so one missing tab (e.g. before any
    // kid has submitted on the new flow) doesn't kill the whole dashboard.
    const fetches = [];
    const tolerant = (p, fallback) => p.catch(err => {
      console.warn('Dashboard read fallback:', err.message);
      return fallback;
    });
    for (const [state, envVar] of Object.entries(PRE_SHEET_IDS)) {
      const id = process.env[envVar];
      if (id) fetches.push(tolerant(
        readSheet(id, PRE_TAB, 'A1:AN2000', accessToken).then(rows => ({ state, variant: 'pre', rows })),
        { state, variant: 'pre', rows: [] }
      ));
    }
    for (const [state, envVar] of Object.entries(POST_SHEET_IDS)) {
      const id = process.env[envVar];
      if (id) fetches.push(tolerant(
        readSheet(id, POST_TAB, 'A1:AN2000', accessToken).then(rows => ({ state, variant: 'post', rows })),
        { state, variant: 'post', rows: [] }
      ));
    }
    fetches.push(tolerant(
      readSheet(rosterId, 'Roster', 'A1:F5000', accessToken).then(rows => ({ roster: true, rows })),
      { roster: true, rows: [] }
    ));

    const results = await Promise.all(fetches);

    // Build a roster lookup: lowercase(site)|name|lastInitial|team → token
    const rosterMap = {};
    for (const r of results) {
      if (!r.roster) continue;
      const rows = r.rows || [];
      for (let i = 1; i < rows.length; i++) {
        // Roster columns: Student Token | Site | First Name | Last Initial | Team | Created At
        const [token, site, name, lastInitial, team] = rows[i];
        if (!token || !site || !name) continue;
        rosterMap[normKey(site, name, lastInitial, team)] = token;
      }
    }

    // Flatten source rows into anonymized records.
    const records = [];
    for (const { state, variant, rows } of results) {
      if (variant === undefined) continue;  // roster entry
      if (!rows || rows.length < 2) continue;
      const siteLabel = STATE_TO_LABEL[state] || state;

      for (let i = 1; i < rows.length; i++) {
        const r = rows[i];
        const timestamp   = r[0] || '';
        const firstName   = (r[1] || '').toString().trim();
        const lastInitial = (r[2] || '').toString().trim();
        const team        = (r[3] || '').toString().trim();
        if (!firstName) continue;

        const token = rosterMap[normKey(siteLabel, firstName, lastInitial, team)] || null;

        // 8 question pairs in cols 4–19: (answer, notYet) per question.
        // Collapse to single string per question: "Not yet" if the flag was set,
        // otherwise the raw answer — same shape the legacy dashboard expects.
        const answers = [];
        for (let q = 0; q < 8; q++) {
          const ans   = (r[4 + q * 2] || '').toString();
          const notYt = (r[4 + q * 2 + 1] || '').toString().trim().toUpperCase();
          answers.push(notYt === 'YES' ? 'Not yet' : ans);
        }
        // Legacy clients expected 10 answers; pad to keep their UI happy.
        while (answers.length < 10) answers.push('');

        // AI scores live at cols W..AN (indices 22..39):
        //   index 22 Q1_Score | 23 Q1_Reason | 24 Q2_Score | 25 Q2_Reason | …
        //   index 38 Total    | 39 ScoredAt
        // Each row may be shorter than 40 cells if scoring hasn't run yet —
        // the Sheets API truncates trailing empties.
        const aiScores = [];
        for (let q = 0; q < 8; q++) {
          const raw = r[22 + q * 2];
          aiScores.push(raw === undefined || raw === '' ? null : parseFloat(raw));
        }
        const totalRaw = r[38];
        const aiTotal  = (totalRaw === undefined || totalRaw === '') ? null : parseFloat(totalRaw);
        const scoredAt = r[39] || '';

        records.push({
          pseudonym: token || ('UNK-' + firstName[0].toLowerCase() + lastInitial.toLowerCase()),
          token,
          state,
          variant,
          timestamp,
          team,
          answers,
          aiScores,
          aiTotal,
          scoredAt
        });
      }
    }

    return respond({ ok: true, records, count: records.length });

  } catch (err) {
    console.error('diagnostic-dashboard error:', err.message);
    return respond({ error: 'Failed to load data: ' + err.message }, 500);
  }
}

function normKey(site, name, lastInitial, team) {
  return (site || '').toString().trim().toLowerCase() + '|'
       + (name || '').toString().trim().toLowerCase() + '|'
       + (lastInitial || '').toString().trim().toLowerCase() + '|'
       + (team || '').toString().trim().toLowerCase();
}

async function readSheet(sheetId, tabName, range, token) {
  const fullRange = encodeURIComponent(`${tabName}!${range}`);
  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${fullRange}`,
    { headers: { 'Authorization': `Bearer ${token}` } }
  );
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Sheets read error (${sheetId.slice(0,8)}…/${tabName}): ${err}`);
  }
  const data = await res.json();
  return data.values || [];
}

function respond(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}

async function getAccessToken(email, privateKey) {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claim = b64url(JSON.stringify({
    iss: email,
    scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600
  }));
  const unsigned = `${header}.${claim}`;
  const key = await importPrivateKey(privateKey);
  const sig = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, new TextEncoder().encode(unsigned));
  const jwt = `${unsigned}.${b64url(sig)}`;
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    })
  });
  const data = await res.json();
  if (!data.access_token) throw new Error('Failed to get access token');
  return data.access_token;
}

function b64url(input) {
  const bytes = typeof input === 'string' ? new TextEncoder().encode(input) : new Uint8Array(input);
  let str = '';
  bytes.forEach(b => str += String.fromCharCode(b));
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

async function importPrivateKey(pem) {
  const cleaned = pem
    .replace(/-----BEGIN PRIVATE KEY-----/, '')
    .replace(/-----END PRIVATE KEY-----/, '')
    .replace(/\s/g, '');
  const binary = Uint8Array.from(atob(cleaned), c => c.charCodeAt(0));
  return crypto.subtle.importKey(
    'pkcs8', binary,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false, ['sign']
  );
}
