// Site dispatcher.
// Loads the right schedule for the active site. Tennessee runs the
// 16-day compressed program (DAYS_TN); every other site uses the
// master 20-day schedule (DAYS_DEFAULT).
//
// Both arrays are loaded at page time (see <script src="..."> tags
// in each page that consumes DAYS). This file picks one and exposes
// it as the global DAYS array everything else reads from.

const DAYS = (function pickDays() {
  const code = (typeof getSelectedSite === 'function') ? getSelectedSite() : null;
  if (code === 'TN' && typeof DAYS_TN !== 'undefined' && DAYS_TN.length > 0) {
    return DAYS_TN;
  }
  if (typeof DAYS_DEFAULT !== 'undefined') return DAYS_DEFAULT;
  return [];
})();
