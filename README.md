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
| `/fisly` | Fisly mobile app page: features, plans, support and FAQ (App Store support / marketing URL) |
| `/fisly/privacy` | Fisly privacy policy (App Store privacy policy URL) |
| `/fisly/terms` | Fisly subscription terms |
| `/novadermiq` | NovaDermIQ mobile app page: features, plans, support and FAQ |
| `/novadermiq/privacy` | NovaDermIQ privacy policy |
| `/novadermiq/terms` | NovaDermIQ terms of use and subscription |

Fisly legal texts in `src/content/fisly/legal.json` are generated from `docs/legal/*.md` in the app
repository (`gider-gelir-takibi-app`); edit them there and regenerate, do not edit the JSON by hand.
NovaDermIQ legal texts in `src/content/novadermiq/legal.json` are generated the same way from `docs/legal/*.md`
in `face-analizy-app`.

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

The contact form (`src/app/api/contact/route.ts`) sends email through the central **mail gateway**
(`POST {MAIL_GATEWAY_URL}/send`, Bearer `MAIL_GATEWAY_TOKEN`). Resend is kept only as a rollback path and is
used **only when `MAIL_GATEWAY_URL` is empty**.

Set these as **runtime** environment variables in Coolify (or your local `.env.local`) — not build variables:

```bash
MAIL_GATEWAY_URL=https://mail-gateway.wowsyler.workers.dev
MAIL_GATEWAY_TOKEN=            # secret, per-app gateway token (never logged)
CONTACT_TO_EMAIL=info@wowsyler.com
CONTACT_FROM_EMAIL=noreply@wowsyler.com
NEXT_PUBLIC_CONTACT_EMAIL=
# Rollback only (used when MAIL_GATEWAY_URL is empty):
RESEND_API_KEY=
```

Notes:

- `CONTACT_FROM_EMAIL` **must be an address on `wowsyler.com`** — set it to `noreply@wowsyler.com`. The old Resend
  sender on a subdomain (e.g. `wowsyler@mail.wowsyler.com`, `noreply@send.wowsyler.com`) must not be used with the
  gateway: it may be queued (HTTP 202) and then fail to deliver, so the form reports success while the mail is lost.
  The sender name shown to the recipient is `WowSyler`.
- Replies go to the visitor: the form's (validated) email address is sent as `replyTo`.
- Gateway answers: `202`/`200` → success; `400`/`401`/`413` → permanent (check token / from address), the visitor
  sees a generic error (HTTP 502); `429`/`5xx`/timeout (15 s)/network → transient, the visitor sees a generic
  "try again later" (HTTP 503). Only the status code is logged — never the token or the gateway's response body.
- A successful submission returns `{ ok: true, id }`; `GET {MAIL_GATEWAY_URL}/status/<id>` with the same Bearer token
  shows `queued | retrying | sent | failed` (202 only means queued, not delivered).
- `CONTACT_TO_EMAIL` is the private inbox that receives form submissions.
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
