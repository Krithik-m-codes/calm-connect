import { motion } from "framer-motion";
import { hero } from "../data/siteConfig";
import {
  useMotionSafe,
  fadeUp,
  stagger,
  defaultTransition,
  noMotion,
} from "../utils/motion";

export default function About() {
  const animate = useMotionSafe();
  const v = animate ? fadeUp : noMotion;

  return (
    <section className="px-[clamp(20px,6vw,80px)] py-20 pb-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={animate ? stagger(0.15) : {}}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
      >
        <motion.div
          variants={v}
          transition={defaultTransition}
          className="flex flex-col space-y-6 bg-brand-sand/30 border border-brand-dark/5 rounded-[2.5rem] p-10 lg:p-14 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="inline-flex items-center self-start justify-center p-4 bg-white/70 backdrop-blur-sm rounded-[1.5rem] shadow-xs mb-4">
            {/* Heart / Mind icon placeholder */}
            <svg
              className="w-10 h-10 text-brand-dark"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-brand-dark">
            {hero.whomIHelpLabel}
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed text-brand-charcoal/90">
            {hero.whomIHelpBody}
          </p>
        </motion.div>

        <motion.div
          variants={v}
          transition={defaultTransition}
          className="flex flex-col space-y-6 bg-brand-mint/20 border border-brand-dark/5 rounded-[2.5rem] p-10 lg:p-14 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="inline-flex items-center self-start justify-center p-4 bg-white/70 backdrop-blur-sm rounded-[1.5rem] shadow-xs mb-4">
            {/* Journey / Path icon placeholder */}
            <svg
              className="w-10 h-10 text-brand-dark"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-brand-dark">
            {hero.journeyLabel}
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed text-brand-charcoal/90">
            {hero.journeyBody}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
