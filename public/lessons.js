// ── Activity → interactive lesson URL mapping ─────────────────────────────
// Keyed by the exact activity `name` string in days.js. The Today view
// (index.html) and Day view (day.html) render clickable links under each
// activity so students can jump into the companion lesson page.
//
// A value can be either:
//   - a string URL (single lesson, default label)
//   - an array of { url, label } objects (multiple lessons with custom labels)
//
// To add a lesson: build the page under public/lessons/ and add an entry
// here with the activity's exact name from days.js as the key.
const ACTIVITY_LESSONS = {
  'Speed Stat Challenge: What Does Motor Power Actually Mean?': '/lessons/speed-stat.html',
  'First Bot Drive: Speed in Real Life': '/lessons/first-bot-drive.html',
  'Endurance Stat Challenge: Drawing the Decay': '/lessons/endurance-discovery.html',
  'Endurance Decay Equations in Slope-Intercept Form': '/lessons/decay-equations-visual.html',
  'Program Endurance Into Your Bot': '/lessons/endurance-formula-test.html',
  'Power Stat Challenge: Ratio and Motor Speed': '/lessons/power-stat-challenge.html',
  'The Budget Constraint: Speed + Power + Turning + Endurance = 20': [
    { url: '/lessons/budget-constraint.html', label: 'Budget constraint' },
    { url: '/lessons/crack-the-bot.html',     label: 'Crack the bot' },
  ],
  'Simulation Matches: Your Loadout vs. Reality': '/lessons/simulation-matches.html',
  'Season 1 Match Day 3': '/lessons/match-day-3.html',
  'Distance Formula: How Far Did the Ball Travel': '/lessons/day10-distance-formula.html',
  'Proportional Scaling + Commissioner Proposal Prep': [
    { url: '/lessons/proportional-scaling.html',         label: 'Proportional scaling' },
    { url: '/lessons/day11-commissioner-proposal.html',  label: 'Commissioner proposal' },
  ],
  'Final Proposal Verification': '/lessons/proposal-verification.html',
  'Building and Solving Linear Equations': '/lessons/day13-linear-equations.html',
  'Stat Auction + Prediction Check': '/lessons/stat-auction.html',
  'Percent Change: Season 1 to Season 2 Configurations': '/lessons/percent-change.html',
  'Scouting Report Completion: Sections 3 and 4': '/lessons/scouting-report-helper.html',
  'What-If? Analysis': '/lessons/what-if-analysis.html',
  'Open Lab: Reflection Time': '/lessons/open-lab-reflection.html',
  'Post-Task Diagnostic: Prior Knowledge Reassessment': '/activities/diagnostic-post/index.html',
  'Official Stat Allocation: Interleaved Problem Set': [
    { url: '/lessons/interleaved-problem-set.html', label: 'Problem set' },
    { url: '/lessons/prove-your-build.html',        label: 'Prove your build' },
    { url: '/lessons/crack-the-bot.html',           label: 'Crack the bot' },
  ],
};

// Normalize mapping values into an array of { url, label } objects.
// `label: null` means "use the caller's default" (e.g. "Interactive lesson").
function getLessonLinks(activityName) {
  const v = ACTIVITY_LESSONS[activityName];
  if (!v) return [];
  if (typeof v === 'string') return [{ url: v, label: null }];
  return v;
}
