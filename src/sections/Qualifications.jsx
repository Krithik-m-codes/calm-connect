import { motion } from "framer-motion";
import {
  qualificationsHeading,
  qualificationsDescription,
  clinicalTraining,
} from "../data/qualifications";
import SectionHeading from "../components/ui/SectionHeading";
import { ScrollDiplomaIcon } from "../components/ui/BotanicalIcons";
import {
  useMotionSafe,
  fadeUp,
  stagger,
  defaultTransition,
  noMotion,
} from "../utils/motion";

// Clinical explanations for each qualification
const clinicalDescriptions = {
  CBT: "Cognitive restructuring for anxiety & depression",
  EMDR: "Eye movement therapy for trauma resolution",
  Neurogenesis: "Brain plasticity techniques for recovery",
  "Lucid Dreaming": "Therapeutic dreamwork for self-awareness",
  "Functional Family Therapy": "Relationship dynamics & family healing",
  "Hypnotherapy (Advanced)": "Deep hypnotic techniques for behavioural change",
  "Inner Engineering by Isha Foundation": "Yogic science for inner transformation",
};

export default function Qualifications() {
  const animate = useMotionSafe();
  const v = animate ? fadeUp : noMotion;

  return (
    <section
      className="px-[clamp(20px,6vw,80px)] py-20"
      style={{ backgroundColor: "var(--color-bg-deep)" }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={
          animate ? { visible: { transition: { staggerChildren: 0.12 } } } : {}
        }
      >
        <motion.div variants={v} transition={defaultTransition}>
          <SectionHeading
            title={qualificationsHeading}
            subtitle={qualificationsDescription}
            className="text-soul-cream [&_h2]:text-soul-cream [&_p]:text-soul-cream/70"
          />
        </motion.div>

        <motion.div
          variants={animate ? stagger(0.08) : {}}
          className="grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {clinicalTraining.map((item) => (
            <motion.div key={item} variants={v} transition={defaultTransition}>
              <div className="h-full rounded-2xl md:rounded-3xl p-6 md:p-8 bg-white/10 border border-white/15 backdrop-blur-sm hover:bg-white/15 transition-all duration-500 flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <ScrollDiplomaIcon className="text-soul-gold shrink-0 mt-1" size={24} />
                  <h4 className="font-display text-lg lg:text-xl font-semibold text-soul-cream">
                    {item}
                  </h4>
                </div>
                <p className="text-sm text-soul-cream/60 leading-relaxed font-science pl-9">
                  {clinicalDescriptions[item] || "Specialized clinical training"}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
