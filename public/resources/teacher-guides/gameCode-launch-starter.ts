/**
 * ============================================================
 * CUTEBOT PRO SOCCER  —  LAUNCH SEQUENCE STARTER
 * (match code with the two-leg launch already placed in STUDENT ZONE B —
 *  students change only the four ★ numbers: two angles + two drive times)
 * 8' x 4' Field | White Floor | Black Border Tape
 * ============================================================
 *
 * BLACK-LINE BEHAVIOR: crossing the black tape anywhere (launch, roam, or the
 * charge) runs handleBorder() to back off, turn away, and recover. The START
 * line under the bot in the corner is ignored until it rolls off it (lineArmed).
 * ============================================================
 */

// ============================================================
// MOTOR STOP HELPER
// ============================================================

// Stop the motors reliably. Double-stops because the motor driver can latch a
// previous command when the I2C bus is busy; the extra stop clears that.
function motorStop() {
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
    basic.pause(10)
    CutebotPro.pwmCruiseControl(0, 0)
    basic.pause(10)
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
}

// Drive straight for up to `ms`. Ignores the START line, but the moment we cross
// a NEW black line it stops and runs full border recovery (handleBorder).
function driveForwardOrStop(ms: number): boolean {
    CutebotPro.pwmCruiseControl(motorPower, motorPower)
    let t0 = input.runningTime()
    while (input.runningTime() - t0 < ms) {
        readTrackbit()
        let side = borderSideFrom(BORDER_THRESHOLD)
        if (!lineArmed) {
            if (side == 0) { lineArmed = true }      // rolled off the start line -> armed
        } else if (side > 0) {
            borderSide = side
            motorStop()
            handleBorder()                            // hit a NEW black line -> recover
            return true
        }
        basic.pause(5)
    }
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
    return false
}

// ============================================================
// TRACKBIT / BORDER PRIMITIVES  (single source of truth)
// ============================================================

// Take ONE I2C sample of the four line sensors into module-level temps.
// Every border interpretation below reads those temps (no extra I2C traffic).
function readTrackbit() {
    CutebotPro.trackbitStateValue()
    tb1 = CutebotPro.trackbitgetGray(TrackbitChannel.One)
    tb2 = CutebotPro.trackbitgetGray(TrackbitChannel.Two)
    tb3 = CutebotPro.trackbitgetGray(TrackbitChannel.Three)
    tb4 = CutebotPro.trackbitgetGray(TrackbitChannel.Four)
}

// Classify the LAST readTrackbit() sample against `threshold`. Returns which side
// of the border is triggered:
//   1 = left-front (ch1)   2 = right-front (ch4)
//   3 = center (ch2/ch3)   4 = both outer (head-on)   0 = clear
function borderSideFrom(threshold: number): number {
    if (tb1 > threshold && tb4 > threshold) { return 4 }
    if (tb1 > threshold) { return 1 }
    if (tb4 > threshold) { return 2 }
    if (tb2 > threshold || tb3 > threshold) { return 3 }
    return 0
}

// Average of the four line sensors (used by calibration + adaptive floor tracking).
function trackbitFloorAvg(): number {
    return Math.round((tb1 + tb2 + tb3 + tb4) / 4)
}

// Public border check for use OUTSIDE driveAndWatch. Takes a fresh sample each
// call. Returns the border side (see borderSideFrom) or 0. Always 0 during the
// launch kick (launchActive) so the goal-line tape can't abort it.
function checkBorder(): number {
    if (launchActive) { return 0 }
    readTrackbit()
    let side = borderSideFrom(BORDER_THRESHOLD)
    if (side > 0) { borderSide = side }
    return side
}

// Turn away from a detected border side by `angle` degrees, in place.
// Sides 1/2 are deterministic (turn away from that side); head-on hits (3/4)
// alternate left/right so we don't oscillate back into the same corner.
function turnAwayFrom(side: number, angle: number) {
    if (side == 1) {
        CutebotPro.trolleySteering(CutebotProTurn.RightInPlace, angle)
        lastTurnWasLeft = false
    } else if (side == 2) {
        CutebotPro.trolleySteering(CutebotProTurn.LeftInPlace, angle)
        lastTurnWasLeft = true
    } else if (lastTurnWasLeft) {
        CutebotPro.trolleySteering(CutebotProTurn.RightInPlace, angle)
        lastTurnWasLeft = false
    } else {
        CutebotPro.trolleySteering(CutebotProTurn.LeftInPlace, angle)
        lastTurnWasLeft = true
    }
}

// ============================================================
// DRIVE UNTIL BALL  (border-aware; sonar closes the final gap)
// ============================================================

// Drive straight forward for up to `maxMs`, stopping early when the sonar
// confirms a ball within BALL_DETECT_CM. Returns true if a ball was captured,
// false on timeout / border / match end.
function driveUntilBall(maxMs: number): boolean {
    let t0 = input.runningTime()
    CutebotPro.pwmCruiseControl(currentPower, currentPower)
    while (input.runningTime() - t0 < maxMs) {
        if (!matchRunning) { return false }
        if (matchExpired()) { endMatch(); return false }
        if (checkBorder() > 0) { motorStop(); handleBorder(); return false }

        let d = CutebotPro.ultrasonic(SonarUnit.Centimeters)
        if (d > 4 && d < BALL_DETECT_CM) {
            motorStop()
            if (confirmBall(true)) { return true }
            CutebotPro.pwmCruiseControl(currentPower, currentPower)   // false alarm, keep going
        }
        basic.pause(5)
    }
    motorStop()
    return false
}

/* ============================================================================
 *  ★ STUDENT ZONE B — LAUNCH SEQUENCE ★
 * ============================================================================
 *  This runs ONCE when the match starts. Program your bot's opening move.
 *
 *  THE BIG IDEA -- line up THREE things:   YOUR BOT  ->  THE BALL  ->  THE GOAL
 *  Your kick sends the ball the way the bot is FACING, so finish your launch
 *  BEHIND the ball and pointed straight at the goal.
 *
 *  ── TURN IN PLACE ──
 *     CutebotPro.trolleySteering(CutebotProTurn.LeftInPlace,  45)   // spin left 45 deg
 *     CutebotPro.trolleySteering(CutebotProTurn.RightInPlace, 90)   // spin right 90 deg
 *
 *  ── DRIVE FORWARD (border-aware) ──
 *     driveForwardOrStop(ms)   // drives forward; if it hits the black line it
 *                              // runs handleBorder() and returns true
 *  ── WORKED EXAMPLE (ball 81 cm forward, 81 cm left -> 45 deg) ──
 *     CutebotPro.trolleySteering(CutebotProTurn.LeftInPlace, 45)
 *     basic.pause(300)
 *     CutebotPro.stopImmediately(CutebotProMotors.ALL); basic.pause(150)
 *     driveForwardOrStop(2000)
 *     CutebotPro.trolleySteering(CutebotProTurn.RightInPlace, 45)
 * ============================================================================
 */
