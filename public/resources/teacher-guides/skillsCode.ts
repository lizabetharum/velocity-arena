/**
 * ═══════════════════════════════════════════════════════════════
 *  VELOCITY ARENA — Skills Arena Base Program
 *  micro:bit + Cutebot Pro   |   8×4 ft field   |   8×4 grid
 * ═══════════════════════════════════════════════════════════════
 *
 *  HOW TO USE
 *  ───────────
 *  1. Enter your team stats in STUDENT ZONE A below.
 *     S + P + E + T must add up to exactly 20.
 *
 *  2. Write your code inside the challenge function you are
 *     working on in STUDENT ZONE B below.
 *
 *  3. Flash the program to your micro:bit.
 *
 *  4. Press B to select a challenge (the number shows on screen).
 *     Press A to run it.
 *     Press A+B at any time for an emergency stop.
 *
 *  HELPER FUNCTIONS (call these inside your challenge functions)
 *  ─────────────────────────────────────────────────────────────
 *  drive(n)       move straight forward exactly n grid squares
 *                 1 grid square = 10.75 in = ~27 cm = 1 block
 *
 *  turnRight()    rotate exactly 90° clockwise in place
 *  turnLeft()     rotate exactly 90° counter-clockwise in place
 *
 *  kick()         burst of power from your Power stat, then stop
 *                 force = chargePower = POWER²  (0–100)
 *
 *  FIELD COORDINATE SYSTEM
 *  ────────────────────────
 *  x: 0 (left wall) → 8 (right wall)       8 columns
 *  y: 0 (top edge)  → 4 (bottom edge)      4 rows
 *  Labels on mat:  x = 1–7,  y = 1–3  (interior grid lines)
 *  Left  goal zone: x = 0–1, y = 1–3
 *  Right goal zone: x = 7–8, y = 1–3
 *  Ball at center:  (4, 2)
 * ═══════════════════════════════════════════════════════════════
 */


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  ★  STUDENT ZONE A  ★   ENTER YOUR TEAM STATS HERE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//
//  RULES:  each stat ≥ 1  |  POWER ≤ 10  |  S + P + E + T = 20
//
//  SPEED      how fast the bot drives
//  POWER      how hard it kicks  (chargePower = POWER²)
//  ENDURANCE  how long it stays fast in a match
//  TURNING    how sharply it steers in a match
//
let SPEED     = 0   // ← YOUR VALUE HERE
let POWER     = 0   // ← YOUR VALUE HERE
let ENDURANCE = 0   // ← YOUR VALUE HERE
let TURNING   = 0   // ← YOUR VALUE HERE
// ── CHECK: SPEED + POWER + ENDURANCE + TURNING must equal 20 ──


// ── CALCULATED VALUES  (read-only — do not change) ─────────────
let motorPower  = SPEED * 100 / 20             // drive speed %   (0–85)
let chargePower = Math.min(POWER * POWER, 100) // kick force %    (0–100)
let alignMs     = Math.max(60, 220 - TURNING * 16) // aim time ms
let DECAY_RATE  = 20 - ENDURANCE               // endurance decay rate


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  DRIVE TUNING
//  Every drive() call spends ~100–150 ms overcoming static friction
//  and ramping to full speed before the bot moves a meaningful distance.
//  That startup overhead is constant — independent of how far you drive.
//  startupMs compensates for it.  unitMs controls speed per square.
//
//  Why tune startupMs FIRST?
//  drive(1) = 1 × unitMs + startupMs — startupMs dominates a short run,
//  so drive(1) isolates it cleanly.  Once startupMs is fixed, unitMs
//  only scales the per-square portion and drive(6) is easy to dial in.
//
//  Tuning order:
//    1. Run drive(1) (challenge 1, press B). Short? +20 to startupMs.
//       Overshot? −20.  Repeat until it lands on exactly 1 square.
//    2. Run drive(6). Short? +20 to unitMs.  Overshot? −20.
//       You'll land around unitMs = 590–620.
//    3. Test drive(4) and drive(2) — they should now land without re-tuning.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
let unitMs    = 600   // ← tune SECOND with drive(6) — expect 590–620
let startupMs = 100   // ← tune FIRST  with drive(1) — expect 80–140


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  CHALLENGE SELECTOR
//  B = next challenge (1 → 2 → … → 10 → 1 → ...)
//  A = run the selected challenge
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
let currentChallenge = 1

input.onButtonPressed(Button.B, function () {
    currentChallenge = (currentChallenge % 10) + 1
    basic.showNumber(currentChallenge)
})

