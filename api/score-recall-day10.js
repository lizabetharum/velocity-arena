// api/score-recall-day10.js
//
// Claude-graded scoring for the Day 10 Cold Recall Check.
//
// Sheet layout (tab "Cold Recall Check Day 10"):
//   A  Timestamp     | B  First Name | C  Last Initial | D  Team
//   E  Q1 Work       | F  Q1 Answer
//   G  Q2 Work       | H  Q2 Answer
//   I  Q3 Work       | J  Q3 Answer
//   K  Q4 Work       | L  Q4 Answer
//   M  Q5 Work       | N  Q5 Answer
//   O  Submitted At
//   P  Score (human-graded — managed by Anonymizer Score-column flow, do not touch)
//   Q  Q1_Score      | R  Q1_Reason     ← AI-graded columns start here
//   S  Q2_Score      | T  Q2_Reason
//   U  Q3_Score      | V  Q3_Reason
//   W  Q4_Score      | X  Q4_Reason
//   Y  Q5_Score      | Z  Q5_Reason
//   AA Total         | AB ScoredAt
//
// Required env vars:
//   ANTHROPIC_API_KEY
//   GOOGLE_SHEET_ID_RECALL_D10_NY1 / _NY2 / _NY3 / _TN
//   GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY

export const config = { runtime: 'edge' };

const SHEETS = {
  NY1: 'GOOGLE_SHEET_ID_RECALL_D10_NY1',
  NY2: 'GOOGLE_SHEET_ID_RECALL_D10_NY2',
  NY3: 'GOOGLE_SHEET_ID_RECALL_D10_NY3',
  TN:  'GOOGLE_SHEET_ID_RECALL_D10_TN',
};

const TAB = 'Cold Recall Check Day 10';

const RUBRIC = [
  {
    q: 1, topic: 'Percent change',
    question: 'Speed = 6 gives a motor power output of 30%. Speed = 9 gives 45%. What is the percent change in motor power output from Speed 6 to Speed 9?',
    correct: '50% increase ((45 − 30) ÷ 30 × 100 = 50%). Accept "+50%" or "increased by 50%".',
    partial: 'Calculated the absolute change (+15 or 15 percentage points) but didn\'t convert to a percent change, OR set up (45−30)/30 correctly but botched the arithmetic.'
  },
  {
    q: 2, topic: 'Slope-intercept form',
    question: 'Your Endurance decay graph has a slope of 2 and passes through the point (1, 3). Write the equation in slope-intercept form.',
    correct: 'y = 2x + 1 (substitute: 3 = 2(1) + b → b = 1). Accept equivalent forms like f(x) = 2x + 1.',
    partial: 'Showed correct setup 3 = 2(1) + b but final equation has a wrong intercept, OR wrote y = 2x + 3 (confused point with intercept).'
  },
  {
    q: 3, topic: 'Distance formula',
    question: 'During Match 2, your bot traveled from (2, 5) to (7, 17) on the arena grid. How far did it travel in a straight line?',
    correct: '13 units (√((7−2)² + (17−5)²) = √(25 + 144) = √169 = 13).',
    partial: 'Set up the distance formula but arithmetic error (e.g., 5² + 12² = 169 is right but called it √169 ≈ 13.something). OR got 13 with no work shown.'
  },
  {
    q: 4, topic: 'Solving linear equations',
    question: 'A bot\'s power follows the decay function P(t) = 100 − 12t. At what value of t does power reach zero?',
    correct: 't = 100/12 ≈ 8.33 (or 8⅓). Accept exact (25/3, 100/12, 8.33, 8.3, 8⅓) — full credit for any of these.',
    partial: 'Set up 0 = 100 − 12t correctly but solved wrong (e.g., t = 12 or t = 88).'
  },
  {
    q: 5, topic: 'Unit rate + scaling',
    question: 'Your bot covers 150 cm in 5 seconds. What is its speed in cm per second? At that same rate, how far does it travel in 8 seconds?',
    correct: 'Speed = 30 cm/s (150 ÷ 5). Distance in 8 s = 240 cm (30 × 8). Both numbers needed for full credit.',
    partial: 'Got one of the two (30 cm/s OR 240 cm) correct but the other wrong, OR got both numbers but omitted units.'
  },
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
    console.error('score-recall-day10 error:', err);
    return respond({ error: err.message || 'Scoring failed' }, 500);
  }
}

