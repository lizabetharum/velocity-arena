# Anonymize Export — Operating Guide

How to run the researcher data export for the Velocity Arena pilots.

This is the reference for the Apps Script bound to the **Export workbook**
(`EXPORT_ID` in the script). The script reads every site's raw source
sheets, strips names, and writes anonymized, token-keyed tabs the
researcher can use.

---

## Where things live

| Piece | What it is | Who may see it |
|---|---|---|
| **Source workbooks** (per site) | Raw student submissions — diagnostics, recall checks, reflections, dashboards. Contain **names**. | Program staff only |
| **Roster** (`ROSTER_ID`) | The name → token lookup. One row per student: token, site, first name, last initial, team, created-at. | **Staff only — never share with the researcher.** This is the only file that can re-identify a student. |
| **Export workbook** (`EXPORT_ID`) | The anonymized output. Tokens only, no names. This is what the researcher gets. | Researcher |

The menu (**Anonymize**) lives in the Export workbook: **Extensions → Apps Script** to edit the code.

---

## The one thing to understand

**"Run Full Export" is safe to run as many times as you want.** Every run
**wipes and rebuilds** every export tab from the *current* contents of the
source sheets. It does not append, so it can't create duplicates, and
running it early (before all data is in) costs nothing — just run it again
later.

Student identity stays stable across runs because tokens are stored in the
**Roster** and reused. The same student keeps the same token every run.

---

## The menu, item by item

- **Run Full Export** — rebuilds all anonymized tabs from current source
  data. Your main action. Re-run whenever new data lands.
- **Set up Score columns in sources** — one-time. Adds a human "Score"
  column to each source tab so graders have somewhere to score. Run once
  per site before grading; harmless to re-run (skips tabs already set up).
- **Back up Roster (dated copy)** — duplicates the Roster tab inside the
  roster workbook as `Roster backup YYYY-MM-DD HH.mm`. The roster is the
  only name↔token link — back it up often.
- **Snapshot Export (dated copy)** — copies the **entire** Export workbook
  to a dated file in the same Drive folder. Use it to freeze an interim
  dataset for the researcher **before** the next Full Export overwrites the
  tabs.
- **Audit Roster for duplicate students** — read-only report of any student
  who ended up with more than one token. See "Identity & tokens" below.
- **⚠ Re-issue All Tokens** — **DANGER.** Wipes the roster and re-tokenizes
  everyone from scratch. Only ever use this if starting completely over.
  Never during a live pilot — it breaks every past export.

---

## Recommended routine (pilots spread over ~2 months)

The pilots don't all finish at once (TN → NY1 → NY2 → NY3). So you
incrementally refresh the researcher's data as each site completes:

**Each time a milestone's data is in (e.g. a site finishes its Day 15/16
post-task + post-reflection):**

1. **Back up Roster** — safety.
2. **Snapshot Export** — *only if* the researcher needs the prior dataset
   preserved before you overwrite it. Otherwise skip.
3. **Run Full Export** — refreshes every tab to the complete current
   picture.

Realistically that's ~4–5 Full Exports across the summer, plus a final one
at the very end. The final export contains everything — you don't need to
stitch runs together.

Run **Audit Roster** once now, and again after each new site's first
export, to catch identity problems early (below).

---

## Identity & tokens

A student is identified by:

```
site  +  first name  +  last initial
```

**Team is deliberately NOT part of identity.** Students rename their teams
mid-program ("Yellow minions" one day, "minions" the next); if team were in
the key, each rename would split one student into multiple tokens and break
their pre→post matching. Team is still recorded in the roster and exported
per row — it just isn't used to identify who someone is.

Two consequences to know:

1. **Self-healing.** If a student was already split into two tokens (from
   before team was removed from the key), the next Full Export consolidates
   them onto one existing token automatically. **Audit Roster** shows you
   which students this affects.
2. **Same-name clashes.** Two *different* students at the same site who
   share a first name **and** last initial will now merge into one token.
   Rare, but if it happens, disambiguate in the source (e.g. give one a
   two-letter last initial). Audit Roster flags multi-token identities but
   can't tell a rename-split from a real clash — you eyeball the report.

---

## Onboarding a new site (before its first export)

For a site's data to appear in the export, all of this must be true:

1. The site's IDs are filled into `SOURCES` in the script.
2. Each of that site's **source workbooks is shared with the account that
   runs this export** (otherwise `openById` reads nothing and the site is
   silently absent — no error).
3. Each source's Apps Script web app is **deployed with access = "Anyone"**
   (not "Anyone with a Google account," which blocks not-signed-in
   students), so submissions actually land.
4. Reminder: **editing an Apps Script does not redeploy it.** Deploy →
   Manage deployments → Edit → New version → Deploy, or the old code keeps
   running at the old URL.

---

## Don'ts

- **Don't share the Roster** with the researcher — it re-identifies students.
- **Don't run "⚠ Re-issue All Tokens"** during a pilot.
- **Don't hand-edit the anonymized export tabs** — a Full Export overwrites
  them. Do human scoring in the **source** "Score" columns instead; the
  export copies those over.

---

## Troubleshooting

| Symptom | Likely cause |
|---|---|
| A site shows zero rows after export | Source workbook not shared with the export account, or its Apps Script not deployed / deployed to the wrong audience. |
| A student's pre→post gain is blank in **Reflection Matched** | Only one of pre/post exists yet, **or** identity drift (name spelled differently between Day 1 and Day 15) minted a second token. Run **Audit Roster**. |
| A student appears twice across tabs | Two tokens for one identity — run **Audit Roster**, then a fresh **Run Full Export** to consolidate. |
| Menu items missing | Reload the spreadsheet so `onOpen` re-runs. |
| "Authorization required" on Snapshot/Backup | First use touches Drive — approve the re-authorization once. |

---

## Export tabs produced

Skills Progress · Skills Card State · Stat Allocations · Team Membership ·
Match Log · Simulation Lab · Stat Justifications · Four Views ·
Recall Check Day 5 · Cold Recall Check Day 10 · Interleaved Day 6 ·
Pre-Task Diagnostic · Post-Task Diagnostic · Reflection Pre ·
Reflection Post · Reflection Matched (pre/post + gain scores on the 8
shared Likert items).
