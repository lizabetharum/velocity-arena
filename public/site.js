function getNavLink(page) {
  const pages = [
    { id: 'today',    href: '/index.html',    label: 'Today' },
    { id: 'schedule', href: '/schedule.html', label: 'Schedule' },
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
        <div class="logo-block">
          <div class="logo-program">NYC FIRST · Summer Math Camp 2025</div>
          <div class="logo-name">Velocity <span>Arena</span></div>
          <div class="logo-sub">4 weeks · BBC micro:bit v2 · Cutebot Pro robots · real algebra</div>
        </div>
        <div class="header-robot">
          <svg viewBox="0 0 40 40" fill="none">
            <rect x="6" y="13" width="28" height="18" rx="4" fill="#00E5FF" fill-opacity=".1" stroke="#00E5FF" stroke-width="1.5"/>
            <rect x="13" y="7" width="14" height="7" rx="3" fill="#00E5FF" fill-opacity=".1" stroke="#00E5FF" stroke-width="1.5"/>
            <circle cx="14" cy="22" r="3" fill="#00E5FF"/>
            <circle cx="26" cy="22" r="3" fill="#00E5FF"/>
            <line x1="17" y1="22" x2="23" y2="22" stroke="#00E5FF" stroke-width="1.5"/>
            <rect x="10" y="31" width="6" height="5" rx="1.5" fill="#00E5FF" fill-opacity=".4"/>
            <rect x="24" y="31" width="6" height="5" rx="1.5" fill="#00E5FF" fill-opacity=".4"/>
          </svg>
        </div>
      </div>
      <nav class="site-nav">
        <div class="nav-inner">${getNavLink(activePage)}</div>
      </nav>
    </div>
    <footer class="site-footer">
      Velocity Arena · NYC FIRST · Summer Math Camp 2025 ·
      Built by <a href="https://construct3d.org">Lizabeth Arum</a>
    </footer>
  `;
  // Move footer out of header div after render
  const footer = document.querySelector('.site-footer');
  document.body.appendChild(footer);
}