function launchSequence() {
    // Border detection is ON during the launch: if we cross the black line we run
    // handleBorder and bail into the match loop. The START line under the bot is
    // ignored until we roll off it (lineArmed).
    launchActive = false
    lineArmed = false
    let powerScale = 30 / Math.max(1, motorPower)  // <- DO NOT DELETE (only used if you drive by TIME)

    // ══════════════════════════════════════════════════════════════════
    //   ★ YOUR LAUNCH — change ONLY the four ★ numbers, nothing else. ★
    //   Two-leg path:  corner  →  midline  →  ball.
    // ══════════════════════════════════════════════════════════════════

    // LEG 1 — turn LEFT, then drive forward to the midline
    CutebotPro.trolleySteering(CutebotProTurn.LeftInPlace, 45)   // ★ 1. LEG-1 ANGLE
    basic.pause(300)
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
    basic.pause(150)
    if (driveForwardOrStop(1900)) { return }   // ★ 2. ms1 — hit line -> handleBorder ran, go to match

    // LEG 2 — turn RIGHT, then drive forward toward the ball
    CutebotPro.trolleySteering(CutebotProTurn.RightInPlace, 45)  // ★ 3. LEG-2 ANGLE
    basic.pause(300)
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
    basic.pause(150)
    if (driveForwardOrStop(800)) { return }   // ★ 4. ms2 — hit line -> handleBorder ran, go to match

    CutebotPro.stopImmediately(CutebotProMotors.ALL)
    basic.pause(150)

    // ========================================================================
    //   LOCKED -- do not change anything below this line.
    //   Drives the last bit to the ball, then kicks it straight through the goal.
    // ========================================================================
    motorStop()
    launchActive = false
    basic.pause(30)
    if (checkBorder() > 0) { handleBorder(); return }
    if (!matchRunning) { return }

    // Roll forward to close the final gap to the ball (best-effort).
    driveUntilBall(Math.round(LAUNCH_APPROACH_MS * powerScale))
    if (!matchRunning) { return }

    // Commit the kick straight through the goal.
    ballDetected = true
    chargeAndFollowThrough()                       // black line -> handleBorder (inside)

    if (!matchRunning) { return }
    motorStop(); basic.pause(60)
    if (checkBorder() > 0) { handleBorder() }
}

// ============================================================
// THRESHOLD CALIBRATION  (press A -> step through W then B)
// ============================================================
// Samples the white floor and the black tape, then sets BORDER_THRESHOLD 55% of
// the way between them. Shows F(floor) / T(tape) / TH(threshold) at the end.
function calibrateThreshold() {
    const NUM_SAMPLES = 30
    const SAMPLE_MS = 40

    // ---- White floor: press B to capture ----
    strip.showColor(neopixel.rgb(0, 0, 255))
    basic.showString("W")
    while (!input.buttonIsPressed(Button.B)) { basic.pause(20) }
    basic.pause(80)
    while (input.buttonIsPressed(Button.B)) { basic.pause(20) }
    basic.pause(100)
    strip.showColor(neopixel.rgb(0, 0, 128))
    basic.clearScreen(); basic.showIcon(IconNames.SmallSquare)

    let floorTotal = 0
    for (let i = 0; i < NUM_SAMPLES; i++) {
        readTrackbit()
        floorTotal += trackbitFloorAvg()
        basic.pause(SAMPLE_MS)
    }
    let floorAvg = Math.round(floorTotal / NUM_SAMPLES)

    strip.showColor(neopixel.rgb(0, 0, 0)); basic.pause(150)
    strip.showColor(neopixel.rgb(0, 0, 255)); basic.pause(150)
    strip.showColor(neopixel.rgb(0, 0, 0)); basic.pause(150)

    // ---- Black tape: press B to capture ----
    strip.showColor(neopixel.rgb(0, 255, 0))
    basic.showString("B")
    while (!input.buttonIsPressed(Button.B)) { basic.pause(20) }
    basic.pause(80)
    while (input.buttonIsPressed(Button.B)) { basic.pause(20) }
    basic.pause(100)
    strip.showColor(neopixel.rgb(0, 128, 0))
    basic.clearScreen(); basic.showIcon(IconNames.SmallSquare)

    let tapeTotal = 0
    for (let i = 0; i < NUM_SAMPLES; i++) {
        readTrackbit()
        tapeTotal += trackbitFloorAvg()
        basic.pause(SAMPLE_MS)
    }
    let tapeAvg = Math.round(tapeTotal / NUM_SAMPLES)

    // Threshold sits 55% from floor to tape. Remember the margin above the floor
    // so the adaptive tracker (in driveAndWatch) can preserve it as the floor drifts.
    BORDER_THRESHOLD = Math.round(floorAvg + (tapeAvg - floorAvg) * 0.55)
    BORDER_THRESHOLD = Math.max(80, Math.min(220, BORDER_THRESHOLD))
    borderMargin = BORDER_THRESHOLD - floorAvg
    floorBaseline = floorAvg

    strip.showColor(neopixel.rgb(255, 255, 255)); basic.pause(400)
    strip.showColor(neopixel.rgb(0, 0, 0))
    basic.showString("F" + floorAvg); basic.pause(100)
    basic.showString("T" + tapeAvg); basic.pause(100)
    basic.showString("TH" + BORDER_THRESHOLD); basic.pause(200)
    basic.clearScreen()
}

// ============================================================
// GOAL HEADING CALIBRATION  (press A -> point at goal, press B)
// ============================================================
// Captures the compass heading toward the opponent's goal. Used for goal-biased
// roaming, repositioning, and own-goal avoidance.
function calibrateGoalHeading() {
    strip.showColor(neopixel.rgb(255, 0, 255))
    basic.showString("G")
    while (input.buttonIsPressed(Button.B)) { basic.pause(20) }
    basic.pause(100)
    while (!input.buttonIsPressed(Button.B)) { basic.pause(20) }
    basic.pause(80)
    while (input.buttonIsPressed(Button.B)) { basic.pause(20) }
    basic.pause(100)
    basic.pause(300)

    let hSum = 0
    for (let i = 0; i < 10; i++) { hSum += input.compassHeading(); basic.pause(30) }
    goalHeading = Math.round(hSum / 10) % 360
    goalHeadingValid = true

    strip.showColor(neopixel.rgb(255, 255, 255)); basic.pause(400)
    strip.showColor(neopixel.rgb(0, 0, 0))
    basic.showString("G" + goalHeading); basic.pause(300)
    basic.clearScreen()
}

