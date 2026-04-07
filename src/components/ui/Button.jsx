const variants = {
  primary:
    "bg-soul-sage text-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl",
  secondary:
    "bg-transparent text-soul-sage border-2 border-soul-sage hover:-translate-y-0.5 hover:bg-soul-sage/10",
  whatsapp:
    "bg-soul-sage text-white shadow-lg hover:-translate-y-0.5 hover:shadow-[0_0_16px_rgba(122,158,126,0.4)]",
  ghost:
    "bg-white/75 text-brand-dark border border-soul-sage/30 hover:-translate-y-0.5 hover:border-soul-sage",
};

export default function Button({
  variant = "primary",
  children,
  href,
  className = "",
  leafIcon = false,
  ...props
}) {
  const isTextSized =
    className.includes("text-xs") ||
    className.includes("text-sm") ||
    className.includes("text-base") ||
    className.includes("text-lg") ||
    className.includes("text-xl");
  const isPadded =
    className.includes("px-") ||
    className.includes("py-") ||
    className.includes("p-");
  const base = `inline-flex items-center justify-center rounded-full font-medium cursor-pointer transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-soul-sage/40 focus:ring-offset-2 ${!isTextSized ? "text-sm" : ""} ${!isPadded ? "px-6 py-3" : ""}`;
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      {(leafIcon || variant === "whatsapp") && (
        <span className="mr-2">🌿</span>
      )}
      {children}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
