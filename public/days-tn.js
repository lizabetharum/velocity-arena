// 16-day "4 days a week × 4 weeks" schedules.
// Loaded on every page. All four pilot sites except none use this shape;
// the only outlier was the default 20-day program which currently has no
// active pilot site assigned:
//   - TN  (Crosstown)                  — 8:05 AM start, compressed activity timings, snack break
//   - NY1 (Gotham Tech)                — Mon–Thu 10:00–3:00, full-length activities, lunch
//   - NY2 (Claremont International HS) — Mon–Thu 10:00–3:00, same as Gotham
//   - NY3 (South Bronx Community)      — Mon–Thu 10:00–3:00, same as Gotham
// NY1, NY2, and NY3 share DAYS_NY1; TN has its own DAYS_TN with the
// patches/skips. See dispatcher in days.js.
//
// Days 1–14 inherit from DAYS_DEFAULT with TN_OVERRIDES re-tagging the
// week numbers so they fit into 4 weeks of 4 days each. Days 15 and 16
// are a compressed closing arc that condenses the default Days 15–20
// (Bot Identity → Scouting → Championship → Exhibition → Awards) into
// just two days — used by both TN and NY1.
//
// Site-specific timing compressions live in TN_ACTIVITY_PATCH /
// TN_ACTIVITY_SKIP and are applied via buildFourWeekDays() when a site
// passes them in. NY1 calls buildFourWeekDays(null, null) to opt out
// (so Gotham keeps full-length activities and the regular 60-min lunch).

// Per-day overrides for Days 1–14. Key by day number. The override
// object's full activity shape replaces the default day entirely.
// Example:
//   5: {
//     day: 5, week: 1, weekName: "Play Lab + Boot Camp",
//     theme: "TN-specific Day 5 theme",
//     activities: [ ... ]
//   },
// Week reassignments for the 4-week × 4-day TN grid:
//   Week 1: Days 1–4   (default Day 5 moves into Week 2)
//   Week 2: Days 5–8
//   Week 3: Days 9–12  (default Days 9–10 are Week 2 in the 20-day arc)
//   Week 4: Days 13–16 (default Days 13–14 are Week 3 in the 20-day arc)
const TN_OVERRIDES = (typeof DAYS_DEFAULT !== 'undefined') ? {
  5:  { ...DAYS_DEFAULT[4],  week: 2, weekName: 'Season 1' },
  9:  { ...DAYS_DEFAULT[8],  week: 3, weekName: 'Commissioner / Season 2' },
  10: { ...DAYS_DEFAULT[9],  week: 3, weekName: 'Commissioner / Season 2' },
  13: { ...DAYS_DEFAULT[12], week: 4, weekName: 'Showcase Week' },
  14: { ...DAYS_DEFAULT[13], week: 4, weekName: 'Showcase Week' },
} : {};

// ── TN per-activity patches ───────────────────────────────────
// TN runs a shorter day (8:05–12:00 ≈ 3h55m vs default 10:00–2:45 ≈ 4h45m),
// so many activities need shorter durations or different labels.
//
// Values may be a NUMBER (shorthand for { mins: N }) or an OBJECT with any
// subset of { mins, name, ... } to merge in. Key shapes:
//   'Activity Name'         applies on every day that activity appears
//   'Day N:Activity Name'   applies only on Day N (wins over the plain key)
const TN_ACTIVITY_PATCH = {
  'Day 1:Open Lab: Free Code Time': 20,
  'Day 2:Program Endurance Into Your Bot': 70,
  'Day 3:Human Robot Programming Challenge': 20,
  'Day 3:Distance-Time Graphs': 70,
  'Day 3:Open Lab: Free Code Time': 25,
  'Day 5:Open Lab: Free Code Time': 25,
  'Day 6:Launch Showcase': 15,
  'Day 6:Open Lab: Free Code or Final Verification': 10,
  'Day 8:Season 1 Match Day 2': 80,
  'Day 10:Open Lab: Season 2 Planning':20,
  'Day 11:Practice Matches: Test New Loadout Hypotheses':65,
  'Day 12:Open Lab: Season 2 Allocation Verification': {
  name: 'Open Lab: Season 2 Allocation',
  mins: 50
},
  'Day 14:Open Lab: Equation Revision or Loadout Experiments':30,
  // Snack rename + 20-min cap applies everywhere TN has a Lunch slot.
  'Lunch / Snack Break': {
    name: 'Snack Break',
    mins: 20,
    facilitatorDescription: 'Eat and rest. 20-minute protected break. No math talk.',
  },
};

