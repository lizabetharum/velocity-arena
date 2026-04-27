#!/usr/bin/env node
// Match each quick-card URL to the right activity in days.js by parsing the
// filename slug and fuzzy-matching against activity names. Dry-run by default;
// pass --apply to actually write changes back to days.js.

const fs = require('fs');
const path = require('path');

const APPLY = process.argv.includes('--apply');
const DAYS_PATH = path.join(__dirname, '..', 'public', 'days.js');

// Card URLs the user provided
const CARDS = `
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day02-03-endurance-allocation.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day02-04-endurance-stat-challenge.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day02-05-program-endurance.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day02-06-role-rotation.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day02-07-bot-naming-ceremony.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day02-08-open-lab.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day03-01-human-robot.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day03-02-distance-time-graphs.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day03-03-arc-approximation.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day04-01-finger-speed-sums.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day04-02-power-allocation.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day04-03-power-stat-challenge.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day04-04-scoop-build-ratio.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day05-01-simon-says.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day05-02-two-formula-warmup.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day05-03-budget-constraint.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day05-04-cold-recall.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day05-05-match-format-briefing.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day05-06-simulation-matches.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day05-07-open-lab-closing.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day06-01-equation-relay-race.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day06-02-interleaved-problem-set.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day06-03-field-geometry-approach.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day06-04-launch-sequence-programming.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day06-05-launch-showcase.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day06-06-open-lab-verification.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day07-01-trashketball.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day07-02-endurance-decay.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day07-03-pre-match-prediction.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day07-04-match-day-1.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day07-05-leaderboard-reveal-open-lab.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day08-01-scavenger-hunt.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day08-02-matching-situations.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day08-03-match-day-2.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day08-04-rivalry-cards.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day09-01-rivalry-card-response.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day09-02-formula-relay.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day09-03-match-day-3.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day09-04-open-lab-post-match.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day10-01-best-match-gallery-walk.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day10-02-distance-formula.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day10-03-cold-recall-check.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day10-04-season1-final-round.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day10-05-open-lab-season2-planning.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day11-01-human-number-line.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day11-02-commissioner-proposal-prep.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day11-03-underdog-mechanic-reallocation.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day11-04-practice-matches.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day11-05-open-lab-proposal-refinement.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day12-01-lobby-commissioners.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day12-02-final-proposal-verification.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day12-03-commissioners-meeting.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day12-04-open-lab-s2-verification.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day13-01-prediction-market.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day13-02-linear-equations.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day13-03-s2-match-day-1.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day13-04-open-lab-residual-calibration.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day14-01-stat-auction-prediction.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day14-02-percent-change-s1-s2.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day14-03-s2-match-day-2.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day14-04-open-lab-equation-loadout.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day15-01-bot-lore-gallery-walk.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day15-02-scouting-report-math-foundation.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day15-03-match-day-3.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day15-04-open-lab-scouting-identity.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day16-01-know-your-opponent.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day16-02-scouting-report-sections-3-4.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day16-03-commissioners-meeting-pt1.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day16-04-open-lab-championship-loadout.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day17-01-cold-retrieval-scouting-annotation.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day17-02-pitch-rehearsal-teach-math.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day17-03-commissioners-pt2-bracket-reveal.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day17-04-what-if-analysis.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day17-05-open-lab-pitch-bot-prep.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day18-01-pre-championship-ritual.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day18-02-championship-rounds-1-2.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day18-03-championship-semis-final.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day18-04-open-lab-reflection.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day19-01-expert-setup-exhibition-prep.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day19-02-community-exhibition-teaching.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day19-03-extended-exhibition-voting.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day19-04-scouting-verbal-check-vote.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day19-05-open-lab-final-debrief.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day20-01-walk-the-wall-final-gallery.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day20-02-post-task-diagnostic.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day20-03-awards-ceremony.html
https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day20-04-final-free-time-closing.html
`.trim().split('\n').map(s => s.trim()).filter(Boolean);

