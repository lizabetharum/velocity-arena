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
  'Pre-Task Diagnostic: Prior Knowledge Assessment': '/activities/diagnostic/index.html',
  
  'First Bot Drive: Speed in Real Life': [
    {url: '/lessons/first-bot-drive.html', label: "First Bot Drive Test"},
    {url: "/lessons/speed-test-explainer.html", label: "Speed Test Explainer"}
  ],
  'Endurance Stat Challenge: Drawing the Decay': '/lessons/endurance-discovery.html',
  'Endurance Decay Equations in Slope-Intercept Form': '/lessons/decay-equations-visual.html',
  'Program Endurance Into Your Bot': [
    {url: '/lessons/endurance-formula-test.html', label: "Endurance Test"},
    {url: "/lessons/endurance-test-explainer.html", label: "Endurance Test Explainer"}
  ],
  'Bot Naming Ceremony': '/activities/robot-names/',
  'Distance-Time Graphs':'/lessons/coordinate-functions.html',
  'Coordinate Navigation Practice: Arc Approximation':[{ url:"/lessons/launchsequence-designer.html", label:"Launch Sequence Designer Template"},
    {url: "/lessons/turning-test-explainer.html", label: "Turning Test Explainer"}],
  'Power Stat Challenge: Ratio and Motor Speed': "/lessons/power-stat-challenge.html",
  'Scoop Build + Ratio Testing':"/lessons/power-test-explainer.html",
  'The Budget Constraint: Speed + Power + Turning + Endurance = 20': [
    { url: '/lessons/budget-constraint.html', label: 'Budget constraint' },
    { url: '/lessons/crack-the-bot.html',     label: 'Crack the bot' },
  ],
  'Dashboard Introduction': '/student/week-1.html',
  'Simulation Matches: Your Loadout vs. Reality': [{url: "/lessons/simulation-matches.html", label: "Simulation matches Code"},
    {url:"/activities/dashboard/velocity-arena-dashboard.html", label: "Dashboard"},
    {url:"/activities/dashboard/dashboard-guide-preseason.html", label: "Dashboard Guide"}

  ],
  'Dashboard + Match Rules': [
    {url: "/activities/dashboard/velocity-arena-dashboard.html", label: "Dashboard Intro"}, 
    {url: "/activities/dashboard/velocity-arena-dashboard.html", label: "Dashboard"},
    {url:"/activities/dashboard/dashboard-guide-inseason.html", label: "Dashboard Guide"}
  ],
  'Day 8 Open Lab':
[{url: "https://velocity-arena-gold.vercel.app/resources/formula-race-cards.html", label:"Prepare Formula Race Cards"}],

'Field Geometry + Approach Planning':[
  {url:"/lessons/launchsequence-designer.html", label:"Launch Sequence Designer Template"},
 
  {url:"/resources/launch-sequence-help.html", label:"Launch Sequence Help"},
  {url:"/resources/launch-sequences.html", label:"Launch Sequence Practice"}],
'Launch Sequence Programming + Testing':[
  {url:"/lessons/launchsequence-designer.html", label:"Launch Sequence Designer Template"},
 
 {url:"/resources/launch-sequence-help.html", label:"Launch Sequence Help"},
  {url:"/resources/launch-sequences.html", label:"Launch Sequence Practice"}],

  'Formula Relay: All Five Types in One Race':
[{url: "/lessons/formula-race-cards.html", label:"Formula Race Cards"}],
  'Season 1 Match Day 3': {url: '/lessons/match-day-3.html', label: 'The 20% Gap Rule'},
  "Leaderboard Reveal + Open Lab":[{url:"/lessons/leaderboard-chase-builder.html" , label:"Prepare for tomorrow's scavenger hunt"}],
  'Season 1 Final Round':{url:'/lessons/analysis-block.html', label: 'Season 1 Analysis Block'},
  'Distance Formula: How Far Did the Ball Travel': '/lessons/day10-distance-formula.html',
  'Proportional Scaling: Scaling Your Stats + Commissioner Proposal Prep': [
    { url: '/lessons/proportional-scaling.html',         label: 'Proportional scaling' },
    { url: '/lessons/day11-commissioner-proposal.html',  label: 'Commissioner proposal' },
  ],
  'Underdog Mechanic Announced + Season 2 Stat Reallocation':[{url:'/lessons/season2-reallocation.html', label: 'Season 2 reallocation'}], 
  'Final Proposal Verification': '/lessons/proposal-verification.html',
  'Building and Solving Linear Equations': '/lessons/day13-linear-equations.html',
  'Stat Auction + Prediction Check': '/lessons/stat-auction.html',
  'Percent Change: Season 1 to Season 2 Configurations': '/lessons/percent-change.html',
  'Scouting Report Completion: Sections 3 and 4': '/lessons/scouting-report-helper.html',
  'Open Lab: Reflection Time': '/lessons/open-lab-reflection.html',
   'Post-Task Diagnostic: Prior Knowledge Reassessment': '/activities/diagnostic-post/index.html',
    'Pre-Match Pitch Rehearsal + Teach the Math': '/lessons/pre-match-pitch.html',
  'Teach the Math': '/lessons/pre-match-pitch-v2.html',
  'Open Lab: Season 2 Allocation': [{url: '/lessons/what-If-loadout-recalculator.html', label: 'What-If? Facilitator Tool'},
    {url: '/lessons/what-if/', label: 'What-If? Analysis'}
  ],
    'Official Stat Allocation: Interleaved Problem Set': [
    { url: '/lessons/interleaved-problem-set.html', label: 'Problem set' },
    { url: '/lessons/prove-your-build.html',        label: 'Prove your build' },
  ],
};

// Normalize mapping values into an array of { url, label } objects.
// `label: null` means "use the caller's default" (e.g. "Interactive lesson").
function getLessonLinks(activityName) {
  const v = ACTIVITY_LESSONS[activityName];
  if (!v) return [];
  if (typeof v === 'string') return [{ url: v, label: null }];
  if (Array.isArray(v)) return v;
  return [v];
}
