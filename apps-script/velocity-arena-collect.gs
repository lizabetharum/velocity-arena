/**
 * Velocity Arena — Generic Lesson Collector (Apps Script Web App)
 * ---------------------------------------------------------------
 * ONE receiver for every interactive lesson. Each lesson writes to its own
 * tab, created automatically on the first submission. Wiring a new lesson is
 * a front-end change only — you never edit or redeploy this script again.
 *
 * Contract — the page POSTs JSON:
 *
 *   {
 *     lesson:      "gotham-day14-percent-change",   // becomes the tab name
 *     site:        "NY1",
 *     team:        "Team 3",
 *     firstName:   "Ada",
 *     lastInitial: "L",
 *     ts:          "2026-07-28T14:03:11.204Z",
 *     fields: { firstGuessSpeed: 32, correctedSpeed: 39, percentChange: 21.9 }
 *   }
 *
 * First name + last initial (never a full last name) matches the Roster
 * schema in anonymizer-export.md, so rows join straight to a student token.
 *
 * Every key in `fields` becomes a column. New keys append new columns on the
 * right without disturbing existing data, so you can add a question to a
 * lesson mid-pilot and older rows simply stay blank in the new column.
 *
 * Re-submitting overwrites that student's existing row (matched on name +
 * team, case/space-insensitive) instead of appending a duplicate — students
 * are expected to fix an answer and save again. `Submissions` counts how many
 * times they saved; `First Saved` / `Last Saved` bracket the range.
 *
 * DEPLOY
 *   1. Create (or open) this site's Google Sheet — the per-site source
 *      workbook the anonymizer already reads. One workbook per site.
 *   2. Extensions -> Apps Script. Paste this whole file into Code.gs.
 *   3. Deploy -> New deployment -> Web app.
 *        Execute as:      Me
 *        Who has access:  Anyone
 *      Authorize when prompted.
 *   4. Copy the /exec URL into public/config.js -> lessonCollectEndpoint,
 *      under this site's code.
 *   5. Repeat per site. Each site gets its own workbook + its own /exec URL.
 *
 * To edit later: Deploy -> Manage deployments -> pencil -> Version: New
 * version -> Deploy. The /exec URL stays the same, so config.js needs no
 * change.
 *
 * NOTE: after adding a new lesson tab, register it in the anonymizer's source
 * list (see apps-script/anonymizer-export.md) or it will not reach the
 * researcher export.
 */

// Columns every tab starts with, before the lesson's own fields.
var META_HEADERS = ['First Saved', 'Last Saved', 'Site', 'Team', 'First Name', 'Last Initial', 'Submissions'];

