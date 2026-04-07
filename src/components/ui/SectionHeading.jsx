export default function SectionHeading({ title, subtitle, className = "" }) {
  return (
    <div className={`max-w-2xl mb-8 ${className}`}>
      <h2 className="font-soul text-[clamp(2.5rem,5vw,3.5rem)] leading-tight mb-4 text-bg-deep">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base lg:text-xl leading-relaxed font-science" style={{ color: "#6b6b6b" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
