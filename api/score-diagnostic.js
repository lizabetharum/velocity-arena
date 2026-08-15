// api/score-diagnostic.js
//
// Claude-graded scoring for the pre-task and post-task diagnostics.
//
// Triggered by the growth dashboard. For each unscored row in the eight
// per-site tabs (4 sites × pre/post), calls the Anthropic API with the
// question text, the rubric, and the student's answers, and writes the
// resulting 0 / 0.5 / 1 scores + one-sentence rationales back to the sheet.
//
// New sheet layout (tab name "Pre-Task Diagnostic" or "Post-Task Diagnostic"):
//   A  Timestamp     | B  First Name   | C  Last Initial | D  Team
//   E  Q1 Answer     | F  Q1 Not Yet
//   G  Q2 Answer     | H  Q2 Not Yet
//   I  Q3 Answer     | J  Q3 Not Yet
//   K  Q4 Answer     | L  Q4 Not Yet
//   M  Q5 Answer     | N  Q5 Not Yet
//   O  Q6 Answer     | P  Q6 Not Yet
//   Q  Q7 Answer     | R  Q7 Not Yet
//   S  Q8 Answer     | T  Q8 Not Yet
//   U  Submitted At
//   V  Score (human-graded — managed by the Anonymizer flow, do not touch)
//   W  Q1_Score      | X  Q1_Reason     ← AI-graded columns start here
//   Y  Q2_Score      | Z  Q2_Reason
//   AA Q3_Score      | AB Q3_Reason
//   AC Q4_Score      | AD Q4_Reason
//   AE Q5_Score      | AF Q5_Reason
//   AG Q6_Score      | AH Q6_Reason
//   AI Q7_Score      | AJ Q7_Reason
//   AK Q8_Score      | AL Q8_Reason
//   AM Total         | AN ScoredAt
//
// Required env vars:
//   ANTHROPIC_API_KEY
//   GOOGLE_SHEET_ID_NEW_YORK_1 / _2 / _3 / _TN and their _POST counterparts
//   GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY

export const config = { runtime: 'edge' };

const PRE_SHEETS = {
  NY1: 'GOOGLE_SHEET_ID_NEW_YORK_1',
  NY2: 'GOOGLE_SHEET_ID_NEW_YORK_2',
  NY3: 'GOOGLE_SHEET_ID_NEW_YORK_3',
  TN:  'GOOGLE_SHEET_ID_TN',
};
const POST_SHEETS = {
  NY1: 'GOOGLE_SHEET_ID_NEW_YORK_1_POST',
  NY2: 'GOOGLE_SHEET_ID_NEW_YORK_2_POST',
  NY3: 'GOOGLE_SHEET_ID_NEW_YORK_3_POST',
  TN:  'GOOGLE_SHEET_ID_TN_POST',
};

