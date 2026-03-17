import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0A2342 0%, #0D2D5A 55%, #1E3A6E 100%)',
          color: '#F8FAFC',
          padding: '56px 64px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
          }}
        >
          <div
            style={{
              width: 108,
              height: 108,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 26,
              background: 'rgba(255,255,255,0.08)',
              border: '2px solid rgba(147,197,253,0.28)',
            }}
          >
            <svg width="72" height="72" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="10" fill="#0A2342" />
              <rect x="1" y="1" width="38" height="38" rx="9" stroke="#1E6FD9" strokeWidth="1.5" />
              <path
                d="M7 12L12.5 28L17 17L20 24L22.5 17L27 28L33 12"
                stroke="#22D3EE"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="20" cy="24" r="2" fill="#60A5FA" />
            </svg>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontSize: 52,
                fontWeight: 700,
                letterSpacing: '-0.03em',
              }}
            >
              <span>Wow</span>
              <span style={{ color: '#93C5FD' }}>Syler</span>
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 24,
                color: '#CBD5E0',
              }}
            >
              Software &amp; Technology
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            maxWidth: 920,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              alignSelf: 'flex-start',
              padding: '12px 20px',
              borderRadius: 999,
              background: 'rgba(34,211,238,0.14)',
              color: '#67E8F9',
              border: '1px solid rgba(34,211,238,0.28)',
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            Corporate Software Engineering
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 60,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-0.04em',
            }}
          >
            Web, mobile, backend and AI delivery for serious product teams.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 24,
            color: '#94A3B8',
          }}
        >
          <div style={{ display: 'flex' }}>wowsyler.com</div>
          <div style={{ display: 'flex', color: '#67E8F9' }}>Next.js • React • .NET • Go • AI</div>
        </div>
      </div>
    ),
    size,
  );
}