// ============================================================
// BUTTON HANDLERS
// ============================================================

// A: first press = set up & calibrate (-> "ready"); second press = start match.
input.onButtonPressed(Button.A, function () {
    if (!matchRunning && !readyToLaunch) {
        // ---- Setup / calibration pass ----
        computeStats()
        calibrateThreshold()
        calibrateGoalHeading()
        ownGoalHeading = (goalHeading + 180) % 360
        readyToLaunch = true

        if (SPEED + ENDURANCE + TURNING + POWER != 20) {
            basic.showString("ERR")
            basic.pause(1000)
            basic.clearScreen()
            return
        }
        showStatBars()               // quick 4-stat bar chart
        basic.pause(1200)
        basic.clearScreen()
        basic.showIcon(IconNames.Target)
    } else if (readyToLaunch) {
        // ---- Start the match ----
        readyToLaunch = false
        matchStartTime = input.runningTime()
        lastBaselineUpdate = input.runningTime()
        matchRunning = true
        ballDetected = false
        ballHeading = 0
        roamCounter = 0
        lostScans = 0
        lastCachedHeading = -1
        lastHeadingTime = 0
        sameDirectionCount = 0
        maxSameDirection = Math.randomRange(1, 2)
        lastTurnWasLeft = false
        resetRequested = false
        enduranceFactor = 1                       // full strength for the launch kick
        lowPowerActive = false
        homeProximity = 0.5                       // neutral until a wall pins our field end
        lastHomeUpdate = input.runningTime()
        basic.showIcon(IconNames.Yes); basic.pause(300); basic.clearScreen()
        launchSequence()
        matchLoop()
    }
})

// B: soft reset during a match (handled at the top of matchLoop).
input.onButtonPressed(Button.B, function () {
    if (matchRunning) {
        CutebotPro.stopImmediately(CutebotProMotors.ALL)
        CutebotPro.pwmCruiseControl(0, 0)
        resetRequested = true
    }
})

// A+B: hard stop the match.
input.onButtonPressed(Button.AB, function () {
    matchRunning = false
    ballDetected = false
    motorStop()
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(500)
    basic.clearScreen()
})

// ============================================================
// HEADING (compass)
// ============================================================

// How long a cached heading stays valid, in ms. Slower bots can trust it longer.
function headingCacheTTL(): number {
    if (SPEED <= 4) { return 400 }
    if (SPEED <= 7) { return 200 }
    return 100
}

// Return a heading only if two reads 50ms apart agree (within tolerance); else -1.
// Uses a short-lived cache so we don't spam the compass while moving.
function stableHeading(): number {
    let now = input.runningTime()
    if (lastCachedHeading >= 0 && (now - lastHeadingTime) < headingCacheTTL()) {
        return lastCachedHeading
    }
    let h1 = input.compassHeading()
    basic.pause(50)
    let h2 = input.compassHeading()
    let diff = Math.abs(h1 - h2)
    if (diff > 180) { diff = 360 - diff }
    if (diff > 16) { lastCachedHeading = -1; return -1 }   // loosened: availability > precision
    lastCachedHeading = Math.round((h1 + h2) / 2) % 360
    lastHeadingTime = now
    return lastCachedHeading
}

// Blocking heading read for use while STATIONARY (compass is most reliable then).
function stableHeadingBlocking(): number {
    basic.pause(50)                  // let chassis vibration settle
    for (let i = 0; i < 5; i++) {
        lastCachedHeading = -1
        let h = stableHeading()
        if (h >= 0) { return h }
        basic.pause(40)
    }
    return -1
}

// ============================================================
// MATCH CONTROL HELPERS
// ============================================================

// True once the 180-second match clock has run out.
function matchExpired(): boolean {
    return matchRunning && (input.runningTime() - matchStartTime) / 1000 >= 180
}

// End the match and stop the motors.
function endMatch() {
    matchRunning = false
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
}

// Active brake: a brief reverse pulse (scaled by speed) then a hard stop.
function hardStop() {
    let brakeTime = 160 + Math.max(SPEED - 5, 0) * 35
    CutebotPro.pwmCruiseControl(-80, -80)
    basic.pause(brakeTime)
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
}

// Soft reset (B button): clear ball/border state and flash white, without ending
// the match. Called at the top of matchLoop.
function handleReset() {
    if (!resetRequested) { return }
    resetRequested = false
    borderSide = 0
    ballDetected = false
    ballHeading = 0
    lowPowerActive = false
    roamCounter = 0
    sameDirectionCount = 0
    lastCachedHeading = -1
    lastHeadingTime = 0
    maxSameDirection = Math.randomRange(1, 2)
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    basic.pause(100)
    strip.clear()
}

