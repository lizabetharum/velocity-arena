// Gotham Tech (NY1) — compressed "final four days" schedule.
//
// 16-day arc, 4 weeks of 4 days (Mon–Thu). Gotham's bots drive fine but can't
// score with untuned stats, so matches keep coming out 0–0. The last week
// drops matches entirely and runs on the Distance Lab instead — distance can
// never come out 0–0, because it needs no opponent and no goal:
//   Day 13  Distance Lab — measure, build the equation, start a poster
//   Day 14  Compare models (Model Swap) + the Target Challenge
//   Day 15  Post-Task Diagnostic + Reflection, Teach the Math, teach-back
//   Day 16  Community Exhibition (visitors try the Target Challenge) — no awards
//
// Days 1–12 are unchanged from what Gotham's sibling NY sites run (DAYS_NY1),
// which is the correctly re-weeked 4-day-week schedule: days 1–4 = week 1,
// 5–8 = week 2, 9–12 = week 3, 13–16 = week 4. Only the closing four days
// differ, so this file reuses DAYS_NY1.slice(0, 12) and appends four inline
// day objects below. (Do NOT slice DAYS_DEFAULT — that 20-day master groups
// its weeks differently and would mis-label days 5–12.)
//
// In-the-room steps + reasoning:
//   /resources/teacher-guides/gotham-v3-teacher-card.html  (what to do)
//   /resources/teacher-guides/distance-lab.html            (protocol + code)
//
// The dispatcher in days.js routes site code NY1 to DAYS_GOTHAM.
// This file must load AFTER days-default.js and BEFORE days.js.

const GOTHAM_DAY_13 = {
  "day": 13,
  "week": 4,
  "weekName": "Final Four Days",
  "theme": "Distance Lab — turn a moving bot into a model",
  "bigMathIdea": "A prediction is a model, not a guess. Measure how far the bot drives, compare it to what you predicted, and the gap tells you what to fix. distance = speed x time - startup lag is y = mx + b. Distance can never come out 0-0 the way a match can.",
  "vocabulary": "PREDICTION, GAP (prediction error), RATE OF CHANGE. The gap is predicted minus actual. The rate of change is centimetres per second — the bot's speed, and the slope of its line.",
  "activities": [
    {
      "name": "Start the Distance Lab",
      "mins": 20,
      "block": "Hook",
      "description": "No warm-up video — the bot driving is the hook. Today you predict how far your bot travels BEFORE it moves, then measure how close you got. Learn the two moves you repeat all day: predict before the run, then say 'we predicted ___, we got ___, the gap was ___, because ___.'",
      "facilitatorDescription": "Start straight in — no Crosstown data, no matches. Hand out the worksheet, load the Distance Lab MakeCode (button A drives, button B adds half a second). Teach the prediction ritual (one number, written before the bot moves, signed) and the gap sentence. Lock stats to sum 20; they do not change all week."
    },
    {
      "name": "Distance Lab worksheet",
      "mins": 90,
      "block": "Challenge Block",
      "description": "Drive 1 second, measure the cm — that's your bot's speed. Predict a longer drive, run it, measure the miss, change ONE number, go again. Five trials. Then subtract two runs to fix your speed, find the start-up cost, and write your equation: distance = speed x time + start-up.",
      "facilitatorDescription": "Full worksheet: find speed from the 1-second run, predict-and-test at 2s and 3s (bots go FURTHER than predicted and the miss grows — let them discover it), five trials, then derive the equation from the difference of two runs. Print one worksheet per team. Allow 45-60 min for the trials; re-flashing is the slow part, so button B steps the time with no re-download. Put the three failure modes on the board: too far/short (model off), not straight (motors), different every run (batteries/start line — fix before tuning).",
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
      "name": "Make your equation poster",
      "mins": 45,
      "block": "Challenge Block",
      "description": "In Canva, build a poster with your equation and your graph of the five dots. Nothing else yet. This is the poster you will teach a visitor from on Thursday.",
      "facilitatorDescription": "Teams build their poster in Canva -- their equation and their five-point graph. This consolidates the morning, seeds tomorrow's Model Swap (posters go on the wall or screen so every equation is visible), and becomes their exhibition artifact. Tell them now that they will teach from this poster on Thursday."
    },
    {
      "name": "Introduce the Target Challenge",
      "mins": 40,
      "block": "Match-Build-Make",
      "description": "A tape line goes on the floor at a set distance (say 100 cm). Use your equation to pick the drive time that stops your bot on the line. Compute it, drive, measure the miss. A few tries each.",
      "facilitatorDescription": "This is the predict-then-test game that replaces matches — and it cannot come out 0-0. Set a target line; teams use their equation backwards (time = (target - start-up) / speed) to choose a drive time, then test and measure the miss. Same MakeCode. It is exactly what visitors will try on Thursday. Teams whose bots drive crooked can spend part of this block on Skills Arena Challenge 1 (Dead Straight) so they measure cleaner — only if needed.",
      "link": "/lessons/distance-lab-worksheet.html"
    },
    {
      "name": "Close + preview tomorrow",
      "mins": 20,
      "block": "Open Lab",
      "description": "Each team says its smallest Target miss out loud. Tomorrow you compare your equation with another team's, then get better at the target.",
      "facilitatorDescription": "Each team states its smallest Target miss and one idea for improving it. Preview Tuesday: compare models, then beat the target at a distance you have never driven to."
    }
  ],
  "ends": "Name the one thing about your bot you were most wrong about today. You have 3 minutes."
};

