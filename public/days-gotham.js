// Gotham Tech (NY1) — compressed "final four days" schedule.
//
// 16-day arc, 4 weeks of 4 days (Mon–Thu). Gotham's bots drive fine but can't
// score with untuned stats, so matches keep coming out 0–0. The last week
// drops matches entirely and runs on the Distance Lab instead — distance can
// never come out 0–0, because it needs no opponent and no goal:
//   Day 13  Distance Lab — measure, build the equation, poster, Precision Final
//   Day 14  Model Swap + Launch Sequence (distance formula) + Percent Change
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
  "bigMathIdea": "A prediction is a model, not a guess. Measure how far the bot drives, compare it to what you predicted, and the gap tells you what to fix. distance = speed x time + start-up (start-up is negative, so it reads as −) is y = mx + b. Distance can never come out 0-0 the way a match can.",
  "vocabulary": "PREDICTION, GAP (prediction error), RATE OF CHANGE. The gap is predicted minus actual. The rate of change is centimeters per second — the bot's speed, and the slope of its line.",
  "activities": [
    {
      "name": "Launch the Distance Lab",
      "mins": 15,
      "block": "Hook",
      "description": "Three things: (1) get your worksheet and the Distance Lab code on your bot; (2) lock your 4 stats so they add to 20 and write them on the board; (3) learn the two moves you repeat all day — predict a distance BEFORE the bot moves, then after each run say 'we predicted ___, we got ___, the gap was ___, because ___.'",
      "facilitatorDescription": "This is a launch, not a warm-up game — the bot driving is the hook. Roughly 15 minutes, three concrete things: hand out the worksheet and load the MakeCode (button A drives, B adds half a second); every team locks 4 stats summing to 20 and writes them on the board (the Speed stat sets the bot's power, so it must be fixed before anyone drives); teach the prediction ritual and the gap sentence with a 30-second demo drive. Then straight to Trial 1."
    },
    {
      "name": "Distance Lab worksheet",
      "mins": 105,
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
    },{
      "name": "Target Challenge — Precision Final",
      "mins": 55,
      "block": "Match-Build-Make",
      "description": "Run your equation backwards to hit a target line. Work out the drive time, turn it into milliseconds (× 1000), put it on the ★ line of the code, download, and drive. Practice a couple, then the Precision Final: a surprise target, best of 2, closest to the line wins.",
      "facilitatorDescription": "The predict-then-test game that replaces matches — and it cannot come out 0-0. Load the Target Challenge code (one marked line: let driveMs). Teams solve time = (target - start-up) / speed, convert seconds to ms (× 1000), set the ★ line, download, and drive. Because everyone programs the EXACT time, the competition is fair — no half-second grid — so the winner is whoever's equation and measuring were sharpest. Run 2-3 practice targets, then a Precision Final on a surprise target: best of 2, closest wins, crown a champion. One neutral ref (you or a fixed student) measures at the line to keep it clean. Print the worksheet; open the code page. Bots that drift can do Skills Arena Challenge 1 (Dead Straight) first — only if needed.",
      "link": "/lessons/target-challenge-worksheet.html",
      "makecode": [{ url: "https://makecode.microbit.org/S88736-26870-92526-90781", label: "Target Challenge code" }]
    },
    {
      "name": "Make your equation poster",
      "mins": 45,
      "block": "Challenge Block",
      "description": "In Canva, build a poster with your equation and your graph of the five dots. Nothing else yet -- this is the poster you'll teach a visitor from on Thursday. Also write your equation BIG on a sheet of paper and tape it to the wall; that's what the class compares tomorrow. The step-by-step lesson page and the worksheet walk you through what goes on the poster.",
      "facilitatorDescription": "Teams build their poster in Canva -- their equation and their five-point graph -- and it becomes their exhibition artifact. The poster worksheet lays out what belongs on it. Have each team ALSO write its final equation large on a plain sheet and post it on the wall, so all four equations are visible at once for tomorrow's Model Swap without depending on screens. Tell them now they will teach from the Canva poster on Thursday.",
      "link": { "url": "/lessons/equation-poster.html", "label": "Make Your Equation Poster" }
    },
    
    {
      "name": "Close + preview tomorrow",
      "mins": 20,
      "block": "Open Lab",
      "description": "Tomorrow you compare your equation with another team's, then get better at the target. Velocity Arena",
      "facilitatorDescription": "Preview Tuesday: compare models, then beat the target at a distance you have never driven to."
    }
    
  ],
  "ends": "Name the one thing about your bot you were most wrong about today. You have 3 minutes."
};

