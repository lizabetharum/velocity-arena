// Master 20-day schedule. Used by all sites by default (NY1, NY2).
// Per-site overrides live in their own files (e.g. days-tn.js) and are
// selected by the dispatcher in days.js.
const DAYS_DEFAULT = [
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
        "facilitatorDescription": "Run Circle Pass as a low-stakes trust game: one student makes any sound and movement, the next copies it exactly and adds a small change, and it travels around the ring. If someone blanks, have them copy the person before and shift one small thing. Keep energy light, no winner, no correct version; do not explain the purpose, just run it.",
        "script": "https://docs.google.com/document/d/1hXPfNWhq7z9Az6lpR94Lj78uSAZg7WH3HX83gIe4lp4/edit?usp=drivesdk",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day01-01-circle-pass.html"
      },
      {
        "name": "Mirror: Pairs",
        "mins": 15,
        "block": "Ice Breaker",
        "description": "Face a partner. One person leads slow, deliberate movements while the other mirrors exactly. No talking. After two minutes, swap. No winner, no evaluator -- just two people paying attention to each other.",
        "facilitatorDescription": "Pairs face each other. One leads slowly and deliberately while the other mirrors exactly in real time, no talking. Round 2: swap leaders. Round 3: no leader, just move together. The goal is physical presence and group trust before math begins; hold the frame and transition without over-explaining.",
        "script": "https://docs.google.com/document/d/1qAd3bp7JVVt--7k_DVi9iq9a9A1bjuYESbz7GYqyU1sY/edit?usp=drivesdk",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day01-02-mirror-pairs.html"
      },
      {
        "name": "Pre-Task Diagnostic: Prior Knowledge Assessment",
        "mins": 15,
        "block": "Challenge Block",
        "description": "You answer 8 questions about general math (speed, distance, graphs) in 12 minutes. There is no grade. This just helps your facilitator know what you already know so the program can meet you where you are.",
        "facilitatorDescription": "Read the framing aloud before students begin: this is information the program needs, not a grade, and results will not be discussed publicly. Circulate quietly while students work; do not coach or react. If a student blanks or disengages, redirect privately with 'just put your best guess' and move on. When time is up, move to the next activity.",
        "link": "/activities/diagnostic/index.html",
        "script": "https://docs.google.com/document/d/1ki4h4daYwPkqDaJ9BnYlwBNBxTpMsEi5MukBDviqwfI/edit?usp=drivesdk",
        "webpage": "https://velocity-arena-gold.vercel.app/activities/diagnostic/index.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day01-03-pre-task-diagnostic.html"
      },
      {
        "name": "Driving Question Reveal + Team Formation",
        "mins": 10,
        "block": "LX Setup",
        "description": "A big poster is unveiled with the question that drives everything we do for four weeks. Your three-person team is announced. You meet your teammates and sit together. No math yet.",
        "facilitatorDescription": "Unveil the driving-question poster that will anchor the whole four weeks. Announce three-person teams and have students sit together at their team tables. No math content yet -- this activity is pure set-up and social orientation.",
        "script": "https://docs.google.com/document/d/1whCYZecdM3gyaziLFXggw8qiABDZVBvgxwAGWxMc3UQ/edit?usp=drivesdk",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day01-04-driving-question.html"
      },
      {
        "name": "Stat Card Distribution",
        "mins": 5,
        "block": "LX Setup",
        "description": "You get a blank stat card with four rows: Speed, Endurance, Turning, Power. Three rows are greyed out. Today you fill in one line. This card is yours for four weeks.",
        "facilitatorDescription": "Hand each student a blank stat card with four rows (Speed, Endurance, Turning, Power). Three rows are greyed out today; only Speed will be filled in. The card stays with the student for the full four weeks -- emphasize that it is a permanent artifact, not scratch paper.",
        "script": "https://docs.google.com/document/d/1K0kG2dMqj8hDzy1uFp6OpIj4PZrtm1eb9zCeg_wqSx0/edit?usp=sharing",
        "template": { url: "https://docs.google.com/document/d/10e6BRrdOqRjV_aabz8LA6NHu1ecOew2DZcBor0bIpLg/edit?usp=drive_link", label: "Stat Card"},
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day01-04-stat-card-distribution.html"
      },
      {
        "name": "Speed Stat Challenge: What Does Motor Power Actually Mean?",
        "mins": 40,
        "block": "Challenge Block",
        "description": "One formula goes on the board: Speed % = (Speed points / 20) x 100. Your team calculates motor power for Speed values of 1, 3, 5, 6, and 8. Then compare answers with the team next to you. If you disagree, figure out where the split is -- without asking the facilitator first.",
        "facilitatorDescription": "Open by asking what 100% means in everyday life, take two or three answers, then put the formula on the board: Motor Power % = Speed x 100 / 20. Have students restate it to a partner and write a prediction for Speed = 10 before any calculation. Circulate and track which teams use the full formula versus the Speed x 5 shortcut, push for written steps, and pause mid-block to compare values with another team. In the share-out, call full-formula teams first, then shortcut teams, and guide the class to name the proportional relationship. Close with the two-question exit ticket and stat card entry.",
        "script": "https://docs.google.com/document/d/12wViKxrKPix59HkDOGzY5YdpanDO5o_j6hbpYZlg3MM/edit?usp=drivesdk",
        "worksheet": "https://drive.google.com/file/d/1K51qc8WHn95uEqbp0sOxFxXN9cgcjm7W/view?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day01-06-speed-stat-challenge.html",
        "exemplar": "https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W1_D1_Speed_Stat_Challenge.html",
        'webpage': 'https://velocity-arena-gold.vercel.app/lessons/speed-stat.html' 
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
        "facilitatorDescription": "Open with the gas-pedal question, take two or three answers, then pose without answering: does doubling Speed double the distance in 2 seconds? Before any device opens, every student circles a prediction and shares reasoning with their team. Launch the digital lesson and circulate, tracking which teams use the formula to verify, which read the graph for a linear pattern, and which write a full proportional claim with numerical evidence. Push thinking with prompts about gaps between predicted and actual. At the midpoint, surface one team using the friction fallacy alongside one that predicted exact doubling.",
        "script": "https://docs.google.com/document/d/1o2YHcYLuogG5VlQlsGa2mR-HvhYQEvRMuTxHLj9uoVU/edit?usp=drivesdk",
        "makecode":"https://makecode.microbit.org/S57517-06163-23657-62024",
        "worksheet": "https://drive.google.com/file/d/1B9ZoQrgAhE6vG3juLvuBR4xoRz5K6jHJ/view?usp=drive_link",
        "exemplar": "https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W1_D1_BotDrive_StatCard.html",
       "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day01-07-first-bot-drive.html"
      },
      {
        "name": "Open Lab: Free Code Time",
        "mins": 30,
        "block": "Open Lab",
        "description": "Unstructured time with your bot. Drive it, experiment with MakeCode, or talk strategy with your team. No task to complete -- just time to explore.",
        "facilitatorDescription": "Open the lab, then say nothing more. Circulate slowly, two to three minutes per table, and ask only one question per stop -- 'What are you trying?' or 'What do you want the bot to do?' -- then wait in silence for up to 10 seconds and move on without evaluating the answer. Never suggest a task or answer 'What should we work toward?' At the 30-minute mark, scan the room and give one prompt only to any student who has not touched the bot. Close with the scripted reflection, 30 seconds of think time, and a pair-share.",
        "script": "https://docs.google.com/document/d/1x7RnctRVwDj3nuC77ApKWc6Xquo7mQXYhYhLJT4bfjk/edit?usp=drivesdk",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day01-09-open-lab.html"
      }
    ],
    "ends": "Write one personal goal and one team goal for this week. Post them on the wall. You have 3 minutes. |",
    "produce": [
      "Prior knowledge diagnostic — Math questions answered individually",
      "Stat card — Speed row filled in",
      "Speed Stat Challenge worksheet — motor power percentages for Speed values 1, 3, 5, 6, and 8",
      "Data dashboard — three distance entries where two double each other (example: Speed = 2, Speed = 3, and Speed = 6)",
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
        "facilitatorDescription": "Run the Failure Bow briefly: someone makes a mistake, real or fake, big or small, then bows, then everyone cheers. You go first to set the scale. Hold the frame and transition quickly without over-explaining the purpose.",
        "script": "https://docs.google.com/document/d/1P1yi8TbpERF1pztb-VTR4v4gpO4dDz0_3fNkEslJDBk/edit?usp=drivesdk"
      },
      {
        "name": "Slow Down, Slow Down",
        "mins": 15,
        "block": "Ice Breaker",
        "description": "Your whole team does jumping jacks at full speed for 30 seconds. Then you slow down -- one fewer rep each cycle -- until you are doing one jumping jack every 10 seconds. You feel the drop in your body. Your facilitator asks: 'What would we call it if your bot did this?' The answer is Endurance.",
        "facilitatorDescription": "Lead a paced movement exercise where you call the tempo and students match it, gradually slowing the pace of the room before math begins. Run briefly and transition quickly without over-explaining; the point is to slow the room, not to belabor the metaphor.",
        "script": "https://docs.google.com/document/d/1mGn9MzXHu0cghazkY0RGQDzLq4lr0fpRFz8et-B1MMo/edit?usp=drivesdk"
      },
      {
        "name": "Endurance Stat Challenge: Drawing the Decay",
        "mins": 50,
        "block": "Challenge Block",
        "description": "The formula goes on the board: P(t) = 100 - (20 - Endurance) x 1.5 x t. Your facilitator works one full example and names the rate of change out loud -- this number is the slope of the decay line, how fast your bot loses power per minute. Then you calculate for different Endurance values with less and less help. Plot your results on paper. What shape do you get? Compare with the team next to you.",
        "facilitatorDescription": "Show the partial battery decay graph (four points plotted, t=4 and t=5 blank) before revealing the formula. Have students read it, share what they notice, and write two predictions in their journal: will the battery reach 0%, and what will P be at t=5? No calculating yet. Then write the formula on the board, launch the digital lesson, and send teams through the E=6, E=4, E=2 sequence and their own allocation. Circulate and ask only which step they are on and what number they got. In the share-out, sequence calculation table to graph to slope meaning and return to the launch predictions. Close with the exit ticket before stat card entry.",
        "script": "https://docs.google.com/document/d/1sYI4n2zRgr-a98835xcq0P6UdhhoHvJjBZjFPbl2fbg/edit?usp=drivesdk",
       "exemplar":"https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W1_D2_Endurance_Stat_Challenge.html",
       "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day02-04-endurance-stat-challenge.html"
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
        "facilitatorDescription": "Direct students to the digital lesson Section 1 (formula, two MakeCode constraints, transformation steps) and have them complete worksheet predictions for all four time points before Section 2. Walk through the code structure with the class, then send teams to MakeCode with the starter code link and circulate to check formula structure. When most teams have a working function, move to the floor: run the 4-burst test, measure distances, and record results. Close with at least two teams sharing their gap sentence and use talk moves to push toward what the formula didn't account for.",
        "script": "https://docs.google.com/document/d/1DC_OoLC1Cz_QbwkvVGKaorM9pTOcouWny7Sw4qrqLaw/edit?usp=drivesdk",
        "worksheet": "https://drive.google.com/file/d/1lgcCjmpMVtx9Kbz6qOaMgrmwvWhiPCbH/view?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day02-05-program-endurance.html",
        "exemplar": "https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W1_D2-endurance-exemplars.html",
        "makecode": "https://makecode.microbit.org/S13709-03394-48320-85992"
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
        "facilitatorDescription": "Introduce the three roles (Coder, Fabricator, Analyst) and explain that teams rotate weekly so every student holds every role by Week 4. Make the connections explicit: the Analyst's data tells the Coder what to change, and the Fabricator's setup determines whether that data is accurate. Give teams five minutes to decide Week 2 roles; step back, set a timer, and use scripted prompts only with teams that are visibly stuck.",
        "script": "https://docs.google.com/document/d/1PiKGa7FdUtdhcvAF49XXecY_2bKQXI3KeV03aEmA-ZE/edit?usp=drivesdk",
        "worksheet": "https://drive.google.com/file/d/1VauLDwyfrlpgBAb8FuguhAUeRMr5d7fF/view?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day02-06-role-rotation.html"
      },
      {
        "name": "Bot Naming Ceremony",
        "mins": 40,
        "block": "Match-Build-Make",
        "description": "Your team names your bot. Then you write exactly one sentence explaining what it is fighting for. The name and sentence go on the wall right now and stay there for all four weeks.",
        "facilitatorDescription": "Run a three-formula sequence that generates a unique bot name from each student's inputs: letters in first name (x), birth month (y), and team number (z). Demonstrate the tool live with your own values, then work all three formulas on the board with shared sample values (x=4, y=3, z=2), requiring students to calculate by hand before anyone opens the digital tool. Once teams have traced the math themselves, release them to plug in real inputs, generate the name, post it, and write one sentence about it. Do not rush; teams who invest in a bot name stay engaged through later losses.",
        "link": "/activities/robot-names/index.html",
        "script": "https://docs.google.com/document/d/1Ki8OW7XWCVaRnMMvXk0Guxgh3DN2GZP4NRWGJ4UyoWU/edit?usp=drivesdk",
        "webpage": "https://velocity-arena-bsowh3els-nycfirsts-projects.vercel.app/activities/robot-names/index.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day02-07-bot-naming-ceremony.html"
      },
      {
        "name": "Open Lab: Free Code Time",
        "mins": 20,
        "block": "Open Lab",
        "description": "Unstructured time with your bot. Experiment with your Endurance code. Try different point values and observe. No task, no output required.",
        "facilitatorDescription": "Tell students their Endurance value is locked on the stat card but the code is theirs to change, then step back. Circulate using the One Question Rule: one question per table, listen, move on. Track what at least two teams observe so you have material for the closing. At 16 minutes, run the closing ritual: students write and share one observation, and you deliver a consolidation move connecting what they saw to the math.",
        "script": "https://docs.google.com/document/d/1c1eqg0S2J3XcXiKMmNwJ3UTzanJ9fqgavb8SrAyMrxo/edit?usp=drivesdk",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day02-08-open-lab.html"
      }
    ],
    "produce": [
      "Endurance decay worksheet — scaffolded table for E \= 4; independent table for E \= 2", 
      "Paper graph — P(t) plotted across five t-values for team's Endurance allocation", 
      "Endurance bot code — motor power decay programmed in MakeCode", 
      "Four power readings across four match time points (t = 0, 60, 120, 180 seconds)", 
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
        "facilitatorDescription": "Set up the Human Robot challenge: one student acts as the bot, a partner gives movement instructions. Model first ('move forward three steps, turn 90 degrees left'), then let pairs run it. The goal is surfacing how imprecise natural language is for directing movement, which sets up the Turning Ratio formula as a solution to a problem students have just experienced. Keep it fast and physical, then connect directly: the bot needs the same precision, and the Turning formula gives them that.",
        "script": "https://docs.google.com/document/d/1KCi2wIXFxhKpFjJtnzjW_-DEDTpZ-ODI2dinMXD6Gcs/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day03-01-human-robot.html"
      },
      {
        "name": "Distance-Time Graphs",
        "mins": 65,
        "block": "Challenge Block",
        "description": "Part 1 (20 min): You get a data card with two bot runs. Plot both on the same graph. One line slopes down, the other stays flat. Figure out why without asking the facilitator, then flip the card to see the stat allocations on the back. Arc Approximation (10 min): Your facilitator draws one smooth curved turn on the board. Three straight segments are overlaid as chords. Two questions: are the segments together longer or shorter than the arc? What happens as you add more, shorter segments? The point is physical intuition that a curve can be broken into straight pieces with measurable lengths -- the prerequisite for the distance formula. Walk the Plane (15 min): On a life-sized taped coordinate grid, walk to called coordinates. Then: 'Move from (1,1) to (4,5). Estimate the straight-line distance.' Your facilitator writes d = sqrt((x2-x1)^2 + (y2-y1)^2) on the board for the first time. Calculate it, then verify against two more pairs. The formula is verified by standing on the grid. Part 2 (20 min): Turning formulas on the board -- Arc Segments = TURNING, Turn Ratio = 0.2 + (TURNING x 0.02). Fill in your stat card, then program your bot to navigate from (0,0) to a called coordinate.",
        "facilitatorDescription": "Part 1: distribute data cards showing two bot runs, have teams plot both and write one sentence explaining why the lines look different; circulate to push from general observations ('Run B was slower') to specific stat values. Part 2: introduce the distance formula using the arena grid as a coordinate plane; watch for students adding the horizontal and vertical gaps instead of using the quadratic form. Part 3: teams use what they've built to work through a programming navigation challenge, then debrief using the worksheet.",
        "script": "https://docs.google.com/document/d/1Rha6U3CayswkxkooVnwXukkJv7dDJnZALeHko60_kyg/edit?usp=drive_link",
        "worksheet": [{url: "https://docs.google.com/document/d/1uSOxGbf6KWQ7JUs-1vSq4q2-jqeo0EU54PFz4M9rmeA/edit?usp=sharing", label: "Navigation Challenge Record"},
          {url: "https://docs.google.com/document/d/1RHggdduPeGWT5enQ7ePXKJczlZ16xtZ8qMMPLIvswCE/edit?tab=t.0", label: "Card A"},
           {url: "https://docs.google.com/document/d/1PZ3buLyF06EgnHL6D2KZho6fDSaeIIgX9Vo0CeKfh7M/edit?tab=t.0", label: "Card B"}
    ],
    "exemplar": [{url: "https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W1_D3_Distance-Time_Graphs_DataCard_A.html", label: "Card A"},
           {url: "https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W1_D3_Distance-Time_Graphs_DataCard_B.html", label: "Card B"}],
   "exit": "https://docs.google.com/document/d/1DSFwsS2V4d9_GwrPjsxGdlth_IQ9DIk_kwdp7nFq9nI/edit?usp=sharing",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day03-02-distance-time-graphs.html"
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
        "facilitatorDescription": "Start with a launch sequence: teams pick a corner, calculate the straight-line distance to the ball, program a run, then measure how far off they were. Move to an embodied arc simulation where students walk a 2-segment versus 8-segment path to discover that more segments approximate a curve but never equal one. Introduce the turnRatio formula on the worksheet before revealing it on the board; teams calculate for T=5, then draw and compare three arc paths. Send teams to MakeCode for three differential wheel-speed configurations, predicting each arc shape before the run and mapping where the bot stops with colored stickers. Run the coverage challenge at T=2, 5, and 10, then debrief and finalize the Turning allocation.",
        "script": [
          {url: "https://docs.google.com/document/d/1ZWl_I7dNZRKr3c4pMbAnz7vCyE8L1it5qpo-X_37qZc/edit?usp=drive_link", label: "Script"},
          {url: "https://velocity-arena-gold.vercel.app/resources/teacher-guides/launch-strategies.html", label: "Launch Strategies"}
        ],
        "worksheet": "https://drive.google.com/file/d/1NCR1-2-ASqbQNvBeXOKvx67YOQHpbv1y/view?usp=drive_link",
       "makecode":"https://makecode.microbit.org/S79542-10060-01167-82601",
         "exemplar": "https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W1_D3_Arc_Approximation_Turning.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day03-03-arc-approximation.html"
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
      "risk": "The worksheet becomes anexercise where students just plot points without ever discussing what the graph shape means, and the Turning stat introduction gets buried under the graphing task.",
      "say": "\"Before Part 2: stop everyone. Say \"Look at your graph and the team next to yours. Your lines are different shapes. I want one sentence from each team, not what the formula says, but what your bot physically did differently to create that shape. Start there.\" Then, when you transition to the coordinate navigation: \"This grid is your new stat. Turning controls how your bot moves through this space. Let's see what it actually does.\"\" |"
    }
  },
  {
    "day": 4,
    "week": 1,
    "weekName": "Play Lab + Boot Camp",
    "theme": "Power: Ratio, Motor Speed, and the Scoop",
    "bigMathIdea": "Ratios and non-proportional scaling. charge speed = Power²  and follow through = Power × 80. Double the Power, quadruple the charge speed.",
    "vocabulary": "PROPORTIONAL SCALING. If Power = 2 gives charge = 2 and Power = 4 gives charge = 8, the output scales with Power². The output grows faster than the input — that's non-proportional.",
    "activities": [
      {
        "name": "Finger Speed-Sums",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "Face a partner. On a count of three, both of you show any number of fingers (0-5). Race to say the sum first. Correct answer earns a point. Rotate partners every 90 seconds. The math is easy -- the speed is the challenge.",
        "facilitatorDescription": "Run Finger Speed Sums as a timed warm-up: students hold up a number of fingers and the first person to correctly call the total wins the round. Keep rounds short and fast, five to seven rounds before stopping. The point is energizing the room and priming competitive instincts before the Power formulas, not extended gameplay.",
        "script": "https://docs.google.com/document/d/1JNyyLnY61I0ZFGAbaiF8hfYKNHLkampIQiTAsIgHMC4/edit?usp=drive_link",
        "quickCard": "/resources/quick-cards/activity-card-day04-01-finger-speed-sums.html"
      },
      {
        "name": "Power Allocation: Stat Card Fill-In",
        "mins": 3,
        "block": "Transition",
        "description": "Write your Power allocation on your stat card. Power is not a free choice: it is whatever points remain after Speed, Endurance, and Turning. Calculate 20 minus your three allocated stats and write that number in the Power row. If your three stats already sum to 20, you have no points for Power and need to revise one prior stat before the block begins.",
        "facilitatorDescription": "Students fill in the Power row of the stat card. Power is not a free choice -- it is whatever remains after Speed + Endurance + Turning. Teams calculate 20 minus their three allocated stats. If the three already sum to 20, they have zero Power and must revise one prior stat before the Challenge Block starts. Check every card before releasing to the block.",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day04-02-power-allocation.html"
      },
      {
        "name": "Power Stat Challenge: Ratio and Motor Speed",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Two rules go on the board: charge speed = Power², and follow through = 120 + (POWER × 35). Calculate charge speed for Power = 1, 2, 4, and 8 (giving 0.5, 2, 8, and 32). Before running the physical test, look at your Speed formula from Day 1: motor speed = (Speed / 20) x 100 -- proportional, double the stat and double the output. Power is not proportional: double the stat and you quadruple the output. Both formulas live on the same stat card. That contrast is the mathematical core of today. Then test it physically: program Power 4 (charge speed 8) into MakeCode, place your bot exactly 40 cm from the ball, drive, and measure how far the ball travels. Repeat with Power 8 (charge speed 32). Did doubling the points double kick distance? Both answers should surprise you.",
        "facilitatorDescription": "Launch by connecting to the three linear stats students already know, then display Charge Speed % = Power² and ask teams to write a gut prediction for Power 8 before calculating anything; this surfaces the linear misconception on paper. During Explore, teams complete the ratio table, run bot trials, and compare predictions to actual results. This activity uses a worksheet, a web page, and MakeCode.",
        "script": "https://docs.google.com/document/d/1KL6r2uOv0aGVn9Vhn5aqp8XL5tYP4LP2dyfvwxIdR8E/edit?usp=drive_link",
        "worksheet": "https://drive.google.com/file/d/1VYv53hKADZFrZ6SdqIb_1KwrQ6NnYTm8/view?usp=drive_link",
        "makecode":"https://makecode.microbit.org/S25978-40655-36880-19976",
        "exemplar":"https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W1_D4_Power_Stat_Challenge.html",
        "quickCard": "/resources/quick-cards/activity-card-day04-03-power-stat-challenge.html"
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
        "description": "Build a cardboard front scoop for your Cutebot. One rule: it has to make clean contact with the ball. Test at three Power settings (charge speed = Power²), run 3 shots at each from the 40 cm start line, and record kick distances in your dashboard. Then write: 'Quadrupling charge speed did / did not quadruple kick distance, because...'",
        "facilitatorDescription": "Open by activating the Power² formula from the morning session and have teams write a prediction on the worksheet before anyone touches materials. Teams build and attach a cardboard scoop, passing a three-condition checklist before they can test. Run two settings: three shots at Power 4, then three at Power 8; teams record averages, calculate the charge speed ratio algebraically, measure the distance ratio from actual results, and complete the efficiency section. The charge speed ratio will be exact (4.0); the distance ratio will be lower, and that gap is the point. Facilitate a whole-class share in a planned sequence, then close with the required exit ticket: each team chooses Power, shows the Power² calculation, and confirms the 20-point total.",
        "script": "https://docs.google.com/document/d/13XtjnTDWgTEhslEzgXaXYCs24axXmXC1jTP9B2D7R0A/edit?usp=drive_link",
        "worksheet": "https://drive.google.com/file/d/1lC3k4JUK9NQz0vNuqpKXCko8iUqB8Qgn/view?usp=drive_link",
        "makecode":"https://makecode.microbit.org/S63963-81221-45609-58211",
        "exemplar": "https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W1_D4-scoop-build-ratio-testing-exemplars.html",
        "quickCard": "/resources/quick-cards/activity-card-day04-04-scoop-build-ratio.html"
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
      "Power Stat Challenge worksheet — charge speed (P²) and follow-through (120 + (P × 35)\) for P \= 1, 2, 4, 8; ratios; two ball travel distances",  
      "Scoop/Kicker — built and attached to Cutebot",  
      "Scoop testing worksheet — kick distances at three Power settings, 3 shots each",  
      "Written sentence — whether quadrupling charge speed quadrupled kick distance, with reasoning",  
      "Data log entry — which change (scoop or Power value) had bigger effect on kick distance"
    ],
    "endBufferMins": 7,
    "ends": "Write this sentence and complete it: \"The skill I used today was \\[name it specifically, not just 'math'\\] and I will use it tomorrow by \\[name the exact moment and action\\].\" You have 3 minutes. |",
    "funElement": "None today. The scoop build and the \"doubling motor speed does not double kick distance\" discovery create genuine productive surprise. The scoop iteration loop (build, test, adjust) generates its own momentum.",
    "los": "LO 1.2 (proportional vs non-proportional contrast: Speed output scales linearly -- double the stat, double the output; Power output scales as P²/2 -- double the stat, quadruple the output; both named explicitly with side-by-side examples); LO 3.2 (distance calculations verified against bot kick test data)",
    "facilitatorRisk": {
      "risk": "Students assume more Power always wins and stop thinking about trade-offs in the 20-point budget. Cognitive overload from trying to optimize all four stats simultaneously.",
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
        "facilitatorDescription": "Run a modified Simon Says where instructions include conditional logic: if your Speed is above 10, stand up; if your Endurance is below 5, clap twice. This surfaces constraints and conditional relationships before the budget worksheet. Keep rounds brief and connect directly: we just played a game where your action depended on a condition, and your allocation works the same way -- every choice is conditional on the budget.",
        "script": "https://docs.google.com/document/d/1h8HEuGVEsHCbIc_LeWVK2cioguPdtOpbBl6Bd27Lywg/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day05-01-simon-says.html"
      },
      {
        "name": "Two-Formula Warm-Up",
        "mins": 8,
        "block": "Warm-up Block",
        "description": "This warm-up bridges the gap by pairing two formulas on one allocation — so the jump goes from one to two to four, not one to four.",
        "facilitatorDescription": "Write Speed = 7 and Endurance = 5 on the board before students arrive. Students work alone for three minutes to calculate both outputs from memory using the wall formulas. Call on students for Q1 (Speed output) and Q2 (Endurance output), then hold an open discussion on Q3: what do both numbers together reveal about how that bot performs? There is no single right answer; hold the space, don't pick a winner. Close with a consolidation line and hand out the Budget Constraint worksheet.",
        "script": "https://docs.google.com/document/d/1X1jWE_d-Ja9fB559Z0OqLg4OJVaEWTbkN-e2_sSoxgc/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day05-02-two-formula-warmup.html"
      },
      {
        "name": "The Budget Constraint: Speed + Power + Turning + Endurance = 20",
        "mins": 50,
        "block": "Challenge Block",
        "description": "One equation goes on the board: Speed + Power + Turning + Endurance = 20. Your team designs 3 different stat loadouts, each using exactly 20 points. For each one, calculate all four formula outputs -- Speed linear (motor power), charge speed = Power², follow through = 120 + (POWER × 35), Arc Segments = TURNING, Turn Ratio = 0.2 + (TURNING x 0.02), and Endurance decay -- and record them. Then answer: if you want Speed = 8, what are you giving up? Show every calculation.",
        "facilitatorDescription": "Open with two rival-team loadouts on the board (same 20 points, different distributions), then have teams design three hypothetical loadouts on the worksheet, calculating all four formula outputs for each. Push the core question throughout: 'What are you giving up if Speed = 8?' Circulate during Explore and note any equals-sign errors (adding to one stat without subtracting from another) without correcting them; save those for the Misconception Correction at minute 45. Select two or three team loadouts for whole-class discussion, then address the equals-sign balance explicitly.",
        "script": "https://docs.google.com/document/d/1qtE-c80NIwHmAZBYp-aFF3alFVtrdfwHuow5CL9zKFg/edit?usp=drive_link",
        "exemplar":"https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W2_D5_Budget_Constraint.html",
        "worksheet":[
          {url: "https://drive.google.com/file/d/144kRGshFNWApDR3r4ZPojoxgUCethU0C/view?usp=drive_link", label: "Worksheet"},
         
        ],
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day05-03-budget-constraint.html",
        "exit": "https://docs.google.com/document/d/1uVOCL4yHuHIx7_7xe-JrsE93CYdqSgKfK0p_Zrg4HhU/edit?usp=sharing"
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
        "facilitatorDescription": "Run a silent individual recall check on five math concepts from Days 1–4. Open with the exact framing line ('This is not a test -- I'm using this to figure out what I need to teach differently today'), give students 60 seconds to scan all five questions before the timer starts, then hold 10 minutes of silent individual work while you circulate and tally responses on the monitoring chart. Don't coach during the work period. Run a whole-class share-out using 'Who got something different?' (not 'Who got it wrong?'), and use errors to build connecting questions to the Budget Constraint.",
        "script": "https://docs.google.com/document/d/1TuqKRSipwR2pC5txnlN7Eh3y-p1Rh2dCIVb8uFO9iKA/edit?usp=drive_link",
        "worksheet": [{url: "https://drive.google.com/file/d/1t3KadS_ovd8PpUfEzQcN4bXOmzFi8GDn/view?usp=drive_link", label: "Questions"},
           {url: "https://docs.google.com/document/d/16C_9YMX6Szv5DiSE_71MBRQAclnXx0yRoyBLDajxnfw/edit?usp=sharing", label: "Answers"}
        ],
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day05-04-cold-recall.html"
      },
      {
        "name": "Dashboard Introduction",
        "mins": 10,
        "block": "Transition",
        "description": "Teams enter their 20-point stat loadout into the dashboard and learn the Simulation Lab. The dashboard is in pre-trial mode this week — only two sections are visible: Stat Loadout, where teams type in their four stat values and confirm the total equals exactly 20, and Simulation Lab, where teams log a gap sentence for every simulation round. A gap sentence has three parts: what the formula predicted, what the bot actually did, and the gap stated as a number. Every gap sentence logged this week feeds the Friday reflection question: for one simulation round, what was the gap between formula and reality?",
        "facilitatorDescription": "Walk students through their first dashboard entry in two steps: stat loadout, then Simulation Lab. Open the dashboard on the projector before students arrive, pre-filled with a sample loadout and one sample gap sentence so the demo takes under 60 seconds. Launch with two context questions, then have teams call out their four stat values before they touch a device. Once they confirm the total is 20, let them open the dashboard and enter. Model the three-part gap sentence format live (formula predicted / bot did / gap) and assign the Data Owner role before the exit check. The exit check is non-optional: every team confirms loadout total, gap sentence format, and Data Owner name before moving on.",
        "script": "https://docs.google.com/document/d/1HZHM4CU6kodt298jeO6lzRn6O2o0x_n89aCiptxY0xY/edit?usp=sharing",
        "worksheet":"https://drive.google.com/file/d/1HFMssvjVCafi8mMZP6bqUBooFbcEue1c/view?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day05-05-dashboard-introduction.html"
      },
      
      {
        "name": "Simulation Matches: Your Loadout vs. Reality",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Pick your best loadout from this morning, program it into your bot, and run practice matches. These do not count. After each run, compare: did your bot behave the way your allocation predicted? Record observations labeled 'simulation' in your dashboard.",
        "facilitatorDescription": "Give teams two minutes to commit to one of their three morning loadouts (no new designs, no deliberation past the buzzer), then move directly into MakeCode setup with all four formulas programmed simultaneously. Circulate during setup using the Setup Monitoring Chart, watching for the most common miscodes: Speed output confused with the stat value, Endurance decay written as E×1.5×t instead of (20−E)×1.5×t, and Power coded linearly instead of quadratically. Run two to three simulation rounds of three minutes each, requiring a gap sentence entry before each new round. Run the post-match debrief in sequence (Endurance, then Turning, then Power) using the five scripted talk moves. Close with the non-optional individual exit ticket.",
        "script": "https://docs.google.com/document/d/1dLE5nbDOkwBGEi6ejIJX1IT48ir071mXRRU2A1_6Kvw/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day05-07-simulation-matches.html",
        "exit": "https://docs.google.com/document/d/1oKYXqje3BTpjz0dP2PdVla2iYO8AsNsje_8kERxn5d0/edit?usp=sharing"
      },
      {
        "name": "Open Lab: Free Code Time",
        "mins": 30,
        "block": "Open Lab",
        "description": "Experiment with the loadouts you designed this morning. Try each one. Which one produces the behavior your formulas predicted?",
        "facilitatorDescription": "Ask 'Which loadout matched your predictions best?' and step back. Circulate with the single monitoring question 'What are you trying?' Hold the distinction between predictive accuracy and match performance throughout; redirect any team that calls a loadout 'best' because it won. Call the 10-minute warning once, then close devices and transition directly into the Closing Ritual without summarizing the day. Read the journal prompt once slowly, write alongside students for five silent minutes, then run sharing rounds with volunteers first, then named students, one sentence each. Close with two sentences: Week 1 done, Season 1 announced.",
        "script": "https://docs.google.com/document/d/1b-dHky2JBEv8cZp-h9htJNm8CnTfeaA9Tz9ENb_GP1Y/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day05-08-open-lab-closing.html"
         }
    ],
    "produce": [
      "Two-formula warm-up — Speed and Endurance outputs calculated for one allocation",  
      "Three stat loadouts — each summing to 20 points; all five formula outputs calculated. ", 
      "Written answer — tradeoff shown if Speed \= 8, with all calculations",  
      "Cold Recall Check — five individual math problems on paper (no grade)",  
      "Launch sequence code — JavaScript uploaded to bot",  
      "Data dashboard — simulation match observations logged (prediction vs. bot behavior)"
    ],
    "endBufferMins": 2,
    "ends": "What is one thing you are good at that most people do not know about? Be specific. Name the thing. Give a real example from your own life. You have 5 minutes. |",
    "funElement": "Misconception correction: Equals sign as balance (activates today. Day 5 is the first day the full budget equation is introduced, making this the natural placement for the correction).",
    "los": "LO 1.1 (all four stat-to-formula pairs applied); LO 1.2 (all four formula calculations correct across three loadout options); LO 5.1 (data dashboard with first simulation entries); LO 9.1 (Week 1 journal: one personal strength named with a specific example) # WEEK 2: THE BUILD + FIRST SEASON *Energy register: Competitive, invested, occasionally frustrated. The leaderboard is up. The data dashboard is live. Frustration is productive here. It means students care.* +-----------------------------------------------------------------------+ | **OPEN LAB PROTOCOL: WEEKS 2 AND 3** Starting Week 2, Open Lab runs two parallel tracks. Students choose which one to join at the start of each Open Lab. Both tracks are legitimate uses of the time. **Track A: Data Dive** Review the data dashboard. Revise predictions. Analyze residuals. Run formula calculations for next match prep. This track has a specific prompt in each day's Open Lab description. **Track B: Bot Lab** Experiment with MakeCode. Test a new scoop angle. Try a weird loadout you would never use in a real match. Drive backwards at full speed and observe Turning behavior. No required output. Just bot time. Track choice is self-selected and publicly visible. A team that chooses Bot Lab after a loss is avoiding their data. That tells you something. Do not redirect them immediately. Watch for one full Open Lab. If they choose Bot Lab after two consecutive losses without any dashboard revision, ask one question: \"What would your data tell you if you looked right now?\" Then step back and let them decide. The self-selection is diagnostic, not a problem to fix. Teams that consistently choose Track A are doing the analytical work the program is designed to produce. Teams that consistently choose Track B may be more engaged with the physical system than the mathematical one. Both are valid paths through the program. Only one of them produces a competitive advantage in Season 2. Let them figure that out. +=======================================================================+ +-----------------------------------------------------------------------+",
    "facilitatorRisk": {
      "risk": "Students treat the budget constraint as a puzzle with one optimal answer, stopping creative exploration of trade-offs after the first \"good\" loadout. Facilitator talking too long about the constraint concept reinforces this.",
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
        "facilitatorDescription": "Post multi-step equations on the whiteboard and line teams up in relay formation. The first student solves Step 1, tags the next for Step 2, and so on until the team reaches the correct final answer. Run two or three rounds, keeping pace fast, and correct procedural errors on the board immediately after each round, not during. The relay primes algebraic fluency before the field geometry problem set that follows.",
        "script": "https://docs.google.com/document/d/1TM8X1tlASaOyRy5xgQauO_l05p1tAPgbD0FkGdACu1Q/edit?usp=drive_link",
        "worksheet": "https://docs.google.com/document/d/17el70myq_C81c16ErdoBQ_KKBS8x-fb0Xug2SEA_-Fg/edit?usp=sharing",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day06-01-equation-relay-race.html"
      },
      {
        "name": "Official Stat Allocation: Interleaved Problem Set",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Complete a problem set with 12 shuffled problems across all four formula types, including Turn Ratio = 0.2 + (TURNING x 0.02), follow through = Power x 80, and Arc Segments = TURNING. A concept tag column runs alongside each problem: before calculating, write the concept name that the problem targets (unit rate, ratio, linear decay, coordinate geometry, or proportional scaling).  Teams must lock in their official allocation at the end of this block. This is the last time they can change their numbers before competition begins on Day 7.",
        "facilitatorDescription": "Place the 12-problem set face down on each table before students enter, no formula sheets visible. Introduce the task: tag the formula structure first, then calculate. Do not let students flip until after the comprehension check. Hold 30–35 minutes of individual silent work; circulate with the monitoring chart. Students finish by locking in their stats with the online Prove Your Build. There is an extra-practice HTML worksheet for fast finishers.",
        "script": "https://docs.google.com/document/d/1Y6w0LgGfHSx_5icP4yTCNnHzYIYSofLFxoQVoNdZweY/edit?usp=drive_link",
        "worksheet": [
          { url: "https://drive.google.com/file/d/1vpbdrqpAyFEU8Rth55wJor90qT1f0SGg/view?usp=drive_link", label: "Questions" },
          { url: "https://drive.google.com/file/d/1HTKprechKjPNoACQ-fWBMvjIPoCIACLS/view?usp=drive_link", label: "Answer Key" }
        ],
        "exemplar": "https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W2_D6-interleaved-exemplars.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day06-02-interleaved-problem-set.html"
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
        "mins": 50,
        "block": "Challenge",
        "description": "Plot your starting position, the tip-off point, and the goal on the coordinate grid. Draw your approach path and calculate how far your bot needs to travel. Use your Speed allocation to predict how many seconds that distance takes. Write the calculation in your dashboard. Then write one sentence justifying your approach angle -- it must cite a distance or a stat value.",
        "facilitatorDescription": "Frame the two-phase programming structure before students open anything: launch sequence runs once and ends at the handoff point, then the match loop takes over. Place worksheets face down and write LAUNCH SEQUENCE → HANDOFF POINT → MATCH LOOP on the board. Walk through the distinction, then give teams 25–30 minutes to work Steps 1–10: choosing candidate handoff points, applying the distance formula to calculate distance from the ball zone at (4, 2), evaluating border risk and arc coverage, committing to a position, and testing it with a live bot run.",
        "script": [
          {url: "https://docs.google.com/document/d/10tYb3mtXpHfbFy4Y6HHhJmP0NN0dBbG9crw59XQaq_E/edit?usp=drive_link", label: "Script"},
          {url: "https://velocity-arena-gold.vercel.app/resources/teacher-guides/launch-strategies.html", label: "Launch Strategies"}
        ],
        "worksheet":"https://drive.google.com/file/d/12wQ4G8t6jRv9rQ-ArWou8l2Ety60gRwc/view?usp=drive_link",
        "exemplar":"https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W2_D6_Field_Geometry_Worksheet_Exemplars.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day06-03-field-geometry-approach.html"
      },
      {
        "name": "Launch Sequence Programming + Testing",
        "mins": 60,
        "block": "Match-Build-Make",
        "description": "Program your launch sequence in MakeCode: the starting routine that controls your bot's initial movement, angle, and timing before it reaches the ball. Run it twice. Record your actual time to reach the ball both times. Compare against your Speed prediction from the geometry block. If they match, your math and your code agree. If they don't, write one sentence in your dashboard identifying where the model broke down.",
        "facilitatorDescription": "Teams design two launch strategies on paper before touching MakeCode: turns, drives, and one prediction each. Code and test Strategy A for three trials, then switch to Strategy B for three trials, recording hit rate and post-kick robot position for each. Stop the class at minute 35 to name the accuracy-versus-reliability distinction before teams move into comparison. Teams choose one strategy and justify it in writing using hit rate, approach angle, and post-kick position. Step 8 requires changing one variable only.",
        "worksheet":"https://drive.google.com/file/d/1VzbAcbRjnR7msfgj64VVwI092OdGHi-P/view?usp=drive_link",
        "script":[
          {url: "https://docs.google.com/document/d/1Rc5LTyZ-DiKI3uFtoPhbc5ZplUPDeTCK2HRk1XGjISs/edit?usp=sharing", label: "Script"},
          {url: "https://velocity-arena-gold.vercel.app/resources/teacher-guides/launch-strategies.html", label: "Launch Strategies"}
        ],
        "exemplar":"https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W2_D6_Launch_Sequence_Design.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day06-04-launch-sequence-programming.html"
      },
      {
        "name": "Launch Showcase",
        "mins": 20,
        "block": "Match-Build-Make",
        "description": "Commit to your final sequence and write down your run order -- that is what locks for Season 1. Each team runs their launch sequence once in front of the room. While another team runs, write one specific observation in your dashboard: not 'they were fast' but 'their bot reached the ball in under 3 seconds, which suggests their Speed allocation is above 8.' After all teams have run, you have 10 minutes for one final adjustment. Then sequences lock.",
        "facilitatorDescription": "Each team commits to a launch sequence, then watches every other team run theirs. During the showcase, every observer logs one observation per run (behavior, stat implied, confidence level) with a 30-second writing pause after each run. Push any description ('they were fast') to a mathematical claim ('Speed is probably above 8, Motor Power % at S=8 is 40%'). Select one Level 3 and one Level 4 observation for the share-out. Close with a fixed 10-minute adjustment window: teams make one change and cite the observation that justified it.",
        "script": "https://docs.google.com/document/d/1u_t-Lcszhvz9VXyqGYMtgyzN6tI948pUgw-okpP7xBA/edit?usp=sharing",
        "worksheet": "https://drive.google.com/file/d/1LhwiwjTChaUP8ThP3QIU7IYpBHiy5B7_/view?usp=drive_link",
       "exemplar":"https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W2_D6_Launch_Showcase.html",
       "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day06-05-launch-showcase.html"
      },
    
      {
        "name": "Open Lab: Free Code or Final Verification",
        "mins": 15,
        "block": "Open Lab",
        "description": "Track A (Data Dive): Check each stat value in your dashboard against the formula output. Fix any mismatches before tomorrow's first match. Track B (Bot Lab): Test a loadout you would never use competitively. What happens at Speed = 2 with Power = 15?",
        "facilitatorDescription": "Give teams exactly 10 minutes to make one final adjustment to their launch sequence, then announce that sequences are locked. Circulate during those 10 minutes but do not coach; teams decide what to change. When time is called, confirm with each team that their final sequence is documented before closing. Then teams run the Pre-Match Checklist in order (Power, Endurance, Speed, Turning) with one person in the code and one checking the math. Circulate and ask to see calculations, not just answers. Any unresolved mismatch carries a PENDING into tomorrow's first match.",
        "script": "https://docs.google.com/document/d/1tfwcohDC_tUJ700pCwIWLIa4j31qdFJoUgcJdhvyd1A/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day06-06-open-lab-verification.html",
        "exemplar":"https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W2_D6-pre-match-checklist-exemplars.html",
       "worksheet":"https://docs.google.com/document/d/1qAIWuumIOSJ18bQEGq2PDC8lpjbU0ChAsQtj-ks77jY/edit?usp=sharing"
    
      }
    ],
    "produce": [
      " Interleaved problem set — 12 problems across six formula types; concept-tag column completed",  
      "Season 1 allocation sheet — four stats locked; sum verified at 20",  
      "Coordinate grid — starting position, tip-off (4,2), and goal (8,2) plotted; approach path drawn",  
      "Straight-line distance to ball and travel time prediction calculated",  
      "Written sentence — approach angle justified with distance or stat value",  
      "Launch sequence — programmed in MakeCode; two test run times logged",  
      "Written sentence — where Speed model broke down (if predicted ≠ actual)",  
      "Run order — final launch sequence committed to and locked for Season 1",  
      "One data-cited claim about each other team's showcase run"
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
        "facilitatorDescription": "Post an equation from the allocation sheet and explain the rules: solve correctly and earn a shot at the bin with a crumpled paper ball, with a bonus point for making the shot. Run three to four rounds, correcting math errors on the spot before shots are taken. The activity primes competitive energy before the first real matches without raising the emotional stakes of actual bot competition.",
        "script": "https://docs.google.com/document/d/1Bi2GyylzUmAMF3L-9mChiZvNsaOFzTQuidpxHfFU-S4/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day07-01-trashketball.html"
      },
    
      {
        "name": "Endurance Decay Equations in Slope-Intercept Form",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Using your Endurance allocation, write your bot's power decay equation as P(t) = 100 - rt. Calculate r from your allocation. When r is revealed, your facilitator names it explicitly: the slope of a line is its rate of change, and r is how fast your bot loses power per minute. Then find the x-intercept: at what minute does your bot's power reach zero? Record the equation and x-intercept in your match data log before the first match.",
        "facilitatorDescription": "Open the interactive web page and give teams two calculations to run on their own bot's decay equation: the 20% power floor time (set P = 20) and the true x-intercept (set P = 0). Write both on the board before anyone starts. Monitor for three errors during Explore: substituting P = 0 for the floor time, using E directly instead of computing r = (20−E) × 1.5, and arithmetic errors in r. Run team share using sentence starters, then select one high-E and one low-E team for the whole-class discussion. The connecting question: why is t_floor always less than t_xi? Close with the non-optional individual exit ticket and data log entry.",
        "script": "https://docs.google.com/document/d/1dP6KVB-fWDv-ulZJRhvX-apJJddyM98OY2hAy0Tu7Mk/edit?usp=sharing",
        "worksheet": "https://drive.google.com/file/d/11UkVVv6an0sm_UbK0StSpWWE3NcogS4z/view?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day07-02-endurance-decay.html",
        "exemplar":"https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W2_D7-endurance-decay-exemplars.html",
        "exit": "https://docs.google.com/document/d/1QpcTTJ8aDJbZCcCkHCmmJKpGEO6zOHugmBK_CDauYKk/edit?usp=sharing"
      },
      {
        "name": "Pre-Match Prediction Huddle",
        "mins": 10,
        "block": "",
        "description": "Your team reads your stat allocation out loud -- every formula, every result. Then write one prediction in your match data log: how many goals will your team score in your first match?",
        "facilitatorDescription": "Each team reads their full stat allocation out loud (stat value, formula, output) before writing a prediction. Speed first, then Endurance, Turning, Power. Don't move to prediction writing until every table has stated at least their Speed formula and Endurance equation. Then each team writes one specific goal count in the Match Log, signs it, and cannot revise it. No ranges. Push any team whose prediction doesn't connect to their stats. Close with one consolidation sentence and announce Round 1 pairings.",
        "script": "https://docs.google.com/document/d/1MPHXBv6GjZAw_n43uA1C1gVnbK3Agf-gZQ9qS5WXZiI/edit?usp=drive_link",
        "worksheet": "https://docs.google.com/document/d/1fJD7t9wsmMYevCajMqQq3RGuLA1IiCm50w4VKBDjLXE/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day07-03-pre-match-prediction.html"
      },
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math.",
        "facilitatorDescription": "Eat and rest. 60-minute protected break. No math talk."
      },
      {
        "name": "Dashboard + Match Rules",
        "mins": 15,
        "block": "Transition",
        "description": "Meet week 2 of the data dashboard and hear the match rules.",
        "facilitatorDescription": "Explain match rules in under 10 minutes: each match is 3 minutes, two bots on a flat field, first bot to push the ball across the opposing end line scores. Walk teams through the Week 2 dashboard before any match starts; devices closed for context first, then open together. Every team enters one practice match row and fills in the Notes field before moving on. Brief the three match rules: 3-minute matches, no mid-match code changes, 30-second dispute window with evidence. Run the post-match protocol four steps in order. Close with the non-optional ready check: each team completes the pre-match checklist out loud before the first competitive match begins.",
        "script": "https://docs.google.com/document/d/1UdA_VLw9w9KdW86dGt7fNlohmnURdLi-xajLQFpfWKc/edit?usp=sharing",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day07-05-dashboard-introduction.html"
      },
      {
        "name": "Season 1 Round-Robin Matches, Day 1",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Three matches, round-robin bracket. Before each match, state your prediction from the data log. After each match, record actual goals and win/loss immediately. Loss-recovery protocol runs for every losing team before the next match -- no skipping it.",
        "facilitatorDescription": "Explain the match cycle once before Round 1 (read prediction aloud, play, record result immediately), then run three rounds. Each round: teams write their prediction before hearing their opponent's, play three minutes, record goals and win/loss in the data log right after. Fill the prediction-accuracy tracking chart across all three rounds. Run the loss recovery protocol between rounds with any team that lost; don't wait until after all three rounds. Close with the leaderboard reveal (best prediction named alongside most wins), then the non-optional exit ticket: prediction, result, gap, and one hypothesis for what caused it.",
        "script": "https://docs.google.com/document/d/1lroWp1H0Omgc33hkRmZWrzq-DX3_e4t3s-jVibIkh6M/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day07-04-match-day-1.html"
      },
      {
        "name": "Leaderboard Reveal + Open Lab",
        "mins": 30,
        "block": "Match-Build-Make / Open Lab",
        "description": "The physical leaderboard goes up on the wall or Velocity Arena Dashboard Leaderboard. Update the dashboard. Then 20 minutes of open bot time: review your dashboard, strategize, or adjust code.",
        "facilitatorDescription": "Post the leaderboard and read every team's row aloud (Wins, Goals Scored, Best Prediction) before explaining what each column means. Spend focused time on Best Prediction: tell students it measures average prediction error (|predicted − actual|), that smaller is better, and that it tracks math accuracy separately from competitive outcome. Name the Best Prediction leader by name. Open Lab follows: circulate for 15 minutes with one question per table, available but not directive. Close with the non-optional Closing Ritual: one math concept, full calculation, written silently, then shared with a teammate in bot terms, collected at the door.",
        "script": "https://docs.google.com/document/d/1a5KUPWHp_fCxAtXL7_0lfCgMAREfU6jWhYTGg3pyfQo/edit?tab=t.0",
        "webpage": "https://velocity-arena-gold.vercel.app/resources/leaderboard-chase-builder.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day07-05-leaderboard-reveal-open-lab.html"
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
        "facilitatorDescription": "Post problem cards around the room, each referencing a real stat from yesterday's leaderboard ('Team A: Speed = 5, scored 3 goals'). Students walk to each card, answer the question on the back (calculate a percentage, write a ratio), and find the matching answer on the next card. Self-correcting chain loop -- if students cannot find the next card, their previous answer is wrong.",
        "script": "https://docs.google.com/document/d/1LsBHj1fZelZGJysKmNXpW42IlD4GokWiVK0D9KvpBYQ/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day08-01-scavenger-hunt.html"
      },
    
      
      
      {
        "name": "Matching Situations, Graphs, and Linear Equations",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Part 1 (20 min): Each team adds their data point to a shared class graph -- Speed on x-axis, Goals Scored on y-axis. Match sets of cards: verbal situations, data tables, and graphed lines. Find which three belong together and explain why. Part 2 (20 min): Use two data points from the scatter plot to write the linear equation -- slope calculated, y-intercept solved. Teams share. Everyone's equation is different. That is the point. ",
        "facilitatorDescription": "Distribute matching card sets and one worksheet per student. Teams match V (verbal), T (table), and G (graph) cards by identifying slope and pattern, then record matches in the worksheet table with written explanations. After a brief physical reset, teams pick two data points from the class scatter plot, calculate slope using the formula, solve for b, write Goals = m × Speed + b, and interpret slope and y-intercept in context. Summarize by comparing two teams' equations, revisiting the Step 3 doubling prediction, and naming why different point pairs produce different but valid equations. Close with the non-optional exit ticket.",
        "script": "https://docs.google.com/document/d/1_NMcPHteA9cyqcFjleHkZkEdTaw29GxEtwPibEvCvU4/edit?usp=drive_link",
        "worksheet": [{url: "https://drive.google.com/file/d/1Dz4v-rCu0t16ssPUBvY1s4SBUafiwud6/view?usp=drive_link", label: "Worksheet"},
          {url:"https://docs.google.com/document/d/1_tLR5byNHvxL2uZcr1Qtv-Ys1TbSgIOlfSmxtn2TvX0/edit?tab=t.0", label: "Cards"}],
        "exemplar":"https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W2_D8-matching-situations-exemplars.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day08-02-matching-situations.html"
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
        "facilitatorDescription": "Run two rounds of head-to-head matches using the same cycle as Day 7, with one change: teams generate predictions from their scatter plot equation (y = mx + b, Speed allocation as input) before each round. Don't start Round 1 until every team can state their prediction source and has a written equation-based prediction. After each round, teams record goals and outcome immediately; run the loss recovery protocol with losing teams before Round 2. After both rounds, verify every data log has two filled rows and every dashboard is updated. Close with the leaderboard reveal (name the Best Prediction leader), one connecting question, and the non-optional exit ticket: one sentence in the data log before Rivalry Cards materials are distributed.",
        "script": "https://docs.google.com/document/d/1cDzAaPXt3_Dw0tMcW1HhyzLZHhy476vrmZ--eLWcdE0/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day08-03-match-day-2.html"
      },
    
      {
        "name": "Rivalry Cards",
        "mins": 20,
        "block": "Match-Build-Make",
        "description": "Each team writes one trash-talk card to a specific rival. One rule: the trash talk must cite a specific stat or data point from the dashboard. 'Your Endurance = 3 means your bot slows at minute 4. We will be ready.' No data, no card. Post on the wall.",
        "facilitatorDescription": "Announce the Rivalry Card activity and state the one rule: every claim must cite a specific stat or data point; no data, no card. Model one example on the board. Teams write their cards and post them on the wall. Check cards as they go up; any card without data gets sent back for revision. Cards that pass stay on the wall as permanent artifacts for the rest of the program.",
        "script": "https://docs.google.com/document/d/1nPSD1hV8jj-v_G17Ylau1FFYMEIzU446v00SRzFM4dg/edit?usp=drive_link",
        "exemplar": "https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W2_D8-rivalry-cards-exemplars.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day08-04-rivalry-cards.html"
      },
    
      {
        "name": "Day 8 Open Lab",
        "mins": 25,
        "block": "Open Lab",
        "description": "Track A (Data Dive): Review your scatter plot equation against today's match results. Does the line fit the new data points? Note one variable your equation is not capturing. Track B (Bot Lab): Adjust one MakeCode setting and run the bot for 90 seconds. What changes? The 25 minutes is short today.",
        "facilitatorDescription": "Direct teams back to the linear equation they wrote in the morning and ask them to compare it against today's match results: does the equation still hold? Circulate and ask one question per team: your linear equation predicted X, and does today's result support that model or contradict it? Before the session ends, remind teams to prepare Formula Race Cards for the next session."
      }
    ],
    "produce": [
      "Scavenger Hunt answer sheet — calculations completed at each posted problem card",  
      "Class scatter plot — team's data point added (Speed allocation vs. Goals Scored)",  
      "Card sort — verbal situations, data tables, and graphs matched",  
      "Linear equation — slope and y-intercept calculated from two scatter plot points; written in slope-intercept form",  
      "Match data log — equation-based prediction before each match; actual result after (two matches)",  
      "Rivalry card — one trash-talk claim citing a specific stat or dashboard number, posted on wall" 
     
    ],
    "endBufferMins": 10,
    "ends": "Each person rates today's team collaboration 1--3. Hold up your number at the same time. If anyone holds up a 1, talk for exactly 2 minutes about what happened. You have 5 minutes total. |",
    "funElement": "Rivalry cards activate today. Leaderboard updated after matches.",
    "los": "LO 2.3 (scatter plot of Speed vs. Goals Scored with equation from two data points); LO 5.2 (scatter plot built from dashboard data, labeled); LO 7.1 (equation-based prediction logged before match)",
    "facilitatorRisk": {
      "risk": "Part 1 \"matching\" activity feels like a worksheet and students rush through the matching to get to the graph, losing the representational translation work that is the core of the session.",
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
        "facilitatorDescription": "Give each team the rivalry card directed at them and direct them to open their dashboard to verify every cited number. If the trash talk is factually wrong, mark it with a sticky note saying 'check your data' and write the correct number. If accurate, the team names one stat where they beat the rival and how they'll use it on Match Day 3 (e.g., 'They're Speed 8, we're Speed 6, so we can't win a straight race. But they're Turning 3 and we're Turning 6. We'll play tight and force turning battles where we win.'). Circulate and keep it analytical -- is the number right, and where in the dashboard did you verify it. Run peer-to-peer; facilitate process, not content.",
        "script": "https://docs.google.com/document/d/1eP8t3uCa2TjUVkS6a5wyDKHBfYIUqCkXeM0nGRysT4o/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day09-01-rivalry-card-response.html"
      },
    
      {
        "name": "Formula Relay: All Five Types in One Race",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Twenty problem cards, face down, shuffled across six formula types: Speed proportionality, Endurance decay, Turn Ratio / Arc Segments (2 cards), Power² charge speed, follow through (Power x 80), budget constraint, and Proportional Scaling (2 scoop-scaling cards -- determine whether scaling one or both scoop dimensions is proportional). Flip one, solve it as a team, bring it to the facilitator. Correct work gets a stamp. First team to finish all 20 with fewer than 3 errors wins. After the race, sort your cards into six piles and count errors per type. Your weakest type is today's focus -- use it for today's pre-match prediction. Prediction logged before the match. No exceptions.",
        "facilitatorDescription": "Solve all 20 cards yourself before class (including the four two-step Budget cards), then set up the stamp station, the 6-row tally chart, the six sort labels (Speed, Endurance, Turning, Power, Follow-Through, Budget), and a finish-time board. Run a 5-minute Launch, then teams of 3 race for a fixed 22 minutes solving 20 shuffled cards. Each card comes to you with written work; stamp it only if correct and complete, or hand it back saying only 'check your work' for one more attempt. Stay at the stamp station the whole race, tally returned cards by type, and post finish times. After the race, teams sort cards into six piles and count unstamped cards per type. In Summarize, name the highest-error types and surface that five formulas are linear but Power (P²) is quadratic. End with the non-optional Exit Ticket: a Match Day 3 prediction using each team's weakest formula type, formula stated, substitution shown, and one interpretation sentence.",
        "script": "https://docs.google.com/document/d/1Ec2G293mPaGajilq-H2jMTSDgBCMNziSXGasL7Bd5wE/edit?usp=drive_link",
        "webpage": "https://velocity-arena-gold.vercel.app/resources/formula-race-cards.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day09-02-formula-relay.html"
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
        "facilitatorDescription": "Teams play three 3-minute matches, predicting their score before each one using their weakest formula type from the morning relay. After each match, they compare prediction to actual. If the gap is more than 20%, they write one sentence naming the specific model input their prediction got wrong (a coefficient or assumption like decay rate, slope, or which stat they over-weighted), not a vague outcome like 'we scored fewer goals.' After each loss, run the loss-recovery protocol: acknowledge the frustration, walk the team to the formula to find the one input that was off, and have them name what they'll change next round. Near the end, every team reviews all three matches and fills in a sentence for any gap over 20%. Close by reading the leaderboard, starting with Best Prediction rather than Wins.",
        "script": "https://docs.google.com/document/d/1D1CHjrAQSb-416lwkp8oU7HxM79GZYlLDU7Fih8qmc4/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day09-03-match-day-3.html"
      },
    
      {
        "name": "Open Lab: Post-Match Debrief and Free Code",
        "mins": 40,
        "block": "Open Lab",
        "description": "Track A (Data Dive): Look at your three match results. Does any pattern in the data suggest a loadout adjustment? Write one hypothesis entry in the dashboard: 'If we change [stat] from [X] to [Y], we expect [specific outcome] because [cited data].' Track B (Bot Lab): Run the bot and experiment with whatever you want. If you find something useful, it goes in your journal before you leave.",
        "facilitatorDescription": "Each team has 10 minutes to find one pattern in the other team's data (not a result, not advice) and write it on an index card using the frame 'We noticed [specific pattern]. This matters because [implication].' Push them past surface results toward patterns that compare a fixed stat against a changing performance outcome, or compare two stats to find which one limits performance, always backed by a number. Teams read their cards aloud to the team whose data they analyzed. Then lead a debrief where three teams share findings from simplest to most complex. Close with the consolidation about what makes a finding specific. End with the non-optional exit ticket: one finding sentence and one hypothesis for tomorrow ('If we change [stat] from [X] to [Y], we expect [outcome] because [data]').",
        "script": "https://docs.google.com/document/d/15gZrKNFwogagCQQUGQOWAwVur95G9jX9lQ1tpNBYhuc/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day09-04-open-lab-post-match.html",
        "exit":"https://docs.google.com/document/d/16PB8rDAAedy88v8A6hx23gmnQqIKfgN1eD22wc60i2c/edit?usp=sharing"      }
    ],
    "produce": [
      "Sticky note — rival's card annotated with accuracy check; corrected calculation written if wrong",  
      "Formula Relay written work — 20 problem cards solved and stamped; error count per formula type",  
      "Pre-match prediction — calculation from weakest formula type logged before match",  
      "Match data log — prediction and actual for each of three matches",  
      "Written sentence — variable the model missed (for any match \>20% off prediction)",   
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
        "facilitatorDescription": "Ask each team to write their single best Season 1 match on an index card (stat configuration and result) and post it on the wall. Students walk the room and read every card. Give each student a dot sticker and explain the vote: not who won the most matches, but who learned the most from one match result. After voting, read the tally aloud and name why the winning card represents the kind of mathematical thinking the whole program is built around.",
        "script": "https://docs.google.com/document/d/1xMUVjmU2S0wIzAEcFF8N4Gx7ol96ItPGM5AMiu8rI-g/edit?usp=drive_link",
        "exemplar": "https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W3_D10-best-match-gallery-walk-exemplars.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day10-01-best-match-gallery-walk.html"
      },
     
      {
        "name": "Distance Formula: How Far Did the Ball Travel",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Three coordinate positions anchor the whole activity: A = (4,2) tip-off, G = (8,2) goal center, B = your team's estimated ball-landing point from a Season 1 match. Using d = sqrt((x2-x1)^2 + (y2-y1)^2), calculate three distances: A to G (set up the formula, then confirm the horizontal shortcut gives the same answer), A to B (full formula), B to G (estimate first, then calculate). Then: write a one-sentence comparison of movement vs. useful progress, calculate your efficiency ratio (useful progress divided by total movement), use it to estimate the minimum number of charges needed to score from A, and write one sentence naming which stat allocation drove that number.",
        "facilitatorDescription": "Students use the distance formula to measure their best charge from Season 1: ball starts at A (4,2), goal at G (8,2), team estimates ball-landing point B. Work through a 10-step worksheet to calculate A→B, A→G, and B→G, an efficiency ratio (how much movement actually shortened the distance to the goal), and the theoretical minimum kicks to score. After a 5-minute launch and hard stop, teams work for about 20 minutes while you circulate, watching for the common errors (squaring the sum instead of each difference, skipping the final square root, inverting the ratio) and flagging any team whose ball ended up farther from the goal. In summary, three teams share in order: why the A-to-G shortcut works algebraically, a counter-intuitive case, and the efficiency ratio and minimum kicks. Close with the Big Idea: hitting farther doesn't always help. Non-optional exit ticket required.",
         "script": [
          {url: "https://docs.google.com/document/d/1lRKCnAD5SpXp7_wdQIluC7-JFSzYTQHtmj1mScfo_5M/edit?usp=sharing", label: "Script"},
          {url: "https://velocity-arena-gold.vercel.app/resources/teacher-guides/launch-strategies.html", label: "Launch Strategies"}
        ],
        "worksheet": "https://drive.google.com/file/d/1reQoXFXaUQ-FidUnysXkSfSf9mAlaiz0/view?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day10-02-distance-formula.html",
        "exemplar":"https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W3_D10_Distance_Formula_Shortest_Path.html",
        "exit":"https://docs.google.com/document/d/1_7vn0APALILJ1_RhcentRcNefrvXIhIMttt3RKbMQZg/edit?usp=sharing"
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
        "facilitatorDescription": "Distribute the Cold Recall Check and read the framing: five questions, 10 minutes, individual work, no notes, no devices, no grade. Write all five questions on the board. Students work alone for eight minutes with no bot, notes, or devices. Circulate slowly and fill in the monitoring chart, marking any student who leaves a question blank by the five-minute mark; do not answer math questions, even if asked. Call pencils down at minute nine. Students self-check. Read answers to Q1–Q3. Pause on Q4: read the answer, ask one discussion question about how students knew to set the function to zero, name the move as finding a zero of a function, then read Q5. Close with a consolidation line and an open invitation for anyone who struggled with Q4 to find you during Open Lab.",
        "script": "https://docs.google.com/document/d/1024tZLvwZFUNsyWOCjqZPvSyYATN3y7V_JNpg0d78MU/edit?usp=drive_link",
        "worksheet": "https://drive.google.com/file/d/1vWkVXoyWBPglVvLyA4tca0BKgmr88F6I/view?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day10-03-cold-recall-check.html"
      },
   
      {
        "name": "Season 1 Final Round",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Final round-robin matches. Loss-recovery for every losing team. After all matches: complete data dashboard —win/loss by stat matchup. Leaderboard final Season 1 update.",
        "facilitatorDescription": "Teams play their final three Season 1 matches, but the data analysis is the main event, not the matches. Open with a 10-minute audit: before any bot runs, each team calculates their average prediction error across the three prior match days, notes whether they consistently over- or under-predicted, and decides whether they are improving, worsening, or flat. Then run three short rounds. Before each match, teams predict using their Day 8 scatter plot equation; after each, write one sentence on whether the result fits their season pattern. Hard stop at minute 36. Spend 25 minutes on the analysis block (calculate average error and trend, identify the one input variable the model keeps missing, build a Season 2 hypothesis with an actual equation calculation). Teams pressure-test each other's hypotheses for one specific mathematical objection. Close by naming the practice as residual analysis. Non-optional exit: final hypothesis in 'If I change [stat] from [X] to [Y], my equation predicts [result], which addresses [the residual pattern].'",
        "script": "https://docs.google.com/document/d/1nDIFSSs9hH2m1YF55zIwJxYLpvB6c4gepoi7yyzRj_c/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day10-04-season1-final-round.html",
       "exemplar":"https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W3_D10_AnalysisBlock_Exemplars.html",
       "exit": "https://docs.google.com/document/d/107J961KuTWvqb6B6CFyopDkdD8PnyV-9RjHNZ7TnLkM/edit?usp=sharing"
      },
      {
        "name": "Open Lab: Season 2 Planning",
        "mins": 30,
        "block": "Open Lab",
        "description": "Track A (Data Dive): Look at your Season 1 data. If you could change one stat allocation for Season 2, what would it be and why? Write it as a hypothesis with a data justification. Track B (Bot Lab): Test the loadout change you are considering before committing. Run it live and observe. Then write the hypothesis entry. Physical testing before committing is legitimate analytical work, not avoidance.",
        "facilitatorDescription": "Teams use complete Season 1 data to write at least one Season 2 hypothesis backed by a number. Open in 3 minutes: name the two tracks and read the hypothesis format on the board, 'If I change [stat] from [X] to [Y], then [predicted outcome], because [specific number from your dashboard].' Confirm all three parts before saying go. Track A is data-first: open the Season 1 dashboard, find a stat to change, write a hypothesis citing real matchup data. Track B is bot-first: test the change in MakeCode, but only after writing the hypothesis. Teams work for about 30 minutes while you point teams to the win/loss by stat matchup column rather than telling them which stat to change; make any Track B team with no hypothesis put the bot down until they have one. Run a 5-minute pair-share where adjacent teams check each other's stat change and citation. Close by naming the practice and reminding them Season 2 allocation locks Monday.",
        "script": "https://docs.google.com/document/d/1GkIgRVtmJvsugSYWpLDG2Xzz8zalIqUKgm22L55SkRs/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day10-05-open-lab-season2-planning.html"
      }
    ],
    "produce": [
      "Index card — best Season 1 match: stat config and result, posted for gallery walk",  
      "Dot-sticker vote — placed on one other team's card",  
      "Distance formula worksheet — three distances calculated on 8×4 field; summary table completed",  
      "Written reflections — charge efficiency, charges-per-goal estimate, formula limits, one stat to adjust with tradeoff",  
      "Cold Recall Check — five individual math problems on paper (no grade)",  
      "Data dashboard — final Season 1 entries: goals per minute, win/loss by stat matchup",  
      "Season 2 hypothesis entry — one stat change with data justification"
    ],
    "ends": "Describe a mistake your team made this week that led to something better. Be specific: name the mistake, describe what happened because of it, and say exactly what you changed. You have 5 minutes. |",
    "funElement": "Season 1 closes. Final leaderboard update creates stakes and sets up the Week 3 Commissioner's Week power shift.",
    "los": "LO 3.2 (distance formula deepened: applied to three match-data coordinate pairs, discrepancy sourced); LO 5.1 (complete dashboard, no blanks); LO 7.2 (post-match revision entries with data justification); LO 9.1 (Week 2 journal: a specific mistake named, consequence described, change recorded)",
    "facilitatorRisk": {
      "risk": "Students treat this as a new formula they have never seen, bypassing the Day 3 embodied experience. The formula is not new -- they used it on the life-sized grid on Day 3. Reconnect explicitly before calculating.",
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
        "facilitatorDescription": "Students open Week 3 by making a public claim and then testing it against data. Run a tape line across the room labeled 'least important for winning' to 'most important.' With no data in front of them, each student writes on a sticky note the one Season 1 stat they believe mattered most for winning, then stands on the line at the point that shows how strongly they believe it. Flag the key distinction up front: the question is which stat mattered for winning, not which they allocated the most to. Read the distribution aloud, note clusters and gaps, then teams open the dashboard for a 3-minute cross-team data check (since allocation is fixed): did the teams with the best win records allocate more to that stat than the worst? Close by noting whether anyone chose Budget. Non-optional exit ticket: 'The stat that mattered most for our Season 1 results was _____ because our data shows _____.'",
        "script": "https://docs.google.com/document/d/1d7vhhtcpL9ZhEbacI4QChLFig33nDHQgb2pGtZjzpg8/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day11-01-human-number-line.html"
      },
   
      {
        "name": "Proportional Scaling: Scaling Your Stats + Commissioner Proposal Prep",
        "mins": 45,
        "block": "Challenge Block",
        "description": "Phase 1 (20 min): Calculate what happens to bot behavior when a stat is scaled by 50%. Speed is proportional -- 50% more Speed gives 50% more motor power. Power is not -- charge speed = Power², so 50% more Power gives more than 50% more charge speed (quadratic). Phase 2 (25 min): Draft a rule change proposal using those scaling calculations as data evidence. Back it with at least two numbers from your dashboard, and make sure the change addresses how the team currently in last place is affected.",
        "facilitatorDescription": "Start by asking students to predict the answer, then have them explain the question back before anyone calculates. Make sure they can say they are finding percent change, not raw difference or new value. Give teams 12 minutes on the interactive scaling tool and circulate while they run the four steps for two stats: original output, scaled stat, new output, percent change. Track who lands on the key contrast: Speed scales proportionally, Power does not (50% in gives a 125% jump). Watch for the two common errors and redirect with a question rather than the answer: writing raw difference instead of percent change, and using Power × 5 instead of Power × Power. Run an 8-minute summary by calling on three teams in order. Give 13 minutes to draft a proposal and confirm each has a rule that caps or floors a stat, two cited data points with the formula math shown, and the effect on the last-place team. Close with a verbal exit check.",
        "script": "https://docs.google.com/document/d/1s9wUXxuyLnXP-TNXoZV22tcXRDgv5g6wBUYuzYEQjk8/edit?usp=drive_link",
        "worksheet": "https://drive.google.com/file/d/14uTaGn7Zv2sGw_Xo4yJN90oteLD1qaBh/view?usp=drive_link",
        "webpage" :["https://velocity-arena-gold.vercel.app/lessons/proportional-scaling.html",
          "https://velocity-arena-gold.vercel.app/lessons/day11-commissioner-proposal.html"
        ],
        "exemplar":"https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W3_D12_Commissioner_Proposal.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day11-02-commissioner-proposal-prep.html"
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
        "facilitatorDescription": "If there is no clear last-place finisher, disregard the Underdog Mechanic. Otherwise, announce it: point to the Season 1 leaderboard, name the last-place team, and tell them they get 2 bonus stat points so their four stats now add up to 22 instead of 20. Split the class: the last-place team rebuilds its allocation to total 22; everyone else pulls out the Commissioner proposal they wrote that morning and checks one thing -- if their rule passes, does their own Season 1 allocation still satisfy it? Before anyone changes a number, every team writes their Season 1 values in Section 1 of the worksheet. Give 15 minutes and ask teams to show the math, not just the decision. For the Underdog team, check that stats sum to 22 and push them to calculate new Motor Power and Charge Speed. If teams argue the bonus is unfair, give 60 seconds, then ask them to prove with data whether the last-place team is actually a threat. Required exit ticket: every student completes the Performance Hypothesis sentence in Section 3 with both formula calculations and a real tradeoff.",
        "script": "https://docs.google.com/document/d/1uub9UpMbQF4he0B55d5SCFc8Jg7RbYljg-A5i_nHo9E/edit?usp=drive_link",
        "worksheet": "https://docs.google.com/document/d/1uUZX29Zj8tEQ64mf7fKm0PYlzEpkn-2LqDcZBG8Vg4k/edit?usp=sharing",
        "exemplar":"https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W3_D11_Reallocation.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day11-03-underdog-mechanic-reallocation.html"
    
      },
   
      {
        "name": "Practice Matches: Test New Loadout Hypotheses",
        "mins": 60,
        "block": "Match-Build-Make",
        "description": "No formal scoring. You program and test adjusted loadout ideas and record observations as 'hypothesis' entries, clearly labeled so you can compare to Season 2 actuals.",
        "facilitatorDescription": "Tell teams their Season 2 allocation locks Monday, so today's runs are their only chance to test it. There's no scoring; every run is a hypothesis test. Read the format on the board and confirm the rule: write the hypothesis before the run, then record result and conclusion after. If they run without writing the hypothesis first, the run doesn't count. Before saying go, walk the room and make sure every team has circled the stat their Commissioner proposal is about so their first run tests that stat. Give about 50 minutes for four runs. Before each run, have one person read the hypothesis aloud (which stat, changing from what to what, expected outcome, Season 1 evidence). As soon as a run ends, have them record the result, then circle whether the result supports or changes their proposal. Watch for vague hypotheses, teams confirming after one run and stopping, and teams that have run twice but written nothing. At the 5-minute warning, fill in the Commissioner Proposal box at the bottom of page 2. Every team needs at least two complete entries.",
        "script": "https://docs.google.com/document/d/1QK0sXYtio3-xe9AvlD6CAjnb8aiU7-ySLg4f0y5ZYp8/edit?usp=drive_link",
        "worksheet": "https://drive.google.com/file/d/1cfqrijvga8RXYGEP_Pa8DeN5Pv3CXZlf/view?usp=drive_link",
        "exemplar":"https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W2_D11_PracticeMatches_Exemplars.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day11-04-practice-matches.html"
      },
    
      {
        "name": "Open Lab: Commissioner Proposal Refinement",
        "mins": 40,
        "block": "Open Lab",
        "description": "Verify every number in your draft proposal against the actual dashboard. Are your two cited numbers accurate? Does your rule change genuinely help the last-place team?",
        "facilitatorDescription": "Direct teams to verify every number in their draft proposal against the actual dashboard, answering two questions: are the cited numbers accurate, and does the rule change genuinely help the last-place team or only the proposing team? Open with one sentence and a quick partner check, then send teams to their proposal and the dashboard. Ask each team which dashboard row they are checking and whether their number has changed since the morning. On the second pass, focus on teams whose second check is thin and have them show in the dashboard where the last-place team improves. Force a percent change: a number that lives only on the worksheet doesn't count until they find it in the dashboard, and 'it helps them' doesn't count until they calculate how much using (new − old) / old × 100. Raise the conflict-of-interest case now if a rule helps the proposing team more. Before anyone leaves, confirm every team has at least one dashboard-verified number and a written percent change.",
        "script": "https://docs.google.com/document/d/1lfFv6i-y2nMuwujLECd2zdS1AszyAJWGnU2m4p2deOc/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day11-05-open-lab-proposal-refinement.html"
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
        "facilitatorDescription": "Give teams 10 minutes to circulate in informal conversation, pitching their proposal to other teams: here is our proposal, here is the number behind it, what do you think? Circulate but do not engage with proposal content; if teams try to recruit your support, redirect with 'tell them, not me.' After 10 minutes, teams return for 11 minutes of final revision based on what they heard. Call time firmly, then run a quick exit check where every team names the one math concept its proposal uses before proposals lock.",
        "script": "https://docs.google.com/document/d/1l06bjK0a6reS5dN-4UL5IPTkn3-ICBddpaWUmpTLjPw/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day12-01-lobby-commissioners.html"
      },
   
      {
        "name": "Final Proposal Verification",
        "mins": 35,
        "block": "Challenge Block",
        "description": "Check every number in your proposal against the actual dashboard. Is the data accurate? Does the rule change genuinely help the last-place team, or does it just help your team? Revise if needed. Your facilitator also checks Criterion 6: at least one of the following concept types must be named in the proposal -- proportional scaling, unit rate, ratio, slope as rate of change, or linear decay. Your facilitator asks one student per team: 'How did you calculate this number? What kind of math is that?' before the meeting starts.",
        "facilitatorDescription": "Give teams 35 minutes to check every number in their proposal against the actual dashboard. Four jobs: confirm both cited numbers are real, calculate how much the rule helps the last-place team, confirm it doesn't help their own team more, and name the math concept behind it. Circulate and check the work, pointing to a discrepancy rather than fixing it, and flag the common math errors (dividing by the after value, or comparing raw point gains instead of percentages). You don't judge whether the argument is persuasive, only whether the numbers are true and the rule actually favors the last-place team. With 5 minutes left, point at one number per team and have one member explain from memory how they got it and name the concept. Close by having every team write their final percentage and circle their concept on the paper sheet they'll carry to the meeting.",
        "script": "https://docs.google.com/document/d/1rZES5FM1sbJcv16FcgLuV0mhrjpyPj2OaPZU_F1rJng/edit?usp=drive_link",
        "worksheet": [
          {url: "https://drive.google.com/file/d/1qo0mU3TaRm6FtdbtVPcP91hABGDTF0R-/view", label: "Final Proposal Verificatio"}
        ],
        "exemplar":[{url:"https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W3_D12_Commissioner_Proposal.html", label: "Commissioner Proposal Exemplar"}],
      
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day12-02-final-proposal-verification.html"
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
        "facilitatorDescription": "Run the formal vote where teams turn proposals into permanent Season 2 rules. Before the first presenter, confirm every team has its Math Verification Sheet and explain the job: while one team presents, everyone else writes down the two numbers cited and checks the percent-change math themselves. Open with voting procedure: each team gets 3 minutes, the proposing team does not vote on its own rule, and a rule passes on a majority of the others. Put a mid-confidence team first, not the strongest. For each presentation, hold the 3-minute limit hard, then ask 'can anyone verify the math?' and wait before opening the vote. If a rule passes, write it on the wall in marker exactly as worded, then open a 2-minute objection window (only counts if it names a number and shows the rule hits at least 10 percentage points harder than the median). Once all proposals are done, read passed rules aloud and have every team revise their Season 2 allocation to satisfy all of them at once, summing to 20 (or 22 for the Underdog team). Required exit ticket: each student calculates a percent change for a capped stat and writes one valid allocation that satisfies every rule.",
        "script": [
          {url: "https://docs.google.com/document/d/11b4vHFTJAh9U815GM9ss0bsvUEQsRfxzD0WYuLgc_58/edit?usp=drive_link", label: "Script"},
          {url: "https://docs.google.com/document/d/1XRI6UGVz5gP-G1TY3OUG_GfU_hDZR-HMRoM6AKoUqnk/edit?usp=sharing", label: "Reference"}
        ],
        "worksheet": [
          {url: "https://drive.google.com/file/d/1m0dKkHePqrGNFBBbIB9WW59vyzQxcy6q/view?usp=drive_link", label: "Commissioner Meeting Log"},
          {url: "https://drive.google.com/file/d/1QdinXdgVyujgEAWQbub73XnA1iUFN0Wx/view?usp=drive_link", label: "Math Verication"}
        ],
       "exemplar":[{url:"https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W3_D12-math-verification-exemplars.html", label: "Math Verification Exemplar"}],
       "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day12-03-commissioners-meeting.html"
      },
     
      {
        "name": "Open Lab: Season 2 Allocation Verification",
        "mins": 35,
        "block": "Open Lab",
        "description": "Verify your Season 2 allocation calculations. Program the new loadout into MakeCode. Run one test drive to confirm the code matches the math.",
        "facilitatorDescription": "Before class, open the Facilitator Setup, enter the rules that passed and each team's starting stats, and send the shareable link. Post the three steps. Open with one sentence acknowledging the vote, then have each team count how many rules they must satisfy at once. Step 1, verify the loadout in the recalculator: students enter a new allocation that satisfies every rule and still sums to 20 (or 22 for the Underdog team); circulate and push past minimum-hitting by having students read the formula-impact table and notice trade-offs. If a team's rule minimums add up to more than 20, the rules conflict; flag it to the room. Step 2, program MakeCode with one reading values aloud and another checking against the tool. Step 3, one controlled test drive while you ask what should look different from Season 1, with one observation logged whether or not it matched the prediction. Two-question exit ticket: hardest constraint as an inequality, and confirmation that the final allocation satisfies every rule.",
        "script": "https://docs.google.com/document/d/1rQO_FefyE0XsqYJGit2EcfBexmNWm_vQEcS0WyKXOuA/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day12-04-open-lab-s2-verification.html",
        "exit":"https://docs.google.com/document/d/1mreyR2RmUD6DKjmsZzAhMYzV28-sPFNdOVrc3Ekh11A/edit?usp=sharing"
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
    "funElement": "Commissioner's Meeting is the highest-agency moment of the program. Students author the rules of their own game using data they collected.",
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
        "facilitatorDescription": "Before Season 2 starts, have each team write one number on an index card: how many matches they will win, with the match total posted on the board. Spend about 30 seconds reminding them of their Season 1 record, then read the task: one number, not a range, based on a real Season 1 fact (win total, win rate, or a stat they changed). They'll defend it out loud and shouldn't look at other teams' cards. Give three silent minutes and step back. Watch for ranges, peeking, and stuck teams; redirect with one question each. Run the simultaneous post: once every team has a number, count to three so all cards go up at once. Give 30 seconds of silence to read the wall, then ask 'What do you notice?' Go around once, about a minute a team, asking each what Season 1 number led to that prediction. Tape the cards down for Day 14.",
        "script": "https://docs.google.com/document/d/1uWzF6XEpkiSSJwPvIaGsZD4AqImzyNvTC5vtt3aAF6I/edit?usp=drive_link",
        "webpage":"https://velocity-arena-gold.vercel.app/lessons/day13-linear-equations.html",
         "exemplar":"https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W4_D13-prediction-market-exemplars.html",
         "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day13-01-prediction-market.html"
      },
      
      
      {
        "name": "Building and Solving Linear Equations",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Part 1: Using your Season 1 + early Season 2 data, write the equation that predicts your win probability. Choose two past data points. Calculate the rate of change (slope). Calculate y-intercept. Write the equation in slope-intercept form. This is student-generated, not formula-imposed. Part 2: Test your equation against two past matches. Calculate the residual (predicted minus actual) for each. Third question: calculate wins per Speed point (Season 1 total wins / Speed stat) as a unit rate. Report your two residuals and unit rate to the class. No two teams have the same equation. That is the point.",
        "facilitatorDescription": "Post the class data on the board first: each bot's stat value and its Season 1 Win%, not raw wins. In the first 5 minutes, explain that x is a bot's stat value and y is its Win%, and set up the key move: each team picks two bots to build a line, then tests it on a third bot it has not touched. Before they pick, stop the class and have each team check that their chosen stat actually varies across the class; if it clusters, send them to a stat with more spread. During the 25-minute build, let the HTML page walk teams through the steps while you catch the two errors the script flags as lesson-breaking: using raw wins instead of Win%, and picking two bots too close together. In the test phase, the page calculates the prediction and residual; your job is to catch teams testing on a bot already in their equation and to hold prediction language ('predicts approximately,' not 'will win'). Close with three share-outs and the non-optional Match Gate where every team posts its prediction sentence before it can play.",
        "script": "https://docs.google.com/document/d/1F-g0L6Z_d2klUamK6SFWQSTv7J6Zg4SPUqTAzzHDibc/edit?usp=drive_link",
         "exemplar":"https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W4_D13-linear-equations-exemplars.html",
      "worksheet": "https://drive.google.com/file/d/1YDfUjSl0OVNG0vXNUMXGFsmKiLngEjb9/view?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day13-02-linear-equations.html"
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
        "facilitatorDescription": "Run three rounds of commissioner-governed matches across 90 minutes. Open by naming the four things that change in Season 2: teams use their equation to predict real match outcomes, the ball changes each round, the commissioner rules are binding, and after a loss a team must pick which of three reasons explains the miss. Before every match, run the prediction ritual: each team reads its equation, plugs in the opponent's stat value, and writes a win-probability number. After each match, have everyone record the result; the losing team runs loss recovery by naming one of three reasons the prediction missed (wrong slope, wrong x estimate, or the ball mode changed what wins) — the ball-mode reason is only valid in Rounds 2 and 3. Announce the ball mode before Rounds 2 and 3, not after: ping pong rewards Turning, tennis rewards Power. Call any commissioner-rule violation as you see it. Close by reading the prediction market aloud against each team's card. Non-optional exit ticket: round, prediction direction, which of the three reasons explains the miss.",
        "script": "https://docs.google.com/document/d/18HoVS51dmWMg0yHU5rjWg6EY7Uz4MAjbJ-cPaOmZavU/edit?usp=drive_link",
        "worksheet": "https://drive.google.com/file/d/1PyvRiYtekLjuZ6AQ8Lm18YR3p5kkEQ_y/view?usp=drive_link",
        "exemplar":"https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W4_D13_LinearEquations_Exemplars.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day13-03-s2-match-day-1.html"
      },
    
      {
        "name": "Open Lab: Residual Logging and Match Review",
        "mins": 35,
        "block": "Open Lab",
       "description": "Calculate residuals from today's matches, identify emerging error patterns, and write a question for further investigation. No equation changes are made today.",
      "facilitatorDescription": "After the matches, give each team 35 minutes to record results and describe what they saw. Step 1: write the prediction made before each match and the actual result beside it. Step 2: calculate the residual for each match (predicted minus actual) and write the direction, too high or too low. Step 3: write one sentence describing the pattern you notice, or write that you cannot see a clear pattern yet in three results. Step 4: write one question you want the next match day to answer, specific enough that another match result could actually change your answer. Tell teams plainly that three matches is not enough to change the equation yet, and that revision comes tomorrow with six results. Clear early finishers to the Skills Arena. Before anyone leaves, check the data log for four things: three residuals written, three directions labeled, one pattern sentence, one question for tomorrow.",
       "script": "https://docs.google.com/document/d/1U0cbB9ixVtfxtBcDY4yKjn54nQCvgR497j4teWAtD2A/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day13-04-open-lab-residual-calibration.html"
      }
    ],
    "produce": [
      "Prediction Market index card — \"We will win [X] of [Y] matches,\" posted publicly",
      "Win-probability equation — slope and y-intercept from two past data points; written in slope-intercept form ", 
      "Two residuals — predicted minus actual for two past matches",  
      "Unit rate — Season 1 wins ÷ Speed stat calculated",  
      "Match data log — prediction and ball mode before each match; actual result and residual after",  
      "Dashboard entry — Season 2 residuals compared to Season 1"
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
        "facilitatorDescription": "Run a 25-minute binding resource competition where teams spend tokens on stat upgrade packages and justify any prediction revision with a specific dashboard number. Before the activity, distribute tokens (3 per team, 4 for last place), post the five package cards, confirm Day 13 Prediction Market cards are on the wall, and identify the last-place team. Open by connecting to Day 11: Speed multiplies motor power by 5, Power scales as a square. Read the four auction rules once, run one comprehension check on Rule 2, then give 30 seconds of silent think time before bidding opens. Run each package in order: hold up the card, teams decide silently, reveal bids simultaneously on your call, highest bid wins, ties go to a coin flip. Winner updates allocation immediately; verify it sums to 20 before the next package opens. Then open the Prediction Check: 5 minutes, two requirements to revise (one specific dashboard number and one sentence connecting it to the new win total, written in pen on the posted card). In the wrap, read all Prediction Market cards aloud. Non-optional exit check: each team states what stat changed and what that does to the formula output before the first match starts.",
        "script": "https://docs.google.com/document/d/1I0rnGaWYvPDzWDUkHi0JcHJqQRY5i3pHKwyRMeUvF_U/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day14-01-stat-auction-prediction.html"
      },
    
      {
        "name": "Percent Change: Season 1 to Season 2 Configurations",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Using your Season 1 and Season 2 allocations, calculate the percent change for each stat: (new - old) / old x 100. Compare results as a room. Then answer the harder question: is percent change proportional? If your Speed went up 50%, will your wins go up 50%? The answer depends on which stat changed and how the bot formula works. Match Day 2 this afternoon is the test.",
        "facilitatorDescription": "Write the percent change formula on the board before the activity: (S2 − S1) ÷ S1 × 100. Open by asking what happened to distance when Speed went up 50% on Day 11; have students say the answer out loud to the person next to them. Walk through Speed 4→6 on the board together, one step at a time. Stop for one round of questions, defer anything about proportionality, then release to 30 minutes of individual work. Circulate immediately. The error to catch first is the denominator: students divide by Season 2 instead of Season 1. If most are stuck at Step 3 at the 10-minute mark, stop the room and re-demonstrate that step. At minute 38, run the proportionality discussion with the Power counterexample (50% Power increase gave 125% more charge speed because Power squares). Send them to Panel 4 to test with the slider for two minutes. Close with: percent change tells you how big the move was, not whether it was worth it. Exit ticket on Endurance 6→3 and the 40% Power question.",
        "script": "https://docs.google.com/document/d/1PlloMgcESCqaVKsR6vPlfiRaLW5V3OLrlG-r6P9k_-g/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day14-02-percent-change-s1-s2.html"
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
        "facilitatorDescription": "Before the session, put ping pong balls on every field and take off all foam and tennis balls. Post the sign that today's ball is ping pong. Confirm every auction winner has their updated stats entered in MakeCode; read the values yourself, do not accept 'I think it's right.' Open by having everyone look at their Match Day 1 Prediction Tracker for 15 seconds to find their last residual. Then say the ball stays the same all day, and that the Best Model badge goes to the team whose final record is closest to their prediction card, not the team with the most wins. Read the commissioner rules aloud once and move on. Before every match, run the prediction ritual: each team looks at their last residual, decides whether the next prediction goes up, down, or stays the same, estimates the opponent's stat, and writes a prediction number. Run three to four matches. After each loss, run loss recovery: the losing team names which of three things went wrong (slope, x estimate, or for auction winners, equation no longer fits). If they blame the ball, redirect: it is the same every match today. Call two teams to share residual trends, then read every team's prediction card, record, and wins needed. Exit ticket on the End of Day page before anyone leaves.",
        "script": "https://docs.google.com/document/d/1DQPG1E04HP4KRVyCSgc4COQUwtcYzSF2MvvQz3GXAGM/edit?usp=sharing",
        "worksheet": "https://docs.google.com/document/d/1BDDPR3_KtBbqVmK3XSt3HgHBHNcMujno8whS0izoUoo/edit?usp=sharing",
        "exemplar":"https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W4_D14_PredictionTracker_Exemplars.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day14-03-s2-match-day-2.html"
      },
    
      {
        "name": "Open Lab: Residual Analysis and Stat Auction Testing",
        "mins": 40,
        "block": "Open Lab",
        "description": "Use residual analysis to evaluate prediction errors across two ball modes, decide whether to revise or hold your equation, and generate a Match Day 3 hypothesis. Early finishers test a single stat change and compare predicted versus actual outcomes.",
"facilitatorDescription": "Give every team a residual table to fill in before anything else: Day, Ball Mode, Match, Predicted, Actual, Residual, Size (S/M/L), and Direction. Once filled, ask one sorting question: did the residual direction flip between Day 13 and Day 14? If yes, there is not enough evidence to change the equation; the team writes one sentence naming the ball mode as the likely explanation and holds. If no, have them look at the Size column. Same size every match points to the starting number; growing size points to the slope. Before approving any Step 4, ask the team to say in one sentence why this pattern points to that value rather than the other. Teams with no clear pattern hold the equation and say why. Check Step 2 before any team moves to Step 3; a team that skips the sorting question and jumps to changing a value is the most common error. Exit check: completed table with yes/no answer, Step 4 entry with two sentences or hold note, Step 5 prediction with a specific equation number, and one sentence explaining why the evidence supported the decision.",
       "exemplar":"https://velocity-arena-gold.vercel.app/resources/teacher-guides/exemplars/VA_Exemplar_W4_D14_residual_exemplars.html",
       "script": "https://docs.google.com/document/d/1Ttdu2hNLgwJswRGZozjztwdZhaKL-zq2AJQyROfKOSg/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day14-04-open-lab-equation-loadout.html"
      }
    ],
    "produce": [
      "Prediction Market index card — justification added if win total adjusted; one dashboard number cited",  
      "Percent change worksheet — (new − old) / old × 100 calculated for all four stats",  
      "Written sentence — which ball mode team expects to perform best in, citing stat percent change",  
      "Match data log — prediction before each of three matches; actual result after ", 
      "Written sentence — missing variable identified for any match \>20% off ",  
      "Dashboard hypothesis — revised equation with new variable (Track A); or Skills Card prediction-actual logged (Track B)"
    ],
    "ends": "Write: \"The skill I used today was \\[name it specifically\\] and I will use it tomorrow by \\[name the exact moment and exact action in tomorrow's schedule\\].\" You have 3 minutes. |",
    "funElement": "Prediction market still active. Teams track Season 2 record against public prediction.",
    "los": "LO 1.3 (percent change vs. percentage point difference, three consecutive correct dashboard entries); LO 4.2 (pre-match prediction logged and compared each match); LO 7.2 (revision entry with data-cited justification when \\>20% off)",
    "facilitatorRisk": {
      "risk": "Students confuse percent change and percentage point difference and treat the two numbers as interchangeable in their Commissioner proposals and scouting reports, a misconception that compounds from here forward.",
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
        "facilitatorDescription": "Students walk the room and re-read every Day 2 bot origin story. Each team asks: has our bot's story changed? What from Seasons 1 and 2 belongs in its lore now? Teams write one new sentence to add to their bot's lore -- something that only makes sense because they played the matches. Creative layer on top of the stat system, not a replacement for it.",
        "script": "https://docs.google.com/document/d/1a7VLmihhAGvqVlVV43-5ZNT9fgtdltZcUdYa1JFT18g/edit?usp=drive_link",
        "worksheet": "https://docs.google.com/document/d/1YiobKPGJCQGe9n7Usf7SN1dZnsYxBsj2vaOnsAMhdl4/edit?usp=sharing",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day15-01-bot-lore-gallery-walk.html"
      },
    
      {
        "name": "Scouting Report: Mathematical Foundation",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Begin your formal scouting report on your Championship opponent. Section 1: express their stats as percentages of the 20-point budget. Section 2: write their Endurance decay equation in slope-intercept form using their data. Show all work.",
        "facilitatorDescription": "Teams begin the formal scouting report on their Championship opponent. Section 1: express opponent's stats as percentages of the 20-point budget. Section 2: write the opponent's Endurance decay equation in slope-intercept form using their data. All work shown. This is the start of a multi-day scouting arc.",
        "script": "https://docs.google.com/document/d/1B5urlu-s3uvpzyG-cVRgWwGHwyX_Dqx0aHzqx3NulG0/edit?usp=drive_link",
        "template": "https://docs.google.com/document/d/1LELkBNge6avite1E60qRi_rU829oVV_M7FIyFNHyayg/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day15-02-scouting-report-math-foundation.html"
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
        "worksheet": "https://docs.google.com/document/d/1XH5m0SvKEsFTnwZm2Akp9gWldMiqI_BXLBYlGYNgvpQ/edit?usp=sharing",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day15-03-match-day-3.html"
      },
      {
        "name": "Open Lab: Scouting Continuation or Identity Refinement",
        "mins": 40,
        "block": "Open Lab",
        "description": "Track A: Continue scouting report sections 1 and 2, or start section 3 (opponent Speed vs. Goals trend line). Track B: Test the scoop redesign or logo placement. Does the new scoop change your kick distance? If yes, update the dashboard. End with a concept retrieval line: write the name of the math concept you used in your scouting work today (unit rate, ratio, proportional scaling, slope as rate of change, linear decay, or other).",
        "facilitatorDescription": "Two tracks. Track A (Data Dive): teams continue scouting report sections 1 and 2, or start section 3 (opponent Speed vs. Goals trend line). Track B (Bot Lab): teams test scoop redesign or logo placement and check for kick distance change. End both tracks with a concept retrieval line: teams write the name of the math concept used in scouting work today (unit rate, ratio, proportional scaling, slope as rate of change, linear decay, or other).",
        "script": "https://docs.google.com/document/d/1j_P-vq1s85VIWRo6doy1GCI_v1yYw0vUu_vgG1CgGoM/edit?usp=sharing",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day15-04-open-lab-scouting-identity.html"
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
    "los": "LO 7.3 (scouting report sections 1 and 2: opponent stats as percentages and Endurance decay equation); LO 2.4 (Endurance decay x-intercept predicted from equation); LO 6.3 (error trace from bot behavior back to calculation, begun in scouting analysis); LO 9.1 (Week 3 journal: a specific number or calculation named as the thing that changed their thinking) # WEEK 4: CHAMPIONSHIP + EXHIBITION *Energy register: Proud, expert, generous. Students teach others. They present to judges. The arc ends with them as the authority.*",
    "facilitatorRisk": {
      "risk": "Creative expression becomes pure decoration with no mathematical connection. Students spend 90 minutes on visual design with no reference to their stat system.",
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
        "name": "Know Your Opponent",
        "mins": 20,
        "block": "Ice Breaker",
        "description": "Your Championship opponent's stat card is face down on the table. Flip it. Read the numbers. Stand up for the one stat you fear most — your body is your vote. Then sketch a four-bar chart of their build and circle the biggest threat. One word on the board. That stat determines your ball mode and your Skills Arena target this afternoon.",
      "facilitatorDescription": "Championship opponent stat cards are waiting face down when students arrive. They flip, read, and vote physically — standing for the one stat they fear most. Then a quick bar chart sketch of the opponent's build, one circled threat. Six threat words go on the board, one per team, and students receive a direct promise: that stat determines their ball mode and Skills Arena focus in the afternoon session. No writing beyond one word and four bar labels. The physical vote replaces discussion and moves the room fast.",
      "script": "https://docs.google.com/document/d/13EAWLvzOpJzSWD48ie6-Ti6RsVMJySXtF03AYYh9Nz0/edit?usp=drive_link",
      "worksheet":[   {url:"https://drive.google.com/file/d/1ljfIn5Z6DYZtlghayZpXs3kWOYLz0KZU/view?usp=drive_link", label: "Bar Chart Worksheet"}],
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day16-01-know-your-opponent.html",
        "exit":"https://drive.google.com/file/d/1n50E2Fy4FeQceL-OyZbNP6iAVKpseGL0/view?usp=drive_link"
      },
    
      {
        "name": "Scouting Report Completion: Sections 3 and 4",
        "mins": 50,
        "block": "Challenge Block",
        "description": "Section 3: Use two of your opponent's data points to write their Speed vs. Goals trend line equation and make a prediction for Championship. Section 4: Write one strategy recommendation backed by an inequality constraint analysis -- show three loadouts that counter your opponent.",
        "facilitatorDescription": "Section 3: teams use two of the opponent's data points to write the Speed vs. Goals trend line equation and make a Championship prediction. Section 4: teams write one strategy recommendation backed by inequality constraint analysis, showing three counter-loadouts. Frame verbal check-ins as expert preparation ('walk me through one calculation as if I am a visitor'), not evaluation.",
        "script": "https://docs.google.com/document/d/1HnlCodPGtO0lxBhnOEEgnekpeWE2qCJEOyWTV5TmtTc/edit?usp=drive_link",
        "worksheet":[
          {url: "https://drive.google.com/file/d/1t65kZ51Ftt7VnvsB3lBH1yhlji-lAKeq/view?usp=drive_link", label: "Opponent Cards"},
          {url: "https://docs.google.com/document/d/1LELkBNge6avite1E60qRi_rU829oVV_M7FIyFNHyayg/edit?usp=drive_link", label: "Scouting Report"}
        ] ,
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day16-02-scouting-report-sections-3-4.html",
        "exit":"https://docs.google.com/document/d/16bh7jAHqHqX57liuVosHDTziCjyP9rx5S-iKLB-KrMg/edit?usp=sharing"

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
        "script": "https://docs.google.com/document/d/1uw_04mJk0wg6xibN7EcWCWRgKNHZP_-h60m6ucufcsI/edit?usp=drive_link",
        "webpage":"https://velocity-arena-gold.vercel.app/lessons/day16-commissioner-proposal.html",
        "worksheet":[{url:"https://drive.google.com/file/d/1F2z2eAMIXcnO7LL43DqV1wg3WimurcZ6/view?usp=drive_link", label: "Rule Log"},
          {url:"https://docs.google.com/document/d/1bOi-qqmVXnb-Uhr6HAw-ezLjD1jYr0-e_-Ui-nJpeAw/edit?usp=sharing", label: "Commissioner Proposal"}],
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day16-03-commissioners-meeting-pt1.html"
      },
      {
        "name": "What-If? Analysis",
        "mins": 45,
        "block": "Challenge Block",
        "description": "The facilitator posts one constraint: 'The Commissioner has capped Endurance at 4 for the Championship.' You have 10 minutes to answer for every team: which loadouts violate this constraint? For each, calculate how their decay rate changes if they reallocate excess points to Speed. State the new motor power output. Does this rule change help or hurt your team? Show the math.",
        "facilitatorDescription": "Post one constraint: 'The Commissioner has capped Endurance at 4 for the Championship.' In 10 minutes, each team answers for every team in the room: which loadouts violate the constraint? For each violator, calculate the decay rate change if excess points reallocate to Speed and state the new motor power output. Each team analyzes whether the rule change helps or hurts them. Show all math.",
        "script": "https://docs.google.com/document/d/17eclDcJ_fBES8hiqnBz6L6mJ_mvo_tMcz2qr67_GonI/edit?usp=drive_link",
        "worksheet":"https://drive.google.com/file/d/1iS672HKPBa53LlwEtZ2swkJxX9Mpb4tF/view?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day16-04-what-if-analysis.html"
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
      "risk": "Scouting report verbal check-ins become interrogations that make students feel tested rather than expert, which re-triggers math shame in the final week.",
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
        "name": "Final Commissioner's Meeting, Part 2 + Championship Bracket Reveal",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Final rule adjustments confirmed. Championship bracket revealed and posted. Final bot tune-up: program your Championship loadout, verify code against math, run one test drive.",
        "facilitatorDescription": "Confirm final rule adjustments. Reveal and post the Championship bracket. Teams do their final bot tune-up: program Championship loadout, verify code against math, run one test drive. Highest-anticipation moment before tournament day.",
        "script": "https://docs.google.com/document/d/1dbjceeZa7y2mn6nBB8iLlIc2YIpWn34S_A3z7FENCUo/edit?usp=drive_link",
"worksheet":[{url:"https://drive.google.com/file/d/1F2z2eAMIXcnO7LL43DqV1wg3WimurcZ6/view?usp=drive_link", label: "Rule Log"},
  {url:"https://drive.google.com/file/d/14WmDx_fEm3fxMwmLoaUdu4BU1QS5efkV/view?usp=drive_link", label: "Ball Modes"}
],
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day17-03-commissioners-pt2-bracket-reveal.html"
      },
          {
        "name": "Pre-Match Pitch Rehearsal + Teach the Math",
        "mins": 60,
        "block": "Challenge Block",
        "description": "Rehearse your 2-minute pre-match pitch for Championship judges: 'Our strategy is [X] because [equation result]. Our opponent will do [Y] based on their [stat].' Peer feedback: did they cite a specific number for every claim? Then each team picks one calculation and explains it in plain language as if a visitor just walked in.",
        "facilitatorDescription": "Teams rehearse a 2-minute pre-match pitch for Championship judges: 'Our strategy is [X] because [equation result]. Our opponent will do [Y] based on their [stat].' Peer feedback centers on one question: did they cite a specific number for every claim? Each team then picks one calculation and explains it in plain language, visitor-ready. Every claim in the pitch needs a number next to it before teams leave -- 'Our bot is fast' scores zero; 'Speed = 7 gives us 35% motor power' scores full points.",
        "script": "https://docs.google.com/document/d/1WPsfN7Gwbz809PmeEuuqzo5GNhcu8cyOpFxlT7JVdVg/edit?usp=drive_link",
        "worksheet": "https://drive.google.com/file/d/181fmb7UpFIObB5jJroJDxmk2k_amVA1x/view?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day17-01-pitch-rehearsal-teach-math.html"
      },
    
      
      {
        "name": "Lunch / Snack Break",
        "mins": 60,
        "block": "Break",
        "description": "Eat, rest, and talk about anything except math.",
        "facilitatorDescription": "Eat and rest. 60-minute protected break. No math talk."
      },
      
  
      
      {
        "name": "Skills Arena Championship Loadout Verification",
        "mins": 60,
        "block": "Open Lab",
        "description": "Rehearse your pitch one more time. Add specific numbers to any claim that is still vague. Every claim needs a number next to it before tomorrow.",
        "facilitatorDescription": "Teams rehearse the pitch one more time and add specific numbers to any vague claim. Every claim must have a number next to it before students leave for the day. Short 15-minute window -- keep it focused on number-for-claim matching.",
        "script": "hhttps://docs.google.com/document/d/1w7H2QdlUzEUackIo3-dUMNrmzbsGSiduotMmAYj2khs/edit?usp=sharing",
        "worksheet":"https://drive.google.com/file/d/1q5yZVp_6tx_mfR9fhbpiVIi5TbQKtvdE/view?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day17-05-open-lab-pitch-bot-prep.html"
      },
      {
        "name": "Open Lab: Pitch Refinement and Bot Prep",
        "mins": 60,
        "block": "Open Lab",
        "description": "Rehearse your pitch one more time as a team. Add specific numbers to any claim that is still vague. Every claim in the pitch needs a number next to it before tomorrow",
        "facilitatorDescription": "Teams rehearse their pitch one more time as a team. Add specific numbers to any claim that is still vague. Every claim in the pitch needs a number next to it before tomorrow.",
        "script": "https://docs.google.com/document/d/1yro_I-SJCEKRtNaY2TEFO6QQgdoiMeQ-ZGt4bh59DRU/edit?tab=t.0",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day16-04-open-lab-recalculate-and-scout.html"
      },
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
      "risk": "Pre-match pitch rehearsal focuses on delivery polish rather than mathematical specificity. Students practice sounding confident rather than citing accurate numbers.",
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
        "description": "The whole camp does one physical warm-up together, energetic and brief, led by any student who wants to lead it. Then each team has 3 minutes for their own ritual: a chant, a handshake, anything they invented. This is earned. Four weeks of work made this moment exist.",
        "facilitatorDescription": "Whole camp does one physical warm-up together, energetic and brief, led by any student who volunteers. Then each team has 3 minutes for their own ritual -- chant, handshake, whatever they invented. This is earned. Do not rush it; four weeks of work made this moment exist.",
        "script": "https://docs.google.com/document/d/1ghkcMGT4HXJNR4lpWKilIdLigMZX1g5dJ-da9jdZMfY/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day18-01-pre-championship-ritual.html"
      },
    
      {
        "name": "Championship Rounds 1 and 2",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Double-elimination bracket. Before each match: your team delivers the 2-minute pre-match pitch to the judges, covering stat optimization strategy, specific numbers, inequality analysis. Judges score on mathematical specificity, not presentation polish. After each match: loss-recovery protocol runs for every losing team, same three steps, same script, no shortcuts.",
        "facilitatorDescription": "Double-elimination bracket. Before each match, teams deliver the 2-minute pre-match pitch to judges covering stat optimization, specific numbers, and inequality analysis. Judges score on mathematical specificity, not presentation polish. After each match, loss-recovery runs for every losing team -- same three steps, same script, no shortcuts even at Championship stakes.",
        "script": "https://docs.google.com/document/d/1HKr3LMhdwhsTSMieLKDD7QeVyfi-q6SSnSb3HP1rbu4/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day18-02-championship-rounds-1-2.html"
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
        "script": "https://docs.google.com/document/d/1I06T4pVWfBJApBca4Y3O7we4C1HjhVKI4KmG6uolTUQ/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day18-03-championship-semis-final.html"
      },
    
      {
        "name": "Open Lab: Reflection Time",
        "mins": 40,
        "block": "Open Lab",
        "description": "No task required. Teams reflect on their four-week data arc. Look at your Day 1 allocation versus today's. What changed and why?",
        "facilitatorDescription": "No required task. Teams reflect on their four-week data arc. Prompt: compare Day 1 allocation to today's Championship configuration. What changed, and why? Low-stakes reflection after the high-stakes tournament.",
        "script": "https://docs.google.com/document/d/1lvW3OtIjKUPp7oxeYng28ghkXNTotYAh6RL108wr7CU/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day18-04-open-lab-reflection.html"
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
        "script": "https://docs.google.com/document/d/1jcYn0LTmP2IHZHdX9WhYk0U2-2KKItI05cvSWAWhWbQ/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day19-01-expert-setup-exhibition-prep.html"
      },
    
      {
        "name": "Community Exhibition: Teaching Begins",
        "mins": 90,
        "block": "Match-Build-Make",
        "description": "Visitors arrive. Teach each visitor to complete three mini-challenges: (1) calculate a unit rate from your scouting data -- Season 1 wins divided by your Speed stat, stated as wins per 1 Speed point; (2) plot two match coordinates on the arena grid and calculate the distance between them; (3) explain in their own words why your Speed stat and motor power scale proportionally. Your goal is for each visitor to complete all three independently, without prompting after your initial explanation. That is the assessment.",
        "facilitatorDescription": "Visitors arrive. Students teach each visitor to complete three mini-challenges: (1) calculate a unit rate from scouting data -- Season 1 wins divided by Speed stat, stated as wins per 1 Speed point; (2) plot two match coordinates on the arena grid and calculate the distance between them; (3) explain in their own words why Speed and motor power scale proportionally. Goal: each visitor completes all three independently after initial explanation. Visitor completion is the assessment, not student delivery.",
        "script": "https://docs.google.com/document/d/1kPsmjmLJf6hZYdt6SSDuvMpwZoMSVShJtEGvzI37eJM/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day19-02-community-exhibition-teaching.html"
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
        "description": "Keep teaching. Visitors get one ballot: 'Which student explained the math most clearly?' Exhibition matches can run while visitors watch.",
        "facilitatorDescription": "Exhibition continues. Hand each visitor one ballot: 'Which student explained the math most clearly?' Exhibition matches run concurrently while visitors watch. Best Teacher vote collects here for tomorrow's ceremony announcement.",
        "script": "https://docs.google.com/document/d/1Lr34NgMylBQ2F7ceLzvivkvrPu1zCW06pXgCg3NdSKQ/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day19-03-extended-exhibition-voting.html"
      },
      {
        "name": "Scouting Report Verbal Check + Vote Count",
        "mins": 40,
        "block": "Match-Build-Make",
        "description": "Present one calculation from your completed scouting report to your facilitator -- 2 minutes, your choice of calculation. Explain what it is, how you calculated it, and what it tells you about your opponent's bot.",
        "facilitatorDescription": "Each student presents one calculation from their completed scouting report -- 2 minutes, student's choice. They explain what it is, how it was calculated, and what it reveals about the opponent's bot. Runs concurrently with Best Teacher vote count. Expert framing, not quiz framing.",
        "script": "https://docs.google.com/document/d/1oB-r6Wuz-b7gVrWASsG_Ycl-c5zJ-bjW960gzglQuuA/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day19-04-scouting-verbal-check-vote.html"
      },
      {
        "name": "Open Lab: Final Debrief and Prep",
        "mins": 15,
        "block": "Open Lab",
        "description": "Final debrief and preparation time. Review your data, reflect on the program, and get ready for the final day.",
        "facilitatorDescription": "Short debrief and prep window. Teams review data, reflect on the program, and get ready for Day 20. Last Open Lab of the program.",
        "script": "https://docs.google.com/document/d/13h94Qu4vn9Sxch1Nbo8oWIbjWgXtYDoJh7j1byr1laA/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day19-05-open-lab-final-debrief.html"
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
      "risk": "Students feel embarrassed or exposed teaching visitors who are parents, adults, or people they know, which re-triggers math shame in a social context with high personal stakes.",
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
        "facilitatorDescription": "Students walk quietly past every artifact: bot origin stories, rivalry cards, leaderboard history, Commissioner rule changes, scouting reports, and the Day 1 goals posted in Week 1. Quiet. Let the room do the work -- no narration. This is looking at four weeks of visible progress.",
        "script": "https://docs.google.com/document/d/1XDCeJ8J2U_zF0_vdgpfAYD6L4EFX8oRX8ZoRXOLapJ8/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day20-01-walk-the-wall-final-gallery.html"
      },
    
      {
        "name": "Post-Task Diagnostic: Prior Knowledge Reassessment",
        "mins": 15,
        "block": "Challenge Block",
        "description": "12 minutes, individual. 8 questions parallel to the updated Day 1 pre-task -- aligned to the Summer Sparks concept set: proportional reasoning, unit rate, ratio, proportional scaling, coordinate geometry (including distance), slope as rate of change, and linear decay -- using the same age-appropriate non-bot contexts. This measures growth by math topic, not a camp assessment. Your facilitator compares your results to Day 1 per concept. This is the only formal assessment on Day 20. Protect the afternoon.",
        "facilitatorDescription": "12 minutes, individual. 8 questions parallel to the updated Day 1 pre-task -- aligned to the Summer Sparks concept set: proportional reasoning, unit rate, ratio, proportional scaling, coordinate geometry (including distance), slope as rate of change, linear decay -- using the same age-appropriate non-bot contexts. Measures growth by math topic per student, not a camp-wide assessment. Compare results to Day 1 concept-by-concept. Only formal assessment on Day 20. Frame explicitly: 'I am comparing you to yourself from four weeks ago.' Protect the afternoon -- no other assessment work.",
        "script": "https://docs.google.com/document/d/1KYGrQCGgyWRPsgwlafFgnID0cetHfHpnEK8oQ3o7kr8/edit?usp=drive_link",
        "webpage": "https://velocity-arena-gold.vercel.app/activities/diagnostic-post/index.html",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day20-02-post-task-diagnostic.html"
      },
    
      {
        "name": "Awards Ceremony",
        "mins": 60,
        "block": "Match-Build-Make",
        "description": "Championship winner celebrated. Best Teacher award announced. The facilitator names one specific mathematical moment for each team: a particular calculation, a dashboard decision, a Commissioner argument, not generic praise. Hello Insight post-survey verbal reflection: each student names one personal growth area and one specific camp moment that demonstrates that growth.",
        "facilitatorDescription": "Celebrate the Championship winner. Announce Best Teacher award. Name one specific mathematical moment for each team -- a particular calculation, a dashboard decision, a Commissioner argument. Not generic praise. Hello Insight post-survey verbal reflection: each student names one personal growth area and one specific camp moment that demonstrates that growth.",
        "script": "https://docs.google.com/document/d/1FPkaluCh58L3kfr2E7mx8GKXUJpYzD9391KWC2kBKlQ/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day20-03-awards-ceremony.html"
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
        "facilitatorDescription": "Unstructured time. Students drive bots, revisit the coordinate grid, teach each other anything they want. No task, no output. This is the last time the program exists in this form -- let the room shape the close.",
        "script": "https://docs.google.com/document/d/1mzg9cMe7l6ev_kSYjNDtCmGjqRorba91zmQoJvQg0CY/edit?usp=drive_link",
        "quickCard": "https://velocity-arena-gold.vercel.app/resources/quick-cards/activity-card-day20-04-final-free-time-closing.html"
      }
    ],
    "produce": [
      "Final journal entry — individual reflection on what changed from Day 1 allocation to Championship loadout and why"
    ],
    "endBufferMins": 15,
    "endsMins": 20,
    "ends": "What did you learn about yourself as a problem solver? Name one specific moment from this program where you solved something you thought you could not. What did you do differently than you would have done before camp? You have 5 minutes. |",
    "funElement": "Best Teacher award announced. Social recognition for mathematical communication, not winning. Awards ceremony closes the program with students as the experts. The verbal check ran on Day 19. Day 20 is the celebration.",
    "los": "LO 7.1 (post-task diagnostic reflects Season 1 and 2 prediction practice); LO 8.2 (Best Teacher award outcome reflects visitor-assessed teaching quality); Note: LO 9.2 verbal reflection runs at the awards ceremony (Hello Insight post-survey) and is assessed there, not in the daily LO field. Scouting Report Verbal Check (LO 7.3) completed on Day 19 afternoon. # SCOPE AND SEQUENCE SUMMARY",
    "facilitatorRisk": {
      "risk": "Post-task diagnostic triggers end-of-program anxiety and students disengage from it, treating it as a formality. Cognitive overload after four weeks.",
      "say": "\"Say this before distributing the diagnostic: \"On Day 1, you filled out something like this and most of you did not know most of the answers. Today you do. I am not grading you against anyone else. I am comparing you to yourself from four weeks ago. Every answer you know today that you did not know on Day 1 is evidence of what happened in this room. Fill it out completely.\"\" |"
    }
  }
];