const GOTHAM_DAY_14 = {
  "day": 14,
  "week": 4,
  "weekName": "Final Four Days",
  "theme": "Compare models, then beat the target",
  "bigMathIdea": "A line from two points is a claim you have to test. The strongest test is predicting a distance you have never driven and hitting it. Using the equation backwards — time = (target - start-up) / speed — turns the model into a tool.",
  "vocabulary": "SLOPE (m), Y-INTERCEPT (b), RESIDUAL. Residual = predicted minus actual on a target you did not use to build the line. A small residual means the model holds.",
  "activities": [
    {
      "name": "Read the equations on the wall",
      "mins": 15,
      "block": "Hook",
      "description": "Look at every team's equation. Whose bot is fastest? How can you tell just from the equation?",
      "facilitatorDescription": "The speed is the number in front of the time; the fastest bot has the biggest one. Every team's equation is different — that is correct, do not fix it. This frames the Model Swap that follows."
    },
    {
      "name": "Model Swap",
      "mins": 35,
      "block": "Challenge Block",
      "description": "First, make your model different from everyone else's in one way. Then study another team's equation and write down: what you keep, what you change, and why — citing a number.",
      "facilitatorDescription": "Ten minutes of divergence first: every team makes their model visibly different from the reference (add a variable, use a different pair of points, split it in two, switch to a table) — otherwise all four equations look alike and there is nothing to compare. Then swap: each team studies one other team's model and fills a slip with keep/change and a number-backed why. This is Goal 2.",
      "link": "/lessons/day13-linear-equations.html"
    },
    {
      "name": "Target Challenge — the real test",
      "mins": 70,
      "block": "Match-Build-Make",
      "description": "New target line at a distance you have NEVER driven to. Use your equation to pick the drive time, write your prediction, then drive. Getting a distance right that you never measured is the proof your equation works. Several rounds at new distances.",
      "facilitatorDescription": "This replaces the match Proving Rounds and cannot come out 0-0. Teams solve time = (target - start-up) / speed, commit a prediction, then drive and measure the miss. It is the same predict-then-test loop as matches, but it needs no opponent and no goal. Run several rounds at new distances; the miss should shrink as they trust the model.",
      "link": "/lessons/distance-lab-worksheet.html"
    },
    {
      "name": "Lunch",
      "mins": 60,
      "block": "Break",
      "description": "Protected.",
      "facilitatorDescription": "Protected break."
    },
    {
      "name": "Is your model getting better?",
      "mins": 45,
      "block": "Challenge Block",
      "description": "Fill one card: 'Our Target miss started at ___ cm and is now ___ cm. The change that helped most was ___.' Then look across the class — whose model holds best at a brand-new distance?",
      "facilitatorDescription": "Each team writes the before/after Target-miss card (this is the Goal 1 evidence: a change that reduced the gap on a later attempt). If a team got worse, they write why — do not fake a happy ending. Then a short class discussion: a model that predicts an untested distance well is a good model."
    },
    {
      "name": "Finish your poster",
      "mins": 30,
      "block": "Open Lab",
      "description": "In Canva, add the Target Challenge and your before/after miss to your poster. This is now the whole story you'll teach on Thursday.",
      "facilitatorDescription": "Teams finish their Canva poster: equation, graph, the Target Challenge, and the before/after miss. It is both their Goal 1 evidence and their exhibition station. Print it or display it on a screen for the exhibition."
    }
  ],
  "ends": "Fill in the card: 'Our Target miss started at ____ cm and is now ____ cm. The change that helped most was ____.' If it got worse, write why."
};

