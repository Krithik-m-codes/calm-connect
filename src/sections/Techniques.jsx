import { motion } from "framer-motion";
import { techniquesSubtitle } from "../data/siteConfig";
import {
  accreditationText,
} from "../data/qualifications";
import SectionHeading from "../components/ui/SectionHeading";
import { BotanicalDivider } from "../components/ui/BotanicalIcons";
import { useMotionSafe, springPop, fadeUp, defaultTransition, noMotion } from "../utils/motion";

// Split into Science vs Soul categories
const scienceTechniques = [
  "CBT",
  "EMDR",
  "CBT (ADHD & PTSD Focused)",
  "Exposure therapy",
  "Flooding",
  "Logotherapy",
  "Grounding practices",
];

const soulTechniques = [
  "Imagery",
  "Hypnotherapy",
  "Yoga for Relaxation",
  "Kriya Yoga",
  "Guided Meditations",
  "Creative Arts Therapy",
];

export default function Techniques() {
  const animate = useMotionSafe();
  const v = animate ? springPop : noMotion;
  const vFade = animate ? fadeUp : noMotion;

  return (
    <section className="px-[clamp(20px,6vw,80px)] py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={
          animate ? { visible: { transition: { staggerChildren: 0.05 } } } : {}
        }
      >
        <SectionHeading
          title="Techniques We Use"
          subtitle={techniquesSubtitle}
        />

        {/* Two-column Science vs Soul split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-8">
          {/* Science column */}
          <motion.div variants={vFade} transition={defaultTransition}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xl">🔬</span>
              <h3 className="font-science text-lg font-semibold text-science-slate tracking-wide">
                Evidence-Based Techniques
              </h3>
            </div>
            <div className="h-px w-full bg-science-slate/20 mb-5" />
            <div className="flex flex-wrap gap-3">
              {scienceTechniques.map((t) => (
                <motion.span
                  key={t}
                  variants={v}
                  transition={
                    animate
                      ? { type: "spring", stiffness: 300, damping: 20 }
                      : { duration: 0 }
                  }
                  className="inline-block rounded-full border-2 border-science-slate/30 px-5 py-2.5 text-sm font-mono-science font-medium text-science-slate bg-white/60 hover:bg-science-slate/5 transition-all duration-500"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Soul column */}
          <motion.div variants={vFade} transition={defaultTransition}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xl">🌸</span>
              <h3 className="font-bridge italic text-lg font-semibold text-soul-lotus tracking-wide">
                Soul & Integrative Work
              </h3>
            </div>
            <div className="h-px w-full bg-soul-lotus/30 mb-5" />
            <div className="flex flex-wrap gap-3">
              {soulTechniques.map((t) => (
                <motion.span
                  key={t}
                  variants={v}
                  transition={
                    animate
                      ? { type: "spring", stiffness: 300, damping: 20 }
                      : { duration: 0 }
                  }
                  className="inline-block rounded-full border-2 border-soul-lotus/40 px-5 py-2.5 text-sm font-bridge italic font-medium text-soul-lotus bg-white/60 hover:bg-soul-lotus/5 transition-all duration-500"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Accreditation Badge — upgraded to ribbon card */}
        <motion.div
          variants={vFade}
          transition={defaultTransition}
          className="mt-12"
        >
          <BotanicalDivider className="mb-8" />
          <div className="relative max-w-md mx-auto bg-white rounded-2xl border-2 border-soul-gold/40 p-8 text-center shadow-sm">
            {/* Ribbon-like top accent */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-soul-gold text-white text-xs font-semibold px-4 py-1 rounded-full tracking-wider uppercase">
              Certified
            </div>
            {/* Seal icon */}
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-soul-gold/10 border-2 border-soul-gold/30 flex items-center justify-center">
              <svg className="w-8 h-8 text-soul-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="font-soul text-xl font-semibold text-bg-deep">
              {accreditationText}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
