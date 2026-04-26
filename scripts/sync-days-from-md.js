#!/usr/bin/env node
// One-shot sync: pull URL fields (facilitator script, worksheet, webpage,
// template) from public/teacher-schedule-data.md into public/days.js per
// activity. Also applies a few explicit renames so days.js's activity names
// line up with the markdown's canonical names.
//
// After this runs, days.js is the source of truth. The markdown can be kept
// for reference or deleted.

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DAYS_PATH = path.join(ROOT, 'public/days.js');
const MD_PATH   = path.join(ROOT, 'public/teacher-schedule-data.md');

// ── Load days.js: strip the `const DAYS = ` wrapper, parse as JSON
const daysSrc = fs.readFileSync(DAYS_PATH, 'utf8');
const m = daysSrc.match(/^const\s+DAYS\s*=\s*([\s\S]*?);\s*$/);
if (!m) { console.error('Could not parse days.js'); process.exit(1); }
const DAYS = JSON.parse(m[1]);

// ── Apply explicit renames first so activity names line up ───────────
const RENAMES = [
  { day: 5,  from: 'The Budget Constraint: S + P + T + E = 20',
              to:   'The Budget Constraint: Speed + Power + Turning + Endurance = 20' },
  { day: 6,  from: 'Interleaved Problem Set + Official Stat Allocation',
              to:   'Official Stat Allocation: Interleaved Problem Set' },
  { day: 6,  from: ' Field Geometry + Approach Planning', // leading space typo
              to:   'Field Geometry + Approach Planning' },
  { day: 11, from: 'Proportional Scaling + Commissioner Proposal Prep',
              to:   'Proportional Scaling: Scaling Your Stats + Commissioner Proposal Prep' },
];
let renameCount = 0;
for (const r of RENAMES) {
  const day = DAYS.find(d => d.day === r.day);
  if (!day || !day.activities) continue;
  for (const a of day.activities) {
    if (a.name === r.from) { a.name = r.to; renameCount++; }
  }
}

// ── Parse markdown table rows ────────────────────────────────────────
const md = fs.readFileSync(MD_PATH, 'utf8');
const mdRows = [];
for (const raw of md.split('\n')) {
  const line = raw.trim();
  if (!line.startsWith('|')) continue;
  if (/^\|\s*-+\s*\|/.test(line)) continue;
  const cells = line.replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim());
  if (cells.length < 7) continue;
  const day = parseInt(cells[0], 10);
  if (!Number.isFinite(day) || day < 1 || day > 20) continue;
  mdRows.push({
    day,
    name:      cells[3],
    script:    cells[7]  || '',
    worksheet: cells[8]  || '',
    webpage:   cells[9]  || '',
    template:  cells[10] || '',
  });
}

// ── Manual map: markdown title → days.js title where they diverged ───
// (days.js has the newer/canonical name; the markdown lags behind)
const MD_TO_DAYS = {
  '14|Percent Change + Ball Choice: Season 1 to Season 2 Configurations': 'Percent Change: Season 1 to Season 2 Configurations',
  '15|Season 2 Match Day 3':                  'Match Day 3',
  '15|Open Lab: Scouting Continuation':       'Open Lab: Scouting Continuation or Identity Refinement',
  '16|Know Your Opponent':                    'Memory Probe: Scout Your Opponent Cold',
  '19|Open Lab: Final Debrief and Prep (if time allows)': 'Open Lab: Final Debrief and Prep',
};
function resolveDaysName(day, mdName) {
  return MD_TO_DAYS[day + '|' + mdName] || mdName;
}

// ── Apply URL fields onto matching activities ────────────────────────
let matched = 0;
const unmatched = [];
for (const row of mdRows) {
  const day = DAYS.find(d => d.day === row.day);
  if (!day || !day.activities) { unmatched.push(row); continue; }
  const targetName = resolveDaysName(row.day, row.name);
  const act = day.activities.find(a => a.name === targetName);
  if (!act) { unmatched.push(row); continue; }
  if (row.script)    act.script    = row.script;
  if (row.worksheet) act.worksheet = row.worksheet;
  if (row.webpage)   act.webpage   = row.webpage;
  if (row.template)  act.template  = row.template;
  matched++;
}

// ── Serialize back ────────────────────────────────────────────────────
const out = 'const DAYS = ' + JSON.stringify(DAYS, null, 2) + ';\n';
fs.writeFileSync(DAYS_PATH, out);

// ── Report ────────────────────────────────────────────────────────────
console.log('Renames applied:', renameCount);
console.log('Markdown rows matched:', matched, '/', mdRows.length);
if (unmatched.length) {
  console.log('Unmatched markdown rows (no field updates applied):');
  for (const u of unmatched) console.log('  Day', u.day, '—', u.name);
}
console.log('days.js rewritten:', DAYS_PATH);