const GOTHAM_DAY_15 = {
  "day": 15,
  "week": 4,
  "weekName": "Final Four Days",
  "theme": "Assessments first, then get ready to teach",
  "bigMathIdea": "You understand something when you can teach it with your own numbers. 'The 38 means our bot goes 38 cm every second; the minus 7 means it loses 7 cm getting started.'",
  "vocabulary": "POST-TASK DIAGNOSTIC, TEACH-BACK. The post-task is the Day 1 diagnostic in parallel form — same concepts, measuring four weeks of growth. A teach-back is a rehearsal against a teammate playing a confused visitor.",
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
      "name": "Bot lore — add one sentence",
      "mins": 25,
      "block": "Hook",
      "description": "Add one line to your bot's story that only makes sense because of what you measured this week. Post it on the wall.",
      "facilitatorDescription": "Quick reconnect to bot identity before the teaching prep. Each team adds one sentence to their bot's lore that references something concrete they found this week (their speed, their start-up cost, their best Target hit). Three minutes to write and post."
    },
    {
      "name": "Teach the Math",
      "mins": 50,
      "block": "Challenge Block",
      "description": "Explain your own equation using your real numbers, as if to someone who has never seen it. No jargon. 'The 38 means our bot goes 38 cm every second. The minus 7 means it loses 7 cm getting started.'",
      "facilitatorDescription": "Each team explains their equation in plain language with their actual numbers. Push on the meaning of each part: what does the number in front of the time mean, what does the start-up number mean. After each explanation ask 'how did you get that specific number?' This is the rehearsal for teaching a visitor tomorrow."
    },
    {
      "name": "Lunch",
      "mins": 60,
      "block": "Break",
      "description": "Protected.",
      "facilitatorDescription": "Protected break."
    },
    {
      "name": "Finish the station",
      "mins": 45,
      "block": "Challenge Block",
      "description": "Poster on the wall, bot ready, tape line down, the Target Challenge set up exactly the way a visitor will meet it tomorrow.",
      "facilitatorDescription": "Teams set up their exhibition station: finished poster, bot loaded and ready, target line taped, the Target Challenge staged as a visitor will encounter it. The poster shows the equation, the graph, and the before/after Target miss."
    },
    {
      "name": "Teach-back rehearsal",
      "mins": 35,
      "block": "Open Lab",
      "description": "Pair up. One team plays the confused visitor and tries YOUR Target Challenge after ONE explanation — no rescuing. Note exactly where they got stuck, rewrite that one sentence, then swap.",
      "facilitatorDescription": "Team A plays a confused visitor and genuinely attempts Team B's Target Challenge after one explanation, with no second explanation. Note where the visitor got stuck, rewrite that one sentence, then swap. No team clears Goal 4's bar cold; this rehearsal gets them there.",
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
      "description": "Visitors try your Target Challenge: your team teaches them to use your equation to stop the bot on the line. They also do the three mini-challenge cards. Fill the Visitor Completion Tracker as you go.",
      "facilitatorDescription": "Each team teaches visitors their live Target Challenge — predict the drive time from the equation, then hit the taped line. Visitors also work the three printed mini-challenge cards (unit rate, coordinate distance, proportional scaling — content from weeks 1-3). Fill the Visitor Completion Tracker: did the visitor succeed after ONE explanation? Stay out of it — the students teach. This is Goal 4, and it does not depend on soccer.",
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
      "description": "Walk past all four weeks of work in silence — bot lore, posters, equations, Target cards. Don't narrate.",
      "facilitatorDescription": "Silent gallery of the whole program as one object. Do not narrate; let them see it."
    },
    {
      "name": "Closing circle + final journal",
      "mins": 40,
      "block": "Open Lab",
      "description": "Each person names one moment this week they solved something they thought they couldn't. No awards — just the room hearing each other.",
      "facilitatorDescription": "No competitive awards. Run a closing circle: each student names one specific moment this week they solved something they thought they could not, with a number or calculation attached. Then the final journal. The point is the room hearing each other, not a winner."
    }
  ],
  "ends": "What did you learn about yourself as a problem solver? Name one specific moment from this program where you solved something you thought you could not. You have 5 minutes."
};

// Days 1–12 (correctly weeked) from DAYS_NY1, then the four closing days.
// days-tn.js defines DAYS_NY1 and loads before this file.
const DAYS_GOTHAM = (typeof DAYS_NY1 !== 'undefined' && DAYS_NY1.length >= 12)
  ? [
      ...DAYS_NY1.slice(0, 12),
      GOTHAM_DAY_13,
      GOTHAM_DAY_14,
      GOTHAM_DAY_15,
      GOTHAM_DAY_16
    ]
  : [];
