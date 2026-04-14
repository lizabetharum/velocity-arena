// api/submit-diagnostic.js
// Appends a student diagnostic submission to the correct Google Sheet
// based on the state they selected.
//
// Required environment variables in Vercel:
//
//   Per-site Sheet IDs (three pilot sites):
//     GOOGLE_SHEET_ID_NEW_YORK_1  — New York 1 (internal code "NY1")
//     GOOGLE_SHEET_ID_NEW_YORK_2  — New York 2 (internal code "NY2")
//     GOOGLE_SHEET_ID_TN          — Tennessee (internal code "TN")
//
//   Shared credentials (one service account works for all three sheets):
//     GOOGLE_SERVICE_ACCOUNT_EMAIL
//     GOOGLE_PRIVATE_KEY

export const config = { runtime: 'edge' };

export default async function handler(req) {
  if (req.method !== 'POST') {
    return respond({ error: 'Method not allowed' }, 405);
  }

  const { firstName, lastName, state, answers } = await req.json();

  if (!firstName || !lastName) {
    return respond({ error: 'Name required' }, 400);
  }

  const sheetIds = {
    NY1: process.env.GOOGLE_SHEET_ID_NEW_YORK_1,
    NY2: process.env.GOOGLE_SHEET_ID_NEW_YORK_2,
    TN:  process.env.GOOGLE_SHEET_ID_TN,
  };

  const sheetId = sheetIds[state];
  if (!sheetId) {
    return respond({ error: `No sheet configured for: ${state}` }, 400);
  }

  const serviceEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!serviceEmail || !privateKey) {
    return respond({ error: 'Server credentials not configured' }, 500);
  }

  try {
    const token = await getAccessToken(serviceEmail, privateKey);

    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/New_York',
      dateStyle: 'short',
      timeStyle: 'short'
    });

    // Row: Timestamp | State | First Name | Last Name | Q1 ... Q10
    const row = [
      timestamp,
      state,
      firstName.trim(),
      lastName.trim(),
      ...Array.from({ length: 10 }, (_, i) => answers?.[i] ?? '')
    ];

    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1!A1:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ values: [row] })
      }
    );

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Sheets API error: ${err}`);
    }

    return respond({ ok: true });

  } catch (err) {
    console.error('submit-diagnostic error:', err.message);
    return respond({ error: 'Failed to save. Check Vercel logs.' }, 500);
  }
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
    scope: 'https://www.googleapis.com/auth/spreadsheets',
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
