# WowSyler Yazılım ve Teknoloji

A bilingual (Turkish / English) corporate website built with **Next.js 16**, **Tailwind CSS v4**, and **TypeScript**.

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, services, tech stack, projects preview |
| `/services` | Detailed services listing |
| `/projects` | Showcase of TextManipulator, AirdropBotPro, Streea |
| `/about` | Company story, mission & values |
| `/contact` | Contact form with success feedback |

## Tech Stack

- **Next.js 16** with App Router and Docker-ready `output: 'standalone'`
- **Tailwind CSS v4** — utility-first, no config file needed
- **TypeScript** (strict mode)
- URL-driven EN/TR i18n with `LanguageContext`
- System font stack (no external font loading)

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## i18n

Language is driven by the locale segment in the URL (`/en/`, `/tr/`).  
Translation files live in `src/translations/en.json` and `src/translations/tr.json`.

## Docker

Build and run the production image locally:

```bash
docker build -t wowsyler .
docker run --rm -p 3000:3000 wowsyler
```

For Coolify, deploy with the repository `Dockerfile` and expose port `3000`.

## Contact Form

The contact form now sends real email through **Resend** using `src/app/api/contact/route.ts`.

Set these environment variables in Coolify (or your local `.env.local`):

```bash
RESEND_API_KEY=your_fresh_resend_api_key
CONTACT_TO_EMAIL=you@example.com
CONTACT_FROM_EMAIL=noreply@send.wowsyler.com
NEXT_PUBLIC_CONTACT_EMAIL=
```

Notes:

- `CONTACT_TO_EMAIL` is the private inbox that receives form submissions. It can be any mailbox you control; it does **not** need to be `info@wowsyler.com`.
- `CONTACT_FROM_EMAIL` should be a verified Resend sender such as `noreply@send.wowsyler.com`. Do not rely on `onboarding@resend.dev` in production.
- `NEXT_PUBLIC_CONTACT_EMAIL` is optional. If you set it, the address is shown publicly in the footer, contact page, and JSON-LD metadata. If you leave it empty, the site keeps the contact form but does not expose a public email address.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
