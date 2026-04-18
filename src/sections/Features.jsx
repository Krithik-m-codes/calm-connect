import { motion } from "framer-motion";
import { features } from "../data/features";
import {
  LotusIcon,
  LeafIcon,
  WaveIcon,
  FlameIcon,
} from "../components/ui/BotanicalIcons";

import {
  useMotionSafe,
  fadeUp,
  stagger,
  defaultTransition,
  noMotion,
} from "../utils/motion";

const botanicalIcons = [LotusIcon, LeafIcon, WaveIcon, FlameIcon];
const cardBackgrounds = [
  "rgba(255, 255, 255, 0.7)",
  "#F7EDE8",
  "rgba(255, 255, 255, 0.7)",
  "#F7EDE8",
];
const iconColors = [
  "text-soul-lotus",
  "text-soul-sage",
  "text-science-teal",
  "text-soul-gold",
];
const evidenceBadges = [
  "🔬 CBT-backed",
  "🌍 WHO recognised",
  "🧠 Research-supported",
  "📚 Evidence-informed",
];

export default function Features() {
  const animate = useMotionSafe();
  const v = animate ? fadeUp : noMotion;

  return (
    <section className="px-[clamp(20px,6vw,80px)] py-10 pb-20 relative z-10 w-full overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={animate ? stagger(0.1) : {}}
        className="mx-auto max-w-7xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {features.map((f, index) => {
          const IconComponent = botanicalIcons[index % botanicalIcons.length];
          return (
            <motion.div
              key={f.id}
              variants={v}
              transition={defaultTransition}
              className="group relative flex flex-col justify-between rounded-4xl p-8 border border-transparent shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              style={{
                backgroundColor:
                  cardBackgrounds[index % cardBackgrounds.length],
                borderLeftColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderLeftColor = "#7A9E7E";
                e.currentTarget.style.borderLeftWidth = "3px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderLeftColor = "transparent";
                e.currentTarget.style.borderLeftWidth = "1px";
              }}
            >
              {/* Botanical watercolor icon */}
              <div className="mb-4 transition-transform duration-500 group-hover:scale-105">
                <IconComponent
                  className={iconColors[index % iconColors.length]}
                  size={36}
                />
              </div>

              <div className="relative z-10 flex-1">
                <h4 className="font-display text-xl font-semibold mb-3 text-science-slate tracking-tight leading-snug transition-colors duration-500 group-hover:text-bg-deep">
                  {f.title}
                </h4>
                <p
                  className="text-base leading-relaxed font-science"
                  style={{ color: "#6b6b6b" }}
                >
                  {f.description}
                </p>
              </div>

              {/* Evidence badge */}
              <div className="mt-6">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-science-teal/40 text-xs font-medium text-science-teal bg-white/60 transition-all duration-500 group-hover:bg-white/85 group-hover:border-science-teal/55">
                  {evidenceBadges[index % evidenceBadges.length]}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
