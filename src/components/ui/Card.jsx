export default function Card({ children, className = "", highlight = false }) {
  const base =
    "rounded-2xl md:rounded-3xl";
  const bg = highlight
    ? "bg-bg-deep text-soul-cream"
    : "bg-soul-cream";

  return <div className={`${base} ${bg} ${className}`} style={{ filter: "drop-shadow(0 8px 24px rgba(45, 74, 53, 0.08))" }}>{children}</div>;
}
