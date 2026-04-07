import { emergencyTicker } from "../../data/siteConfig";

export default function Ticker() {
  return (
    <div
      className="w-full overflow-hidden border-b border-soul-sage/15"
      style={{ backgroundColor: "var(--color-soul-cream)" }}
      role="marquee"
      aria-label="Emergency helpline information"
    >
      <div className="flex animate-marquee whitespace-nowrap py-2">
        {/* Duplicate content for seamless infinite loop */}
        {[0, 1].map((i) => (
          <span
            key={i}
            className="mx-8 text-xs font-medium sm:text-sm font-science"
            style={{ color: "rgba(74, 74, 74, 0.7)" }}
          >
            {emergencyTicker}
          </span>
        ))}
      </div>
    </div>
  );
}
