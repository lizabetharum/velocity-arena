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
      { "name": "Set your prediction (Season 1 — predictions only)", "mins": 15, "block": "Challenge Block",
        "description": "Quick — before class the facilitator enters the 2 played matches in the dashboard. Then each team writes, on paper, how many goals it expects and which stat or formula that number comes from. Stats stay locked this week. You'll build your bot's equation in tomorrow's Distance Lab.",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day07-03-pre-match-prediction.html",
        "script": "https://docs.google.com/document/d/1MPHXBv6GjZAw_n43uA1C1gVnbK3Agf-gZQ9qS5WXZiI/edit?usp=drive_link" },
      { "name": "Season 1 Final Round — Rounds 1-2", "mins": 105, "block": "Match-Build-Make",
        "description": "Prediction ritual before each match; play; log predicted vs. actual + one sentence the second it ends. Loss-recovery between losses.",
        "link": "/lessons/match-day-steps.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day10-04-season1-final-round.html",
        "script": "https://docs.google.com/document/d/1nDIFSSs9hH2m1YF55zIwJxYLpvB6c4gepoi7yyzRj_c/edit?usp=drive_link" },
      { "name": "Lunch", "mins": 60, "block": "Lunch", "description": "One hour." },
      { "name": "Season 1 Final Round — Round 3 + confirm the dataset", "mins": 45, "block": "Match-Build-Make",
        "description": "Log the last round; every team confirms all rounds (2 backfilled + today's) are in the dashboard with predicted, actual, and residual.",
        "link": "/activities/dashboard/velocity-arena-dashboard.html",
        "webpage": "/lessons/match-day-steps.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day10-04-season1-final-round.html",
        "script": "https://docs.google.com/document/d/1nDIFSSs9hH2m1YF55zIwJxYLpvB6c4gepoi7yyzRj_c/edit?usp=drive_link" },
      { "name": "Distance Formula — how far did the ball travel?", "mins": 45, "block": "Challenge Block",
        "description": "Apply d = square root of ((x2 - x1)squared + (y2 - y1)squared) to points on the arena grid from your matches.",
        "link": "/lessons/day10-distance-formula.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day10-02-distance-formula.html",
        "script": "https://docs.google.com/document/d/1lRKCnAD5SpXp7_wdQIluC7-JFSzYTQHtmj1mScfo_5M/edit?usp=sharing" },
      { "name": "Skills Arena", "mins": 30, "block": "Open Lab",
        "description": "Sharpen driving — straight lines, exact turns, park on a spot. Click the Done button at the end of each challenge to unlock the next.",
        "link": "/lessons/skills-arena.html" }
    ],
    "ends": "Every team has ~4-5 Season-1 rounds logged, plus a distance-formula calculation."
  },
  {
    "day": 2, "week": 1, "weekName": "Catch-Up · Season 1",
    "theme": "Distance Lab + Target Practice + Percent Change",
    "bigMathIdea": "Build a real equation from your own driving: distance = speed x time + start-up (that's y = mx + b). Then quantify how much you improved with percent change.",
    "vocabulary": "SLOPE (m), START-UP / INTERCEPT (b). PERCENT CHANGE — (new - old) / old x 100.",
    "activities": [
      { "name": "Distance Lab", "mins": 90, "block": "Challenge Block",
        "description": "Drive, measure, predict, fix one number — build distance = speed x time + start-up (y = mx + b) from your own driving data.",
        "worksheet": "/lessons/distance-lab-worksheet.html" },
      { "name": "Target Practice", "mins": 30, "block": "Match-Build-Make",
        "description": "Solve the drive time from your equation: time = (target - start-up) / speed, x1000 for milliseconds. Program it and hit the line.",
        "worksheet": "/lessons/target-challenge-worksheet.html" },
      { "name": "Lunch", "mins": 60, "block": "Lunch", "description": "One hour." },
      { "name": "Target Practice — surprise target", "mins": 30, "block": "Match-Build-Make",
        "description": "Predict, drive, and log predicted vs. actual for each shot. Closest wins." },
      { "name": "Percent Change", "mins": 60, "block": "Challenge Block",
        "description": "Quantify your improvement: (new - old) / old x 100 — how much did fixing your method change your speed?",
        "link": "/lessons/gotham-day14-percent-change.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day14-02-percent-change-s1-s2.html",
        "script": "https://docs.google.com/document/d/1PlloMgcESCqaVKsR6vPlfiRaLW5V3OLrlG-r6P9k_-g/edit?usp=drive_link" },
      { "name": "Skills Arena", "mins": 30, "block": "Open Lab",
        "description": "If time allows — sharpen driving: straight lines, exact turns, park on a spot. Click the Done button at the end of each challenge to unlock the next.",
        "link": "/lessons/skills-arena.html" }
    ],
    "ends": "Every team has a written equation, a target hit, and a percent-change result."
  },
  {
    "day": 3, "week": 1, "weekName": "Catch-Up · Season 2 opens",
    "theme": "Proportional Scaling + reallocation + Season 2 matches",
    "bigMathIdea": "A straight-line stat (Motor Power = Speed x 5) scales by the same factor; a squared stat (Power squared) grows much faster. Season 2 opens: reallocate from your data, then test the new loadout in matches.",
    "vocabulary": "PROPORTIONAL SCALING, REALLOCATION — Season 2 stat changes. RESIDUAL — predicted minus actual.",
    "activities": [
      { "name": "Proportional Scaling — scaling your stats", "mins": 45, "block": "Challenge Block",
        "description": "A straight-line stat scales by the same factor; a squared stat grows much faster. See what a stat change will do before you reallocate.",
        "link": "/lessons/proportional-scaling-reallocation.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day11-02-commissioner-proposal-prep.html",
        "script": "https://docs.google.com/document/d/1s9wUXxuyLnXP-TNXoZV22tcXRDgv5g6wBUYuzYEQjk8/edit?usp=drive_link" },
      { "name": "Season 2 stat reallocation", "mins": 75, "block": "Challenge Block",
        "description": "Now you may reallocate stats. Fill out the My New Build worksheet, reprogram your bot, test the change in solo practice, then commit your new loadout in the dashboard.",
        "worksheet": "https://drive.google.com/file/d/1hvjemorLPT7x-US_yr6fLTlm_xh9xtJa/view?usp=drive_link",
        "exemplar": "https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W3_D11_Reallocation.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day11-03-underdog-mechanic-reallocation.html",
        "script": "https://docs.google.com/document/d/1uub9UpMbQF4he0B55d5SCFc8Jg7RbYljg-A5i_nHo9E/edit?usp=drive_link" },
      { "name": "Lunch", "mins": 60, "block": "Lunch", "description": "One hour." },
      { "name": "Season 2 Match Day — Rounds 1-3", "mins": 90, "block": "Match-Build-Make",
        "description": "Play the truncated Season 2 on your new loadout. Predict before each; log predicted vs. actual right after; confirm every result is in the dashboard.",
        "link": "/lessons/match-day-steps.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day13-03-s2-match-day-1.html",
        "script": "https://docs.google.com/document/d/18HoVS51dmWMg0yHU5rjWg6EY7Uz4MAjbJ-cPaOmZavU/edit?usp=drive_link" },
      { "name": "Open Lab — log + Skills Arena", "mins": 30, "block": "Open Lab",
        "description": "Confirm every Season-2 result is logged; sharpen driving in the Skills Arena if time.",
        "link": "/lessons/skills-arena.html" }
    ],
    "ends": "Stats reallocated and tested in a Season-2 match block; every result logged."
  },
  {
    "day": 4, "week": 1, "weekName": "Catch-Up · Season 2",
    "theme": "Teach the Math + poster + Post-Task",
    "bigMathIdea": "You understand it when you can teach it. Explain your equation so a stranger can use it after one explanation. Then show your growth since Day 1.",
    "vocabulary": "PLAIN LANGUAGE — no jargon. GROWTH — Day 1 versus now.",
    "activities": [
      { "name": "Teach the Math", "mins": 60, "block": "Challenge Block",
        "description": "Protected — do not cut. Explain your equation in plain words with your real numbers. A partner plays a confused visitor and tries it once — a rehearsal for tomorrow's exhibition.",
        "link": "/lessons/pre-match-pitch-v2.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day17-01-pitch-rehearsal-teach-math.html",
        "script": "https://docs.google.com/document/d/1WPsfN7Gwbz809PmeEuuqzo5GNhcu8cyOpFxlT7JVdVg/edit?usp=drive_link" },
      { "name": "Create your poster", "mins": 60, "block": "Match-Build-Make",
        "description": "Your equation, a graph of your data, and your percent-change result — the artifact you'll teach from at the exhibition.",
        "link": "/lessons/equation-poster.html",
        "worksheet": "/lessons/equation-poster-worksheet.html" },
      { "name": "Lunch", "mins": 60, "block": "Lunch", "description": "One hour." },
      { "name": "Post-Task Diagnostic", "mins": 25, "block": "Challenge Block",
        "description": "Protected — never cut it. 12 minutes, individual, silent. Every student types name, last initial, and team exactly as on Day 1.",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day20-02-post-task-diagnostic.html",
        "script": "https://docs.google.com/document/d/1KYGrQCGgyWRPsgwlafFgnID0cetHfHpnEK8oQ3o7kr8/edit?usp=drive_link" },
      { "name": "Post-Reflection", "mins": 25, "block": "Challenge Block",
        "description": "Protected. The student reflection survey — same names as Day 1.",
        "link": "/activities/reflection-post/" },
      { "name": "Open Lab — exhibition setup", "mins": 70, "block": "Open Lab",
        "description": "Set up your exhibition station — poster, bot, dashboard; do one dry run. Skills Arena if time.",
        "link": "/lessons/open-lab-reflection.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day18-04-open-lab-reflection.html",
        "script": "https://docs.google.com/document/d/1lvW3OtIjKUPp7oxeYng28ghkXNTotYAh6RL108wr7CU/edit?usp=drive_link" }
    ],
    "ends": "Every team rehearsed teaching its equation, built its poster, and finished the Post-Task + Reflection."
  },
  {
    "day": 5, "week": 2, "weekName": "Catch-Up · Exhibition",
    "theme": "Community Exhibition + Awards",
    "bigMathIdea": "Teach a stranger your math — the real test that the math, not the robot, is what you learned.",
    "vocabulary": "EXPLANATION — a visitor succeeds after one of yours.",
    "activities": [
      { "name": "Expert Setup", "mins": 30, "block": "Hook",
        "description": "Stations ready — poster, bot, and dashboard on display; last rehearsal of your one sentence.",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day19-01-expert-setup-exhibition-prep.html",
        "script": "https://docs.google.com/document/d/1jcYn0LTmP2IHZHdX9WhYk0U2-2KKItI05cvSWAWhWbQ/edit?usp=drive_link" },
      { "name": "Community Exhibition — teaching begins + Best Teacher voting", "mins": 90, "block": "Match-Build-Make",
        "description": "A visitor solves a problem using your equation — you teach, they solve, you check. Hand each a Visitor Sheet; keep a Teach-a-Visitor tracker. Stay out of it; the students teach.",
        "worksheet": [{ "url": "/resources/teacher-guides/visitor-teach-handout.html", "label": "Teach-a-Visitor Handout" }, { "url": "https://docs.google.com/document/d/1u9hHevx2km9v_LSpe1lS-udOwx2DW2n3eaOy7Y8-8dY/edit?tab=t.0", "label": "Visitor Ballots" }],
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day19-02-community-exhibition-teaching.html",
        "script": "https://docs.google.com/document/d/1kPsmjmLJf6hZYdt6SSDuvMpwZoMSVShJtEGvzI37eJM/edit?usp=drive_link" },
      { "name": "Lunch", "mins": 60, "block": "Lunch", "description": "One hour." },
      { "name": "Community Exhibition continues + Walk the Wall", "mins": 60, "block": "Match-Build-Make",
        "description": "A second wave of visitors, then a quiet gallery walk — every artifact from the run on display.",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day20-01-walk-the-wall-final-gallery.html",
        "script": "https://docs.google.com/document/d/1XDCeJ8J2U_zF0_vdgpfAYD6L4EFX8oRX8ZoRXOLapJ8/edit?usp=drive_link" },
      { "name": "Awards Ceremony", "mins": 45, "block": "Match-Build-Make",
        "description": "Named by the math — Season 2 Champion, Most Improved (percent change), Best Analyst, Best Teacher — each with its calculation.",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day20-03-awards-ceremony.html",
        "script": "https://docs.google.com/document/d/1FPkaluCh58L3kfr2E7mx8GKXUJpYzD9391KWC2kBKlQ/edit?usp=drive_link" },
      { "name": "Open Lab — final debrief", "mins": 15, "block": "Open Lab",
        "description": "'On Day 1 I couldn't ___. Now I can ___.' What landed, what confused visitors, what you'd change.",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day19-05-open-lab-final-debrief.html",
        "script": "https://docs.google.com/document/d/13h94Qu4vn9Sxch1Nbo8oWIbjWgXtYDoJh7j1byr1laA/edit?usp=drive_link" }
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
