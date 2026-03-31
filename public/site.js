// ── Camp date helpers (shared across pages) ──────────────────────────────
// Builds an array of 20 Date objects for camp days, skipping weekends and
// any dates listed in CONFIG.holidays.  Requires config.js to be loaded first.
function buildCampDates() {
  const start = new Date(CONFIG.startDate + 'T00:00:00');
  const holidaySet = new Set(CONFIG.holidays || []);
  const dates = [];
  let d = new Date(start);
  while (dates.length < 20) {
    const dow = d.getDay();
    const iso = d.toISOString().slice(0, 10);
    if (dow !== 0 && dow !== 6 && !holidaySet.has(iso)) {
      dates.push(new Date(d));
    }
    d.setDate(d.getDate() + 1);
  }
  return dates;
}

const DAY_NAMES = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

// Returns the full weekday name for camp day number (1-based)
function campDayWeekday(campDates, dayNum) {
  return DAY_NAMES[campDates[dayNum - 1].getDay()];
}

function getNavLink(page) {
  const pages = [
    { id: 'today',    href: '/index.html',    label: 'Today' },
    { id: 'schedule', href: '/schedule.html', label: 'Schedule' },
    { id: 'dashboard', href: '/activities/dashboard/velocity-arena-dashboard.html', label: 'Dashboard' },
    { id: 'tools',    href: '/tools.html',    label: 'Tools' },
    { id: 'teachers', href: '/teachers.html', label: 'Teacher resources' },
    { id: 'about',    href: '/about.html',    label: 'About' },
  ];
  return pages.map(p =>
    `<a class="nav-link${p.id === page ? ' active' : ''}" href="${p.href}">${p.label}</a>`
  ).join('');
}

function renderHeader(activePage) {
  document.getElementById('site-header').innerHTML = `
    <div class="site-header">
      <div class="header-inner">
        <a class="logo-block" href="/index.html" style="text-decoration:none;">
          <div class="logo-program">NYC FIRST · Summer Math Camp 2026</div>
          <div class="logo-name">Velocity <span>Arena</span></div>
          <div class="logo-sub">4 weeks · BBC micro:bit v2 · Cutebot Pro robots · real algebra</div>
        </a>
        <div style="display:flex;align-items:center;gap:10px;">
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