// ============================================================
// ROAM STEP  (one search arc + checks)
// ============================================================
function roamStep() {
    let h0 = stableHeadingBlocking()

    let gs = 0
    if (goalHeadingValid) {
        gs = goalSide()
    }

    if (sameDirectionCount >= maxSameDirection) {
        sameDirectionCount = 0
        maxSameDirection = Math.randomRange(1, 2)
        if (gs < 0 && Math.randomRange(0, 9) < 7) {
            lastTurnWasLeft = true          // goal is to the LEFT -> arc left
        } else if (gs > 0 && Math.randomRange(0, 9) < 7) {
            lastTurnWasLeft = false         // goal is to the RIGHT -> arc right
        } else {
            lastTurnWasLeft = !lastTurnWasLeft   // no goal info -> keep alternating
        }
    } else {
        sameDirectionCount += 1
    }

    let dynamicRatio = Math.max(0.10, Math.min(0.45,
        turnRatio + Math.randomRange(-8, 8) / 100))

    let speedDurationBonus = SPEED * 12
    let dynamicDuration = lowPowerActive
        ? Math.max(Math.min(thisDuration / 2 + Math.randomRange(-50, 50), 300), 150)
        : Math.max(Math.min(thisDuration + speedDurationBonus + Math.randomRange(-50, 50), 550), 150)

    let lSpeed: number
    let rSpeed: number
    if (lastTurnWasLeft) {
        lSpeed = Math.round(currentPower * (1 - dynamicRatio))
        rSpeed = Math.round(currentPower * (1 + dynamicRatio))
        strip.showColor(lowPowerActive ? neopixel.colors(NeoPixelColors.Red)
            : neopixel.colors(NeoPixelColors.Blue))
    } else {
        lSpeed = Math.round(currentPower * (1 + dynamicRatio))
        rSpeed = Math.round(currentPower * (1 - dynamicRatio))
        strip.showColor(lowPowerActive ? neopixel.colors(NeoPixelColors.Red)
            : neopixel.rgb(0, 255, 0))
    }

    lSpeed = Math.max(lSpeed, minWheelSpeed)
    rSpeed = Math.max(rSpeed, minWheelSpeed)
    if (lowPowerActive) {
        lSpeed = Math.min(lSpeed, currentPower)
        rSpeed = Math.min(rSpeed, currentPower)
    }

    borderHandledInSeg = false
    CutebotPro.pwmCruiseControl(lSpeed, rSpeed)
    driveAndWatch(dynamicDuration, lSpeed, rSpeed)

    if (!borderHandledInSeg && !ballDetected) {
        CutebotPro.pwmCruiseControl(-40, -40)   // brief active brake at segment end
        basic.pause(40)
    }
    motorStop()

    if (!ballDetected && matchRunning) {
        basic.pause(40)
        if (checkBorder() > 0) {
            handleBorder()
            if (ballDetected) { return }
        } else {
            roamCounter += 1

            if (h0 >= 0 && !borderHandledInSeg) {
                let h1 = stableHeadingBlocking()
                if (h1 >= 0 && angleDiffAbs(h0, h1) < 5) {
                    CutebotPro.pwmCruiseControl(45, -45)        // spin-in-place test
                    basic.pause(250)
                    CutebotPro.stopImmediately(CutebotProMotors.ALL)
                    basic.pause(60)
                    let h2 = stableHeadingBlocking()
                    if (h2 >= 0 && angleDiffAbs(h1, h2) < 12) {
                        unstick()                              // confirmed jam -> break free
                    }
                }
            }
        }
    }
}

// ============================================================
// REPOSITION: drop back to our side, then look down the field
// ============================================================
function repositionHome() {
    if (!matchRunning || !goalHeadingValid || lowPowerActive) { return }
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))

    // 1. Face our own side.
    turnToHeading(ownGoalHeading, 15)
    if (!matchRunning) { return }

    // 2. Drive back to our own side. IGNORE the ball on the way.
    let t0 = input.runningTime()
    let hitEdge = false
    let lastKeep = input.runningTime()
    CutebotPro.pwmCruiseControl(currentPower, currentPower)
    while (input.runningTime() - t0 < REPOSITION_MS) {
        if (!matchRunning) { motorStop(); return }
        if (matchExpired()) { endMatch(); return }
        if (checkBorder() > 0) { motorStop(); hitEdge = true; break }   // reached our back edge
        if (input.runningTime() - lastKeep > 200) {
            lastKeep = input.runningTime()
            CutebotPro.pwmCruiseControl(currentPower, currentPower)     // keep-alive
        }
        basic.pause(8)
    }
    motorStop()
    borderSide = 0
    if (!matchRunning) { return }

    if (hitEdge) {
        CutebotPro.pwmCruiseControl(-35, -35)
        basic.pause(320)
        motorStop()
        basic.pause(60)
        borderSide = 0
        if (!matchRunning) { return }
    }

    // 3. Turn to look DOWN THE FIELD (toward their goal) and scan from our side.
    turnToHeading(goalHeading, 15)
    if (!matchRunning) { return }
    if (checkBorder() > 0) { handleBorder(); return }
    lookForBall()
}

// ============================================================
// MATCH LOOP  (runs for the whole match)
// ============================================================
function matchLoop() {
    while (matchRunning) {
        handleReset()
        matchTime = (input.runningTime() - matchStartTime) / 1000
        if (matchTime >= 180) { endMatch(); break }

        // Update power from the endurance curve (weakens over the match).
        motorPower = SPEED * 100 / 20
        endurancePercent = 100 - DECAY_RATE * matchTime / 40
        enduranceFactor = Math.max(endurancePercent / 100, 0.2)
        currentPower = Math.max(Math.round(motorPower * enduranceFactor), minWheelSpeed)
        lowPowerActive = currentPower <= lowPowerThreshold
        showEnduranceMeter()
        if (lowPowerActive) { strip.showColor(neopixel.colors(NeoPixelColors.Red)) }

        // Have the ball -> aim & kick it.
        if (ballDetected) {
            lostScans = 0
            tryAimThenCharge()
            if (!matchRunning) { break }
            basic.pause(40)
            if (checkBorder() > 0) { handleBorder() }
            continue
        }

        // After enough roam segments, do a stationary scan.
        let scanLimit = lowPowerActive ? 2 : Math.max(3, 3 + Math.round(TURNING / 2))
        if (roamCounter >= scanLimit) {
            roamCounter = 0
            lookForBall()
            if (!ballDetected && matchRunning) {
                lostScans += 1
                if (lostScans >= REPOSITION_AFTER_SCANS && !lowPowerActive) {
                    lostScans = 0
                    repositionHome()
                }
            }
        }

        // Scan may have found the ball -> aim & kick.
        if (ballDetected) {
            lostScans = 0
            tryAimThenCharge()
            if (!matchRunning) { break }
            basic.pause(40)
            if (checkBorder() > 0) { handleBorder() }
            continue
        }

        // Otherwise keep searching with another roam arc.
        roamStep()
    }
}

// ============================================================
// SHOT PREPARATION  (fail-safe own-goal guard)
// ============================================================
function prepareShot(): boolean {
    if (!lockOntoBall()) { return false }       // 1. center on the ball
    aimAwayFromOwnGoal()                         // 2. minimal turn out of the own-goal cone
    if (confirmBall(true)) { return true }       // 3. confirm
    return lockOntoBall()                        //    re-acquire once
}

// ============================================================
// BALL CONFIRMATION
// ============================================================
function confirmWithin(maxCm: number, alreadyStopped: boolean): boolean {
    if (!alreadyStopped) {
        CutebotPro.stopImmediately(CutebotProMotors.ALL)
        basic.pause(50)
    } else {
        basic.pause(30)
    }
    let hits = 0
    let lo = 999
    let hi = 0
    for (let i = 0; i < 4; i++) {
        if (i > 0) { basic.pause(30) }
        let dist = CutebotPro.ultrasonic(SonarUnit.Centimeters)
        if (dist > 3 && dist < maxCm) {
            hits += 1
            if (dist < lo) { lo = dist }
            if (dist > hi) { hi = dist }
        }
    }
    if (hits >= 3 && (hi - lo) <= CONFIRM_SPREAD_CM) { flashHeadlights(); return true }
    return false
}

