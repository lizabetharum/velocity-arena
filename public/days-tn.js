// Tennessee 16-day compressed schedule.
// Loaded on every page. Used only when the site picker is set to "TN"
// (see dispatcher in days.js).
//
// Days 1–14 inherit from DAYS_DEFAULT (TN runs identical content for
// the first three weeks; the only difference is the 8:00 AM start
// time, handled by the renderer via CONFIG.siteDayStartMin).
//
// To OVERRIDE a Day 1–14 with TN-specific content, add an entry to
// TN_OVERRIDES below keyed by day number. The dispatcher swaps the
// default day for your override during the slice.
//
// Day 15  — Bot Identity + Match Day 3 (replaces default Day 15)
// Day 16  — Community Exhibition + Awards/Post-Task Diagnostic
//           (condenses default Days 19 + 20 into one final day; the
//           Championship arc from Days 16–18 is cut for the 16-day
//           program)

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

const DAYS_TN = (typeof DAYS_DEFAULT !== 'undefined') ? [
  // ── Days 1–14: inherit from default, with TN_OVERRIDES applied ──
  ...DAYS_DEFAULT.slice(0, 14).map(d => TN_OVERRIDES[d.day] || d),

  // ── Day 15 (TN) — Creative Expression: Bot Identity + Scouting ────
  {
    "day": 15,
    "week": 4,
    "weekName": "Showcase Week",
    "theme": "Creative Expression: Bot Identity + Scouting Begins + Season 3 Begins",
    "bigMathIdea": "Verbal explanation of mathematical reasoning. Every claim in a pitch needs a number next to it. Scouting reports cite opponent stats as percentages and decay equations.",
    "vocabulary": "PITCH, SCOUTING REPORT. A pitch is a 2-minute mathematical argument: claim, evidence, calculation. Scouting reports turn a rival's stat allocation into percentages and equations you can plan against.",
    "activities": [
      {
        "name": "Bot Lore Gallery Walk",
        "mins": 25,
        "block": "Hook",
        "description": "Walk the room and re-read every bot origin story from Day 2. Then ask: has your bot's story changed? What happened in Seasons 1 and 2 that belongs in its lore now? Write one new sentence to add — something that only makes sense because you played the matches.",
        "facilitatorDescription": "Teams walk the room and re-read every bot origin story from Day 2. Each team writes one new sentence to add to their bot's lore — something that only makes sense because they played Seasons 1 and 2. Posts go back on the wall.",
        "script": "https://docs.google.com/document/d/1a7VLmihhAGvqVlVV43-5ZNT9fgtdltZcUdYa1JFT18g/edit?usp=drive_link",
        "worksheet": "https://drive.google.com/file/d/1LfW7zfZQbsOkv5RPL6MsJdMhu60F8KWZ/view?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day15-01-bot-lore-gallery-walk.html"
      },
      {
        "name": "Pre-Match Pitch Rehearsal + Teach the Math",
        "mins": 45,
        "block": "Challenge Block",
        "description": "Rehearse your 2-minute pre-match pitch. Format: 'Our stat optimization strategy is X, because [specific equation result]. Our opponent's predicted behavior is Y based on their [stat] allocation.' Then in the Teach the Math round, pick one calculation from your scouting report and explain it as if a visitor just walked in and has never seen the system. No bot jargon. Plain terms.",
        "facilitatorDescription": "Teams rehearse their 2-minute pre-match pitch. Peer feedback after each: did they cite a specific number for every claim? Yes or no. Then the Teach the Math round: 3 minutes per team to explain one calculation in plain terms (no bot jargon). Room asks one follow-up per team: 'How did you get that specific number?' If the answer requires a calculation, do it on the board in real time.",
        "script": "https://docs.google.com/document/d/1WPsfN7Gwbz809PmeEuuqzo5GNhcu8cyOpFxlT7JVdVg/edit?usp=drive_link",
        "webpage": "https://velocity-arena-gold.vercel.app/lessons/pre-match-pitch.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day17-02-pitch-rehearsal-teach-math.html"
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
        "facilitatorDescription": "Season 2 match day with rotating ball modes. Commissioners may set the order. Teams must record the ball mode with each prediction and result on the Prediction Tracker. Resolve Prediction Market cards at close: read each team's final Season 2 record against their public prediction. Bridge to tomorrow's exhibition: which stat changes produced proportional results?",
        "script": "https://docs.google.com/document/d/1VRuoTtA4ZSBNUsULeeu-7rSjM_GTGBJSNVQUZu5C-Wc/edit?usp=sharing",
        "worksheet": "https://drive.google.com/file/d/1B3wx_eZdLcpXvfKFcWDbhrGj3OJ6YzVN/view?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day15-03-match-day-3.html"
      },
      {
        "name": "Open Lab: Reflection + Pitch Refinement",
        "mins": 15,
        "block": "Open Lab",
        "description": "Rehearse your pitch one more time as a team. Add specific numbers to any claim that is still vague. Every claim in the pitch needs a number next to it before tomorrow.",
        "facilitatorDescription": "Teams rehearse the pitch once more. Every vague claim needs a specific number. By end of session, every claim in every pitch has a number next to it.",
        "script": "https://docs.google.com/document/d/1yro_I-SJCEKRtNaY2TEFO6QQgdoiMeQ-ZGt4bh59DRU/edit?usp=drive_link",
        "webpage": "https://velocity-arena-gold.vercel.app/lessons/open-lab-reflection.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day17-05-open-lab-pitch-bot-prep.html"
      },
      {
        "name": "ENDS Closing Ritual",
        "mins": 10,
        "block": "ENDS",
        "description": "Describe a moment when the data changed your mind. What did you believe before you saw the data? What do you believe now? Name the specific number or calculation that changed your thinking. You have 5 minutes.",
        "facilitatorDescription": "Closing reflection. Each student names a moment where data changed their mind, with a specific number or calculation cited."
      }
    ]
  },

  // ── Day 16 (TN) — Community Exhibition + Awards/Post-Task ─────────
  // Condenses default Days 19 + 20: Exhibition, Best Teacher voting,
  // Post-Task Diagnostic, Final Gallery Walk, Awards Ceremony.
  {
    "day": 16,
    "week": 4,
    "weekName": "Showcase Week",
    "theme": "Community Exhibition: You Are the Experts Now",
    "bigMathIdea": "Mathematical reasoning explained to an external audience. The post-task diagnostic measures Day-1-to-now growth on the same eight concepts.",
    "vocabulary": "EXHIBITION, POST-TASK. The exhibition is the program's closing demonstration: visitors complete unit-rate, distance, and proportional-scaling mini-challenges. The post-task diagnostic is the Day 1 diagnostic in parallel form — same concepts, same age-appropriate non-bot contexts.",
    "activities": [
      {
        "name": "Expert Setup",
        "mins": 25,
        "block": "Hook",
        "description": "Set up your station: scouting report, bot, coordinate grid, and data dashboard on display. Practice teaching the three visitor mini-challenges on a teammate: unit rate calculation, coordinate distance, and proportional scaling explanation. Write down the one thing you want every visitor to understand before they leave.",
        "facilitatorDescription": "Teams set up their station: scouting report, bot, coordinate grid, dashboard on display. Practice teaching the three visitor mini-challenges on a teammate. Each team writes down the one thing they want every visitor to understand before they leave.",
        "script": "https://docs.google.com/document/d/1jcYn0LTmP2IHZHdX9WhYk0U2-2KKItI05cvSWAWhWbQ/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day19-01-expert-setup-exhibition-prep.html"
      },
      {
        "name": "Post-Task Diagnostic: Prior Knowledge Reassessment",
        "mins": 15,
        "block": "Challenge Block",
        "description": "Same concept set as the Day 1 pre-task: proportional reasoning, unit rate, ratio, proportional scaling, coordinate geometry (including distance), slope as rate of change, and linear decay. Same age-appropriate non-bot contexts. 15 minutes, individual. The only formal assessment of the day.",
        "facilitatorDescription": "Parallel form of the Day 1 pre-task. Compare results to Day 1 per concept. The only formal assessment today.",
        "script": "https://docs.google.com/document/d/1KYGrQCGgyWRPsgwlafFgnID0cetHfHpnEK8oQ3o7kr8/edit?usp=drive_link",
        "webpage": "https://velocity-arena-gold.vercel.app/activities/diagnostic-post/index.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day20-02-post-task-diagnostic.html"
      },
      {
        "name": "Community Exhibition: Teaching Begins + Best Teacher Voting",
        "mins": 70,
        "block": "Match-Build-Make",
        "description": "Visitors arrive. Teach each visitor to complete three mini-challenges: (1) calculate a unit rate from scouting data — Season 1 wins ÷ Speed stat, stated as wins per 1 Speed point; (2) plot two match coordinates on the arena grid and calculate the distance between them; (3) explain in your own words why your Speed stat and motor power scale proportionally. Goal: every visitor completes all three independently, without prompting after the initial explanation.",
        "facilitatorDescription": "Visitors arrive and circulate among team stations. Teams teach unit rate, coordinate distance, and proportional scaling. Visitors are the assessment: each must complete all three mini-challenges independently after initial explanation. Best Teacher voting open through the session.",
        "script": "https://docs.google.com/document/d/1kPsmjmLJf6hZYdt6SSDuvMpwZoMSVShJtEGvzI37eJM/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day19-02-community-exhibition-teaching.html"
      },
      {
        "name": "Lunch / Snack Break",
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
        "facilitatorDescription": "Final gallery walk. Quiet. Teams walk past every artifact from the four weeks. The room sees the full arc.",
        "script": "https://docs.google.com/document/d/1XDCeJ8J2U_zF0_vdgpfAYD6L4EFX8oRX8ZoRXOLapJ8/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day20-01-walk-the-wall-final-gallery.html"
      },
      {
        "name": "Awards Ceremony",
        "mins": 60,
        "block": "Match-Build-Make",
        "description": "Best Teacher award announced. The facilitator names one specific mathematical moment for each team — a particular calculation, a dashboard decision, a Commissioner argument — not generic praise. Each student names one personal growth area and one specific camp moment that demonstrates that growth.",
        "facilitatorDescription": "Best Teacher award announced first. Then per-team specific mathematical-moment recognition. Then student-led personal growth statements with one camp moment cited each. LO 9.2 verbal reflection runs here (Hello Insight post-survey).",
        "script": "https://docs.google.com/document/d/1FPkaluCh58L3kfr2E7mx8GKXUJpYzD9391KWC2kBKlQ/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day20-03-awards-ceremony.html"
      },
      {
        "name": "Open Lab: Final Debrief and Prep",
        "mins": 10,
        "block": "Open Lab",
        "description": "What did visitors understand quickly? What confused them? Identify one explanation that did not land and write a revised version. Prepare anything you want to say at the closing ceremony. Review the full data dashboard from Day 1 to today.",
        "facilitatorDescription": "Teams debrief the exhibition. One refined explanation per team. Anything they want to say at the ceremony goes on a card now.",
        "script": "https://docs.google.com/document/d/13h94Qu4vn9Sxch1Nbo8oWIbjWgXtYDoJh7j1byr1laA/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day19-05-open-lab-final-debrief.html"
      },
      {
        "name": "ENDS Closing Ritual",
        "mins": 10,
        "block": "ENDS",
        "description": "What did you learn about yourself as a problem solver? Name one specific moment from this program where you solved something you thought you could not. What did you do differently than you would have done before camp? You have 5 minutes.",
        "facilitatorDescription": "Final ENDS reflection. Each student names a specific moment where they solved something they thought they couldn't, and what they did differently than before camp."
      }
    ]
  }
] : [];