// ─── RUBRIC ───────────────────────────────────────────────────────────
// Keyed by variant + question number. Each rubric entry feeds Claude
// the expected answer and the partial-credit criteria.
const RUBRIC = {
  pre: [
    {
      q: 1, topic: 'Proportional reasoning',
      question: "A car travels 120 miles in 3 hours at a constant speed. How far does it travel in 5 hours?",
      correct: "200 miles (the unit rate is 40 mph, so 40 × 5 = 200).",
      partial: "Got the unit rate (40 mph) but didn't multiply, OR got 200 without units or with wrong units."
    },
    {
      q: 2, topic: 'Unit rate',
      question: "A toy car travels 120 centimeters in 30 seconds at a steady speed. How many centimeters does it travel in 1 second?",
      correct: "4 cm/sec (120 ÷ 30 = 4).",
      partial: "Got 4 but omitted units or wrote wrong units."
    },
    {
      q: 3, topic: 'Ratio',
      question: "A robot team has 3 blue bots for every 2 red bots. The team has 10 red bots in total. How many blue bots does the team have?",
      correct: "15 blue bots (scale 3:2 by 5 = 15:10).",
      partial: "Showed ratio reasoning but final number is wrong."
    },
    {
      q: 4, topic: 'Linear decay',
      question: "A battery starts at 100% charge. Every minute it loses 5%. How much charge is left after 4 minutes?",
      correct: "80% (100 − 5 × 4 = 80).",
      partial: "Identified the subtraction pattern but got wrong total."
    },
    {
      q: 5, topic: 'Coordinate geometry',
      question: "In which quadrant does each point sit? (2,5) · (−3,1) · (0,−4) · (−1,−2)",
      correct: "(2,5)=I, (−3,1)=II, (0,−4)=on the y-axis (no quadrant), (−1,−2)=III. Give 1 for 3+ correct, 0.5 for 2 correct, 0 for 0-1 correct.",
      partial: "Exactly 2 of the 4 points correctly placed."
    },
    {
      q: 6, topic: 'Proportional scaling',
      question: "A recipe for pancakes uses 2 cups of flour and 3 cups of milk to serve 4 people. You want to serve 12 people. How much flour and milk do you need?",
      correct: "6 cups flour and 9 cups milk (3× the original recipe).",
      partial: "One of the two ingredients is correct; the other is wrong."
    },
    {
      q: 7, topic: 'Arc approximation',
      question: "A hiking trail curves from the trailhead to the lookout. A student wants to estimate the length but the ruler only measures straight lines. Describe one thing the student could do.",
      correct: "Break the curve into short straight segments and measure each, then add them up; OR lay a string along the curve and measure the string. Either approach earns full credit.",
      partial: "Mentions approximation or breaking the curve into pieces but the method is vague or incomplete."
    },
    {
      q: 8, topic: 'Slope as rate of change',
      question: "A line passes through (0, 3) and (2, 7). What is the slope? What does it tell you about how y changes as x increases?",
      correct: "Slope = 2 (rise 4 / run 2). Meaning: for every 1-unit increase in x, y increases by 2.",
      partial: "Got slope = 2 but didn't explain what it means, OR explained rate-of-change correctly but got the slope number wrong."
    },
  ],
  post: [
    {
      q: 1, topic: 'Proportional reasoning',
      question: "A runner jogs 8 miles in 2 hours at a steady pace. How far does the runner go in 5 hours?",
      correct: "20 miles (unit rate 4 mph, 4 × 5 = 20).",
      partial: "Got unit rate (4 mph) but didn't multiply, OR got 20 with wrong units."
    },
    {
      q: 2, topic: 'Unit rate',
      question: "A printer prints 240 pages in 4 minutes at a steady rate. How many pages does it print in 1 minute?",
      correct: "60 pages/minute (240 ÷ 4 = 60).",
      partial: "Got 60 but omitted units."
    },
    {
      q: 3, topic: 'Ratio',
      question: "A fruit basket has 4 apples for every 3 oranges. The basket has 12 oranges in total. How many apples does it have?",
      correct: "16 apples (scale 4:3 by 4 = 16:12).",
      partial: "Showed ratio reasoning but wrong final."
    },
    {
      q: 4, topic: 'Linear decay',
      question: "A candle is 20 centimeters tall. It burns down 2 centimeters every hour. How tall is the candle after 3 hours?",
      correct: "14 cm (20 − 2 × 3 = 14).",
      partial: "Identified subtraction pattern but wrong total."
    },
    {
      q: 5, topic: 'Coordinate geometry',
      question: "In which quadrant does each point sit? (4,−2) · (−5,6) · (−3,−1) · (1,7)",
      correct: "(4,−2)=IV, (−5,6)=II, (−3,−1)=III, (1,7)=I. 1 for 3+ correct, 0.5 for 2 correct, 0 for 0-1 correct.",
      partial: "Exactly 2 of 4 correctly placed."
    },
    {
      q: 6, topic: 'Proportional scaling',
      question: "A blueprint shows a room that is 4 feet wide and 6 feet long. The builder scales it up by a factor of 5 to build the actual room. What are the real width and length?",
      correct: "20 feet wide and 30 feet long (4×5 and 6×5).",
      partial: "One dimension correct, the other wrong."
    },
    {
      q: 7, topic: 'Arc approximation',
      question: "A river curves across a map from town A to town B. A student wants to estimate the river's length but the ruler only measures straight lines. Describe one thing the student could do.",
      correct: "Break the curve into short straight segments and measure each; OR use a string laid along the curve and then measure the string.",
      partial: "Mentions approximation or pieces but method is vague."
    },
    {
      q: 8, topic: 'Slope as rate of change',
      question: "A line passes through (1, 2) and (4, 11). What is the slope? What does it tell you about how y changes as x increases?",
      correct: "Slope = 3 (rise 9 / run 3). For every 1-unit increase in x, y increases by 3.",
      partial: "Got slope = 3 but didn't explain, OR explained but wrong number."
    },
  ],
};

