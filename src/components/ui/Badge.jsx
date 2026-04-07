export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-block rounded-full bg-soul-sage/15 px-5 py-2.5 text-sm lg:text-base font-medium text-bg-deep font-science ${className}`}
    >
      {children}
    </span>
  );
}
