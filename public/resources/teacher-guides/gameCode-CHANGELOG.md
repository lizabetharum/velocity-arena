# Cutebot Pro Soccer — Session Changelog (Teacher Notes)

A plain-language record of every change made to `gameCode.ts` this session, why it
was made, and the knobs you can tune. **No student-facing formulas were changed** —
`endurancePercent`, `DECAY_RATE = 20 − ENDURANCE`, and `turnRatio = 0.2 + TURNING ×
0.02` are exactly as students compute them.

---

## 1. Finding & reaching the ball

**Problem:** the bot rarely saw the ball and often missed it.

- **Wider, reliable scanning.** The in-place scan uses **step-scan**: rotate a small
  step, **stop**, then ping while still. Pinging mid-rotation let the beam skip past
  the ball during the sonar's echo timeout. (`STEP_MS = 90`)
- **Home-in-on-sight while driving.** While roaming, the bot notices the ball out to
  `BALL_SEE_CM` and drives straight at it to close the gap — so it finds the ball
  during normal play, not just during stationary scans.
- **Drive-to-ball after a scan.** When a scan spots the ball, `closeOnBall()` drives
  in until it's close enough to commit.

**Tunables:** `BALL_SEE_CM = 45`, `BALL_SCAN_CM = 50`, `BALL_DETECT_CM = 40`.

---

## 2. Ignoring the environment (false ball hits)

**Problem:** at longer range the sonar picked up walls / people / the opponent.

- **Shorter ranges** keep detection mostly inside the field.
- **Stricter confirmation.** A ball is confirmed only when **3 of 4** sonar reads
  land in range **and** cluster within `CONFIRM_SPREAD_CM` of each other. A real ball
  gives tight, consistent reads; off-field clutter gives scattered ones.

**Tunables:** `CONFIRM_SPREAD_CM = 10` (lower = stricter), plus the ranges above.

> Note: this stricter confirm later turned out to be **too strict for the launch
> kick** — see §6.

---

## 3. Staying on the field

**Problem:** the bot rolled off the field.

- **Tighter border polling** (`BORDER_POLL_MS = 6`).
- **Post-ping border failsafe.** The blocking ball-ping could stall border sensing
  long enough to coast over the line; the border is now re-checked the instant each
  ping returns.
- **Diagnosed live with a headlight indicator** (since removed) that lit the
  headlights when the line sensors saw tape — used to confirm detection was working.

---

## 4. Getting unstuck

**Problem:** bots jammed together, and wheels free-spun in place.

- **Faster, randomized `unstick`.** Charge stuck-detection fires at **550 ms** (was
  800). The escape uses a randomized reverse + turn angle so two identical bots break
  symmetry instead of mirroring each other into a re-lock.
- **Compass jam check while roaming.** If a turning segment produces ~no rotation, a
  confirming in-place spin-test runs; if the body still won't turn, `unstick()`.
- **Charge jam cap.** A jittering ball used to reset the stuck timer forever; a
  total-charge time cap (1800 ms) + spin-test now catches that. The cap **resets on
  real dribble progress** so a long legit dribble doesn't trip it.

---

## 5. Smarter positioning

- **Goal-biased roaming.** ~70% of roam direction changes steer toward the opponent's
  goal; the rest stay random to keep exploring.
- **Drop back & look down-field (`repositionHome`).** After a few fruitless scans the
  bot returns toward its own side, then faces down-field and scans. Refinements made
  this session:
  - **Disabled when `lowPowerActive`** — a tired bot plays where it stands instead of
    crawling across the field.
  - **Ignores the ball during the retreat.** Grabbing a ball mid-retreat left the bot
    on the wrong side of it (between ball and its *own* goal → would kick into its own
    net). It now gets fully home first, then turns and attacks from the correct side.
  - **Backs off the edge before turning.** Reaching its own boundary and spinning in
    place could walk a wheel off the field or jam it against the wall; it now reverses
    a little to make room, then turns, with a border safety check after.
  - **Keep-alive on the retreat drive** so a dropped I2C motor command can't leave it
    stalled halfway home.