// Activities to DROP entirely from TN. Same key shape as TN_ACTIVITY_PATCH:
// 'Activity Name' drops on every day; 'Day N:Activity Name' drops only that day.
const TN_ACTIVITY_SKIP = new Set([
  'Day 2:Open Lab: Free Code Time',
  'Day 3:Energy Reset',
]);

// ── Day 15 — Creative Expression: Bot Identity + Scouting ──────────
// Shared by TN and NY1 (and any future 16-day site).
const DAY_15_INLINE = {
    "day": 15,
    "week": 4,
    "weekName": "Showcase Week",
    "theme": "Creative Expression: Bot Identity + Match 3",
    "bigMathIdea": "Verbal explanation of mathematical reasoning. Every claim in a pitch needs a number next to it. Scouting reports cite opponent stats as percentages and decay equations.",
    "vocabulary": "PITCH, SCOUTING REPORT. A pitch is a 2-minute mathematical argument: claim, evidence, calculation. Scouting reports turn a rival's stat allocation into percentages and equations you can plan against.",
    "activities": [
      {
        "name": "Bot Lore Gallery Walk",
        "mins": 25,
        "block": "Hook",
        "description": "Walk the room and re-read every bot origin story from Day 2. Then ask: has your bot's story changed? What happened in Seasons 1 and 2 that belongs in its lore now? Write one new sentence to add — something that only makes sense because you played the matches.",
        "facilitatorDescription": "Ask teams to walk the room and re-read every bot origin story posted since Day 2. Each team then writes one new sentence to add to their own bot's lore — something that only makes sense because they played both seasons. Give teams three minutes to write and post. This reconnects students to their bot identity before the final matches and Exhibition prep that follow.",
        "script": "https://docs.google.com/document/d/1a7VLmihhAGvqVlVV43-5ZNT9fgtdltZcUdYa1JFT18g/edit?usp=drive_link",
        "worksheet": "https://drive.google.com/file/d/1LfW7zfZQbsOkv5RPL6MsJdMhu60F8KWZ/view?usp=drive_link",
       "exemplar":"https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W4_D15-bot-lore-gallery-walk-exemplars.html",
       "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day15-01-bot-lore-gallery-walk.html"
      },
      {
        "name": "Teach the Math",
        "mins": 45,
        "block": "Challenge Block",
        "description": "The Teach the Math round, pick one calculation from the four weeks and explain it as if a visitor just walked in and has never seen the system. No bot jargon. Plain terms.",
        "facilitatorDescription": "Before the block, make sure every device has the Teach the Math interactive lesson open. Write on the board: Formula | Team | YES / NO / Partial. Each student picks one formula from the tool (Speed, Endurance, Turning, Power, Budget, Percent Change, Distance, Linear Equation, or Proportional Scaling); no two students pick the same one. Students enter numbers from their bot record, hit Calculate, read the walkthrough aloud, then write a plain-language explanation in the tool (sentence starters built in). They can hit Check My Explanation, then complete the three Ready Check items. In room presentations, each team explains their formula and calculation in plain language; after every explanation, ask: 'How did you get that specific number?' Two errors to catch: P squared = P × 2, and dividing percent change by the new value instead of the old. Exit ticket: index card with formula, full calculation, and one plain-language sentence.",
        "script": "https://docs.google.com/document/d/1BUI5_XlppNhAiimv8aDCcuHaWTYVaPKSX_4rOGvZ1yU/edit?usp=sharing",
        "worksheet": "https://drive.google.com/file/d/1YxCKCOr07VSMC8RnMHKfDmvni1-6dBP4/view?usp=drive_link",
        "exemplar":"https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W4_D15-pitchcard-exemplars.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day15-02-teach-math.html"
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 20,
        "block": "Break",
        "description": "Eat and rest.",
        "facilitatorDescription": "20-minute snack break."
      },
      {
        "name": "Match Day 3",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Three rounds of round-robin play. Equation prediction ritual before every match; loss-recovery for every losing team after. Day 15 alternates ball modes — one match Standard (tennis), one Chaos (ping pong), one Endurance (weighted ball). Record the ball mode used with each prediction and result on the Prediction Tracker. After all three matches, compare Season 2 residuals against Season 1 — which stat changes produced proportional results?",
        "facilitatorDescription": "Before the activity, set up three ball types — foam for Round 1, ping pong for Round 2, tennis for Round 3 — and post the ball mode chart. Fill in every team's Prediction Market row through Match Day 2 before students arrive. Confirm every team has a written linear equation from Day 12. Open by having everyone look at Match Day 1 and 2 residuals for 20 seconds, then ask whether their equation got more accurate, less accurate, or stayed the same — hold the question. Run the MY EQUATION check: every team fills in slope, intercept, equation, x-variable, and prediction card goal before Match 1; do not start until every team has a written equation. Before every match, announce the ball mode and have teams log it before they predict — the ball mode is a transfer test, not a surprise. Run the Prediction Ritual and three rounds with loss recovery between losses. In Summary, read the Prediction Market in miss-to-hit order and name the Best Prediction distinction. Run the Retrospective: push students to name which of four causes explains their residual pattern (slope error, x-variable choice, model drift, environmental sensitivity). After the exit ticket, run the Bracket Reveal.",
        "script": "https://docs.google.com/document/d/1VRuoTtA4ZSBNUsULeeu-7rSjM_GTGBJSNVQUZu5C-Wc/edit?usp=sharing",
        "worksheet": "https://drive.google.com/file/d/1B3wx_eZdLcpXvfKFcWDbhrGj3OJ6YzVN/view?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day15-03-match-day-3.html"
      },
       {
        "name": "Post-Task Diagnostic: Prior Knowledge Reassessment",
        "mins": 15,
        "block": "Challenge Block",
        "description": "Same concept set as the Day 1 pre-task: proportional reasoning, unit rate, ratio, proportional scaling, coordinate geometry (including distance), slope as rate of change, and linear decay. Same age-appropriate non-bot contexts. 15 minutes, individual. The only formal assessment of the day.",
        "facilitatorDescription": "Before the block, open the diagnostic website and confirm it is unlocked. Set a 12-minute countdown timer. Before anyone opens a device, deliver the framing script: 'On Day 1, you filled out something like this, and most of you didn't know most of the answers. Today you do. I'm not grading you against anyone else. I'm comparing you to yourself from four weeks ago. Every answer you know today that you did not know on Day 1 is evidence of what happened in this room. Fill it out completely.' Stand at the side of the room. If a student raises a hand, say 'Read it again carefully. Do your best,' and move away. Call time when the timer sounds, say 'Computers closed,' and follow with one non-evaluative closing sentence before moving to the next block. After, review the Diagnostic Dashboard.",
        "script": "https://docs.google.com/document/d/1KYGrQCGgyWRPsgwlafFgnID0cetHfHpnEK8oQ3o7kr8/edit?usp=drive_link",
        "webpage": "https://velocity-arena-gold.vercel.app/activities/diagnostic-post/index.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day20-02-post-task-diagnostic.html"
      },
      {
        "name": "Open Lab: Reflection Time",
        "mins": 30,
        "block": "Open Lab",
        "description": "Rehearse your pitch one more time as a team. Add specific numbers to any claim that is still vague. Every claim in the pitch needs a number next to it before tomorrow.",
        "facilitatorDescription": "Direct teams to prepare their Community Exhibition presentation using their Bot Identity card. Each team must be able to explain their bot's name and allocation, compute one formula using their actual numbers, recite their biggest gap sentence from either season, and describe one change they made from Season 1 to Season 2 and why. Run a quick rehearsal with a teammate as the stand-in guest. The Skill Bridge closing ritual ends the day.",
        "script": "https://docs.google.com/document/d/1yro_I-SJCEKRtNaY2TEFO6QQgdoiMeQ-ZGt4bh59DRU/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day17-05-open-lab-pitch-bot-prep.html"
      },
      {
        "name": "ENDS Closing Ritual",
        "mins": 10,
        "block": "ENDS",
        "description": "What will you tell someone tomorrow at the Exhibition about what you learned? You have 5 minutes.",
        "facilitatorDescription": "Closing reflection. Each student names a moment where data changed their mind, with a specific number or calculation cited."
      }
    ],
    "produce": [
      "Bot lore — one new sentence added to team's bot origin story; posted on wall",
      "Teach the Math card — one formula chosen, calculated with team's actual stat numbers; plain-language explanation written; three Ready Check items completed",
      "Pre-match prediction (×3) — equation-based win probability logged before each of three Season 2 final matches; ball mode (foam/ping-pong/tennis) recorded",
      "Match data log — predicted vs. actual recorded for each match; residual calculated",
      "Loss-recovery entry — one of four causes named for any losing match (slope error, x-variable choice, model drift, environmental sensitivity)",
      "Residual comparison — Season 2 prediction accuracy compared against Season 1; one written sentence naming what changed",
      "Post-task diagnostic — math questions answered individually, parallel form to Day 1 pre-task",
      "Pitch rehearsal — every claim in the Community Exhibition pitch annotated with a specific number"
    ]
};

