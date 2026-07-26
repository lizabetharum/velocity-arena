/**
 * ============================================================
 * LAUNCH TEST  —  Cutebot Pro
 * Press A -> two-leg launch, roll up to the ball, kick, STOP.
 * If any line sensor crosses the BLACK LINE (after leaving the
 * start line), the bot just STOPS. Press A again to re-run.
 *
 * You change only:
 *   1. the four STATS below (must total 20)
 *   2. the four ★ LAUNCH numbers (2 turn angles, 2 drive times)
 *
 *   drive speed   = SPEED x 100 / 20
 *   kick strength = POWER x POWER   (capped at 100)
 * ============================================================
 */

input.onButtonPressed(Button.A, function () {
    computeStats()
    if (SPEED + TURNING + ENDURANCE + POWER != 20) {
        basic.showString("20")                 // stats must total 20
        basic.pause(900); basic.clearScreen(); return
    }
    basic.showIcon(IconNames.Yes); basic.pause(200); basic.clearScreen()

    lineArmed = false          // we START on the line -> ignore it until we roll off

    // LEG 1 — turn LEFT, then drive forward to the midline
    CutebotPro.trolleySteering(CutebotProTurn.LeftInPlace, 45)   // ★ 1. LEG-1 ANGLE
    basic.pause(300)
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
    basic.pause(150)
    if (driveForwardOrStop(2000)) { basic.showIcon(IconNames.No); return }   // ★ 2. ms1

    // LEG 2 — turn RIGHT, then drive forward toward the ball
    CutebotPro.trolleySteering(CutebotProTurn.RightInPlace, 45)  // ★ 3. LEG-2 ANGLE
    basic.pause(300)
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
    basic.pause(150)
    if (driveForwardOrStop(1000)) { basic.showIcon(IconNames.No); return }   // ★ 4. ms2

    // LOOK FOR BALL — roll up; stop if we cross the black line first
    let t0 = input.runningTime()
    CutebotPro.pwmCruiseControl(motorPower, motorPower)
    while (input.runningTime() - t0 < 1000) {
        if (lineHitArmed()) { motorStop(); basic.showIcon(IconNames.No); return }
        let d = CutebotPro.ultrasonic(SonarUnit.Centimeters)
        if (d > 3 && d < 10) {                 // ball right in front -> charge + kick
            ballDetected = true
            chargeAndFollowThrough()
        }
        basic.pause(5)
    }
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
    basic.pause(80)

    // KICK straight through (Power²) — stop if we cross the black line mid-kick
    let kt = input.runningTime()
    CutebotPro.pwmCruiseControl(chargePower, chargePower)
    while (input.runningTime() - kt < FOLLOW_THROUGH_MS) {
        if (lineHitArmed()) { motorStop(); basic.showIcon(IconNames.No); return }
        basic.pause(5)
    }
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
})

// Drive the ball forward; keep pushing while it stays in front. Stop instantly
// if we cross the black line.
function chargeAndFollowThrough() {
    flashHeadlights()
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    let charge = Math.max(chargePower, 30)     // don't push weaker than 30

    while (ballDetected) {
        if (lineHitArmed()) { motorStop(); ballDetected = false; break }   // black line -> STOP
        CutebotPro.pwmCruiseControl(charge, charge)
        let f = CutebotPro.ultrasonic(SonarUnit.Centimeters)
        ballDetected = (f > 5 && f < BALL_DETECT_CM)   // still in contact? keep driving through
    }
}

function flashHeadlights() {
    CutebotPro.singleHeadlights(CutebotProRGBLight.RGBA, 255, 255, 255)
    basic.pause(30)
    CutebotPro.singleHeadlights(CutebotProRGBLight.RGBA, 0, 0, 0)
}

function computeStats() {
    motorPower = SPEED * 100 / 20
    chargePower = Math.min(POWER * POWER, 100)
    FOLLOW_THROUGH_MS = 120 + POWER * 35
}

// Take ONE I2C sample of the four line sensors into module temps.
function readTrackbit() {
    CutebotPro.trackbitStateValue()
    tb1 = CutebotPro.trackbitgetGray(TrackbitChannel.One)
    tb2 = CutebotPro.trackbitgetGray(TrackbitChannel.Two)
    tb3 = CutebotPro.trackbitgetGray(TrackbitChannel.Three)
    tb4 = CutebotPro.trackbitgetGray(TrackbitChannel.Four)
}

// True if any sensor is over the black line (value above threshold).
function onBlackLine(): boolean {
    return tb1 > BORDER_THRESHOLD || tb2 > BORDER_THRESHOLD
        || tb3 > BORDER_THRESHOLD || tb4 > BORDER_THRESHOLD
}

// Line-stop that ignores the START line. Arms only after we've rolled onto
// clear floor; after that, the next black line returns true (stop).
function lineHitArmed(): boolean {
    readTrackbit()
    let hit = onBlackLine()
    if (!lineArmed) {
        if (!hit) { lineArmed = true }   // left the start line -> now armed
        return false
    }
    return hit
}

// Drive straight for up to `ms`, but STOP and bail if we cross a NEW black line.
function driveForwardOrStop(ms: number): boolean {
    CutebotPro.pwmCruiseControl(motorPower, motorPower)
    let t0 = input.runningTime()
    while (input.runningTime() - t0 < ms) {
        if (lineHitArmed()) { motorStop(); return true }
        basic.pause(5)
    }
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
    return false
}

// Stop the motors reliably. Double-stops because the driver can latch a previous
// command when the I2C bus is busy; the extra stop clears that.
function motorStop() {
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
    basic.pause(10)
    CutebotPro.pwmCruiseControl(0, 0)
    basic.pause(10)
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
}

// ============================================================
// VARIABLES
// ============================================================
let ballDetected = false
let lineArmed = false

let motorPower = 0
let chargePower = 0
let FOLLOW_THROUGH_MS = 0

let tb1 = 0
let tb2 = 0
let tb3 = 0
let tb4 = 0

let BALL_DETECT_CM = 40        // keep pushing the ball while it's within this range
let BORDER_THRESHOLD = 130     // black-line trigger

// --- Student stats ---
let SPEED = 0
let ENDURANCE = 0
let TURNING = 0
let POWER = 0

// --- Display ---
let strip: neopixel.Strip = null

// ============================================================
// INITIALIZATION
// ============================================================
strip = neopixel.create(DigitalPin.P15, 8, NeoPixelMode.RGB)
strip.setBrightness(255)

CutebotPro.stopImmediately(CutebotProMotors.ALL)
CutebotPro.pwmCruiseControl(0, 0)
basic.pause(100)

/* ============================================================================
 *  ★ STAT ALLOCATION ★  — four whole numbers, each ≥ 1, MUST total 20.
 *    SPEED = drive speed · TURNING = aim sharpness ·
 *    ENDURANCE = late-match power · POWER = kick strength (≤10, Power² caps at 100)
 * ============================================================================
 */
SPEED = 0      // <- YOUR VALUE
TURNING = 0    // <- YOUR VALUE
ENDURANCE = 0  // <- YOUR VALUE
POWER = 0      // <- YOUR VALUE
// CHECK: SPEED + TURNING + ENDURANCE + POWER must equal 20

BORDER_THRESHOLD = 130     // black-line trigger; adjust to your floor
