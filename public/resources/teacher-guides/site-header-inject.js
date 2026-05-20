// Velocity Arena site topnav, injected into the standalone teacher-guide pages.
// These guides each have their own <style>/nav, so this header is fully
// self-contained: it ships its own CSS (hardcoded VA palette, namespaced under
// .va-topnav so it can't collide with a guide's existing .nav/.row/.util/.brand)
// and injects its own markup at the top of <body>. Static (not sticky) so it
// never fights a guide's own sticky bar (e.g. battlefield-cards' .topbar).
//
// Drop-in: <script src="/resources/teacher-guides/site-header-inject.js"></script>
// just before </body>. The DAY pill fills itself from CONFIG.startDate; if
// config.js isn't already on the page it's loaded on demand. No day → "FACILITATOR".
(function () {
  var TOTAL_DAYS = 16; // all four pilot sites run the 16-day arc

  var css = ''
    + '.va-topnav{background:#07101C;border-bottom:1px solid rgba(255,255,255,.14);padding:14px 32px 0;'
    + 'font-family:"Inter","Montserrat",-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;}'
    + '.va-topnav .va-row{display:flex;align-items:center;gap:28px;max-width:1400px;margin:0 auto;}'
    + '.va-topnav .va-brand{font:800 13px/1 inherit;letter-spacing:.04em;color:#F2F6FA;display:flex;align-items:center;gap:8px;text-decoration:none;white-space:nowrap;}'
    + '.va-topnav .va-brand .va-mark{width:18px;height:18px;background:#00E5FF;display:inline-block;clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);}'
    + '.va-topnav nav{display:flex;gap:4px;flex:1;flex-wrap:wrap;}'
    + '.va-topnav nav a{font:600 11.5px/1 inherit;letter-spacing:.16em;text-transform:uppercase;color:#6E7E92;padding:14px;text-decoration:none;position:relative;white-space:nowrap;transition:color .12s cubic-bezier(.16,1,.3,1);}'
    + '.va-topnav nav a:hover{color:#F2F6FA;}'
    + '.va-topnav nav a.active{color:#00E5FF;}'
    + '.va-topnav nav a.active::after{content:"";position:absolute;left:14px;right:14px;bottom:-1px;height:2px;background:#00E5FF;}'
    + '.va-topnav .va-util{font:600 11px/1 "JetBrains Mono","SF Mono",Menlo,Consolas,monospace;color:#B9C4D2;letter-spacing:.04em;padding-bottom:14px;font-variant-numeric:tabular-nums;white-space:nowrap;}'
    + '.va-topnav .va-util b{color:#00E5FF;}'
    + '.va-topnav .va-accent-rule{height:1px;background:rgba(0,229,255,.32);margin:0 -32px;}'
    + '@media (max-width:780px){.va-topnav nav{display:none;}}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var header = document.createElement('header');
  header.className = 'va-topnav';
  header.innerHTML = ''
    + '<div class="va-row">'
    + '  <a class="va-brand" href="/index.html"><span class="va-mark"></span> VELOCITY ARENA</a>'
    + '  <nav>'
    + '    <a href="/today.html">Today</a>'
    + '    <a href="/schedule.html">Schedule</a>'
    + '    <a href="/activities/dashboard/velocity-arena-dashboard.html">Dashboard</a>'
    + '    <a href="/activities/math/index.html">Math Concepts</a>'
    + '    <a href="/makecode.html">MakeCode</a>'
    + '    <a href="/tools.html">Tools</a>'
    + '    <a href="/teachers.html" class="active">Teacher Resources</a>'
    + '    <a href="/about.html">About</a>'
    + '  </nav>'
    + '  <span class="va-util" id="va-day-pill">FACILITATOR</span>'
    + '</div>'
    + '<div class="va-accent-rule"></div>';
  document.body.insertBefore(header, document.body.firstChild);

  function fillPill() {
    var el = document.getElementById('va-day-pill');
    if (!el) return;
    var dayNum = null;
    try {
      if (typeof CONFIG !== 'undefined' && CONFIG.startDate) {
        var start = new Date(CONFIG.startDate + 'T00:00:00');
        var today = new Date();
        var calDays = Math.floor((today - start) / 86400000);
        var wd = 0;
        for (var i = 0; i <= calDays && wd < TOTAL_DAYS; i++) {
          var d = new Date(start);
          d.setDate(start.getDate() + i);
          var dow = d.getDay();
          if (dow !== 0 && dow !== 6) wd++;
        }
        if (wd >= 1 && wd <= TOTAL_DAYS) dayNum = wd;
      }
    } catch (e) {}
    var total = (typeof DAYS !== 'undefined' && DAYS.length) || TOTAL_DAYS;
    el.innerHTML = dayNum
      ? 'FACILITATOR &middot; DAY <b>' + dayNum + '</b> / ' + total
      : 'FACILITATOR';
  }

  if (typeof CONFIG !== 'undefined') {
    fillPill();
  } else {
    var s = document.createElement('script');
    s.src = '/config.js';
    s.onload = fillPill;
    s.onerror = fillPill;
    document.head.appendChild(s);
  }
})();
