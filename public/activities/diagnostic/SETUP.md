# Setting up Google Sheets data collection

Follow these steps once per pilot site. Takes about 10 minutes.

---

## Step 1 — Create your Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new sheet
2. Name it **Velocity Arena Diagnostic**
3. In row 1, add these column headers:

```
Timestamp | First Name | Last Name | Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10
```

4. Copy the Sheet ID from the URL — it's the long string between `/d/` and `/edit`:
   `https://docs.google.com/spreadsheets/d/THIS_IS_YOUR_SHEET_ID/edit`

---

## Step 2 — Create a Google Service Account

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project (or use an existing one) — name it anything
3. In the search bar, search for **Google Sheets API** and enable it
4. Go to **IAM & Admin → Service Accounts**
5. Click **Create Service Account**
   - Name: `velocity-arena`
   - Click **Create and Continue** then **Done**
6. Click on the service account you just created
7. Go to the **Keys** tab → **Add Key → Create new key → JSON**
8. Download the JSON file — keep it safe, you only get it once

The JSON file looks like this:
```json
{
  "type": "service_account",
  "project_id": "...",
  "client_email": "velocity-arena@your-project.iam.gserviceaccount.com",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  ...
}
```

You need two values from this file:
- `client_email` → this is your `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `private_key` → this is your `GOOGLE_PRIVATE_KEY`

---

## Step 3 — Share your Sheet with the service account

1. Open your Google Sheet
2. Click **Share**
3. Paste the `client_email` value from the JSON file
4. Set permission to **Editor**
5. Click **Send**

---

## Step 4 — Add environment variables to Vercel

1. Go to your Vercel project dashboard
2. Click **Settings → Environment Variables**
3. Add these three variables:

| Name | Value |
|------|-------|
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | The `client_email` from your JSON file |
| `GOOGLE_PRIVATE_KEY` | The full `private_key` from your JSON file (include the `-----BEGIN/END-----` lines) |
| `GOOGLE_SHEET_ID` | Your Sheet ID from Step 1 |

4. Check all three boxes: Production, Preview, Development
5. Click **Save**
6. Go to **Deployments** → click the three dots on the latest → **Redeploy**

---

## What gets collected

Each time a student clicks "Hand in", a new row is added to your sheet:

| Column | Content |
|--------|---------|
| Timestamp | Date and time of submission (Eastern time) |
| First Name | Student's first name |
| Last Name | Student's last name |
| Q1–Q10 | Student's answer, or "Not yet" if they clicked that button |

---

## Troubleshooting

**Rows are not appearing in the sheet**
- Check that the service account email has Editor access to the sheet
- Check that all three environment variables are set and the project was redeployed
- Open browser DevTools → Network tab → click "Hand in" → look for the `/api/submit-diagnostic` request and check the response

**Private key errors**
- The private key must include the full `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` lines
- In Vercel, paste it exactly as it appears in the JSON file — Vercel handles the newline escaping automatically
