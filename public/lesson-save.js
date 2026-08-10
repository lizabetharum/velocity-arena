// ── Lesson → spreadsheet saving (shared) ────────────────────────────────
//
// Drop-in "Save my work" support for interactive lessons. Pairs with the
// generic receiver in apps-script/velocity-arena-collect.gs — every lesson
// writes to its own tab in that site's workbook, so wiring a new lesson is a
// front-end change only.
//
// A page needs three things:
//
//   <script src="/config.js"></script>
//   <script src="/site.js"></script>
//   <script src="/lesson-save.js"></script>
//
//   VA.renderIdentity({ mount: 'who-card' })                       // near the top
//   VA.renderSaveCard({ mount: 'save-card', lesson: 'my-lesson', collect: fn })
//
// `collect` returns a flat object — each key becomes a column.
//
// renderIdentity is optional but recommended: it puts "who is this?" at the
// top of the page where a student fills it in before working, instead of
// burying it under the Save button at the bottom. When an identity strip is
// present, the save card renders as just a button and reads the name from it.
//
// Student identity is first name + last initial only. Never collect a full
// last name: the roster (see apps-script/anonymizer-export.md) is the single
// place that can re-identify a student, and it keys on exactly these fields.
//
// If no endpoint is configured for the site, everything still works — the
// page saves to localStorage and says so, rather than failing in front of a
// classroom.

