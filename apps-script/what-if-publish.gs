/**
 * What-If Loadout Recalculator — Apps Script Web App
 * --------------------------------------------------------------
 * Deploy this as a Web App bound to the same Google Sheet that
 * public/config.js → whatIfSheetCsvUrl reads from.
 *
 *  - Facilitator clicks Generate Shareable URL on the recalculator
 *    → POST { site, url } → handlePublish writes that site's tab.
 *  - Student clicks Lock In Loadout on the student lesson page
 *    → POST { action: 'lockSubmit', site, team, stats, decision, ts }
 *    → handleLockSubmit appends a row to the 'Student Lock-Ins' tab
 *    (auto-created on first submission).
 *
 * Deploy:
 *   Extensions → Apps Script → paste this whole file into Code.gs.
 *   Deploy → New deployment → Web app. Execute as: Me. Access: Anyone.
 *   Authorize. Copy the /exec URL → public/config.js → whatIfPublishEndpoint.
 *
 * To redeploy after editing this script: Deploy → Manage deployments
 * → pencil → Version: New version → Deploy. The /exec URL stays the same.
 */

// ---------- Site display name → site tab name ----------
var SITE_TO_TAB = {
  'Gotham Tech':                 'NY1',
  'Claremont International HS':  'NY2',
  'South Bronx Community':       'NY3',
  'Crosstown':                   'TN'
};

// Where student lock-in rows land.
var LOCKINS_TAB = 'Student Lock-Ins';

// ---------- Router ----------
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ result: 'error', error: 'Missing POST body' });
    }
    var data = JSON.parse(e.postData.contents);
    if (data && data.action === 'lockSubmit') return handleLockSubmit(data);
    return handlePublish(data);
  } catch (err) {
    return jsonResponse({ result: 'error', error: String(err && err.message || err) });
  }
}

function doGet() {
  return ContentService
    .createTextOutput(
      'What-If endpoint.\n' +
      'POST { site, url } to publish a facilitator setup.\n' +
      'POST { action: "lockSubmit", site, team, stats: {S,E,T,P}, decision, ts } to log a student lock-in.'
    )
    .setMimeType(ContentService.MimeType.TEXT);
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// ---------- Existing flow: facilitator publishes their setup ----------
function handlePublish(data) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var targetSheetName = SITE_TO_TAB[data.site] || 'NY1';
  var sheet = ss.getSheetByName(targetSheetName);
  if (!sheet) throw new Error("Sheet tab '" + targetSheetName + "' not found.");

  var url = data.url || '';
  var fragment = url.split('#')[1] || '';
  var decoded = {};
  if (fragment) {
    try {
      decoded = JSON.parse(
        Utilities.newBlob(Utilities.base64Decode(fragment)).getDataAsString()
      );
    } catch (e) { /* fall through with empty decoded */ }
  }
  var rulesSummary = (decoded.rules || [])
    .map(function(r) { return r.stat + ' ' + r.dir + ' ' + r.threshold; })
    .join(', ');
  var teamsSummary = (decoded.teams || [])
    .map(function(t) {
      return (t.name || '?') +
        ' (S' + (t.S || 0) + '/E' + (t.E || 0) + '/T' + (t.T || 0) + '/P' + (t.P || 0) + ')';
    })
    .join('; ');

  sheet.appendRow([
    data.site || '',
    url,
    rulesSummary,
    teamsSummary,
    new Date()
  ]);

  return jsonResponse({ result: 'success', sheet: targetSheetName });
}

// ---------- New flow: students lock in final loadouts ----------
function handleLockSubmit(data) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(LOCKINS_TAB);
  if (!sheet) {
    sheet = ss.insertSheet(LOCKINS_TAB);
    sheet.getRange(1, 1, 1, 8)
      .setValues([['Submitted at', 'Site', 'Team', 'S', 'E', 'T', 'P', 'Decision']]);
    sheet.setFrozenRows(1);
  }
  var stats = data.stats || {};
  sheet.appendRow([
    data.ts ? new Date(data.ts) : new Date(),
    data.site || '',
    data.team || '',
    Number(stats.S) || 0,
    Number(stats.E) || 0,
    Number(stats.T) || 0,
    Number(stats.P) || 0,
    data.decision || ''
  ]);
  return jsonResponse({ result: 'success', action: 'lockSubmit', tab: LOCKINS_TAB });
}
