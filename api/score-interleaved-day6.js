// api/score-interleaved-day6.js
//
// Claude-graded scoring for the Day 6 Interleaved Problem Set.
//
// Each row has 14 questions: 12 main problems + EC-A + EC-B. Each
// problem has BOTH a numeric answer and a concept tag — scoring rewards
// both: 1.0 = answer + tag correct, 0.5 = one correct, 0 = neither.
//
// Sheet layout (tab "Interleaved Day 6"), 1-indexed:
//   1   Timestamp
//   2   First Name
//   3   Last Initial
//   4   Team
//   5,6,7   Q1 Tag, Work, Answer
//   8,9,10  Q2 Tag, Work, Answer
//   ...         (each subsequent Q is +3)
//   38,39,40 Q12 Tag, Work, Answer
//   41,42,43,44 EC-A: Problem #, Value, Tag, Answer
//   45,46,47,48 EC-B: Problem #, Value, Tag, Answer
//   49  Submitted At
//   50  Score (human-graded — Anonymizer flow, do not touch)
//   51..78 14 × (Q_Score, Q_Reason)   ← AI scoring (cols AY..BZ)
//   79  Total                          (col CA)
//   80  ScoredAt                       (col CB)
//
// Required env vars:
//   ANTHROPIC_API_KEY
//   GOOGLE_SHEET_ID_INTERLEAVED_D6_NY1 / _NY2 / _NY3 / _TN
//   GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY

export const config = { runtime: 'edge' };

const SHEETS = {
  NY1: 'GOOGLE_SHEET_ID_INTERLEAVED_D6_NY1',
  NY2: 'GOOGLE_SHEET_ID_INTERLEAVED_D6_NY2',
  NY3: 'GOOGLE_SHEET_ID_INTERLEAVED_D6_NY3',
  TN:  'GOOGLE_SHEET_ID_INTERLEAVED_D6_TN',
};

const TAB = 'Interleaved Day 6';

// Formulas (canonical, per the user's confirmation 2026-06-18):
//   Speed%       = (S × 100) ÷ 20                  → unit rate
//   PowerOutput  = 100 − (20 − E) × 1.5 × t        → linear decay
//   TurnRatio    = 0.2 + (T × 0.02)                → linear function
//   Charge%      = P²                              → nonlinear function
//   FollowThru   = 120 + (P × 35)                  → linear function
//   Budget       = P = 20 − S − E − T              → ratio
const RUBRIC = [
  { q:1,  topic:'Speed performance',     question:'A bot has Speed stat S = 6. Calculate its speed performance percentage.',
    correct:'30% — (6 × 100) ÷ 20 = 30. Tag: unit rate.', partial:'Got 30 without %, OR tagged correctly but arithmetic slip.', tag:'unit rate' },
  { q:2,  topic:'Power output (Endurance)', question:'A bot has Endurance stat E = 8. Match lasts t = 3 min. What is power output at minute 3?',
    correct:'46% — 100 − (20−8) × 1.5 × 3 = 100 − 54 = 46. Tag: linear decay.', partial:'Set up 100 − (20−8)×1.5×3 right but botched arithmetic; common wrong answer is 8% (subtraction order error).', tag:'linear decay' },
  { q:3,  topic:'Turn ratio',            question:'A bot has Turning stat T = 6. Calculate its turn ratio.',
    correct:'0.32 — 0.2 + (6 × 0.02) = 0.32. Tag: linear function.', partial:'Got 0.32 but tagged proportional scaling.', tag:'linear function' },
  { q:4,  topic:'Charge percent (Power)',question:'A bot has Power stat P = 4. Calculate its charge percentage.',
    correct:'16% — P² = 4² = 16. Tag: nonlinear function.', partial:'Got 16 but tagged proportional scaling.', tag:'nonlinear function' },
  { q:5,  topic:'Speed performance',     question:'A bot has Speed stat S = 8. Calculate its speed performance percentage.',
    correct:'40% — (8 × 100) ÷ 20 = 40. Tag: unit rate.', partial:'Got 40 but tagged proportional scaling.', tag:'unit rate' },
  { q:6,  topic:'Budget',                question:'Team stats: S = 4, E = 8, T = 6. Budget = 20. Find the Power stat.',
    correct:'P = 2 — 20 − 4 − 8 − 6 = 2. Tag: ratio.', partial:'Got P = 2 but tagged linear function or another.', tag:'ratio' },
  { q:7,  topic:'Power output (Endurance)', question:'A bot has Endurance stat E = 6. Match lasts t = 4 min. What is power output at minute 4?',
    correct:'16% — 100 − (20−6) × 1.5 × 4 = 100 − 84 = 16. Tag: linear decay.', partial:'Common wrong: 8% (order-of-operations error). Or got 16 but tagged wrong.', tag:'linear decay' },
  { q:8,  topic:'Follow-through (Power)',question:'A bot has Power stat P = 2. Calculate its follow-through in milliseconds.',
    correct:'190 ms — 120 + (2 × 35) = 190. Tag: linear function (starts at 120, not zero).', partial:'Got 190 but tagged proportional scaling (this is the conceptual trap).', tag:'linear function' },
  { q:9,  topic:'Turn ratio',            question:'A bot has Turning stat T = 2. Calculate its turn ratio.',
    correct:'0.24 — 0.2 + (2 × 0.02) = 0.24. Tag: linear function.', partial:'Got 0.24 but tagged proportional scaling.', tag:'linear function' },
  { q:10, topic:'Speed performance',     question:'A bot has Speed stat S = 4. Calculate its speed performance percentage.',
    correct:'20% — (4 × 100) ÷ 20 = 20. Tag: unit rate.', partial:'Got 20 but tagged proportional scaling.', tag:'unit rate' },
  { q:11, topic:'Charge percent (Power)',question:'A bot has Power stat P = 6. Calculate its charge percentage.',
    correct:'36% — P² = 6² = 36. Tag: nonlinear function.', partial:'Got 36 but tagged proportional scaling (this is the trap).', tag:'nonlinear function' },
  { q:12, topic:'Budget',                question:'Team stats: S = 8, E = 6, T = 2. Budget = 20. Find the Power stat.',
    correct:'P = 4 — 20 − 8 − 6 − 2 = 4. Tag: ratio.', partial:'Got P = 4 but tagged linear function or another.', tag:'ratio' },
  // EC-A: refers to Q6 team (S=4, E=8, T=6, P=2). "Motor speed %" means Speed%.
  { q:13, topic:'EC-A: Q6 team motor speed %', question:'(Extra credit) Using the team from Q6 (S = 4), calculate motor speed %.',
    correct:'20% — (4 × 100) ÷ 20 = 20. Tag: unit rate.', partial:'Got 20 but tagged proportional scaling.', tag:'unit rate' },
  // EC-B: refers to Q12 team (S=8, E=6, T=2, P=4). "Charge power" means Charge%.
  { q:14, topic:'EC-B: Q12 team charge %',     question:'(Extra credit) Using the team from Q12 (P = 4), calculate charge %.',
    correct:'16% — P² = 4² = 16. Tag: nonlinear function.', partial:'Got 16 but tagged proportional scaling.', tag:'nonlinear function' },
];

