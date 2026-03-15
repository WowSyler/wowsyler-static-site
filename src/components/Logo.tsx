type LogoVariant = 'default' | 'light';

type LogoProps = {
  size?: number;
  variant?: LogoVariant;
};

const palettes: Record<
  LogoVariant,
  {
    boxFill: string;
    border: string;
    line: string;
    dot: string;
    text: string;
    accentText: string;
  }
> = {
  default: {
    boxFill: '#0A2342',
    border: '#1E6FD9',
    line: '#00B4D8',
    dot: '#1E6FD9',
    text: '#0A2342',
    accentText: '#1E6FD9',
  },
  light: {
    boxFill: 'rgba(255,255,255,0.08)',
    border: 'rgba(255,255,255,0.28)',
    line: '#22D3EE',
    dot: '#60A5FA',
    text: '#F8FAFC',
    accentText: '#93C5FD',
  },
};

export default function Logo({ size = 40, variant = 'default' }: LogoProps) {
  const palette = palettes[variant];

  return (
    <div className="flex items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="10" fill={palette.boxFill} />
        <rect x="1" y="1" width="38" height="38" rx="9" stroke={palette.border} strokeWidth="1.5" />
        <path
          d="M7 12L12.5 28L17 17L20 24L22.5 17L27 28L33 12"
          stroke={palette.line}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="24" r="2" fill={palette.dot} />
      </svg>
      <span
        style={{ color: palette.text, fontWeight: 700, fontSize: size * 0.45, letterSpacing: '-0.03em' }}
      >
        Wow<span style={{ color: palette.accentText }}>Syler</span>
      </span>
    </div>
  );
}