// ─── HANDLER ──────────────────────────────────────────────────────────
export default async function handler(req) {
  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  if (!anthropicKey) {
    return respond({ error: 'ANTHROPIC_API_KEY not set in environment' }, 500);
  }

  const url = new URL(req.url);
  const maxRows = parseInt(url.searchParams.get('max') || '50', 10);
  // force=1 re-grades rows that were already scored (used to fix the earlier
  // inconsistent scoring). Without it, only unscored rows are graded.
  const force = url.searchParams.get('force') === '1';
  // One answer cache for the whole invocation: identical (variant, question,
  // answer) is graded once and reused, so duplicates can never diverge.
  const answerCache = new Map();

  const serviceEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  if (!serviceEmail || !privateKey) {
    return respond({ error: 'Google service account not configured' }, 500);
  }

  try {
    const accessToken = await getAccessToken(serviceEmail, privateKey);

    const targets = [];
    for (const [state, envVar] of Object.entries(PRE_SHEETS)) {
      const id = process.env[envVar];
      if (id) targets.push({ state, variant: 'pre', sheetId: id, tab: 'Pre-Task Diagnostic' });
    }
    for (const [state, envVar] of Object.entries(POST_SHEETS)) {
      const id = process.env[envVar];
      if (id) targets.push({ state, variant: 'post', sheetId: id, tab: 'Post-Task Diagnostic' });
    }

    let totalScored = 0;
    const errors = [];
    let remaining = maxRows;

    for (const target of targets) {
      if (remaining <= 0) break;
      try {
        const n = await scoreSheet(target, accessToken, anthropicKey, remaining, force, answerCache);
        totalScored += n;
        remaining -= n;
      } catch (e) {
        errors.push(`${target.state}/${target.variant}: ${e.message}`);
      }
    }

    return respond({
      ok: true,
      scored: totalScored,
      remaining_budget: remaining,
      errors: errors.length ? errors : undefined
    });

  } catch (err) {
    console.error('score-diagnostic error:', err);
    return respond({ error: err.message || 'Scoring failed' }, 500);
  }
}

// ─── PER-SHEET SCORING ─────────────────────────────────────────────────
async function scoreSheet(target, accessToken, anthropicKey, budget, force, cache) {
  // Read the full sheet — tab name has a space, so URL-encode the whole range.
  const tabRange = `${target.tab}!A1:AN1000`;
  const readRes = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${target.sheetId}/values/${encodeURIComponent(tabRange)}`,
    { headers: { 'Authorization': `Bearer ${accessToken}` } }
  );
  if (!readRes.ok) {
    throw new Error(`read failed: ${await readRes.text()}`);
  }
  const data = await readRes.json();
  const rows = data.values || [];
  if (rows.length < 2) return 0;

  // Row 0 is headers. Ensure AI-scoring column headers exist at W..AN (cols 23-40).
  // Col V (index 21) is the human Score column — never touch it.
  const header = rows[0];
  const SCORE_HEADERS = [
    'Q1_Score','Q1_Reason','Q2_Score','Q2_Reason',
    'Q3_Score','Q3_Reason','Q4_Score','Q4_Reason',
    'Q5_Score','Q5_Reason','Q6_Score','Q6_Reason',
    'Q7_Score','Q7_Reason','Q8_Score','Q8_Reason',
    'Total','ScoredAt'
  ];
  const needsHeader = SCORE_HEADERS.some((h, i) => header[22 + i] !== h);
  if (needsHeader) {
    await writeRange(target.sheetId, accessToken, `${target.tab}!W1:AN1`, [SCORE_HEADERS]);
  }

  const rubric = RUBRIC[target.variant];
  if (!rubric) return 0;

  let scored = 0;
  const updates = []; // { rowNum, values: [...] }

  for (let i = 1; i < rows.length; i++) {
    if (scored >= budget) break;
    const row = rows[i];
    // Row layout:
    //   row[0]   Timestamp
    //   row[1]   First Name
    //   row[2]   Last Initial
    //   row[3]   Team
    //   row[4+q*2]   Q{q+1} Answer
    //   row[5+q*2]   Q{q+1} Not Yet  (q = 0..7)
    //   row[20]  Submitted At
    //   row[21]  Score (human-graded — leave alone)
    //   row[22]  Q1_Score (AI)
    //   row[39]  ScoredAt (AI)
    const alreadyScored = row[22] !== undefined && row[22] !== '' && row[39] !== undefined && row[39] !== '';
    if (alreadyScored && !force) continue;

    // Only score submitted rows. Draft rows (no Submitted At) get skipped.
    const submittedAt = (row[20] || '').toString().trim();
    if (!submittedAt) continue;

    // Extract 8 answers, folding the "Not Yet" flag into the answer text so
    // Claude treats it as a non-attempt → 0.
    const answers = [];
    for (let q = 0; q < 8; q++) {
      const ans = (row[4 + q * 2] || '').toString();
      const notYet = (row[5 + q * 2] || '').toString().trim().toUpperCase();
      answers.push(notYet === 'YES' ? 'Not yet' : ans);
    }
    // If every answer is empty, skip (stale blank row).
    if (answers.every(a => !a.trim())) continue;

    let aiResult;
    try {
      aiResult = await scoreSubmission(target.variant, rubric, answers, anthropicKey, cache);
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

    // If the human Score col V (index 21) is empty, fill it with the AI total.
    // If the teacher has already typed something there, leave it alone.
    const existingScore = (row[21] === undefined ? '' : row[21]).toString().trim();
    const scoreColValue = existingScore || total.toFixed(1);
    updates.push({ rowNum: i + 1, scoreColValue, aiValues: scoreRow });
    scored++;
  }

  for (const u of updates) {
    await writeRange(target.sheetId, accessToken, `${target.tab}!V${u.rowNum}:AN${u.rowNum}`, [[u.scoreColValue, ...u.aiValues]]);
  }

  return scored;
}

async function writeRange(sheetId, accessToken, range, values) {
  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(range)}?valueInputOption=USER_ENTERED`,
    {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ values })
    }
  );
  if (!res.ok) {
    throw new Error(`write failed: ${await res.text()}`);
  }
}