export default async function handler(req) {
  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  if (!anthropicKey) return respond({ error: 'ANTHROPIC_API_KEY not set' }, 500);

  const url = new URL(req.url);
  const maxRows = parseInt(url.searchParams.get('max') || '50', 10);

  const serviceEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey   = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  if (!serviceEmail || !privateKey) return respond({ error: 'Google service account not configured' }, 500);

  try {
    const accessToken = await getAccessToken(serviceEmail, privateKey);

    const targets = [];
    for (const [state, envVar] of Object.entries(SHEETS)) {
      const id = process.env[envVar];
      if (id) targets.push({ state, sheetId: id, tab: TAB });
    }

    let totalScored = 0;
    const errors = [];
    let remaining = maxRows;

    for (const target of targets) {
      if (remaining <= 0) break;
      try {
        const n = await scoreSheet(target, accessToken, anthropicKey, remaining);
        totalScored += n;
        remaining -= n;
      } catch (e) {
        errors.push(`${target.state}: ${e.message}`);
      }
    }

    return respond({ ok: true, scored: totalScored, remaining_budget: remaining, errors: errors.length ? errors : undefined });
  } catch (err) {
    console.error('score-interleaved-day6 error:', err);
    return respond({ error: err.message || 'Scoring failed' }, 500);
  }
}

