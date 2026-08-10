// Site dispatcher.
// Loads the right schedule for the active site:
//   - TN  (Crosstown)                 → DAYS_TN     (16 days, compressed timings, snack break)
//   - NY1 (Gotham Tech)               → DAYS_GOTHAM (days 1–12 default; 13–16 = compressed
//                                                    "final four days" plan v3)
//   - NY2 (Claremont International HS) +
//     NY3 (South Bronx Community)     → DAYS_NY1   (16 days, full-length activities, lunch)
//   - no site selected                → DAYS_NY1   (all four pilot sites run the 16-day arc;
//                                                    the 20-day DAYS_DEFAULT is legacy master content)
// DAYS_TN/DAYS_NY1 are built in days-tn.js by buildFourWeekDays();
// DAYS_GOTHAM is built in days-gotham.js.
//
// Each array is loaded at page time (see <script src="..."> tags in pages
// that consume DAYS). This file picks one and exposes it as the global
// DAYS array everything else reads from.

// ── Claremont (NY2) close-out override ──────────────────────────────────
// Claremont is stopping the pilot early. They finished the stat labs and were
// mid-launch-sequence but ran no matches, so the standard NY1 arc doesn't fit.
// These four Distance-Lab days replace the schedule for NY2 ONLY (NY1/NY3 keep
// DAYS_NY1). Anchor them by setting CONFIG.siteStartDates.NY2 to Day-1's date.
const DAYS_NY2 = [
  {
    "day": 1, "week": 1, "weekName": "Close-Out",
    "theme": "Distance Lab + Target Challenge",
    "bigMathIdea": "A prediction is a model, not a guess. Drive the bot, measure how far, and the gap tells you what to fix. distance = speed x time + start-up is y = mx + b, and it can never come out 0-0.",
    "vocabulary": "PREDICTION, GAP (prediction error), RATE OF CHANGE — centimeters per second, the bot's speed and the slope of its line.",
    "activities": [
      { "name": "Set up the Distance Lab", "mins": 20, "block": "Hook",
        "description": "Tape a start line for each team and load the Distance Lab code (A drives, B adds half a second). Teach the two moves: predict a distance BEFORE the bot moves; after each run say 'we predicted ___, we got ___, the gap was ___.'",
        "makecode": { "url": "https://makecode.microbit.org/S87172-87501-09985-96061", "label": "Distance Lab code (MakeCode)" } },
      { "name": "Distance Lab worksheet", "mins": 100, "block": "Challenge Block",
        "description": "Drive 1 second, measure the cm (your speed). Predict a longer drive, run it, measure the miss, fix ONE number. Five trials, then write distance = speed x time + start-up." },
      { "name": "Lunch", "mins": 60, "block": "Lunch", "description": "One hour." },
      { "name": "Target Challenge — Precision Final", "mins": 75, "block": "Match-Build-Make",
        "description": "Tape a target line. Solve the drive time from your equation, x 1000 to milliseconds, program it, drive. Practice targets, then a surprise target — closest wins.",
        "makecode": [{ "url": "https://makecode.microbit.org/S88736-26870-92526-90781", "label": "Target Challenge code" }] },
      { "name": "Make your equation poster", "mins": 45, "block": "Challenge Block",
        "description": "Start the poster in Canva: your equation and a graph of your trial dots. You will finish it tomorrow." }
    ],
    "ends": "Every team leaves with a written equation and at least one target hit."
  },
  {
    "day": 2, "week": 1, "weekName": "Close-Out",
    "theme": "Percent change, finish the poster, Skills Arena",
    "bigMathIdea": "Quantify your improvement: percent change = (new - old) / old x 100. Then sharpen your driving in the Skills Arena.",
    "vocabulary": "PERCENT CHANGE, MODEL COMPARISON — keep/change one thing after seeing another team's equation.",
    "activities": [
      { "name": "Percent Change — the correction", "mins": 45, "block": "Challenge Block",
        "description": "How much did your prediction improve? 'Our first guess was off by ___, our best by ___ — that's a ___% improvement.'",
        "link": "/lessons/gotham-day14-percent-change.html" },
      { "name": "Compare equations", "mins": 30, "block": "Challenge Block",
        "description": "Read another team's equation. Write one thing to keep and one to re-check in your own — citing a number." },
      { "name": "Finish your poster", "mins": 45, "block": "Challenge Block",
        "description": "Finish the Canva poster: equation, graph, and your percent-change result. Add a QR to the shared design; print in b/w on 8.5 x 11 (the QR opens the color version)." },
      { "name": "Lunch", "mins": 60, "block": "Lunch", "description": "One hour." },
      { "name": "Skills Arena", "mins": 120, "block": "Open Lab",
        "description": "The whole afternoon: robot driving challenges — drive straight, turn exact angles, park on a spot. Great practice that sharpens the same driving the Distance Lab measured.",
        "link": "/lessons/skills-arena.html" }
    ],
    "ends": "Every team's poster is done and shows a percent-change result."
  },
  {
    "day": 3, "week": 1, "weekName": "Close-Out",
    "theme": "Practice teaching + measure the growth",
    "bigMathIdea": "You understand it when you can teach it. Explain your equation so a stranger can use it after ONE explanation — then show your growth since Day 1.",
    "vocabulary": "SLOPE, INTERCEPT — the parts of your equation you explain; GROWTH — Day 1 vs now.",
    "activities": [
      { "name": "Teach the Math", "mins": 60, "block": "Challenge Block",
        "description": "Each team explains its equation in plain language with its real numbers: what the speed number means, what the start-up means. Write your one-sentence opener." },
      { "name": "Teach-back rehearsal", "mins": 60, "block": "Challenge Block",
        "description": "Pair up. One is a confused visitor; the other explains ONCE and lets them try — no rescuing. Fix the sentence that didn't land, then switch." },
      { "name": "Lunch", "mins": 60, "block": "Lunch", "description": "One hour." },
      { "name": "Post-Task Diagnostic + Reflection", "mins": 50, "block": "Challenge Block",
        "description": "12 minutes, individual, silent — then the Reflection. Every student types name, last initial, and team exactly as on Day 1, or their results can't be matched. Protect this; never cut it.",
        "link": "/activities/diagnostic-post/" },
      { "name": "Set up your exhibition station", "mins": 70, "block": "Challenge Block",
        "description": "Poster up, bot ready, target line down — staged the way a visitor will meet it tomorrow. Do one full dry run." },
      { "name": "Skills Arena — extra time", "mins": 0, "block": "Open Lab",
        "description": "Any team that finishes early sharpens driving in the Skills Arena — the same driving the Distance Lab measured. Has an EN | ES toggle.",
        "link": { "url": "/lessons/skills-arena.html", "label": "Skills Arena" } }
    ],
    "ends": "Every student has practiced their explanation, and the Post-Task + Reflection are done."
  },
  {
    "day": 4, "week": 1, "weekName": "Close-Out",
    "theme": "Teach visitors, then celebrate",
    "bigMathIdea": "Teach a stranger your math — the real test that the math, not the robot, is what you learned.",
    "vocabulary": "EXPLANATION — a visitor succeeds after ONE of yours.",
    "activities": [
      { "name": "Expert setup + last rehearsal", "mins": 30, "block": "Hook",
        "description": "Stations ready; run the sentence you rewrote yesterday one more time." },
      { "name": "Community Exhibition", "mins": 90, "block": "Match-Build-Make",
        "description": "Visitors try your challenge and you teach them; fill the Visitor Handout — did the visitor succeed after ONE explanation? Stay out of it; the students teach.",
        "link": "/resources/teacher-guides/visitor-teach-handout.html" },
      { "name": "Closing circle + celebrate", "mins": 30, "block": "Open Lab",
        "description": "Each student names one thing they can do now that they couldn't on Day 1. Sign posters, quick group photo — then EARLY DISMISSAL (about 12:30)." }
    ],
    "ends": "Finish the sentence: 'On Day 1 I couldn't ___. Now I can ___.' (Early dismissal after the exhibition.)"
  }
];

