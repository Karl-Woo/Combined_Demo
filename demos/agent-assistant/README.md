# Clover Insight Center — Tablet Demo

Static HTML/CSS/JS prototype of an iPad merchant dashboard with five
interactive insight views (Art Walk, Customer Review, Promotions, Rewards,
Capital). Includes choreographed intro cascades, a FLIP card-shuffle on task
completion, and a Lottie loader on the review-send flow.

No build step — just open `index.html` or serve the folder.

## Local preview

```bash
npx http-server . -p 5183 -c-1 --silent
# → http://localhost:5183
```

## Deploy to Vercel

Static project; Vercel auto-detects.

```bash
# one-time, opens browser for auth
vercel login

# deploy (interactive prompts: project name, scope, etc.)
vercel deploy --prod
```