async function scoreSheet(target, accessToken, anthropicKey, budget) {
  const tabRange = `${target.tab}!A1:CB1000`;
  const readRes = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${target.sheetId}/values/${encodeURIComponent(tabRange)}`,
    { headers: { 'Authorization': `Bearer ${accessToken}` } }
  );
  if (!readRes.ok) throw new Error(`read failed: ${await readRes.text()}`);
  const data = await readRes.json();
  const rows = data.values || [];
  if (rows.length < 2) return 0;

  // Row 0 is headers. Ensure AI-scoring column headers at AY..CB (cols 51-80).
  // Col AX (index 49) is the human Score column — never touch it.
  const header = rows[0];
  const SCORE_HEADERS = [];
  for (let q = 1; q <= 14; q++) SCORE_HEADERS.push(`Q${q}_Score`, `Q${q}_Reason`);
  SCORE_HEADERS.push('Total', 'ScoredAt');
  const needsHeader = SCORE_HEADERS.some((h, i) => header[50 + i] !== h);
  if (needsHeader) await writeRange(target.sheetId, accessToken, `${target.tab}!AY1:CB1`, [SCORE_HEADERS]);

  let scored = 0;
  const updates = [];

  for (let i = 1; i < rows.length; i++) {
    if (scored >= budget) break;
    const row = rows[i];
    // Already scored if Q1_Score (index 50) AND ScoredAt (index 79) are present.
    const alreadyScored = row[50] !== undefined && row[50] !== '' && row[79] !== undefined && row[79] !== '';
    if (alreadyScored) continue;

    // Only score submitted rows. Submitted At is at index 48.
    const submittedAt = (row[48] || '').toString().trim();
    if (!submittedAt) continue;

    if (!row[1] || !row[1].toString().trim()) continue;

    // Extract 14 entries.
    // Q1..Q12 each at row[4 + (q-1)*3 .. 6 + (q-1)*3] (tag, work, answer).
    // EC-A at row[40..43] (problem #, value, tag, answer).
    // EC-B at row[44..47] (problem #, value, tag, answer).
    const entries = [];
    for (let q = 0; q < 12; q++) {
      const tag    = (row[4 + q * 3] || '').toString().trim();
      const work   = (row[5 + q * 3] || '').toString().trim();
      const answer = (row[6 + q * 3] || '').toString().trim();
      entries.push({ tag, work, answer });
    }
    // EC-A
    entries.push({
      tag:    (row[42] || '').toString().trim(),
      work:   `[Problem # cited: ${(row[40] || '').toString().trim() || '(blank)'}, Value: ${(row[41] || '').toString().trim() || '(blank)'}]`,
      answer: (row[43] || '').toString().trim(),
    });
    // EC-B
    entries.push({
      tag:    (row[46] || '').toString().trim(),
      work:   `[Problem # cited: ${(row[44] || '').toString().trim() || '(blank)'}, Value: ${(row[45] || '').toString().trim() || '(blank)'}]`,
      answer: (row[47] || '').toString().trim(),
    });

    // Skip if every entry is blank.
    if (entries.every(e => !e.tag && !e.work && !e.answer)) continue;

    let aiResult;
    try {
      aiResult = await scoreSubmission(RUBRIC, entries, anthropicKey);
    } catch (e) {
      console.warn(`row ${i + 1} score failed:`, e.message);
      continue;
    }

    const scoreRow = [];
    let total = 0;
    for (const item of aiResult.scores) {
      scoreRow.push(item.score);
      scoreRow.push(item.reason);
      total += parseFloat(item.score) || 0;
    }
    scoreRow.push(total.toFixed(1));
    scoreRow.push(new Date().toISOString());

    updates.push({ rowNum: i + 1, values: scoreRow });
    scored++;
  }

  for (const u of updates) {
    await writeRange(target.sheetId, accessToken, `${target.tab}!AY${u.rowNum}:CB${u.rowNum}`, [u.values]);
  }

  return scored;
}

async function writeRange(sheetId, accessToken, range, values) {
  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(range)}?valueInputOption=USER_ENTERED`,
    {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ values })
    }
  );
  if (!res.ok) throw new Error(`write failed: ${await res.text()}`);
}

async function scoreSubmission(rubric, entries, apiKey) {
  const rubricText = rubric.map((r, i) => `
Question ${r.q} — ${r.topic}
Question text: ${r.question}
Expected (1.0): ${r.correct}
Half credit (0.5) if: ${r.partial}
Student response:
  Tag: ${entries[i].tag || '(blank)'}
  Work: ${entries[i].work || '(none shown)'}
  Answer: ${entries[i].answer || '(blank)'}`).join('\n');

  const prompt = `You are grading a middle-school mixed-practice math worksheet. Each problem has TWO components a student fills in: a concept tag (from a fixed list) and a numeric answer (sometimes with units). Grade both:

- **1.0**: answer is correct AND tag is correct
- **0.5**: ONE of (answer correct, tag wrong) OR (answer wrong but tag right and work shows the right setup with just an arithmetic slip)
- **0**: both wrong, OR blank, OR "Not yet"

Be generous on minor phrasing/unit issues ("30" = "30%", "ms" = "milliseconds"). Tags are case-insensitive.

Valid tags: "unit rate", "linear decay", "linear function", "nonlinear function", "proportional scaling", "ratio".

${rubricText}

Respond with ONLY a JSON object on a single line, no markdown, no preamble. 14 scores total (Q1..Q12 then EC-A as q=13, EC-B as q=14):
{"scores":[{"q":1,"score":1,"reason":"..."},...,{"q":14,"score":0,"reason":"..."}]}`;

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 3000,
      messages: [{ role: 'user', content: prompt }]
    })
  });
  if (!res.ok) throw new Error(`anthropic ${res.status}: ${await res.text()}`);
  const data = await res.json();
  const text = data?.content?.[0]?.text || '';
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error('no JSON in reply: ' + text.slice(0, 200));
  let parsed;
  try { parsed = JSON.parse(match[0]); }
  catch (e) { throw new Error('bad JSON: ' + match[0].slice(0, 200)); }
  if (!Array.isArray(parsed.scores) || parsed.scores.length !== 14) {
    throw new Error('expected 14 scores, got ' + (parsed.scores?.length || 0));
  }
  parsed.scores.forEach(s => {
    s.score = Math.max(0, Math.min(1, parseFloat(s.score) || 0));
    if (s.score < 0.25) s.score = 0;
    else if (s.score < 0.75) s.score = 0.5;
    else s.score = 1;
    s.reason = ((s.reason || '') + '').slice(0, 200);
  });
  return parsed;
}

function respond(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}

async function getAccessToken(email, privateKey) {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claim = b64url(JSON.stringify({
    iss: email,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
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
