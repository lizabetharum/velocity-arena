const DAYS = [
  {
    "day": 1,
    "week": 1,
    "weekName": "Play Lab + Boot Camp",
    "theme": "First Contact: Speed, Bots, and the Question That Drives Everything",
    "bigMathIdea": "Proportional reasoning. Motor Power = Speed × 100 / 20. Each stat point = 5 motor power.",
    "vocabulary": "RATIO and UNIT RATE. Each Speed point gives you 5 motor power. That '5 per point' is a unit rate. The relationship between points and power is a ratio.",
    "activities": [
      {
        "name": "Sound and Movement: Circle Pass",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "Stand in a circle with your whole group. One person makes any sound and movement -- anything goes -- then passes it to the next person. That person copies it and immediately adds their own twist. Keep it moving around the circle. When your facilitator calls 'reverse,' flip directions. You can not do this wrong.",
        "facilitatorDescription": "Whole group stands in a circle. One camper creates a sound-and-movement combination and passes it clockwise. Each person copies exactly, then adds their own variation before passing. Call 'reverse' to flip directions. Model over-the-top variation yourself first -- campers who go tiny are shrinking. No right answer; name this explicitly before starting.",
        "script": "https://docs.google.com/document/d/1hXPfNWhq7z9Az6lpR94Lj78uSAZg7WH3HX83gIe4lp4/edit?usp=drivesdk"
      },
      {
        "name": "Mirror: Pairs",
        "mins": 15,
        "block": "Ice Breaker",
        "description": "Face a partner. One person leads slow, deliberate movements while the other mirrors exactly. No talking. After two minutes, swap. No winner, no evaluator -- just two people paying attention to each other.",
        "facilitatorDescription": "Pairs face each other. One camper leads slow, deliberate movements; the partner mirrors exactly in silence. Swap leaders after two minutes. No winners, no evaluators -- the goal is sustained mutual attention. Watch for speed creep; gently remind the lead to slow down if the follower cannot keep up.",
        "script": "https://docs.google.com/document/d/1qAd3bp7JVVt--7k_DVi9iq9a9A1bjuYESbz7GYqyU1sY/edit?usp=drivesdk"
      },
      {
        "name": "Pre-Task Diagnostic: Prior Knowledge Assessment",
        "mins": 15,
        "block": "Challenge Block",
        "description": "You answer 8 questions about general math (speed, distance, graphs) in 12 minutes. There is no grade. This just helps your facilitator know what you already know so the program can meet you where you are.",
        "facilitatorDescription": "Campers receive a reference card showing general math contexts -- no bot content, no stat system. Working individually, they answer 8 questions in 12 minutes. There is no grade. Use the results to map each camper's starting point by math topic so the program meets campers where they are. Frame it before distributing: this is a measure of what campers already know about the eight math topics, not about Velocity Arena.",
        "link": "/activities/diagnostic/index.html",
        "script": "https://docs.google.com/document/d/1ki4h4daYwPkqDaJ9BnYlwBNBxTpMsEi5MukBDviqwfI/edit?usp=drivesdk",
        "webpage": "https://velocity-arena-922bfwmu7-liz-arums-projects.vercel.app/activities/diagnostic/index.html"
      },
      {
        "name": "Driving Question Reveal + Team Formation",
        "mins": 10,
        "block": "LX Setup",
        "description": "A big poster is unveiled with the question that drives everything we do for four weeks. Your three-person team is announced. You meet your teammates and sit together. No math yet.",
        "facilitatorDescription": "Unveil the driving-question poster that will anchor the whole four weeks. Announce three-person teams and have campers sit together at their team tables. No math content yet -- this activity is pure set-up and social orientation.",
        "script": "https://docs.google.com/document/d/1whCYZecdM3gyaziLFXggw8qiABDZVBvgxwAGWxMc3UQ/edit?usp=drivesdk"
      },
      {
        "name": "Stat Card Distribution",
        "mins": 5,
        "block": "LX Setup",
        "description": "You get a blank stat card with four rows: Speed, Endurance, Turning, Power. Three rows are greyed out. Today you fill in one line. This card is yours for four weeks.",
        "facilitatorDescription": "Hand each camper a blank stat card with four rows (Speed, Endurance, Turning, Power). Three rows are greyed out today; only Speed will be filled in. The card stays with the camper for the full four weeks -- emphasize that it is a permanent artifact, not scratch paper.",
        "script": "https://docs.google.com/document/d/1K0kG2dMqj8hDzy1uFp6OpIj4PZrtm1eb9zCeg_wqSx0/edit?usp=sharing",
        "template": "https://docs.google.com/document/d/10e6BRrdOqRjV_aabz8LA6NHu1ecOew2DZcBor0bIpLg/edit?usp=drive_link"
      },
      {
        "name": "Speed Stat Challenge: What Does Motor Power Actually Mean?",
        "mins": 40,
        "block": "Challenge Block",
        "description": "One formula goes on the board: Speed % = (Speed points / 20) x 100. Your team calculates motor power for Speed values of 1, 3, 5, 6, and 8. Then compare answers with the team next to you. If you disagree, figure out where the split is -- without asking the facilitator first.",
        "facilitatorDescription": "Put one formula on the board: Speed % = (Speed points / 20) x 100. Teams calculate motor power for Speed values of 1, 3, 5, 6, and 8. Then teams compare answers with the team next to them and reconcile any disagreements before asking for help. Do not resolve disagreements yourself -- the productive work happens in the between-team conversation.",
        "script": "https://docs.google.com/document/d/12wViKxrKPix59HkDOGzY5YdpanDO5o_j6hbpYZlg3MM/edit?usp=drivesdk",
        "worksheet": "https://docs.google.com/document/d/14AtbbAZ9NygFtvebCek_SXmQKuzPbJxZKpGsp0DiFc8/edit?usp=drive_link"
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math.",
        "facilitatorDescription": "Eat and rest. 60-minute protected break. No math talk."
      },
      {
        "name": "First Bot Drive: Speed in Real Life",
        "mins": 80,
        "block": "Match-Build-Make",
        "description": "You get your BBC micro:bit and Cutebot Pro. Program Speed = 3 (15% motor power), drive on the coordinate grid for 30 seconds, and record the distance. Then program Speed = 6 (30%) and repeat. Enter both rows in your dashboard and answer: did doubling Speed points double your distance?",
        "facilitatorDescription": "Distribute BBC micro:bits and Cutebot Pros. Teams program Speed = 3 (15% motor power), drive on the coordinate grid for 30 seconds, and record distance. Then program Speed = 6 (30%) and repeat. Both runs go in the dashboard. The hinge question: did doubling Speed points double the distance? First hands-on bot time of the program -- protect novelty, let teams fumble with the hardware.",
        "script": "https://docs.google.com/document/d/1o2YHcYLuogG5VlQlsGa2mR-HvhYQEvRMuTxHLj9uoVU/edit?usp=drivesdk",
        "worksheet": "https://docs.google.com/document/d/1LLHU2AGux0_DxKIzkUDRcMvzSoxAIOkhigtIn6HFcJ0/edit?usp=sharing"
      },
      {
        "name": "Open Lab: Free Code Time",
        "mins": 30,
        "block": "Open Lab",
        "description": "Unstructured time with your bot. Drive it, experiment with MakeCode, or talk strategy with your team. No task to complete -- just time to explore.",
        "facilitatorDescription": "Unstructured bot time for teams. Driving, experimenting in MakeCode, strategy talk -- all fine. No required output. First Open Lab of the program; resist the urge to assign a task. Novelty with the hardware is the point.",
        "script": "https://docs.google.com/document/d/1x7RnctRVwDj3nuC77ApKWc6Xquo7mQXYhYhLJT4bfjk/edit?usp=drivesdk"
      }
    ],
    "ends": "Write one personal goal and one team goal for this week. Post them on the wall. You have 3 minutes. |",
    "produce": [
      "Prior knowledge diagnostic — 8 math questions answered individually",
      "Stat card — Speed row filled in",
      "Speed Stat Challenge worksheet — motor power percentages for Speed values 1, 3, 5, 6, and 8",
      "Data dashboard — two distance entries (Speed = 3 and Speed = 6)",
      "Written sentence — predicted vs. actual distance compared with calculation"
    ],
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
    "bigMathIdea": "Rate of change. P(t) = 100 − (20 − E) × 1.5 × t. Motor power decays linearly over time.",
    "vocabulary": "RATE OF CHANGE and LINEAR DECAY. Your clap count dropped by the same amount each round. That constant drop is a rate of change. When something decreases at a steady rate, that's linear decay.",
    "activities": [
      {
        "name": "Failure Bow",
        "mins": 15,
        "block": "Ice Breaker",
        "description": "One at a time, each person makes a deliberate, over-the-top mistake -- drop something, say something wrong, trip on purpose -- then takes a deep, exaggerated bow while the whole group cheers as loud as possible. The bigger the mistake, the louder the cheer.",
        "facilitatorDescription": "One at a time, each camper makes a deliberate over-the-top mistake -- drop something, say something wrong, trip on purpose -- then takes a theatrical bow while the whole group cheers as loud as possible. The bigger the mistake, the louder the cheer. Model it first yourself to set the scale. Frame the rule: campers are trying to out-embarrass each other on purpose. Risk: can feel humiliating to campers with math shame, so the over-the-top theatrical framing is essential.",
        "script": "https://docs.google.com/document/d/1P1yi8TbpERF1pztb-VTR4v4gpO4dDz0_3fNkEslJDBk/edit?usp=drivesdk"
      },
      {
        "name": "Slow Down, Slow Down",
        "mins": 15,
        "block": "Ice Breaker",
        "description": "Your whole team does jumping jacks at full speed for 30 seconds. Then you slow down -- one fewer rep each cycle -- until you are doing one jumping jack every 10 seconds. You feel the drop in your body. Your facilitator asks: 'What would we call it if your bot did this?' The answer is Endurance.",
        "facilitatorDescription": "Teams do jumping jacks at full speed for 30 seconds, then cycle down -- one fewer rep each cycle -- until they are doing one jumping jack every 10 seconds. Campers feel the drop physically. Then ask the hinge question: 'What would we call it if your bot did this?' The answer is Endurance. Physical embodiment before the formula gets introduced in the Challenge Block.",
        "script": "https://docs.google.com/document/d/1mGn9MzXHu0cghazkY0RGQDzLq4lr0fpRFz8et-B1MMo/edit?usp=drivesdk"
      },
      {
        "name": "Endurance Stat Challenge: Drawing the Decay",
        "mins": 50,
        "block": "Challenge Block",
        "description": "The formula goes on the board: P(t) = 100 - (20 - Endurance) x 1.5 x t. Your facilitator works one full example and names the rate of change out loud -- this number is the slope of the decay line, how fast your bot loses power per minute. Then you calculate for different Endurance values with less and less help. Plot your results on paper. What shape do you get? Compare with the team next to you.",
        "facilitatorDescription": "Formula on the board: P(t) = 100 - (20 - Endurance) x 1.5 x t. Step 1 (5 min): work one full example on the board -- Endurance = 6, decay rate = 21% per minute, P(1) = 79%, P(2) = 58%, P(3) = 37%, P(4) = 16%, P(5) capped at 0%. Every number shown, no steps skipped. Name the rate of change explicitly as the slope. Step 2 (10 min): teams calculate for Endurance = 4 using a scaffolded worksheet. Step 3 (10 min): teams calculate for Endurance = 2 with no scaffolding. Step 4 (10 min): teams plot their own Endurance allocation over five t-values. Step 5 (5 min): two teams with different allocations read their t=3 values aloud -- that comparison is where the formula becomes strategic.",
        "script": "https://docs.google.com/document/d/1sYI4n2zRgr-a98835xcq0P6UdhhoHvJjBZjFPbl2fbg/edit?usp=drivesdk",
        "worksheet": "https://docs.google.com/document/d/10AvFGU5Dss1FNtHiuFk1ZGqquCrM2KYKX0_UK3gf4zo/edit?usp=drive_link"
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math.",
        "facilitatorDescription": "Eat and rest. 60-minute protected break. No math talk."
      },
      {
        "name": "Program Endurance Into Your Bot",
        "mins": 65,
        "block": "Match-Build-Make",
        "description": "Open MakeCode and write code that reduces your bot's motor power over time based on your Endurance allocation. Test it by running the bot for 2 minutes. Record distance in the first 30 seconds vs. the last 30 seconds, and write one sentence about the gap between what the formula predicted and what actually happened.",
        "facilitatorDescription": "Teams open MakeCode and write code that reduces the bot's motor power over time based on their Endurance allocation. They test by running the bot for 2 minutes, recording distance in the first 30 seconds vs. the last 30 seconds. Each team writes one sentence about the gap between what the formula predicted and what actually happened -- that gap is the productive noticing.",
        "script": "https://docs.google.com/document/d/1DC_OoLC1Cz_QbwkvVGKaorM9pTOcouWny7Sw4qrqLaw/edit?usp=drivesdk",
        "worksheet": "https://docs.google.com/document/d/1H-sRKYvSqgAfmtK2Jo3f5cTc1706qA3OmmZUYd8Exro/edit?usp=drive_link"
      },
      {
        "name": "Break",
        "mins": 2,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "2-minute micro-break. Quick reset between back-to-back activities."
      },
      {
        "name": "Role Rotation Briefing",
        "mins": 10,
        "block": "Match-Build-Make",
        "description": "Your facilitator explains the three team roles -- Coder, Fabricator, Analyst -- that rotate weekly. Your team decides who starts in each role next week.",
        "facilitatorDescription": "Explain the three team roles -- Coder, Fabricator, Analyst -- that rotate weekly. Teams decide internally who starts in each role. Emphasize rotation: no camper specializes in one role for the whole program.",
        "script": "https://docs.google.com/document/d/1PiKGa7FdUtdhcvAF49XXecY_2bKQXI3KeV03aEmA-ZE/edit?usp=drivesdk"
      },
      {
        "name": "Bot Naming Ceremony",
        "mins": 40,
        "block": "Match-Build-Make",
        "description": "Your team names your bot. Then you write exactly one sentence explaining what it is fighting for. The name and sentence go on the wall right now and stay there for all four weeks.",
        "facilitatorDescription": "Teams name their bot and write exactly one sentence explaining what it is fighting for. Name and sentence go on the wall at the end of the session and stay there for all four weeks. First permanent artifact of the program -- treat the ceremony with some weight. Do not skip the wall posting.",
        "link": "/activities/robot-names/index.html",
        "script": "https://docs.google.com/document/d/1Ki8OW7XWCVaRnMMvXk0Guxgh3DN2GZP4NRWGJ4UyoWU/edit?usp=drivesdk",
        "webpage": "https://velocity-arena-bsowh3els-nycfirsts-projects.vercel.app/activities/robot-names/index.html"
      },
      {
        "name": "Open Lab: Free Code Time",
        "mins": 20,
        "block": "Open Lab",
        "description": "Unstructured time with your bot. Experiment with your Endurance code. Try different point values and observe. No task, no output required.",
        "facilitatorDescription": "Unstructured bot time. Teams experiment with Endurance code, try different point values, observe. No task, no output required. Let teams follow their curiosity about decay behavior.",
        "script": "https://docs.google.com/document/d/1c1eqg0S2J3XcXiKMmNwJ3UTzanJ9fqgavb8SrAyMrxo/edit?usp=drivesdk"
      }
    ],
    "produce": [
      "Endurance decay worksheet — scaffolded table for E \= 4; independent table for E \= 2", 
      "Paper graph — P(t) plotted across five t-values for team's Endurance allocation", 
      "Endurance bot code — motor power decay programmed in MakeCode", 
      "Data dashboard — two distance entries (first 30 sec vs. last 30 sec of 2-min run)", 
      "Written sentence — formula prediction vs. bot result, gap identified",  
      "Role assignment record — Coder, Fabricator, Analyst roles documented for Week 2",  
      "Wall display — bot name and one-sentence mission statement"
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
    "bigMathIdea": "Coordinate geometry. Turning stat controls turn radius. Grid navigation IS the math.",
    "vocabulary": "COORDINATE PAIR and ORDERED PAIR. When I say (4,3), that's a coordinate pair — also called an ordered pair. The order matters: (4,3) and (3,4) are different locations.",
    "activities": [
      {
        "name": "Human Robot Programming Challenge",
        "mins": 25,
        "block": "Ice Breaker",
        "description": "One person on your team is the 'robot.' The other two give step-by-step verbal instructions (forward 2, turn left 90 degrees, forward 1) to navigate between two spots. The robot follows instructions exactly -- even if they lead somewhere wrong. No touching allowed.",
        "facilitatorDescription": "One camper per team plays 'robot' while the other two give step-by-step verbal instructions (forward 2, turn left 90 degrees, forward 1) to navigate between two points. The robot follows instructions literally -- even when they lead somewhere wrong. No touching. Sets up the Turning stat and the idea that precise instructions produce precise movement.",
        "script": "https://docs.google.com/document/d/1KCi2wIXFxhKpFjJtnzjW_-DEDTpZ-ODI2dinMXD6Gcs/edit?usp=drive_link"
      },
      {
        "name": "Distance-Time Graphs",
        "mins": 65,
        "block": "Challenge Block",
        "description": "Part 1 (20 min): You get a data card with two bot runs. Plot both on the same graph. One line slopes down, the other stays flat. Figure out why without asking the facilitator, then flip the card to see the stat allocations on the back. Arc Approximation (10 min): Your facilitator draws one smooth curved turn on the board. Three straight segments are overlaid as chords. Two questions: are the segments together longer or shorter than the arc? What happens as you add more, shorter segments? The point is physical intuition that a curve can be broken into straight pieces with measurable lengths -- the prerequisite for the distance formula. Walk the Plane (15 min): On a life-sized taped coordinate grid, walk to called coordinates. Then: 'Move from (1,1) to (4,5). Estimate the straight-line distance.' Your facilitator writes d = sqrt((x2-x1)^2 + (y2-y1)^2) on the board for the first time. Calculate it, then verify against two more pairs. The formula is verified by standing on the grid. Part 2 (20 min): Turning formulas on the board -- Arc Segments = TURNING, Turn Ratio = 0.2 + (TURNING x 0.02). Fill in your stat card, then program your bot to navigate from (0,0) to a called coordinate.",
        "facilitatorDescription": "Part 1 (20 min): teams plot two bot runs on the same graph from a data card -- one line slopes down, the other stays flat. Teams figure out why before flipping the card for the stat allocations. Arc Approximation (10 min): draw one smooth curved turn on the board with three straight chord segments overlaid. Ask: are the segments together longer or shorter than the arc, and what happens with more, shorter segments? The point is the physical intuition that a curve can be broken into straight measurable pieces -- prerequisite for the distance formula. Walk the Plane (15 min): campers walk to called coordinates on a life-sized taped grid, then estimate the distance from (1,1) to (4,5). Write d = sqrt((x2-x1)^2 + (y2-y1)^2) on the board for the first time, calculate, and verify against two more pairs -- the formula gets verified by standing on the grid. Part 2 (20 min): Turning formulas go on the board (Arc Segments = TURNING, Turn Ratio = 0.2 + (TURNING x 0.02)). Teams fill stat cards, then program the bot to navigate from (0,0) to a called coordinate.",
        "script": "https://docs.google.com/document/d/1Rha6U3CayswkxkooVnwXukkJv7dDJnZALeHko60_kyg/edit?usp=drive_link",
        "worksheet": "https://docs.google.com/document/d/1uSOxGbf6KWQ7JUs-1vSq4q2-jqeo0EU54PFz4M9rmeA/edit?usp=sharing"
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math.",
        "facilitatorDescription": "Eat and rest. 60-minute protected break. No math talk."
      },
      {
        "name": "Energy Reset",
        "mins": 3,
        "block": "",
        "description": "Stand up. 30 seconds of jumping jacks, 30 seconds of arm circles, 30 seconds of silent stretch. Sit back down.",
        "facilitatorDescription": "Lead the group through 30 seconds of jumping jacks, 30 seconds of arm circles, 30 seconds of silent stretch, then seats. Under 3 minutes, no talking during stretch. Use this to break a cognitive slump, not as a reward."
      },
      {
        "name": "Coordinate Navigation Practice: Arc Approximation",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Keep programming your bot to navigate to called coordinates using arc approximation and the TURNING formulas (Arc Segments = TURNING, Turn Ratio = 0.2 + TURNING x 0.02). The target: three consecutive successful navigations by end of Day 4. Record every attempt -- the coordinate called, the coordinate reached, and the error distance.",
        "facilitatorDescription": "Teams keep programming the bot to navigate to called coordinates using arc approximation and the TURNING formulas (Arc Segments = TURNING, Turn Ratio = 0.2 + TURNING x 0.02). Target: three consecutive successful navigations by end of Day 4. Every attempt gets logged -- coordinate called, coordinate reached, error distance. Error distance is the data, not a failure.",
        "script": "https://docs.google.com/document/d/1ZWl_I7dNZRKr3c4pMbAnz7vCyE8L1it5qpo-X_37qZc/edit?usp=drive_link",
        "worksheet": "https://docs.google.com/document/d/1aeF19RNcyBKM9om7yd8hknRvRf-_ZDol6UTXm_xGEko/edit?usp=sharing"
      },
      {
        "name": "Open Lab: Free Code Time",
        "mins": 35,
        "block": "Open Lab",
        "description": "Unstructured navigation practice. Try different coordinate targets. Experiment with Turning values. Build your intuition for what different settings do to the turn radius.",
        "facilitatorDescription": "Unstructured navigation practice. Teams try different coordinate targets and experiment with Turning values to build intuition for how settings affect turn radius. No required output -- observation and feel."
      }
    ],
    "endBufferMins": 2,
    "produce": [
      " Distance-time graph — Run A and Run B plotted from data card",  
      "Written estimate — straight-line distance between two coordinates",  
      "Distance formula calculations — d \= √((x₂−x₁)² \+ (y₂−y₁)²) verified for three coordinate pairs",  
      "Launch Sequence — written plan and MakeCode arc navigation code"
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
    "bigMathIdea": "Ratios and non-proportional scaling. charge speed = Power² / 2 and follow through = Power × 200. Double the Power, quadruple the charge speed.",
    "vocabulary": "PROPORTIONAL SCALING. If Power = 2 gives charge = 2 and Power = 4 gives charge = 8, the output scales with Power². The output grows faster than the input — that's non-proportional.",
    "activities": [
      {
        "name": "Finger Speed-Sums",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "Face a partner. On a count of three, both of you show any number of fingers (0-5). Race to say the sum first. Correct answer earns a point. Rotate partners every 90 seconds. The math is easy -- the speed is the challenge.",
        "facilitatorDescription": "Pairs face each other. On a count of three, both show any number of fingers (0-5). First to say the correct sum earns a point. Rotate partners every 90 seconds. The math is trivial -- speed is the challenge. Creates low-stakes math play before the harder Power block.",
        "script": "https://docs.google.com/document/d/1JNyyLnY61I0ZFGAbaiF8hfYKNHLkampIQiTAsIgHMC4/edit?usp=drive_link"
      },
      {
        "name": "Power Allocation: Stat Card Fill-In",
        "mins": 3,
        "block": "Ice Breaker",
        "description": "Write your Power allocation on your stat card. Power is not a free choice: it is whatever points remain after Speed, Endurance, and Turning. Calculate 20 minus your three allocated stats and write that number in the Power row. If your three stats already sum to 20, you have no points for Power and need to revise one prior stat before the block begins.",
        "facilitatorDescription": "Campers fill in the Power row of the stat card. Power is not a free choice -- it is whatever remains after Speed + Endurance + Turning. Teams calculate 20 minus their three allocated stats. If the three already sum to 20, they have zero Power and must revise one prior stat before the Challenge Block starts. Check every card before releasing to the block."
      },
      {
        "name": "Power Stat Challenge: Ratio and Motor Speed",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Two rules go on the board: charge speed = Power² / 2, and follow through = POWER x 200. Calculate charge speed for Power = 1, 2, 4, and 8 (giving 0.5, 2, 8, and 32). Before running the physical test, look at your Speed formula from Day 1: motor speed = (Speed / 20) x 100 -- proportional, double the stat and double the output. Power is not proportional: double the stat and you quadruple the output. Both formulas live on the same stat card. That contrast is the mathematical core of today. Then test it physically: program Power 4 (charge speed 8) into MakeCode, place your bot exactly 40 cm from the ball, drive, and measure how far the ball travels. Repeat with Power 8 (charge speed 32). Did doubling the points double kick distance? Both answers should surprise you.",
        "facilitatorDescription": "Two rules on the board: charge speed = Power² / 2, follow through = POWER x 200. Teams calculate charge speed for Power = 1, 2, 4, 8 (0.5, 2, 8, 32) and the ratios between them. Side-by-side with Day 1's Speed formula: Speed is proportional (double the stat, double the output); Power is not (double the stat, quadruple the output). That contrast is the mathematical core of today. Test physically: teams program Power 4 (charge speed 8), place the bot exactly 40 cm from the ball, kick, measure. Repeat with Power 8 (charge speed 32). Both results should surprise them.",
        "script": "https://docs.google.com/document/d/1KL6r2uOv0aGVn9Vhn5aqp8XL5tYP4LP2dyfvwxIdR8E/edit?usp=drive_link",
        "worksheet": "https://docs.google.com/document/d/1hibUDAxPyYtzHXAbZb7Z2A0tmaMKNz8BX0fSDL6hzc0/edit?usp=drive_link"
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math.",
        "facilitatorDescription": "Eat and rest. 60-minute protected break. No math talk."
      },
      {
        "name": "Scoop Build + Ratio Testing",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Build a cardboard front scoop for your Cutebot. One rule: it has to make clean contact with the ball. Test at three Power settings (charge speed = Power² / 2), run 3 shots at each from the 40 cm start line, and record kick distances in your dashboard. Then write: 'Quadrupling charge speed did / did not quadruple kick distance, because...'",
        "facilitatorDescription": "Teams build a cardboard front scoop for the Cutebot. One rule: it must make clean contact with the ball. Teams test at three Power settings (charge speed = Power² / 2), run 3 shots at each from the 40 cm start line, and record kick distances in the dashboard. Each team writes: 'Quadrupling charge speed did / did not quadruple kick distance, because...' Keep the build loose -- iteration is the point, not a perfect first scoop.",
        "script": "https://docs.google.com/document/d/13XtjnTDWgTEhslEzgXaXYCs24axXmXC1jTP9B2D7R0A/edit?usp=drive_link",
        "worksheet": "https://docs.google.com/document/d/1VqQrWMrNWUKKHIVaulGEyOchsYJ4Xs4D5TC2WWuRhDM/edit?usp=drive_link"
      },
      {
        "name": "Break",
        "mins": 10,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "10-minute break. Campers stand, move, get water. Longer break lets energy fully reset before the next heavy block."
      },
      {
        "name": "Open Lab: Free Code Time",
        "mins": 40,
        "block": "Open Lab",
        "description": "Refine your scoop design and your Power speed value in MakeCode. Try one scoop redesign and one speed change. Record which had a bigger effect on kick distance.",
        "facilitatorDescription": "Teams refine scoop design and Power speed value in MakeCode. Require one scoop redesign and one speed change per team; teams record which had the bigger effect on kick distance. This is where teams start to internalize the physical-vs-code trade-off."
      }
    ],
    "produce": [
      "Power Stat Challenge worksheet — charge speed (P²) and follow-through (P × 200\) for P \= 1, 2, 4, 8; ratios; two ball travel distances",  
      "Cardboard scoop — built and attached to Cutebot",  
      "Scoop testing worksheet — kick distances at three Power settings, 3 shots each",  
      "Written sentence — whether quadrupling charge speed quadrupled kick distance, with reasoning",  
      "Data log entry — which change (scoop or Power value) had bigger effect on kick distance"
    ],
    "endBufferMins": 7,
    "ends": "Write this sentence and complete it: \"The skill I used today was \\[name it specifically, not just 'math'\\] and I will use it tomorrow by \\[name the exact moment and action\\].\" You have 3 minutes. |",
    "funElement": "None today. The scoop build and the \"doubling motor speed does not double kick distance\" discovery create genuine productive surprise. The scoop iteration loop (build, test, adjust) generates its own momentum.",
    "los": "LO 1.2 (proportional vs non-proportional contrast: Speed output scales linearly -- double the stat, double the output; Power output scales as P²/2 -- double the stat, quadruple the output; both named explicitly with side-by-side examples); LO 3.2 (distance calculations verified against bot kick test data)",
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
    "bigMathIdea": "Budget constraint: S + E + T + P = 20. Equals sign as BALANCE, not 'the answer is.'",
    "vocabulary": "CONSTRAINT and VARIABLE. S, E, T, and P are variables — they change based on your choices. The equation S + E + T + P = 20 is a constraint that limits the valid combinations.",
    "activities": [
      {
        "name": "Conditional Simon Says",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "'Simon Says: IF the sum of Speed + Endurance equals 10, THEN clap 4 times.' You have to check the math on your stat card before you act. Only do the action if the condition is actually true for your numbers.",
        "facilitatorDescription": "Call commands like 'Simon Says: IF the sum of Speed + Endurance equals 10, THEN clap 4 times.' Campers check their stat card before acting and only perform the action if the condition is true for their numbers. Warm-up for conditional logic and the full-system equation coming in the Challenge Block.",
        "script": "https://docs.google.com/document/d/1h8HEuGVEsHCbIc_LeWVK2cioguPdtOpbBl6Bd27Lywg/edit?usp=drive_link"
      },
      {
        "name": "Two-Formula Warm-Up",
        "mins": 8,
        "block": "Warm-up Block",
        "description": "This warm-up bridges the gap by pairing two formulas on one allocation — so the jump goes from one to two to four, not one to four.",
        "facilitatorDescription": "Teams pair two formulas on a single allocation as a cognitive bridge -- one formula to two, rather than one straight to four. Run this before the full four-formula budget constraint so the leap is staged.",
        "script": "https://docs.google.com/document/d/1X1jWE_d-Ja9fB559Z0OqLg4OJVaEWTbkN-e2_sSoxgc/edit?usp=drive_link"
      },
      {
        "name": "The Budget Constraint: Speed + Power + Turning + Endurance = 20",
        "mins": 50,
        "block": "Challenge Block",
        "description": "One equation goes on the board: Speed + Power + Turning + Endurance = 20. Your team designs 3 different stat loadouts, each using exactly 20 points. For each one, calculate all four formula outputs -- Speed linear (motor power), charge speed = Power² / 2, follow through = POWER x 200, Arc Segments = TURNING, Turn Ratio = 0.2 + (TURNING x 0.02), and Endurance decay -- and record them. Then answer: if you want Speed = 8, what are you giving up? Show every calculation.",
        "facilitatorDescription": "Write one equation on the board: Speed + Power + Turning + Endurance = 20. Launch in under 5 minutes. Teams design 3 different stat loadouts, each using exactly 20 points, and calculate all four formula outputs for each: Speed motor power, charge speed = Power² / 2, follow through = POWER x 200, Arc Segments = TURNING, Turn Ratio = 0.2 + (TURNING x 0.02), and Endurance decay. Teams answer: if Speed = 8, what are they giving up? Every calculation shown. After launching, walk to the back of the room and stay out -- talking reinforces the idea that there is one right answer.",
        "script": "https://docs.google.com/document/d/1qtE-c80NIwHmAZBYp-aFF3alFVtrdfwHuow5CL9zKFg/edit?usp=drive_link",
        "worksheet": "https://docs.google.com/document/d/1phpZXVdhlbUXIrBv_lv1Q4njeCX116chos0deJRs360/edit?usp=drive_link"
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math.",
        "facilitatorDescription": "Eat and rest. 60-minute protected break. No math talk."
      },
      {
        "name": "Cold Recall Check",
        "mins": 10,
        "block": "Challenge Block",
        "description": "Five questions, 10 minutes, by yourself, no notes. General math -- slopes, recipes, percentages, distances. No grade. This is just a check on what is sticking after four days.",
        "facilitatorDescription": "Five questions, 10 minutes, individual, no notes. General math contexts -- slopes, recipes, percentages, distances. No grade. Diagnostic for what is sticking after four days. Frame explicitly as not a grade; use results to inform Week 2 reteach priorities.",
        "script": "https://docs.google.com/document/d/1TuqKRSipwR2pC5txnlN7Eh3y-p1Rh2dCIVb8uFO9iKA/edit?usp=drive_link",
        "worksheet": "https://docs.google.com/document/d/1NbIfiz0bZfl6K0YYQNTrqZKObripBDC7fB7Y7NLeAOs/edit?usp=sharing"
      },
      {
        "name": "Match Format Briefing",
        "mins": 10,
        "block": "",
        "description": "Each match is 3 minutes, two teams on a flat field, first team to push the ball across the opposing end line scores a goal. Bots are pre-programmed. After each match, both teams record their score in the data dashboard immediately. Today's matches are practice only and do not count in Season 1 standings.",
        "facilitatorDescription": "Walk the whole camp through match format: 3 minutes each, two teams per match, first to push the ball across the end line scores. Bots are pre-programmed -- no joystick control during the match. Emphasize the programming commitment so teams understand their allocation choice is binding during play.",
        "script": "https://docs.google.com/document/d/1DDHa4QzzGpcFIWMZhXt1frwULDvcngx5uOZ25LzLNzw/edit?usp=drive_link",
        "worksheet": "https://docs.google.com/document/d/1PF0aj4YsLBO4HhphJ2yq1g42oZlClQpwL_v2JjEty5I/edit?usp=sharing",
        "webpage": "https://velocity-arena-gold.vercel.app/activities/dashboard/velocity-arena-dashboard.html"
      },
      {
        "name": "Simulation Matches: Your Loadout vs. Reality",
        "mins": 80,
        "block": "Match-Build-Make",
        "description": "Pick your best loadout from this morning, program it into your bot, and run practice matches. These do not count. After each run, compare: did your bot behave the way your allocation predicted? Record observations labeled 'simulation' in your dashboard.",
        "facilitatorDescription": "Teams pick their best loadout from the morning, program it into the bot, and run practice matches. These do not count toward any record. After each run, teams compare: did bot behavior match what the allocation predicted? Observations go in the dashboard labeled 'simulation.' First exposure to pre-match prediction and post-match comparison.",
        "script": "https://docs.google.com/document/d/1dLE5nbDOkwBGEi6ejIJX1IT48ir071mXRRU2A1_6Kvw/edit?usp=drive_link"
      },
      {
        "name": "Open Lab: Free Code Time",
        "mins": 40,
        "block": "Open Lab",
        "description": "Experiment with the loadouts you designed this morning. Try each one. Which one produces the behavior your formulas predicted?",
        "facilitatorDescription": "Teams experiment with the three loadouts they designed in the morning. Each gets tested. The question: which one produces the behavior their formulas predicted? This is the hinge where teams notice formula-vs-reality gaps heading into Season 1.",
        "script": "https://docs.google.com/document/d/1b-dHky2JBEv8cZp-h9htJNm8CnTfeaA9Tz9ENb_GP1Y/edit?usp=drive_link"
      }
    ],
    "produce": [
      "Two-formula warm-up — Speed and Endurance outputs calculated for one allocation",  
      "Three stat loadouts — each summing to 20 points; all four formula outputs calculated; recorded in dashboard ", 
      "Written answer — tradeoff shown if Speed \= 8, with all calculations",  
      "Cold Recall Check — five individual math problems on paper (no grade)",  
      "Launch sequence code — JavaScript uploaded to bot",  
      "Data dashboard — simulation match observations logged (prediction vs. bot behavior)"
    ],
    "endBufferMins": 2,
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
    "bigMathIdea": "All four formulas working together. Interleaved practice across Speed, Endurance, Turning, Power, and Budget — identify the formula before you calculate.",
    "activities": [
      {
        "name": "Equation Relay Race",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "Your team lines up. The first person solves step 1 of a multi-step equation on the whiteboard, tags the next person for step 2, and so on. First team to the correct final answer wins.",
        "facilitatorDescription": "Teams line up at the whiteboard. First camper solves step 1 of a multi-step equation, tags the next camper for step 2, and so on. First team to the correct final answer wins. Primes procedural fluency before the interleaved problem set.",
        "script": "https://docs.google.com/document/d/1TM8X1tlASaOyRy5xgQauO_l05p1tAPgbD0FkGdACu1Q/edit?usp=drive_link",
        "worksheet": "https://docs.google.com/document/d/17el70myq_C81c16ErdoBQ_KKBS8x-fb0Xug2SEA_-Fg/edit?usp=sharing"
      },
      {
        "name": "Break",
        "mins": 10,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "10-minute break. Campers stand, move, get water. Longer break lets energy fully reset before the next heavy block."
      },
      {
        "name": "Official Stat Allocation: Interleaved Problem Set",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Complete your official Season 1 stat allocation using a problem set with 12 shuffled problems across all four formula types, including Turn Ratio = 0.2 + (TURNING x 0.02), follow through = Power x 200, and Arc Segments = TURNING. You cannot just do all Speed problems first -- you have to figure out which formula applies before you calculate. A concept tag column runs alongside each problem: before calculating, write the concept name that the problem targets (unit rate, ratio, linear decay, coordinate geometry, or proportional scaling). Circle your four official values. All four circled answers and all 12 concept tags must be verified correct before you touch a tool.",
        "facilitatorDescription": "Teams complete their official Season 1 stat allocation using a 12-problem interleaved set covering all four formula types (Turn Ratio = 0.2 + (TURNING x 0.02), follow through = Power x 200, Arc Segments = TURNING, and Speed/Endurance). Problems are shuffled so teams have to identify the formula before calculating -- no doing all Speed problems first. A concept tag column runs alongside each problem: teams name the concept (unit rate, ratio, linear decay, coordinate geometry, proportional scaling) before calculating. All four circled official values and all 12 concept tags must verify correct before any team touches a tool in the afternoon block.",
        "script": "https://docs.google.com/document/d/1Y6w0LgGfHSx_5icP4yTCNnHzYIYSofLFxoQVoNdZweY/edit?usp=drive_link"
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math.",
        "facilitatorDescription": "Eat and rest. 60-minute protected break. No math talk."
      },
      {
        "name": "Field Geometry + Approach Planning",
        "mins": 35,
        "block": "Challenge",
        "description": "Plot your starting position, the tip-off point, and the goal on the coordinate grid. Draw your approach path and calculate how far your bot needs to travel. Use your Speed allocation to predict how many seconds that distance takes. Write the calculation in your dashboard. Then write one sentence justifying your approach angle -- it must cite a distance or a stat value.",
        "facilitatorDescription": "Teams plot three coordinate points -- starting position, tip-off at (4, 2), and goal at (8, 2) -- then calculate approach distance and use the Speed formula to predict travel time. The sentence justification is a quality gate: vague reasoning gets sent back once, no repeat explanations. Common issue: teams conflate straight-line distance with actual bot path. Don't correct the geometry -- let the testing block surface it. The prediction they write here is the number they'll check against real bot behavior in the next block."
      },
      {
        "name": "Launch Sequence Programming + Testing",
        "mins": 50,
        "block": "Match-Build-Make",
        "description": "Program your launch sequence in MakeCode: the starting routine that controls your bot's initial movement, angle, and timing before it reaches the ball. Run it twice. Record your actual time to reach the ball both times. Compare against your Speed prediction from the geometry block. If they match, your math and your code agree. If they don't, write one sentence in your dashboard identifying where the model broke down.",
        "facilitatorDescription": "Teams program the launch sequence as a routine separate from the stat loadout coded in the morning. Two test runs, both timed, both logged. The comparison to the Speed prediction is the math moment: a mismatch is not a failure, it is data. If a team's times are off, ask one question only: 'What did your formula predict, and what did you observe?' Then let them work. Some teams will have approach angles that add distance not captured in their straight-line calculation -- that is the right kind of confusion to carry into Season 1. Do not resolve it for them."
      },
      {
        "name": "Launch Showcase",
        "mins": 45,
        "block": "Match-Build-Make",
        "description": "Commit to your final sequence and write down your run order -- that is what locks for Season 1. Each team runs their launch sequence once in front of the room. While another team runs, write one specific observation in your dashboard: not 'they were fast' but 'their bot reached the ball in under 3 seconds, which suggests their Speed allocation is above 8.' After all teams have run, you have 10 minutes for one final adjustment. Then sequences lock.",
        "facilitatorDescription": "Enforce the 2-minute commitment window before the showcase starts. Teams that haven't committed will stall the room. During each team's run, prompt observers writing vague notes: 'What number would make that observation useful?' The 10-minute adjustment window after all sequences have run is the highest-value moment in the block -- teams are adjusting based on what they saw, not just what they predicted. Let that happen without interruption. Sequences lock at the end of the 10 minutes with no exceptions. Season 1 begins tomorrow."
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Open Lab: Free Code or Final Verification",
        "mins": 45,
        "block": "Open Lab",
        "description": "Track A (Data Dive): Check each stat value in your dashboard against the formula output. Fix any mismatches before tomorrow's first match. Track B (Bot Lab): Test a loadout you would never use competitively. What happens at Speed = 2 with Power = 15?",
        "facilitatorDescription": "Two tracks available, self-selected. Track A (Data Dive): teams check each stat value in the dashboard against formula output and fix any mismatches before Season 1 begins tomorrow. Track B (Bot Lab): teams test a loadout they would never use competitively (e.g., Speed = 2 with Power = 15) to build intuition for edge behavior. Both are legitimate uses of the time.",
        "script": "https://docs.google.com/document/d/1tfwcohDC_tUJ700pCwIWLIa4j31qdFJoUgcJdhvyd1A/edit?usp=drive_link"
      }
    ],
    "produce": [
      " Interleaved problem set — 12 problems across six formula types; concept-tag column completed",  
      "Season 1 allocation sheet — four stats locked; sum verified at 20",  
      "Coordinate grid — starting position, tip-off (4,2), and goal (8,2) plotted; approach path drawn",  
      "Data dashboard — straight-line distance to ball and travel time prediction calculated",  
      "Written sentence — approach angle justified with distance or stat value",  
      "Launch sequence — programmed in MakeCode; two test run times logged",  
      "Written sentence — where Speed model broke down (if predicted ≠ actual)",  
      "Run order — final launch sequence committed to and locked for Season 1",  
      "Dashboard observation — one data-cited claim about each other team's showcase run"
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
    "bigMathIdea": "Slope-intercept form: P(t) = 100 − rt. The slope r is the rate of change; the x-intercept is when the bot's power reaches zero.",
    "vocabulary": "SLOPE and X-INTERCEPT. The slope r tells you how fast the bot loses power per minute. The x-intercept is where the line crosses zero — the minute your bot dies.",
    "activities": [
      {
        "name": "Trashketball: Warm-Up Round",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "Your team solves one equation from your allocation sheet. Get it right and you earn a shot -- crumple paper into a bin. Make the shot, bonus point. Quick, physical, competitive. Warm-up for match day.",
        "facilitatorDescription": "Teams solve one equation from the allocation sheet. Correct answer earns a shot -- crumpled paper into a bin. Making the shot is a bonus point. Fast, physical, competitive. Primes competitive energy before the first real matches.",
        "script": "https://docs.google.com/document/d/1Bi2GyylzUmAMF3L-9mChiZvNsaOFzTQuidpxHfFU-S4/edit?usp=drive_link"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Endurance Decay Equations in Slope-Intercept Form",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Using your Endurance allocation, write your bot's power decay equation as P(t) = 100 - rt. Calculate r from your allocation. When r is revealed, your facilitator names it explicitly: the slope of a line is its rate of change, and r is how fast your bot loses power per minute. Then find the x-intercept: at what minute does your bot's power reach zero? Record the equation and x-intercept in your match data log before the first match.",
        "facilitatorDescription": "Teams use their Endurance allocation to write the bot's power decay equation as P(t) = 100 - rt and calculate r. When r is revealed, name it explicitly: the slope of a line is its rate of change, and r is how fast the bot loses power per minute. Teams find the x-intercept -- the minute at which bot power reaches zero. Equation and x-intercept go in the match data log before the first match. This is the first formal slope-intercept form in the program.",
        "script": "https://docs.google.com/document/d/1dP6KVB-fWDv-ulZJRhvX-apJJddyM98OY2hAy0Tu7Mk/edit?usp=sharing",
        "worksheet": "https://docs.google.com/document/d/11D4S7jFGcahxFwMQL7qUohiTy0u_fp3ALbOBTy0iHaM/edit?usp=drive_link"
      },
      {
        "name": "Pre-Match Prediction Huddle",
        "mins": 10,
        "block": "",
        "description": "Your team reads your stat allocation out loud -- every formula, every result. Then write one prediction in your match data log: how many goals will your team score in your first match?",
        "facilitatorDescription": "Teams read their stat allocation aloud -- every formula, every result. Each team writes one prediction in the match data log: how many goals will the team score in the first match? The prediction has to exist before the match starts; otherwise there is nothing to test.",
        "script": "https://docs.google.com/document/d/1MPHXBv6GjZAw_n43uA1C1gVnbK3Agf-gZQ9qS5WXZiI/edit?usp=drive_link",
        "worksheet": "https://docs.google.com/document/d/1fJD7t9wsmMYevCajMqQq3RGuLA1IiCm50w4VKBDjLXE/edit?usp=drive_link"
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math.",
        "facilitatorDescription": "Eat and rest. 60-minute protected break. No math talk."
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Season 1 Round-Robin Matches, Day 1",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Three matches, round-robin bracket. Before each match, state your prediction from the data log. After each match, record actual goals and win/loss immediately. Loss-recovery protocol runs for every losing team before the next match -- no skipping it.",
        "facilitatorDescription": "Three matches, round-robin bracket. Before each match, each team states the prediction from their data log aloud. After each match, actual goals and win/loss get recorded immediately. Loss-recovery protocol runs for every losing team before the next match -- three steps, no skipping, no improvising. First real stakes of the program.",
        "script": "https://docs.google.com/document/d/1lroWp1H0Omgc33hkRmZWrzq-DX3_e4t3s-jVibIkh6M/edit?usp=drive_link"
      },
      {
        "name": "Leaderboard Reveal + Open Lab",
        "mins": 35,
        "block": "Match-Build-Make / Open Lab",
        "description": "The physical leaderboard goes up on the wall or Velocity Arena Dashboard Leaderboard. Update the dashboard. Then 20 minutes of open bot time: review your dashboard, strategize, or adjust code.",
        "facilitatorDescription": "Post the physical leaderboard on the wall (or update the Velocity Arena Dashboard Leaderboard). Include the Best Prediction column -- rewards mathematical accuracy, not just winning. Then 20 minutes of open bot time for dashboard review, strategy, or code adjustments. Leaderboard is a permanent artifact from today forward.",
        "script": "https://docs.google.com/document/d/1a5KUPWHp_fCxAtXL7_0lfCgMAREfU6jWhYTGg3pyfQo/edit?tab=t.0",
        "webpage": "https://velocity-arena-gold.vercel.app/resources/leaderboard-chase-builder.html"
      }
    ],
    "produce": [
      "Endurance decay equation — P(t) \= 100 − rt written in slope-intercept form; r calculated",  
      "X-intercept — minute bot power reaches zero, calculated and logged",  
      "Match prediction — projected goals for first match, written in data log",  
      "Match data log — actual goals and win/loss recorded after each of three matches",  
      "Data dashboard — updated with Day 1 match results and leaderboard standing"
    ],
    "endBufferMins": 5,
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
    "bigMathIdea": "Linear equations from two data points. slope = Δy/Δx, y-intercept solves from a known point. Match-day data → scatter plot → equation.",
    "vocabulary": "SCATTER PLOT and LINE OF BEST FIT. A scatter plot shows individual data points. A line of best fit approximates the trend across all of them.",
    "activities": [
      {
        "name": "Math Scavenger Hunt: Leaderboard Edition",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "Problem cards are posted around the room, each showing a real stat value from yesterday's leaderboard ('Team A: Speed = 5, scored 3 goals'). Walk to each card, answer the question on the back (calculate a percentage, write a ratio), and find the matching answer on the next card. It is a self-correcting chain loop.",
        "facilitatorDescription": "Post problem cards around the room, each referencing a real stat from yesterday's leaderboard ('Team A: Speed = 5, scored 3 goals'). Campers walk to each card, answer the question on the back (calculate a percentage, write a ratio), and find the matching answer on the next card. Self-correcting chain loop -- if campers cannot find the next card, their previous answer is wrong.",
        "script": "https://docs.google.com/document/d/1LsBHj1fZelZGJysKmNXpW42IlD4GokWiVK0D9KvpBYQ/edit?usp=drive_link"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Energy Reset",
        "mins": 3,
        "block": "",
        "description": "Stand up. 30 seconds of jumping jacks, 30 seconds of arm circles, 30 seconds of silent stretch. Sit back down.",
        "facilitatorDescription": "Lead the group through 30 seconds of jumping jacks, 30 seconds of arm circles, 30 seconds of silent stretch, then seats. Under 3 minutes, no talking during stretch. Use this to break a cognitive slump, not as a reward."
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Matching Situations, Graphs, and Linear Equations",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Part 1 (20 min): Each team adds their data point to a shared class graph -- Speed on x-axis, Goals Scored on y-axis. Match sets of cards: verbal situations, data tables, and graphed lines. Find which three belong together and explain why. Part 2 (20 min): Use two data points from the scatter plot to write the linear equation -- slope calculated, y-intercept solved. Teams share. Everyone's equation is different. That is the point. SUMMER SPARKS EVALUATION FLAG: Day 8 is a candidate mid-program measurement point for the JHU evaluation team.",
        "facilitatorDescription": "Part 1 (20 min): each team adds a data point to a shared class scatter plot -- Speed on x-axis, Goals Scored on y-axis. Teams match card sets: verbal situations, data tables, and graphed lines. They must match three that belong together and explain why -- the explanation is the work. Do not let teams match by elimination. Part 2 (20 min): teams use two points from the scatter plot to write a linear equation, slope labeled, y-intercept solved. Every team's equation is different. Share aloud. Summer Sparks evaluation flag: Day 8 is a candidate mid-program measurement point for the JHU evaluation team.",
        "script": "https://docs.google.com/document/d/1_NMcPHteA9cyqcFjleHkZkEdTaw29GxEtwPibEvCvU4/edit?usp=drive_link",
        "worksheet": "https://docs.google.com/document/d/10iIpzkn-Hl3IGQTJyZn91YI_wCHu0FbYeoZCqGEVyys/edit?usp=drive_link"
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math.",
        "facilitatorDescription": "Eat and rest. 60-minute protected break. No math talk."
      },
      {
        "name": "Season 1 Match Day 2",
        "mins": 70,
        "block": "Match-Build-Make",
        "description": "Two more matches. Before each match, log your scatter plot equation's prediction in the data log. After each match, record the actual result. Loss-recovery protocol for every losing team. Update the data dashboard. No blanks.",
        "facilitatorDescription": "Two matches. Before each, teams log their scatter-plot-equation-based prediction. After each, actual result is recorded. Loss-recovery for every losing team. Data dashboard updated completely -- no blank cells.",
        "script": "https://docs.google.com/document/d/1cDzAaPXt3_Dw0tMcW1HhyzLZHhy476vrmZ--eLWcdE0/edit?usp=drive_link"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Rivalry Cards",
        "mins": 20,
        "block": "Match-Build-Make",
        "description": "Each team writes one trash-talk card to a specific rival. One rule: the trash talk must cite a specific stat or data point from the dashboard. 'Your Endurance = 3 means your bot slows at minute 4. We will be ready.' No data, no card. Post on the wall.",
        "facilitatorDescription": "Each team writes one trash-talk card directed at a specific rival. The only rule: the trash talk must cite a specific stat or data point from the dashboard ('Your Endurance = 3 means your bot slows at minute 4'). No data, no card. Cards go on the wall as persistent artifacts. Adversarial framing motivates deeper dashboard engagement.",
        "script": "https://docs.google.com/document/d/1nPSD1hV8jj-v_G17Ylau1FFYMEIzU446v00SRzFM4dg/edit?usp=drive_link"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Open Lab",
        "mins": 25,
        "block": "Open Lab",
        "description": "Track A (Data Dive): Review your scatter plot equation against today's match results. Does the line fit the new data points? Note one variable your equation is not capturing. Track B (Bot Lab): Adjust one MakeCode setting and run the bot for 90 seconds. What changes? The 25 minutes is short today.",
        "facilitatorDescription": "Two tracks. Track A (Data Dive): teams review the scatter plot equation against today's match results -- does the line fit the new points, and what variable is the equation missing? Track B (Bot Lab): teams adjust one MakeCode setting and run the bot for 90 seconds, observing what changes. Open Lab is only 25 minutes today -- keep it tight."
      }
    ],
    "produce": [
      "Scavenger Hunt answer sheet — calculations completed at each posted problem card",  
      "Class scatter plot — team's data point added (Speed allocation vs. Goals Scored)",  
      "Card sort — verbal situations, data tables, and graphs matched",  
      "Linear equation — slope and y-intercept calculated from two scatter plot points; written in slope-intercept form",  
      "Match data log — equation-based prediction before each match; actual result after (two matches)",  
      "Rivalry card — one trash-talk claim citing a specific stat or dashboard number, posted on wall",  
      "Dashboard note — one variable the scatter plot equation isn't capturing (Track A)"
    ],
    "endBufferMins": 10,
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
    "bigMathIdea": "Residuals. Predicted − actual. A model's error tells you which variable is missing. The formula you got WRONG is more informative than the one you got right.",
    "vocabulary": "RESIDUAL. The gap between what your equation predicted and what actually happened. Residuals point to variables your model is missing.",
    "activities": [
      {
        "name": "Rivalry Card Response",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "You read the rivalry card your team received. Open your dashboard. Do the cited numbers check out? If the trash talk is factually wrong, you mark it 'check your data' with a sticky note and the correct number. If it is accurate, you make a plan.",
        "facilitatorDescription": "Each team reads the rivalry card they received and opens their dashboard to verify the cited numbers. If the trash talk is factually wrong, the team marks it 'check your data' with a sticky note and the correct number. If accurate, they make a plan. Cross-team data verification without you mediating.",
        "script": "https://docs.google.com/document/d/1eP8t3uCa2TjUVkS6a5wyDKHBfYIUqCkXeM0nGRysT4o/edit?usp=drive_link"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Formula Relay: All Five Types in One Race",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Twenty problem cards, face down, shuffled across six formula types: Speed proportionality, Endurance decay, Turn Ratio / Arc Segments (2 cards), Power² / 2 charge speed, follow through (Power x 200), budget constraint, and Proportional Scaling (2 scoop-scaling cards -- determine whether scaling one or both scoop dimensions is proportional). Flip one, solve it as a team, bring it to the facilitator. Correct work gets a stamp. First team to finish all 20 with fewer than 3 errors wins. After the race, sort your cards into six piles and count errors per type. Your weakest type is today's focus -- use it for today's pre-match prediction. Prediction logged before the match. No exceptions.",
        "facilitatorDescription": "Twenty problem cards face down, shuffled across six formula types: Speed proportionality, Endurance decay, Turn Ratio / Arc Segments (2 cards), Power² / 2 charge speed, follow through (Power x 200), budget constraint, and Proportional Scaling (2 scoop-scaling cards). Teams flip one, solve as a team, bring to you for stamping. Correct work gets a stamp. First team to finish all 20 with fewer than 3 errors wins. Post-race, teams sort into six piles and count errors per type -- their weakest type becomes the focus for today's pre-match prediction. Prediction logged before the match, no exceptions.",
        "script": "https://docs.google.com/document/d/1Ec2G293mPaGajilq-H2jMTSDgBCMNziSXGasL7Bd5wE/edit?usp=drive_link",
        "webpage": "https://velocity-arena-gold.vercel.app/resources/formula-race-cards.html"
      },
      {
        "name": "Break",
        "mins": 10,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "10-minute break. Campers stand, move, get water. Longer break lets energy fully reset before the next heavy block."
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math.",
        "facilitatorDescription": "Eat and rest. 60-minute protected break. No math talk."
      },
      {
        "name": "Season 1 Match Day 3",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Three matches. Before each match: state your prediction from the morning equation. After each match: record actual result. For any match where prediction and actual differ by more than 20%, write one sentence identifying what variable your model missed. Loss-recovery protocol runs for every losing team between matches. Dashboard complete before end of day.",
        "facilitatorDescription": "Three matches. Before each match, teams state their prediction from the morning equation. After each, actual is recorded. For any match where prediction vs. actual differs by more than 20%, the team writes one sentence identifying the missing variable in their model. Loss-recovery runs for every losing team between matches. Dashboard complete before end of day. The 20% rule is the iteration engine for Season 1.",
        "script": "https://docs.google.com/document/d/1D1CHjrAQSb-416lwkp8oU7HxM79GZYlLDU7Fih8qmc4/edit?usp=drive_link"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Open Lab: Post-Match Debrief and Free Code",
        "mins": 40,
        "block": "Open Lab",
        "description": "Track A (Data Dive): Look at your three match results. Does any pattern in the data suggest a loadout adjustment? Write one hypothesis entry in the dashboard: 'If we change [stat] from [X] to [Y], we expect [specific outcome] because [cited data].' Track B (Bot Lab): Run the bot and experiment with whatever you want. If you find something useful, it goes in the dashboard before you leave.",
        "facilitatorDescription": "Two tracks. Track A (Data Dive): teams look at their three match results, spot patterns, and write one hypothesis entry in the dashboard -- 'If we change [stat] from [X] to [Y], we expect [specific outcome] because [cited data].' Track B (Bot Lab): teams experiment freely with the bot. Any useful finding goes in the dashboard before they leave.",
        "script": "https://docs.google.com/document/d/15gZrKNFwogagCQQUGQOWAwVur95G9jX9lQ1tpNBYhuc/edit?usp=drive_link"
      }
    ],
    "produce": [
      "Sticky note — rival's card annotated with accuracy check; corrected calculation written if wrong",  
      "Formula Relay written work — 20 problem cards solved and stamped; error count per formula type",  
      "Pre-match prediction — calculation from weakest formula type logged before match",  
      "Match data log — prediction and actual for each of three matches",  
      "Written sentence — variable the model missed (for any match \>20% off prediction)",  
      "Data dashboard — complete, no blanks",  
      "Dashboard hypothesis entry — stat change, expected outcome, and data justification (Track A)"
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
    "bigMathIdea": "Distance formula: d = √((x₂ − x₁)² + (y₂ − y₁)²). Applied to tip-off, ball position, and goal to evaluate charge efficiency.",
    "activities": [
      {
        "name": "Best Match Gallery Walk",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "Each team posts the stat configuration and result of their single best Season 1 match on an index card. You walk the room and read every card. Dot-sticker vote: which team had the most mathematically interesting finding, not who won the most, but who learned the most from one match result.",
        "facilitatorDescription": "Each team posts the stat configuration and result of their single best Season 1 match on an index card. Campers walk the room and read every card. Dot-sticker vote: which team had the most mathematically interesting finding -- not who won the most, but who learned the most from one match result. Emphasize that the vote is about learning, not record.",
        "script": "https://docs.google.com/document/d/1xMUVjmU2S0wIzAEcFF8N4Gx7ol96ItPGM5AMiu8rI-g/edit?usp=drive_link"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Distance Formula: How Far Did the Ball Travel",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Week 2 continuation of the coordinate geometry introduced on Day 3. On Day 3 you walked the grid physically and computed straight-line distance with your bodies. Today the formula puts numbers to that same motion using real Season 1 match data. Using three coordinate pairs from your team's data log, calculate d = sqrt((x2-x1)^2 + (y2-y1)^2) for each. Record every calculation. Then answer: does the computed distance match what was observed during the match? If not, name the source of the discrepancy -- measurement error, bot drift, or formula misapplication. This session closes the coordinate geometry arc started on Day 3.",
        "facilitatorDescription": "Reconnect to Day 3 explicitly: campers used this formula on the floor grid, walking to coordinates and estimating diagonals. Today applies it to real Season 1 match data. Teams use three coordinate pairs from their data log and calculate d = sqrt((x2-x1)^2 + (y2-y1)^2) for each. Every calculation recorded. Then teams answer: does the computed distance match what was observed during the match? If not, name the discrepancy source -- measurement error, bot drift, or formula misapplication. Closes the coordinate geometry arc started on Day 3. Do not let teams treat this as a new formula.",
        "script": "https://docs.google.com/document/d/1lRKCnAD5SpXp7_wdQIluC7-JFSzYTQHtmj1mScfo_5M/edit?usp=sharing",
        "worksheet": "https://docs.google.com/document/d/1rlvuktLelGSmNZhlcX6xbDgxutA3qaG4DMdsaJxRdmw/edit?usp=sharing"
      },
      {
        "name": "Break",
        "mins": 10,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "10-minute break. Campers stand, move, get water. Longer break lets energy fully reset before the next heavy block."
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math.",
        "facilitatorDescription": "Eat and rest. 60-minute protected break. No math talk."
      },
      {
        "name": "Cold Recall Check",
        "mins": 10,
        "block": "Challenge Block",
        "description": "Five questions, 10 minutes, individual work, non-bot context, no grade. Write on paper without notes or devices. (1) Percent change in motor power between Speed = 6 and Speed = 9. (2) Slope-intercept form from slope 2 through (1,3). (3) Distance from (2,5) to (7,17). (4) When does P(t) = 100 - 12t reach zero? (5) A bot travels 150 cm in 5 seconds -- what is its speed in cm/sec, and how far at that rate for 8 seconds?",
        "facilitatorDescription": "Five questions, 10 minutes, individual work, no grade, no notes or devices. Non-bot context. Questions: (1) percent change in motor power between Speed = 6 and Speed = 9; (2) slope-intercept form from slope 2 through (1,3); (3) distance from (2,5) to (7,17); (4) when does P(t) = 100 - 12t reach zero; (5) a bot travels 150 cm in 5 seconds -- speed in cm/sec and distance at that rate for 8 seconds. Diagnostic, not assessment.",
        "script": "https://docs.google.com/document/d/1024tZLvwZFUNsyWOCjqZPvSyYATN3y7V_JNpg0d78MU/edit?usp=drive_link",
        "worksheet": "https://docs.google.com/document/d/10V50AccSWPvzq6iGe3ICkOFLgG9zZbVCrkbzAx5E_TU/edit?usp=drive_link"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Season 1 Final Round",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Final round-robin matches. Loss-recovery for every losing team. After all matches: complete data dashboard -- goals per minute, possession time, win/loss by stat matchup. No blanks. Leaderboard final Season 1 update.",
        "facilitatorDescription": "Final Season 1 round-robin matches. Loss-recovery for every losing team, same three-step script. After all matches: complete data dashboard -- goals per minute, possession time, win/loss by stat matchup. No blank cells. Leaderboard gets its final Season 1 update. This is the close of Season 1 and the setup for the Commissioner's Week.",
        "script": "https://docs.google.com/document/d/1nDIFSSs9hH2m1YF55zIwJxYLpvB6c4gepoi7yyzRj_c/edit?usp=drive_link"
      },
      {
        "name": "Open Lab: Season 2 Planning",
        "mins": 30,
        "block": "Open Lab",
        "description": "Track A (Data Dive): Look at your Season 1 data. If you could change one stat allocation for Season 2, what would it be and why? Write it as a hypothesis with a data justification. Track B (Bot Lab): Test the loadout change you are considering before committing. Run it live and observe. Then write the hypothesis entry. Physical testing before committing is legitimate analytical work, not avoidance.",
        "facilitatorDescription": "Two tracks. Track A (Data Dive): teams look at Season 1 data and name one stat allocation change for Season 2 as a hypothesis with data justification. Track B (Bot Lab): teams test the loadout change physically before committing, then write the hypothesis entry. Physical testing before committing is legitimate analytical work, not avoidance -- name that for Track B teams.",
        "script": "https://docs.google.com/document/d/1GkIgRVtmJvsugSYWpLDG2Xzz8zalIqUKgm22L55SkRs/edit?usp=drive_link"
      }
    ],
    "produce": [
      "Index card — best Season 1 match: stat config and result, posted for gallery walk",  
      "Dot-sticker vote — placed on one other team's card",  
      "Distance formula worksheet — three distances calculated on 8×4 field; summary table completed",  
      "Written reflections — charge efficiency, charges-per-goal estimate, formula limits, one stat to adjust with tradeoff",  
      "Cold Recall Check — five individual math problems on paper (no grade)",  
      "Data dashboard — final Season 1 entries: goals per minute, possession time, win/loss by stat matchup",  
      "Season 2 hypothesis entry — one stat change with data justification"
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
    "bigMathIdea": "Proportional vs non-proportional scaling at 50%. Speed scales linearly (+50% stat → +50% output); Power scales quadratically (+50% stat → +125% charge speed).",
    "activities": [
      {
        "name": "Human Number Line: Stat Rankings",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "A tape line runs across the room labeled 'least important' to 'most important' for winning Season 1 matches. You stand at the position that matches your belief about which stat matters most. No data allowed yet, pure instinct. After everyone has placed themselves: look at the spread. Then the facilitator asks: 'Now open your dashboard. Does the data support where you're standing?'",
        "facilitatorDescription": "Lay a tape line across the room, labeled 'least important' to 'most important' for winning Season 1 matches. Campers stand at the position matching their belief about which stat matters most. No data yet -- pure instinct. Then ask: 'Now open your dashboard. Does the data support where you're standing?' Let the spread reveal disagreement, then require dashboard evidence.",
        "script": "https://docs.google.com/document/d/1d7vhhtcpL9ZhEbacI4QChLFig33nDHQgb2pGtZjzpg8/edit?usp=drive_link"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Proportional Scaling: Scaling Your Stats + Commissioner Proposal Prep",
        "mins": 45,
        "block": "Challenge Block",
        "description": "Phase 1 (20 min): Calculate what happens to bot behavior when a stat is scaled by 50%. Speed is proportional -- 50% more Speed gives 50% more motor power. Power is not -- charge speed = Power² / 2, so 50% more Power gives more than 50% more charge speed (quadratic). Phase 2 (25 min): Draft a rule change proposal using those scaling calculations as data evidence. Back it with at least two numbers from your dashboard, and make sure the change addresses how the team currently in last place is affected.",
        "facilitatorDescription": "Phase 1 (20 min): teams calculate what happens when a stat is scaled by 50%. Speed is proportional (50% more Speed gives 50% more motor power). Power is not (charge speed = Power² / 2, so 50% more Power gives more than 50% more charge speed -- quadratic). Phase 2 (25 min): teams draft a rule change proposal using those scaling calculations as evidence, backed by at least two dashboard numbers and addressing how the current last-place team is affected. This sets up tomorrow's formal Commissioner's Meeting.",
        "script": "https://docs.google.com/document/d/1s9wUXxuyLnXP-TNXoZV22tcXRDgv5g6wBUYuzYEQjk8/edit?usp=drive_link",
        "worksheet": "https://docs.google.com/document/d/1_VhsD2hZb2VBH7-lwdKmMHGJAq5x8VJqHUwdI6GsdZg/edit?usp=drive_link"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math.",
        "facilitatorDescription": "Eat and rest. 60-minute protected break. No math talk."
      },
      {
        "name": "Underdog Mechanic Announced + Season 2 Stat Reallocation",
        "mins": 30,
        "block": "Match-Build-Make",
        "description": "The facilitator announces publicly: the team in last place gets one free stat reallocation before Season 2, no Commissioner approval required. If that is your team, you rework your allocation sheet now. Every team begins thinking about Season 2 loadouts under the rules that will pass tomorrow.",
        "facilitatorDescription": "Announce publicly: the current last-place team gets one free stat reallocation before Season 2, no Commissioner approval required. Public announcement is essential -- it creates the comeback narrative and keeps the last-place team mathematically engaged. The underdog team reworks their allocation sheet now. All teams begin planning Season 2 loadouts under the rules that will pass tomorrow.",
        "script": "https://docs.google.com/document/d/1uub9UpMbQF4he0B55d5SCFc8Jg7RbYljg-A5i_nHo9E/edit?usp=drive_link",
        "worksheet": "https://docs.google.com/document/d/1uUZX29Zj8tEQ64mf7fKm0PYlzEpkn-2LqDcZBG8Vg4k/edit?usp=sharing"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Practice Matches: Test New Loadout Hypotheses",
        "mins": 60,
        "block": "Match-Build-Make",
        "description": "No formal scoring. You program and test adjusted loadout ideas and record observations as 'hypothesis' entries, clearly labeled so you can compare to Season 2 actuals.",
        "facilitatorDescription": "No formal scoring. Teams program and test adjusted loadout ideas and record observations as 'hypothesis' entries, clearly labeled so they can later compare to Season 2 actuals. Low-stakes iteration before the Commissioner's Meeting locks in new rules.",
        "script": "https://docs.google.com/document/d/1QK0sXYtio3-xe9AvlD6CAjnb8aiU7-ySLg4f0y5ZYp8/edit?usp=drive_link",
        "worksheet": "https://docs.google.com/document/d/1pItb3fZdZ8cUOn0rbo2xBQuszboddc8JLooLeVEJMgU/edit?usp=sharing"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Open Lab: Commissioner Proposal Refinement",
        "mins": 40,
        "block": "Open Lab",
        "description": "Verify every number in your draft proposal against the actual dashboard. Are your two cited numbers accurate? Does your rule change genuinely help the last-place team?",
        "facilitatorDescription": "Teams verify every number in the draft proposal against the actual dashboard. Two check questions: are the cited numbers accurate, and does the rule change genuinely help the last-place team (or does it just help the team proposing it)? Revision before tomorrow's vote.",
        "script": "https://docs.google.com/document/d/1lfFv6i-y2nMuwujLECd2zdS1AszyAJWGnU2m4p2deOc/edit?usp=drive_link"
      }
    ],
    "produce": [
      "Proportional scaling calculations — 50% stat increase applied to Speed (linear) and Power (quadratic); results compared",  
      "Commissioner proposal draft — one rule change; two dashboard numbers cited; last-place team addressed ", 
      "Season 2 allocation sheet — reworked with 2 extra points (last-place team); preliminary loadout notes (all teams)",  
      "Dashboard hypothesis entries — adjusted loadout observations labeled \"hypothesis\"",
      "Commissioner proposal — numbers verified against dashboard; corrections noted"
    ],
    "endBufferMins": 5,
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
    "bigMathIdea": "Data-backed argument. Every claim in a proposal must cite a specific number from the dashboard. Evidence quality separates analysis from opinion.",
    "vocabulary": "CAUSAL vs CORRELATIONAL. Causal: X produces Y, controlling for other variables. Correlational: X and Y happen together, but another factor might cause both.",
    "activities": [
      {
        "name": "Lobby the Commissioners",
        "mins": 25,
        "block": "Ice Breaker",
        "description": "You spend 10 minutes moving around the room in informal conversation, not a presentation, just talk. 'Here is our proposal. Here is the number behind it. What do you think?' After, 15 minutes back at your seat to finalize based on what you heard.",
        "facilitatorDescription": "Teams spend 10 minutes circulating in informal conversation -- not a presentation, just talk. 'Here is our proposal. Here is the number behind it. What do you think?' Then 15 minutes back at seats to finalize based on feedback. Builds peer buy-in before the formal vote.",
        "script": "https://docs.google.com/document/d/1l06bjK0a6reS5dN-4UL5IPTkn3-ICBddpaWUmpTLjPw/edit?usp=drive_link"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Final Proposal Verification",
        "mins": 35,
        "block": "Challenge Block",
        "description": "Check every number in your proposal against the actual dashboard. Is the data accurate? Does the rule change genuinely help the last-place team, or does it just help your team? Revise if needed. Your facilitator also checks Criterion 6: at least one of the following concept types must be named in the proposal -- proportional scaling, unit rate, ratio, slope as rate of change, or linear decay. Your facilitator asks one camper per team: 'How did you calculate this number? What kind of math is that?' before the meeting starts.",
        "facilitatorDescription": "Teams check every number in their proposal against the actual dashboard. Two questions: is the data accurate, and does the rule change genuinely help the last-place team or only the proposing team? Check Criterion 6: at least one concept type -- proportional scaling, unit rate, ratio, slope as rate of change, or linear decay -- must be explicitly named in the proposal. Ask one camper per team before the meeting: 'How did you calculate this number? What kind of math is that?'",
        "script": "https://docs.google.com/document/d/1rZES5FM1sbJcv16FcgLuV0mhrjpyPj2OaPZU_F1rJng/edit?usp=drive_link",
        "worksheet": "https://drive.google.com/file/d/1Gk98vJySwPowrqkMj1LTYlvm8b5U3g5o/view?usp=drive_link"
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math.",
        "facilitatorDescription": "Eat and rest. 60-minute protected break. No math talk."
      },
      {
        "name": "Commissioner's Meeting: Formal Presentations + Vote",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Each team has 3 minutes. Cite two data points, explain your reasoning, describe how the change affects the last-place team. The league votes. Proposals that pass become rules -- written on the wall in permanent marker. Then adjust your Season 2 allocation under the new constraints before you leave.",
        "facilitatorDescription": "Each team has 3 minutes to cite two data points, explain reasoning, and describe how the change affects the last-place team. The league votes. Passing proposals become rules -- write them on the wall in permanent marker. After the meeting, teams adjust their Season 2 allocation under the new constraints before leaving. After every presentation, ask the room: 'Does this proposal use the data correctly? Can anyone verify the math?' -- including for strong presentations. Highest-agency moment of the program.",
        "script": "https://docs.google.com/document/d/11b4vHFTJAh9U815GM9ss0bsvUEQsRfxzD0WYuLgc_58/edit?usp=drive_link",
        "worksheet": "https://docs.google.com/document/d/16xwHol7asWVYVx_E85lYN2gLzvIM7xBOM6q1QxeA1eE/edit?usp=sharing"
      },
      {
        "name": "Break",
        "mins": 10,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "10-minute break. Campers stand, move, get water. Longer break lets energy fully reset before the next heavy block."
      },
      {
        "name": "Open Lab: Season 2 Allocation Verification",
        "mins": 35,
        "block": "Open Lab",
        "description": "Verify your Season 2 allocation calculations. Program the new loadout into MakeCode. Run one test drive to confirm the code matches the math.",
        "facilitatorDescription": "Teams verify Season 2 allocation calculations, program the new loadout into MakeCode, and run one test drive to confirm code matches math. Last chance to catch a mis-coded stat before Season 2 matches begin tomorrow.",
        "script": "https://docs.google.com/document/d/1rQO_FefyE0XsqYJGit2EcfBexmNWm_vQEcS0WyKXOuA/edit?usp=drive_link"
      }
    ],
    "produce": [
      "Commissioner proposal — finalized after lobbying; all numbers dashboard-verified; one concept type named ", 
      "3-minute presentation — rule proposal delivered with two data points cited",  
      "Season 2 allocation sheet — revised under new league rules; complete before leaving",  
      "MakeCode code — new Season 2 loadout programmed",  
      "Test drive result — one run recorded to confirm code matches math"
    ],
    "endBufferMins": 20,
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
    "bigMathIdea": "Building your own linear equation from match data. Two data points → slope → y-intercept → testable prediction.",
    "activities": [
      {
        "name": "The Prediction Market",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "Each team writes their Season 2 win total prediction on an index card: 'We will win [X] of [Y] matches.' Post it publicly. Everyone can see every team's prediction. You will revisit these on Friday.",
        "facilitatorDescription": "Each team writes a Season 2 win total prediction on an index card: 'We will win [X] of [Y] matches.' Cards post publicly; every team's prediction is visible. Revisit on Day 15. Creates public stakes for the whole week and makes prediction accuracy socially real.",
        "script": "https://docs.google.com/document/d/1uWzF6XEpkiSSJwPvIaGsZD4AqImzyNvTC5vtt3aAF6I/edit?usp=drive_link"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Energy Reset",
        "mins": 3,
        "block": "",
        "description": "Stand up. 30 seconds of jumping jacks, 30 seconds of arm circles, 30 seconds of silent stretch. Sit back down.",
        "facilitatorDescription": "Lead the group through 30 seconds of jumping jacks, 30 seconds of arm circles, 30 seconds of silent stretch, then seats. Under 3 minutes, no talking during stretch. Use this to break a cognitive slump, not as a reward."
      },
      {
        "name": "Building and Solving Linear Equations",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Part 1: Using your Season 1 + early Season 2 data, write the equation that predicts your win probability. Choose two past data points. Calculate the rate of change (slope). Calculate y-intercept. Write the equation in slope-intercept form. This is camper-generated, not formula-imposed. Part 2: Test your equation against two past matches. Calculate the residual (predicted minus actual) for each. Third question: calculate wins per Speed point (Season 1 total wins / Speed stat) as a unit rate. Report your two residuals and unit rate to the class. No two teams have the same equation. That is the point.",
        "facilitatorDescription": "Part 1: using Season 1 and early Season 2 data, teams write the equation that predicts their win probability. Two past data points, slope calculated, y-intercept solved, equation in slope-intercept form. Camper-generated, not formula-imposed. Part 2: teams test the equation against two past matches and calculate residuals (predicted minus actual). Teams also calculate wins per Speed point (Season 1 wins / Speed stat) as a unit rate. Each team reports two residuals and the unit rate to the class. Every team's equation is different -- that is the point. Before releasing to afternoon: each team's equation must be on the whiteboard with slope, y-intercept, and source data points labeled.",
        "script": "https://docs.google.com/document/d/1F-g0L6Z_d2klUamK6SFWQSTv7J6Zg4SPUqTAzzHDibc/edit?usp=drive_link",
        "worksheet": "https://docs.google.com/document/d/1nix-JvEGlUqGEOWzDaELTovsFCR5zP5P92qYIHK2NFU/edit?usp=drive_link"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math.",
        "facilitatorDescription": "Eat and rest. 60-minute protected break. No math talk."
      },
      {
        "name": "Season 2 Match Day 1",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "First matches under the new Commissioner-approved rules. Before your first match, log your equation-based prediction. After each match, record the actual. Loss-recovery for every losing team. Compare today's prediction residuals to your Season 1 residuals. Is your model improving?",
        "facilitatorDescription": "First matches under the new Commissioner-approved rules. Before each match, teams log their equation-based prediction. After each match, actual result is recorded. Loss-recovery runs for every losing team. Teams compare today's residuals to Season 1 residuals -- is the model improving? The rule change means fresh start energy for every team.",
        "script": "https://docs.google.com/document/d/18HoVS51dmWMg0yHU5rjWg6EY7Uz4MAjbJ-cPaOmZavU/edit?usp=drive_link",
        "worksheet": "https://docs.google.com/document/d/1UM4pLp4yKSaOSmiVgriOliPi5zmOb5t-_cnlgv81Qik/edit?usp=sharing"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Open Lab: Residual Analysis or Bot Calibration",
        "mins": 35,
        "block": "Open Lab",
        "description": "Track A (Data Dive): Look at your two residuals and your wins-per-Speed-point unit rate from the MAP FAL. Look at your Season 2 match prediction and actual. Write one sentence: is your model's error getting smaller or larger? What does that tell you about what the model is missing? Track B (Bot Lab): Run one calibration test under the new Commissioner rules. Does the rule change affect how your bot performs in ways your formula did not predict?",
        "facilitatorDescription": "Two tracks. Track A (Data Dive): teams compare their two residuals and wins-per-Speed-point unit rate to Season 2 match prediction and actual. One sentence: is model error getting smaller or larger, and what does that indicate about what the model is missing? Track B (Bot Lab): teams run one calibration test under the new Commissioner rules and observe whether the rule change affects bot performance in ways the formula did not predict.",
        "script": "https://docs.google.com/document/d/1U0cbB9ixVtfxtBcDY4yKjn54nQCvgR497j4teWAtD2A/edit?usp=drive_link"
      }
    ],
    "produce": [
      "Prediction Market index card — \"We will win [X] of [Y] matches,\" posted publicly",
      "Win-probability equation — slope and y-intercept from two past data points; written in slope-intercept form ", 
      "Two residuals — predicted minus actual for two past matches",  
      "Unit rate — Season 1 wins ÷ Speed stat calculated",  
      "Match data log — prediction and ball mode before each match; actual result and residual after",  
      "Dashboard entry — Season 2 residuals compared to Season 1",  
      "Skills Card — prediction-actual sentence logged; Skill Badge earned"
    ],
    "endBufferMins": 5,
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
    "bigMathIdea": "Percent change = (new − old) / old × 100. Percent change is not the same as percentage-point difference. Percent change of a stat does not always produce proportional percent change of wins.",
    "vocabulary": "PERCENT CHANGE. A proportional comparison relative to the original value. Going from 4 to 6 is a +50% change; going from 6 to 4 is a −33% change.",
    "activities": [
      {
        "name": "Stat Auction + Prediction Check",
        "mins": 30,
        "block": "Ice Breaker",
        "description": "Twenty-five minutes of competitive stat bidding, then a 5-minute prediction check. Each team starts with 3 math tokens. Earn more by answering formula questions correctly. Then bid on stat improvements -- but you must calculate the new formula output out loud to win. Wrong math means you lose your tokens. After the auction, check your Season 2 prediction on the wall. Update it if needed, with a data justification.",
        "facilitatorDescription": "Twenty-five minutes of competitive stat bidding, then a 5-minute prediction check. Each team starts with 3 math tokens; they earn more by answering formula questions correctly. Teams bid on stat improvements but must calculate the new formula output out loud to win. Wrong math costs tokens. After the auction, teams revisit their Season 2 prediction on the wall and update it with data justification if needed.",
        "script": "https://docs.google.com/document/d/1I0rnGaWYvPDzWDUkHi0JcHJqQRY5i3pHKwyRMeUvF_U/edit?usp=drive_link"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Percent Change: Season 1 to Season 2 Configurations",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Using your Season 1 and Season 2 allocations, calculate the percent change for each stat: (new - old) / old x 100. Compare results as a room. Then answer the harder question: is percent change proportional? If your Speed went up 50%, will your wins go up 50%? The answer depends on which stat changed and how the bot formula works. Match Day 2 this afternoon is the test.",
        "facilitatorDescription": "Teams calculate percent change for each stat between Season 1 and Season 2 allocations: (new - old) / old x 100. Compare across the room. Then the harder question: is percent change proportional? If Speed went up 50%, will wins go up 50%? Answer depends on which stat changed and how the formula works. Afternoon's Match Day 2 tests the hypothesis. Watch for the percent-change-vs-percentage-point-difference misconception -- put both numbers side by side on the board using real team data if it surfaces.",
        "script": "https://docs.google.com/document/d/1PlloMgcESCqaVKsR6vPlfiRaLW5V3OLrlG-r6P9k_-g/edit?usp=drive_link"
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math.",
        "facilitatorDescription": "Eat and rest. 60-minute protected break. No math talk."
      },
      {
        "name": "Season 2 Match Day 2",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Three matches. Before each match, log your equation-based prediction. After each match, record the actual. For any match where prediction and actual differ by more than 20%, write one sentence identifying the missing variable. Loss-recovery for every losing team. Dashboard fully updated before end of session.",
        "facilitatorDescription": "Three matches. Pre-match equation-based prediction. Post-match actual recorded. 20% rule: teams write one sentence identifying the missing variable when prediction and actual differ by more than 20%. Loss-recovery for every losing team. Dashboard fully updated before end of session.",
        "script": "https://docs.google.com/document/d/1DQPG1E04HP4KRVyCSgc4COQUwtcYzSF2MvvQz3GXAGM/edit?usp=sharing",
        "worksheet": "https://docs.google.com/document/d/1BDDPR3_KtBbqVmK3XSt3HgHBHNcMujno8whS0izoUoo/edit?usp=sharing"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Open Lab: Equation Revision or Loadout Experiments",
        "mins": 40,
        "block": "Open Lab",
        "description": "Track A: Look at your residuals from the last two match days. If your model's error has increased, identify one variable to add. Track B: Test the new stat points from the Stat Auction under match conditions. Do they perform as the formula predicted?",
        "facilitatorDescription": "Two tracks. Track A (Data Dive): teams look at residuals from the last two match days; if model error has increased, identify one variable to add. Track B (Bot Lab): teams test new stat points from the Stat Auction under match conditions and check whether performance matches formula predictions.",
        "script": "https://docs.google.com/document/d/1Ttdu2hNLgwJswRGZozjztwdZhaKL-zq2AJQyROfKOSg/edit?usp=drive_link"
      }
    ],
    "produce": [
      "Prediction Market index card — justification added if win total adjusted; one dashboard number cited",  
      "Percent change worksheet — (new − old) / old × 100 calculated for all four stats",  
      "Written sentence — which ball mode team expects to perform best in, citing stat percent change",  
      "Match data log — prediction before each of three matches; actual result after ", 
      "Written sentence — missing variable identified for any match \>20% off ", 
      "Data dashboard — fully updated",  
      "Dashboard hypothesis — revised equation with new variable (Track A); or Skills Card prediction-actual logged (Track B)"
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
    "theme": "Creative Expression: Bot Identity + Scouting Begins + Season 3 Begins",
    "bigMathIdea": "Scouting report math. Express stats as percentages of the 20-point budget. Write Endurance decay in slope-intercept form using allocation data.",
    "activities": [
      {
        "name": "Bot Lore Gallery Walk",
        "mins": 25,
        "block": "Ice Breaker",
        "description": "You walk the room and re-read every bot origin story from Day 2. Then you ask: has your bot's story changed? What happened in Seasons 1 and 2 that belongs in its lore now? You write one new sentence to add, something that only makes sense because you played the matches.",
        "facilitatorDescription": "Campers walk the room and re-read every Day 2 bot origin story. Each team asks: has our bot's story changed? What from Seasons 1 and 2 belongs in its lore now? Teams write one new sentence to add to their bot's lore -- something that only makes sense because they played the matches. Creative layer on top of the stat system, not a replacement for it.",
        "script": "https://docs.google.com/document/d/1a7VLmihhAGvqVlVV43-5ZNT9fgtdltZcUdYa1JFT18g/edit?usp=drive_link",
        "worksheet": "https://docs.google.com/document/d/1YiobKPGJCQGe9n7Usf7SN1dZnsYxBsj2vaOnsAMhdl4/edit?usp=sharing"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Scouting Report: Mathematical Foundation",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Begin your formal scouting report on your Championship opponent. Section 1: express their stats as percentages of the 20-point budget. Section 2: write their Endurance decay equation in slope-intercept form using their data. Show all work.",
        "facilitatorDescription": "Teams begin the formal scouting report on their Championship opponent. Section 1: express opponent's stats as percentages of the 20-point budget. Section 2: write the opponent's Endurance decay equation in slope-intercept form using their data. All work shown. This is the start of a multi-day scouting arc.",
        "script": "https://docs.google.com/document/d/1B5urlu-s3uvpzyG-cVRgWwGHwyX_Dqx0aHzqx3NulG0/edit?usp=drive_link",
        "template": "https://docs.google.com/document/d/1LELkBNge6avite1E60qRi_rU829oVV_M7FIyFNHyayg/edit?usp=drive_link"
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math.",
        "facilitatorDescription": "Eat and rest. 60-minute protected break. No math talk."
      },
      {
        "name": "Match Day 3",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Season 2 match day. Three rounds of round-robin play with the equation prediction ritual before every match and loss-recovery protocol for every losing team. Prediction Market cards resolved at close: facilitator reads each team's final Season 2 record against their public prediction card. Season 2 data retrospective follows — teams compare Season 2 residuals against Season 1 and identify which stat changes produced proportional results.",
        "facilitatorDescription": "Three round-robin matches with the equation-prediction ritual before each and loss-recovery after each loss. Resolve Prediction Market cards at close: read each team's final Season 2 record against the public prediction card from Day 13. Season 2 data retrospective follows -- teams compare Season 2 residuals to Season 1 and identify which stat changes produced proportional results.",
        "script": "https://docs.google.com/document/d/1VRuoTtA4ZSBNUsULeeu-7rSjM_GTGBJSNVQUZu5C-Wc/edit?usp=sharing",
        "worksheet": "https://docs.google.com/document/d/1XH5m0SvKEsFTnwZm2Akp9gWldMiqI_BXLBYlGYNgvpQ/edit?usp=sharing"
      },
      {
        "name": "Break",
        "mins": 10,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "10-minute break. Campers stand, move, get water. Longer break lets energy fully reset before the next heavy block."
      },
      {
        "name": "Open Lab: Scouting Continuation or Identity Refinement",
        "mins": 40,
        "block": "Open Lab",
        "description": "Track A: Continue scouting report sections 1 and 2, or start section 3 (opponent Speed vs. Goals trend line). Track B: Test the scoop redesign or logo placement. Does the new scoop change your kick distance? If yes, update the dashboard. End with a concept retrieval line: write the name of the math concept you used in your scouting work today (unit rate, ratio, proportional scaling, slope as rate of change, linear decay, or other).",
        "facilitatorDescription": "Two tracks. Track A (Data Dive): teams continue scouting report sections 1 and 2, or start section 3 (opponent Speed vs. Goals trend line). Track B (Bot Lab): teams test scoop redesign or logo placement and check for kick distance change. End both tracks with a concept retrieval line: teams write the name of the math concept used in scouting work today (unit rate, ratio, proportional scaling, slope as rate of change, linear decay, or other).",
        "script": "https://docs.google.com/document/d/1j_P-vq1s85VIWRo6doy1GCI_v1yYw0vUu_vgG1CgGoM/edit?usp=sharing"
      }
    ],
    "produce": [
      "Bot lore update — one new sentence added to origin story based on Season 1–2 results",  
      "Scouting Report Section 1 — opponent's four stats as percentages of 20-point budget; work shown",  
      "Scouting Report Section 2 — opponent's Endurance decay equation in slope-intercept form; work shown",  
      "One-line scouting note — strongest/weakest ball mode identified with cited number",  
      "Match data log — prediction and ball mode before each of three matches; actual result after",  
      "Prediction Market resolution — final Season 2 record compared to public prediction card",  
      "Season 2 retrospective — Season 2 vs. Season 1 residuals compared; proportional stat changes identified",  
      "Scouting Report Section 3 (begun) — opponent Speed vs. Goals trend line (Track A); or Skills Card kick-distance data (Track B)"
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
    "bigMathIdea": "Trend line equation from opponent data. Use two match data points to predict a specific Championship outcome. Inequality constraint analysis produces valid counter-loadouts.",
    "vocabulary": "INEQUALITY. A statement that one quantity is less than, greater than, or not equal to another. Used to describe loadout constraints like 'Speed > 5' or 'Endurance ≤ 4.'",
    "activities": [
      {
        "name": "Memory Probe: Scout Your Opponent Cold",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "No posted reports. No dashboards. No notes. You have 5 minutes to write from memory: your Championship opponent's top two stat allocations, their Endurance decay rate (the r value), their Season 1 average goals per match, and their Endurance decay output at t = 3. Then reports go up -- verify every number and score yourself.",
        "facilitatorDescription": "No posted reports, no dashboards, no notes. Campers have 5 minutes to write from memory: their Championship opponent's top two stat allocations, Endurance decay rate (r value), Season 1 average goals per match, and Endurance decay output at t = 3. After 5 minutes, reports go up and campers verify every number and self-score. Retrieval practice before the final scouting push.",
        "script": "https://docs.google.com/document/d/13EAWLvzOpJzSWD48ie6-Ti6RsVMJySXtF03AYYh9Nz0/edit?usp=drive_link"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Scouting Report Completion: Sections 3 and 4",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Section 3: Use two of your opponent's data points to write their Speed vs. Goals trend line equation and make a prediction for Championship. Section 4: Write one strategy recommendation backed by an inequality constraint analysis -- show three loadouts that counter your opponent.",
        "facilitatorDescription": "Section 3: teams use two of the opponent's data points to write the Speed vs. Goals trend line equation and make a Championship prediction. Section 4: teams write one strategy recommendation backed by inequality constraint analysis, showing three counter-loadouts. Frame verbal check-ins as expert preparation ('walk me through one calculation as if I am a visitor'), not evaluation.",
        "script": "https://docs.google.com/document/d/1HnlCodPGtO0lxBhnOEEgnekpeWE2qCJEOyWTV5TmtTc/edit?usp=drive_link",
        "template": "https://docs.google.com/document/d/1LELkBNge6avite1E60qRi_rU829oVV_M7FIyFNHyayg/edit?usp=drive_link"
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math.",
        "facilitatorDescription": "Eat and rest. 60-minute protected break. No math talk."
      },
      {
        "name": "Final Commissioner's Meeting, Part 1",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Teams present final Championship rule proposals. Same format: 3 minutes, two data points, address the last-place team. League votes. New rules on the wall. Adjust your loadout for Championship -- fix any math errors before leaving.",
        "facilitatorDescription": "Teams present final Championship rule proposals. Same format as Day 12: 3 minutes, two data points cited, address the last-place team. League votes. Passing rules go on the wall. After voting, teams adjust their Championship loadout under the new constraints -- fix any math errors before leaving. Final rule-setting meeting of the program.",
        "script": "https://docs.google.com/document/d/1uw_04mJk0wg6xibN7EcWCWRgKNHZP_-h60m6ucufcsI/edit?usp=drive_link"
      },
      {
        "name": "Break",
        "mins": 10,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "10-minute break. Campers stand, move, get water. Longer break lets energy fully reset before the next heavy block."
      },
      {
        "name": "Open Lab: Championship Loadout Verification",
        "mins": 45,
        "block": "Open Lab",
        "description": "Program your Championship loadout into MakeCode. Run one test drive. Verify every stat's behavior matches its formula output. If anything mismatches, fix it now.",
        "facilitatorDescription": "Teams program their Championship loadout into MakeCode, run one test drive, and verify every stat's behavior matches formula output. Any mismatch gets fixed now. Last uninterrupted debugging window before the tournament.",
        "script": "https://docs.google.com/document/d/1ROa_mZe7Ty9dhv7wBGwa_xwpsU-il_jnexl03spmoTo/edit?usp=drive_link"
      }
    ],
    "produce": [
      "Bar chart — opponent's four stats drawn; biggest threat circled",  
      "Scouting Report Section 3 — trend line equation from two opponent data points; one Championship match prediction",  
      "Scouting Report Section 4 — one strategy recommendation; three valid loadout combinations under Championship constraints",  
      "Championship rule proposal — presented verbally (3 min, two data points, last-place team addressed)",  
      "Championship loadout sheet — adjusted and math-corrected ", 
      "MakeCode code — Championship loadout programmed; test drive verified against formula outputs"
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
    "bigMathIdea": "What-if analysis. A hypothetical constraint forces recalculation of every affected loadout. Practice surfacing which stats move and which don't.",
    "activities": [
      {
        "name": "Cold Retrieval + Scouting Annotation",
        "mins": 25,
        "block": "Ice Breaker",
        "description": "Part 1 (8 min): From memory, write down five numbers -- your opponent's Speed motor power, their Endurance decay rate, their Season 1 best single-match goal count, your own Endurance output at t = 3, and your Speed motor power. Part 2 (17 min): All scouting reports go up. Read your opponent's report about your team. Find one calculation they got right and one they got wrong. Annotate with sticky notes.",
        "facilitatorDescription": "Part 1 (8 min): from memory, campers write five numbers -- opponent's Speed motor power, Endurance decay rate, Season 1 best single-match goal count, own Endurance output at t = 3, and own Speed motor power. Part 2 (17 min): post all scouting reports. Teams read the opponent's report about them, find one calculation the opponent got right and one they got wrong, and annotate with sticky notes.",
        "script": "https://docs.google.com/document/d/1CqRMPNEMrwuD__AO8xXUpXKYu7z0FRbgVkU47bvCDv0/edit?usp=drive_link",
        "template": "https://docs.google.com/document/d/1LELkBNge6avite1E60qRi_rU829oVV_M7FIyFNHyayg/edit?usp=drive_link"
      },
      {
        "name": "Pre-Match Pitch Rehearsal + Teach the Math",
        "mins": 45,
        "block": "Challenge Block",
        "description": "Rehearse your 2-minute pre-match pitch for Championship judges: 'Our strategy is [X] because [equation result]. Our opponent will do [Y] based on their [stat].' Peer feedback: did they cite a specific number for every claim? Then each team picks one calculation and explains it in plain language as if a visitor just walked in.",
        "facilitatorDescription": "Teams rehearse a 2-minute pre-match pitch for Championship judges: 'Our strategy is [X] because [equation result]. Our opponent will do [Y] based on their [stat].' Peer feedback centers on one question: did they cite a specific number for every claim? Each team then picks one calculation and explains it in plain language, visitor-ready. Every claim in the pitch needs a number next to it before teams leave -- 'Our bot is fast' scores zero; 'Speed = 7 gives us 35% motor power' scores full points.",
        "script": "https://docs.google.com/document/d/1WPsfN7Gwbz809PmeEuuqzo5GNhcu8cyOpFxlT7JVdVg/edit?usp=drive_link"
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math.",
        "facilitatorDescription": "Eat and rest. 60-minute protected break. No math talk."
      },
      {
        "name": "Final Commissioner's Meeting, Part 2 + Championship Bracket Reveal",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Final rule adjustments confirmed. Championship bracket revealed and posted. Final bot tune-up: program your Championship loadout, verify code against math, run one test drive.",
        "facilitatorDescription": "Confirm final rule adjustments. Reveal and post the Championship bracket. Teams do their final bot tune-up: program Championship loadout, verify code against math, run one test drive. Highest-anticipation moment before tournament day.",
        "script": "https://docs.google.com/document/d/1dbjceeZa7y2mn6nBB8iLlIc2YIpWn34S_A3z7FENCUo/edit?usp=drive_link"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "What-If? Analysis",
        "mins": 45,
        "block": "Challenge Block",
        "description": "The facilitator posts one constraint: 'The Commissioner has capped Endurance at 4 for the Championship.' You have 10 minutes to answer for every team: which loadouts violate this constraint? For each, calculate how their decay rate changes if they reallocate excess points to Speed. State the new motor power output. Does this rule change help or hurt your team? Show the math.",
        "facilitatorDescription": "Post one constraint: 'The Commissioner has capped Endurance at 4 for the Championship.' In 10 minutes, each team answers for every team in the room: which loadouts violate the constraint? For each violator, calculate the decay rate change if excess points reallocate to Speed and state the new motor power output. Each team analyzes whether the rule change helps or hurts them. Show all math.",
        "script": "https://docs.google.com/document/d/17eclDcJ_fBES8hiqnBz6L6mJ_mvo_tMcz2qr67_GonI/edit?usp=drive_link"
      },
      {
        "name": "Open Lab: Pitch Refinement and Bot Prep",
        "mins": 15,
        "block": "Open Lab",
        "description": "Rehearse your pitch one more time. Add specific numbers to any claim that is still vague. Every claim needs a number next to it before tomorrow.",
        "facilitatorDescription": "Teams rehearse the pitch one more time and add specific numbers to any vague claim. Every claim must have a number next to it before campers leave for the day. Short 15-minute window -- keep it focused on number-for-claim matching.",
        "script": "https://docs.google.com/document/d/1yro_I-SJCEKRtNaY2TEFO6QQgdoiMeQ-ZGt4bh59DRU/edit?usp=drive_link"
      }
    ],
    "produce": [
      "Cold retrieval paper — five numbers written from memory (opponent's motor power, decay rate r, best goal count; own decay at t=3, own motor power)",  
      "Sticky note annotations — one \"Correct\" and one corrected calculation on opponent's scouting report",
      "Pre-match pitch — 2-minute verbal rehearsal with specific equation results; peer feedback applied",  
      "What-If? analysis — league teams violating \"Endurance ≤ 4\" identified; new decay rates and motor power outputs calculated; effect on own team assessed",  
      "Pitch notes — every claim annotated with a specific number"
    ],
    "endsMins": 10,
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
    "bigMathIdea": "Pre-match pitch math. Every claim needs a number. Judges score on mathematical specificity, not presentation polish.",
    "activities": [
      {
        "name": "Pre-Championship Ritual",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "The whole camp does one physical warm-up together, energetic and brief, led by any camper who wants to lead it. Then each team has 3 minutes for their own ritual: a chant, a handshake, anything they invented. This is earned. Four weeks of work made this moment exist.",
        "facilitatorDescription": "Whole camp does one physical warm-up together, energetic and brief, led by any camper who volunteers. Then each team has 3 minutes for their own ritual -- chant, handshake, whatever they invented. This is earned. Do not rush it; four weeks of work made this moment exist.",
        "script": "https://docs.google.com/document/d/1ghkcMGT4HXJNR4lpWKilIdLigMZX1g5dJ-da9jdZMfY/edit?usp=drive_link"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Championship Rounds 1 and 2",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Double-elimination bracket. Before each match: your team delivers the 2-minute pre-match pitch to the judges, covering stat optimization strategy, specific numbers, inequality analysis. Judges score on mathematical specificity, not presentation polish. After each match: loss-recovery protocol runs for every losing team, same three steps, same script, no shortcuts.",
        "facilitatorDescription": "Double-elimination bracket. Before each match, teams deliver the 2-minute pre-match pitch to judges covering stat optimization, specific numbers, and inequality analysis. Judges score on mathematical specificity, not presentation polish. After each match, loss-recovery runs for every losing team -- same three steps, same script, no shortcuts even at Championship stakes.",
        "script": "https://docs.google.com/document/d/1HKr3LMhdwhsTSMieLKDD7QeVyfi-q6SSnSb3HP1rbu4/edit?usp=drive_link"
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math.",
        "facilitatorDescription": "Eat and rest. 60-minute protected break. No math talk."
      },
      {
        "name": "Championship Semifinals and Final",
        "mins": 60,
        "block": "Match-Build-Make",
        "description": "Remaining bracket matches. Pre-match pitch continues for every match. Loss-recovery runs for every elimination. Winner determined. After the final match, the champion posts their Championship configuration on the wall labeled 'Championship Configuration.'",
        "facilitatorDescription": "Remaining bracket matches. Pre-match pitch continues before every match. Loss-recovery runs for every elimination. Winner determined. After the final, the champion posts their Championship configuration on the wall labeled 'Championship Configuration' -- permanent artifact.",
        "script": "https://docs.google.com/document/d/1I06T4pVWfBJApBca4Y3O7we4C1HjhVKI4KmG6uolTUQ/edit?usp=drive_link"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Open Lab: Reflection Time",
        "mins": 40,
        "block": "Open Lab",
        "description": "No task required. Teams reflect on their four-week data arc. Look at your Day 1 allocation versus today's. What changed and why?",
        "facilitatorDescription": "No required task. Teams reflect on their four-week data arc. Prompt: compare Day 1 allocation to today's Championship configuration. What changed, and why? Low-stakes reflection after the high-stakes tournament.",
        "script": "https://docs.google.com/document/d/1lvW3OtIjKUPp7oxeYng28ghkXNTotYAh6RL108wr7CU/edit?usp=drive_link"
      }
    ],
    "produce": [
      "Pre-match pitch — 2-minute verbal delivery to judges before each Championship match",  
      "Loss-recovery documentation — completed for every losing team", 
      "Championship Configuration — winning team's loadout and scouting report posted on wall (champion only)"
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
    "bigMathIdea": "Teaching math to an outsider. You only know a concept if you can explain it clearly to someone who has not seen the stat system before.",
    "activities": [
      {
        "name": "Expert Setup",
        "mins": 25,
        "block": "Ice Breaker",
        "description": "You set up your station: scouting report, bot, coordinate grid, and data dashboard on display. You practice teaching the three visitor mini-challenges on a teammate: unit rate calculation, coordinate distance, and proportional scaling explanation. You write down the one thing you want every visitor to understand before they leave. That is your teaching goal.",
        "facilitatorDescription": "Teams set up their station: scouting report, bot, coordinate grid, data dashboard on display. They practice the three visitor mini-challenges on a teammate -- unit rate calculation, coordinate distance, proportional scaling explanation. Each team writes down the one thing they want every visitor to understand before leaving -- the team's teaching goal for the day.",
        "script": "https://docs.google.com/document/d/1jcYn0LTmP2IHZHdX9WhYk0U2-2KKItI05cvSWAWhWbQ/edit?usp=drive_link"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Community Exhibition: Teaching Begins",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Visitors arrive. Teach each visitor to complete three mini-challenges: (1) calculate a unit rate from your scouting data -- Season 1 wins divided by your Speed stat, stated as wins per 1 Speed point; (2) plot two match coordinates on the arena grid and calculate the distance between them; (3) explain in their own words why your Speed stat and motor power scale proportionally. Your goal is for each visitor to complete all three independently, without prompting after your initial explanation. That is the assessment.",
        "facilitatorDescription": "Visitors arrive. Campers teach each visitor to complete three mini-challenges: (1) calculate a unit rate from scouting data -- Season 1 wins divided by Speed stat, stated as wins per 1 Speed point; (2) plot two match coordinates on the arena grid and calculate the distance between them; (3) explain in their own words why Speed and motor power scale proportionally. Goal: each visitor completes all three independently after initial explanation. Visitor completion is the assessment, not camper delivery.",
        "script": "https://docs.google.com/document/d/1kPsmjmLJf6hZYdt6SSDuvMpwZoMSVShJtEGvzI37eJM/edit?usp=drive_link"
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math.",
        "facilitatorDescription": "Eat and rest. 60-minute protected break. No math talk."
      },
      {
        "name": "Extended Exhibition + Best Teacher Voting",
        "mins": 60,
        "block": "Match-Build-Make",
        "description": "Keep teaching. Visitors get one ballot: 'Which camper explained the math most clearly?' Exhibition matches can run while visitors watch.",
        "facilitatorDescription": "Exhibition continues. Hand each visitor one ballot: 'Which camper explained the math most clearly?' Exhibition matches run concurrently while visitors watch. Best Teacher vote collects here for tomorrow's ceremony announcement.",
        "script": "https://docs.google.com/document/d/1Lr34NgMylBQ2F7ceLzvivkvrPu1zCW06pXgCg3NdSKQ/edit?usp=drive_link"
      },
      {
        "name": "Scouting Report Verbal Check + Vote Count",
        "mins": 40,
        "block": "Match-Build-Make",
        "description": "Present one calculation from your completed scouting report to your facilitator -- 2 minutes, your choice of calculation. Explain what it is, how you calculated it, and what it tells you about your opponent's bot.",
        "facilitatorDescription": "Each camper presents one calculation from their completed scouting report -- 2 minutes, camper's choice. They explain what it is, how it was calculated, and what it reveals about the opponent's bot. Runs concurrently with Best Teacher vote count. Expert framing, not quiz framing.",
        "script": "https://docs.google.com/document/d/1oB-r6Wuz-b7gVrWASsG_Ycl-c5zJ-bjW960gzglQuuA/edit?usp=drive_link"
      },
      {
        "name": "Open Lab: Final Debrief and Prep",
        "mins": 15,
        "block": "Open Lab",
        "description": "Final debrief and preparation time. Review your data, reflect on the program, and get ready for the final day.",
        "facilitatorDescription": "Short debrief and prep window. Teams review data, reflect on the program, and get ready for Day 20. Last Open Lab of the program.",
        "script": "https://docs.google.com/document/d/13h94Qu4vn9Sxch1Nbo8oWIbjWgXtYDoJh7j1byr1laA/edit?usp=drive_link"
      }
    ],
    "produce": [
      " Station display — scouting report, bot, coordinate grid, and data dashboard arranged for visitors",  
      "Teaching goal — one sentence written: what the team wants every visitor to understand",  
      "Visitor mini-challenge facilitation — each visitor guided through unit rate calculation, coordinate distance calculation, and proportional scaling explanation"
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
    "bigMathIdea": "Post-task diagnostic. Parallel-form growth assessment across all eight topics: proportional reasoning, unit rate, ratio, proportional scaling, coordinate geometry, arc approximation, slope, linear decay.",
    "activities": [
      {
        "name": "Walk the Wall: Final Gallery",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "Final gallery walk of every artifact: bot origin stories, rivalry cards, leaderboard history, Commissioner rule changes, scouting reports, and the Day 1 goals posted in Week 1. You walk quietly. You are looking at what four weeks of work looks like.",
        "facilitatorDescription": "Campers walk quietly past every artifact: bot origin stories, rivalry cards, leaderboard history, Commissioner rule changes, scouting reports, and the Day 1 goals posted in Week 1. Quiet. Let the room do the work -- no narration. This is looking at four weeks of visible progress.",
        "script": "https://docs.google.com/document/d/1XDCeJ8J2U_zF0_vdgpfAYD6L4EFX8oRX8ZoRXOLapJ8/edit?usp=drive_link"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Post-Task Diagnostic: Prior Knowledge Reassessment",
        "mins": 15,
        "block": "Challenge Block",
        "description": "12 minutes, individual. 8 questions parallel to the updated Day 1 pre-task -- aligned to the Summer Sparks concept set: proportional reasoning, unit rate, ratio, proportional scaling, coordinate geometry (including distance), slope as rate of change, and linear decay -- using the same age-appropriate non-bot contexts. This measures growth by math topic, not a camp assessment. Your facilitator compares your results to Day 1 per concept. This is the only formal assessment on Day 20. Protect the afternoon.",
        "facilitatorDescription": "12 minutes, individual. 8 questions parallel to the updated Day 1 pre-task -- aligned to the Summer Sparks concept set: proportional reasoning, unit rate, ratio, proportional scaling, coordinate geometry (including distance), slope as rate of change, linear decay -- using the same age-appropriate non-bot contexts. Measures growth by math topic per camper, not a camp-wide assessment. Compare results to Day 1 concept-by-concept. Only formal assessment on Day 20. Frame explicitly: 'I am comparing you to yourself from four weeks ago.' Protect the afternoon -- no other assessment work.",
        "script": "https://docs.google.com/document/d/1KYGrQCGgyWRPsgwlafFgnID0cetHfHpnEK8oQ3o7kr8/edit?usp=drive_link",
        "webpage": "https://velocity-arena-gold.vercel.app/activities/diagnostic-post/index.html"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Awards Ceremony",
        "mins": 60,
        "block": "Match-Build-Make",
        "description": "Championship winner celebrated. Best Teacher award announced. The facilitator names one specific mathematical moment for each team: a particular calculation, a dashboard decision, a Commissioner argument, not generic praise. Hello Insight post-survey verbal reflection: each camper names one personal growth area and one specific camp moment that demonstrates that growth.",
        "facilitatorDescription": "Celebrate the Championship winner. Announce Best Teacher award. Name one specific mathematical moment for each team -- a particular calculation, a dashboard decision, a Commissioner argument. Not generic praise. Hello Insight post-survey verbal reflection: each camper names one personal growth area and one specific camp moment that demonstrates that growth.",
        "script": "https://docs.google.com/document/d/1FPkaluCh58L3kfr2E7mx8GKXUJpYzD9391KWC2kBKlQ/edit?usp=drive_link"
      },
      {
        "name": "Break",
        "mins": 5,
        "block": "Break",
        "description": "",
        "facilitatorDescription": "Short 5-minute break. Let campers stand, move, get water."
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math. The afternoon belongs to free time.",
        "facilitatorDescription": "Eat and rest. 60-minute protected break. No math talk. Final day -- the afternoon belongs to unstructured time and celebration."
      },
      {
        "name": "Open Lab: Final Free Time",
        "mins": 90,
        "block": "Open Lab",
        "description": "Unstructured time. Drive the bots. Revisit the coordinate grid. Teach each other anything you want. This is the last time the program exists in this form.",
        "facilitatorDescription": "Unstructured time. Campers drive bots, revisit the coordinate grid, teach each other anything they want. No task, no output. This is the last time the program exists in this form -- let the room shape the close.",
        "script": "https://docs.google.com/document/d/1mzg9cMe7l6ev_kSYjNDtCmGjqRorba91zmQoJvQg0CY/edit?usp=drive_link"
      }
    ],
    "produce": [
      "Final journal entry — individual reflection on what changed from Day 1 allocation to Championship loadout and why"
    ],
    "endBufferMins": 15,
    "endsMins": 20,
    "ends": "What did you learn about yourself as a problem solver? Name one specific moment from this program where you solved something you thought you could not. What did you do differently than you would have done before camp? You have 5 minutes. |",
    "funElement": "Best Teacher award announced. Social recognition for mathematical communication, not winning. Awards ceremony closes the program with campers as the experts. The verbal check ran on Day 19. Day 20 is the celebration.",
    "los": "LO 7.1 (post-task diagnostic reflects Season 1 and 2 prediction practice); LO 8.2 (Best Teacher award outcome reflects visitor-assessed teaching quality); Note: LO 9.2 verbal reflection runs at the awards ceremony (Hello Insight post-survey) and is assessed there, not in the daily LO field. Scouting Report Verbal Check (LO 7.3) completed on Day 19 afternoon. # SCOPE AND SEQUENCE SUMMARY",
    "facilitatorRisk": {
      "risk": "Post-task diagnostic triggers end-of-program anxiety and campers disengage from it, treating it as a formality. Cognitive overload after four weeks.",
      "say": "\"Say this before distributing the diagnostic: \"On Day 1, you filled out something like this and most of you did not know most of the answers. Today you do. I am not grading you against anyone else. I am comparing you to yourself from four weeks ago. Every answer you know today that you did not know on Day 1 is evidence of what happened in this room. Fill it out completely.\"\" |"
    }
  }
];