const GOTHAM_DAY_14 = {
  "day": 14,
  "week": 4,
  "weekName": "Final Four Days",
  "theme": "Compare models, build a launch, measure the gain",
  "bigMathIdea": "A line from two points is a claim you have to test. The strongest test is predicting a distance you have never driven and hitting it. Using the equation backwards — time = (target - start-up) / speed — turns the model into a tool.",
  "vocabulary": "SLOPE (m), Y-INTERCEPT (b), RESIDUAL. Residual = predicted minus actual on a target you did not use to build the line. A small residual means the model holds.",
  "activities": [
    {
      "name": "Read the equations on the wall",
      "mins": 15,
      "block": "Hook",
      "description": "Look at every team's equation on the wall. They are ALL different -- why? (Different bots.) Whose bot is fastest, and how can you tell just from the equation?",
      "facilitatorDescription": "The speed is the number in front of the time; the fastest bot has the biggest one. Every team's equation is different — that is correct, do not fix it. This frames the Model Swap that follows."
    },
    {
      "name": "Model Swap",
      "mins": 30,
      "block": "Challenge Block",
      "description": "Your equation is already different from every other team's -- because your bot is different. Pick one other team. Type their speed and start-up into the equation tool to see both bots on one graph, then decide: what do you keep in yours, what do you change, and why (cite a number)?",
      "facilitatorDescription": "No \"make it different\" step -- with distance data every bot gives a genuinely different equation (different speed, different start-up), so there is real material to compare from the start. Pair teams up. Each team studies one other team's posted equation and uses the on-screen tool's Compare panel (enter the other team's speed and start-up) to see both lines and the differences, then fills a Model Swap slip: what we keep, what we change, and why -- citing a number. Keeping everything is allowed if defended with a number. This is Goal 2.",
      "link": "/lessons/gotham-day14-distance-equation.html"
    },
    {
      "name": "Launch Sequence",
      "mins": 75,
      "block": "Match-Build-Make",
      "description": "The launch runs in two legs: turn out to the midline and drive, then turn to face the ball head-on and drive to it, then kick. Work out each drive time in milliseconds from your Distance Lab equation, and get it landing reliably — you compete with it after lunch.",
      "facilitatorDescription": "A two-leg launch, all arithmetic — no trig (these are pre-algebra students). Corner to the midline (turn, drive), then turn head-on and drive to the ball, then the locked code kicks (Power squared). Students MEASURE each leg's distance with a tape and convert it to a drive time with THEIR own equation: ms = (distance - start-up) / speed x 1000, done TWICE (each leg has its own start-up loss). Turn angles are set at 45 to start, or measured with a protractor — never calculated. Four numbers go into the Launch Test (two angles, two ms) — no field calibration, press A to launch and kick, change a number and re-test in seconds. Tune one leg at a time: a distance miss is a ms fix, a direction miss is an angle fix. TEST THE KICK yourself first — wide goal, short distance behind the ball. Here the goal is a launch that lands reliably; the Launch-and-Score competition is the after-lunch block. Print the worksheet.",
      "link": "/lessons/launch-sequence-worksheet.html",
      "makecode": [
        { "url": "https://makecode.microbit.org/_d2XTEwUP80uz", "label": "Starter Code with Kick Practice — set stats + 4 numbers, press A (no calibration)" },
        { "url": "/resources/teacher-guides/launch-test.html", "label": "NEW: Update this Program after completing previous Starter Code with Kick Practice (clickMakeCode link in upper right corner)" }
        ]
    },
    {
      "name": "Lunch",
      "mins": 60,
      "block": "Break",
      "description": "Protected.",
      "facilitatorDescription": "Protected break."
    },
    {
      "name": "Launch-and-Score (competition)",
      "mins": 45,
      "block": "Match-Build-Make",
      "description": "Put your launch to the test against the other teams. Same field for everyone — same corner, ball spot, and goal. Five launches, no re-tuning between them — your numbers are locked in from warm-up — most goals of 5 wins. It can't come out 0-0. Moving up to the FULL GAME CODE? It plays a whole match on its own — you set your four stats (lines 1352-1355) and your four launch numbers: lines 181 and 188 for how far it drives, 177 and 184 for the angles it turns.",
      "facilitatorDescription": "The friendly competition that uses the launch teams built this morning. Set ONE fair field: same corner, ball spot, and goal width for all. A few warm-up launches (adjust and re-download freely here), then 5 scored launches per team with no re-tuning during the scored round — the four numbers are locked in from warm-up. A launch scores when the ball crosses the goal line; one neutral ref calls it. Most goals of 5 wins; tie = sudden-death closest to center. If a team's kick won't land, they compete on closest approach so they still get a fair turn. Rules + a printable scoreboard are in the Launch-and-Score format. Teams ready for more move to the FULL GAME CODE — the complete match program (launch, roam, find the ball, kick, stay in bounds). It needs W/B/goal calibration and only six numbers change: the four stats on lines 1352-1355 and the four launch numbers on 177/181/184/188. The setup page walks students through each one.",
      "link": "/resources/teacher-guides/launch-and-score-format.html",
      "makecode": [
        { "url": "/resources/teacher-guides/launch-and-score-format.html", "label": "Launch-and-Score — rules + scoreboard" },
        { "url": "https://makecode.microbit.org/S31221-80355-24737-48760", "label": "FULL GAME CODE — complete match program (calibrate W/B/goal, press A twice)" },
        { "url": "/resources/teacher-guides/game-launch-setup.html", "label": "Full game code — which lines to change: stats 1352-1355, launch 177/181/184/188" }
      ]
    },

  
    {
      "name": "Percent Change — the correction",
      "mins": 45,
      "block": "Challenge Block",
      "description": "In the Distance Lab you first GUESSED your speed from the 1-second run, then CORRECTED it using two runs. Put a number on how much that correction moved your speed: percent change = (corrected − first guess) ÷ first guess × 100. Then compare with another team.",
      "facilitatorDescription": "Grounded in what every team actually has: a first-guess speed (the 1-second run) and a corrected speed (from the difference of two runs), both on the Distance Lab sheet. The correction is always there and always meaningful (~15-25% up), because the 1-second run undercounts due to start-up — so this does NOT assume their predictions got better; it measures how much the model correction changed their number, and why the naive first guess made early predictions miss. Catch the one trap: divide by the FIRST (old) number. The interactive teaches it, then gives eight practice problems (mixed rise/fall, plus a same-raw-gain comparison) before they compute their own — enough to fill the 45-minute block. Close by writing the result on the poster.",
      "link": "/lessons/gotham-day14-percent-change.html"
    },
    {
      "name": "Finish your poster",
      "mins": 30,
      "block": "Open Lab",
      "description": "In Canva, add your percent-change result — how much you cut your prediction error — to your poster. This is now the whole story you'll teach on Thursday.",
      "facilitatorDescription": "Teams finish their Canva poster: equation, graph, and the percent-change result (a change they made and the measured improvement). It is both their Goal 1 evidence and their exhibition station. Print it or display it on a screen for the exhibition."
    }
  ],
  "ends": "Finish the sentence: 'We changed ____ and cut our prediction error by ____%.' You have 3 minutes."
};