// ── Day 16 — Community Exhibition + Awards/Post-Task ──────────────
// Condenses default Days 19 + 20: Exhibition, Best Teacher voting,
// Post-Task Diagnostic, Final Gallery Walk, Awards Ceremony.
// Shared by TN and NY1.
const DAY_16_INLINE = {
    "day": 16,
    "week": 4,
    "weekName": "Showcase Week",
    "theme": "Community Exhibition: You Are the Experts Now",
    "bigMathIdea": "Mathematical reasoning explained to an external audience. The post-task diagnostic measures Day-1-to-now growth on the same eight concepts.",
    "vocabulary": "EXHIBITION, POST-TASK. The exhibition is the program's closing demonstration: visitors complete unit-rate, distance, and proportional-scaling mini-challenges. The post-task diagnostic is the Day 1 diagnostic in parallel form — same concepts, same age-appropriate non-bot contexts.",
    "activities": [
      {
        "name": "Expert Setup",
        "mins": 40,
        "block": "Hook",
        "description": "Set up your station: scouting report, bot, coordinate grid, and data dashboard on display. Practice teaching the three visitor mini-challenges on a teammate: unit rate calculation, coordinate distance, and proportional scaling explanation. Write down the one thing you want every visitor to understand before they leave.",
        "facilitatorDescription": "Give teams 40 minutes to set up their station — scouting report, bot, coordinate grid, and dashboard on display — and practice teaching the three visitor mini-challenges to a teammate before guests arrive. Circulate and listen: if a team's explanation uses too much jargon or skips the formula calculation, prompt a revision — 'explain it to me as if you have never heard of a bot.' Each team also writes down the one thing they want every visitor to understand before they leave.",
        "script": "https://docs.google.com/document/d/1jcYn0LTmP2IHZHdX9WhYk0U2-2KKItI05cvSWAWhWbQ/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day19-01-expert-setup-exhibition-prep.html"
      },
      
      {
        "name": "Community Exhibition: Teaching Begins + Best Teacher Voting",
        "mins": 70,
        "block": "Match-Build-Make",
        "description": "Visitors arrive. Teach each visitor to complete three mini-challenges: (1) calculate a unit rate from scouting data — Season 1 wins ÷ Speed stat, stated as wins per 1 Speed point; (2) plot two match coordinates on the arena grid and calculate the distance between them; (3) explain in your own words why your Speed stat and motor power scale proportionally. Goal: every visitor completes all three independently, without prompting after the initial explanation.",
        "facilitatorDescription": "Keep guests asking questions and redirect any guest confusion back to the student: 'can you show them the formula on your Bot Identity card?' If a student struggles to explain, ask a simpler question to the student, not to the guest. Stay out of the explanation entirely. Your only moves are redirecting, timekeeping, and ensuring every station gets visitors. Student teaching is the point of this session; any facilitator move that answers a question on behalf of a student undermines it.",
        "script": "https://docs.google.com/document/d/1BxOpLcNK_m69kX2Iqw69IyCNfIs6PjZw2Bc4pw7eAhE/edit?usp=sharing",
        "worksheet":[{url:"https://drive.google.com/file/d/11FHY_zkXLdeoaalC_FWDWygKerIXE6P-/view?usp=drive_link",label: "Day 16 Visitor Challenge Handout"},
          {url:"https://docs.google.com/document/d/1u9hHevx2km9v_LSpe1lS-udOwx2DW2n3eaOy7Y8-8dY/edit?usp=drive_link",label: "Ballots"},
        {url: "https://docs.google.com/document/d/1dJK2knM3Ck362snzQbzY5qf-IVG017cT58zHUXVgUnU/edit?usp=sharing", label: "Visitor Completion Tracker"}],
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day19-02-community-exhibition-teaching.html"
      },
      {
        "name": "Snack Break",
        "mins": 20,
        "block": "Break",
        "description": "Eat and rest. The afternoon belongs to the ceremony and free time.",
        "facilitatorDescription": "20-minute snack break."
      },
      {
        "name": "Walk the Wall: Final Gallery",
        "mins": 20,
        "block": "Hook",
        "description": "Final gallery walk of every artifact: bot origin stories, rivalry cards, leaderboard history, Commissioner rule changes, scouting reports, the Day 1 goals from Week 1. Walk quietly. Look at what four weeks of work look like.",
        "facilitatorDescription": "Run the Walk the Wall gallery quietly. Every artifact from the four weeks is on display — bot names, scouting reports, rivalry cards, the leaderboard, Commissioner proposals, and meeting results. Do not narrate or highlight specific items. Students walk in relative silence and observe the full arc of the program. Give this moment its full time without cutting it short to add commentary.",
        "script": "https://docs.google.com/document/d/1XDCeJ8J2U_zF0_vdgpfAYD6L4EFX8oRX8ZoRXOLapJ8/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day20-01-walk-the-wall-final-gallery.html"
      },
     
      {
        "name": "Awards Ceremony",
        "mins": 60,
        "block": "Match-Build-Make",
        "description": "Best Teacher award announced. The facilitator names one specific mathematical moment for each team — a particular calculation, a dashboard decision, a Commissioner argument — not generic praise. Each student names one personal growth area and one specific camp moment that demonstrates that growth.",
        "facilitatorDescription": "Announce the Best Exhibition award first, then move through each remaining award — Season 2 Champion, Best Analyst, Most Improved, Best Prediction Market, and Best Commissioner Proposal. Every award is announced with the data criterion that determined it: 'you won Most Improved because your percent change from Season 1 to Season 2 win rate was the highest in the class, here is the calculation.' Make the math visible in the celebration, not just the winner. After all awards, invite student-led personal growth statements: each student names one program moment and what they learned from it.",
        "script": "https://docs.google.com/document/d/1FPkaluCh58L3kfr2E7mx8GKXUJpYzD9391KWC2kBKlQ/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day20-03-awards-ceremony.html"
      },
      
      {
        "name": "Open Lab: Final Debrief",
        "mins": 10,
        "block": "Open Lab",
        "description": "What did visitors understand quickly? What confused them? Identify one explanation that did not land and write a revised version. Prepare anything you want to say at the closing ceremony. Review the full data dashboard from Day 1 to today.",
        "facilitatorDescription": "Close the program with the final Journal Entry ritual: what did you learn about yourself as a problem solver, and name one specific moment where you solved something you thought you could not? Give students five minutes to write, then ask two or three to share aloud. The session ends with you naming what the program produced — not a winner, but a room of students who can explain algebra using their own data.",
        "script": "https://docs.google.com/document/d/13h94Qu4vn9Sxch1Nbo8oWIbjWgXtYDoJh7j1byr1laA/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day19-05-open-lab-final-debrief.html"
      },
      {
        "name": "ENDS Closing Ritual",
        "mins": 10,
        "block": "ENDS",
        "description": "What did you learn about yourself as a problem solver? Name one specific moment from this program where you solved something you thought you could not. What did you do differently than you would have done before camp? You have 5 minutes.",
        "facilitatorDescription": "Final ENDS reflection. Each student writes what they learned about themselves as a problem solver. Name one specific moment from this program where you solved something you thought you could not. What did you do differently than you would have done before camp? You have 5 minutes."
      }
    ],
    "produce": [
      "Station display — scouting report, bot, coordinate grid, and data dashboard arranged for visitors",
      "Teaching goal — one sentence written: what the team wants every visitor to understand before they leave",
      "Visitor mini-challenge facilitation — each visitor guided through unit rate calculation, coordinate distance, and proportional scaling explanation",
      "Visitor tracker — completion logged for every visitor across all three mini-challenges",
      "Best Teacher ballots — collected from visitors for the award tally",
      "Revised explanation — one teaching point that did not land identified and rewritten",
      "Final journal entry — individual reflection on what you learned about yourself as a problem solver; one specific moment you solved something you thought you could not"
    ]
};

