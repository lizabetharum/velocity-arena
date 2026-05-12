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
    NY1: "2026-05-04",   // Gotham Tech
    NY2: "2026-07-13",   // Claremont International HS
    NY3: "2026-04-18",   // South Bronx Community
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

  // Published Google Sheet (CSV) URL for the per-site What-If lesson URLs.
  // The picker page at /lessons/what-if/ reads this to render a "Pick your
  // site" card. To set up:
  //   1. Create a Google Sheet with columns: Site, URL, Rules, Last Updated
  //   2. File → Share → Publish to web → CSV → Publish
  //   3. Paste the resulting CSV URL here (looks like:
  //      https://docs.google.com/spreadsheets/d/e/.../pub?output=csv)
  // Leave empty to show teacher setup instructions on the picker page.
  whatIfSheetCsvUrl: ""

};
