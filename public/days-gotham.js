// Gotham Tech (NY1) — compressed "final four days" schedule (plan v3).
//
// Gotham fell behind and runs the v3 arc across its last four days:
//   Day 13  Distance Lab — collect predicted-vs-actual data
//   Day 14  Analyze — build the equation, Model Swap, Proving Rounds
//   Day 15  Assessments first, then the championship, then teach-back
//   Day 16  Community Exhibition
//
// Days 1–12 are unchanged from the master schedule (DAYS_DEFAULT). Only the
// closing four days differ, so this file reuses DAYS_DEFAULT.slice(0, 12) and
// appends four inline day objects below.
//
// Full rationale + block timings live in
//   /resources/teacher-guides/gotham-days13-16-plan-v3.html   (planning)
//   /resources/teacher-guides/gotham-v3-teacher-card.html     (in-the-room steps)
//
// The dispatcher in days.js routes site code NY1 to DAYS_GOTHAM.
// This file must load AFTER days-default.js and BEFORE days.js.

const GOTHAM_DAY_13 = {
  "day": 13,
  "week": 4,
  "weekName": "Final Four Days",
  "theme": "Distance Lab — turn a moving bot into data",
  "bigMathIdea": "A prediction is a model, not a guess. Measure distance, compare it to what you predicted, and the gap tells you what to fix. distance = speed x time - startup lag is y = mx + b.",
  "vocabulary": "PREDICTION, GAP (prediction error), RATE OF CHANGE. The gap is predicted minus actual. The rate of change is centimetres per second — the bot's speed, and the slope of its line.",
  "activities": [
    {
      "name": "Hook: What the arc looks like",
      "mins": 20,
      "block": "Hook",
      "description": "Watch one real team from the Crosstown pilot: their prediction, what actually happened, and the single change that closed their gap. By the end you should be able to say what you are about to do today.",
      "facilitatorDescription": "Share the Crosstown pilot data. Show one team's predicted-vs-actual across rounds and the one change that shrank their gap. Do not teach the math yet — show the story so students know where the day is going."
    },
    {
      "name": "Lock loadouts + the two rituals",
      "mins": 25,
      "block": "Challenge Block",
      "description": "Lock your four stats (they add to 20). Learn the two moves you'll repeat all day: write a prediction BEFORE the bot moves, and after every run say 'we predicted ___, we got ___, the gap was ___, because ___.'",
      "facilitatorDescription": "Lock stats (sum 20; only Tuesday's window changes them). Teach the prediction ritual (one number, written before the run, signed) and the gap sentence. Today the predicted number is centimetres. The same two rituals carry into every later measure."
    },
    {
      "name": "Distance Lab",
      "mins": 75,
      "block": "Challenge Block",
      "description": "Drive 1 second, measure the centimetres — that's your bot's speed. Then predict a longer drive, run it, measure the miss, change ONE number, and go again. Five trials. Every bot that moves gives you a number.",
      "facilitatorDescription": "Because matches have produced no data, start with distance, not soccer. One second of driving gives cm/sec; teams predict a longer drive, measure the gap, change one number, repeat to five trials. This produces Tuesday's data AND repairs the bots — a bot that drives a predicted distance straight can reach a ball. Print one worksheet per team. Allow 45-60 min; re-flashing the micro:bit is the slow part, so button B steps the drive time with no re-download.",
      "link": "/lessons/distance-lab-worksheet.html",
      "makecode": { "url": "https://makecode.microbit.org/S87172-87501-09985-96061", "label": "Distance Lab code (MakeCode)" },
      "worksheet": "/resources/teacher-guides/distance-lab.html"
    },
    {
      "name": "Lunch",
      "mins": 60,
      "block": "Break",
      "description": "Protected. No math talk.",
      "facilitatorDescription": "Protected break."
    },
    {
      "name": "Test it — matches if you can, more trials if you can't",
      "mins": 70,
      "block": "Match-Build-Make",
      "description": "Can your bot reach the ball now? If yes, play a few real matches and record goals and touches. If not, run five more distance trials at new times. Either way, keep the gap sentence after every run.",
      "facilitatorDescription": "If bots can now reach the ball, run Rounds 1-3 from the match schedule and record goals plus touches alongside the distance data. If not, do not force it — five more Distance Lab trials at new times. Keep the gap sentence after every single run; it is the Goal 3 evidence trail.",
      "link": "/resources/teacher-guides/gotham-match-schedule.html"
    },
    {
      "name": "Close + preview tomorrow",
      "mins": 25,
      "block": "Open Lab",
      "description": "Each team says its biggest gap out loud and one reason for it. Tomorrow you turn today's numbers into an equation.",
      "facilitatorDescription": "Each team states its biggest gap and one hypothesis. Preview Tuesday honestly: 'Tomorrow we stop guessing — you turn these numbers into an equation and test whether it is any good.'"
    }
  ],
  "ends": "Name the one thing about your bot you were most wrong about today. You have 3 minutes."
};