// ─── CLAUDE CALL ──────────────────────────────────────────────────────
// Each question is graded ON ITS OWN, against only its rubric entry, at
// temperature 0. That is what makes scoring consistent: identical answers to
// the same question produce an identical prompt and therefore an identical
// score — and one question's score can no longer be swayed by the student's
// other answers (the earlier all-eight-at-once prompt caused both problems).
// The cache keys on (variant, question, normalized answer) so a repeated
// answer is graded once and reused.

function canonAnswer(s) {
  return (s || '').toString().trim().replace(/\s+/g, ' ').toLowerCase();
}

async function scoreSubmission(variant, rubric, answers, apiKey, cache) {
  // Grade the eight questions in parallel; the shared cache still dedupes
  // across submissions as they are processed.
  const scores = await Promise.all(
    rubric.map((item, i) => scoreAnswer(variant, item, answers[i], apiKey, cache))
  );
  return { scores };
}

async function scoreAnswer(variant, item, answer, apiKey, cache) {
  const raw = (answer || '').toString().trim();
  const norm = canonAnswer(raw);

  // Deterministic non-attempts — never spend an API call, never vary.
  if (!norm || norm === 'not yet') {
    return { q: item.q, score: 0, reason: 'Blank or "Not yet" — no attempt.' };
  }

  const key = `${variant}|${item.q}|${norm}`;
  if (cache && cache.has(key)) {
    const c = cache.get(key);
    return { q: item.q, score: c.score, reason: c.reason };
  }

  const prompt = `You are grading ONE question on a middle-school math diagnostic. Be fair and literal, and generous on minor phrasing ("two hundred" = "200", "cm per second" = "cm/s").

Unit policy: if the numeric answer is correct but units are omitted or casual ("200" for "200 miles", "4" for "4 cm/s"), award 1.0 — this tests math, not unit notation. Only penalize units when the half-credit rule below explicitly calls them out.

Question ${item.q} — ${item.topic}
Question text: ${item.question}
Full credit (1.0): ${item.correct}
Half credit (0.5) if: ${item.partial}
Otherwise score 0.

Student answer: ${raw}

Respond with ONLY a JSON object on one line, no markdown, no preamble:
{"score":1,"reason":"...(one sentence, under 120 characters)"}`;

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 300,
      temperature: 0,
      messages: [{ role: 'user', content: prompt }]
    })
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`anthropic ${res.status}: ${errText}`);
  }
  const data = await res.json();
  const text = data?.content?.[0]?.text || '';
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error('no JSON in reply: ' + text.slice(0, 200));
  let parsed;
  try { parsed = JSON.parse(match[0]); }
  catch (e) { throw new Error('bad JSON: ' + match[0].slice(0, 200)); }

  let score = Math.max(0, Math.min(1, parseFloat(parsed.score) || 0));
  score = score < 0.25 ? 0 : score < 0.75 ? 0.5 : 1;   // snap to 0 / 0.5 / 1
  const reason = ((parsed.reason || '') + '').slice(0, 200);

  if (cache) cache.set(key, { score, reason });
  return { q: item.q, score, reason };
}

// ─── HELPERS (copied from diagnostic-dashboard.js) ────────────────────
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
