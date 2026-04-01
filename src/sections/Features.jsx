import { motion } from "framer-motion";
import { features } from "../data/features";

import {
  useMotionSafe,
  fadeUp,
  stagger,
  defaultTransition,
  noMotion,
} from "../utils/motion";

export default function Features() {
  const animate = useMotionSafe();
  const v = animate ? fadeUp : noMotion;

  return (
    <section className="px-[clamp(20px,6vw,80px)] py-10 pb-20 relative z-10 w-full overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-brand-mint/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={animate ? stagger(0.1) : {}}
        className="mx-auto max-w-7xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {features.map((f) => (
          <motion.div
            key={f.id}
            variants={v}
            transition={defaultTransition}
            className="group relative flex flex-col justify-between rounded-[2rem] bg-white/60 backdrop-blur-xl p-8 border border-white/80 shadow-[0_8px_30px_rgba(24,45,41,0.03)] hover:shadow-[0_20px_60px_rgba(24,45,41,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            {/* Subtle highlight gradient on hover */}
            <div className="absolute inset-0 bg-linear-to-b from-brand-mint/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10">
              <h4 className="text-xl font-semibold mb-3 text-brand-dark tracking-tight leading-snug">
                {f.title}
              </h4>
              <p className="text-base text-brand-muted leading-relaxed">
                {f.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
