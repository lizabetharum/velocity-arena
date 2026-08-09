// ── Carry interactive work across the EN/ES language toggle ──────────────
//
// The language toggle is a plain link to the sibling page (e.g. /lessons/foo
// ↔ /lessons/es/foo), so switching is a full navigation and anything typed
// but not yet saved would be lost.
//
// EN and ES lesson pages are structural copies with IDENTICAL element ids, so
// we snapshot every form field to sessionStorage under a language-neutral key
// (the path with the /es/ or /en/ segment removed) and repopulate it when the
// sibling page loads. Same browser tab only — which is exactly how a toggle
// navigates. No network, no dependencies; safe to include on any page.
(function () {
  'use strict';

  // Language-neutral key: /lessons/es/foo.html and /lessons/foo.html both map
  // to the same slot, so one language restores what the other typed.
  var KEY = 'va_carry_' + location.pathname
    .split('/')
    .filter(function (s) { return s !== 'es' && s !== 'en'; })
    .join('/');

  function fields() {
    return Array.prototype.slice.call(document.querySelectorAll(
      'input, textarea, select, [contenteditable=""], [contenteditable="true"]'
    ));
  }

  function keyOf(el) { return el.id || el.getAttribute('name') || ''; }

  function snapshot() {
    var data = {};
    fields().forEach(function (el) {
      var k = keyOf(el);
      if (!k) return;
      if (el.isContentEditable) { data['ce:' + k] = el.innerHTML; return; }
      var type = (el.type || '').toLowerCase();
      if (type === 'checkbox' || type === 'radio') {
        data['ck:' + k + ':' + (el.value || '')] = el.checked ? 1 : 0;
      } else {
        data['v:' + k] = el.value;
      }
    });
    try { sessionStorage.setItem(KEY, JSON.stringify(data)); } catch (e) {}
  }

  function fire(el) {
    try {
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
    } catch (e) {}
  }

  function restore() {
    var raw;
    try { raw = sessionStorage.getItem(KEY); } catch (e) { return; }
    if (!raw) return;
    var data;
    try { data = JSON.parse(raw); } catch (e) { return; }
    if (!data) return;

    fields().forEach(function (el) {
      var k = keyOf(el);
      if (!k) return;
      if (el.isContentEditable) {
        var h = data['ce:' + k];
        if (h != null && h !== '' && el.innerHTML !== h) { el.innerHTML = h; fire(el); }
        return;
      }
      var type = (el.type || '').toLowerCase();
      if (type === 'checkbox' || type === 'radio') {
        var ck = data['ck:' + k + ':' + (el.value || '')];
        if (ck != null && !!ck !== el.checked) { el.checked = !!ck; fire(el); }
        return;
      }
      var v = data['v:' + k];
      if (v != null && v !== '' && el.value !== v) { el.value = v; fire(el); }
    });
  }

  // Snapshot as they work (debounced), and once more the moment the page is
  // leaving — so the last keystroke before hitting the toggle is captured.
  var t = null;
  function queue() { clearTimeout(t); t = setTimeout(snapshot, 300); }
  document.addEventListener('input', queue, true);
  document.addEventListener('change', queue, true);
  window.addEventListener('pagehide', snapshot);
  window.addEventListener('beforeunload', snapshot);

  // Restore after the page's own init has run (this script is loaded last).
  function boot() { setTimeout(restore, 0); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
