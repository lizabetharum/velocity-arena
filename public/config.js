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
  startDate: "2026-03-31",

  // Per-site start dates. Each pilot site may begin camp on a different
  // day of the week. Keys are the internal site codes:
  //   NY1 = New York 1
  //   NY2 = New York 2
  //   TN  = Tennessee
  // Format: "YYYY-MM-DD". The site computes each site's Day 20
  // (last day of camp) by counting 20 weekdays forward from the start,
  // skipping weekends and any holidays listed below.
  siteStartDates: {
    NY1: "2026-03-31",   // New York 1
    NY2: "2026-03-31",   // New York 2
    TN:  "2026-03-31",   // Tennessee
  },

  // Your timezone — affects what "today" means.
  // Full list: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  timezone: "America/New_York",

  // Optional: your site's name for the footer
  siteName: "NYC FIRST",

  // Holidays to skip (camp days won't fall on these).
  // Format: ["YYYY-MM-DD", ...]
  holidays: [],

  // Password for the Teacher Resources page.
  // Change this before sharing the site with students.
  teacherPassword: "velocityNYCFIRST2026"

};
