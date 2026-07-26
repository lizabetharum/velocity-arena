// ─────────────────────────────────────────────
// VELOCITY ARENA — SITE CONFIGURATION
// Each pilot site edits this file only.
// ─────────────────────────────────────────────

const CONFIG = {

  // Camp name shown in the header and homepage
  campName: "Velocity Arena",

  // First day of Week 1. Format: YYYY-MM-DD.
  // Can be any weekday — weekends are skipped automatically.
  // Used as the default for any code that doesn't specify a site
  // (e.g. the current "Today" view on the homepage).
  startDate: "2026-05-04",

  // Per-site start dates. Each pilot site may begin camp on a different
  // day of the week. Keys are the internal site codes:
  //   NY1 = New York 1 (Gotham Tech)
  //   NY2 = New York 2 (Claremont International HS)
  //   NY3 = New York 3 (South Bronx Community)
  //   TN  = Tennessee
  // Format: "YYYY-MM-DD". The site computes each site's Day 20
  // (last day of camp) by counting 20 weekdays forward from the start,
  // skipping weekends and any holidays listed below.
  siteStartDates: {
    NY1: "2026-07-06",   // Gotham Tech
    NY2: "2026-07-20",   // Claremont International HS (shifted +1 week: missed most of the Jul 20–23 week, resuming at Day 5 on Mon Jul 27)
    NY3: "2026-07-27",   // South Bronx Community
    TN:  "2026-06-29",   // Tennessee
  },

  // Your timezone — affects what "today" means.
  // Full list: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  timezone: "America/New_York",

  // Optional: your site's name for the footer
  siteName: "NYC FIRST",

  // Holidays to skip (camp days won't fall on these).
  // Format: ["YYYY-MM-DD", ...]
  holidays: ['2026-07-04'],

  // Day start time (minutes since midnight). Drives the time slots
  // shown on the facilitator schedule. If a site code isn't listed in
  // siteDayStartMin, the renderer falls back to defaultDayStartMin.
  //   600 = 10:00 AM   485 = 8:05 AM
  defaultDayStartMin: 600,
  siteDayStartMin: {
    TN: 485,    // Tennessee runs 8:05 AM – 12:00 PM
  },

  // Password for the Teacher Resources page.
  // Change this before sharing the site with students.
  teacherPassword: "velocityNYCFIRST2026",

  // Published Google Sheet (CSV) URL(s) for the per-site What-If lesson URLs.
  // The picker page at /lessons/what-if/ reads this to render a "Pick your
  // site" card.
  //
  // Two supported shapes:
  //
  //   A) Single shared sheet (one tab, everyone's row in it):
  //      whatIfSheetCsvUrl: "https://docs.google.com/spreadsheets/d/e/.../pub?output=csv"
  //
  //   B) Per-site tabs (each site owns its own tab, can be protected
  //      individually — recommended for multi-site programs):
  //      whatIfSheetCsvUrl: {
  //        NY1: "https://docs.google.com/spreadsheets/d/e/.../pub?gid=0&output=csv",
  //        NY2: "https://docs.google.com/spreadsheets/d/e/.../pub?gid=12345&output=csv",
  //        NY3: "https://docs.google.com/spreadsheets/d/e/.../pub?gid=67890&output=csv",
  //        TN:  "https://docs.google.com/spreadsheets/d/e/.../pub?gid=11111&output=csv",
  //      }
  //      Each tab's CSV URL differs only by the gid= parameter. Get it from
  //      Sheets: File → Share → Publish to web → choose the tab → CSV → Publish.
  //
  // Leave empty to show teacher setup instructions on the picker page.
  whatIfSheetCsvUrl: {
  NY1: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfI9d2x7jkv9aEBAf78GVAOsp6960u60r2X1DvVv-HMwgZ3oGAb5df7xV6OvBW28-vCvJazO9PCjie/pub?gid=0&single=true&output=csv",
  NY2: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfI9d2x7jkv9aEBAf78GVAOsp6960u60r2X1DvVv-HMwgZ3oGAb5df7xV6OvBW28-vCvJazO9PCjie/pub?gid=229813507&single=true&output=csv",
  NY3: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfI9d2x7jkv9aEBAf78GVAOsp6960u60r2X1DvVv-HMwgZ3oGAb5df7xV6OvBW28-vCvJazO9PCjie/pub?gid=2121279537&single=true&output=csv",
  TN:  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfI9d2x7jkv9aEBAf78GVAOsp6960u60r2X1DvVv-HMwgZ3oGAb5df7xV6OvBW28-vCvJazO9PCjie/pub?gid=37878490&single=true&output=csv",
  },

  // Published Google Sheet (CSV) URL for the "Student Lock-Ins" tab.
  // The /lessons/what-if-lockins/ page reads this to show facilitators
  // every team's final locked loadout for their site.
  //
  // Setup:
  //   1. In Google Sheets, click the "Student Lock-Ins" tab (auto-created
  //      the first time a student clicks Lock In Loadout).
  //   2. File → Share → Publish to web → choose that tab → CSV → Publish.
  //   3. Paste the resulting URL between the quotes below.
  // Leave empty to show setup instructions on the lock-ins page.
  whatIfLockinsCsvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfI9d2x7jkv9aEBAf78GVAOsp6960u60r2X1DvVv-HMwgZ3oGAb5df7xV6OvBW28-vCvJazO9PCjie/pub?gid=1131538118&single=true&output=csv",

  // Optional Apps Script Web App URL for auto-publishing the What-If URL
  // straight into the Google Sheet (no copy/paste). When set, the
  // recalculator shows a "Publish to Sheet" button beside Generate URL.
  // Source script: apps-script/what-if-publish.gs (deploy as a Web App
  // bound to the same spreadsheet that whatIfSheetCsvUrl reads from).
  // Leave empty to disable auto-publish (Generate Shareable URL still works).
  whatIfPublishEndpoint: "https://script.google.com/macros/s/AKfycbz2OauwNlB16epK02Asw3SGRNnlrLwBA2ykZVwOZvYvcVQBmXdpuSNsjEhdkStq1BUyJw/exec"

};
