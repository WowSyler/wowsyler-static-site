export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="10" fill="#0A2342" />
        <rect x="1" y="1" width="38" height="38" rx="9" stroke="#1E6FD9" strokeWidth="1.5" />
        <path
          d="M7 12L12.5 28L17 17L20 24L22.5 17L27 28L33 12"
          stroke="#00B4D8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="24" r="2" fill="#1E6FD9" />
      </svg>
      <span
        style={{ color: '#0A2342', fontWeight: 700, fontSize: size * 0.45, letterSpacing: '-0.03em' }}
      >
        Wow<span style={{ color: '#1E6FD9' }}>Syler</span>
      </span>
    </div>
  );
}