const GOTHAM_DAY_14 = {
  "day": 14,
  "week": 4,
  "weekName": "Final Four Days",
  "theme": "Turn the data into a model — then prove it",
  "bigMathIdea": "Two points make a line, but a line from two points is a claim you have to test. Rate of change, y-intercept, and residual all come from the team's own numbers.",
  "vocabulary": "SLOPE (m), Y-INTERCEPT (b), RESIDUAL. Residual = predicted minus actual on a run you did not use to build the line. A small residual means the model holds.",
  "activities": [
    {
      "name": "Hook: The Residual Board",
      "mins": 15,
      "block": "Hook",
      "description": "Read yesterday's board. Whose predictions got better as the day went on, and why?",
      "facilitatorDescription": "Read Monday's board aloud. Frame the day: 'Whose predictions got better, and why?' Name the Best Prediction team, not just the most wins."
    },
    {
      "name": "Build your equation",
      "mins": 60,
      "block": "Challenge Block",
      "description": "Plot what you measured yesterday — for most teams that's distance (cm) up the side, drive time (seconds) across the bottom. Pick two of your own points, find the rate of change, solve for b, and write y = m x + b.",
      "facilitatorDescription": "Class scatter plot from yesterday's real results. Plot whatever they measured on y (distance for most Gotham teams; touches or goals if they got them — procedure identical). Each team uses two of their own rows, finds the rate of change, solves for b. Every team's equation differs; that is the point. If Monday's data is thin, teach the method on the practice dataset first, then rebuild on real numbers.",
      "link": "/lessons/day13-linear-equations.html",
      "worksheet": "/resources/teacher-guides/day13-practice-dataset.html"
    },
    {
      "name": "Model Swap",
      "mins": 30,
      "block": "Challenge Block",
      "description": "First, make your model different from everyone else's in one way. Then study another team's equation and write down: what you keep, what you change, and why — citing a number.",
      "facilitatorDescription": "Ten minutes of divergence first: every team makes their model visibly different from the reference (add a variable, use a different pair of points, split it in two, switch to a table) — otherwise all four equations look alike and there is nothing to compare. Then swap: each team studies one other team's model and fills a slip with keep/change and a number-backed why. This is Goal 2."
    },
    {
      "name": "Revise + predict from the equation",
      "mins": 15,
      "block": "Challenge Block",
      "description": "Apply your keep/change decision, then USE your equation to write predictions for this afternoon. Your prediction source is now 'our equation,' not a guess.",
      "facilitatorDescription": "Teams apply the Model Swap decision, then write this afternoon's predictions from the equation. Prediction source is the equation, not instinct."
    },
    {
      "name": "Lunch",
      "mins": 60,
      "block": "Break",
      "description": "Protected.",
      "facilitatorDescription": "Protected break."
    },
    {
      "name": "Proving Rounds",
      "mins": 70,
      "block": "Match-Build-Make",
      "description": "Run three more rounds using equation-based predictions. Record predicted, actual, and residual for every match. This is what turns a guess into a model.",
      "facilitatorDescription": "The block that makes the week provable. Run the third cycle with equation-based predictions; record predicted, actual, residual for every match. These are the 'later matches' Goal 1 requires — without them, a revision is just an opinion. If bots still cannot play soccer, run these as distance Proving Rounds: predict a time never driven, then run it.",
      "link": "/resources/teacher-guides/gotham-match-schedule.html"
    },
    {
      "name": "Residual Before/After card",
      "mins": 25,
      "block": "Open Lab",
      "description": "Compare your average gap yesterday with your average gap in the Proving Rounds. Write the card: 'We changed ___ and our average gap went from ___ to ___.'",
      "facilitatorDescription": "Each team computes average gap Monday vs the Proving Rounds and writes the Goal 1 card. If a team's gap got worse, that is a legitimate result — they write why. Do not stage a happy ending."
    }
  ],
  "ends": "Fill in the card: 'We changed ____ and our average gap went from ____ to ____.' If it got worse, write why you think so."
};

