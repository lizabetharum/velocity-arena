// Site dispatcher.
// Loads the right schedule for the active site:
//   - TN  (Crosstown)                 → DAYS_TN   (16 days, compressed timings, snack break)
//   - NY1 (Gotham Tech) +
//     NY2 (Claremont International HS) → DAYS_NY1 (16 days, full-length activities, lunch)
//   - everyone else                   → DAYS_DEFAULT (20-day master schedule)
// Both 16-day arrays are built in days-tn.js by buildFourWeekDays().
//
// Each array is loaded at page time (see <script src="..."> tags in pages
// that consume DAYS). This file picks one and exposes it as the global
// DAYS array everything else reads from.

const DAYS = (function pickDays() {
  const code = (typeof getSelectedSite === 'function') ? getSelectedSite() : null;
  if (code === 'TN' && typeof DAYS_TN !== 'undefined' && DAYS_TN.length > 0) {
    return DAYS_TN;
  }
  if ((code === 'NY1' || code === 'NY2') && typeof DAYS_NY1 !== 'undefined' && DAYS_NY1.length > 0) {
    return DAYS_NY1;
  }
  if (typeof DAYS_DEFAULT !== 'undefined') return DAYS_DEFAULT;
  return [];
})();
