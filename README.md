# SGN Transport — Stable Build (Next.js + Tailwind)

- ESLint pinned to **8.57.0** for Next **14.2.x** compatibility
- Broker, Driver, and Quote forms wired to Resend (add `RESEND_API_KEY` in Vercel)
- MOE Compliance section, hero slideshow, fleet grid
- Icons included: `app/icon.png`, `public/favicon.ico`

## Deploy
1) Upload all files to your GitHub repo root (no extra folder).  
2) In Vercel: Import repo → Framework: Next.js → Root: `./` → Build: `next build`.  
3) Add domain under Project Settings → Domains.  
4) Add `RESEND_API_KEY` under Settings → Environment Variables (optional for emails).
