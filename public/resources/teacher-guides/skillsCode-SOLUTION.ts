/**
 * ═══════════════════════════════════════════════════════════════
 *  VELOCITY ARENA — Skills Arena  ★ SOLUTION FILE ★
 *  micro:bit + Cutebot Pro   |   8×4 ft field   |   8×4 grid
 *
 *  TEACHER / FACILITATOR USE ONLY
 *  Do not distribute to students before they attempt the
 *  challenges independently.
 *
 *  All six challenge functions are fully implemented below.
 *  Stats are set to a balanced example build (S6·P5·E5·T4 = 20).
 *  Swap in any valid build to test with different stat combos.
 * ═══════════════════════════════════════════════════════════════
 *
 *  TURN DIRECTION REFERENCE
 *  ─────────────────────────
 *  turnRight()  rotates:  south→east, east→north, north→west, west→south
 *  turnLeft()   rotates:  south→west, west→north, north→east, east→south
 *
 *  Memory trick: imagine a compass rose — turnRight() spins the
 *  needle one step COUNTER-clockwise (south→east→north→west).
 *  turnLeft() spins it CLOCKWISE (south→west→north→east).
 *
 *  FIELD COORDINATE SYSTEM
 *  ────────────────────────
 *  x: 0 (left wall) → 8 (right wall)       8 columns
 *  y: 0 (top edge)  → 4 (bottom edge)      4 rows
 *  Left  goal zone: x = 0–1, y = 1–3
 *  Right goal zone: x = 7–8, y = 1–3
 * ═══════════════════════════════════════════════════════════════
 */


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  EXAMPLE STATS  (S + P + E + T = 20)
//  Swap these values to test different builds.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
let SPEED     = 6   // motorPower  = 30%
let POWER     = 5   // chargePower = 25%
let ENDURANCE = 5   // DECAY_RATE  = 15
let TURNING   = 4   // alignMs     = 156 ms
// 6 + 5 + 5 + 4 = 20 ✓

// ── CALCULATED VALUES ──────────────────────────────────────────
let motorPower  = SPEED * 100 / 20             // drive speed %   (0–85)
let chargePower = Math.min(POWER * POWER, 100) // kick force %    (0–100)
let alignMs     = Math.max(60, 220 - TURNING * 16) // aim time ms
let DECAY_RATE  = 20 - ENDURANCE               // endurance decay rate


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  DRIVE TUNING
//  unitMs = ms per 1 grid square at your motorPower.
//  Tune using challenge 1 (Dead Straight):
//    Stopped short? → increase   |   Overshot? → decrease
//
//  NOTE: This example value is approximate for SPEED = 6 (motorPower 30%).
//  Every robot is slightly different — students must tune their own.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
let unitMs = 500   // example starting point — tune via Dead Straight


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

// A + B  →  emergency stop
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
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function drive(units: number): void {
    CutebotPro.pwmCruiseControl(motorPower, motorPower)
    basic.pause(unitMs * units)
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
    basic.pause(100)
}

function turnRight(): void {
    CutebotPro.trolleySteering(CutebotProTurn.RightInPlace, 90)
    basic.pause(150)
}

function turnLeft(): void {
    CutebotPro.trolleySteering(CutebotProTurn.LeftInPlace, 90)
    basic.pause(150)
}

