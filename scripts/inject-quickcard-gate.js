#!/usr/bin/env node
// Inject a session-based teacher-only gate into every quick-card HTML and the
// print bundler under public/resources/quick-cards/. The gate piggybacks on
// the existing `va_teacher_auth` sessionStorage flag set by teachers.html, so
// teachers who unlock teachers.html in the same browsing context (including
// new tabs opened via target="_blank" links) auto-pass the gate.
//
// Idempotent — re-running replaces the existing gate block rather than
// duplicating it.

const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'public', 'resources', 'quick-cards');
const MARK_START = '<!-- vla-quickcard-gate:start -->';
const MARK_END = '<!-- vla-quickcard-gate:end -->';

const GATE_BLOCK = `${MARK_START}
<script>
(function(){
  var KEY = 'va_teacher_auth';
  // localStorage so auth persists across tabs and reloads (sessionStorage is per-tab).
  if (localStorage.getItem(KEY) === '1') return;
  document.documentElement.style.visibility = 'hidden';
  function bounce() { location.href = '/teachers.html'; }
  var s = document.createElement('script');
  s.src = '/config.js';
  s.onload = function() {
    // CONFIG is a top-level const — accessible globally as CONFIG, NOT as window.CONFIG.
    var pw = (typeof CONFIG !== 'undefined' && CONFIG.teacherPassword) || '';
    var ans = prompt('Teacher password required to view quick cards:');
    if (ans !== null && ans.trim() === String(pw).trim()) {
      localStorage.setItem(KEY, '1');
      document.documentElement.style.visibility = '';
    } else {
      bounce();
    }
  };
  s.onerror = bounce;
  document.head.appendChild(s);
})();
</script>
${MARK_END}`;

const files = fs.readdirSync(DIR)
  .filter(f => f.endsWith('.html'))
  .map(f => path.join(DIR, f));

let injected = 0, replaced = 0, skipped = 0;

for (const file of files) {
  let html = fs.readFileSync(file, 'utf8');

  if (html.includes(MARK_START)) {
    const re = new RegExp(`${MARK_START}[\\s\\S]*?${MARK_END}`);
    const next = html.replace(re, GATE_BLOCK);
    if (next !== html) {
      fs.writeFileSync(file, next);
      replaced++;
    } else {
      skipped++;
    }
    continue;
  }

  // Insert as the very first thing inside <head> so it runs before any other
  // script or content. Fall back to injecting after <html> if no <head> tag.
  const headMatch = html.match(/<head[^>]*>/i);
  if (!headMatch) {
    console.warn('no <head> in', path.basename(file));
    skipped++;
    continue;
  }
  const idx = headMatch.index + headMatch[0].length;
  const next = html.slice(0, idx) + '\n' + GATE_BLOCK + html.slice(idx);
  fs.writeFileSync(file, next);
  injected++;
}

console.log(`gate injected: ${injected}, replaced: ${replaced}, skipped: ${skipped}`);
