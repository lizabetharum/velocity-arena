// api/score-recall-day5.js
//
// Claude-graded scoring for the Day 5 Recall Check.
//
// Reads each per-site Day 5 spreadsheet (4 sites), grades any unscored rows,
// writes back per-question scores + rationales. Mirrors the structure of
// score-diagnostic.js so the dashboard front-end can reuse the same shape.
//
// Sheet layout (tab "Recall Check Day 5"):
//   A  Timestamp     | B  First Name | C  Last Initial | D  Team
//   E  Q1 Work       | F  Q1 Answer
//   G  Q2 Work       | H  Q2 Answer
//   I  Q3 Work       | J  Q3 Answer
//   K  Q4 Work       | L  Q4 Answer
//   M  Q5 Work       | N  Q5 Answer
//   O  Score (human-graded — managed by the Anonymizer Score-column flow, do not touch)
//   P  Q1_Score      | Q  Q1_Reason     ← AI-graded columns start here
//   R  Q2_Score      | S  Q2_Reason
//   T  Q3_Score      | U  Q3_Reason
//   V  Q4_Score      | W  Q4_Reason
//   X  Q5_Score      | Y  Q5_Reason
//   Z  Total         | AA ScoredAt
//
// Required env vars:
//   ANTHROPIC_API_KEY
//   GOOGLE_SHEET_ID_RECALL_D5_NY1 / _NY2 / _NY3 / _TN
//   GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY

export const config = { runtime: 'edge' };

const SHEETS = {
  NY1: 'GOOGLE_SHEET_ID_RECALL_D5_NY1',
  NY2: 'GOOGLE_SHEET_ID_RECALL_D5_NY2',
  NY3: 'GOOGLE_SHEET_ID_RECALL_D5_NY3',
  TN:  'GOOGLE_SHEET_ID_RECALL_D5_TN',
};

const TAB = 'Recall Check Day 5';

const RUBRIC = [
  {
    q: 1, topic: 'Slope from two points',
    question: 'A line passes through (0, 4) and (3, 10). What is the slope?',
    correct: 'Slope = 2 (rise 6 / run 3 = 2).',
    partial: 'Showed the rise/run setup (e.g., (10-4)/(3-0)) but arithmetic is wrong, OR wrote 6/3 without simplifying.'
  },
  {
    q: 2, topic: 'Proportional reasoning',
    question: 'A recipe scales proportionally: 3 cups of flour makes 9 servings. How many cups are needed for 15 servings?',
    correct: '5 cups (unit rate is 1/3 cup per serving; 15 × 1/3 = 5).',
    partial: 'Got the unit rate 1/3 cup/serving (or equivalent reasoning) but failed to multiply by 15, OR wrote 5 with no units.'
  },
  {
    q: 3, topic: 'Percent of a quantity',
    question: 'A car drives at 75% of its maximum speed. The maximum speed is 120 km/h. What is the car\'s actual speed?',
    correct: '90 km/h (0.75 × 120 = 90).',
    partial: 'Got 90 without units, OR set up 0.75 × 120 correctly but arithmetic is wrong.'
  },
  {
    q: 4, topic: 'Percent of a whole',
    question: 'A 20-point budget assigns 7 points to one category and 6 points to another. What percentage of the total budget is still unallocated?',
    correct: '35% (20 − 7 − 6 = 7 remaining; 7/20 = 0.35 = 35%).',
    partial: 'Computed 7 remaining points but didn\'t convert to a percent, OR computed the wrong percent because of an arithmetic slip.'
  },
  {
    q: 5, topic: 'Distance formula',
    question: 'Calculate the distance from (1, 1) to (4, 5). Show every step.',
    correct: '5 units (√((4-1)² + (5-1)²) = √(9 + 16) = √25 = 5).',
    partial: 'Set up the distance formula correctly but made an arithmetic error, OR got 5 with no work shown.'
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
    console.error('score-recall-day5 error:', err);
    return respond({ error: err.message || 'Scoring failed' }, 500);
  }
}

async function scoreSheet(target, accessToken, anthropicKey, budget) {
  const tabRange = `${target.tab}!A1:AA1000`;
  const readRes = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${target.sheetId}/values/${encodeURIComponent(tabRange)}`,
    { headers: { 'Authorization': `Bearer ${accessToken}` } }
  );
  if (!readRes.ok) throw new Error(`read failed: ${await readRes.text()}`);
  const data = await readRes.json();
  const rows = data.values || [];
  if (rows.length < 2) return 0;

  // Row 0 is headers. Ensure AI-scoring column headers exist at P..AA (cols 16-27).
  // Col O (index 14) is the human Score column — never touch it.
  const header = rows[0];
  const SCORE_HEADERS = [
    'Q1_Score','Q1_Reason','Q2_Score','Q2_Reason',
    'Q3_Score','Q3_Reason','Q4_Score','Q4_Reason',
    'Q5_Score','Q5_Reason','Total','ScoredAt'
  ];
  const needsHeader = SCORE_HEADERS.some((h, i) => header[15 + i] !== h);
  if (needsHeader) await writeRange(target.sheetId, accessToken, `${target.tab}!P1:AA1`, [SCORE_HEADERS]);

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
    //   row[14]   human Score    (leave alone)
    //   row[15]   Q1_Score (AI)
    //   row[26]   ScoredAt (AI)
    const alreadyScored = row[15] !== undefined && row[15] !== '' && row[26] !== undefined && row[26] !== '';
    if (alreadyScored) continue;

    if (!row[1] || !row[1].toString().trim()) continue;

    // Stitch together "Work: ... Answer: ..." per question so Claude sees both.
    const answers = [];
    for (let q = 0; q < 5; q++) {
      const work   = (row[4 + q * 2]     || '').toString().trim();
      const answer = (row[5 + q * 2]     || '').toString().trim();
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
    await writeRange(target.sheetId, accessToken, `${target.tab}!P${u.rowNum}:AA${u.rowNum}`, [u.values]);
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

  const prompt = `You are grading a middle-school math recall check. Students provided both "work" and "answer" — base your judgment on the answer's correctness, using the work to award partial credit when the answer is wrong but reasoning is on track.

Be fair and literal. Generous on minor phrasing/unit issues ("ninety" = "90", "km/h" = "kph"). Blank or "(blank)" answers must get 0.

For each question, return exactly 1.0 (correct), 0.5 (partial per criteria), or 0 (incorrect/blank), plus a one-sentence rationale under 120 characters.

${rubricText}

Respond with ONLY a JSON object on a single line, no markdown, no preamble:
{"scores":[{"q":1,"score":1,"reason":"..."},{"q":2,"score":0.5,"reason":"..."},...,{"q":5,"score":0,"reason":"..."}]}`;

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