async function scoreSheet(target, accessToken, anthropicKey, budget) {
  const tabRange = `${target.tab}!A1:AB1000`;
  const readRes = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${target.sheetId}/values/${encodeURIComponent(tabRange)}`,
    { headers: { 'Authorization': `Bearer ${accessToken}` } }
  );
  if (!readRes.ok) throw new Error(`read failed: ${await readRes.text()}`);
  const data = await readRes.json();
  const rows = data.values || [];
  if (rows.length < 2) return 0;

  // Row 0 is headers. Ensure AI-scoring column headers exist at Q..AB (cols 17-28).
  // Col P (index 15) is the human Score column — never touch it.
  const header = rows[0];
  const SCORE_HEADERS = [
    'Q1_Score','Q1_Reason','Q2_Score','Q2_Reason',
    'Q3_Score','Q3_Reason','Q4_Score','Q4_Reason',
    'Q5_Score','Q5_Reason','Total','ScoredAt'
  ];
  const needsHeader = SCORE_HEADERS.some((h, i) => header[16 + i] !== h);
  if (needsHeader) await writeRange(target.sheetId, accessToken, `${target.tab}!Q1:AB1`, [SCORE_HEADERS]);

  let scored = 0;
  const updates = [];

  for (let i = 1; i < rows.length; i++) {
    if (scored >= budget) break;
    const row = rows[i];
    // row layout:
    //   row[0]    Timestamp
    //   row[1]    First Name
    //   row[2]    Last Initial
    //   row[3]    Team
    //   row[4+2q] Q{q+1} Work
    //   row[5+2q] Q{q+1} Answer  (q = 0..4)
    //   row[14]   Submitted At
    //   row[15]   human Score (leave alone)
    //   row[16]   Q1_Score (AI)
    //   row[27]   ScoredAt (AI)
    const alreadyScored = row[16] !== undefined && row[16] !== '' && row[27] !== undefined && row[27] !== '';
    if (alreadyScored) continue;

    const submittedAt = (row[14] || '').toString().trim();
    if (!submittedAt) continue;

    if (!row[1] || !row[1].toString().trim()) continue;

    const answers = [];
    for (let q = 0; q < 5; q++) {
      const work   = (row[4 + q * 2] || '').toString().trim();
      const answer = (row[5 + q * 2] || '').toString().trim();
      if (!work && !answer) {
        answers.push('(blank)');
      } else {
        answers.push(`Work: ${work || '(none shown)'}\nAnswer: ${answer || '(blank)'}`);
      }
    }
    if (answers.every(a => a === '(blank)')) continue;

    let aiResult;
    try {
      aiResult = await scoreSubmission(RUBRIC, answers, anthropicKey);
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
    await writeRange(target.sheetId, accessToken, `${target.tab}!Q${u.rowNum}:AB${u.rowNum}`, [u.values]);
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

async function scoreSubmission(rubric, answers, apiKey) {
  const rubricText = rubric.map((r, i) => `
Question ${r.q} — ${r.topic}
Question text: ${r.question}
Expected answer (1.0): ${r.correct}
Half credit (0.5) if: ${r.partial}
Student response:
${answers[i]}`).join('\n');

  const prompt = `You are grading a middle-school math cold recall check given on Day 10 of a robotics camp — students answer from memory without notes. Be fair and literal, generous on minor phrasing/unit issues. Blank or "(blank)" answers must get 0.

For each question, return exactly 1.0 (correct), 0.5 (partial per criteria), or 0 (incorrect/blank), plus a one-sentence rationale under 120 characters.

${rubricText}

Respond with ONLY a JSON object on a single line, no markdown, no preamble:
{"scores":[{"q":1,"score":1,"reason":"..."},...,{"q":5,"score":0,"reason":"..."}]}`;

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1200,
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
  if (!Array.isArray(parsed.scores) || parsed.scores.length !== 5) {
    throw new Error('expected 5 scores, got ' + (parsed.scores?.length || 0));
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