(function () {
  'use strict';

  // The script element that loaded us — read its data-lesson for auto-mode.
  var SELF = document.currentScript;

  var STORE_PREFIX = 'va_lesson_';
  var ID_KEY = 'va_student_id';

  // ── identity, remembered across lessons on this device ──
  function loadIdentity() {
    try {
      var raw = localStorage.getItem(ID_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return { firstName: '', lastInitial: '', team: '' };
  }

  function saveIdentity(id) {
    try { localStorage.setItem(ID_KEY, JSON.stringify(id)); } catch (e) {}
  }

  // ── endpoint lookup ──
  // config.js → CONFIG.lessonCollectEndpoint, either a single URL string or a
  // per-site map keyed by site code (NY1 / NY2 / NY3 / TN).
  function endpointFor(siteCode) {
    var cfg = (typeof CONFIG !== 'undefined') ? CONFIG.lessonCollectEndpoint : null;
    if (!cfg) return '';
    if (typeof cfg === 'string') return cfg;
    return (siteCode && cfg[siteCode]) ? cfg[siteCode] : '';
  }

  function currentSite() {
    return (typeof getSelectedSite === 'function' && getSelectedSite()) || '';
  }

  // ── POST ──
  // No Content-Type header, so this stays a "simple" CORS request and skips
  // preflight — Apps Script web apps don't answer OPTIONS.
  function post(url, payload) {
    return fetch(url, { method: 'POST', body: JSON.stringify(payload) })
      .then(function (res) { return res.json().catch(function () { return null; }); });
  }

  // ── public API ──
  var VA = {
    loadIdentity: loadIdentity,

    // Cache the last payload locally so a student can close the tab and come
    // back, and so a network failure never loses their work.
    saveLocal: function (lesson, data) {
      try { localStorage.setItem(STORE_PREFIX + lesson, JSON.stringify(data)); } catch (e) {}
    },
    loadLocal: function (lesson) {
      try {
        var raw = localStorage.getItem(STORE_PREFIX + lesson);
        if (raw) return JSON.parse(raw);
      } catch (e) {}
      return null;
    },

    // Generic field capture — every input/textarea/select/contenteditable with
    // an id becomes a column (the identity inputs are skipped). Lets a lesson
    // wire "Save my work" with no hand-written collect().
    collectAllFields: function () { return collectAllFields(); },

    // Repopulate fields by id from the last local save, so a reload (or a
    // return on the same device) brings the work back. Fires input/change so
    // any on-page calculators recompute.
    restoreFields: function (lesson) {
      var prev = VA.loadLocal(lesson);
      var f = prev && prev.fields;
      if (!f) return;
      Object.keys(f).forEach(function (id) {
        var el = document.getElementById(id);
        if (!el) return;
        var v = f[id];
        var type = (el.type || '').toLowerCase();
        if (el.isContentEditable) { if (v != null && v !== '') el.innerHTML = v; }
        else if (type === 'checkbox' || type === 'radio') { el.checked = !!v && v !== '0' && v !== 0; }
        else if (v != null && v !== '') { el.value = v; }
        try {
          el.dispatchEvent(new Event('input', { bubbles: true }));
          el.dispatchEvent(new Event('change', { bubbles: true }));
        } catch (e) {}
      });
    },

    /**
     * Render the "who is working on this?" fields. Put this near the TOP of
     * the page — a student should name themselves before they start, not
     * discover the box after scrolling past every question.
     *
     *   mount  id of the container element
     *   title  optional heading override
     */
    renderIdentity: function (opts) {
      var mount = document.getElementById(opts.mount);
      if (!mount) return;

      mount.innerHTML =
        '<div class="vasave vasave-who">' +
          '<div class="vasave-t">' + (opts.title || 'Who’s working on this?') + '</div>' +
          '<div class="vasave-sub">So your facilitator knows whose work to look at. First name and last initial only.</div>' +
          identityFields() +
        '</div>';

      wireIdentity();
    },

    /**
     * Render the save block into an existing element.
     *
     *   mount    id of the container element
     *   lesson   tab name in the spreadsheet
     *   collect  () => flat object of answers
     *   title    optional heading override
     *
     * If renderIdentity() already put the name fields on the page, this
     * renders as just a button — no duplicate boxes to disagree with.
     */
    renderSaveCard: function (opts) {
      var mount = document.getElementById(opts.mount);
      if (!mount) return;

      // No collect() given → capture every field on the page generically.
      opts.collect = opts.collect || collectAllFields;

      var haveStrip = !!document.getElementById('vasave-first');

      mount.innerHTML =
        '<div class="vasave">' +
          '<div class="vasave-t">' + (opts.title || 'Save my work') + '</div>' +
          '<div class="vasave-sub">' +
            (haveStrip
              ? 'Sends your answers to your facilitator. You can save again any time — it updates your work rather than adding a second copy.'
              : 'Your facilitator sees this. First name and last initial only.') +
          '</div>' +
          (haveStrip ? '' : identityFields()) +
          '<button type="button" class="vasave-btn" id="vasave-go">Save my work</button>' +
          '<div class="vasave-status" id="vasave-status"></div>' +
        '</div>';

      if (!haveStrip) wireIdentity();

      document.getElementById('vasave-go').addEventListener('click', function () {
        submit(opts, this);
      });

      // Auto-save to localStorage as they work, so nothing is lost on a reload,
      // a tab close, or a language toggle (EN and ES share one lesson key).
      var asTimer = null;
      function autosave() {
        VA.saveLocal(opts.lesson, {
          lesson: opts.lesson,
          site: currentSite(),
          firstName: val('vasave-first'),
          lastInitial: val('vasave-init'),
          team: val('vasave-team'),
          ts: new Date().toISOString(),
          fields: (opts.collect && opts.collect()) || {}
        });
      }
      document.addEventListener('input', function () { clearTimeout(asTimer); asTimer = setTimeout(autosave, 400); }, true);
      document.addEventListener('change', function () { clearTimeout(asTimer); asTimer = setTimeout(autosave, 400); }, true);
    }
  };

  // Every input/textarea/select/contenteditable with an id → one column.
  function collectAllFields() {
    var out = {};
    Array.prototype.forEach.call(document.querySelectorAll('input, textarea, select'), function (el) {
      var id = el.id;
      if (!id || id.indexOf('vasave') === 0) return;
      var type = (el.type || '').toLowerCase();
      if (type === 'checkbox' || type === 'radio') out[id] = el.checked ? 1 : 0;
      else out[id] = el.value;
    });
    Array.prototype.forEach.call(document.querySelectorAll('[contenteditable=""],[contenteditable="true"]'), function (el) {
      if (el.id) out[el.id] = (el.innerHTML || '');
    });
    return out;
  }

  // Auto-mode: a page that includes us as
  //   <script src="/lesson-save.js" data-lesson="my-lesson"></script>
  // gets the whole thing with no other JS — an identity strip at the top of the
  // main content, a Save card at the bottom, generic field capture, auto-save,
  // and restore-on-load. EN and ES share the lesson key, so both write one tab.
  function autoInit(lesson) {
    // If the page already declares its own mount points, respect them
    // (identity at top, save at bottom). Otherwise render ONE self-contained
    // card — name + Save together — at the end of the main content column, so
    // we never inject a strip above a page's own header.
    if (document.getElementById('save-card')) {
      if (document.getElementById('who-card')) VA.renderIdentity({ mount: 'who-card' });
      VA.renderSaveCard({ mount: 'save-card', lesson: lesson });
      VA.restoreFields(lesson);
      return;
    }
    var host = document.querySelector('main') || document.querySelector('.wrap') ||
               document.querySelector('.sheet') || document.querySelector('.content') ||
               document.querySelector('.page') || document.querySelector('.container') ||
               document.body;
    var s = document.createElement('div'); s.id = 'save-card';
    host.appendChild(s);
    VA.renderSaveCard({ mount: 'save-card', lesson: lesson });  // includes name fields
    VA.restoreFields(lesson);
  }

  function identityFields() {
    var id = loadIdentity();
    return '<div class="vasave-fields">' +
      '<label>First name<input id="vasave-first" type="text" autocomplete="off" placeholder="Ada" value="' + esc(id.firstName) + '"></label>' +
      '<label>Last initial<input id="vasave-init" type="text" autocomplete="off" maxlength="1" placeholder="L" value="' + esc(id.lastInitial) + '"></label>' +
      '<label>Team<input id="vasave-team" type="text" autocomplete="off" placeholder="Team 3" value="' + esc(id.team) + '"></label>' +
      '</div>';
  }

  function wireIdentity() {
    var initEl = document.getElementById('vasave-init');
    // Keep it to a single letter even if they type "L." or a whole surname.
    if (initEl) initEl.addEventListener('input', function () {
      this.value = this.value.replace(/[^A-Za-z]/g, '').charAt(0).toUpperCase();
    });

    // Remember as they type. The strip is at the top of the page and the Save
    // button is at the bottom — a student who fills in their name and then
    // reloads shouldn't lose it.
    ['vasave-first', 'vasave-init', 'vasave-team'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.addEventListener('change', rememberIdentity);
    });
  }

  function rememberIdentity() {
    saveIdentity({
      firstName:   val('vasave-first'),
      lastInitial: val('vasave-init'),
      team:        val('vasave-team')
    });
  }

  function val(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/"/g, '&quot;')
      .replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function status(state, msg) {
    var el = document.getElementById('vasave-status');
    if (!el) return;
    el.className = 'vasave-status vasave-' + state;
    el.textContent = msg;
  }

  function submit(opts, btn) {
    var firstName   = val('vasave-first');
    var lastInitial = val('vasave-init');
    var team        = val('vasave-team');

    if (!firstName) {
      var el = document.getElementById('vasave-first');
      status('err', 'Add your first name at the top of the page so your facilitator knows whose work this is.');
      // The name strip is usually well above the button — scroll to it,
      // otherwise the error reads as "nothing happened".
      if (el) {
        if (el.scrollIntoView) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.focus();
      }
      return;
    }

    saveIdentity({ firstName: firstName, lastInitial: lastInitial, team: team });

    var site = currentSite();
    var payload = {
      lesson: opts.lesson,
      site: site,
      firstName: firstName,
      lastInitial: lastInitial,
      team: team,
      ts: new Date().toISOString(),
      fields: opts.collect() || {}
    };

    // Local copy first — this must survive whatever the network does.
    VA.saveLocal(opts.lesson, payload);

    var url = endpointFor(site);
    if (!url) {
      status('warn', site
        ? 'Saved on this device. No class spreadsheet is set up for your site yet — show your facilitator.'
        : 'Saved on this device. Pick your site in the header to send this to your class sheet.');
      return;
    }

    btn.disabled = true;
    status('busy', 'Saving…');

    post(url, payload).then(function (result) {
      btn.disabled = false;
      if (result && result.ok === false) {
        status('err', 'Saved on this device, but the class sheet said: ' + (result.error || 'error') + '. Tell your facilitator.');
        return;
      }
      status('ok', (result && result.replaced)
        ? 'Updated — your earlier answers were replaced.'
        : 'Sent to your class sheet.');
    }).catch(function () {
      btn.disabled = false;
      status('err', 'Saved on this device, but couldn’t reach the class sheet. Try again, or tell your facilitator.');
    });
  }

  window.VA = VA;

  // Fire auto-mode if this script tag carries a data-lesson.
  var autoLesson = SELF && SELF.getAttribute && SELF.getAttribute('data-lesson');
  if (autoLesson) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { autoInit(autoLesson); });
    } else {
      autoInit(autoLesson);
    }
  }

  // ── styles, injected once so lesson pages need no extra CSS ──
  var css =
    '.vasave{border:1px solid rgba(128,128,128,.35);border-radius:12px;padding:16px 18px;margin:22px 0;}' +
    // The top-of-page name strip: quieter than the save card, and no bottom
    // margin fight with whatever heading follows it.
    '.vasave-who{border-style:dashed;margin:0 0 20px;}' +
    '.vasave-t{font-weight:800;font-size:16px;margin-bottom:3px;}' +
    '.vasave-sub{font-size:13px;opacity:.72;margin-bottom:12px;line-height:1.5;}' +
    '.vasave-fields{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:12px;}' +
    '.vasave-fields label{display:flex;flex-direction:column;gap:4px;font-size:12px;font-weight:700;' +
      'text-transform:uppercase;letter-spacing:.04em;opacity:.8;flex:1 1 140px;}' +
    '.vasave-fields input{font:inherit;font-size:15px;font-weight:400;text-transform:none;letter-spacing:0;' +
      'padding:8px 10px;border:1px solid rgba(128,128,128,.45);border-radius:8px;background:transparent;color:inherit;width:100%;}' +
    '.vasave-fields label:nth-child(2){flex:0 0 92px;}' +
    '.vasave-btn{font:inherit;font-weight:800;font-size:15px;padding:10px 20px;border:none;border-radius:8px;' +
      'background:#00b4c9;color:#04232a;cursor:pointer;}' +
    '.vasave-btn:disabled{opacity:.55;cursor:default;}' +
    '.vasave-status{font-size:13.5px;line-height:1.55;margin-top:10px;min-height:1em;}' +
    '.vasave-ok{color:#1a9e5c;font-weight:700;}' +
    '.vasave-err{color:#d1544f;font-weight:700;}' +
    '.vasave-warn{color:#c07a1e;font-weight:700;}' +
    '.vasave-busy{opacity:.75;}' +
    '@media print{.vasave{display:none;}}';
  var tag = document.createElement('style');
  tag.textContent = css;
  document.head.appendChild(tag);
})();
