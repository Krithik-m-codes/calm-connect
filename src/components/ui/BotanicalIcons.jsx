// ─── Core Icons ───────────────────────────────────────────────────────────────
 
/**
 * LotusIcon — 5-petal lotus opening from a common base, with water ripple
 * and a seedpod center. Each petal fans outward with its own stagger for the
 * bloom animation. Outer petals are lower/wider; center petal stands tallest.
 */
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
      {/* Left outer petal — widest spread, lowest angle */}
      <path
        d="M12 17C9 15 5 13 3 11C4 9 8 11 12 17Z"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
        className="lotus-petal lotus-petal-1"
      />
 
      {/* Right outer petal — mirror of left outer */}
      <path
        d="M12 17C15 15 19 13 21 11C20 9 16 11 12 17Z"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
        className="lotus-petal lotus-petal-2"
      />
 
      {/* Left inner petal — angled ~35° from center */}
      <path
        d="M12 17C10 14 7 11 5 7C7.5 5.5 10 10 12 17Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
        className="lotus-petal lotus-petal-3"
      />
 
      {/* Right inner petal — mirror of left inner */}
      <path
        d="M12 17C14 14 17 11 19 7C16.5 5.5 14 10 12 17Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
        className="lotus-petal lotus-petal-4"
      />
 
      {/* Center petal — tallest, most upright, front layer */}
      <path
        d="M12 17C10.5 13.5 9.5 9 12 4.5C14.5 9 13.5 13.5 12 17Z"
        fill="currentColor"
        fillOpacity="0.22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
        className="lotus-petal lotus-petal-5"
      />
 
      {/* Water ripple — sits below the flower base */}
      <path
        d="M2 20Q7 18.5 12 20Q17 21.5 22 20"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.45"
      />
 
      {/* Seedpod — solid center node */}
      <circle cx="12" cy="17" r="1.5" fill="currentColor" />
    </svg>
  );
}
 
/**
 * LeafIcon — Diagonal botanical leaf with midrib, three side veins,
 * and a small circuit node at the center vein junction (science detail).
 */
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
      {/* Leaf body — diagonal, pointed at tip (top-right) and stem (bottom-left) */}
      <path
        d="M20.5 3.5C18 5 12 9.5 7 14.5C5 16.5 3.5 19 3.5 20.5C5 19 7.5 17.5 10 15C14.5 10.5 19 5.5 20.5 3.5Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="leaf-body"
      />
 
      {/* Midrib — central vein from stem to tip */}
      <path
        d="M3.5 20.5L19.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
 
      {/* Side veins — branching off the midrib */}
      <path
        d="M8 16Q10.5 14.5 12.5 12.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M12 12Q14 10.5 15.5 9"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M15.5 8.5Q17 7 18 6"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
 
      {/* Circuit node — the "Science" accent at vein junction */}
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}
 
/**
 * WaveIcon — Three harmonic sine waves with scrolling flow animation.
 * The primary wave is full opacity; secondary and tertiary are dimmed.
 * Apply className="wave-scroll" or use the CSS animation block below.
 */
export function WaveIcon({ className = "", size = 24 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "hidden" }}
    >
      <clipPath id="wave-clip">
        <rect x="1" y="0" width="22" height="24" />
      </clipPath>
 
      <g clipPath="url(#wave-clip)">
        {/* Animate this group for scrolling effect */}
        <g className="wave-scroll-group">
          {/* Primary wave */}
          <path
            d="M-6 12C-3 7 -1 7 3 12C7 17 9 17 12 12C15 7 17 7 21 12C24 17 26 17 30 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
 
          {/* Secondary wave — lower, lighter */}
          <path
            d="M-6 16C-3 11 -1 11 3 16C7 21 9 21 12 16C15 11 17 11 21 16C24 21 26 21 30 16"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.4"
          />
 
          {/* Tertiary wave — upper, faintest */}
          <path
            d="M-6 8C-3 3 -1 3 3 8C7 13 9 13 12 8C15 3 17 3 21 8C24 13 26 13 30 8"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
            opacity="0.2"
          />
        </g>
      </g>
    </svg>
  );
}
 
