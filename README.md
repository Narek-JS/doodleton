# DoodleTON Landing

DoodleTON is a bilingual landing page for a Telegram Mini App game in the TON ecosystem. The site is focused on sending visitors to the official Telegram community, explaining the Founder Campaign, and supporting SEO for TON, Telegram game, and play-to-earn discovery.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- next-intl
- lucide-react

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Project Structure

- `src/app/[locale]/page.tsx` - main landing page and page-level SEO metadata
- `src/app/[locale]/layout.tsx` - root layout, fonts, global metadata defaults
- `messages/en.json` - English landing content and SEO copy
- `messages/ru.json` - Russian landing content and SEO copy
- `src/components/Header` - sticky navigation and CTA
- `src/components/Footer` - footer links, Telegram/X/email links, disclaimer
- `src/app/robots.ts` - generated `robots.txt`
- `src/app/sitemap.ts` - generated `sitemap.xml`
- `src/app/manifest.ts` - generated web app manifest
- `src/app/opengraph-image.tsx` - generated social preview image

## Locales

The site supports:

- English: `/en`
- Russian: `/ru`

Locale routing is configured in `src/i18n/routing.ts`.

## SEO Notes

The landing page includes:

- Localized titles, descriptions, and keywords
- Canonical URLs for `https://doodlton.com`
- Alternate language links
- OpenGraph and Twitter metadata
- Generated OpenGraph image
- JSON-LD structured data for `Organization`, `WebSite`, `VideoGame`, and `FAQPage`
- Sitemap and robots routes

Primary SEO themes include:

- DoodleTON
- Telegram Mini App game
- TON blockchain game
- TON rewards
- DoodleTON Coins
- Founder Campaign
- play-to-earn Telegram
- tap-to-earn TON
- referral rewards
- daily rewards

## Official Links

- Website: `https://doodlton.com`
- Telegram: `https://t.me/doodleTONgame`
- X: `https://x.com/DoodleTON_`
- Email: `hello@doodlton.com`
