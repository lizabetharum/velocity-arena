# Setting up your Velocity Arena data spreadsheet
### For Michigan, New York, Rhode Island, and Tennessee pilot sites

This guide is for someone who does not write code. You need a Google account and about 15 minutes. These steps only need to be done once.

At the end, every time a student at your site clicks "Hand in" on the diagnostic, their name and answers will appear in your spreadsheet automatically.

---

## What you are setting up

You are connecting a Google Sheet (where the data lands) to the Velocity Arena website (which sends the data). The connection uses a **service account** — a special Google account the website uses to write to your sheet. You create it, then give it permission to edit your sheet.

---

## Part 1 — Create your Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and sign in.

2. Click the large **+** button to create a blank spreadsheet.

3. Click **Untitled spreadsheet** at the top left. Rename it:
   `Velocity Arena Diagnostic — [Your State]`

4. Click cell **A1** and type these headers across row 1, one per cell:

   | A | B | C | D | E | F | G | H | I | J | K | L | M | N |
   |---|---|---|---|---|---|---|---|---|---|---|---|---|---|
   | Timestamp | State | First Name | Last Name | Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 |

5. Copy your **Sheet ID** from the browser URL — it is the long string between `/d/` and `/edit`:
   `https://docs.google.com/spreadsheets/d/`**`THIS_IS_YOUR_SHEET_ID`**`/edit`
   Save it somewhere — you will need it in Part 4.

---

## Part 2 — Create a Google service account

1. Go to [console.cloud.google.com](https://console.cloud.google.com) and sign in with the same Google account.

2. At the top of the page, click the project name next to "Google Cloud." A window opens — click **New Project** in the top right. Name it `velocity-arena` and click **Create**.

3. When the project is ready, click the notification bell and select your new project.

4. In the search bar at the top, type `Google Sheets API` and click the result. Click **Enable**.

5. In the search bar, type `Service Accounts` and click the result under IAM & Admin.

6. Click **+ Create Service Account**.
   - Name: `velocity-arena`
   - Click **Create and Continue**, then **Continue**, then **Done**

7. Click on the service account email in the list to open it.

8. Click the **Keys** tab → **Add Key** → **Create new key** → **JSON** → **Create**.
   A JSON file downloads to your computer. Keep it safe — you only get it once.

---

## Part 3 — Share your sheet with the service account

1. Open the JSON file in a text editor (Notepad on Windows, TextEdit on Mac).

2. Find the line that starts with `"client_email"`. Copy the email address between the quotes — it looks like:
   `velocity-arena@velocity-arena.iam.gserviceaccount.com`

3. Go back to your Google Sheet and click **Share** (top right).

4. Paste the service account email into the "Add people" box.

5. Set the permission to **Editor**.

6. Uncheck **Notify people** — it is not a real person.

7. Click **Share**.

---

## Part 4 — Send your three values to Lizabeth

From the JSON file, find and copy these three things:

**1. Service account email**
The value next to `"client_email"`:
`velocity-arena@velocity-arena.iam.gserviceaccount.com`


Send the Service account email to Lizabeth. She adds it to the website so your state's data goes to your sheet.

---

## Part 5 — What Lizabeth does (coordinator only)

Go to [vercel.com](https://vercel.com) → **velocity-arena** project → **Settings** → **Environment Variables**.

Add one Sheet ID variable per state:

| Variable name | Value |
|--------------|-------|
| `GOOGLE_SHEET_ID_MI` | Michigan's Sheet ID |
| `GOOGLE_SHEET_ID_NY` | New York's Sheet ID |
| `GOOGLE_SHEET_ID_RI` | Rhode Island's Sheet ID |
| `GOOGLE_SHEET_ID_TN` | Tennessee's Sheet ID |

Add the shared credentials once (use values from any one of the four sites — one service account works for all sheets as long as each sheet is shared with it):

| Variable name | Value |
|--------------|-------|
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | The `client_email` from the JSON file |
| `GOOGLE_PRIVATE_KEY` | The full `private_key` including the BEGIN/END lines |

Check all three boxes (Production, Preview, Development) for each variable.

Then redeploy: **Deployments** → three dots on the latest → **Redeploy**.

---

## Verifying it works

Test each state after redeploying:

1. Open the diagnostic: `velocity-arena.vercel.app/activities/diagnostic/`
2. Enter a test name, select the state, answer one question, click **Hand in**
3. Check that state's Google Sheet — a row should appear within seconds

---

## Troubleshooting

Go to Vercel → your project → **Logs** and look for errors from `/api/submit-diagnostic`:

| Error message | Fix |
|--------------|-----|
| `No sheet configured for: MI` | `GOOGLE_SHEET_ID_MI` is missing — add it and redeploy |
| `Sheets API error: 403` | The service account was not given Editor access — repeat Part 3 for that sheet |
| `Failed to get access token` | `GOOGLE_PRIVATE_KEY` is missing or was pasted incorrectly |
