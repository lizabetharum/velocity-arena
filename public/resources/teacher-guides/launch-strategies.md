# Velocity Arena — 10 Launch Sequence Strategies

Ten ready-to-use opening moves for **Student Zone B** (`launchSequence`). Each one
teaches a geometry idea. Students paste the code into the **`★ WRITE YOUR LAUNCH
HERE ★`** block — *between* the `launchActive = true` / `powerScale` lines and the
`LOCKED` section. The locked code afterward always drives the last bit to the ball
and kicks it through the goal, so each launch just has to **get the bot behind the
ball, pointed at the opponent's goal.**

---

## Quick facts students need

- **Field:** 8 ft × 4 ft  =  **244 cm × 122 cm**
- **One "block" = 27 cm.**  `CutebotPro.runBlockCnt(n)` drives exactly `n × 27 cm`, then stops.
  → *distance in cm ÷ 27 = block count* (round to the nearest whole number).
- **The golden rule:** the kick goes the way the bot is **FACING**. Finish your
  launch *behind* the ball, aimed straight down the field.
- **Measure first.** Before coding, use a tape measure: how far **forward** is the
  ball (`a`)? how far **to the side** (`b`)? Those two numbers drive the math.

### Command cheat-sheet
```ts
CutebotPro.runBlockCnt(n)                                   // drive n × 27 cm, then stop  (best for geometry)
CutebotPro.trolleySteering(CutebotProTurn.LeftInPlace, 45)  // spin left 45° in place
CutebotPro.trolleySteering(CutebotProTurn.RightInPlace, 90) // spin right 90° in place
CutebotPro.pwmCruiseControl(left, right)                    // drive wheels (use currentPower)
CutebotPro.stopImmediately(CutebotProMotors.ALL)           // stop
basic.pause(500)                                            // wait 0.5 s
```

---

## 1. Straight Shot  ·  ⭐ easy
**Geometry:** the shortest path between two points is a straight line.
**Setup:** place the bot so the ball is *directly* between it and the goal.
```ts
// Ball is dead ahead. Drive straight at it; the locked code finishes the kick.
// 81 cm to the ball  ->  81 / 27 = 3 blocks.  (Measure YOUR distance!)
CutebotPro.runBlockCnt(3)
basic.pause(150)
```
**Teach:** measuring + the cm→block conversion. The cleanest possible launch.

---

## 2. The 45° Diagonal  ·  ⭐⭐ medium
**Geometry:** a right triangle where the two legs are equal (`a = b`) has a **45°**
angle, and its hypotenuse is `a × 1.41`.
**Setup:** ball is forward AND to the left by *about the same amount*.
```ts
// Turn 45° toward the ball, drive the diagonal, then turn back 45° to face the goal.
CutebotPro.trolleySteering(CutebotProTurn.LeftInPlace, 45)
basic.pause(300)
CutebotPro.stopImmediately(CutebotProMotors.ALL); basic.pause(150)

// Hypotenuse: if each leg ≈ 81 cm, diagonal ≈ 81 × 1.41 ≈ 115 cm ≈ 4 blocks.
CutebotPro.runBlockCnt(4)
basic.pause(150)

CutebotPro.trolleySteering(CutebotProTurn.RightInPlace, 45)   // re-square to the goal
basic.pause(150)
```
**Teach:** equal-and-opposite turns cancel; the diagonal beats two straight legs.

---

## 3. The Measured Diagonal  ·  ⭐⭐⭐ challenge
**Geometry:** general right triangle. `c = √(a² + b²)` and `angle = atan(b ÷ a)`.
**Setup:** ball is forward `a` and to the side `b`, NOT equal.
```ts
// Example: a = 120 cm forward, b = 60 cm left.
//   angle = atan(60 / 120) ≈ 27°
//   c = √(120² + 60²) ≈ 134 cm  ->  134 / 27 ≈ 5 blocks
CutebotPro.trolleySteering(CutebotProTurn.LeftInPlace, 27)
basic.pause(300)
CutebotPro.stopImmediately(CutebotProMotors.ALL); basic.pause(150)

CutebotPro.runBlockCnt(5)
basic.pause(150)

CutebotPro.trolleySteering(CutebotProTurn.RightInPlace, 27)
basic.pause(150)
```
**Teach:** Pythagorean theorem + intro trig (or measure the angle with a protractor
on a scale drawing of the field).

---

## 4. The L-Path  ·  ⭐⭐ medium
**Geometry:** two perpendicular legs. Great for *comparing* with the diagonal —
`a + b` is always longer than `√(a² + b²)` (the triangle inequality).
**Setup:** ball forward `a`, to the side `b`.
```ts
// Leg 1: forward toward the ball's depth.
CutebotPro.runBlockCnt(3)            // ~81 cm forward (a)
basic.pause(150)
// Turn to face the ball's side.
CutebotPro.trolleySteering(CutebotProTurn.LeftInPlace, 90)
basic.pause(300)
CutebotPro.stopImmediately(CutebotProMotors.ALL); basic.pause(150)
// Leg 2: across to the ball.
CutebotPro.runBlockCnt(2)            // ~54 cm sideways (b)
basic.pause(150)
// Re-face the goal.
CutebotPro.trolleySteering(CutebotProTurn.RightInPlace, 90)
basic.pause(150)
```
**Teach:** right angles, and *why* the diagonal (Strategy 2/3) is more efficient.

