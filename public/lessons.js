// ── Activity → interactive lesson URL mapping ─────────────────────────────
// Keyed by the exact activity `name` string in days.js. When a match is
// found, the Today view (index.html) and the Day view (day.html) render a
// clickable link ("Interactive lesson →" / "Open Activity →") under the
// activity so students can jump into the companion lesson page.
//
// To add a new lesson: build the page under public/lessons/ and add an entry
// here with the activity's exact name from days.js as the key.
const ACTIVITY_LESSONS = {
  'Speed Stat Challenge: What Does Motor Power Actually Mean?': '/lessons/speed-stat.html',
  'First Bot Drive: Speed in Real Life': '/lessons/first-bot-drive.html',
  'Endurance Stat Challenge: Drawing the Decay': '/lessons/endurance-stat.html',
  'Endurance Decay Equations in Slope-Intercept Form': '/lessons/decay-equations-visual.html',
  'Power Stat Challenge: Ratio and Motor Speed': '/lessons/power.html',
};
