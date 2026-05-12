/**
 * What-If Loadout Recalculator — Sheet auto-publisher
 * --------------------------------------------------------------
 * Deploy this as a Google Apps Script Web App bound to the same
 * spreadsheet that the picker page reads from (the one configured
 * in public/config.js → whatIfSheetCsvUrl).
 *
 * Deploy steps (one-time):
 *   1. In Google Sheets, Extensions → Apps Script.
 *   2. Paste this whole file into Code.gs (replacing any existing code).
 *   3. (Optional) Customize TAB_ALIASES below if your tab names differ
 *      from the site codes ("NY1", "NY2", "NY3", "TN").
 *   4. Click Deploy → New deployment → type "Web app".
 *      Description: "What-If publish endpoint".
 *      Execute as: Me.
 *      Who has access: Anyone.
 *   5. Click Deploy. Authorize when prompted.
 *   6. Copy the resulting Web app URL (ends in /exec) and paste it into
 *      public/config.js → whatIfPublishEndpoint.
 *   7. Commit + push; the recalculator's "Publish to Sheet" button is live.
 *
 * To update this script later, edit and choose Deploy → Manage deployments
 * → Edit (pencil) → Version: New version → Deploy. The /exec URL stays
 * the same so you don't need to re-edit config.js.
 *
 * Why GET and not POST: Apps Script Web Apps with "Anyone" access serve
 * doGet directly to anonymous callers, but POSTs are redirected through
 * an internal Google URL that blocks unauthenticated traffic — even when
 * the dropdown says "Anyone". The dashboard endpoints in this codebase
 * use the same GET-with-query-params trick.
 *
 * Request: GET ?payload=<URL-encoded JSON> where the JSON is:
 *   { "site": "NY1", "url": "https://…#eyJ…", "rules": "E ≤ 8" }
 *
 * Response (JSON):
 *   { "ok": true, "site": "NY1", "tab": "NY1", "lastUpdated": "2026-05-12" }
 *   { "ok": false, "error": "..." }
 */

// Map site code → list of tab name aliases to try (in order). Adjust if
// your tabs are named after the schools instead of the codes.
var TAB_ALIASES = {
  NY1: ['NY1', 'Gotham Tech',                'Gotham'],
  NY2: ['NY2', 'Claremont International HS', 'Claremont'],
  NY3: ['NY3', 'South Bronx Community',      'South Bronx'],
  TN:  ['TN',  'Crosstown',                  'Tennessee']
};

// Column order in each tab. Tweak if you reorder columns in the sheet.
// (Column 1 = A, 2 = B, etc.)
var COLUMNS = {
  site:        1,
  url:         2,
  rules:       3,
  lastUpdated: 4
};

// Which row to write to. Each tab is expected to hold ONE site's row of
// data after the header row, so we overwrite row 2.
var DATA_ROW = 2;

function doGet(e) {
  // No payload query param → return a help string (handy for sanity-checking
  // the deploy URL by visiting it in a browser).
  if (!e || !e.parameter || !e.parameter.payload) {
    return ContentService
      .createTextOutput('What-If publish endpoint. Call with ?payload=<URL-encoded JSON> where the JSON is { site, url, rules }.')
      .setMimeType(ContentService.MimeType.TEXT);
  }
  try {
    var body = JSON.parse(e.parameter.payload);
    var site = (body.site || '').trim();
    var url = (body.url || '').trim();
    var rules = (body.rules || '').trim();

    if (!site) return jsonResponse({ ok: false, error: 'Missing "site" field' });
    if (!url)  return jsonResponse({ ok: false, error: 'Missing "url" field' });

    var tab = findTabForSite(site);
    if (!tab) {
      return jsonResponse({
        ok: false,
        error: 'No tab found matching site "' + site + '". Expected one of: ' +
          (TAB_ALIASES[site] || []).join(', ') + '. Check tab names or edit TAB_ALIASES.'
      });
    }

    // Make sure the header row exists (first run safety).
    if (tab.getLastRow() < 1) {
      tab.getRange(1, 1, 1, 4).setValues([['Site', 'URL', 'Rules', 'Last Updated']]);
    }

    var lastUpdated = Utilities.formatDate(new Date(), Session.getScriptTimeZone() || 'America/New_York', 'yyyy-MM-dd');
    var row = [];
    row[COLUMNS.site - 1] = site;
    row[COLUMNS.url - 1] = url;
    row[COLUMNS.rules - 1] = rules;
    row[COLUMNS.lastUpdated - 1] = lastUpdated;

    tab.getRange(DATA_ROW, 1, 1, row.length).setValues([row]);

    return jsonResponse({
      ok: true,
      site: site,
      tab: tab.getName(),
      lastUpdated: lastUpdated
    });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err && err.message || err) });
  }
}

function findTabForSite(siteCode) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var aliases = (TAB_ALIASES[siteCode] || [siteCode]).map(function(s) {
    return String(s).trim().toLowerCase();
  });
  var sheets = ss.getSheets();
  for (var i = 0; i < sheets.length; i++) {
    var name = sheets[i].getName().trim().toLowerCase();
    if (aliases.indexOf(name) !== -1) return sheets[i];
  }
  return null;
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