function doPost(e) {
  // Serialize writers: a class of 25 saving at once will collide otherwise.
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(30000);
  } catch (err) {
    return _json({ ok: false, error: 'busy' });
  }

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return _json({ ok: false, error: 'no_payload' });
    }

    var body = JSON.parse(e.postData.contents);
    var lesson = _safeTabName(body.lesson);
    if (!lesson) return _json({ ok: false, error: 'no_lesson' });

    var fields = (body.fields && typeof body.fields === 'object') ? body.fields : {};
    var sheet = _getOrCreateSheet(lesson);
    var headers = _ensureHeaders(sheet, Object.keys(fields));

    var now = new Date();
    var firstName = String(body.firstName || '').trim();
    // Store a single letter, no trailing period, even if the page sends "L."
    var lastInitial = String(body.lastInitial || '').trim().replace(/[^A-Za-z]/g, '')
      .charAt(0).toUpperCase();
    var team = String(body.team || '').trim();

    var rowIndex = _findRow(sheet, firstName, lastInitial, team);
    var isNew = (rowIndex === -1);

    // Preserve first-saved timestamp and bump the submission counter.
    var firstSaved = now;
    var count = 1;
    if (!isNew) {
      var existing = sheet.getRange(rowIndex, 1, 1, META_HEADERS.length).getValues()[0];
      if (existing[0]) firstSaved = existing[0];
      count = (Number(existing[META_HEADERS.indexOf('Submissions')]) || 0) + 1;

      // Matching is case- and spacing-insensitive, so a student who types
      // "ada" / "team 3" on their second save would otherwise rewrite the
      // row's spelling. Keep whatever went in first — the sheet stays
      // readable and stable for the roster join.
      var keptName = String(existing[META_HEADERS.indexOf('First Name')] || '').trim();
      var keptTeam = String(existing[META_HEADERS.indexOf('Team')] || '').trim();
      if (keptName) firstName = keptName;
      if (keptTeam) team = keptTeam;
    }

    var row = [];
    for (var i = 0; i < headers.length; i++) {
      var h = headers[i];
      if (h === 'First Saved')       row.push(firstSaved);
      else if (h === 'Last Saved')   row.push(now);
      else if (h === 'Site')         row.push(String(body.site || ''));
      else if (h === 'Team')         row.push(team);
      else if (h === 'First Name')   row.push(firstName);
      else if (h === 'Last Initial') row.push(lastInitial);
      else if (h === 'Submissions')  row.push(count);
      else row.push(_flatten(fields[h]));
    }

    var target = isNew ? sheet.getLastRow() + 1 : rowIndex;
    sheet.getRange(target, 1, 1, row.length).setValues([row]);

    return _json({ ok: true, lesson: lesson, replaced: !isNew, submissions: count });
  } catch (err) {
    return _json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// A GET is handy for eyeballing that the deployment is live.
function doGet() {
  return _json({ ok: true, service: 'velocity-arena-collect' });
}

// ---------- helpers ----------

function _json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// Sheet tab names can't contain : \ / ? * [ ] and cap at 100 chars.
function _safeTabName(raw) {
  var s = String(raw || '').trim().replace(/[:\\\/?*\[\]]/g, '-');
  return s ? s.substring(0, 100) : '';
}

function _getOrCreateSheet(name) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(META_HEADERS);
    sheet.getRange(1, 1, 1, META_HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// Returns the full header row, appending any field keys not yet present.
function _ensureHeaders(sheet, fieldKeys) {
  var lastCol = Math.max(sheet.getLastColumn(), 1);
  var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0]
    .map(function (h) { return String(h || ''); });

  // A brand-new sheet can come back with a single empty cell.
  if (headers.length === 1 && headers[0] === '') {
    headers = META_HEADERS.slice();
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }

  var added = fieldKeys.filter(function (k) { return headers.indexOf(k) === -1; });
  if (added.length) {
    sheet.getRange(1, headers.length + 1, 1, added.length)
      .setValues([added])
      .setFontWeight('bold');
    headers = headers.concat(added);
  }
  return headers;
}

// Match an existing student row on first name + last initial + team,
// ignoring case and spacing. Two students who share a first name are kept
// apart by the initial; the same name on two teams stays two rows.
function _findRow(sheet, firstName, lastInitial, team) {
  var last = sheet.getLastRow();
  if (last < 2) return -1;

  var key = _key(firstName) + '|' + _key(lastInitial) + '|' + _key(team);
  if (key === '||') return -1;  // nothing identifying — always append

  var firstCol = META_HEADERS.indexOf('First Name') + 1;
  var initCol  = META_HEADERS.indexOf('Last Initial') + 1;
  var teamCol  = META_HEADERS.indexOf('Team') + 1;
  var width = Math.max(firstCol, initCol, teamCol);
  var values = sheet.getRange(2, 1, last - 1, width).getValues();

  for (var i = 0; i < values.length; i++) {
    var rowKey = _key(values[i][firstCol - 1]) + '|' +
                 _key(values[i][initCol - 1]) + '|' +
                 _key(values[i][teamCol - 1]);
    if (rowKey === key) return i + 2;
  }
  return -1;
}

function _key(v) {
  return String(v == null ? '' : v).trim().toLowerCase().replace(/\s+/g, ' ');
}

// Objects/arrays would land in a cell as "[object Object]".
function _flatten(v) {
  if (v == null) return '';
  if (typeof v === 'object') return JSON.stringify(v);
  return v;
}
