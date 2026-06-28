// ── Activity → exemplar URL mapping ───────────────────────────────────────
// Keyed by the exact activity `name` string in days-default.js (same join
// key used by lessons.js). The teacher schedule view renders these as
// "Student Work Exemplars" links beside lesson links.
//
// Each value is a SLUG — the part after `?activity=` in the URL.
// getExemplarLinks() expands a slug into three { url, label } objects, one
// per level (Approaching / Meets / Exceeds), all pointing at
// VA_Student_Work_Exemplars.html with the right query params.
//
// To add an exemplar entry:
//   1. Confirm the activity has a section on VA_Student_Work_Exemplars.html
//      with `data-activity-block="<slug>"` on the wrapper, and
//      `data-level="approaching|meets|exceeds"` on each <tr>.
//   2. Add a line below with the activity's exact name from days-default.js
//      as the key and the slug as the value.
//
// NAMING — slug convention: `day{NN}-{short-kebab}`. Match the kebab stem
// in the existing quickCard URLs where possible (e.g. day01-07-first-bot-drive).
//
// CAVEAT — activity names are the join key. If you rename an activity in
// days-default.js, also update the matching key here (and in lessons.js).
// A `node --check public/exemplars.js` after edits catches stray quotes.

const EXEMPLARS_BASE = '/resources/teacher-guides/VA_Student_Work_Exemplars.html';

const ACTIVITY_EXEMPLARS = {
  // ── Week 1 · Pre-Season ───────────────────────────────────────────────
  'Speed Stat Challenge: What Does Motor Power Actually Mean?': 'day01-speed-stat',
  'First Bot Drive: Speed in Real Life':                         'day01-first-bot-drive',
  'Endurance Stat Challenge: Drawing the Decay':                 'day02-endurance-allocation',
  'Distance-Time Graphs':                                        'day03-distance-time-graphs',
  'Power Stat Challenge: Ratio and Motor Speed':                 'day04-power-budget',

  // ── Week 2 · Season 1 ─────────────────────────────────────────────────
  'Official Stat Allocation: Interleaved Problem Set':           'day05-interleaved-problem-set',
  // TODO confirm: Day 6 has two exemplar blocks (approach + slope-intercept).
  // Pointed at the same activity name; the page anchors disambiguate.
  'Coordinate Navigation Practice: Arc Approximation':           'day06-approach-angle',
  'Endurance Decay Equations in Slope-Intercept Form':           'day06-endurance-slope-intercept',
  // TODO confirm: Day 7 + Day 8 pre/post-match exemplars map to which activity name?
  // Best current guess — refine when the schedule has explicit named activities.
  'Season 1 Match Day 1':                                        'day07-pre-match-prediction',
  'Season 1 Match Day 2':                                        'day08-post-match-revision',

  // ── Week 3 · Season 1 Final + Commissioner ────────────────────────────
  'Formula Relay: All Five Types in One Race':                   'day09-formula-relay',
  'Distance Formula: How Far Did the Ball Travel':               'day10-distance-final',
  'Proportional Scaling: Scaling Your Stats + Commissioner Proposal Prep': 'day11-commissioner-prep',
  'Final Proposal Verification':                                 'day12-commissioner-meeting',

  // ── Week 4 · Win Equation + Season 2 + Community Exhibition ──────────
  'Building and Solving Linear Equations':                       'day13-win-equation',
  'Percent Change: Season 1 to Season 2 Configurations':         'day14-percent-change',
  'Teach the Math':                                              'day15-teach-the-math',
  // TODO: Day 16 Community Exhibition activity name in days-default not yet
  // verified — `null` for now; framework will skip it cleanly.
};

// Expand a slug into three { url, label } objects, one per level.
// Returns [] when the activity has no exemplar mapping (so callers can
// render conditionally without throwing).
function getExemplarLinks(activityName) {
  const slug = ACTIVITY_EXEMPLARS[activityName];
  if (!slug) return [];
  return [
    { url: `${EXEMPLARS_BASE}?activity=${slug}&level=approaching`, label: 'Approaching', level: 'approaching' },
    { url: `${EXEMPLARS_BASE}?activity=${slug}&level=meets`,       label: 'Meets',       level: 'meets'       },
    { url: `${EXEMPLARS_BASE}?activity=${slug}&level=exceeds`,     label: 'Exceeds',     level: 'exceeds'     },
  ];
}

// Convenience: get only the URL for a single level. Returns null if unmapped.
function getExemplarLink(activityName, level) {
  const slug = ACTIVITY_EXEMPLARS[activityName];
  if (!slug || !['approaching', 'meets', 'exceeds'].includes(level)) return null;
  return `${EXEMPLARS_BASE}?activity=${slug}&level=${level}`;
}

// Quick reverse-lookup for diagnostic/debug pages: slug → activity name.
function getActivityForSlug(slug) {
  for (const [name, s] of Object.entries(ACTIVITY_EXEMPLARS)) {
    if (s === slug) return name;
  }
  return null;
}