input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.East)
    if      (currentChallenge === 1) { deadStraight()    }
    else if (currentChallenge === 2) { rightAngle()      }
    else if (currentChallenge === 3) { straightShot()    }
    else if (currentChallenge === 4) { cornerKickLeft()  }
    else if (currentChallenge === 5) { cornerKickRight() }
    else if (currentChallenge === 6) { lawnmower()       }
    else if (currentChallenge === 7) { twoBallCombo()    }
    else if (currentChallenge === 8) { powerControlLab() }
    else if (currentChallenge === 9) { precisionParking() }
    else if (currentChallenge === 10){ bossLevel()        }
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
    basic.showIcon(IconNames.Yes)
})

// A + B  →  emergency stop (works at any time)
input.onButtonPressed(Button.AB, function () {
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
    CutebotPro.pwmCruiseControl(0, 0)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #`)
})


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  HELPER FUNCTIONS
//  Call these inside your challenge functions below.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * drive(n)
 * Move straight forward for n grid squares.
 * Speed comes from your SPEED stat (motorPower).
 * Total motor-on time = unitMs × n + startupMs milliseconds.
 * Tune both values in the DRIVE TUNING section above.
 *
 * Example:  drive(3) with unitMs=500, startupMs=0  →  1500 ms
 */
function drive(units: number): void {
    CutebotPro.pwmCruiseControl(motorPower, motorPower)
    basic.pause(unitMs * units + startupMs)
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
    basic.pause(100)
}

/**
 * turnRight()
 * Rotate exactly 90° clockwise in place (turns the bot to the right).
 *
 * Facing down (+y) → now facing right (+x)
 * Facing right (+x) → now facing up (-y)
 */
function turnRight(): void {
    CutebotPro.trolleySteering(CutebotProTurn.RightInPlace, 90)
    basic.pause(150)
}

/**
 * turnLeft()
 * Rotate exactly 90° counter-clockwise in place (turns the bot to the left).
 *
 * Facing down (+y) → now facing left (-x)
 * Facing left (-x) → now facing up (-y)
 */
function turnLeft(): void {
    CutebotPro.trolleySteering(CutebotProTurn.LeftInPlace, 90)
    basic.pause(150)
}

/**
 * kick()
 * Fire a power burst toward whatever the bot is facing.
 * Force comes from your POWER stat:  chargePower = POWER²
 *
 * Example:  POWER = 7  →  chargePower = 49%
 *           POWER = 10 →  chargePower = 100%  (max)
 */