function confirmBall(alreadyStopped: boolean = false): boolean {
    return confirmWithin(BALL_DETECT_CM, alreadyStopped)
}

function confirmBallScan(): boolean {
    return confirmWithin(BALL_SCAN_CM, false)
}

// ============================================================
// ALIGNMENT GATE
// ============================================================
function alignBeforeCharge(): boolean {
    if (!matchRunning) { return false }
    if (ballHeading == 99) { ballHeading = 0 }
    if (ballHeading == 0) { return prepareShot() }

    let alignPower = Math.max(22, Math.min(45, 18 + TURNING * 3))
    let alignMs = Math.max(60, 220 - TURNING * 16)
    let maxAttempts = Math.max(2, Math.round(TURNING / 2))

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
        if (!matchRunning) { return false }
        if (matchExpired()) { endMatch(); return false }
        if (checkBorder() > 0) { handleBorder(); return false }

        if (ballHeading < 0) {
            CutebotPro.pwmCruiseControl(0 - alignPower, alignPower)
        } else {
            CutebotPro.pwmCruiseControl(alignPower, 0 - alignPower)
        }
        basic.pause(alignMs)
        CutebotPro.stopImmediately(CutebotProMotors.ALL)
        basic.pause(40)

        if (confirmBall(true)) { ballHeading = 0; return prepareShot() }
    }
    ballDetected = false
    return false
}

// Aim, then kick if aligned; otherwise drop the ball and go back to searching.
function tryAimThenCharge() {
    if (alignBeforeCharge()) {
        chargeAndFollowThrough()
    } else {
        ballDetected = false
        ballHeading = 0
    }
}

// ============================================================
// STUCK / JAM RECOVERY
// ============================================================
function unstick() {
    if (!matchRunning) { return }
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))

    let backMs = 360 + Math.randomRange(0, 240)
    CutebotPro.pwmCruiseControl(-70, -70)
    basic.pause(backMs)
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
    basic.pause(80)
    if (checkBorder() > 0) { handleBorder(); return }

    let escape = 90 + Math.randomRange(25, 90)
    turnAwayFrom(lastTurnWasLeft ? 1 : 2, escape)
    basic.pause(120)
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
    basic.pause(80)
    if (checkBorder() > 0) { handleBorder(); return }

    CutebotPro.pwmCruiseControl(currentPower, currentPower)
    basic.pause(300)
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
}

// ============================================================
// CHARGE / KICK  (clean version — pushes straight; black line -> handleBorder)
// ============================================================
// Push the ball straight through. Keep driving while it stays in front; stop and
// run full border recovery the instant we cross the black line.
// ============================================================
// CHARGE / KICK  (clean version — pushes straight; black line -> handleBorder)
// ============================================================
// Push the ball straight through. If it rolls ahead, chase forward and kick it
// AGAIN instead of turning away. Stop only when the ball is truly gone, the
// match ends, or we cross the black line (-> handleBorder).
// ============================================================
// CHARGE / KICK  (clean version — pushes straight; black line -> handleBorder)
// ============================================================
// Push the ball straight through. If it rolls ahead, chase forward and kick it
// AGAIN instead of turning away. Stop only when the ball is truly gone, the
// match ends, or we cross the black line (-> handleBorder).
function chargeAndFollowThrough() {
    if (!matchRunning) { return }
    flashHeadlights()
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))

    // Charge power (endurance-scaled; floor 30, cap 100).
    let factor = enduranceFactor > 0 ? enduranceFactor : 1
    let charge = Math.min(Math.max(Math.round(chargePower * factor), 30), 100)
    let chaseMs = 500          // give up only after seeing NOTHING ahead this long

    while (ballDetected) {
        if (!matchRunning) { return }
        if (matchExpired()) { endMatch(); return }
        if (checkBorder() > 0) { motorStop(); handleBorder(); ballDetected = false; return }  // black line -> recover

        // Push straight through / toward the ball.
        CutebotPro.pwmCruiseControl(charge, charge)
        let f = CutebotPro.ultrasonic(SonarUnit.Centimeters)
        if (f > 5 && f < BALL_DETECT_CM) { continue }   // still close in front -> keep driving through

        // Ball rolled ahead. Chase forward; keep chasing as long as it stays in
        // SIGHT, and kick AGAIN the moment we close back into contact range.
        let lastSeen = input.runningTime()
        let reacquired = false
        while (input.runningTime() - lastSeen < chaseMs) {
            if (!matchRunning) { motorStop(); return }
            if (matchExpired()) { endMatch(); return }
            if (checkBorder() > 0) { motorStop(); handleBorder(); ballDetected = false; return }
            CutebotPro.pwmCruiseControl(charge, charge)                   // keep chasing forward
            let g = CutebotPro.ultrasonic(SonarUnit.Centimeters)
            if (g > 5 && g < BALL_DETECT_CM) { reacquired = true; break } // caught up -> loop kicks again
            if (g > 5 && g < BALL_SEE_CM) { lastSeen = input.runningTime() } // still in sight -> keep chasing
            basic.pause(5)
        }

        if (!reacquired) {
            motorStop()
            ballDetected = false        // truly lost -> let the match loop search
        }
    }
}

// ============================================================
// BALL SCAN
// ============================================================
function goalSide(): number {
    if (!goalHeadingValid) { return 0 }
    if (lastCachedHeading < 0) { return 0 }
    let diff = goalHeading - lastCachedHeading
    if (diff > 180) { diff -= 360 }
    if (diff < -180) { diff += 360 }
    if (Math.abs(diff) < 20) { return 0 }
    return diff > 0 ? 1 : -1
}

function sweepLeg(turnLeft: boolean, ms: number, foundHeading: number): number {
    const STEP_MS = 90
    let elapsed = 0
    while (elapsed < ms) {
        if (!matchRunning) { return 2 }
        if (matchExpired()) { endMatch(); return 2 }
        if (checkBorder() > 0) {
            CutebotPro.stopImmediately(CutebotProMotors.ALL)
            basic.pause(40)
            if (checkBorder() > 0) { handleBorder(0, false) }
            return 2
        }

        let burst = Math.min(STEP_MS, ms - elapsed)
        if (turnLeft) { CutebotPro.pwmCruiseControl(0 - scanPower, scanPower) }
        else { CutebotPro.pwmCruiseControl(scanPower, 0 - scanPower) }
        basic.pause(burst)
        elapsed += burst

        CutebotPro.stopImmediately(CutebotProMotors.ALL)
        basic.pause(30)
        let d = CutebotPro.ultrasonic(SonarUnit.Centimeters)
        if (d > 5 && d < BALL_SCAN_CM) {
            if (confirmBallScan()) { ballHeading = foundHeading; ballDetected = true; return 1 }
        }
    }
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
    return 0
}

