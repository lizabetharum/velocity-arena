// api/diagnostic-dashboard.js
// Reads all pre-task and post-task diagnostic sheets for all states,
// strips student names, and returns the answers with a stable hashed
// pseudonym so pre/post rows from the same student can be matched
// without exposing identities.
//
// The client does the scoring (against a keyed answer set) so this
// endpoint stays a thin, read-only proxy.
//
// Required environment variables:
//   GOOGLE_SHEET_ID_NEW_YORK_1, GOOGLE_SHEET_ID_NEW_YORK_2, GOOGLE_SHEET_ID_TN
//   GOOGLE_SHEET_ID_NEW_YORK_1_POST, GOOGLE_SHEET_ID_NEW_YORK_2_POST, GOOGLE_SHEET_ID_TN_POST
//   GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY
//   DIAGNOSTIC_DASHBOARD_TOKEN — a short shared secret required on the
//     request (?token=...) so the endpoint is not publicly scrapable.

export const config = { runtime: 'edge' };

const PRE_SHEET_IDS = {
  NY1: 'GOOGLE_SHEET_ID_NEW_YORK_1',
  NY2: 'GOOGLE_SHEET_ID_NEW_YORK_2',
  TN:  'GOOGLE_SHEET_ID_TN',
};

const POST_SHEET_IDS = {
  NY1: 'GOOGLE_SHEET_ID_NEW_YORK_1_POST',
  NY2: 'GOOGLE_SHEET_ID_NEW_YORK_2_POST',
  TN:  'GOOGLE_SHEET_ID_TN_POST',
};

export default async function handler(req) {
  const url = new URL(req.url);
  const token = url.searchParams.get('token');
  const expected = process.env.DIAGNOSTIC_DASHBOARD_TOKEN;

  if (!expected || token !== expected) {
    return respond({ error: 'Unauthorized' }, 401);
  }

  const serviceEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!serviceEmail || !privateKey) {
    return respond({ error: 'Server credentials not configured' }, 500);
  }

  try {
    const accessToken = await getAccessToken(serviceEmail, privateKey);

    // Pull all 8 sheets in parallel
    const fetches = [];
    for (const [state, envVar] of Object.entries(PRE_SHEET_IDS)) {
      const id = process.env[envVar];
      if (id) fetches.push(readSheet(id, accessToken).then(rows => ({ state, variant: 'pre', rows })));
    }
    for (const [state, envVar] of Object.entries(POST_SHEET_IDS)) {
      const id = process.env[envVar];
      if (id) fetches.push(readSheet(id, accessToken).then(rows => ({ state, variant: 'post', rows })));
    }

    const results = await Promise.all(fetches);

    // Flatten into anonymized records
    const records = [];
    for (const { state, variant, rows } of results) {
      if (!rows || rows.length < 2) continue;
      // Skip header row
      for (let i = 1; i < rows.length; i++) {
        const r = rows[i];
        // Row: Timestamp | State | First Name | Last Name | Q1..Q10
        const timestamp = r[0] || '';
        const firstName = (r[2] || '').trim();
        const lastName  = (r[3] || '').trim();
        if (!firstName && !lastName) continue;

        const pseudonym = await hashName(firstName, lastName, state);
        const answers = r.slice(4, 14).map(x => (x || '').toString());

        records.push({
          pseudonym,
          state,
          variant,
          timestamp,
          answers
        });
      }
    }

    return respond({ ok: true, records, count: records.length });

  } catch (err) {
    console.error('diagnostic-dashboard error:', err.message);
    return respond({ error: 'Failed to load data: ' + err.message }, 500);
  }
}

async function readSheet(sheetId, token) {
  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1!A1:N1000`,
    {
      headers: { 'Authorization': `Bearer ${token}` }
    }
  );
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Sheets read error (${sheetId.slice(0,8)}...): ${err}`);
  }
  const data = await res.json();
  return data.values || [];
}

// Stable anonymization: SHA-256 of normalized name+state, truncated to 10 hex chars.
// Same student in pre and post sheets will hash to the same pseudonym, so growth
// can be matched client-side without ever sending names to the browser.
async function hashName(firstName, lastName, state) {
  const input = `${firstName.toLowerCase().trim()}|${lastName.toLowerCase().trim()}|${state}`;
  const bytes = new TextEncoder().encode(input);
  const hash = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(hash))
    .slice(0, 5)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
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