/**
 * FlameIcon — Organic flame with an outer shell and inner core shape.
 * The outer flame slightly flickers (use `.flame-dance` animation),
 * and the inner core flickers at a different phase for a natural look.
 */
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
      {/* Outer flame body */}
      <path
        d="M12 22C16.4 22 20 18.4 20 14C20 9 14 4 12 2C10 6 8.5 8 7 10C5.5 12 4 13 4 14C4 18.4 7.6 22 12 22Z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
        className="flame-outer"
      />
 
      {/* Inner flame core */}
      <path
        d="M12 18C14.2 18 16 16.2 16 14C16 12 13.5 9.5 12 8C10.5 10 8 12 8 14C8 16.2 9.8 18 12 18Z"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
        className="flame-inner"
      />
 
      {/* Tip gleam — subtle accent dot */}
      <circle cx="12" cy="5.5" r="0.8" fill="currentColor" opacity="0.4" />
    </svg>
  );
}
 
/**
 * BrainLotusIcon — Split brain representing the duality of Science & Soul.
 * Left hemisphere: organic lotus arc (soul/intuition)
 * Right hemisphere: circuit nodes connected by lines (science/analysis)
 * A dashed vertical line divides the two halves.
 */
export function BrainLotusIcon({ className = "", size = 24 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Brain outline — simplified bilateral silhouette */}
      <path
        d="M12 20.5C8 20.5 4 17.5 4 13.5C4 10 6 7 8.5 6C9 5.5 9.5 4.5 10.5 4C11 3.8 12 3.8 12 3.8C12 3.8 13 3.8 13.5 4C14.5 4.5 15 5.5 15.5 6C18 7 20 10 20 13.5C20 17.5 16 20.5 12 20.5Z"
        fill="currentColor"
        fillOpacity="0.06"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
 
      {/* Dashed divider — the mind/body split */}
      <line
        x1="12" y1="3.8"
        x2="12" y2="20.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 2"
        opacity="0.5"
      />
 
      {/* LEFT = Soul — organic lotus petal suggestion */}
      <path
        d="M12 11C10 10 7.5 11 7.5 13C7.5 15 10 16 12 15.5"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
 
      {/* RIGHT = Science — three nodes in a triangle circuit */}
      <circle
        cx="16" cy="8.5" r="1.5"
        fill="currentColor"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        className="brain-node brain-node-1"
      />
      <circle
        cx="17.5" cy="13" r="1.5"
        fill="currentColor"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        className="brain-node brain-node-2"
      />
      <circle
        cx="15.5" cy="17.5" r="1.5"
        fill="currentColor"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        className="brain-node brain-node-3"
      />
 
      {/* Circuit connections */}
      <path
        d="M16 8.5L17.5 13L15.5 17.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );
}
 
/**
 * ScreenLeafIcon — A monitor with a botanical leaf growing from the screen,
 * symbolising digital wellness / tech + nature integration.
 */
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
      {/* Monitor frame */}
      <rect
        x="2" y="3"
        width="20" height="14"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
 
      {/* Stand and base */}
      <path
        d="M8 21H16M12 17V21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
 
      {/* Leaf growing from screen interior */}
      <path
        d="M12 15C12 15 15 13 15 10C15 7.5 13 7 13 7C11 7 11 9.5 11 9.5C9 9.5 7 12 8 14C9 16 12 15 12 15Z"
        fill="currentColor"
        fillOpacity="0.18"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
 
      {/* Leaf midrib */}
      <path
        d="M12 15L12 9.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
 
/**
 * ScrollDiplomaIcon — A folded document with a wax-seal circle containing
 * a tiny lotus motif, plus ribbon tails below the seal.
 */
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
      {/* Page body */}
      <path
        d="M14 3H6C4.9 3 4 3.9 4 5V19C4 20.1 4.9 21 6 21H18C19.1 21 20 20.1 20 19V9L14 3Z"
        fill="currentColor"
        fillOpacity="0.06"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
 
      {/* Folded corner */}
      <path
        d="M14 3V9H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
 
      {/* Seal circle */}
      <circle
        cx="10" cy="14.5" r="3"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
      />
 
      {/* Tiny lotus inside seal */}
      <path
        d="M10 14.5C9.3 13.7 8.8 12.8 10 12C11.2 12.8 10.7 13.7 10 14.5Z"
        fill="currentColor"
        fillOpacity="0.6"
        stroke="currentColor"
        strokeWidth="0.8"
      />
 
      {/* Ribbon tails */}
      <path
        d="M8 17.5L7 21L10 19.5L13 21L12 17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
 
      {/* Document text lines */}
      <line
        x1="14" y1="13"
        x2="18" y2="13"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.4"
      />
      <line
        x1="14" y1="15.5"
        x2="17" y2="15.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}
 
// ─── Composition Components ───────────────────────────────────────────────────
 
