# SGN Transport — Trucking Website (Next.js + Tailwind)

A clean, professional template optimized for Vercel. Includes:
- Sticky navbar, responsive hero slideshow
- Services, Fleet grid, Drivers section with application form
- Brokers highlights, Quote form, Contact, and Footer
- API routes ready to connect to email (Formspree/Resend)
- Tailwind styles with tasteful dark theme

## Quick Start

```bash
npm i
npm run dev
```

### Deploy on Vercel
- Push to GitHub and import the repo in Vercel.
- Framework: Next.js. Build command: `next build`. Output: `.next` (default).

### Hook forms to email
- Easiest: replace `/api/*` with Formspree endpoint or use Resend with a Vercel serverless function.
- Files: `app/api/quote/route.ts` and `app/api/driver/route.ts`.

### Replace images
Drop real photos to:
```
public/hero/*.jpg
public/fleet/*.jpg
```

### Customize text
Search for phone/email placeholders in:
- `components/Footer.tsx`
- `app/page.tsx`
- `components/Navbar.tsx`


## Email (Resend)
Set an env var in Vercel: `RESEND_API_KEY`. Forms will email sgntransport94@gmail.com.
