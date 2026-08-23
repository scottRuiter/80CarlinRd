# 80 Carlin Rd

Mobile-first rental site for **80 Carlin Rd, Conklin, NY 13748**.

Live URL: https://scottruiter.github.io/80CarlinRd/

Asking rent is **$2,500/month**. Do not publish a Zillow Rent Zestimate.

## Update listing details

Confirmed copy and facts live in `lib/property.ts`. Empty fields in `pending` stay off the public page.

```ts
applicationUrl: "https://...",
showingHref: "https://calendly.com/...",
infoHref: "https://forms.gle/...",
zillowUrl: "https://www.zillow.com/homedetails/...",
pending.availableDate: "September 1, 2026",
```

Leave `contactEmail` and `contactPhone` empty unless you want a dedicated rental inbox in the built JavaScript.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000/80CarlinRd/

## Deploy

Pushes to `main` run `.github/workflows/deploy.yml`.
