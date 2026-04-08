// Reusable botanical & technical SVG icons for the Science & Soul theme
// Design Language: Dual-tone line art (1.5px stroke) + 15% opacity accent fills

export function LotusIcon({ className = "", size = 24 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Accent Background Petal */}
      <path
        d="M12 22C12 22 5 15 5 9C5 5.5 8 3 12 2C16 3 19 5.5 19 9C19 15 12 22 12 22Z"
        fill="currentColor"
        fillOpacity="0.15"
      />
      {/* Central Geometry */}
      <path
        d="M12 22C12 22 6 16 6 10C6 6.5 9 4 12 2C15 4 18 6.5 18 10C18 16 12 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Floating Side Petals */}
      <path
        d="M7 13C4 11.5 2 9 2 6.5C2 5 3.5 4 5 4C7.5 4 10.5 6 10.5 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 13C20 11.5 22 9 22 6.5C22 5 20.5 4 19 4C16.5 4 13.5 6 13.5 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Scientific Node Core */}
      <circle cx="12" cy="16" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function LeafIcon({ className = "", size = 24 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sharp Leaf Silhouette */}
      <path
        d="M21 3C21 3 20 10 15 15C10 20 3 22 3 22C3 22 4 15 9 10C14 5 21 3 21 3Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Geometric Vein (Circuit/Node style) */}
      <path
        d="M3 22L11 14M15 10L12 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="13.5" cy="11.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function LeafCluster({ className = "" }) {
  // A structured, 3-point botanical cluster
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
        d="M100 20C100 20 85 45 60 65C35 85 10 90 10 90C10 90 25 65 50 45C75 25 100 20 100 20Z"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M10 90L55 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M70 30C70 30 55 40 40 55C25 70 15 85 15 85C15 85 30 75 45 60C60 45 70 30 70 30Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path
        d="M90 55C90 55 75 65 60 75C45 85 30 95 30 95C30 95 45 85 60 75C75 65 90 55 90 55Z"
        fill="currentColor"
        fillOpacity="0.05"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
    </svg>
  );
}

export function BotanicalDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-soul-sage/50" />
      <LotusIcon className="text-soul-sage" size={16} />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-soul-sage/50" />
    </div>
  );
}

export function LotusWatermark({ className = "" }) {
  // Sacred geometry approach for backgrounds
  return (
    <svg
      className={className}
      width="300"
      height="300"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.2" opacity="0.2" />
      <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.2" opacity="0.4" />
      <path
        d="M50 5 L56 38 L88 44 L56 50 L50 83 L44 50 L12 44 L44 38 Z"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="currentColor"
        fillOpacity="0.03"
      />
      <path
        d="M50 18 L54 41 L76 45 L54 49 L50 72 L46 49 L24 45 L46 41 Z"
        stroke="currentColor"
        strokeWidth="0.2"
        opacity="0.5"
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
      {/* Harmonic Sine Waves */}
      <path
        d="M3 12C6 7 8 7 12 12C16 17 18 17 21 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 17C6 12 8 12 12 17C16 22 18 22 21 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M3 7C6 2 8 2 12 7C16 12 18 12 21 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.2"
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
        d="M12 22C16.418 22 20 18.418 20 14C20 9.582 12 2 12 2C12 2 4 9.582 4 14C4 18.418 7.582 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17C13.657 17 15 15.657 15 14C15 12.343 12 8 12 8C12 8 9 12.343 9 14C9 15.657 10.343 17 12 17Z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BrainLotusIcon({ className = "", size = 24 }) {
  return (
    // Left hemisphere is scientific nodes, right hemisphere is an organic lotus petal
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 2"
      />
      {/* Organic Side (Soul) */}
      <path
        d="M12 22C16 20 21 16 21 11C21 6 16 3 12 3"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Node Side (Science) */}
      <path d="M12 3C8 3 3 6 3 11C3 16 8 20 12 22" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="6" cy="11" r="1.5" fill="currentColor" />
      <circle cx="9" cy="7" r="1.5" fill="currentColor" />
      <circle cx="8" cy="16" r="1.5" fill="currentColor" />
      <path d="M12 7H9L6 11L8 16H12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function ScreenLeafIcon({ className = "", size = 24 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M8 20H16 M12 16V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Botanical code rising from the screen */}
      <path
        d="M12 14C14 14 16 12 16 9.5C16 7 14 7 14 7C12 7 12 9.5 12 9.5C10 9.5 8 12 8 14C8 16 10 16 10 16C12 16 12 14 12 14Z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
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
        d="M14 3H6C4.895 3 4 3.895 4 5V19C4 20.105 4.895 21 6 21H18C19.105 21 20 20.105 20 19V9L14 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M14 3V9H20" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" strokeLinejoin="round" />
      {/* Minimalist Tech Ribbon Seal */}
      <circle cx="10" cy="14" r="2.5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 16.5L7 20L10 18.5L13 20L11.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function LeafBorderPattern({ className = "" }) {
  return (
    <div className={`w-full overflow-hidden h-4 ${className}`}>
      <svg width="100%" height="16" viewBox="0 0 100 16" preserveAspectRatio="none" fill="none">
        <pattern id="leaf-border" x="0" y="0" width="40" height="16" patternUnits="userSpaceOnUse">
          {/* Continuous Sine Wave Vine */}
          <path
            d="M0 8 Q 10 0 20 8 T 40 8"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Sprouting geometric leaves */}
          <path
            d="M10 4 Q 14 2 16 6 Q 12 8 10 4Z"
            fill="currentColor"
            fillOpacity="0.2"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M30 12 Q 34 14 36 10 Q 32 8 30 12Z"
            fill="currentColor"
            fillOpacity="0.2"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
        <rect width="100%" height="16" fill="url(#leaf-border)" className="text-soul-sage" />
      </svg>
    </div>
  );
}