---

## 5. Center Control  ·  ⭐ easy
**Geometry:** navigate to a known landmark (the center of the field) using measured
distance, then let the bot's sensors take over from a strong central position.
**Setup:** any.
```ts
// Drive to about the middle of the field, still facing down-field.
// Half of 244 cm ≈ 122 cm ≈ 4–5 blocks (measure from YOUR start spot).
CutebotPro.runBlockCnt(4)
basic.pause(150)
// No turn needed — we're already aimed at the goal. The match loop hunts from here.
```
**Teach:** using field measurements as coordinates; sometimes position beats a rush.

---

## 6. Swing Wide (Get Behind the Ball)  ·  ⭐⭐⭐ challenge
**Geometry:** collinearity — to push the ball *toward* the goal you must be on the
line **bot → ball → goal**, i.e. behind the ball. If the ball is off to one side,
loop around it.
**Setup:** ball is well off to the side.
```ts
// Curve out and past the ball, then come back in lined up with the goal.
CutebotPro.trolleySteering(CutebotProTurn.RightInPlace, 30)
basic.pause(300)
CutebotPro.stopImmediately(CutebotProMotors.ALL); basic.pause(150)

CutebotPro.runBlockCnt(3)            // drive out and past the ball
basic.pause(150)

CutebotPro.trolleySteering(CutebotProTurn.LeftInPlace, 30)   // re-aim down the field
basic.pause(150)
```
**Teach:** you control the ball's *direction* by choosing which side you hit it from.

---

## 7. The Mirror Diagonal  ·  ⭐⭐ medium
**Geometry:** symmetry. Same as Strategy 2, mirrored for a ball on the **right**.
**Setup:** ball forward and to the *right*.
```ts
CutebotPro.trolleySteering(CutebotProTurn.RightInPlace, 45)
basic.pause(300)
CutebotPro.stopImmediately(CutebotProMotors.ALL); basic.pause(150)

CutebotPro.runBlockCnt(4)
basic.pause(150)

CutebotPro.trolleySteering(CutebotProTurn.LeftInPlace, 45)
basic.pause(150)
```
**Teach:** left/right symmetry — swap every "Left" for "Right" to mirror a plan.

---

## 8. Sniper Hold (Minimal Launch)  ·  ⭐ easy
**Geometry:** almost none — a tiny nudge, then trust the bot's built-in find/aim/kick.
**Setup:** ball roughly ahead, exact spot unknown.
```ts
// Short nudge forward; let the sensors find, aim, and kick on their own.
CutebotPro.runBlockCnt(1)            // ~27 cm
basic.pause(150)
```
**Teach:** a baseline to compare against — does a clever launch actually beat "let
the robot do it"? Good first run for every team.

---

## 9. Time-Based Diagonal  ·  ⭐⭐ medium
**Geometry:** same diagonal as Strategy 2, but driven by **time** instead of
distance. `powerScale` makes the *distance* come out the same on fast and slow bots.
**Setup:** ball forward and to the left (and no `runBlockCnt` available).
```ts
CutebotPro.trolleySteering(CutebotProTurn.LeftInPlace, 45)
basic.pause(300)
CutebotPro.stopImmediately(CutebotProMotors.ALL); basic.pause(150)

CutebotPro.pwmCruiseControl(currentPower, currentPower)
basic.pause(Math.round(1500 * powerScale))   // tune the 1500 until it reaches the ball
CutebotPro.stopImmediately(CutebotProMotors.ALL); basic.pause(150)

CutebotPro.trolleySteering(CutebotProTurn.RightInPlace, 45)
basic.pause(150)
```
**Teach:** why time-based driving is less reliable than distance — and what
`powerScale` is for. Have them race a fast build vs a slow build and watch the
difference shrink with `powerScale`.

---

## 10. The Arc Launch  ·  ⭐⭐⭐ challenge
**Geometry:** curvature. Instead of *turn, drive, turn*, curve onto the ball→goal
line in one smooth motion by running the wheels at different speeds.
**Setup:** ball forward and to the left.
```ts
// Left wheel slower than right -> the bot arcs LEFT toward the center line.
CutebotPro.pwmCruiseControl(Math.round(currentPower * 0.6), currentPower)
basic.pause(Math.round(1400 * powerScale))   // tune time for your field
CutebotPro.stopImmediately(CutebotProMotors.ALL)
basic.pause(150)
```
**Teach:** a curved path vs straight segments; experiment with the `0.6` (sharper vs
gentler arc). Swap the wheel values to arc right.

---

## How to run a lesson with these

1. **Everyone starts with #8 (Sniper Hold)** — get a baseline, see the bot play.
2. **Measure the ball** (`a` forward, `b` sideways) and pick a matching strategy.
3. **Predict, then test:** have teams write the distance/angle they *expect* before
   running, then compare to what the bot actually does.
4. **Iterate:** the numbers in every example (`runBlockCnt(3)`, `45°`, `1500`) are
   starting points — students tune them to their own field and bot.
5. **Compare strategies:** which scores fastest from the same ball position? Why?

> Reminder: turns use the compass-free `trolleySteering` (dead-reckoned by degrees),
> and drives can be distance-based (`runBlockCnt`) or time-based
> (`pwmCruiseControl` + `pause`). Distance-based is more repeatable — push students
> toward it for anything that depends on geometry.
