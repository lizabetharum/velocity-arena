/**
 * ============================================================
 * LAUNCH TEST  —  Cutebot Pro
 * Practice and test your two-leg launch + the kick, fast.
 *
 * No field calibration (no W / B / goal), no roaming.
 * Press A  ->  the bot runs YOUR launch, rolls up to the ball,
 * kicks it straight, and STOPS. Press A again to run it again.
 *
 * You change only two things:
 *   1. your four STATS below (must total 20)
 *   2. the four  ★  LAUNCH numbers (2 turn angles, 2 drive times in ms)
 * Everything under the LOCKED line runs the kick -- leave it alone.
 *
 *   drive speed   = SPEED x 100 / 20     (same speed as the real match)
 *   kick strength = POWER x POWER        (Power-squared, capped at 100)
 * ============================================================
 */

let SPEED     = 0    // ★ your SPEED
let TURNING   = 0    // ★ your TURNING
let ENDURANCE = 0    // ★ your ENDURANCE
let POWER     = 0    // ★ your POWER
// CHECK:  SPEED + TURNING + ENDURANCE + POWER  must equal 20.
// SPEED sets the drive speed; POWER sets the kick. TURNING and ENDURANCE do
// nothing in this test -- keep them so your build still totals 20 for the match.

input.onButtonPressed(Button.A, function () {
    if (SPEED + TURNING + ENDURANCE + POWER != 20) {
        basic.showString("20")                 // stats must total 20
        basic.pause(900); basic.clearScreen(); return
    }
    let motorPower = SPEED * 100 / 20
    let chargePower = Math.min(POWER * POWER, 100)
    let followMs = 120 + POWER * 35
    basic.showIcon(IconNames.Yes); basic.pause(200); basic.clearScreen()

    // ══════════════════════════════════════════════════════════════════
    //   ★ YOUR LAUNCH — change ONLY the four ★ numbers. ★
    //   Two-leg path:  corner  ->  midline  ->  ball.
    //   ms = (distance − start-up) ÷ speed × 1000   (your Distance Lab equation)
    // ══════════════════════════════════════════════════════════════════

    // LEG 1 — turn toward the midline, then drive out to it
    CutebotPro.trolleySteering(CutebotProTurn.LeftInPlace, 45)   // ★ 1. LEG-1 ANGLE
    basic.pause(300)
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
    basic.pause(150)
    CutebotPro.pwmCruiseControl(motorPower, motorPower)
    basic.pause(2800)                                            // ★ 2. ms1 — corner to midline
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
    basic.pause(150)

    // LEG 2 — turn to face the ball, then drive ALMOST to it.
    // Stop a little SHORT of the ball — the LOCKED code rolls the last bit and kicks.
    CutebotPro.trolleySteering(CutebotProTurn.RightInPlace, 45)  // ★ 3. LEG-2 ANGLE
    basic.pause(300)
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
    basic.pause(150)
    CutebotPro.pwmCruiseControl(motorPower, motorPower)
    basic.pause(1500)                                            // ★ 4. ms2 — midline to ball
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
    basic.pause(150)

    // ══════════════════════════════════════════════════════════════════
    //   LOCKED — roll up to the ball, then kick. Do not change.
    // ══════════════════════════════════════════════════════════════════
    let t0 = input.runningTime()
    CutebotPro.pwmCruiseControl(motorPower, motorPower)
    while (input.runningTime() - t0 < 1000) {
        let d = CutebotPro.ultrasonic(SonarUnit.Centimeters)
        if (d > 3 && d < 10) { break }         // ball right in front -> stop and kick
        basic.pause(5)
    }
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
    basic.pause(80)

    CutebotPro.pwmCruiseControl(chargePower, chargePower)        // kick straight through (Power²)
    basic.pause(followMs + 300)
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
})