// Load days.js by reading the file and evaling its body
const daysText = fs.readFileSync(DAYS_PATH, 'utf8');
let DAYS;
{
  const sandbox = {};
  const fn = new Function('var module={exports:{}}; ' + daysText + '; return DAYS;');
  DAYS = fn();
}

function normalize(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(s) {
  return normalize(s).split(' ').filter(Boolean);
}

// Score how well a card slug matches an activity name. Higher = better.
function score(slug, activityName) {
  const slugTokens = tokenize(slug);
  const nameTokens = tokenize(activityName);
  if (slugTokens.length === 0 || nameTokens.length === 0) return 0;
  const nameSet = new Set(nameTokens);
  let hits = 0;
  for (const t of slugTokens) if (nameSet.has(t)) hits++;
  // Reward fraction-of-slug-words-found, plus bonus when most name words are in slug too
  const slugCoverage = hits / slugTokens.length;
  const nameSlugSet = new Set(slugTokens);
  let nameHits = 0;
  for (const t of nameTokens) if (nameSlugSet.has(t)) nameHits++;
  const nameCoverage = nameHits / nameTokens.length;
  return slugCoverage * 2 + nameCoverage;
}

// Manual overrides keyed by `dayNN-NN-slug` — for ambiguous slug→activity-name
// fuzzy matches the auto-matcher gets wrong. Value is the exact activity name.
const OVERRIDES = {
  'day12-03-commissioners-meeting': "Commissioner's Meeting: Formal Presentations + Vote",
};

const cardRe = /activity-card-day(\d{2})-(\d{2})-(.+)\.html$/;
const matches = []; // {url, day, idxHint, slug, activityName, scoreVal, alreadyHas}
const unmatched = [];

for (const url of CARDS) {
  const m = url.match(cardRe);
  if (!m) { unmatched.push({ url, reason: 'unparseable filename' }); continue; }
  const dayNum = parseInt(m[1], 10);
  const idxHint = parseInt(m[2], 10);
  const slug = m[3];

  const day = DAYS.find(d => d.day === dayNum);
  if (!day) { unmatched.push({ url, reason: `no day ${dayNum} in days.js` }); continue; }

  const acts = day.activities || [];

  // Check manual override first
  const overrideKey = `day${m[1]}-${m[2]}-${slug}`;
  if (OVERRIDES[overrideKey]) {
    const i = acts.findIndex(a => a.name === OVERRIDES[overrideKey]);
    if (i === -1) {
      unmatched.push({ url, reason: `override target "${OVERRIDES[overrideKey]}" not found in day ${dayNum}` });
      continue;
    }
    matches.push({
      url, day: dayNum, idxHint, slug,
      activityName: acts[i].name, activityIdx: i, scoreVal: 999, alreadyHas: !!acts[i].quickCard,
    });
    continue;
  }

  // Score each activity
  const scored = acts
    .map((a, i) => ({ a, i, s: score(slug, a.name) }))
    .sort((x, y) => y.s - x.s);

  if (scored.length === 0 || scored[0].s < 0.3) {
    unmatched.push({ url, reason: `no good match in day ${dayNum} (best score ${scored[0]?.s.toFixed(2) || '0'})`, slug });
    continue;
  }

  const best = scored[0];
  matches.push({
    url,
    day: dayNum,
    idxHint,
    slug,
    activityName: best.a.name,
    activityIdx: best.i,
    scoreVal: best.s,
    alreadyHas: !!best.a.quickCard,
  });
}

// Detect duplicate matches (two cards pointing to same activity); auto-resolve
// by keeping the highest-score match per activity, demoting the rest to
// unmatched so a human can place them.
const byKey = {};
for (const m of matches) {
  const k = `${m.day}::${m.activityIdx}`;
  byKey[k] = byKey[k] || [];
  byKey[k].push(m);
}
const collisions = Object.values(byKey).filter(arr => arr.length > 1);

const winners = new Set();
for (const arr of Object.values(byKey)) {
  arr.sort((a, b) => b.scoreVal - a.scoreVal);
  winners.add(arr[0]);
  for (const loser of arr.slice(1)) {
    unmatched.push({
      url: loser.url,
      reason: `collided with "${arr[0].slug}" on day ${loser.day} activity "${loser.activityName}"; needs manual placement`,
      slug: loser.slug,
    });
  }
}
const filteredMatches = matches.filter(m => winners.has(m));
matches.length = 0;
matches.push(...filteredMatches);

console.log(`\n=== MATCHED (${matches.length}) ===`);
for (const m of matches) {
  const flag = m.alreadyHas ? ' [ALREADY HAS quickCard]' : '';
  const lowScore = m.scoreVal < 0.8 ? ` ⚠ score=${m.scoreVal.toFixed(2)}` : '';
  console.log(`  Day ${m.day} #${m.idxHint} [${m.slug}]`);
  console.log(`    -> "${m.activityName}"${flag}${lowScore}`);
}

if (unmatched.length) {
  console.log(`\n=== UNMATCHED (${unmatched.length}) ===`);
  for (const u of unmatched) {
    console.log(`  ${u.reason}: ${u.url}`);
  }
}

if (collisions.length) {
  console.log(`\n=== COLLISIONS — multiple cards mapped to same activity (${collisions.length}) ===`);
  for (const arr of collisions) {
    console.log(`  Day ${arr[0].day} activity "${arr[0].activityName}":`);
    for (const m of arr) console.log(`    - ${m.slug} (score ${m.scoreVal.toFixed(2)})`);
  }
}

if (!APPLY) {
  console.log(`\nDry-run only. Re-run with --apply to write changes to days.js.`);
  process.exit(0);
}

// ---------- APPLY ----------
// Text-level inserts: anchor on each activity's "name" within the right day's
// section, walk forward to find the activity object's closing brace, then
// insert "quickCard" before it. Process in document order so earlier inserts
// don't shift positions for later searches.

let text = daysText;
let applied = 0;

const sortedMatches = matches.slice().sort((a, b) =>
  a.day !== b.day ? a.day - b.day : a.activityIdx - b.activityIdx
);

for (const m of sortedMatches) {
  if (m.alreadyHas) continue;

  // Scope the name search to the right day's section. Anchor on `"day": N,`
  // which is unique per day, then bound the search by the next `"day": N+1,`.
  const dayAnchor = `"day": ${m.day},`;
  const dayStart = text.indexOf(dayAnchor);
  if (dayStart === -1) {
    console.warn(`  could not locate ${dayAnchor} — skipping ${m.activityName}`);
    continue;
  }
  const nextDayAnchor = `"day": ${m.day + 1},`;
  const dayEnd = text.indexOf(nextDayAnchor, dayStart);
  const dayBound = dayEnd === -1 ? text.length : dayEnd;

  const namePart = `"name": ${JSON.stringify(m.activityName)}`;
  const nameIdx = text.indexOf(namePart, dayStart);
  if (nameIdx === -1 || nameIdx >= dayBound) {
    console.warn(`  could not locate ${namePart} within day ${m.day} — skipping`);
    continue;
  }
  let depth = 1;
  let i = nameIdx + namePart.length;
  while (i < text.length && depth > 0) {
    const ch = text[i];
    if (ch === '"') {
      i++;
      while (i < text.length) {
        if (text[i] === '\\') { i += 2; continue; }
        if (text[i] === '"') { i++; break; }
        i++;
      }
      continue;
    }
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) break;
    }
    i++;
  }
  if (depth !== 0) {
    console.warn(`  could not find closing brace for "${m.activityName}" — skipping`);
    continue;
  }

  // Walk back from i to find the last non-whitespace char (the previous field's value end).
  // We'll insert ",\n        \"quickCard\": \"...\"" right after that, before the closing }.
  let j = i - 1;
  while (j > nameIdx && /\s/.test(text[j])) j--;
  // Insert immediately after position j.
  const insertion = `,\n        "quickCard": ${JSON.stringify(m.url)}`;
  text = text.slice(0, j + 1) + insertion + text.slice(j + 1);
  applied++;
}

fs.writeFileSync(DAYS_PATH, text);
console.log(`\nApplied ${applied} quickCard fields to days.js.`);
