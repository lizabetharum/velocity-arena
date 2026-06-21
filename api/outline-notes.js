// api/outline-notes.js
// Per-teacher slide notes for the PD slide-outline page (/pd/outline/).
//
//   GET  /api/outline-notes?teacher=NAME
//        → { ok: true, notes: [ { day, slide, note } ] }  (just that teacher's notes)
//
//   POST /api/outline-notes   body: { teacher, day, slide, note }
//        → { ok: true }   (upsert: one row per teacher+day+slide, last save wins
//                           within that teacher only — teachers never overwrite
//                           each other)
//
// The spreadsheet uses the first tab ("Sheet1") with columns:
//   A Teacher | B Day | C Slide | D Note | E UpdatedAt
// (A header row is optional; it won't collide with real teacher names.)
//
// Required environment variables in Vercel:
//   GOOGLE_SHEET_ID_PD_NOTES        — the spreadsheet ID for these notes
//   GOOGLE_SERVICE_ACCOUNT_EMAIL    — shared service account (already set)
//   GOOGLE_PRIVATE_KEY              — shared service account key (already set)

export const config = { runtime: 'edge' };

const TAB = 'Sheet1';

export default async function handler(req) {
  const sheetId = process.env.GOOGLE_SHEET_ID_PD_NOTES;
  const serviceEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!sheetId || !serviceEmail || !privateKey) {
    return respond({ error: 'Server credentials not configured' }, 500);
  }

  try {
    const token = await getAccessToken(serviceEmail, privateKey);

    if (req.method === 'GET') {
      const teacher = (new URL(req.url).searchParams.get('teacher') || '').trim();
      if (!teacher) return respond({ error: 'teacher required' }, 400);

      const rows = await readRows(sheetId, token);
      const notes = rows
        .filter(r => (r[0] || '').trim() === teacher)
        .map(r => ({ day: r[1] || '', slide: r[2] || '', note: r[3] || '' }));
      return respond({ ok: true, notes });
    }

    if (req.method === 'POST') {
      const { teacher, day, slide, note } = await req.json();
      if (!teacher || !day || !slide) {
        return respond({ error: 'teacher, day and slide required' }, 400);
      }

      const t = teacher.trim();
      const d = String(day).trim();
      const s = String(slide).trim();
      const text = (note ?? '').toString();
      const updatedAt = new Date().toLocaleString('en-US', {
        timeZone: 'America/New_York', dateStyle: 'short', timeStyle: 'short'
      });
      const newRow = [t, d, s, text, updatedAt];

      const rows = await readRows(sheetId, token);
      // rows are data starting at row 1 of the range we read (A1). Find a match.
      const idx = rows.findIndex(r =>
        (r[0] || '').trim() === t &&
        (r[1] || '').trim() === d &&
        (r[2] || '').trim() === s
      );

      if (idx === -1) {
        // No existing row — append (skip if there's nothing to save).
        if (!text) return respond({ ok: true });
        await appendRow(sheetId, token, newRow);
      } else {
        const rowNumber = idx + 1; // A1-based: range started at A1
        await updateRow(sheetId, token, rowNumber, newRow);
      }
      return respond({ ok: true });
    }

    return respond({ error: 'Method not allowed' }, 405);

  } catch (err) {
    console.error('outline-notes error:', err.message);
    return respond({ error: 'Failed. Check Vercel logs.' }, 500);
  }
}

async function readRows(sheetId, token) {
  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${TAB}!A1:E?majorDimension=ROWS`,
    { headers: { 'Authorization': `Bearer ${token}` } }
  );
  if (!res.ok) throw new Error(`Sheets read error: ${await res.text()}`);
  const data = await res.json();
  return data.values || [];
}

async function appendRow(sheetId, token, row) {
  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${TAB}!A1:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
    {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ values: [row] })
    }
  );
  if (!res.ok) throw new Error(`Sheets append error: ${await res.text()}`);
}

async function updateRow(sheetId, token, rowNumber, row) {
  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${TAB}!A${rowNumber}:E${rowNumber}?valueInputOption=USER_ENTERED`,
    {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ values: [row] })
    }
  );
  if (!res.ok) throw new Error(`Sheets update error: ${await res.text()}`);
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