function closeOnBall() {
    if (!matchRunning) { return }
    driveUntilBall(1100)     // border-aware; stops & confirms once within detect range
    ballHeading = 0          // dead ahead now
}

function lookForBall() {
    if (!matchRunning) { return }

    let baseLegMs = Math.max(320, 360 + SPEED * 10)
    if (lastCachedHeading < 0 && goalHeadingValid) { stableHeading() }
    let gs = goalSide()
    let leftLegMs = gs < 0 ? baseLegMs + 25 : gs > 0 ? Math.max(60, baseLegMs - 20) : baseLegMs
    let rightLegMs = gs > 0 ? baseLegMs + 25 : gs < 0 ? Math.max(60, baseLegMs - 20) : baseLegMs

    CutebotPro.stopImmediately(CutebotProMotors.ALL)
    basic.pause(40)
    if (!matchRunning) { return }
    if (confirmBall(true)) { ballHeading = 0; ballDetected = true; return }

    let r = sweepLeg(true, leftLegMs, -1)         // Leg 1: left out
    if (r == 2) { return }
    if (r == 1) { closeOnBall(); return }
    basic.pause(40)

    r = sweepLeg(false, leftLegMs, 0)             // Leg 2: back to center
    if (r == 2) { return }
    if (r == 1) { closeOnBall(); return }
    basic.pause(40)
    if (confirmBall(true)) { ballHeading = 0; ballDetected = true; return }

    r = sweepLeg(false, rightLegMs, 1)            // Leg 3: right out
    if (r == 2) { return }
    if (r == 1) { closeOnBall(); return }
    basic.pause(40)

    r = sweepLeg(true, rightLegMs, 0)             // Leg 4: back to center
    if (r == 2) { return }
    if (r == 1) { closeOnBall(); return }
    basic.pause(60)
}

// ============================================================
// DRIVE AND WATCH  (drive a segment while watching border + ball)
// ============================================================
function driveAndWatch(ms: number, lSpeed: number, rSpeed: number) {
    if (!matchRunning) { return }

    let watchStart = input.runningTime()
    let lastPingTime = 0
    let lastMeterTime = 0
    let lastBorderPoll = 0
    let lastMotorRefresh = input.runningTime()
    let pingInterval = (SPEED >= 6 || lowPowerActive) ? 25 : 40
    const BORDER_POLL_MS = 6

    while (input.runningTime() - watchStart < ms) {
        if (!matchRunning) { return }
        if (resetRequested) { handleReset(); motorStop(); borderHandledInSeg = true; return }
        if (matchExpired()) { endMatch(); return }

        // ---- Border (throttled; one read serves hard + soft) ----
        if (input.runningTime() - lastBorderPoll >= BORDER_POLL_MS) {
            lastBorderPoll = input.runningTime()
            readTrackbit()

            let hardSide = launchActive ? 0 : borderSideFrom(BORDER_THRESHOLD)
            if (hardSide > 0) {
                CutebotPro.pwmCruiseControl(-60, -60)
                basic.pause(70)
                motorStop()
                borderHandledInSeg = true
                handleBorder()
                return
            }

            let softThresh = Math.round(BORDER_THRESHOLD * (lowPowerActive ? 0.65 : 0.75))
            let softSide = launchActive ? 0 : borderSideFrom(softThresh)
            if (softSide > 0) {
                softEvade(softSide)
                return
            }
        }

        // ---- Endurance + adaptive border threshold (every 500ms) ----
        if (input.runningTime() - lastMeterTime > 500) {
            lastMeterTime = input.runningTime()
            matchTime = (input.runningTime() - matchStartTime) / 1000
            endurancePercent = 100 - DECAY_RATE * matchTime / 40
            enduranceFactor = Math.max(endurancePercent / 100, 0.2)
            currentPower = Math.max(Math.round(motorPower * enduranceFactor), minWheelSpeed)
            lowPowerActive = currentPower <= lowPowerThreshold
            pingInterval = (SPEED >= 6 || lowPowerActive) ? 25 : 40
            showEnduranceMeter()

            if (borderSide == 0 && input.runningTime() - lastBaselineUpdate > 1500) {
                lastBaselineUpdate = input.runningTime()
                let acc = 0
                for (let k = 0; k < 3; k++) { readTrackbit(); acc += trackbitFloorAvg(); basic.pause(6) }
                let sample = Math.round(acc / 3)
                floorBaseline = Math.round(floorBaseline * 0.7 + sample * 0.3)   // EMA
                BORDER_THRESHOLD = Math.max(80, Math.min(220, floorBaseline + borderMargin))
            }
        }

        // ---- Motor keep-alive (every 200ms) ----
        if (input.runningTime() - lastMotorRefresh > 200) {
            lastMotorRefresh = input.runningTime()
            CutebotPro.pwmCruiseControl(lSpeed, rSpeed)
        }

        // ---- Ball detection while driving ----
        if (Math.max(lSpeed, rSpeed) > 15 && input.runningTime() - lastPingTime > pingInterval) {
            lastPingTime = input.runningTime()
            let dist = CutebotPro.ultrasonic(SonarUnit.Centimeters)
            if (dist > 5 && dist < BALL_DETECT_CM) {
                motorStop()
                if (confirmBall(true)) { ballHeading = 99; ballDetected = true; return }
                let straight = Math.max(lSpeed, rSpeed)
                lSpeed = straight
                rSpeed = straight
                CutebotPro.pwmCruiseControl(straight, straight)
                lastMotorRefresh = input.runningTime()
            } else if (dist > 5 && dist < BALL_SEE_CM) {
                let straightSee = Math.max(lSpeed, rSpeed)
                lSpeed = straightSee
                rSpeed = straightSee
                CutebotPro.pwmCruiseControl(straightSee, straightSee)
                lastMotorRefresh = input.runningTime()
            }

            if (!launchActive) {
                readTrackbit()
                if (borderSideFrom(BORDER_THRESHOLD) > 0) {
                    CutebotPro.pwmCruiseControl(-60, -60)
                    basic.pause(70)
                    motorStop()
                    borderHandledInSeg = true
                    handleBorder()
                    return
                }
            }
        }

        basic.pause(5)
    }
}