// ── Generic 4-day-week builder ────────────────────────────────
// Assembles the 16-day schedule (default Days 1–14 with TN_OVERRIDES
// re-weeking, then DAY_15_INLINE and DAY_16_INLINE for the closing arc).
// Pass patches + skips to apply per-site compressions; pass null/null to
// keep the default activity durations and labels.
function buildFourWeekDays(patches, skips) {
  patches = patches || {};
  skips = (skips && skips.has) ? skips : new Set(skips || []);
  function patchDay(d) {
    var acts = d.activities
      .filter(function(a) {
        return !skips.has('Day ' + d.day + ':' + a.name) && !skips.has(a.name);
      })
      .map(function(a) {
        var scoped = patches['Day ' + d.day + ':' + a.name];
        var plain  = patches[a.name];
        var patch  = scoped != null ? scoped : plain;
        if (patch == null) return a;
        var overrides = (typeof patch === 'number') ? { mins: patch } : patch;
        return Object.assign({}, a, overrides);
      });
    return Object.assign({}, d, { activities: acts });
  }
  if (typeof DAYS_DEFAULT === 'undefined') return [];
  return [
    // Days 1–14: default content reshuffled into 4 weeks of 4, then patched.
    ...DAYS_DEFAULT.slice(0, 14).map(function(d) {
      return patchDay(TN_OVERRIDES[d.day] || d);
    }),
    patchDay(DAY_15_INLINE),
    patchDay(DAY_16_INLINE)
  ];
}

// Tennessee / Crosstown — compressed timings + 20-min snack break.
const DAYS_TN = buildFourWeekDays(TN_ACTIVITY_PATCH, TN_ACTIVITY_SKIP);

// Gotham Tech (NY1) — 4 days/week, full-length activities, 60-min lunch.
// Day 15 + Day 16 still use the compressed closing-arc inline content
// (Bot Identity, Exhibition, Awards, Post-Task Diagnostic).
const DAYS_NY1 = buildFourWeekDays(null, null);
