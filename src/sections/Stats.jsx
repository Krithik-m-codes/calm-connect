import { motion } from "framer-motion";
import { stats } from "../data/stats";
import {
  useMotionSafe,
  fadeUp,
  stagger,
  defaultTransition,
  noMotion,
} from "../utils/motion";
import { useEffect, useRef, useState } from "react";

function CountUp({ target }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const num = parseInt(target, 10);
          if (isNaN(num)) {
            setDisplay(target);
            return;
          }
          let current = 0;
          const step = Math.max(1, Math.floor(num / 30));
          const timer = setInterval(() => {
            current += step;
            if (current >= num) {
              current = num;
              clearInterval(timer);
            }
            setDisplay(String(current));
          }, 40);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{display}</span>;
}

export default function Stats() {
  const animate = useMotionSafe();
  const v = animate ? fadeUp : noMotion;

  return (
    <section className="px-[clamp(20px,6vw,80px)] pt-12 pb-24 border-b border-brand-dark/10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={animate ? stagger(0.12) : {}}
        className="max-w-7xl mx-auto grid grid-cols-1 gap-12 sm:grid-cols-3 text-center sm:text-left"
      >
        {stats.map((s) => (
          <motion.div
            key={s.id}
            variants={v}
            transition={defaultTransition}
            className="flex flex-col items-center sm:items-start"
          >
            <div className="flex-1 w-full flex flex-col justify-start text-center sm:text-left">
              <h3 className="font-heading text-3xl lg:text-4xl mb-3 text-brand-dark">
                {s.value ? (
                  <>
                    <CountUp target={s.value} />+ {s.label}
                  </>
                ) : (
                  s.label
                )}
              </h3>
              <p className="text-sm lg:text-base text-brand-muted leading-relaxed max-w-sm sm:max-w-none mx-auto">
                {s.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