/**
 * LeafCluster — Three overlapping leaves at different depths and opacities,
 * creating a layered botanical cluster for hero sections or dividers.
 */
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
      {/* Back leaf (largest, most transparent) */}
      <path
        d="M100 15C100 15 82 40 58 62C34 84 8 90 8 90C8 90 26 66 50 44C74 22 100 15 100 15Z"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8 90L55 48"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="42" cy="60" r="2" fill="currentColor" opacity="0.5" />
 
      {/* Middle leaf */}
      <path
        d="M72 25C72 25 55 38 40 55C25 72 14 88 14 88C14 88 30 76 45 59C60 42 72 25 72 25Z"
        fill="currentColor"
        fillOpacity="0.18"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M14 88L52 50"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
 
      {/* Front leaf (smallest, dashed — furthest in front, most stylised) */}
      <path
        d="M92 55C92 55 75 65 60 77C45 89 28 97 28 97C28 97 44 88 58 76C72 64 92 55 92 55Z"
        fill="currentColor"
        fillOpacity="0.07"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
    </svg>
  );
}
 
/**
 * BotanicalDivider — Horizontal section divider with gradient lines
 * and a small LotusIcon centred between them.
 */
export function BotanicalDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-current opacity-50" />
      <LotusIcon size={16} />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-current opacity-50" />
    </div>
  );
}
 
/**
 * LotusWatermark — Large decorative background element with concentric rings
 * (sacred geometry), an 8-point star, inner ring, and a small lotus at centre.
 * Use at very low opacity (opacity-5 to opacity-10) behind page sections.
 */
export function LotusWatermark({ className = "" }) {
  return (
    <svg
      className={className}
      width="300"
      height="300"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring */}
      <circle
        cx="50" cy="50" r="46"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.15"
      />
 
      {/* Mid ring */}
      <circle
        cx="50" cy="50" r="35"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.25"
      />
 
      {/* Inner ring */}
      <circle
        cx="50" cy="50" r="22"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.35"
      />
 
      {/* 8-point star (outer) */}
      <path
        d="M50 4L54 42L88 46L54 50L50 88L46 50L12 46L46 42Z"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="currentColor"
        fillOpacity="0.03"
        opacity="0.6"
      />
 
      {/* 8-point star (inner, lighter) */}
      <path
        d="M50 18L53 42L72 45L53 48L50 72L47 48L28 45L47 42Z"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.4"
      />
 
      {/* Central lotus */}
      <g transform="translate(50,57) scale(1.4)">
        {/* Outer petals */}
        <path d="M0 0C-2.5 -2 -5 -3.5 -6.5 -6.5C-4.5 -7.5 -2 -5 0 0Z"
          fill="currentColor" opacity="0.5"/>
        <path d="M0 0C2.5 -2 5 -3.5 6.5 -6.5C4.5 -7.5 2 -5 0 0Z"
          fill="currentColor" opacity="0.5"/>
        {/* Center petal */}
        <path d="M0 0C-1.5 -3 -1.5 -6.5 0 -9.5C1.5 -6.5 1.5 -3 0 0Z"
          fill="currentColor" opacity="0.6"/>
        {/* Seedpod */}
        <circle cx="0" cy="-1" r="1.5" fill="currentColor" opacity="0.7"/>
      </g>
    </svg>
  );
}
 
/**
 * LeafBorderPattern — Full-width decorative vine border with sine-wave stem,
 * upward leaf sprouts at peaks, and downward sprouts at valleys.
 * Scales horizontally via preserveAspectRatio="none".
 */
export function LeafBorderPattern({ className = "" }) {
  return (
    <div className={`w-full overflow-hidden h-5 ${className}`}>
      <svg
        width="100%"
        height="20"
        viewBox="0 0 400 20"
        preserveAspectRatio="none"
        fill="none"
      >
        <pattern
          id="leaf-vine"
          x="0" y="0"
          width="40" height="20"
          patternUnits="userSpaceOnUse"
        >
          {/* Sine wave vine stem */}
          <path
            d="M0 10Q10 2 20 10Q30 18 40 10"
            stroke="currentColor"
            strokeWidth="1.3"
            fill="none"
            opacity="0.6"
          />
          {/* Upward leaf at peak */}
          <path
            d="M20 6Q24 2 26 7Q22 9 20 6Z"
            fill="currentColor"
            fillOpacity="0.25"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          {/* Downward leaf at valley */}
          <path
            d="M40 14Q44 18 46 13Q42 11 40 14Z"
            fill="currentColor"
            fillOpacity="0.15"
            stroke="currentColor"
            strokeWidth="0.8"
          />
        </pattern>
        <rect width="100%" height="20" fill="url(#leaf-vine)" />
      </svg>
    </div>
  );
}
