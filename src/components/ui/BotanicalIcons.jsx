// Reusable botanical SVG icons for the Science & Soul theme

export function LotusIcon({ className = "", size = 24 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 56c0 0-12-8-12-24C20 20 32 8 32 8s12 12 12 24C44 48 32 56 32 56z"
        fill="currentColor"
        opacity="0.3"
      />
      <path
        d="M32 56c0 0-20-4-20-24C12 16 32 8 32 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M32 56c0 0 20-4 20-24C52 16 32 8 32 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M32 56c0 0-6-10-6-22C26 22 32 12 32 12s6 10 6 22C38 46 32 56 32 56z"
        fill="currentColor"
        opacity="0.6"
      />
      <ellipse cx="32" cy="14" rx="3" ry="4" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export function LeafIcon({ className = "", size = 20 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 8C8 10 5.9 14.9 4 21c0 0 4-2 8-4 4-2 7-5 7-7 0-2-2-2-2-2z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M4 21c2-4 5-8 13-13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function LeafCluster({ className = "" }) {
  return (
    <svg
      className={className}
      width="120"
      height="100"
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M80 20C60 25 50 40 45 55c5-3 12-6 20-8 8-2 15-3 15-7s-5-10 0-20z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M90 40C75 42 65 52 60 65c4-2 10-4 16-5 6-1 12-2 12-5s-3-8 2-15z"
        fill="currentColor"
        opacity="0.1"
      />
      <path
        d="M70 10C55 15 48 28 44 40c4-2 9-5 15-6 6-1 11-2 11-5s-3-8 0-19z"
        fill="currentColor"
        opacity="0.12"
      />
    </svg>
  );
}

export function BotanicalDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-px w-12 bg-soul-sage/40" />
      <LeafIcon className="text-soul-sage" size={18} />
      <div className="h-px w-12 bg-soul-sage/40" />
    </div>
  );
}

export function LotusWatermark({ className = "" }) {
  return (
    <svg
      className={className}
      width="300"
      height="300"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M150 260c0 0-60-40-60-120C90 80 150 20 150 20s60 60 60 120C210 220 150 260 150 260z"
        fill="currentColor"
        opacity="0.04"
      />
      <path
        d="M150 260c0 0-100-20-100-120C50 60 150 20 150 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.06"
      />
      <path
        d="M150 260c0 0 100-20 100-120C250 60 150 20 150 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.06"
      />
      <path
        d="M150 260c0 0-30-50-30-110C120 90 150 40 150 40s30 50 30 110C180 210 150 260 150 260z"
        fill="currentColor"
        opacity="0.05"
      />
    </svg>
  );
}

export function WaveIcon({ className = "", size = 24 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 12c2-3 4-5 6-5s4 4 6 4 4-4 6-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M2 16c2-3 4-5 6-5s4 4 6 4 4-4 6-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

export function FlameIcon({ className = "", size = 24 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22c-4 0-7-3-7-7 0-5 7-13 7-13s7 8 7 13c0 4-3 7-7 7z"
        fill="currentColor"
        opacity="0.3"
      />
      <path
        d="M12 22c-2 0-4-2-4-4 0-3 4-8 4-8s4 5 4 8c0 2-2 4-4 4z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  );
}

export function BrainLotusIcon({ className = "", size = 28 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 4C10 4 8 8 8 12c0 3 2 5 4 6v4c0 2 2 4 4 4s4-2 4-4v-4c2-1 4-3 4-6 0-4-2-8-8-8z"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M16 28c0 0-4-3-4-8s4-12 4-12 4 7 4 12-4 8-4 8z"
        fill="currentColor"
        opacity="0.4"
      />
      <circle cx="16" cy="10" r="2" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

export function ScreenLeafIcon({ className = "", size = 28 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="6" width="24" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <path d="M12 26h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M16 22v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path
        d="M22 10c-4 1-6 4-7 7 2-1 4-2 6-2.5 2-.5 3-1 3-2s-1-1.5-2-2.5z"
        fill="currentColor"
        opacity="0.4"
      />
    </svg>
  );
}

export function ScrollDiplomaIcon({ className = "", size = 24 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 3a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H6z"
        fill="currentColor"
        opacity="0.1"
      />
      <path
        d="M8 8h8M8 12h6M8 16h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="17" cy="17" r="3" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

export function LeafBorderPattern({ className = "" }) {
  return (
    <div className={`w-full overflow-hidden h-4 ${className}`}>
      <svg width="100%" height="16" viewBox="0 0 200 16" preserveAspectRatio="none" fill="none">
        <pattern id="leaf-border" x="0" y="0" width="40" height="16" patternUnits="userSpaceOnUse">
          <path
            d="M20 2c-5 2-8 5-10 10 2-1 5-3 8-4 3-1 5-2 5-3s-1-2-3-3z"
            fill="currentColor"
            opacity="0.15"
          />
          <path
            d="M35 4c-4 1-6 4-7 8 2-1 4-2 6-3 2-1 3-1 3-2s-1-2-2-3z"
            fill="currentColor"
            opacity="0.1"
          />
        </pattern>
        <rect width="100%" height="16" fill="url(#leaf-border)" className="text-soul-sage" />
      </svg>
    </div>
  );
}
