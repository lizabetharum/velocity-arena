// api/recall-dashboard.js
//
// Reads all per-site source sheets for Recall Check Day 5, Cold Recall Check
// Day 10, and Interleaved Day 6 across all four sites, joins each row to the
// Roster (site, name, lastInitial, team) → token map, and returns one
// anonymized record list. The /activities/recall-dashboard/ page renders
// this with per-question AI scores + hover rationales, same shape as the
// diagnostic dashboard.
//
// Required env vars:
//   GOOGLE_SHEET_ID_RECALL_D5_NY1 / _NY2 / _NY3 / _TN
//   GOOGLE_SHEET_ID_RECALL_D10_NY1 / _NY2 / _NY3 / _TN
//   GOOGLE_SHEET_ID_INTERLEAVED_D6_NY1 / _NY2 / _NY3 / _TN
//   GOOGLE_SHEET_ID_ROSTER
//   GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY

export const config = { runtime: 'edge' };

const STATE_TO_LABEL = {
  NY1: 'Gotham Tech',
  NY2: 'Claremont International',
  NY3: 'South Bronx',
  TN:  'Crosstown',
};

const D5_SHEETS = {
  NY1: 'GOOGLE_SHEET_ID_RECALL_D5_NY1',
  NY2: 'GOOGLE_SHEET_ID_RECALL_D5_NY2',
  NY3: 'GOOGLE_SHEET_ID_RECALL_D5_NY3',
  TN:  'GOOGLE_SHEET_ID_RECALL_D5_TN',
};
const D10_SHEETS = {
  NY1: 'GOOGLE_SHEET_ID_RECALL_D10_NY1',
  NY2: 'GOOGLE_SHEET_ID_RECALL_D10_NY2',
  NY3: 'GOOGLE_SHEET_ID_RECALL_D10_NY3',
  TN:  'GOOGLE_SHEET_ID_RECALL_D10_TN',
};
const ILV_SHEETS = {
  NY1: 'GOOGLE_SHEET_ID_INTERLEAVED_D6_NY1',
  NY2: 'GOOGLE_SHEET_ID_INTERLEAVED_D6_NY2',
  NY3: 'GOOGLE_SHEET_ID_INTERLEAVED_D6_NY3',
  TN:  'GOOGLE_SHEET_ID_INTERLEAVED_D6_TN',
};

