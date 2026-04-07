import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../../data/testimonials";

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % testimonials.length),
    [],
  );
  const prev = useCallback(
    () =>
      setCurrent(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length,
      ),
    [],
  );

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <div className="relative mx-auto mt-16 max-w-4xl px-4 md:px-8">
      {/* Large decorative quote mark in soul-gold */}
      <div
        className="absolute -top-12 md:-top-20 -left-4 md:-left-8 z-0 text-[10rem] md:text-[14rem] leading-none font-soul opacity-30 select-none"
        style={{ color: "var(--color-soul-gold)" }}
      >
        &ldquo;
      </div>

      <div className="relative z-10 w-full min-h-87.5 md:min-h-75 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto rounded-3xl p-8 lg:p-12"
            style={{ backgroundColor: "var(--color-soul-cream)" }}
          >
            <p className="text-xl md:text-3xl lg:text-4xl leading-snug md:leading-relaxed font-bridge italic mb-10 tracking-tight" style={{ color: "var(--color-bg-deep)" }}>
              &ldquo;&rdquo;{t.quote}&rdquo;
            </p>
            <div className="flex flex-col items-center gap-3">
              {/* Avatar — blush circle with initials in sage */}
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full shadow-sm text-lg font-medium font-soul"
                style={{
                  backgroundColor: "rgba(232, 196, 184, 0.4)",
                  color: "var(--color-soul-sage)",
                }}
                aria-hidden="true"
              >
                {t.name.charAt(t.name.length - 1)}
              </div>
              <div className="flex flex-col items-center">
                <h4 className="text-lg md:text-xl font-semibold tracking-tight font-display" style={{ color: "var(--color-bg-deep)" }}>
                  {t.name}
                </h4>
                <span className="text-sm font-medium uppercase tracking-widest mt-1 font-science" style={{ color: "#8a8a8a" }}>
                  {t.label}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-12 flex items-center justify-center gap-6">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-soul-sage/30 text-soul-sage transition-all duration-500 hover:bg-soul-sage hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-soul-sage/20"
          style={{ backgroundColor: "var(--color-soul-cream)" }}
        >
          <svg
            className="w-5 h-5 text-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div
          className="flex gap-3 px-6 py-3 rounded-full border border-soul-sage/20"
          style={{ backgroundColor: "rgba(250, 246, 240, 0.6)" }}
          role="tablist"
          aria-label="Testimonial indicators"
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-500 ease-out ${
                i === current
                  ? "w-8 bg-soul-sage"
                  : "w-2.5 bg-soul-sage/25 hover:bg-soul-sage/50"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-soul-sage/30 text-soul-sage transition-all duration-500 hover:bg-soul-sage hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-soul-sage/20"
          style={{ backgroundColor: "var(--color-soul-cream)" }}
        >
          <svg
            className="w-5 h-5 text-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
