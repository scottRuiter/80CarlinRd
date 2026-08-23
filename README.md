# 80 Carlin Rd

Mobile-first rental site for **80 Carlin Rd, Conklin, NY 13748**.

Live URL: https://scottruiter.github.io/80CarlinRd/

## Update listing details

Edit `lib/property.ts`, then push to `main`.

```ts
rent: "$2,500 / month",
availableDate: "September 1, 2026",
zillowUrl: "https://www.zillow.com/...",
applicationUrl: "https://...",
showingHref: "https://calendly.com/...", // or a Google Form
```

Leave `contactEmail` empty unless you want a dedicated rental inbox in the built JavaScript. A personal phone number should not go in this file.

## Local development

```bash
npm install
npm run dev
```

The GitHub Pages path is `/80CarlinRd`, so local `/` and the live site both resolve through Next.js `basePath`.

## Deploy

Pushes to `main` run `.github/workflows/deploy.yml`:

1. `npm ci`
2. `npm run build` (static export to `/out`)
3. GitHub Pages publish
