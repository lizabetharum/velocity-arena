#!/usr/bin/env node
// One-shot: inject a lightweight top-nav strip into every public/lessons/*.html
// page. Self-contained inline styles so it doesn't depend on each lesson's CSS.
// Idempotent — re-running replaces the existing strip rather than duplicating.

const fs = require('fs');
const path = require('path');

const LESSONS_DIR = path.join(__dirname, '..', 'public', 'lessons');

const MARK_START = '<!-- vla-lesson-nav:start -->';
const MARK_END = '<!-- vla-lesson-nav:end -->';

const NAV_HTML = `${MARK_START}
<div style="background:#0D0D1A;border-bottom:1px solid #222840;padding:10px 20px;font-family:'DM Sans',system-ui,sans-serif;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;display:flex;gap:18px;align-items:center;">
  <a href="/index.html" style="color:#8899AA;text-decoration:none;">Today</a>
  <a href="/schedule.html" style="color:#8899AA;text-decoration:none;">Schedule</a>
  <a href="/teachers.html" style="color:#8899AA;text-decoration:none;">Teacher resources</a>
  <a href="/tools.html" style="color:#8899AA;text-decoration:none;">Tools</a>
  <a href="/activities/math/index.html" style="color:#8899AA;text-decoration:none;">Math concepts</a>
</div>
${MARK_END}`;

const files = fs.readdirSync(LESSONS_DIR)
  .filter(f => f.endsWith('.html'))
  .map(f => path.join(LESSONS_DIR, f));

let injected = 0, replaced = 0, skipped = 0;

for (const file of files) {
  let html = fs.readFileSync(file, 'utf8');

  if (html.includes(MARK_START)) {
    // Replace existing strip
    const re = new RegExp(`${MARK_START}[\\s\\S]*?${MARK_END}`);
    const next = html.replace(re, NAV_HTML);
    if (next !== html) {
      fs.writeFileSync(file, next);
      replaced++;
    } else {
      skipped++;
    }
    continue;
  }

  // Find first <body...> tag and insert after it
  const m = html.match(/<body[^>]*>/i);
  if (!m) {
    console.warn('no <body> in', path.basename(file));
    skipped++;
    continue;
  }
  const idx = m.index + m[0].length;
  const next = html.slice(0, idx) + '\n' + NAV_HTML + html.slice(idx);
  fs.writeFileSync(file, next);
  injected++;
}

console.log(`injected: ${injected}, replaced: ${replaced}, skipped: ${skipped}`);
