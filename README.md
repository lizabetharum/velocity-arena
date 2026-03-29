# Velocity Arena

Summer math camp program site for NYC FIRST. Rising 9th graders build and program BBC micro:bit v2 robots to compete in algebra-powered challenges.

**Live site:** https://velocity-arena.vercel.app

---

## Site structure

```
velocity-arena/
├── public/
│   ├── index.html                    — Today (home page)
│   ├── schedule.html                 — 4-week schedule
│   ├── tools.html                    — Student tools
│   ├── teachers.html                 — Teacher resources
│   ├── about.html                    — About the program
│   ├── style.css                     — Shared styles
│   ├── site.js                       — Shared header/nav/footer
│   └── activities/
│       └── robot-names/
│           └── index.html            — Robot team name generator
├── api/
│   └── validate.js                   — Word validation edge function
├── vercel.json
└── README.md
```

---

## Deploying

### New pilot site — use this template

Click the green **Use this template** button at the top of this page. Create a new repository, deploy to Vercel, add your `ANTHROPIC_API_KEY` environment variable, and redeploy.

### Deploying from scratch

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. Framework preset: **Other** — leave all build settings blank
4. Deploy
5. In Vercel → Settings → Environment Variables, add `ANTHROPIC_API_KEY`
6. Redeploy

---

## Adding a new activity

1. Create a folder under `public/activities/your-activity-name/`
2. Add an `index.html` for the activity
3. Link to it from `tools.html` and from `index.html` (Today page)
4. If the activity needs server-side validation, add an endpoint under `api/`

---

## Updating the Today page

Edit `public/index.html`. The fields to update each day:

- `today-day` div — week and day number
- `today-title` div — activity name
- `today-desc` div — one-sentence description
- The `href` on the "Open activity" button
- The week strip — add `done` class to completed days, `current` to today
- The timeline — mark the current block with class `active`

---

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `ANTHROPIC_API_KEY` | Yes | Used by `/api/validate` to check student word submissions |

---

## Built by

Lizabeth Arum — NYC FIRST / Construct3D
