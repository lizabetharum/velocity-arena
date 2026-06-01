#!/usr/bin/env python3
"""
Deploy velocity-arena-gold to Vercel.
Run: python3 deploy.py YOUR_VERCEL_TOKEN YOUR_TEAM_ID

Get a token at: https://vercel.com/account/settings/tokens
Team ID: found in your Vercel dashboard URL (e.g. team_xxxx) or use your username.
"""
import hashlib, json, os, sys
import urllib.request, urllib.error

if len(sys.argv) < 3:
    print("Usage: python3 deploy.py <VERCEL_TOKEN> <TEAM_ID>")
    print("Get token: https://vercel.com/account/settings/tokens")
    sys.exit(1)

TOKEN        = sys.argv[1]
TEAM_ID      = sys.argv[2]
PROJECT_NAME = "velocity-arena-gold"
DEPLOY_DIR   = os.path.dirname(os.path.abspath(__file__))
HEADERS      = {"Authorization": f"Bearer {TOKEN}", "Content-Type": "application/octet-stream"}

def sha1(path):
    h = hashlib.sha1()
    with open(path, 'rb') as f: h.update(f.read())
    return h.hexdigest()

def upload(path, filename):
    with open(path, 'rb') as f: content = f.read()
    s = sha1(path)
    req = urllib.request.Request("https://api.vercel.com/v2/files", data=content,
        headers={**HEADERS, "x-vercel-digest": s})
    try:
        urllib.request.urlopen(req)
        print(f"  ✓ uploaded {filename}")
    except urllib.error.HTTPError as e:
        if e.code != 409:
            print(f"  ✗ {filename}: HTTP {e.code}")
            return None, None
        print(f"  ✓ {filename} (already uploaded)")
    return s, os.path.getsize(path)

def create_deploy(files):
    url = f"https://api.vercel.com/v13/deployments?teamId={TEAM_ID}"
    payload = {
        "name": PROJECT_NAME,
        "files": files,
        "projectSettings": {"framework": None, "buildCommand": None, "outputDirectory": None},
        "target": "production"
    }
    req = urllib.request.Request(url, data=json.dumps(payload).encode(),
        headers={"Authorization": f"Bearer {TOKEN}", "Content-Type": "application/json"})
    with urllib.request.urlopen(req) as r:
        return json.loads(r.read())

print(f"Deploying {PROJECT_NAME} to Vercel...")
deploy_files = ["index.html", "vercel.json"]
refs = []
for f in deploy_files:
    s, sz = upload(os.path.join(DEPLOY_DIR, f), f)
    if s:
        refs.append({"file": f, "sha": s, "size": sz})

if not refs:
    print("No files uploaded. Exiting.")
    sys.exit(1)

print("Creating deployment...")
result = create_deploy(refs)
alias = result.get('alias', [])
if alias:
    print(f"\n🌐 LIVE: https://{alias[0]}")
else:
    print(f"\n🌐 LIVE: https://{result['url']}")
print(f"   (also at: https://velocity-arena-gold.vercel.app/)")
