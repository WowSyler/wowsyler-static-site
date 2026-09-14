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


## Hata Takibi (GlitchTip / Sentry)

Site, merkezi gözlemlenebilirlik yığınındaki **GlitchTip** (Sentry uyumlu)
servisine yalnızca **tarayıcı tarafı (client-side)** hata takibi ile
bağlanır. Bu site statik/standalone bir Next.js sitesi olduğundan sunucu
tarafı hata takibi, dağıtık izleme (tracing) veya `/metrics` gibi bir
şey **eklenmemiştir** — bkz. "Gözlemlenebilirlik Notları" bölümü.

Kullanılan paket: [`@sentry/nextjs`](https://www.npmjs.com/package/@sentry/nextjs).
Başlatma kodu `src/instrumentation-client.ts` içindedir; Next.js bu dosyayı
otomatik olarak tarayıcı paketine dahil eder, ayrıca bir import gerekmez.

Gerekli ortam değişkeni:

```bash
NEXT_PUBLIC_SENTRY_DSN=https://xxx@glitchtip.wowsyler.com/PROJECT_ID
```

Önemli noktalar:

- **Build-time değişkendir.** `NEXT_PUBLIC_` önekli değişkenler Next.js
  tarafından `next build` sırasında tarayıcı paketine gömülür; container
  çalışırken (runtime) verilmesinin bir anlamı yoktur. Coolify'da bu
  değişkeni **Build Variable / "Available at Buildtime"** olarak
  işaretle, böylece `docker build` sırasında `--build-arg
  NEXT_PUBLIC_SENTRY_DSN=...` olarak geçilir (bkz. `Dockerfile`'daki
  `ARG NEXT_PUBLIC_SENTRY_DSN`).
- **Boş değer = devre dışı.** DSN boş bırakılırsa (ör. yerel geliştirme
  ortamında) `Sentry.init` hiç çağrılmaz, hiçbir hata gönderilmez.
- **Ortam etiketi sabittir:** `environment: "production"`. Bu site için
  ayrı bir staging/preview ortamı yoktur.
- **Source map yüklemesi yoktur**, dolayısıyla `SENTRY_AUTH_TOKEN` veya
  `SENTRY_ORG`/`SENTRY_PROJECT` gibi bir Sentry org token'ı **gerekmez**.
  `next.config.ts` bilerek `withSentryConfig` ile sarmalanmamıştır.
- Performans izleme (tracing) ve session replay bilinçli olarak kapalı
  tutulmuştur (`tracesSampleRate: 0`); yalnızca hata (exception) takibi
  hedeflenmiştir.

DSN'i almak için ServerCore reposundaki `entegrasyon.md` dosyasındaki
adımları izleyerek GlitchTip'te bu proje için (platform: JavaScript) yeni
bir proje oluştur.

### Gözlemlenebilirlik Notları

Bu uygulama Dockerfile'da **Node.js** (`node server.js`, Next.js
`output: 'standalone'`) ile servis edilir; nginx kullanılmaz. Yine de site
esasen statik sayfalardan oluşur ve tek dinamik parça e-posta gönderen
`src/app/api/contact/route.ts` route'udur. Bu entegrasyon kapsamında
kasıtlı olarak eklenmeyenler:

- **OpenTelemetry / tracing** eklenmedi — sunucu tarafında ölçülecek
  anlamlı bir istek hacmi/iş akışı yok.
- **Prometheus `/metrics` endpoint'i** eklenmedi — statik sayfa sunumu
  için metrik toplamanın katma değeri yok; ileride API route'u
  büyürse ayrıca değerlendirilebilir.
- **Sunucu/edge Sentry init'i** (`sentry.server.config.ts` /
  `sentry.edge.config.ts`) eklenmedi — kapsam yalnızca tarayıcı
  hatalarıdır.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