// ── South Bronx (NY3) match catch-up override ───────────────────────────
// South Bronx is on Day 10 with matches played but not recorded. These 7
// sessions backfill the data, then run two short match blocks (Season 1 this
// week, Season 2 next week) and fold in the 16-day planned activities without
// matches ever being blocked again. 10:00–3:00, one hour for lunch. Replaces
// the schedule for NY3 ONLY (NY1/NY2 unchanged). Anchor Session 1 by setting
// CONFIG.siteStartDates.NY3. Printable card: /resources/teacher-guides/south-bronx-catch-up-plan.html
const DAYS_NY3 = [
  {
    "day": 1, "week": 1, "weekName": "Catch-Up · Season 1",
    "theme": "Season 1 final matches + Distance Formula",
    "bigMathIdea": "A prediction is a model. Log predicted vs. actual and the gap (the residual) tells you what to fix. Distance on the grid is d = square root of ((x2 - x1)squared + (y2 - y1)squared).",
    "vocabulary": "RESIDUAL — predicted minus actual. DISTANCE FORMULA — straight-line distance between two points.",
    "activities": [
      { "name": "Set your prediction (Season 1 — predictions only)", "mins": 30, "block": "Challenge Block",
        "description": "Before class the facilitator enters the 2 played matches in the dashboard. Then each team writes, on paper, how many goals it expects and which stat or formula that number comes from. Stats stay locked this week. (The full Equation Prediction Log comes in Session 2.)" },
      { "name": "Season 1 Final Round — Rounds 1-2", "mins": 90, "block": "Match-Build-Make",
        "description": "Prediction ritual before each match; play; log predicted vs. actual + one sentence the second it ends. Loss-recovery between losses.",
        "link": "/resources/teacher-guides/run-a-match-simple.html" },
      { "name": "Lunch", "mins": 60, "block": "Lunch", "description": "One hour." },
      { "name": "Season 1 Final Round — Round 3 + confirm the dataset", "mins": 45, "block": "Match-Build-Make",
        "description": "Log the last round; every team confirms all rounds (2 backfilled + today's) are in the dashboard with predicted, actual, and residual.",
        "link": "/activities/dashboard/velocity-arena-dashboard.html" },
      { "name": "Distance Formula — how far did the ball travel?", "mins": 45, "block": "Challenge Block",
        "description": "Apply d = square root of ((x2 - x1)squared + (y2 - y1)squared) to points on the arena grid from your matches.",
        "link": "/lessons/day10-distance-formula.html" },
      { "name": "Skills Arena", "mins": 30, "block": "Open Lab",
        "description": "Sharpen driving — straight lines, exact turns, park on a spot. (South Bronx already did the Day 10 Cold Recall.)",
        "link": "/lessons/skills-arena.html" }
    ],
    "ends": "Every team has ~4-5 Season-1 rounds logged, plus a distance-formula calculation."
  },
  {
    "day": 2, "week": 1, "weekName": "Catch-Up · Season 1",
    "theme": "Prediction market + your win equation",
    "bigMathIdea": "Turn your match data into y = mx + b; then quantify how much your model improved with percent change.",
    "vocabulary": "SLOPE (m), INTERCEPT (b) — the parts of your win equation. PERCENT CHANGE — (new - old) / old x 100.",
    "activities": [
      { "name": "The Prediction Market", "mins": 60, "block": "Challenge Block",
        "description": "For each round, gap = predicted - actual. Read the market in miss-to-hit order; name the best prediction and the biggest miss. Is the gap shrinking?" },
      { "name": "Percent change on your accuracy", "mins": 60, "block": "Challenge Block",
        "description": "How much did your prediction error shrink? (first gap - latest gap) / first gap x 100.",
        "link": "/lessons/gotham-day14-percent-change.html" },
      { "name": "Lunch", "mins": 60, "block": "Lunch", "description": "One hour." },
      { "name": "Build your win equation + complete the Equation Prediction Log", "mins": 60, "block": "Challenge Block",
        "description": "Turn your data into y = mx + b (slope, intercept, and what each means), then fill in the Equation Prediction Log so it is ready for the Season 2 matches.",
        "link": "/lessons/day13-prediction-log.html" },
      { "name": "Name the cause + compare", "mins": 60, "block": "Open Lab",
        "description": "Name your residual pattern — slope error, x-variable choice, model drift, or environmental sensitivity — in one sentence. Read another team's residuals; keep one thing, re-check one." }
    ],
    "ends": "Every team has residuals, a percent-change-in-accuracy number, a written win equation, and a named cause."
  },
  {
    "day": 3, "week": 1, "weekName": "Catch-Up · Season 2 opens",
    "theme": "Stat rankings + reallocation + Commissioner prep",
    "bigMathIdea": "Proportional scaling: a straight-line stat scales by the same factor; a squared stat grows much faster. Justify a stat change from your data.",
    "vocabulary": "PROPORTIONAL SCALING, REALLOCATION — Season 2 stat changes (Season 1 was predictions only).",
    "activities": [
      { "name": "Human Number Line — stat rankings", "mins": 30, "block": "Hook",
        "description": "Teams line up by each stat to see the spread across the class before deciding what to change." },
      { "name": "Proportional Scaling + What-If: predict the effect", "mins": 45, "block": "Challenge Block",
        "description": "Motor Power = Speed x 5 scales the same amount; Charge = Power squared grows much faster. Run the what-if before you commit.",
        "link": "/lessons/what-if-analysis.html" },
      { "name": "Underdog Mechanic + Season 2 reallocation", "mins": 45, "block": "Challenge Block",
        "description": "Season 2 opens — now you may reallocate stats. Pick ONE to change, justified by your match data, and log it in the dashboard Stat Change Log.",
        "link": "/activities/dashboard/velocity-arena-dashboard.html" },
      { "name": "Lunch", "mins": 60, "block": "Lunch", "description": "One hour." },
      { "name": "Commissioner Proposal Prep", "mins": 60, "block": "Challenge Block",
        "description": "Draft a rule or format change argued from your match data — name the number that justifies it.",
        "link": "/lessons/day11-commissioner-proposal.html" },
      { "name": "Make your equation poster", "mins": 60, "block": "Match-Build-Make",
        "description": "Start the poster: your equation and a graph of your data.",
        "link": "/lessons/equation-poster.html" }
    ],
    "ends": "A data-justified stat change made and logged, a Commissioner proposal drafted, poster started."
  },
  {
    "day": 4, "week": 2, "weekName": "Catch-Up · Season 2",
    "theme": "Commissioner's Meeting + Season 2 Match Day",
    "bigMathIdea": "Argue a rule change from data, then test your new loadout in matches and compare Season 2 residuals to Season 1.",
    "vocabulary": "PROPOSAL — a rule change backed by a number. RESIDUAL COMPARISON — Season 2 vs Season 1 accuracy.",
    "activities": [
      { "name": "Lobby + Final Proposal Verification", "mins": 30, "block": "Hook",
        "description": "Teams check their proposal's math holds, then lobby other teams for votes.",
        "link": "/lessons/proposal-verification.html" },
      { "name": "Commissioner's Meeting — presentations + vote", "mins": 60, "block": "Challenge Block",
        "description": "Each team presents its data-backed proposal; the class votes. Any adopted rule applies to today's matches.",
        "link": "/lessons/commissioner-meeting-worksheet.html" },
      { "name": "Stat Auction + prediction check", "mins": 30, "block": "Challenge Block",
        "description": "Quick MY EQUATION check with the new loadout before playing.",
        "link": "/lessons/stat-auction.html" },
      { "name": "Lunch", "mins": 60, "block": "Lunch", "description": "One hour." },
      { "name": "Season 2 Match Day — Rounds 1-3", "mins": 75, "block": "Match-Build-Make",
        "description": "New loadouts. Predict before each; log predicted vs. actual right after; loss-recovery between losses.",
        "link": "/resources/teacher-guides/run-a-match-simple.html" },
      { "name": "Residual logging + compare Season 2 vs Season 1", "mins": 45, "block": "Open Lab",
        "description": "More accurate, less accurate, or the same? Hold the question for tomorrow.",
        "link": "/activities/dashboard/velocity-arena-dashboard.html" }
    ],
    "ends": "The class voted on a rule change, and every team has Season-2 rounds logged."
  },
  {
    "day": 5, "week": 2, "weekName": "Catch-Up · Season 2",
    "theme": "Season 2 analysis + Bot Lore + finish poster",
    "bigMathIdea": "Did a stat change move the outcome by the amount you predicted, or more because something was squared? Quantify Season 1 to Season 2 with percent change.",
    "vocabulary": "PROPORTIONAL vs QUADRATIC results. PERCENT CHANGE — Season 1 to Season 2.",
    "activities": [
      { "name": "Which changes produced proportional results?", "mins": 60, "block": "Challenge Block",
        "description": "Did the outcome move by the amount you predicted, or more because something was squared? Compute percent change from Season 1 to Season 2.",
        "link": "/lessons/gotham-day14-percent-change.html" },
      { "name": "Bot Lore Gallery Walk", "mins": 60, "block": "Open Lab",
        "description": "Re-read every bot's origin story; add one sentence that only makes sense because of what happened across the two seasons." },
      { "name": "Lunch", "mins": 60, "block": "Lunch", "description": "One hour." },
      { "name": "Finish your poster", "mins": 60, "block": "Match-Build-Make",
        "description": "Equation, graph, percent-change result, and a QR to the shared design. Print black and white on 8.5 x 11.",
        "link": "/lessons/equation-poster-worksheet.html" },
      { "name": "Season 1 to Season 2 headline + gallery", "mins": 60, "block": "Open Lab",
        "description": "Write what you changed and why, citing your data — then a gallery walk to read every team's sentence." }
    ],
    "ends": "Percent-change Season 1 to Season 2 computed, bot lore updated, poster finished, headline written."
  },
  {
    "day": 6, "week": 2, "weekName": "Catch-Up · Season 2",
    "theme": "Teach the Math + Post-Task",
    "bigMathIdea": "You understand it when you can teach it: explain your equation so a stranger can use it after one explanation. Then show your growth since Day 1.",
    "vocabulary": "PLAIN LANGUAGE — no jargon. GROWTH — Day 1 versus now.",
    "activities": [
      { "name": "Teach the Math", "mins": 60, "block": "Challenge Block",
        "description": "Explain your equation in plain words with your real numbers — what the slope means, what the intercept means.",
        "link": "/lessons/pre-match-pitch-v2.html" },
      { "name": "Teach-back rehearsal", "mins": 60, "block": "Challenge Block",
        "description": "A partner plays a confused visitor; explain ONCE and let them try — no rescuing. Fix the sentence that didn't land, then switch." },
      { "name": "Lunch", "mins": 60, "block": "Lunch", "description": "One hour." },
      { "name": "Post-Task Diagnostic + Reflection", "mins": 50, "block": "Challenge Block",
        "description": "12 minutes, individual, silent — then the Reflection. Every student types name, last initial, and team exactly as on Day 1. Protect this; never cut it.",
        "link": "/activities/diagnostic-post/" },
      { "name": "Set up your exhibition station", "mins": 70, "block": "Match-Build-Make",
        "description": "Poster, bot, and dashboard on display, staged the way a visitor will meet it. Do one full dry run." }
    ],
    "ends": "Explanation rehearsed; Post-Task + Reflection done."
  },
  {
    "day": 7, "week": 2, "weekName": "Catch-Up · Exhibition",
    "theme": "Community Exhibition + closing",
    "bigMathIdea": "Teach a stranger your math — the real test that the math, not the robot, is what you learned.",
    "vocabulary": "EXPLANATION — a visitor succeeds after one of yours.",
    "activities": [
      { "name": "Final Commissioner's Meeting (Part 1) + last setup", "mins": 45, "block": "Hook",
        "description": "Vote on any final rule change, then rehearse the one sentence you rewrote yesterday.",
        "link": "/lessons/day16-commissioner-proposal.html" },
      { "name": "Community Exhibition — first block", "mins": 75, "block": "Match-Build-Make",
        "description": "A visitor solves a problem using your equation — you teach, they solve, you check. Hand each a Visitor Sheet; keep a Teach-a-Visitor tracker. Stay out of it; the students teach.",
        "link": "/resources/teacher-guides/visitor-teach-handout.html" },
      { "name": "Lunch", "mins": 60, "block": "Lunch", "description": "One hour." },
      { "name": "Community Exhibition — second block", "mins": 75, "block": "Match-Build-Make",
        "description": "Keep teaching visitors; every student teaches at least once." },
      { "name": "Closing circle + awards by the math", "mins": 45, "block": "Open Lab",
        "description": "Season 2 Champion (record), Most Improved (biggest percent change), Best Analyst, Best Teacher, Best Commissioner Proposal — each named with its calculation. Every student: 'On Day 1 I couldn't ___. Now I can ___.'" }
    ],
    "ends": "Every student taught a visitor their own math and named their growth."
  }
];

const DAYS = (function pickDays() {
  const code = (typeof getSelectedSite === 'function') ? getSelectedSite() : null;
  if (code === 'TN' && typeof DAYS_TN !== 'undefined' && DAYS_TN.length > 0) {
    return DAYS_TN;
  }
  if (code === 'NY1' && typeof DAYS_GOTHAM !== 'undefined' && DAYS_GOTHAM.length > 0) {
    return DAYS_GOTHAM;
  }
  if (code === 'NY2' && typeof DAYS_NY2 !== 'undefined' && DAYS_NY2.length > 0) {
    return DAYS_NY2;   // Claremont close-out (4-day Distance Lab plan)
  }
  if (code === 'NY3' && typeof DAYS_NY3 !== 'undefined' && DAYS_NY3.length > 0) {
    return DAYS_NY3;   // South Bronx match catch-up (7-session plan)
  }
  if (typeof DAYS_NY1 !== 'undefined' && DAYS_NY1.length > 0) return DAYS_NY1;
  if (typeof DAYS_DEFAULT !== 'undefined') return DAYS_DEFAULT;
  return [];
})();
