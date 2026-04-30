// Tennessee 16-day compressed/combined schedule.
// Loaded on every page but only used when the site picker is set to "TN"
// (see dispatcher in days.js).
//
// Until this array is populated, TN falls back to the master 20-day schedule
// in days-default.js. Add entries below incrementally — the dispatcher
// switches over once length > 0.
//
// Each entry should match the shape of a master day in days-default.js:
//   { day, week, weekName, theme, bigMathIdea, vocabulary,
//     activities: [{ name, mins, block, description, facilitatorDescription, script, quickCard }],
//     endsMins, ends, funElement, los, facilitatorRisk: { risk, say } }
//
// `day` is the TN-day number (1–16), not the master day it derives from.
// For combined days, you can borrow activities from multiple master days
// — copy/paste them out of days-default.js and trim minutes as needed.
//
// Example skeleton (delete or replace):
// {
//   day: 1,
//   week: 1,
//   weekName: "Play Lab + Boot Camp (compressed)",
//   theme: "First Contact + Speed Test (combined Day 1+2)",
//   bigMathIdea: "Proportional reasoning. Motor Power = Speed × 100 / 20.",
//   vocabulary: "RATIO and UNIT RATE.",
//   activities: [
//     // copy from days-default.js entries you want to keep
//   ],
//   endsMins: 15,
//   ends: "...",
//   funElement: "...",
//   los: "...",
//   facilitatorRisk: { risk: "...", say: "..." }
// },

const DAYS_TN = [
  // TODO: fill in 16 days. Until at least one entry is here, TN uses the master schedule.
];