const GOTHAM_DAY_15 = {
  "day": 15,
  "week": 4,
  "weekName": "Final Four Days",
  "theme": "Assessments first, then the championship, then build the teaching",
  "bigMathIdea": "Every award has a number behind it. Best Prediction is the smallest average gap; Biggest Improvement is the largest drop in gap.",
  "vocabulary": "SEED, RESIDUAL. Seed the bracket by record, or — with no wins — by smallest average gap, so the best predictor is #1.",
  "activities": [
    {
      "name": "Post-Task Diagnostic",
      "mins": 15,
      "block": "Challenge Block",
      "description": "Individual, 12-minute timer. Not a grade — it compares you to yourself four weeks ago.",
      "facilitatorDescription": "Non-negotiable, and it goes first. Individual, 12-min timer. Read the 'comparing you to yourself four weeks ago' framing so it is not heard as a test.",
      "link": "/activities/diagnostic-post/index.html"
    },
    {
      "name": "Post-Reflection Survey",
      "mins": 15,
      "block": "Challenge Block",
      "description": "Same sitting as the diagnostic. Confirm your name is spelled the same as Day 1 so the before/after matches.",
      "facilitatorDescription": "Non-negotiable. Same sitting. Confirm site + name spelling so it matches the Day 1 pre-reflection, or the pair is unusable.",
      "link": "/activities/reflection-post/index.html"
    },
    {
      "name": "Announce the bracket",
      "mins": 15,
      "block": "Hook",
      "description": "Seeds #1-#4 by record across Mon-Tue. No wins yet? Seed by smallest average gap — the best predictor takes #1.",
      "facilitatorDescription": "Reset after the assessments, post seeds #1-#4 by record (wins, then goal difference). If there were no wins, seed by smallest average gap. Teams know what they are playing for."
    },
    {
      "name": "Championship",
      "mins": 75,
      "block": "Match-Build-Make",
      "description": "Both semis on the two mats at once, then the final on one mat with the whole room watching. Predict before every match — this is one more turn of the loop.",
      "facilitatorDescription": "Both semis on two mats (#1v#4, #2v#3), then the final on one mat. Prediction ritual before every match. Crown a champion. If bots still cannot play soccer, run a Precision Final: one prediction, one drive at an untried distance, smallest miss wins.",
      "link": "/resources/teacher-guides/gotham-match-schedule.html"
    },
    {
      "name": "Lunch",
      "mins": 60,
      "block": "Break",
      "description": "Protected.",
      "facilitatorDescription": "Protected break."
    },
    {
      "name": "Build the station — poster + QR",
      "mins": 50,
      "block": "Challenge Block",
      "description": "One poster per team, three things only: your equation, your predicted-vs-actual chart, and the one change you made and what it did to your gap. Add a QR code to your dashboard.",
      "facilitatorDescription": "One poster per team showing exactly three things: the equation, the predicted-vs-actual chart, and the one change and its effect on the gap. QR code links to their data so a visitor can see the real numbers."
    },
    {
      "name": "Teach-back rehearsal",
      "mins": 35,
      "block": "Open Lab",
      "description": "Pair up. One team plays the confused visitor and tries the three mini-challenges after ONE explanation from the other — no rescuing. Note exactly where they got stuck, rewrite that sentence, then swap.",
      "facilitatorDescription": "Team A plays confused visitor and genuinely attempts the three mini-challenges after one explanation from Team B, with no second explanation. Note where the visitor got stuck, rewrite that one sentence, then swap. No team clears Goal 4's bar cold; this is the rehearsal that gets them there.",
      "link": "/resources/teacher-guides/day16-visitor-challenge-cards.html"
    }
  ],
  "ends": "What will you tell a stranger tomorrow about what your team figured out? One sentence. You have 4 minutes."
};