function kick(): void {
    CutebotPro.pwmCruiseControl(chargePower, chargePower)
    basic.pause(400)
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  ★  STUDENT ZONE B  ★   WRITE YOUR CHALLENGE FUNCTIONS BELOW
//
//  Each function is called when you press A with that challenge
//  selected. Fill in the body using drive(), turnLeft(),
//  turnRight(), and kick().
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


// ── Challenge 1 — DEAD STRAIGHT ──────────────────────────────────
//  Start:  (1, 0)  facing right (+x direction)
//  Target: (7, 0)
//  Task:   Drive 6 grid squares in a straight line.  No turns.
//
function deadStraight(): void {
    // YOUR CODE HERE
    // Hint: call drive(?) — how many squares to the target?

}


// ── Challenge 2 — RIGHT ANGLE ─────────────────────────────────────
//  Start:  (1, 0)  facing down (+y direction)
//  Target: (6, 3)
//  Task:   Drive 3 squares → turn right 90° → drive 5 squares.
//
function rightAngle(): void {
    // YOUR CODE HERE
    // Hint: drive(?) → turnRight() → drive(?)

}


// ── Challenge 3 — STRAIGHT SHOT ──────────────────────────────────
//  Start:  (6, 2)  facing LEFT (toward x = 0)
//  Ball:   (4, 2)  — already lined up with the bot
//  Goal:   Left goal zone  (x = 0–1, y = 1–3)
//  Task:   Drive to the ball, then kick it into the left goal.
//          No turns needed — the shot is already aligned.
//
function straightShot(): void {
    // YOUR CODE HERE
    // Hint: drive(?) to reach the ball, then kick()

}


// ── Challenge 4 — CORNER KICK: LEFT SIDE ─────────────────────────
//  Start:  (3, 0)  facing down (+y direction)
//  Ball:   (1, 2)
//  Goal:   Left goal zone  (x = 0–1, y = 1–3)
//  Task:   Navigate to the ball from an angle, then kick left.
//
function cornerKickLeft(): void {
    // YOUR CODE HERE
    // Hint: drive(?) → turnLeft() → drive(?) → kick()

}


// ── Challenge 5 — CORNER KICK: RIGHT SIDE ────────────────────────
//  Start:  (4, 0)  facing down (+y direction)
//  Ball:   (6, 2)
//  Goal:   Right goal zone  (x = 7–8, y = 1–3)
//  Task:   Navigate to the ball from an angle, then kick right.
//
function cornerKickRight(): void {
    // YOUR CODE HERE
    // Hint: drive(?) → turnRight() → drive(?) → kick()

}


// ── Challenge 6 — THE LAWNMOWER ───────────────────────────────────
//  Start:  (0, 0)  facing down (+y direction)
//  Task:   Sweep the full field in a lawnmower pattern.
//          Cover all 4 rows — 8 straight segments, 7 turns.
//
//  Path (as grid coordinates):
//    (0,0)→(0,4)  turn right  →(8,4)  turn right  →(8,3)
//    turn right   →(0,3)  turn left   →(0,2)  turn left
//    →(8,2)  turn right  →(8,1)  turn right  →(0,1)
//
function lawnmower(): void {
    // YOUR CODE HERE
    // Hint: use drive() and turnLeft() / turnRight()
    // Each row is 8 squares wide.
    // Vertical steps between rows are 1 square.
    // Count your turns: there should be exactly 7.

}


// ── Challenge 7 — TWO-BALL COMBO ─────────────────────────────────
//  Start:  (4, 0)  facing south (+y direction)
//  Ball A: (2, 2)  → left  goal zone (x = 0–1, y = 1–3)
//  Ball B: (6, 2)  → right goal zone (x = 7–8, y = 1–3)
//  Task:   In one program, kick Ball A into the left goal and
//          Ball B into the right goal. No hints — plan your
//          own route and decide which ball you kick first.
//
function twoBallCombo(): void {
    // YOUR CODE HERE
    // Plan on paper first. Ball A at (2,2), Ball B at (6,2).
    // Hint: there is no single correct route — choose your order,
    // draw the path, count every square, count every turn.

}


// ── Challenge 8 — POWER CONTROL LAB ──────────────────────────────
//  Start:  (3, 2)  facing west (toward x = 0)
//  Ball:   (2, 2)  — reset before every run
//  Task:   Run the same drive(1) + kick() three times using
//          POWER = 3, POWER = 6, and POWER = 9.
//          Record ball distance each time. Is it linear?
//
function powerControlLab(): void {
    // YOUR CODE HERE
    // Hint: drive(1) to the ball, then kick()
    // Change POWER in STUDENT ZONE A and re-flash between runs.

}


// ── Challenge 9 — PRECISION PARKING ──────────────────────────────
//  Start:  (0, 0)  facing east (+x direction)
//  Target: taped box at (5, 3), final facing = WEST
//  Task:   Navigate to the box by any route. Stop inside it
//          facing exactly west. Sketch your path first —
//          mark your facing direction after every call.
//
function precisionParking(): void {
    // YOUR CODE HERE
    // No hint sequence — your path is your design.
    // Remember: to end up facing WEST you must plan the
    // approach direction and your final turn carefully.

}


// ── Challenge 10 — BOSS LEVEL ─────────────────────────────────────
//  Start:  (4, 0)  facing south (+y direction)
//  Ball:   (4, 2)  — center of field
//  Cone:   (4, 1)  — directly in the way; CANNOT pass through
//  Task:   Route around the cone, reach the ball, kick it into
//          either goal, then drive to the parking zone at
//          x = 0–1, y = 0. Score: 1 pt per phase (max 3).
//
function bossLevel(): void {
    // YOUR CODE HERE
    // Write your plan in 4 phases before you code:
    //   Phase 1 — detour around cone at (4,1)
    //   Phase 2 — navigate to ball at (4,2)
    //   Phase 3 — kick into left or right goal
    //   Phase 4 — drive to parking zone (x=0–1, y=0)

}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  STARTUP
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CutebotPro.stopImmediately(CutebotProMotors.ALL)
CutebotPro.pwmCruiseControl(0, 0)
basic.pause(100)

// Show a quick stat summary: motorPower then chargePower
basic.showString("P" + motorPower)
basic.pause(400)
basic.showString("K" + chargePower)
basic.pause(400)

// Show which challenge is loaded
basic.showNumber(currentChallenge)
