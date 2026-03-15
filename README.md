# WowSyler Teknoloji — Static Website

A bilingual (Turkish / English) corporate static website built with **Next.js 16**, **Tailwind CSS v4**, and **TypeScript**.

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, services, tech stack, projects preview |
| `/services` | Detailed services listing |
| `/projects` | Showcase of TextManipulator, AirdropBotPro, Streea |
| `/about` | Company story, mission & values |
| `/contact` | Contact form with success feedback |

## Tech Stack

- **Next.js 16** with App Router and `output: 'export'` (fully static)
- **Tailwind CSS v4** — utility-first, no config file needed
- **TypeScript** (strict mode)
- Custom `LanguageContext` for EN/TR i18n (locale persisted in `localStorage`)
- System font stack (no external font loading)

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs static files to /out
```

## i18n

Language is toggled via the header button and persisted to `localStorage`.  
Translation files live in `src/translations/en.ts` and `src/translations/tr.ts`.

## Contact Form

The contact form renders a success state on submit. To enable real email delivery, integrate with a service such as [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com) by wiring up the `handleSubmit` handler in `src/app/contact/page.tsx`.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