const GOTHAM_DAY_16 = {
  "day": 16,
  "week": 4,
  "weekName": "Final Four Days",
  "theme": "Teach it for real, then celebrate",
  "bigMathIdea": "You understand something when you can teach it. A visitor completing all three challenges after one explanation is the proof.",
  "vocabulary": "EXHIBITION, COMPLETION. The question is not whether a visitor enjoyed it, but whether they finished all three challenges after one explanation.",
  "activities": [
    {
      "name": "Expert setup + last rehearsal",
      "mins": 40,
      "block": "Challenge Block",
      "description": "Set your station: poster, bot, coordinate grid, dashboard on screen. One last run of the sentence you rewrote yesterday.",
      "facilitatorDescription": "Stations: poster, bot, grid, dashboard on a screen. One last practice of the sentence each team rewrote in the teach-back rehearsal."
    },
    {
      "name": "Community Exhibition",
      "mins": 70,
      "block": "Match-Build-Make",
      "description": "Visitors try all three mini-challenges at one team's station; the team signs their card. Fill the Visitor Completion Tracker as you go.",
      "facilitatorDescription": "Visitors attempt all three mini-challenges at one team's station and the team signs their card. Fill the Visitor Completion Tracker: did the visitor finish all three after one explanation? If bots still cannot play soccer, visitors predict-and-drive to a taped target — Goal 4 does not depend on soccer working.",
      "link": "/resources/teacher-guides/day16-visitor-challenge-cards.html"
    },
    {
      "name": "Snack",
      "mins": 20,
      "block": "Break",
      "description": "Break.",
      "facilitatorDescription": "Break."
    },
    {
      "name": "Walk the Wall",
      "mins": 20,
      "block": "Open Lab",
      "description": "Walk past all four days of work in silence — Residual Boards, Model Swap slips, Before/After cards, posters. Don't narrate.",
      "facilitatorDescription": "Silent gallery of the four days as one object. Do not narrate; let them see it."
    },
    {
      "name": "Awards",
      "mins": 60,
      "block": "Challenge Block",
      "description": "Every award is announced with the number behind it: Best Prediction (smallest average gap), Biggest Improvement, Best Teacher (most visitors completing all three first try), Best Defended Model.",
      "facilitatorDescription": "Announce each award with its data criterion and the calculation. Best Prediction (smallest average gap), Biggest Improvement (largest drop in gap), Best Teacher (most visitors completing all three first try), Best Defended Model (from the Model Swap slips)."
    },
    {
      "name": "Final journal",
      "mins": 20,
      "block": "Open Lab",
      "description": "Name one specific moment in these four days where you solved something you thought you could not.",
      "facilitatorDescription": "Final reflection. Give students the full five minutes."
    }
  ],
  "ends": "What did you learn about yourself as a problem solver? Name one specific moment in these four days where you solved something you thought you could not. You have 5 minutes."
};

// Days 1–12 from the master schedule, then the four v3 closing days.
const DAYS_GOTHAM = (typeof DAYS_DEFAULT !== 'undefined')
  ? [
      ...DAYS_DEFAULT.slice(0, 12),
      GOTHAM_DAY_13,
      GOTHAM_DAY_14,
      GOTHAM_DAY_15,
      GOTHAM_DAY_16
    ]
  : [];
