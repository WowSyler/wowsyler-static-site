import * as Sentry from "@sentry/nextjs";

// GlitchTip (Sentry uyumlu) hata takibi.
// Bu site statik/standalone bir Next.js sitesi olduğundan yalnızca
// tarayıcı tarafı (client-side) hata takibi anlamlıdır; sunucu ve
// edge init dosyaları bilinçli olarak eklenmemiştir.
//
// DSN, build zamanında NEXT_PUBLIC_SENTRY_DSN olarak enjekte edilir
// (bkz. Dockerfile ve README). Değer boş bırakılırsa Sentry hiç
// başlatılmaz; böylece DSN tanımlanmamış ortamlarda (ör. yerel
// geliştirme) hata gönderilmez.
const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;

if (dsn) {
  Sentry.init({
    dsn,
    // Ortam etiketi sabittir: bu site için ayrı bir staging ortamı yok.
    environment: "production",
    // Yalnızca hata takibi hedefleniyor; performans izleme (tracing)
    // ve session replay bilinçli olarak kapalı tutuluyor.
    tracesSampleRate: 0,
    // Kullanıcıya ait olabilecek varsayılan kişisel verilerin (IP vb.)
    // otomatik gönderilmesini engelle.
    sendDefaultPii: false,
  });
}