function kick(): void {
    CutebotPro.pwmCruiseControl(chargePower, chargePower)
    basic.pause(400)
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  ★  SOLUTIONS  ★
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


// ── Challenge 1 — DEAD STRAIGHT ──────────────────────────────────
//
//  Start:  (1, 0)  facing east (+x)
//  Target: (7, 0)
//
//  Spatial reasoning:
//    Δx = 7 − 1 = 6 grid squares to travel.
//    No direction change needed — already facing the target.
//
//  Path:   (1,0) ──── drive 6 ───→ (7,0)
//
function deadStraight(): void {
    drive(6)
}


// ── Challenge 2 — RIGHT ANGLE ─────────────────────────────────────
//
//  Start:  (1, 0)  facing south (+y, down the field)
//  Target: (6, 3)
//
//  Spatial reasoning:
//    Leg 1 (south): from (1,0) to (1,3) → Δy = 3 squares.
//    Turn: facing south → turnRight() → now facing east (+x).
//    Leg 2 (east):  from (1,3) to (6,3) → Δx = 5 squares.
//
//  Path:   (1,0)
//            │ drive 3
//          (1,3) ── turnRight ──→ facing east
//            └─── drive 5 ───→ (6,3)
//
function rightAngle(): void {
    drive(3)      // south: (1,0) → (1,3)
    turnRight()   // south → east
    drive(5)      // east:  (1,3) → (6,3)
}


// ── Challenge 3 — STRAIGHT SHOT ──────────────────────────────────
//
//  Start:  (6, 2)  facing west (−x, toward left goal)
//  Ball:   (4, 2)
//  Goal:   left goal zone (x = 0–1, y = 1–3)
//
//  Spatial reasoning:
//    Bot and ball are already on the same row (y = 2).
//    Bot is to the RIGHT of the ball and facing left — perfectly
//    aligned for a straight approach.
//    Δx = 6 − 4 = 2 squares to the ball.
//    After drive(2) the bot is AT (4,2), still facing west.
//    kick() fires west; the ball travels 4+ more squares into
//    the left goal zone (x = 0–1).
//
//  Path:   (6,2) ─ drive 2 → (4,2)[ball] ─ kick → left goal
//
function straightShot(): void {
    drive(2)   // west: (6,2) → (4,2), contacting ball
    kick()     // blast west toward left goal
}


// ── Challenge 4 — CORNER KICK: LEFT SIDE ─────────────────────────
//
//  Start:  (3, 0)  facing south (+y)
//  Ball:   (1, 2)
//  Goal:   left goal zone (x = 0–1, y = 1–3)
//
//  Spatial reasoning:
//    Leg 1 (south): from (3,0) to (3,2) → Δy = 2 squares.
//    Turn: facing south → turnLeft() → now facing west (−x).
//    Leg 2 (west):  from (3,2) to (1,2) → Δx = 2 squares.
//    Bot arrives at (1,2) facing west — lined up with left goal.
//    kick() fires west straight into the goal.
//
//  Turn rule: from south, turnLeft() faces west (−x = left wall).
//
//  Path:   (3,0)
//            │ drive 2
//          (3,2) ── turnLeft ──→ facing west
//            └─── drive 2 ───→ (1,2)[ball] ─ kick → left goal
//
function cornerKickLeft(): void {
    drive(2)     // south: (3,0) → (3,2)
    turnLeft()   // south → west
    drive(2)     // west:  (3,2) → (1,2), contacting ball
    kick()       // blast west into left goal
}


// ── Challenge 5 — CORNER KICK: RIGHT SIDE ────────────────────────
//
//  Start:  (4, 0)  facing south (+y)
//  Ball:   (6, 2)
//  Goal:   right goal zone (x = 7–8, y = 1–3)
//
//  Spatial reasoning:
//    Leg 1 (south): from (4,0) to (4,2) → Δy = 2 squares.
//    Turn: facing south → turnRight() → now facing east (+x).
//    Leg 2 (east):  from (4,2) to (6,2) → Δx = 2 squares.
//    Bot arrives at (6,2) facing east — lined up with right goal.
//    kick() fires east straight into the goal.
//
//  Turn rule: from south, turnRight() faces east (+x = right wall).
//
//  Path:   (4,0)
//            │ drive 2
//          (4,2) ── turnRight ──→ facing east
//            └─── drive 2 ───→ (6,2)[ball] ─ kick → right goal
//
function cornerKickRight(): void {
    drive(2)      // south: (4,0) → (4,2)
    turnRight()   // south → east
    drive(2)      // east:  (4,2) → (6,2), contacting ball
    kick()        // blast east into right goal
}


// ── Challenge 6 — THE LAWNMOWER ───────────────────────────────────
//
//  Start:  (0, 0)  facing south (+y)
//  Goal:   sweep every row — 8 straight segments, 7 turns.
//
//  Full path trace (facing shown after each turn):
//
//  Seg 1:  south  drive(4)   (0,0)→(0,4)
//  Turn 1: turnRight()       south → east
//  Seg 2:  east   drive(8)   (0,4)→(8,4)
//  Turn 2: turnRight()       east  → north
//  Seg 3:  north  drive(1)   (8,4)→(8,3)
//  Turn 3: turnRight()       north → west
//  Seg 4:  west   drive(8)   (8,3)→(0,3)
//  Turn 4: turnLeft()        west  → north
//  Seg 5:  north  drive(1)   (0,3)→(0,2)
//  Turn 5: turnLeft()        north → east
//  Seg 6:  east   drive(8)   (0,2)→(8,2)
//  Turn 6: turnRight()       east  → north
//  Seg 7:  north  drive(1)   (8,2)→(8,1)
//  Turn 7: turnRight()       north → west
//  Seg 8:  west   drive(8)   (8,1)→(0,1)
//
//  Why turnLeft() on turns 4 and 5?
//    After sweeping right-to-left (west), the bot needs to step
//    UP one row (north) then turn back east.  From west, a
//    turnLeft() points north; from north, another turnLeft()
//    points east.  This keeps the snaking pattern consistent.
//
//  Turn direction table (for reference):
//    turnRight():  south→east, east→north, north→west, west→south
//    turnLeft():   south→west, west→north, north→east, east→south
//
function lawnmower(): void {
    // ── Row sweep: y = 0 → 4 (south, left edge) ──
    drive(4)      // (0,0) → (0,4)   facing south
    turnRight()   // south → east

    // ── Row sweep: y = 4 (east, full width) ──
    drive(8)      // (0,4) → (8,4)   facing east
    turnRight()   // east → north

    // ── Step up one row ──
    drive(1)      // (8,4) → (8,3)   facing north
    turnRight()   // north → west

    // ── Row sweep: y = 3 (west, full width) ──
    drive(8)      // (8,3) → (0,3)   facing west
    turnLeft()    // west → north

    // ── Step up one row ──
    drive(1)      // (0,3) → (0,2)   facing north
    turnLeft()    // north → east

    // ── Row sweep: y = 2 (east, full width) ──
    drive(8)      // (0,2) → (8,2)   facing east
    turnRight()   // east → north

    // ── Step up one row ──
    drive(1)      // (8,2) → (8,1)   facing north
    turnRight()   // north → west

    // ── Row sweep: y = 1 (west, full width) ──
    drive(8)      // (8,1) → (0,1)   facing west
    // done — 8 segments, 7 turns, all 4 rows covered
}


// ── Challenge 7 — TWO-BALL COMBO ─────────────────────────────────
//
//  Start:  (4, 0)  facing south (+y)
//  Ball A: (2, 2)  → left goal zone  (x = 0–1, y = 1–3)
//  Ball B: (6, 2)  → right goal zone (x = 7–8, y = 1–3)
//
//  This challenge has no single correct route. Two valid paths:
//
//  ── Path A: kick Ball A first ────────────────────────────────────
//
//    drive(2)       south: (4,0) → (4,2)   facing south
//    turnLeft()     south → west
//    drive(2)       west: (4,2) → (2,2)    facing west  [Ball A]
//    kick()         Ball A fires west → left goal ✓
//    turnRight()    west → south
//    turnRight()    south → east
//    drive(4)       east: (2,2) → (6,2)    facing east  [Ball B]
//    kick()         Ball B fires east → right goal ✓
//
//  ── Path B: kick Ball B first (mirror of A) ──────────────────────
//
//    drive(2)       south: (4,0) → (4,2)   facing south
//    turnRight()    south → east
//    drive(2)       east: (4,2) → (6,2)    facing east  [Ball B]
//    kick()         Ball B fires east → right goal ✓
//    turnLeft()     east → south
//    turnLeft()     south → west
//    drive(4)       west: (6,2) → (2,2)    facing west  [Ball A]
//    kick()         Ball A fires west → left goal ✓
//
//  Turn direction reference:
//    turnRight():  south→east, east→north, north→west, west→south
//    turnLeft():   south→west, west→north, north→east, east→south
//
function twoBallCombo(): void {
    // ── PATH A: Ball A first ──────────────────────────────────
    drive(2)       // south: (4,0) → (4,2)
    turnLeft()     // south → west
    drive(2)       // west: (4,2) → (2,2), contacts Ball A
    kick()         // Ball A fires west → left goal

    turnRight()    // west → south
    turnRight()    // south → east
    drive(4)       // east: (2,2) → (6,2), contacts Ball B
    kick()         // Ball B fires east → right goal
}


// ── Challenge 8 — POWER CONTROL LAB ──────────────────────────────
//
//  Start:  (3, 2)  facing west (toward x = 0)
//  Ball:   (2, 2)  — reset to this position before every run
//  Goal:   Left goal zone (x = 0–1)  — ball fires west
//
//  Run 3 times, changing only POWER each time:
//    Run 1: POWER = 3  →  chargePower =  9%
//    Run 2: POWER = 6  →  chargePower = 36%
//    Run 3: POWER = 9  →  chargePower = 81%
//
//  Expected observation:
//    The distance increase is NOT linear. The chargePower values
//    increase by 27% (3→6) then by 45% (6→9). Ball distance
//    should also jump more on the second step than the first.
//    This is because chargePower = POWER² — a quadratic, not
//    linear, function of POWER.
//
//  Code is identical each run — only POWER in STUDENT ZONE A
//  changes. Re-flash after every POWER change.
//
function powerControlLab(): void {
    drive(1)   // west: (3,2) → (2,2), contacting the ball
    kick()     // fires west at chargePower = POWER²
}


// ── Challenge 9 — PRECISION PARKING ──────────────────────────────
//
//  Start:  (0, 0)  facing east (+x)
//  Target: taped box at (5, 3), final facing = WEST
//
//  Spatial reasoning:
//    To stop at (5,3) facing WEST, we need to arrive from the
//    east side (driving west into the box), OR arrive from
//    another direction and turn to face west.
//
//  ── Clean 4-call solution (approach from north) ───────────────
//
//    drive(5)     east:  (0,0) → (5,0)   facing east
//    turnLeft()   east → south            now facing south
//    drive(3)     south: (5,0) → (5,3)   facing south  [AT BOX]
//    turnLeft()   south → west            now facing west ✓
//
//  Note: the bot STOPS after the final turnLeft() — it is
//  already at (5,3). No extra drive() needed.
//
//  ── Alternative 6-call solution (approach from west) ──────────
//
//    turnLeft()   east → south
//    drive(3)     south: (0,0) → (0,3)   facing south
//    turnRight()  south → east
//    drive(5)     east: (0,3) → (5,3)    facing east  [AT BOX]
//    turnRight()  east → north
//    turnRight()  north → west            facing west ✓
//
function precisionParking(): void {
    drive(5)     // east:  (0,0) → (5,0)
    turnLeft()   // east → south
    drive(3)     // south: (5,0) → (5,3)  [inside box]
    turnLeft()   // south → west  ✓  [done — facing west, inside box]
}


// ── Challenge 10 — BOSS LEVEL ─────────────────────────────────────
//
//  Start:  (4, 0)  facing south (+y)
//  Ball:   (4, 2)
//  Cone:   (4, 1)  — cannot drive through this coordinate
//  Parking zone: x = 0–1, y = 0  (top-left corner)
//
//  Strategy: detour left (west) around cone, kick into right goal
//  (easiest from east-facing approach), then return north to park.
//
//  ── Phase 1: Detour around cone (go left / west) ──────────────
//
//    turnLeft()    south → west
//    drive(1)      west: (4,0) → (3,0)
//    turnRight()   west → south
//    drive(2)      south: (3,0) → (3,2)
//
//  ── Phase 2: Reach ball at (4,2) ──────────────────────────────
//
//    turnRight()   south → east
//    drive(1)      east: (3,2) → (4,2)  [at ball, facing east]
//
//  ── Phase 3: Kick into right goal ─────────────────────────────
//
//    kick()        fires east → right goal (x=7–8) ✓
//
//  ── Phase 4: Drive to parking zone (x=0–1, y=0) ──────────────
//
//    turnRight()   east → north
//    drive(2)      north: (4,2) → (4,0)
//    turnRight()   north → west
//    drive(3)      west: (4,0) → (1,0)  [in parking zone ✓]
//
//  Full path trace:
//    (4,0) ─ L ─▶ west ─ d1 ─▶ (3,0)
//    ─ R ─▶ south ─ d2 ─▶ (3,2)
//    ─ R ─▶ east ─ d1 ─▶ (4,2) [ball] ─ kick ─▶ right goal
//    ─ R ─▶ north ─ d2 ─▶ (4,0)
//    ─ R ─▶ west ─ d3 ─▶ (1,0) [parked ✓]
//
function bossLevel(): void {
    // Phase 1: detour left around cone at (4,1)
    turnLeft()    // south → west
    drive(1)      // west: (4,0) → (3,0)
    turnRight()   // west → south
    drive(2)      // south: (3,0) → (3,2)

    // Phase 2: reach ball at (4,2)
    turnRight()   // south → east
    drive(1)      // east: (3,2) → (4,2) [contacts ball]

    // Phase 3: kick into right goal
    kick()        // fires east → right goal (x=7–8)

    // Phase 4: drive to parking zone
    turnRight()   // east → north
    drive(2)      // north: (4,2) → (4,0)
    turnRight()   // north → west
    drive(3)      // west: (4,0) → (1,0) [parking zone x=0–1 ✓]
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  STARTUP
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CutebotPro.stopImmediately(CutebotProMotors.ALL)
CutebotPro.pwmCruiseControl(0, 0)
basic.pause(100)

basic.showString("P" + motorPower)
basic.pause(400)
basic.showString("K" + chargePower)
basic.pause(400)

basic.showNumber(currentChallenge)
