import { motion } from "framer-motion";
import { stats } from "../data/stats";
import { LeafBorderPattern } from "../components/ui/BotanicalIcons";
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
    <section className="px-[clamp(20px,6vw,80px)] py-0">
      <div
        className="max-w-7xl mx-auto rounded-3xl overflow-hidden"
        style={{ backgroundColor: "var(--color-soul-cream)" }}
      >
        {/* Botanical top border */}
        <LeafBorderPattern className="text-soul-sage" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={animate ? stagger(0.12) : {}}
          className="grid grid-cols-1 sm:grid-cols-3 text-center py-12 px-8"
        >
          {stats.map((s, index) => (
            <motion.div
              key={s.id}
              variants={v}
              transition={defaultTransition}
              className={`flex flex-col items-center px-6 py-4 ${
                index < stats.length - 1
                  ? "sm:border-r border-b sm:border-b-0 border-soul-sage/30"
                  : ""
              }`}
            >
              <h3 className="font-soul text-3xl lg:text-4xl mb-2 text-soul-gold font-semibold">
                {s.value ? (
                  <>
                    <CountUp target={s.value} />+ {s.label}
                  </>
                ) : (
                  s.label
                )}
              </h3>
              <p className="text-sm lg:text-base leading-relaxed max-w-xs mx-auto font-science" style={{ color: "#5a5a5a" }}>
                {s.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
