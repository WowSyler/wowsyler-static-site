FROM node:24-alpine AS base

WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

FROM base AS deps

COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder

# GlitchTip (Sentry uyumlu) hata takibi için DSN; NEXT_PUBLIC_* değişkenleri
# Next.js tarafından build sırasında tarayıcı paketine gömülür, bu yüzden
# çalışma zamanında değil, build-time ARG olarak verilmelidir (Coolify'da
# "Build Variable" / "Available at Buildtime" olarak işaretle). Boş bırakılırsa
# Sentry devre dışı kalır.
ARG NEXT_PUBLIC_SENTRY_DSN
ENV NEXT_PUBLIC_SENTRY_DSN=$NEXT_PUBLIC_SENTRY_DSN

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:24-alpine AS runner

# Taban imajdaki Alpine paketlerini (openssl, zlib, musl, busybox vb.) en
# güncel güvenlik yamalarına çıkar; çalışma zamanında kullanılmayan paket
# yöneticilerini (npm, npx, corepack, yarn) kaldırarak saldırı yüzeyini ve
# tarama bulgularını azalt. busybox (wget) HEALTHCHECK için korunur.
RUN apk upgrade --no-cache \
    && rm -rf /usr/local/lib/node_modules/npm /usr/local/lib/node_modules/corepack \
        /usr/local/bin/npm /usr/local/bin/npx /usr/local/bin/corepack \
        /usr/local/bin/yarn /usr/local/bin/yarnpkg /opt/yarn-v* \
        /root/.npm /tmp/*

WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:${PORT}/en/ || exit 1

CMD ["node", "server.js"]