// Light evade for a SOFT (pre-line) border hit.
function softEvade(side: number) {
    motorStop()
    basic.pause(20)
    let backMs = lowPowerActive ? 130 : 200
    let backPwr = lowPowerActive ? -25 : -30
    CutebotPro.pwmCruiseControl(backPwr, backPwr)
    basic.pause(backMs)
    motorStop()
    basic.pause(40)
    turnAwayFrom(side, lowPowerActive ? 130 : 90)
    motorStop()
    borderHandledInSeg = true
    borderSide = 0
}

// ============================================================
// BORDER HANDLING  (full recovery from a hard border hit)
// ============================================================
function handleBorder(depth: number = 0, scanAfter: boolean = true) {
    if (!matchRunning) { return }
    if (matchExpired()) { endMatch(); return }
    if (depth >= 1) { hardStop(); return }   // recursion guard only

    ballDetected = false
    hardStop()
    updateHomeProximityOnBorder()            // pin field position from heading at the wall
    if (!matchRunning) { return }

    speedExtra = Math.max(SPEED - 4, 0)
    backupPower = lowPowerActive ? -25 : (0 - 40 - speedExtra * 5)
    backupTime = lowPowerActive ? 130 : (250 + speedExtra * 20)

    let attempts = 0
    while (attempts < 3) {
        attempts += 1
        let side = borderSide
        borderSide = 0

        CutebotPro.pwmCruiseControl(backupPower, backupPower)
        basic.pause(backupTime)
        CutebotPro.stopImmediately(CutebotProMotors.ALL)
        basic.pause(80)
        if (!matchRunning) { return }

        let angle: number
        if (side == 1 || side == 2) {
            angle = lowPowerActive ? 150 : 115
        } else {
            angle = side == 4 ? 150 + Math.randomRange(0, 20) : 130
            if (lowPowerActive) { angle = Math.min(angle + 30, 180) }
        }
        turnAwayFrom(side, angle)
        if (!matchRunning) { return }

        CutebotPro.stopImmediately(CutebotProMotors.ALL)
        basic.pause(40)
        CutebotPro.pwmCruiseControl(currentPower, currentPower)
        basic.pause(300)
        CutebotPro.stopImmediately(CutebotProMotors.ALL)
        basic.pause(40)

        if (checkBorder() == 0) { break }
    }
    if (!matchRunning) { return }

    sameDirectionCount = 0
    if (scanAfter) { lookForBall() }
}

// ============================================================
// STATS & DISPLAY
// ============================================================
function computeStats() {
    motorPower = SPEED * 100 / 20
    currentPower = motorPower
    chargePower = Math.min(POWER * POWER, 100)
    FOLLOW_THROUGH_MS = 120 + POWER * 35
    totalArcTime = BASE_SEGMENT_MS * 12
    thisDuration = Math.min(Math.round(totalArcTime / TURNING), 600)
    turnRatio = 0.2 + TURNING * 0.02
    DECAY_RATE = 20 - ENDURANCE
    minWheelSpeed = Math.max(WHEEL_FLOOR, Math.round(motorPower * 0.25))
    lowPowerThreshold = minWheelSpeed
}

function flashHeadlights() {
    CutebotPro.singleHeadlights(CutebotProRGBLight.RGBA, 255, 255, 255)
    basic.pause(30)
    CutebotPro.singleHeadlights(CutebotProRGBLight.RGBA, 0, 0, 0)
}

function showBuildArchetype() {
    let top = Math.max(SPEED, Math.max(POWER, Math.max(TURNING, ENDURANCE)))
    let leaders = 0
    if (SPEED == top) { leaders += 1 }
    if (POWER == top) { leaders += 1 }
    if (TURNING == top) { leaders += 1 }
    if (ENDURANCE == top) { leaders += 1 }
    let name = "BALANCED"
    if (leaders == 1) {
        if (SPEED == top) { name = "SPEEDSTER" }
        else if (POWER == top) { name = "SNIPER" }
        else if (ENDURANCE == top) { name = "TANK" }
        else { name = "NINJA" }
    }
    basic.showString(name)
}

function showStatBars() {
    basic.clearScreen()
    let vals = [SPEED, TURNING, ENDURANCE, POWER]
    for (let c = 0; c < 4; c++) {
        let h = Math.max(1, Math.min(5, Math.round(vals[c] / 2)))
        for (let y = 5 - h; y <= 4; y++) { led.plot(c, y) }
    }
}

function showEnduranceMeter() {
    bars_count = Math.round(enduranceFactor * 5)
    bars_count = Math.max(1, Math.min(5, bars_count))
    for (let y = 0; y <= 4; y++) { led.unplot(2, y) }
    for (let y = 5 - bars_count; y <= 4; y++) { led.plot(2, y) }
}

// ============================================================
// COMPASS / FIELD-POSITION HELPERS
// ============================================================
function angleDiffAbs(a: number, b: number): number {
    let d = Math.abs(a - b)
    if (d > 180) { d = 360 - d }
    return d
}

function ownGoalCone(): number {
    let elapsed = input.runningTime() - lastHomeUpdate
    let caution = Math.min(1, elapsed / HOME_DECAY_MS)
    let p = homeProximity + (1 - homeProximity) * caution
    return Math.round(OWN_GOAL_CONE_NARROW +
        (OWN_GOAL_CONE_WIDE - OWN_GOAL_CONE_NARROW) * p)
}

function updateHomeProximityOnBorder() {
    if (!goalHeadingValid) { return }
    let h = stableHeadingBlocking()
    if (h < 0) { return }
    if (angleDiffAbs(h, ownGoalHeading) <= 70) { homeProximity = 1 }
    else if (angleDiffAbs(h, goalHeading) <= 70) { homeProximity = 0 }
    lastHomeUpdate = input.runningTime()
}

function turnToHeading(target: number, tolDeg: number = 10) {
    let turnPwr = Math.max(25, Math.min(40, 20 + TURNING * 2))
    for (let i = 0; i < 30; i++) {
        if (!matchRunning) { return }
        let h = stableHeadingBlocking()
        if (h < 0) { motorStop(); return }
        let err = target - h
        if (err > 180) { err -= 360 }
        if (err < -180) { err += 360 }
        if (Math.abs(err) <= tolDeg) { motorStop(); return }
        if (err > 0) { CutebotPro.pwmCruiseControl(turnPwr, 0 - turnPwr) }
        else { CutebotPro.pwmCruiseControl(0 - turnPwr, turnPwr) }
        basic.pause(Math.max(40, Math.min(180, Math.abs(err) * 4)))
        motorStop()
        basic.pause(50)
    }
    motorStop()
}

