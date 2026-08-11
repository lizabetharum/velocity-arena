// ── Site picker helpers ──────────────────────────────────────────────────
// Each pilot site may start camp on a different weekday. The site picker
// in the header stores the selection in localStorage so every page that
// calls buildCampDates() automatically uses that site's schedule.
const SITE_KEY = 'va_selected_site';

const SITE_OPTIONS = [
  { code: 'NY1', label: 'Gotham Tech' },
  { code: 'NY2', label: 'Claremont International HS' },
  { code: 'NY3', label: 'South Bronx Community' },
  { code: 'TN',  label: 'Crosstown' },
];

function getSelectedSite() {
  try {
    const saved = localStorage.getItem(SITE_KEY);
    if (saved && SITE_OPTIONS.some(o => o.code === saved)) return saved;
  } catch (e) {}
  return null;
}

function setSelectedSite(code) {
  try { localStorage.setItem(SITE_KEY, code); } catch (e) {}
}

// ── Camp date helpers (shared across pages) ──────────────────────────────
// Builds an array of camp-day Date objects, Monday–Thursday only (all four
// 2026 pilot sites run a Mon–Thu / 16-day arc), skipping any dates in
// CONFIG.holidays. Requires config.js to be loaded first.
//
// siteCode ("NY1" | "NY2" | "NY3" | "TN") picks that site's start date from
// CONFIG.siteStartDates. If omitted, falls back to the site saved in
// localStorage via the header picker, then to CONFIG.startDate.
//
// The array is as long as the LOADED SCHEDULE (DAYS.length — 16 for all four
// 2026 pilots), not a hardcoded 20. It used to always build 20, which meant
// the four days after a site's last real camp day still looked like valid camp
// days: getCampInfo() in today.html matched today against date 17-20, returned
// a day number with no matching entry in DAYS, and renderDay() then threw on
// `day.week`. The "Camp has ended" branch existed but could never fire. TN hit
// this first (camp ended 2026-07-23); every site hits it the day after its own
// Day 16.
//
// Falls back to 20 when DAYS isn't loaded — the diagnostic-post pages don't
// load days.js and index this array at [19], so they keep their old behaviour.
function buildCampDates(siteCode) {
  const code = siteCode || getSelectedSite();
  const siteStart = code && CONFIG.siteStartDates && CONFIG.siteStartDates[code];
  const startISO = siteStart || CONFIG.startDate;
  const start = new Date(startISO + 'T00:00:00');
  const holidaySet = new Set(CONFIG.holidays || []);
  const total = (typeof DAYS !== 'undefined' && DAYS.length) ? DAYS.length : 20;
  const dates = [];
  let d = new Date(start);
  // Camp days are Mon(1)–Thu(4) at most sites. Claremont (NY2) runs its 4-day
  // close-out Tue(2)–Fri(5). South Bronx (NY3) runs its 5-day catch-up
  // Tue–Fri then Mon, so it uses a Mon(1)–Fri(5) window (Friday included).
  const loDow = code === 'NY2' ? 2 : 1;
  const hiDow = (code === 'NY2' || code === 'NY3') ? 5 : 4;
  while (dates.length < total) {
    const dow = d.getDay();
    const iso = d.toISOString().slice(0, 10);
    if (dow >= loDow && dow <= hiDow && !holidaySet.has(iso)) {
      dates.push(new Date(d));
    }
    d.setDate(d.getDate() + 1);
  }
  return dates;
}

// Today's 1-based camp-day number for the site (Mon–Thu, holidays skipped),
// or null if today isn't a camp day within the arc. Capped at the loaded
// schedule length (DAYS.length, 16 for the pilots). Used by the "DAY n / 16"
// pills so each site's day count is anchored to ITS own start date.
function currentCampDay(siteCode) {
  if (typeof CONFIG === 'undefined') return null;
  const total = (typeof DAYS !== 'undefined' && DAYS.length) ? DAYS.length : 16;
  const dates = buildCampDates(siteCode).slice(0, total);
  const now = new Date();
  for (let i = 0; i < dates.length; i++) {
    const d = dates[i];
    if (d.getFullYear() === now.getFullYear() &&
        d.getMonth() === now.getMonth() &&
        d.getDate() === now.getDate()) {
      return i + 1;
    }
  }
  return null;
}

const DAY_NAMES = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

