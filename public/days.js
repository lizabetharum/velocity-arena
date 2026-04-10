const DAYS = [
  {
    "day": 1,
    "week": 1,
    "weekName": "Play Lab + Boot Camp",
    "theme": "First Contact: Speed, Bots, and the Question That Drives Everything",
    "activities": [
      {
        "name": "Sound and Movement: Circle Pass",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "Stand in a circle with your whole group. One person makes any sound and movement -- anything goes -- then passes it to the next person. That person copies it and immediately adds their own twist. Keep it moving around the circle. When your facilitator calls 'reverse,' flip directions. You can not do this wrong."
      },
      {
        "name": "Mirror: Pairs",
        "mins": 15,
        "block": "Ice Breaker",
        "description": "Face a partner. One person leads slow, deliberate movements while the other mirrors exactly. No talking. After two minutes, swap. No winner, no evaluator -- just two people paying attention to each other."
      },
      {
        "name": "Driving Question Reveal + Team Formation",
        "mins": 10,
        "block": "LX Setup",
        "description": "A big poster is unveiled with the question that drives everything we do for four weeks. Your three-person team is announced. You meet your teammates and sit together. No math yet."
      },
      {
        "name": "Stat Card Distribution",
        "mins": 5,
        "block": "LX Setup",
        "description": "You get a blank stat card -- a 4x6 index card with four rows: Speed, Endurance, Turning, Power. Three rows are greyed out. Today you fill in one line. This card is yours for four weeks."
      },
      {
        "name": "Pre-Task Diagnostic: Prior Knowledge Assessment",
        "mins": 15,
        "block": "Challenge Block",
        "description": "You answer 10 questions about general math (speed, distance, graphs) in 15 minutes. There is no grade. This just helps your facilitator know what you already know so the program can meet you where you are.",
        "link": "/activities/diagnostic/index.html"
      },
      {
        "name": "Speed Stat Challenge: What Does Motor Power Actually Mean?",
        "mins": 40,
        "block": "Challenge Block",
        "description": "One formula goes on the board: Speed % = (Speed points / 20) x 100. Your team calculates motor power for Speed values of 1, 3, 5, 6, and 8. Then compare answers with the team next to you. If you disagree, figure out where the split is -- without asking the facilitator first."
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math."
      },
      {
        "name": "First Bot Drive: Speed in Real Life",
        "mins": 80,
        "block": "Match-Build-Make",
        "description": "You get your BBC micro:bit and Cutebot Pro. Program Speed = 3 (15% motor power), drive on the coordinate grid for 30 seconds, and record the distance. Then program Speed = 6 (30%) and repeat. Enter both rows in your dashboard and answer: did doubling Speed points double your distance?"
      },
      {
        "name": "Data Dashboard Setup",
        "mins": 15,
        "block": "Match-Build-Make",
        "description": "Label every column in your data dashboard: date, match number, Speed allocation, goals/minute, possession time, predicted outcome, actual outcome, and notes. This document travels with your team for four weeks."
      },
      {
        "name": "Open Lab: Free Code Time",
        "mins": 20,
        "block": "Open Lab",
        "description": "Unstructured time with your bot. Drive it, experiment with MakeCode, or talk strategy with your team. No task to complete -- just time to explore."
      }
    ],
    "ends": "Write one personal goal and one team goal for this week. Post them on the wall. You have 3 minutes. |",
    "funElement": "None today. Bot novelty and the two improv activities create psychological safety before any math is introduced. Let students touch the robots before anything else. The first time a bot moves, something shifts in the room.",
    "los": "LO 1.1 (stat-to-formula matching on reference card); LO 3.1 (coordinate grid navigation, first attempt, informal)",
    "facilitatorRisk": {
      "risk": "The Pre-Task diagnostic triggers math shame and students shut down on the first morning, before trust is established.",
      "say": "\"This is not a test. There is no grade. I am filling this out so I know what you already know, and so I can make sure this program works for you specifically. If you see a question you do not know, write \"not yet\" and move on. You will know every single thing on this paper by Week 4.\" |"
    }
  },
  {
    "day": 2,
    "week": 1,
    "weekName": "Play Lab + Boot Camp",
    "theme": "Endurance: When Your Bot Runs Out of Power",
    "activities": [
      {
        "name": "Failure Bow",
        "mins": 15,
        "block": "Ice Breaker",
        "description": "One at a time, each person makes a deliberate, over-the-top mistake -- drop something, say something wrong, trip on purpose -- then takes a deep, exaggerated bow while the whole group cheers as loud as possible. The bigger the mistake, the louder the cheer."
      },
      {
        "name": "Slow Down, Slow Down",
        "mins": 15,
        "block": "Ice Breaker",
        "description": "Your whole team does jumping jacks at full speed for 30 seconds. Then you slow down -- one fewer rep each cycle -- until you are doing one jumping jack every 10 seconds. You feel the drop in your body. Your facilitator asks: 'What would we call it if your bot did this?' The answer is Endurance."
      },
      {
        "name": "Endurance Allocation: Stat Card Fill-In",
        "mins": 3,
        "block": "Ice Breaker",
        "description": "Write your Endurance allocation in the Endurance row on your stat card. Any whole number works, as long as Speed + Endurance leaves at least 2 points for Turning and Power combined. You just felt Endurance in your body during Slow Down, Slow Down. Commit a number. The card is binding from the moment you write it."
      },
      {
        "name": "Endurance Stat Challenge: Drawing the Decay",
        "mins": 50,
        "block": "Challenge Block",
        "description": "The formula goes on the board: P(t) = 100 - (20 - Endurance) x 1.5 x t. Your facilitator works one full example and names the rate of change out loud -- this number is the slope of the decay line, how fast your bot loses power per minute. Then you calculate for different Endurance values with less and less help. Plot your results on paper. What shape do you get? Compare with the team next to you."
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math."
      },
      {
        "name": "Program Endurance Into Your Bot",
        "mins": 65,
        "block": "Match-Build-Make",
        "description": "Open MakeCode and write code that reduces your bot's motor power over time based on your Endurance allocation. Test it by running the bot for 2 minutes. Record distance in the first 30 seconds vs. the last 30 seconds, and write one sentence about the gap between what the formula predicted and what actually happened."
      },
      {
        "name": "Role Rotation Briefing",
        "mins": 10,
        "block": "Match-Build-Make",
        "description": "Your facilitator explains the three team roles -- Coder, Fabricator, Analyst -- that rotate weekly. Your team decides who starts in each role next week."
      },
      {
        "name": "Bot Naming Ceremony",
        "mins": 40,
        "block": "Match-Build-Make",
        "description": "Your team names your bot. Then you write exactly one sentence explaining what it is fighting for. The name and sentence go on the wall right now and stay there for all four weeks.",
        "link": "/activities/robot-names/index.html"
      },
      {
        "name": "Open Lab: Free Code Time",
        "mins": 20,
        "block": "Open Lab",
        "description": "Unstructured time with your bot. Experiment with your Endurance code. Try different point values and observe. No task, no output required."
      }
    ],
    "ends": "Name one math concept you used today. Write the full calculation. Share it with a teammate and explain what it means about your bot, not in formula terms, but in behavior terms. You have 4 minutes. |",
    "funElement": "Bot naming ceremony activates today at end of session. Bot names and origin stories are posted on the wall for the full four weeks. First permanent artifact of the program.",
    "los": "LO 2.1 (slope meaning described from bot decay graph); LO 2.2 (Endurance decay equation written in slope-intercept form)",
    "facilitatorRisk": {
      "risk": "The Failure Bow feels humiliating to a student who already has math shame, and they disengage from the activity or refuse to participate.",
      "say": "\"Before you start: this game is about the group cheering loudest for the biggest, most theatrical mistake, not the smallest one. You are trying to out-embarrass each other on purpose. Model it yourself first. Make a dramatic mistake and take a long bow. The room will follow.\" |"
    }
  },
  {
    "day": 3,
    "week": 1,
    "weekName": "Play Lab + Boot Camp",
    "theme": "Turning + The Story Your Data Tells",
    "activities": [
      {
        "name": "Human Robot Programming Challenge",
        "mins": 25,
        "block": "Ice Breaker",
        "description": "One person on your team is the 'robot.' The other two give step-by-step verbal instructions (forward 2, turn left 90 degrees, forward 1) to navigate between two spots. The robot follows instructions exactly -- even if they lead somewhere wrong. No touching allowed."
      },
      {
        "name": "Distance-Time Graphs + Arc Approximation + Turning Stat Introduction",
        "mins": 65,
        "block": "Challenge Block",
        "description": "Part 1 (20 min): You get a data card with two bot runs. Plot both on the same graph. One line slopes down, the other stays flat. Figure out why without asking the facilitator, then flip the card to see the stat allocations on the back. Arc Approximation (10 min): Your facilitator draws one smooth curved turn on the board. Three straight segments are overlaid as chords. Two questions: are the segments together longer or shorter than the arc? What happens as you add more, shorter segments? The point is physical intuition that a curve can be broken into straight pieces with measurable lengths -- the prerequisite for the distance formula. Walk the Plane (15 min): On a life-sized taped coordinate grid, walk to called coordinates. Then: 'Move from (1,1) to (4,5). Estimate the straight-line distance.' Your facilitator writes d = sqrt((x2-x1)^2 + (y2-y1)^2) on the board for the first time. Calculate it, then verify against two more pairs. The formula is verified by standing on the grid. Part 2 (20 min): Turning formula on the board -- turnAngle = 90 + (8 - TURNING) x 5. Fill in your stat card, then program your bot to navigate from (0,0) to a called coordinate."
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math."
      },
      {
        "name": "Energy Reset (3 min)",
        "mins": 3,
        "block": "",
        "description": "Stand up. 30 seconds of jumping jacks, 30 seconds of arm circles, 30 seconds of silent stretch. Sit back down."
      },
      
      {
        "name": "Coordinate Navigation Practice: Three Consecutive Successes",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Keep programming your bot to navigate to called coordinates. The target: three consecutive successful navigations by end of Day 4. Record every attempt -- the coordinate called, the coordinate reached, and the error distance."
      },
      {
        "name": "Open Lab: Free Code Time",
        "mins": 35,
        "block": "Open Lab",
        "description": "Unstructured navigation practice. Try different coordinate targets. Experiment with Turning values. Build your intuition for what different settings do to the turn radius."
      }
    ],
    "ends": "Each person on your team silently rates today's collaboration: 1 = rough, 2 = okay, 3 = solid. Hold up your number at the same time so everyone sees at once. If anyone holds up a 1, talk for 2 minutes about what specifically happened. You have 5 minutes total. |",
    "funElement": "None today. Discovery and first coordinate navigation challenge create engagement through genuine uncertainty and physical movement.",
    "los": "LO 2.1 (slope meaning with two specific bot examples from graph); LO 3.1 (coordinate navigation attempts logged with error distance); LO 3.2 (distance formula introduced on life-sized grid, verified against two coordinate pairs; deepened on Day 10 with match data)",
    "facilitatorRisk": {
      "risk": "The worksheet becomes anexercise where campers just plot points without ever discussing what the graph shape means, and the Turning stat introduction gets buried under the graphing task.",
      "say": "\"Before Part 2: stop everyone. Say \"Look at your graph and the team next to yours. Your lines are different shapes. I want one sentence from each team, not what the formula says, but what your bot physically did differently to create that shape. Start there.\" Then, when you transition to the coordinate navigation: \"This grid is your new stat. Turning controls how your bot moves through this space. Let's see what it actually does.\"\" |"
    }
  },
  {
    "day": 4,
    "week": 1,
    "weekName": "Play Lab + Boot Camp",
    "theme": "Power: Ratio, Motor Speed, and the Scoop",
    "activities": [
      {
        "name": "Finger Speed-Sums",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "Face a partner. On a count of three, both of you show any number of fingers (0-5). Race to say the sum first. Correct answer earns a point. Rotate partners every 90 seconds. The math is easy -- the speed is the challenge."
      },
      {
        "name": "Power Allocation: Stat Card Fill-In",
        "mins": 3,
        "block": "Ice Breaker",
        "description": "Write your Power allocation on your stat card. Power is not a free choice: it is whatever points remain after Speed, Endurance, and Turning. Calculate 20 minus your three allocated stats and write that number in the Power row. If your three stats already sum to 20, you have no points for Power and need to revise one prior stat before the block begins."
      },
      {
        "name": "Power Stat Challenge: Ratio and Motor Speed",
        "mins": 50,
        "block": "Challenge Block",
        "description": "One rule goes on the board: charge motor speed = Power points squared (Power^2). Calculate charge speed for Power = 1, 2, 4, and 8. Before running the physical test, look at your Speed formula from Day 1: motor speed = (Speed / 20) x 100 -- proportional, double the stat and double the output. Power is not proportional: double the stat and you quadruple the output. Both formulas live on the same stat card. That contrast is the mathematical core of today. Then test it physically: program Power 4 (16% speed) into MakeCode, place your bot exactly 40 cm from the ball, drive, and measure how far the ball travels. Repeat with Power 8 (64% speed). Did doubling the points double kick distance? Both answers should surprise you."
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math."
      },
      {
        "name": "Scoop Build + Ratio Testing",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Build a cardboard front scoop for your Cutebot. One rule: it has to make clean contact with the ball. Test at three Power settings, run 3 shots at each from the 40 cm start line, and record kick distances in your dashboard. Then write: 'Quadrupling charge speed did / did not quadruple kick distance, because...'"
      },
      {
        "name": "Open Lab: Free Code Time",
        "mins": 40,
        "block": "Open Lab",
        "description": "Refine your scoop design and your Power speed value in MakeCode. Try one scoop redesign and one speed change. Record which had a bigger effect on kick distance."
      }
    ],
    "ends": "Write this sentence and complete it: \"The skill I used today was \\[name it specifically, not just 'math'\\] and I will use it tomorrow by \\[name the exact moment and action\\].\" You have 3 minutes. |",
    "funElement": "None today. The scoop build and the \"doubling motor speed does not double kick distance\" discovery create genuine productive surprise. The scoop iteration loop (build, test, adjust) generates its own momentum.",
    "los": "LO 1.2 (proportional vs non-proportional contrast: Speed output scales linearly -- double the stat, double the output; Power output scales as P^2 -- double the stat, quadruple the output; both named explicitly with side-by-side examples); LO 3.2 (distance calculations verified against bot kick test data)",
    "facilitatorRisk": {
      "risk": "Campers assume more Power always wins and stop thinking about trade-offs in the 20-point budget. Cognitive overload from trying to optimize all four stats simultaneously.",
      "say": "\"Before anyone changes that speed value: what happens to your Endurance if you give 3 more points to Power? Calculate it. Your total is still 20. Where does that Power come from? Your equation has four variables. Show me the trade-off on paper before you touch the code.\" |"
    }
  },
  {
    "day": 5,
    "week": 1,
    "weekName": "Play Lab + Boot Camp",
    "theme": "The Full System: 20 Points, Four Stats, One Equation",
    "activities": [
      {
        "name": "Conditional Simon Says",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "'Simon Says: IF the sum of Speed + Endurance equals 10, THEN clap 4 times.' You have to check the math on your stat card before you act. Only do the action if the condition is actually true for your numbers."
      },
       {
        "name": "Two Formula Warm-Up",
        "mins": 8,
        "block": "Warm-up Block",
        "description": "This warm-up bridges the gap by pairing two formulas on one allocation — so the jump goes from one to two to four, not one to four."
      },
      {
        "name": "The Budget Constraint: Speed + Power + Turning + Endurance = 20",
        "mins": 50,
        "block": "Challenge Block",
        "description": "One equation goes on the board: Speed + Power + Turning + Endurance = 20. Your team designs 3 different stat loadouts, each using exactly 20 points. For each one, calculate all four formula outputs and record them. Then answer: if you want Speed = 8, what are you giving up? Show every calculation."
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math."
      },
      {
        "name": "Cold Recall Check",
        "mins": 10,
        "block": "Challenge Block",
        "description": "Five questions, 10 minutes, by yourself, no notes. General math -- slopes, recipes, percentages, distances. No grade. This is just a check on what is sticking after four days."
      },
      {
        "name": "Match Format Briefing",
        "mins": 10,
        "block": "",
        "description": "Your facilitator explains how matches work: 3 minutes each, two teams, first to push the ball across the end line scores. Bots are pre-programmed -- no joystick control during the match."
      },
      {
        "name": "Simulation Matches: Your Loadout vs. Reality",
        "mins": 80,
        "block": "Match-Build-Make",
        "description": "Pick your best loadout from this morning, program it into your bot, and run practice matches. These do not count. After each run, compare: did your bot behave the way your allocation predicted? Record observations labeled 'simulation' in your dashboard."
      },
      {
        "name": "Open Lab: Free Code Time",
        "mins": 40,
        "block": "Open Lab",
        "description": "Experiment with the loadouts you designed this morning. Try each one. Which one produces the behavior your formulas predicted?"
      }
    ],
    "ends": "What is one thing you are good at that most people do not know about? Be specific. Name the thing. Give a real example from your own life. You have 5 minutes. |",
    "funElement": "Misconception correction: Equals sign as balance (activates today. Day 5 is the first day the full budget equation is introduced, making this the natural placement for the correction).",
    "los": "LO 1.1 (all four stat-to-formula pairs applied); LO 1.2 (all four formula calculations correct across three loadout options); LO 5.1 (data dashboard with first simulation entries); LO 9.1 (Week 1 journal: one personal strength named with a specific example) # WEEK 2: THE BUILD + FIRST SEASON *Energy register: Competitive, invested, occasionally frustrated. The leaderboard is up. The data dashboard is live. Frustration is productive here. It means campers care.* +-----------------------------------------------------------------------+ | **OPEN LAB PROTOCOL: WEEKS 2 AND 3** Starting Week 2, Open Lab runs two parallel tracks. Campers choose which one to join at the start of each Open Lab. Both tracks are legitimate uses of the time. **Track A: Data Dive** Review the data dashboard. Revise predictions. Analyze residuals. Run formula calculations for next match prep. This track has a specific prompt in each day's Open Lab description. **Track B: Bot Lab** Experiment with MakeCode. Test a new scoop angle. Try a weird loadout you would never use in a real match. Drive backwards at full speed and observe Turning behavior. No required output. Just bot time. Track choice is self-selected and publicly visible. A team that chooses Bot Lab after a loss is avoiding their data. That tells you something. Do not redirect them immediately. Watch for one full Open Lab. If they choose Bot Lab after two consecutive losses without any dashboard revision, ask one question: \"What would your data tell you if you looked right now?\" Then step back and let them decide. The self-selection is diagnostic, not a problem to fix. Teams that consistently choose Track A are doing the analytical work the program is designed to produce. Teams that consistently choose Track B may be more engaged with the physical system than the mathematical one. Both are valid paths through the program. Only one of them produces a competitive advantage in Season 2. Let them figure that out. +=======================================================================+ +-----------------------------------------------------------------------+",
    "facilitatorRisk": {
      "risk": "Campers treat the budget constraint as a puzzle with one optimal answer, stopping creative exploration of trade-offs after the first \"good\" loadout. Facilitator talking too long about the constraint concept reinforces this.",
      "say": "\"Launch in under 5 minutes and say nothing else until the grapple is over. The only words after you put the equation on the board are: \"Design three different loadouts. Show all four formula calculations for each. You have 20 minutes.\" Then stop talking and walk to the back of the room.\" |"
    }
  },
  {
    "day": 6,
    "week": 2,
    "weekName": "Season 1",
    "theme": "Lock In Your Build: Allocations, Fabrication, One Hard Correction",
    "activities": [
      {
        "name": "Equation Relay Race",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "Your team lines up. The first person solves step 1 of a multi-step equation on the whiteboard, tags the next person for step 2, and so on. First team to the correct final answer wins."
      },
      {
        "name": "Official Stat Allocation: Interleaved Problem Set",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Complete your official Season 1 stat allocation using a problem set with 12 shuffled problems across all four formula types. You cannot just do all Speed problems first -- you have to figure out which formula applies before you calculate. A concept tag column runs alongside each problem: before calculating, write the concept name that the problem targets (unit rate, ratio, linear decay, coordinate geometry, or proportional scaling). Circle your four official values. All four circled answers and all 12 concept tags must be verified correct before you touch a tool."
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math."
      },
      {
        "name": "Scoop Finalization + MakeCode Programming",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Finalize your front scoop with one last adjustment, then lock it in with hot glue. Open MakeCode and program your full stat loadout -- all four stats translated into code. Verify your Speed by driving the bot. Does the behavior match the number you coded?"
      },
      {
        "name": "Open Lab: Free Code or Final Verification",
        "mins": 45,
        "block": "Open Lab",
        "description": "Track A (Data Dive): Check each stat value in your dashboard against the formula output. Fix any mismatches before tomorrow's first match. Track B (Bot Lab): Test a loadout you would never use competitively. What happens at Speed = 2 with Power = 15?"
      }
    ],
    "ends": "Write one personal goal and one team goal for this week. Post them on the wall next to your bot's name. You have 3 minutes. |",
    "funElement": "Season 1 begins tomorrow. Anticipation of real matches creates investment in getting the allocation right today.",
    "los": "LO 1.2 (all four stat calculations on allocation sheet, 100% accuracy); LO 2.2 (Endurance decay equation derived from allocation); LO 6.1 (MakeCode motor command verified against proportional calculation)",
    "facilitatorRisk": {
      "risk": "The misconception correction becomes a 10-minute mini-lecture because the facilitator explains the concept twice in different ways, causing cognitive overload before fabrication begins.",
      "say": "\"Do not explain it twice. Put one real team's numbers on the board, with their permission. Run the calculation once. Then say: \"Recalculate your own Speed change using this method. I will come check it.\" Walk away. If they ask for clarification, point to the board. One example, one pass.\" |"
    }
  },
  {
    "day": 7,
    "week": 2,
    "weekName": "Season 1",
    "theme": "Season 1 Begins: First Matches and the Leaderboard",
    "activities": [
      {
        "name": "Trashketball: Warm-Up Round",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "Your team solves one equation from your allocation sheet. Get it right and you earn a shot -- crumple paper into a bin. Make the shot, bonus point. Quick, physical, competitive. Warm-up for match day."
      },
      {
        "name": "Endurance Decay Equations in Slope-Intercept Form",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Using your Endurance allocation, write your bot's power decay equation as P(t) = 100 - rt. Calculate r from your allocation. When r is revealed, your facilitator names it explicitly: the slope of a line is its rate of change, and r is how fast your bot loses power per minute. Then find the x-intercept: at what minute does your bot's power reach zero? Record the equation and x-intercept before the first match."
      },
      {
        "name": "Pre-Match Prediction Huddle",
        "mins": 10,
        "block": "",
        "description": "Your team reads your stat allocation out loud -- every formula, every result. Then write one prediction: how many goals will your team score in your first match? Sign it."
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math."
      },
      {
        "name": "Season 1 Round-Robin Matches, Day 1",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Three matches, round-robin bracket. Before each match, state your prediction. After each match, record actual goals and win/loss immediately. If you lose, the loss-recovery protocol runs before your next match -- no skipping it."
      },
      {
        "name": "Leaderboard Reveal + Open Lab",
        "mins": 35,
        "block": "Match-Build-Make / Open Lab",
        "description": "The physical leaderboard goes up on the wall with three columns: Wins, Goals Scored, Best Prediction. Update it now. Then 20 minutes of open time to review your dashboard, strategize, or adjust code."
      }
    ],
    "ends": "Name one math concept you used today. Write the full calculation. Share it with your teammate and explain what it means for your bot's behavior. Not formula terms. Bot terms. You have 4 minutes. |",
    "funElement": "Leaderboard activates today: physical, public, updated after every match day. The Best Prediction column rewards mathematical accuracy, not just winning.",
    "los": "LO 2.2 (Endurance decay equation in slope-intercept form, x-intercept calculated); LO 5.1 (data dashboard complete after first real matches); LO 7.1 (prediction logged before match, actual recorded after)",
    "facilitatorRisk": {
      "risk": "A team's first real loss triggers shutdown and the facilitator improvises an emotional response: either dismissing the feeling (\"it's just a game\") or over-validating it (\"you tried your best\"), cutting the team off from the data.",
      "say": "\"Three steps, in this exact order, no improvising. Step 1: say this and stop: \"That result was frustrating. That's a real feeling and it makes sense.\" Wait 30 seconds. Do not add anything. Step 2: say: \"Your model predicted \\[X\\] goals. You scored \\[Y\\]. That gap is the most interesting thing that happened today. Let's find the one decision that created it.\" Open the dashboard. One stat only. Step 3: say: \"You have \\[N\\] matches left. You now have data you didn't have before. What's one thing you'd change?\" Write their answer down. That is their next hypothesis.\" |"
    }
  },
  {
    "day": 8,
    "week": 2,
    "weekName": "Season 1",
    "theme": "Matching Situations, Graphs, and Linear Equations",
    "activities": [
      {
        "name": "Math Scavenger Hunt: Leaderboard Edition",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "Problem cards are posted around the room, each showing a real stat from yesterday's leaderboard. Walk to each card, answer the question on the back, and find the matching answer on the next card. It is a self-correcting chain -- if your answer is not in the pile, go back and check your math."
      },
      {
        "name": "Energy Reset (3 min)",
        "mins": 3,
        "block": "",
        "description": "Stand up. 30 seconds of jumping jacks, 30 seconds of arm circles, 30 seconds of silent stretch. Sit back down."
      },
      {
        "name": "Matching Situations, Graphs, and Linear Equations",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Part 1: Add your data point to a shared class graph -- Speed on x-axis, Goals Scored on y-axis. Then match sets of cards: verbal situations, data tables, and graphed lines. Find which three belong together. Part 2: Use two data points from the scatter plot to write the linear equation. Teams share -- everyone's equation is different. That is the point. SUMMER SPARKS EVALUATION FLAG: Day 8 is a candidate mid-program measurement point for the JHU evaluation team. It produces two artifacts -- individual student equations (quantitative) and the class scatter plot (qualitative) -- without any schedule changes."
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math."
      },
      {
        "name": "Season 1 Match Day 2",
        "mins": 70,
        "block": "Match-Build-Make",
        "description": "Two more matches. Before each, log your scatter plot equation's prediction. After each, record the actual result. Loss-recovery for every losing team. Update the dashboard -- no blanks."
      },
      {
        "name": "Rivalry Cards",
        "mins": 20,
        "block": "Match-Build-Make",
        "description": "Write one trash-talk card to a specific rival. The rule: your trash talk must cite a specific stat or data point from the dashboard. 'Your Endurance = 3 means your bot slows at minute 4. We will be ready.' No data, no card."
      },
      {
        "name": "Open Lab",
        "mins": 25,
        "block": "Open Lab",
        "description": "Track A: Review your scatter plot equation against today's results. Does the line fit the new data? Track B: Adjust one MakeCode setting and run the bot for 90 seconds. What changes?"
      }
    ],
    "ends": "Each person rates today's team collaboration 1--3. Hold up your number at the same time. If anyone holds up a 1, talk for exactly 2 minutes about what happened. You have 5 minutes total. |",
    "funElement": "Rivalry cards activate today. Leaderboard updated after matches.",
    "los": "LO 2.3 (scatter plot of Speed vs. Goals Scored with equation from two data points); LO 5.2 (scatter plot built from dashboard data, labeled); LO 7.1 (equation-based prediction logged before match)",
    "facilitatorRisk": {
      "risk": "Part 1 \"matching\" activity feels like a worksheet and campers rush through the matching to get to the graph, losing the representational translation work that is the core of the session.",
      "say": "\"Before you distribute the cards: \"You have three representations of the same thing: a situation in words, a data table, and a graph. They all describe the same relationship. Your job is to find which three belong together and be ready to explain why the graph looks the way it does given the numbers in the table. Do not match by elimination. Match by reasoning.\"\" |"
    }
  },
  {
    "day": 9,
    "week": 2,
    "weekName": "Season 1",
    "theme": "Season 1: Adjustments, Linear Equations, and the Gap",
    "activities": [
      {
        "name": "Rivalry Card Response",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "Read the rivalry card your team received. Open your dashboard. Do the numbers check out? If the trash talk is factually wrong, mark it 'check your data' with a sticky note and the correct number. If it is accurate, make a plan."
      },
      {
        "name": "Formula Relay: All Six Types in One Race",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Twenty problem cards, face down, shuffled across six formula types: Speed proportionality, Endurance decay, Turning radius (2 cards), Power squared, budget constraint, and Proportional Scaling (2 scoop-scaling cards where you determine whether scaling one or both scoop dimensions is proportional). Flip one, solve it as a team, bring it to the facilitator. Correct work gets a stamp. First team to finish all 20 with fewer than 3 errors wins. After the race, sort your cards by formula type and count errors. Your weakest type is today's focus -- use it for today's pre-match prediction."
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math."
      },
      {
        "name": "Season 1 Match Day 3",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Three matches. Before each: state your prediction. After each: record actual result. If prediction and actual differ by more than 20%, write one sentence about what variable your model missed. Dashboard complete before end of day."
      },
      {
        "name": "Open Lab: Post-Match Debrief and Free Code",
        "mins": 40,
        "block": "Open Lab",
        "description": "Track A: Look at your three match results. Write one hypothesis: 'If we change [stat] from [X] to [Y], we expect [outcome] because [data].' Track B: Run the bot and experiment. If you find something useful, put it in the dashboard before you leave."
      }
    ],
    "ends": "Write: \"The skill I used today was \\[name it specifically\\] and I will use it tomorrow by \\[name the exact moment and exact action\\].\" You have 3 minutes. |",
    "funElement": "Rivalry cards drive ongoing engagement. Teams verify each other's data claims before match day.",
    "los": "LO 2.3 (slope and y-intercept from two scatter plot points); LO 4.1 (slope-intercept form derived from match data); LO 7.2 (post-match revision with data-cited justification when \\>20% off)",
    "facilitatorRisk": {
      "risk": "When a team's linear equation produces a wrong prediction, they abandon the equation and go back to instinct, which loses the modeling iteration that is the purpose of Season 1.",
      "say": "\"Do not throw out the equation. Your equation predicted \\[X\\] and the match gave \\[Y\\]. That is not a failure. That is your model telling you which variable it is missing. What is one specific thing that happened in the match that is not in your formula? Name it. That goes in the next version.\" |"
    }
  },
  {
    "day": 10,
    "week": 2,
    "weekName": "Season 1",
    "theme": "Season 1 Final Matches + Distance Formula (Applied to Match Data)",
    "activities": [
      {
        "name": "Best Match Gallery Walk",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "Each team posts the stat configuration and result of their single best Season 1 match on an index card. Walk the room and read every card. Vote with a dot sticker: which team had the most mathematically interesting finding?"
      },
      {
        "name": "Distance Formula: Applying It to Match Data",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Week 2 continuation of the coordinate geometry you started on Day 3. On Day 3 you walked the life-sized grid and calculated straight-line distance with your body. Today the formula puts numbers to that same motion using real Season 1 match data. Using three coordinate pairs from your team's data log, calculate d = sqrt((x2-x1)^2 + (y2-y1)^2) for each. Record every calculation. Then answer: does the computed distance match what you observed during the match? If not, name the source: measurement error, bot drift, or formula misapplication. This closes the coordinate geometry arc started on Day 3."
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math."
      },
      {
        "name": "Cold Recall Check",
        "mins": 10,
        "block": "Challenge Block",
        "description": "Five questions, 10 minutes, by yourself, no notes. Percent change, slope-intercept form, distance formula, decay functions, and a unit rate question: a bot travels 150 cm in 5 seconds -- what is its speed in cm/sec, and how far does it travel at that rate in 8 seconds? No grade -- just a check on what is holding after two weeks."
      },
      {
        "name": "Season 1 Final Round",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Final round-robin matches. Loss-recovery for every losing team. After all matches: complete your dashboard -- goals per minute, possession time, win/loss by stat matchup. No blanks. Final Season 1 leaderboard update."
      },
      {
        "name": "Open Lab: Season 2 Planning",
        "mins": 30,
        "block": "Open Lab",
        "description": "Track A: Look at your Season 1 data. If you could change one stat for Season 2, what would it be and why? Write it as a hypothesis with data. Track B: Test the change you are considering before committing. Run it live, then write the hypothesis."
      }
    ],
    "ends": "Describe a mistake your team made this week that led to something better. Be specific: name the mistake, describe what happened because of it, and say exactly what you changed. You have 5 minutes. |",
    "funElement": "Season 1 closes. Final leaderboard update creates stakes and sets up the Week 3 Commissioner's Week power shift.",
    "los": "LO 3.2 (distance formula deepened: applied to three match-data coordinate pairs, discrepancy sourced); LO 5.1 (complete dashboard, no blanks); LO 7.2 (post-match revision entries with data justification); LO 9.1 (Week 2 journal: a specific mistake named, consequence described, change recorded)",
    "facilitatorRisk": {
      "risk": "Campers treat this as a new formula they have never seen, bypassing the Day 3 embodied experience. The formula is not new -- they used it on the life-sized grid on Day 3. Reconnect explicitly before calculating.",
      "say": "\"You have used this formula before -- Day 3, on the floor grid. You walked to the coordinates. You estimated the diagonal. Then you calculated. Today is the same formula on real match data. Before you plug in numbers: which two coordinates are you starting with? Find them in your data log. Now you can calculate.\""
    }
  },
  {
    "day": 11,
    "week": 3,
    "weekName": "Season 2 + Commissioner",
    "theme": "You Run the League Now: Commissioner Prep + the Underdog Mechanic",
    "activities": [
      {
        "name": "Human Number Line: Stat Rankings",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "A tape line runs across the room from 'least important' to 'most important' for winning Season 1 matches. Stand where you think the most important stat belongs -- pure instinct, no data. Then your facilitator says: 'Open your dashboard. Does the data support where you are standing?'"
      },
      {
        "name": "Proportional Scaling: Scaling Your Stats + Commissioner Proposal Prep",
        "mins": 45,
        "block": "Challenge Block",
        "description": "Phase 1 (20 min): Calculate what happens to bot behavior when a stat is scaled by 50%. Speed is proportional -- 50% more Speed gives 50% more motor power. Power is not -- 50% more Power gives 125% more charge speed (quadratic). Phase 2 (25 min): Draft a rule change proposal using those scaling calculations as data evidence. Back it with at least two numbers from your dashboard, and make sure the change addresses how the team currently in last place is affected."
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math."
      },
      {
        "name": "Underdog Mechanic Announced + Season 2 Stat Reallocation",
        "mins": 30,
        "block": "Match-Build-Make",
        "description": "Big announcement: the team in last place gets one free stat reallocation before Season 2 -- no Commissioner approval required. If that is your team, rework your allocation now. Everyone else: start thinking about Season 2 loadouts under the new rules coming tomorrow."
      },
      {
        "name": "Practice Matches: Test New Loadout Hypotheses",
        "mins": 60,
        "block": "Match-Build-Make",
        "description": "No formal scoring. Program and test adjusted loadout ideas. Record observations as 'hypothesis' entries -- clearly labeled so you can compare to Season 2 actuals."
      },
      {
        "name": "Open Lab: Commissioner Proposal Refinement",
        "mins": 40,
        "block": "Open Lab",
        "description": "Verify every number in your draft proposal against the actual dashboard. Are your two cited numbers accurate? Does your rule change genuinely help the last-place team?"
      }
    ],
    "ends": "Write one personal goal and one team goal for this week. The personal goal must name a specific math skill, not \"get better at math.\" You have 3 minutes. |",
    "funElement": "Underdog mechanic announced today. Public announcement is essential. Creates comeback narrative and keeps the last-place team mathematically engaged.",
    "los": "LO 4.3 (systems of inequalities: three valid loadouts under dual constraints); LO 5.3 (Commissioner proposal with two cited data points addressing last-place team); LO 1.3 (percent change in Season 1 data used in proposal analysis)",
    "facilitatorRisk": {
      "risk": "Non-last-place teams feel the underdog mechanic is unfair and disengage from Commissioner prep to argue about it, leading to status hierarchy formation around winning record.",
      "say": "\"Let them argue for exactly 60 seconds. Then say: \"Hold that thought. Look at the leaderboard. Is the current last-place team, with their Season 1 record, statistically a threat to your Season 2 wins if they get one free reallocation? Use the data. Show me the math.\" The argument usually resolves itself when they check the numbers.\" |"
    }
  },
  {
    "day": 12,
    "week": 3,
    "weekName": "Season 2 + Commissioner",
    "theme": "The Commissioner's Meeting: You Change the Rules",
    "activities": [
      {
        "name": "Lobby the Commissioners",
        "mins": 25,
        "block": "Ice Breaker",
        "description": "Spend 10 minutes moving around the room in informal conversation. 'Here is our proposal. Here is the number behind it. What do you think?' After, 15 minutes back at your seat to finalize based on what you heard."
      },
      {
        "name": "Final Proposal Verification",
        "mins": 35,
        "block": "Challenge Block",
        "description": "Check every number in your proposal against the actual dashboard. Is the data accurate? Does the rule change genuinely help the last-place team, or does it just help your team? Revise if needed. Your facilitator also checks Criterion 6: at least one of the following concept types must be named in the proposal -- proportional scaling, unit rate, ratio, slope as rate of change, or linear decay. Your facilitator asks one camper per team: 'How did you calculate this number? What kind of math is that?' before the meeting starts."
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math."
      },
      {
        "name": "Commissioner's Meeting: Formal Presentations + Vote",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Each team has 3 minutes. Cite two data points, explain your reasoning, describe how the change affects the last-place team. The league votes. Proposals that pass become rules -- written on the wall in permanent marker. Then adjust your Season 2 allocation under the new constraints before you leave."
      },
      {
        "name": "Open Lab: Season 2 Allocation Verification",
        "mins": 35,
        "block": "Open Lab",
        "description": "Verify your Season 2 allocation calculations. Program the new loadout into MakeCode. Run one test drive to confirm the code matches the math."
      }
    ],
    "ends": "Name one math concept from today's meeting that was in someone else's proposal, not yours. Write the calculation they used. Explain to a teammate why citing that specific number made the argument stronger. You have 4 minutes. |",
    "funElement": "Commissioner's Meeting is the highest-agency moment of the program. Campers author the rules of their own game using data they collected.",
    "los": "LO 4.3 (Season 2 loadout adjusted under new rule constraints); LO 5.3 (data-backed argument scored on rubric); LO 8.1 (3-minute presentation scored on evidence quality and math content)",
    "facilitatorRisk": {
      "risk": "One team's proposal dominates the meeting and other teams disengage from verifying the math in their own proposals. Anxiety contagion when a confident team presents first.",
      "say": "\"After each presentation, before the vote, ask the whole room: \"Does this proposal use the data correctly? Can anyone verify the math?\" This is not about challenging teams. It makes the entire room responsible for the accuracy of what gets voted into the rules. Do this after every single proposal, including the strongest one.\" |"
    }
  },
  {
    "day": 13,
    "week": 3,
    "weekName": "Season 2 + Commissioner",
    "theme": "Your Win Equation + Season 2 Begins",
    "activities": [
      {
        "name": "The Prediction Market",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "Write your Season 2 win total prediction on an index card: 'We will win [X] of [Y] matches.' Post it publicly. Everyone can see every team's prediction. You will revisit these on Friday."
      },
      {
        "name": "Energy Reset (3 min)",
        "mins": 3,
        "block": "",
        "description": "Stand up. 30 seconds of jumping jacks, 30 seconds of arm circles, 30 seconds of silent stretch. Sit back down."
      },
      {
        "name": "Building and Solving Linear Equations",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Part 1: Using your Season 1 and early Season 2 data, write the equation that predicts your win probability. Choose two past data points, calculate slope and y-intercept, write it in slope-intercept form. Part 2: Test your equation against three past matches. Calculate the residual for each. Report your residuals to the class."
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math."
      },
      {
        "name": "Season 2 Match Day 1",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "First matches under the new Commissioner-approved rules. Before each match, log your equation-based prediction. After each, record the actual. Compare today's residuals to Season 1. Is your model improving?"
      },
      {
        "name": "Open Lab: Residual Analysis or Bot Calibration",
        "mins": 35,
        "block": "Open Lab",
        "description": "Track A: Look at your residuals. Is your model's error getting smaller or larger? Write one sentence about what the model is missing. Track B: Run one calibration test under the new rules. Does the rule change affect your bot in ways your formula did not predict?"
      }
    ],
    "ends": "Each person rates today's team collaboration 1--3. Hold up your number at the same time. If anyone holds up a 1, talk for 2 minutes. You have 5 minutes. |",
    "funElement": "Prediction market creates public stakes. Season 2 under new rules gives the whole room a fresh start.",
    "los": "LO 4.1 (slope-intercept equation from two match data points); LO 4.2 (pre-match prediction logged before match begins, actual recorded after); LO 6.2 (three-form representation: stat number, equation, MakeCode block)",
    "facilitatorRisk": {
      "risk": "Teams rush through the equation work to get to Season 2 matches, producing equations without slope or y-intercept labeled.",
      "say": "\"Before you release teams to the afternoon: I need one equation from each team written on the whiteboard: slope labeled, y-intercept labeled, two source data points labeled. That is the only thing that gets your team to the matches. If it is not on the board, you are not playing yet. This is not punishment. Your prediction has to exist before the match starts or there is nothing to test.\" |"
    }
  },
  {
    "day": 14,
    "week": 3,
    "weekName": "Season 2 + Commissioner",
    "theme": "Season 2: Percent Change and the Model vs. the Match",
    "activities": [
      {
        "name": "Stat Auction + Prediction Check",
        "mins": 30,
        "block": "Ice Breaker",
        "description": "Your team starts with 3 math tokens. Earn more by answering formula questions correctly. Then bid on stat improvements -- but you must calculate the new formula output out loud to win. Wrong math means you lose your tokens. After the auction, check your Season 2 prediction on the wall. Update it if needed, with a data justification."
      },
      {
        "name": "Percent Change: Season 1 to Season 2 Configurations",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Using your Season 1 and Season 2 allocations, calculate the percent change for each stat: (new - old) / old x 100. Also calculate the percentage point difference. Enter both for all four stats. Then answer: are these the same number? Which one better describes the actual change in your bot's behavior?"
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math."
      },
      {
        "name": "Season 2 Match Day 2",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Three matches. Before each, log your equation-based prediction. After each, record the actual. If prediction and actual differ by more than 20%, write one sentence about what variable is missing. Dashboard fully updated before end of session."
      },
      {
        "name": "Open Lab: Equation Revision or Loadout Experiments",
        "mins": 40,
        "block": "Open Lab",
        "description": "Track A: Look at your residuals from the last two match days. If your model's error has increased, identify one variable to add. Track B: Test the new stat points from the Stat Auction under match conditions. Do they perform as the formula predicted?"
      }
    ],
    "ends": "Write: \"The skill I used today was \\[name it specifically\\] and I will use it tomorrow by \\[name the exact moment and exact action in tomorrow's schedule\\].\" You have 3 minutes. |",
    "funElement": "Prediction market still active. Teams track Season 2 record against public prediction.",
    "los": "LO 1.3 (percent change vs. percentage point difference, three consecutive correct dashboard entries); LO 4.2 (pre-match prediction logged and compared each match); LO 7.2 (revision entry with data-cited justification when \\>20% off)",
    "facilitatorRisk": {
      "risk": "Campers confuse percent change and percentage point difference and treat the two numbers as interchangeable in their Commissioner proposals and scouting reports, a misconception that compounds from here forward.",
      "say": "\"Stop and put both numbers side by side on the board using one team's actual data. Say: \"This team changed Speed from 4 to 7 points. That is 3 percentage points different. The percent change is (7 - 4) / 4 x 100 = 75%. Their bot is 75% faster, not 3% faster. Which number tells you more about the actual change in bot behavior? Why?\" Make teams answer in one sentence before moving on.\" |"
    }
  },
  {
    "day": 15,
    "week": 3,
    "weekName": "Season 2 + Commissioner",
    "theme": "Creative Expression: Bot Identity + Scouting Begins",
    "activities": [
      {
        "name": "Bot Lore Gallery Walk",
        "mins": 25,
        "block": "Ice Breaker",
        "description": "Walk the room and re-read every bot origin story from Day 2. Has your bot's story changed? What happened in Seasons 1 and 2 that belongs in its lore now? Write one new sentence to add -- something that only makes sense because you played the matches."
      },
      {
        "name": "Scouting Report: Mathematical Foundation",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Begin your formal scouting report on your Championship opponent. Section 1: express their stats as percentages of the 20-point budget. Section 2: write their Endurance decay equation in slope-intercept form using their data. Show all work."
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math."
      },
      {
        "name": "Bot Identity + Creative Expression",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Design your bot's visual identity: a logo, a color scheme, and a team slogan. The slogan must reference a stat, equation, or data point. You can also redesign your scoop within the rules. Everything goes on the wall before you leave."
      },
      {
        "name": "Open Lab: Scouting Continuation or Identity Refinement",
        "mins": 40,
        "block": "Open Lab",
        "description": "Track A: Continue scouting report sections 1 and 2, or start section 3 (opponent Speed vs. Goals trend line). Track B: Test the scoop redesign or logo placement. Does the new scoop change your kick distance? If yes, update the dashboard."
      }
    ],
    "ends": "Describe a moment when the data changed your mind. What did you believe before you saw the data? What do you believe now? Name the specific number or calculation that changed your thinking. You have 5 minutes. |",
    "funElement": "Creative expression reinforces team ownership and bot identity. Scouting reports begin the intellectual preparation for Championship.",
    "los": "LO 7.3 (scouting report sections 1 and 2: opponent stats as percentages and Endurance decay equation); LO 2.4 (Endurance decay x-intercept predicted from equation); LO 6.3 (error trace from bot behavior back to calculation, begun in scouting analysis); LO 9.1 (Week 3 journal: a specific number or calculation named as the thing that changed their thinking) # WEEK 4: CHAMPIONSHIP + EXHIBITION *Energy register: Proud, expert, generous. Campers teach others. They present to judges. The arc ends with them as the authority.*",
    "facilitatorRisk": {
      "risk": "Creative expression becomes pure decoration with no mathematical connection. Campers spend 90 minutes on visual design with no reference to their stat system.",
      "say": "\"Before the creative block starts, read your slogan to me out loud. It must reference a stat, equation, or data point. \"Team Velocity\" is a team name. \"Speed = 7: 35% Power and Still Climbing\" is a slogan with math. You have 2 minutes to revise if yours does not include a number. The creativity is real. It just has to connect to what your bot actually does.\" |"
    }
  },
  {
    "day": 16,
    "week": 4,
    "weekName": "Championship",
    "theme": "Scouting Reports + Final Commissioner's Meeting Begins",
    "activities": [
      {
        "name": "Memory Probe: Scout Your Opponent Cold",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "No notes, no dashboards, nothing posted. From memory, write down your opponent's top two stat allocations, their Endurance decay rate, their Season 1 average goals per match, and their Endurance output at t = 3. Then reports go up -- verify every number and score yourself."
      },
      {
        "name": "Scouting Report Completion: Sections 3 and 4",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Section 3: Use two of your opponent's data points to write their Speed vs. Goals trend line equation and make a prediction for Championship. Section 4: Write one strategy recommendation backed by an inequality constraint analysis -- show three loadouts that counter your opponent."
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math."
      },
      {
        "name": "Final Commissioner's Meeting, Part 1",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Teams present final Championship rule proposals. Same format: 3 minutes, two data points, address the last-place team. League votes. New rules on the wall. Adjust your loadout for Championship -- fix any math errors before leaving."
      },
      {
        "name": "Open Lab: Championship Loadout Verification",
        "mins": 45,
        "block": "Open Lab",
        "description": "Program your Championship loadout into MakeCode. Run one test drive. Verify every stat's behavior matches its formula output. If anything mismatches, fix it now."
      }
    ],
    "ends": "Write one personal goal and one team goal for this final week. The personal goal must name something mathematical you want to be able to explain clearly to a visitor on Thursday. You have 3 minutes. |",
    "funElement": "Championship bracket is forming. Scouting reports give every team tactical agency going into the tournament.",
    "los": "LO 7.3 (scouting report sections 3 and 4: trend line equation with prediction and inequality strategy); LO 4.3 (valid Championship loadouts under new constraints); LO 8.1 (Commissioner presentation with numerical evidence)",
    "facilitatorRisk": {
      "risk": "Scouting report verbal check-ins become interrogations that make campers feel tested rather than expert, which re-triggers math shame in the final week.",
      "say": "\"Frame it as preparation, not evaluation. Say: \"I am going to ask you to walk me through one calculation from your scouting report. Pretend I am a visitor at the Exhibition who has never seen this before. Explain it so I understand what it means about your opponent.\" Expert framing, not quiz framing. If they stumble, say: \"Take 2 minutes to review it. I will come back.\"\" |"
    }
  },
  {
    "day": 17,
    "week": 4,
    "weekName": "Championship",
    "theme": "Championship Prep: Pre-Match Pitch Rehearsal + Final Adjustments",
    "activities": [
      {
        "name": "Cold Retrieval + Scouting Annotation",
        "mins": 25,
        "block": "Ice Breaker",
        "description": "Part 1: From memory, write down five numbers -- your opponent's Speed motor power, their Endurance decay rate, their best single-match goal count, your own Endurance output at t = 3, and your Speed motor power. Part 2: All scouting reports go up. Read your opponent's report about your team. Find one calculation they got right and one they got wrong. Annotate with sticky notes."
      },
      {
        "name": "Pre-Match Pitch Rehearsal + Teach the Math",
        "mins": 45,
        "block": "Challenge Block",
        "description": "Rehearse your 2-minute pre-match pitch for Championship judges: 'Our strategy is [X] because [equation result]. Our opponent will do [Y] based on their [stat].' Peer feedback: did they cite a specific number for every claim? Then each team picks one calculation and explains it in plain language as if a visitor just walked in."
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math."
      },
      {
        "name": "Final Commissioner's Meeting, Part 2 + Championship Bracket Reveal",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Final rule adjustments confirmed. Championship bracket revealed and posted. Final bot tune-up: program your Championship loadout, verify code against math, run one test drive."
      },
      {
        "name": "What-If? Analysis",
        "mins": 45,
        "block": "Challenge Block",
        "description": "The facilitator posts a hypothetical constraint: 'Endurance is capped at 4 for Championship.' You have 10 minutes to figure out which teams this affects and calculate how their decay rate and Speed change if they reallocate. Does this help or hurt your team? Show the math."
      },
      {
        "name": "Open Lab: Pitch Refinement and Bot Prep",
        "mins": 15,
        "block": "Open Lab",
        "description": "Rehearse your pitch one more time. Add specific numbers to any claim that is still vague. Every claim needs a number next to it before tomorrow."
      }
    ],
    "ends": "Name one mathematical claim from today's pre-match pitch rehearsals, from any team, not just yours. Write the calculation. Explain to a teammate why citing that specific number makes the argument stronger than a general claim. You have 4 minutes. |",
    "funElement": "Championship bracket reveal creates maximum anticipation.",
    "los": "LO 7.3 (scouting report complete, all four sections verified); LO 8.1 (pre-match pitch rehearsed with peer feedback on specificity); LO 8.2 (first rehearsal of expert-level explanation of proportional reasoning)",
    "facilitatorRisk": {
      "risk": "Pre-match pitch rehearsal focuses on delivery polish rather than mathematical specificity. Campers practice sounding confident rather than citing accurate numbers.",
      "say": "\"The judges tomorrow are scoring on one thing: mathematical specificity. Every claim needs a number. \"Our bot is fast\" scores zero. \"Our Speed = 7 gives us 35% motor power, which is 10 percentage points above the league average Speed of 5\" scores full points. Before you leave today, every claim in your pitch has a number next to it on paper.\" |"
    }
  },
  {
    "day": 18,
    "week": 4,
    "weekName": "Championship",
    "theme": "Championship Tournament",
    "activities": [
      {
        "name": "Pre-Championship Ritual",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "The whole camp does a physical warm-up together -- energetic and brief -- led by any camper who volunteers. Then each team gets 3 minutes for their own ritual: a chant, a handshake, anything you invented. This is earned."
      },
      {
        "name": "Championship Rounds 1 and 2",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Double-elimination bracket begins. Before each match, your team delivers a 2-minute pitch to the judges covering your strategy with specific numbers. Judges score on math, not presentation polish. After each match, loss-recovery runs -- same three steps, no shortcuts."
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math."
      },
      {
        "name": "Championship Semifinals and Final",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Remaining bracket matches. Pre-match pitch continues. Loss-recovery for every elimination. After the final, the champion posts their Championship configuration on the wall."
      },
      {
        "name": "Open Lab: Reflection Time",
        "mins": 15,
        "block": "Open Lab",
        "description": "No task required. Look at your Day 1 allocation versus today's. What changed and why? Reflect on your team's four-week data arc."
      }
    ],
    "ends": "Each person rates today's team collaboration 1--3. Hold up your number at the same time. If anyone holds up a 1, talk for 2 minutes. You have 5 minutes. |",
    "funElement": "Pre-match pitch to judges activates today, scored on mathematical specificity. This is the moment all four weeks of math work is tested in a live, high-stakes public setting.",
    "los": "LO 7.1 (pre-match prediction logged before every Championship match); LO 7.2 (post-match revision if \\>20% off); LO 8.1 (pre-match pitch scored by judges on rubric for evidence quality and math content)",
    "facilitatorRisk": {
      "risk": "Championship emotions make the loss-recovery protocol feel inadequate and the facilitator extends it into longer emotional support that skips the data step, causing loss-driven disengagement in the highest-stakes moment of the program.",
      "say": "\"The three-step script does not change because the stakes are higher. Step 1: \"That result was frustrating. That's a real feeling and it makes sense.\" Stop. 30 seconds. Step 2: \"Your model predicted \\[X\\]. You got \\[Y\\]. That gap is the most interesting thing that happened. Find the one decision that created it.\" Open the dashboard. One stat only. Step 3: \"What is one thing you would change?\" Write it down. The Championship context is not a reason to skip the math. It is the reason the math matters most right now.\" |"
    }
  },
  {
    "day": 19,
    "week": 4,
    "weekName": "Championship",
    "theme": "Community Exhibition: You Are the Experts Now",
    "activities": [
      {
        "name": "Expert Setup",
        "mins": 25,
        "block": "Ice Breaker",
        "description": "Set up your station: scouting report, bot, coordinate grid, and data dashboard on display. Practice teaching the content to your teammates before visitors arrive. Write down the one thing you want every visitor to understand."
      },
      {
        "name": "Community Exhibition: Teaching Begins",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Visitors arrive. Teach each visitor to do three things: plot a coordinate on the grid, program a bot to navigate there, and explain why your Speed allocation produces the motor power percentage it does. Your goal: each visitor completes all three tasks on their own."
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math."
      },
      {
        "name": "Extended Exhibition + Best Teacher Voting",
        "mins": 60,
        "block": "Match-Build-Make",
        "description": "Keep teaching. Visitors get one ballot: 'Which camper explained the math most clearly?' Exhibition matches can run while visitors watch."
      },
      {
        "name": "Scouting Report Verbal Check + Vote Count (concurrent)",
        "mins": 40,
        "block": "Match-Build-Make",
        "description": "Present one calculation from your completed scouting report to your facilitator -- 2 minutes, your choice of calculation. Explain what it is, how you calculated it, and what it tells you about your opponent's bot."
      },
      {
        "name": "Open Lab: Final Debrief and Prep",
        "mins": 15,
        "block": "Open Lab",
        "description": "Debrief with your team: what did visitors understand quickly? What confused them? Identify one explanation that did not land and write a revised version."
      }
    ],
    "ends": "Write: \"The skill I used today to teach a visitor was \\[name it\\] and I know it worked when \\[describe the specific moment you saw them understand it\\].\" You have 3 minutes. |",
    "funElement": "Best Teacher vote collected by visitors today. Winner announced at tomorrow's ceremony. Creates anticipation and social recognition for mathematical communication, not just winning. Scouting Report Verbal Check runs concurrently with vote count in the afternoon.",
    "los": "LO 8.2 (visitor completes coordinate plotting, navigation, and proportional reasoning explanation independently); LO 3.1 (coordinate plotting reviewed and taught to visitors); LO 1.2 (proportional reasoning explanation verified by visitor completion); LO 7.3 (scouting report verbal check: one calculation explained, method described, bot behavior implication named)",
    "facilitatorRisk": {
      "risk": "Campers feel embarrassed or exposed teaching visitors who are parents, adults, or people they know, which re-triggers math shame in a social context with high personal stakes.",
      "say": "\"This conversation happens before visitors arrive. Say: \"In 20 minutes, someone is going to walk through that door and not know how any of this works. You know more about this than they do. That is not arrogance. That is four weeks of work. Your job is not to impress them. Your job is to help them understand one thing. Just one. That is it.\"\" |"
    }
  },
  {
    "day": 20,
    "week": 4,
    "weekName": "Championship",
    "theme": "Awards, Post-Task Diagnostic, and the Close",
    "activities": [
      {
        "name": "Walk the Wall: Final Gallery",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "Final gallery walk of everything: bot origin stories, rivalry cards, leaderboard history, Commissioner rules, scouting reports, and the Day 1 goals from Week 1. Walk quietly. You are looking at what four weeks of work looks like."
      },
      {
        "name": "Post-Task Diagnostic: Prior Knowledge Reassessment",
        "mins": 15,
        "block": "Challenge Block",
        "description": "Ten questions, 15 minutes, by yourself. Same types as Day 1 -- proportional reasoning, rate of change, coordinate geometry. This measures your growth, not a grade. Your facilitator will compare your results to Day 1."
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math."
      },
      {
        "name": "Awards Ceremony",
        "mins": 60,
        "block": "Match-Build-Make",
        "description": "Championship winner celebrated. Best Teacher award announced. Your facilitator names one specific mathematical moment for each team -- a particular calculation, a dashboard decision, a Commissioner argument. Then each camper names one personal growth area and one specific camp moment that shows that growth."
      },
      {
        "name": "Open Lab: Final Free Time",
        "mins": 90,
        "block": "Open Lab",
        "description": "Unstructured time. Drive the bots. Revisit the coordinate grid. Teach each other anything you want. This is the last time the program exists in this form."
      }
    ],
    "ends": "What did you learn about yourself as a problem solver? Name one specific moment from this program where you solved something you thought you could not. What did you do differently than you would have done before camp? You have 5 minutes. |",
    "funElement": "Best Teacher award announced. Social recognition for mathematical communication, not winning. Awards ceremony closes the program with campers as the experts. The verbal check ran on Day 19. Day 20 is the celebration.",
    "los": "LO 7.1 (post-task diagnostic reflects Season 1 and 2 prediction practice); LO 8.2 (Best Teacher award outcome reflects visitor-assessed teaching quality); Note: LO 9.2 verbal reflection runs at the awards ceremony (Hello Insight post-survey) and is assessed there, not in the daily LO field. Scouting Report Verbal Check (LO 7.3) completed on Day 19 afternoon. # SCOPE AND SEQUENCE SUMMARY",
    "facilitatorRisk": {
      "risk": "Post-task diagnostic triggers end-of-program anxiety and campers disengage from it, treating it as a formality. Cognitive overload after four weeks.",
      "say": "\"Say this before distributing the diagnostic: \"On Day 1, you filled out something like this and most of you did not know most of the answers. Today you do. I am not grading you against anyone else. I am comparing you to yourself from four weeks ago. Every answer you know today that you did not know on Day 1 is evidence of what happened in this room. Fill it out completely.\"\" |"
    }
  }
];
