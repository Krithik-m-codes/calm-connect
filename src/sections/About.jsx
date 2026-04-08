import { motion } from "framer-motion";
import { hero } from "../data/siteConfig";
import { LotusIcon } from "../components/ui/BotanicalIcons";
import {
  useMotionSafe,
  fadeUp,
  stagger,
  defaultTransition,
  noMotion,
} from "../utils/motion";

const journeySteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "A gentle first meeting to understand your needs, goals, and the challenges you're facing — no pressure, just presence.",
  },
  {
    number: "02",
    title: "Personalised Plan",
    description:
      "Together we design a therapeutic pathway blending evidence-based methods with mindfulness tailored to your unique journey.",
  },
  {
    number: "03",
    title: "Ongoing Support",
    description:
      "Regular sessions, progress reviews, and compassionate guidance as you build resilience and rediscover balance.",
  },
];

export default function About() {
  const animate = useMotionSafe();
  const v = animate ? fadeUp : noMotion;

  return (
    <section
      className="px-[clamp(20px,6vw,80px)] py-20 pb-10"
      style={{ backgroundColor: "var(--color-bg-sage-light)" }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={animate ? stagger(0.15) : {}}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
      >
        {/* Where I Help */}
        <motion.div
          variants={v}
          transition={defaultTransition}
          className="flex flex-col space-y-6 bg-soul-cream/80 border border-soul-sage/15 rounded-[2.5rem] p-10 lg:p-14 shadow-sm hover:shadow-md transition-all duration-500"
        >
          <div className="inline-flex items-center self-start gap-3 mb-2">
            <LotusIcon className="text-soul-sage" size={32} />
            <h2 className="font-soul text-3xl lg:text-4xl font-semibold text-bg-deep">
              {hero.whomIHelpLabel}
            </h2>
          </div>
          <p
            className="flex-1 flex items-center justify-center text-lg lg:text-xl text-center leading-[1.9] font-bridge"
            style={{ color: "#4a4a4a" }}
          >
            {hero.whomIHelpBody}
          </p>
        </motion.div>

        {/* The Journey Together — 3-step visual flow */}
        <motion.div
          variants={v}
          transition={defaultTransition}
          className="flex flex-col space-y-6 bg-white/70 border border-soul-sage/15 rounded-[2.5rem] p-10 lg:p-14 shadow-sm hover:shadow-md transition-all duration-500"
        >
          <h2 className="font-soul text-3xl lg:text-4xl font-semibold text-bg-deep mb-4">
            {hero.journeyLabel}
          </h2>

          <div className="flex flex-col space-y-0 relative">
            {journeySteps.map((step, index) => (
              <div key={step.number} className="flex gap-5 relative">
                {/* Vertical dotted line */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-soul-sage/20 border-2 border-soul-sage flex items-center justify-center text-soul-sage font-mono-science text-sm font-semibold shrink-0">
                    {step.number}
                  </div>
                  {index < journeySteps.length - 1 && (
                    <div className="w-px flex-1 border-l-2 border-dashed border-soul-sage/40 my-1" />
                  )}
                </div>

                {/* Step content */}
                <div
                  className={`pb-8 ${index === journeySteps.length - 1 ? "pb-0" : ""}`}
                >
                  <h4 className="font-display text-lg lg:text-xl font-semibold text-bg-deep mb-1">
                    {step.title}
                  </h4>
                  <p
                    className="text-sm lg:text-base leading-relaxed font-science"
                    style={{ color: "#5a5a5a" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