export default async function handler(req) {
  const serviceEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey   = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const rosterId     = process.env.GOOGLE_SHEET_ID_ROSTER;

  if (!serviceEmail || !privateKey) return respond({ error: 'Server credentials not configured' }, 500);
  if (!rosterId) return respond({ error: 'GOOGLE_SHEET_ID_ROSTER not configured' }, 500);

  try {
    const accessToken = await getAccessToken(serviceEmail, privateKey);

    // Tolerant fetch — missing tabs (e.g., before any submissions) shouldn't kill the whole dashboard.
    const tolerant = (p, fallback) => p.catch(err => {
      console.warn('recall-dashboard read fallback:', err.message);
      return fallback;
    });

    const fetches = [];

    for (const [state, envVar] of Object.entries(D5_SHEETS)) {
      const id = process.env[envVar];
      if (id) fetches.push(tolerant(
        readSheet(id, 'Recall Check Day 5', 'A1:AA1000', accessToken).then(rows => ({ state, variant: 'day5', rows })),
        { state, variant: 'day5', rows: [] }
      ));
    }
    for (const [state, envVar] of Object.entries(D10_SHEETS)) {
      const id = process.env[envVar];
      if (id) fetches.push(tolerant(
        readSheet(id, 'Cold Recall Check Day 10', 'A1:AB1000', accessToken).then(rows => ({ state, variant: 'day10', rows })),
        { state, variant: 'day10', rows: [] }
      ));
    }
    for (const [state, envVar] of Object.entries(ILV_SHEETS)) {
      const id = process.env[envVar];
      if (id) fetches.push(tolerant(
        readSheet(id, 'Interleaved Day 6', 'A1:CB1000', accessToken).then(rows => ({ state, variant: 'interleaved', rows })),
        { state, variant: 'interleaved', rows: [] }
      ));
    }
    fetches.push(tolerant(
      readSheet(rosterId, 'Roster', 'A1:F5000', accessToken).then(rows => ({ roster: true, rows })),
      { roster: true, rows: [] }
    ));

    const results = await Promise.all(fetches);

    // Build roster lookup
    const rosterMap = {};
    for (const r of results) {
      if (!r.roster) continue;
      const rows = r.rows || [];
      for (let i = 1; i < rows.length; i++) {
        const [token, site, name, lastInitial, team] = rows[i];
        if (!token || !site || !name) continue;
        rosterMap[normKey(site, name, lastInitial, team)] = token;
      }
    }

    const records = [];

    for (const { state, variant, rows } of results) {
      if (variant === undefined) continue;  // roster entry
      if (!rows || rows.length < 2) continue;
      const siteLabel = STATE_TO_LABEL[state] || state;

      for (let i = 1; i < rows.length; i++) {
        const r = rows[i];
        if (variant === 'day5') {
          const rec = parseDay5Row(r, state, siteLabel, rosterMap);
          if (rec) records.push(rec);
        } else if (variant === 'day10') {
          const rec = parseDay10Row(r, state, siteLabel, rosterMap);
          if (rec) records.push(rec);
        } else if (variant === 'interleaved') {
          const rec = parseInterleavedRow(r, state, siteLabel, rosterMap);
          if (rec) records.push(rec);
        }
      }
    }

    return respond({ ok: true, records, count: records.length });

  } catch (err) {
    console.error('recall-dashboard error:', err.message);
    return respond({ error: 'Failed to load data: ' + err.message }, 500);
  }
}

// ── Day 5 row parser ──
// 27 cols max:
//   0  Timestamp | 1  First Name | 2  Last Initial | 3  Team
//   4..13 5×(Work, Answer)
//   14 human Score
//   15..24 5×(Q_Score, Q_Reason)  ← AI
//   25 Total | 26 ScoredAt
function parseDay5Row(r, state, siteLabel, rosterMap) {
  const firstName   = (r[1] || '').toString().trim();
  if (!firstName) return null;
  const lastInitial = (r[2] || '').toString().trim();
  const team        = (r[3] || '').toString().trim();
  const timestamp   = r[0] || '';
  const token = rosterMap[normKey(siteLabel, firstName, lastInitial, team)] || null;

  const answers = [];
  for (let q = 0; q < 5; q++) {
    answers.push({ work: r[4 + q*2] || '', answer: r[5 + q*2] || '' });
  }
  const humanScore = r[14] || '';
  const aiScores = parseAiScores(r, 15, 5);
  const aiTotal  = parseFloatOrNull(r[25]);
  const scoredAt = r[26] || '';

  return {
    pseudonym: token || ('UNK-' + firstName[0].toLowerCase() + lastInitial.toLowerCase()),
    token, state, variant: 'day5', timestamp, team,
    answers, humanScore, aiScores, aiTotal, scoredAt
  };
}

// ── Day 10 row parser ──
// 28 cols max:
//   0..3 identity
//   4..13 5×(Work, Answer)
//   14 Submitted At
//   15 human Score
//   16..25 5×(Q_Score, Q_Reason)  ← AI
//   26 Total | 27 ScoredAt
function parseDay10Row(r, state, siteLabel, rosterMap) {
  const firstName   = (r[1] || '').toString().trim();
  if (!firstName) return null;
  const lastInitial = (r[2] || '').toString().trim();
  const team        = (r[3] || '').toString().trim();
  const timestamp   = r[0] || '';
  const submittedAt = (r[14] || '').toString().trim();
  if (!submittedAt) return null;  // skip drafts
  const token = rosterMap[normKey(siteLabel, firstName, lastInitial, team)] || null;

  const answers = [];
  for (let q = 0; q < 5; q++) {
    answers.push({ work: r[4 + q*2] || '', answer: r[5 + q*2] || '' });
  }
  const humanScore = r[15] || '';
  const aiScores = parseAiScores(r, 16, 5);
  const aiTotal  = parseFloatOrNull(r[26]);
  const scoredAt = r[27] || '';

  return {
    pseudonym: token || ('UNK-' + firstName[0].toLowerCase() + lastInitial.toLowerCase()),
    token, state, variant: 'day10', timestamp, team, submittedAt,
    answers, humanScore, aiScores, aiTotal, scoredAt
  };
}