const GOTHAM_DAY_15 = {
  "day": 15,
  "week": 4,
  "weekName": "Final Four Days",
  "theme": "Get ready to teach, then measure the growth",
  "bigMathIdea": "You understand something when you can teach it with your own numbers. 'The 38 means our bot goes 38 cm every second; the minus 7 means it loses 7 cm getting started.'",
  "vocabulary": "POST-TASK DIAGNOSTIC, TEACH-BACK. The post-task is the Day 1 diagnostic in parallel form — same concepts, measuring four weeks of growth. A teach-back is a rehearsal against a teammate playing a confused visitor.",
  "activities": [
    {
      "name": "Teach it in 30 seconds",
      "mins": 25,
      "block": "Hook",
      "description": "Turn to the team next to you. In 30 seconds, no notes, explain what your equation's speed number and start-up number MEAN — not the numbers, what they tell you about your bot. Then swap.",
      "facilitatorDescription": "A low-stakes teaching warm-up that primes Teach the Math and the teach-back. Pairs of teams take turns: 30 seconds each to explain, in plain words, what their speed (cm per second) and start-up (cm lost getting going) mean for their bot — no jargon, no reading off the poster. Listeners flag any sentence they did not follow. It surfaces the confusing spots before a real visitor hits them tomorrow."
    },
    {
      "name": "Teach the Math",
      "mins": 60,
      "block": "Challenge Block",
      "description": "Explain your own equation using your real numbers, as if to someone who has never seen it. No jargon. 'The 38 means our bot goes 38 cm every second. The minus 7 means it loses 7 cm getting started.'",
      "facilitatorDescription": "Each team explains their equation in plain language with their actual numbers. In the Teach the Math tool, Gotham students pick LINEAR EQUATION (or PERCENT CHANGE) — the formulas they used this week — and explain with their real numbers. Push on the meaning of each part: what the number in front of the time means, what the start-up number means. After each explanation ask 'how did you get that specific number?' This is the rehearsal for teaching a visitor tomorrow.",
      "link": "/lessons/pre-match-pitch-v2.html"
    },
    {
      "name": "Teach-back rehearsal",
      "mins": 35,
      "block": "Open Lab",
      "description": "Pair up. One team plays the confused visitor and tries YOUR Target Challenge after ONE explanation — no rescuing. Note exactly where they got stuck, rewrite that one sentence, then swap.",
      "facilitatorDescription": "Team A plays a confused visitor and genuinely attempts Team B's Target Challenge after one explanation, with no second explanation. Note where the visitor got stuck, rewrite that one sentence, then swap. No team clears Goal 4's bar cold; this rehearsal gets them there.",
      "link": "/resources/teacher-guides/day16-visitor-challenge-cards.html"
    },
    {
      "name": "Lunch",
      "mins": 60,
      "block": "Break",
      "description": "Protected.",
      "facilitatorDescription": "Protected break."
    },
    {
      "name": "Post-Task Diagnostic",
      "mins": 15,
      "block": "Challenge Block",
      "description": "Individual, 12-minute timer. Not a grade — it compares you to yourself four weeks ago. The only formal assessment of the day.",
      "facilitatorDescription": "The only formal assessment of the day. Individual, 12-min timer. Read the 'comparing you to yourself four weeks ago' framing so it is not heard as a test. Protect this block even if the day runs long — it is the research before/after and cannot be recovered later.",
      "link": "/activities/diagnostic-post/index.html"
    },
    {
      "name": "Post-Reflection Survey",
      "mins": 10,
      "block": "Challenge Block",
      "description": "Same sitting as the diagnostic. Confirm your name is spelled the same as Day 1 so the before/after matches.",
      "facilitatorDescription": "Run right after the diagnostic, same sitting. Confirm site + name spelling so it matches the Day 1 pre-reflection, or the pair is unusable.",
      "link": "/activities/reflection-post/index.html"
    },
    {
      "name": "Open Lab: Reflection Time",
      "mins": 50,
      "block": "Open Lab",
      "description": "Get your Community Exhibition station ready: poster on the wall, bot and tape line set up for the Target Challenge. Rehearse your explanation one more time on a teammate. Be ready to explain your equation, how much you cut your error (percent change), and how a visitor hits a target.",
      "facilitatorDescription": "Final exhibition prep. Each team sets up its station (finished poster, bot loaded, target line taped) and rehearses teaching the Target Challenge once more. Every team should be able to say in plain words: what their equation means, their percent-change result, and how a visitor uses the equation to hit the target. Close with the Skill Bridge ritual."
    },
    {
      "name": "Open Lab: finish posters + free build",
      "mins": 45,
      "block": "Open Lab",
      "description": "Finish your Canva poster, help another team, or keep tuning your launch. Loose time before tomorrow's exhibition.",
      "facilitatorDescription": "Buffer + polish. Teams finish posters, help each other, keep tuning launches, or re-run the Target Challenge — the goal is that every station is exhibition-ready for tomorrow. If the diagnostic or a rehearsal ran long, this is the block to borrow from."
    }
  ],
  "ends": "What will you tell someone tomorrow at the Exhibition about what you learned? You have 5 minutes."
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
      "mins": 45,
      "block": "Challenge Block",
      "description": "Set your station: poster, bot, Kicker Standing (paper leaderboard of successful kicks out of 5 tries). One last run of the sentence you rewrote yesterday.",
      "facilitatorDescription": "Stations: poster, bot, Kicker Standing (paper leaderboard of successful kicks out of 5 tries). One last practice of the sentence each team rewrote in the teach-back rehearsal. If a team wants to DEMO its launch for visitors, run the go/no-go check now (3 test launches; 2 of 3 must score) — GO teams may demo, NO-GO teams stick to the Target Challenge. Card: day16-visitor-challenge-cards (Demo Your Launch)."
    },
    {
      "name": "Community Exhibition",
      "mins": 75,
      "block": "Match-Build-Make",
      "description": "Visitors try your Target Challenge: your team teaches them to use your equation to stop the bot on the line. They also do the three mini-challenge cards. Fill the Visitor Completion Tracker as you go.",
      "facilitatorDescription": "Each team teaches visitors their live Target Challenge — predict the drive time from the equation, then hit the taped line. Visitors also work the three printed mini-challenge cards (unit rate, coordinate plotting, proportional scaling — content from weeks 1-3). Fill the Visitor Completion Tracker: did the visitor succeed after ONE explanation? Stay out of it — the students teach. This is Goal 4, and it does not depend on soccer. Optional: GO teams (from the morning check) may run a Demo Your Launch station — a demonstration, not a contest, so it stays consistent with the no-awards close.",
      "link": "/resources/teacher-guides/day16-visitor-challenge-cards.html"
    },
    {
      "name": "Lunch",
      "mins": 60,
      "block": "Break",
      "description": "Protected.",
      "facilitatorDescription": "Protected break."
    },
    {
      "name": "Celebration: Victory Laps + Sign the Wall",
      "mins": 45,
      "block": "Open Lab",
      "description": "The send-off. Each team takes a VICTORY LAP — one last bot run while the whole room counts down and cheers (no scoring; every team gets the same cheer). Then music on: sign each other's wall equations and a class banner with one thing you're proud of, and take a group photo at the wall.",
      "facilitatorDescription": "High-energy — the opposite of a silent gallery. Two parts. (1) VICTORY LAPS: go team by team; the room does a 3-2-1 countdown and the team runs its bot one last time (their launch, or a target run) purely for fun — everyone cheers. No scoring, no winner: every team gets the same cheer, which keeps it consistent with the no-awards close. (2) SIGN THE WALL: put music on, hand out markers, and everyone signs each other's wall equations / posters and a big class banner, each adding one thing they're proud of. Snap a group photo at the wall. Keep it loud and quick — the reflective part is the closing circle right after."
    },
    {
      "name": "Closing circle + final journal",
      "mins": 45,
      "block": "Open Lab",
      "description": "Each person names one moment this week they solved something they thought they couldn't. No awards — just the room hearing each other.",
      "facilitatorDescription": "No competitive awards. Run a closing circle: each student names one specific moment this week they solved something they thought they could not, with a number or calculation attached. Then the final journal. The point is the room hearing each other, not a winner."
    },
    {
      "name": "Open Lab: pack up + send-off",
      "mins": 30,
      "block": "Open Lab",
      "description": "Take down your station, grab your poster and notebook to keep, last photos and goodbyes.",
      "facilitatorDescription": "Wind-down and dismissal buffer. Teams strike their stations and collect their posters/notebooks to take home; final photos and goodbyes. Keep it relaxed — families may arrive during this window."
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