// Returns the full weekday name for camp day number (1-based)
function campDayWeekday(campDates, dayNum) {
  return DAY_NAMES[campDates[dayNum - 1].getDay()];
}
function realWeekday(campDates, idx) {
  if (!campDates[idx]) return '';
  return campDates[idx].toLocaleDateString('en-US', { weekday: 'long', timeZone: CONFIG.timezone });
}
function getNavLink(page) {
  const pages = [
    { id: 'today',    href: '/today.html',    label: 'Today' },
    { id: 'schedule', href: '/schedule.html', label: 'Schedule' },
    { id: 'dashboard', href: '/activities/dashboard/velocity-arena-dashboard.html', label: 'Dashboard' },
    { id: 'math',     href: '/activities/math/index.html', label: 'Math Concepts' },
    { id: 'makecode', href: '/makecode.html', label: 'MakeCode' },
    { id: 'tools',    href: '/tools.html',    label: 'Tools' },
    { id: 'teachers', href: '/teachers.html', label: 'Teacher resources' },
    { id: 'about',    href: '/about.html',    label: 'About' },
  ];
  return pages.map(p =>
    `<a class="nav-link${p.id === page ? ' active' : ''}" href="${p.href}">${p.label}</a>`
  ).join('');
}

function renderHeader(activePage) {
  const currentSite = getSelectedSite();
  const sitePickerOptions = SITE_OPTIONS.map(o =>
    `<option value="${o.code}"${o.code === currentSite ? ' selected' : ''}>${o.label}</option>`
  ).join('');

  document.getElementById('site-header').innerHTML = `
    <div class="site-header">
      <div class="header-inner">
        <a class="logo-block" href="/index.html" style="text-decoration:none;">
          <div class="logo-program">NYC FIRST · Summer Math Camp 2026</div>
          <div class="logo-name">Velocity <span>Arena</span></div>
          <div class="logo-sub">4 weeks · BBC micro:bit v2 · Cutebot Pro robots · real algebra</div>
        </a>
        <div style="display:flex;align-items:center;gap:14px;">
          <div class="site-picker">
            <label for="site-picker-select">Your site</label>
            <select id="site-picker-select" onchange="onSitePickerChange(this.value)">
              ${currentSite ? '' : '<option value="">Pick a site…</option>'}
              ${sitePickerOptions}
            </select>
          </div>
          <a href="https://nycfirst.org" target="_blank"><img src="/images/nycfirst-logo.png" alt="NYC FIRST" style="height:48px;width:auto;"></a>
          <a href="/index.html" class="header-robot" style="text-decoration:none;">
            <svg viewBox="0 0 40 40" fill="none">
              <rect x="6" y="13" width="28" height="18" rx="4" fill="#00E5FF" fill-opacity=".1" stroke="#00E5FF" stroke-width="1.5"/>
              <rect x="13" y="7" width="14" height="7" rx="3" fill="#00E5FF" fill-opacity=".1" stroke="#00E5FF" stroke-width="1.5"/>
              <circle cx="14" cy="22" r="3" fill="#00E5FF"/>
              <circle cx="26" cy="22" r="3" fill="#00E5FF"/>
              <line x1="17" y1="22" x2="23" y2="22" stroke="#00E5FF" stroke-width="1.5"/>
              <rect x="10" y="31" width="6" height="5" rx="1.5" fill="#00E5FF" fill-opacity=".4"/>
              <rect x="24" y="31" width="6" height="5" rx="1.5" fill="#00E5FF" fill-opacity=".4"/>
            </svg>
          </a>
        </div>
      </div>
      <nav class="site-nav">
        <div class="nav-inner">${getNavLink(activePage)}</div>
      </nav>
    </div>
    <footer class="site-footer">
      <img src="/images/nycfirst-logo.png" alt="NYC FIRST" style="height:24px;width:auto;vertical-align:middle;margin-right:8px;">
      Velocity Arena · NYC FIRST · Summer Math Camp 2026 ·
      <a href="https://nycfirst.org">nycfirst.org</a>
    </footer>
  `;
  // Move footer out of header div after render
  const footer = document.querySelector('.site-footer');
  document.body.appendChild(footer);
}

// Called from the header <select>. Saves the site and reloads so every
// page's schedule view re-renders with the new site's camp dates.
function onSitePickerChange(code) {
  if (!code) return;
  setSelectedSite(code);
  window.location.reload();
}