// ── Interleaved Day 6 row parser ──
// 80 cols max:
//   0..3 identity
//   4..39 12×(Tag, Work, Answer)
//   40..43 EC-A (problem, value, tag, answer)
//   44..47 EC-B (problem, value, tag, answer)
//   48 Submitted At
//   49 human Score
//   50..77 14×(Q_Score, Q_Reason)  ← AI
//   78 Total | 79 ScoredAt
function parseInterleavedRow(r, state, siteLabel, rosterMap) {
  const firstName   = (r[1] || '').toString().trim();
  if (!firstName) return null;
  const lastInitial = (r[2] || '').toString().trim();
  const team        = (r[3] || '').toString().trim();
  const timestamp   = r[0] || '';
  const submittedAt = (r[48] || '').toString().trim();
  if (!submittedAt) return null;
  const token = rosterMap[normKey(siteLabel, firstName, lastInitial, team)] || null;

  const answers = [];
  for (let q = 0; q < 12; q++) {
    answers.push({
      tag:    r[4 + q*3] || '',
      work:   r[5 + q*3] || '',
      answer: r[6 + q*3] || ''
    });
  }
  // EC-A
  answers.push({
    tag:    r[42] || '',
    work:   `[Cited problem ${r[40] || '?'}, value ${r[41] || '?'}]`,
    answer: r[43] || ''
  });
  // EC-B
  answers.push({
    tag:    r[46] || '',
    work:   `[Cited problem ${r[44] || '?'}, value ${r[45] || '?'}]`,
    answer: r[47] || ''
  });

  const humanScore = r[49] || '';
  const aiScores = parseAiScores(r, 50, 14);
  const aiTotal  = parseFloatOrNull(r[78]);
  const scoredAt = r[79] || '';

  return {
    pseudonym: token || ('UNK-' + firstName[0].toLowerCase() + lastInitial.toLowerCase()),
    token, state, variant: 'interleaved', timestamp, team, submittedAt,
    answers, humanScore, aiScores, aiTotal, scoredAt
  };
}

// ── Helpers ──
function parseAiScores(r, startIdx, count) {
  const out = [];
  for (let q = 0; q < count; q++) {
    const scoreRaw  = r[startIdx + q * 2];
    const reasonRaw = r[startIdx + q * 2 + 1];
    if (scoreRaw === undefined || scoreRaw === '') {
      out.push(null);
    } else {
      out.push({ score: parseFloat(scoreRaw), reason: (reasonRaw || '').toString() });
    }
  }
  return out;
}

function parseFloatOrNull(v) {
  if (v === undefined || v === '') return null;
  const f = parseFloat(v);
  return isNaN(f) ? null : f;
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
    throw new Error(`Sheets read error (${sheetId.slice(0,8)}…/${tabName}): ${await res.text()}`);
  }
  const data = await res.json();
  return data.values || [];
}

function respond(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}

async function getAccessToken(email, privateKey) {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claim = b64url(JSON.stringify({
    iss: email,
    scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now, exp: now + 3600
  }));
  const unsigned = `${header}.${claim}`;
  const key = await importPrivateKey(privateKey);
  const sig = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, new TextEncoder().encode(unsigned));
  const jwt = `${unsigned}.${b64url(sig)}`;
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: jwt })
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
  const cleaned = pem.replace(/-----BEGIN PRIVATE KEY-----/, '').replace(/-----END PRIVATE KEY-----/, '').replace(/\s/g, '');
  const binary = Uint8Array.from(atob(cleaned), c => c.charCodeAt(0));
  return crypto.subtle.importKey('pkcs8', binary, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['sign']);
}