**Tunables:** `REPOSITION_AFTER_SCANS` (lower = comes home more often),
`REPOSITION_MS` (how far back it drives).

---

## 6. Shooting & dribbling toward the goal

- **Goal-seeking dribble (open play only).** Once the ball is **in contact**
  (`CONTACT_CM`), the push gently curves toward the goal heading. While still
  approaching, it drives **straight** so it doesn't veer off and miss.
- **Dribble chase (not kick-and-turn-away).** After the ball rolls ahead, the bot now
  **drives forward to chase and keep pushing it** toward goal, re-acquiring after each
  push. It only stops and rescans if it truly loses the ball. (Previously it pushed
  once and immediately turned away to scan.)
- **Launch kick is straight and unconditional.** Two fixes were needed here:
  1. The compass curve is **disabled during launch** (launch is dead-reckoned —
     ball placed dead ahead — so no compass steering).
  2. The kick is **no longer gated behind the strict ball-confirm.** That confirm
     (inside `driveUntilBall`) was failing on the launch ball and silently skipping
     the kick. The launch now commits the kick every time.

**Tunables:** `GOAL_AIM_TOL = 18` (how close to "aimed" counts as straight),
`CONTACT_CM = 15` (approach→dribble switchover), `0.45` curve strength in
`chargeAndFollowThrough`.

> **Scoring with tape across the goal:** because the goal mouth has border tape, the
> bot stops at the line and the *ball's momentum* carries it over. If the ball stalls
> at the line, ask for a harder final-approach push (dribble up, then full-power kick).

---

## 7. Stats & student-facing identity

- **Legal 20-point build:** `POWER 8 · TURNING 2 · ENDURANCE 4 · SPEED 6 = 20`, with a
  reminder comment that the four must total 20.
- **Build archetype display** at lock-in (press A): scrolls a name —
  **SPEEDSTER / SNIPER / TANK / NINJA** (unique top stat) or **BALANCED** — then shows
  a 4-bar stat chart.
- **Acquisition is less dependent on TURNING.** Alignment guarantees at least 2
  attempts to center a side ball, regardless of the TURNING stat.

---

## 8. Compass notes (supporting changes)

- `stableHeadingBlocking` settles for vibration and retries up to 5 times; agreement
  tolerance loosened 10° → 16° (availability over precision).
- **Turn direction VERIFIED** with a (now-removed) shake-to-test: the bot rotates the
  **correct** way toward the calibrated goal. ✅ No branch swap needed.
- **Caveat — compass accuracy:** the magnetometer under-reads rotation near the motors
  (turned ~45° when ~90° was expected). Compass-based aim (`repositionHome`, own-goal
  cone) is therefore *approximate*. If this causes trouble, recalibrate on the chassis,
  away from metal, or we can convert `repositionHome`'s "face down-field" to a
  dead-reckoned ~180° turn (no compass).

---

## 9. Diagnostics added and removed

During debugging we temporarily added, then **removed**, all of:
- kick-decision arrows + a 400 ms hold on the kick,
- a headlight border-detection indicator,
- a shake-to-test for turn direction.

The shipped code contains **no debug instrumentation**.

---

## Quick tuning cheat-sheet

| Symptom | Knob to turn |
|---|---|
| Misses balls / doesn't see them | raise `BALL_SEE_CM`, `BALL_SCAN_CM` |
| Chases walls/people | lower `BALL_SEE_CM`/`BALL_SCAN_CM`; lower `CONFIRM_SPREAD_CM` |
| Comes home too much / too little | `REPOSITION_AFTER_SCANS` |
| Doesn't retreat far enough | `REPOSITION_MS` |
| Curve too weak / knocks ball off | `0.45` bias in `chargeAndFollowThrough` |
| Curves before reaching ball | lower `CONTACT_CM` |
| Ball stalls at the goal line | needs a harder final-approach kick (ask) |
| Reacts to jams too slow/fast | `550` (charge stuck) / `1800` (charge cap) |
| Rolls off the field | check W/B calibration `F`/`T`/`TH`; `BORDER_THRESHOLD` |

*All work is backed up at `/tmp/gameCode.ts.bak` through `.bak25`.*