function lockOntoBall(): boolean {
    if (confirmBall(true)) { return true }
    let p = 24
    let dirs = [-1, 1, 1, -1]          // small L, R, R, L -- net rotation ~0
    for (let i = 0; i < dirs.length; i++) {
        if (!matchRunning) { return false }
        if (checkBorder() > 0) { motorStop(); return false }
        if (dirs[i] < 0) { CutebotPro.pwmCruiseControl(0 - p, p) }
        else { CutebotPro.pwmCruiseControl(p, 0 - p) }
        basic.pause(90)
        motorStop()
        basic.pause(40)
        if (confirmBall(true)) { return true }
    }
    return false
}

function aimAwayFromOwnGoal(): boolean {
    if (!goalHeadingValid) { return true }
    let h = stableHeadingBlocking()
    if (h < 0) { return true }
    let cone = ownGoalCone()
    let d = h - ownGoalHeading
    while (d > 180) { d -= 360 }
    while (d < -180) { d += 360 }
    if (Math.abs(d) >= cone) { return true }
    let edge = d >= 0 ? (cone + 8) : 0 - (cone + 8)
    turnToHeading((ownGoalHeading + edge + 360) % 360, 10)
    return true
}

// ============================================================
// VARIABLES (module state)
// ============================================================

// --- Match / control state ---
let matchRunning = false
let readyToLaunch = false
let resetRequested = false
let launchActive = false
let lineArmed = false
let matchStartTime = 0
let matchTime = 0

// --- Ball state ---
let ballDetected = false
let ballHeading = 0
let stuckTimer = 0
let lastBallDist = 0

// --- Roam / scan state ---
let roamCounter = 0
let lostScans = 0
let sameDirectionCount = 0
let maxSameDirection = 0
let lastTurnWasLeft = false
let borderHandledInSeg = false

// --- Power / endurance (derived from stats each loop) ---
let motorPower = 0
let currentPower = 0
let enduranceFactor = 0
let endurancePercent = 0
let DECAY_RATE = 0
let minWheelSpeed = 0
let lowPowerThreshold = 0
let lowPowerActive = false
let WHEEL_FLOOR = 15   // min wheel speed

// --- Charge / kick scratch ---
let chargePower = 0
let effectiveCharge = 0
let dynamicCharge = 0
let FOLLOW_THROUGH_MS = 0
let actualFollowThrough = 0

// --- Roam timing / turning (derived) ---
let totalArcTime = 0
let thisDuration = 0
let turnRatio = 0

// --- Border handling scratch ---
let borderSide = 0
let backupTime = 0
let backupPower = 0
let speedExtra = 0
let floorBaseline = 0
let lastBaselineUpdate = 0

// --- Compass / heading state ---
let goalHeading = 0
let goalHeadingValid = false
let ownGoalHeading = 0
let lastCachedHeading = -1
let lastHeadingTime = 0

// --- Adaptive own-goal cone ---
let OWN_GOAL_CONE_NARROW = 35      // far end: allow tight upfield shots
let OWN_GOAL_CONE_WIDE = 80        // home end: very cautious
let HOME_DECAY_MS = 8000           // no wall contact this long -> fully cautious
let homeProximity = 1              // 0 = far end, 1 = home end
let lastHomeUpdate = 0
let GOAL_AIM_TOL = 18              // within this many degrees of the goal heading, push straight

// --- Line sensor raw values (filled by readTrackbit) ---
let tb1 = 0
let tb2 = 0
let tb3 = 0
let tb4 = 0

// --- Detection ranges / thresholds (most set in INITIALIZATION below) ---
let BALL_DETECT_CM = 0
let BALL_SCAN_CM = 0
let BALL_SEE_CM = 0
let CONTACT_CM = 0
let CONFIRM_SPREAD_CM = 10         // tightest cluster (cm) accepted as a real ball
let BORDER_THRESHOLD = 0
let borderMargin = 0
let BASE_SEGMENT_MS = 0
let scanPower = 0

// --- Reposition tunables ---
let REPOSITION_AFTER_SCANS = 3     // fruitless scans before dropping back to our side
let REPOSITION_MS = 2400           // how long to drive back toward our own goal

// --- Launch tunables ---
let LAUNCH_OFFSET_TURN_DEG = 35    // Step 1: turn toward center
let LAUNCH_OFFSET_DRIVE_MS = 2520  // Step 2: diagonal onto the goal axis
let LAUNCH_SQUARE_TURN_DEG = 35    // Step 3: re-square to the goal (= Step 1)
let LAUNCH_APPROACH_MS = 500       // Step 4: max forward time to reach the ball

// --- Student stats ---
let SPEED = 0
let ENDURANCE = 0
let TURNING = 0
let POWER = 0

// --- Display ---
let strip: neopixel.Strip = null
let bars_count = 0

// ============================================================
// HARDWARE CONSTANTS & INITIALIZATION
// ============================================================
strip = neopixel.create(DigitalPin.P15, 8, NeoPixelMode.RGB)
strip.setBrightness(255)

CutebotPro.stopImmediately(CutebotProMotors.ALL)
CutebotPro.pwmCruiseControl(0, 0)
basic.pause(100)

basic.showString("CAL")
input.compassHeading()       // wake/seed the compass
basic.clearScreen()

/* ============================================================================
 *  ★ STUDENT ZONE A — STAT ALLOCATION ★
 * ============================================================================
 *  Each stat is a whole number ≥ 1. POWER up to 10; SPEED/ENDURANCE/TURNING up
 *  to 17. The four MUST add up to exactly 20.
 * ============================================================================
 */
SPEED = 0    // <- YOUR VALUE HERE
TURNING = 0    // <- YOUR VALUE HERE
ENDURANCE = 0    // <- YOUR VALUE HERE
POWER = 0    // <- YOUR VALUE HERE
// CHECK before you run:  SPEED + TURNING + ENDURANCE + POWER  must equal 20

// ── Tunable distances / thresholds ─────────────────────────
BASE_SEGMENT_MS = 300
BORDER_THRESHOLD = 130     // overwritten by calibrateThreshold
borderMargin = 40          // overwritten by calibrateThreshold
scanPower = 25             // in-place scan/turn speed
BALL_DETECT_CM = 50        // commit-to-charge range
BALL_SEE_CM = 70           // home-in range while driving; keep < half field width
CONTACT_CM = 15            // (unused by the clean charge, kept for reference)
BALL_SCAN_CM = 50          // scan-spot range; shorter = fewer false hits on walls/people
// ───────────────────────────────────────────────────────────

basic.showIcon(IconNames.SmallSquare)
