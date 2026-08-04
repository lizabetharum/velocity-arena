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
        "description": "Poster up, bot ready, target line down — staged the way a visitor will meet it tomorrow. Do one full dry run." }
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
  if (code === 'NY3' && typeof DAYS_NY1 !== 'undefined' && DAYS_NY1.length > 0) {
    return DAYS_NY1;
  }
  if (typeof DAYS_NY1 !== 'undefined' && DAYS_NY1.length > 0) return DAYS_NY1;
  if (typeof DAYS_DEFAULT !== 'undefined') return DAYS_DEFAULT;
  return [];
})();
