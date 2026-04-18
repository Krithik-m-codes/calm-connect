import { motion } from "framer-motion";
import { services } from "../data/services";
import { servicesIntro } from "../data/siteConfig";
import {
  LotusIcon,
  BrainLotusIcon,
  ScreenLeafIcon,
  LeafIcon,
  BotanicalDivider,
} from "../components/ui/BotanicalIcons";

import {
  useMotionSafe,
  fadeUp,
  stagger,
  defaultTransition,
  noMotion,
} from "../utils/motion";

const serviceIcons = [LotusIcon, BrainLotusIcon, ScreenLeafIcon];
const serviceBackgrounds = [
  "rgba(122, 158, 126, 0.08)", // soft sage
  "rgba(255, 255, 255, 0.7)", // soft white
  "rgba(232, 196, 184, 0.15)", // blush
];
const serviceIconColors = [
  "text-soul-sage",
  "text-soul-lotus",
  "text-science-teal",
];

export default function Services() {
  const animate = useMotionSafe();
  const v = animate ? fadeUp : noMotion;

  return (
    <section id="services" className="px-[clamp(20px,6vw,80px)] py-24 lg:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={
          animate ? { visible: { transition: { staggerChildren: 0.1 } } } : {}
        }
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <motion.div
            variants={v}
            transition={defaultTransition}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-soul-sage/15 text-soul-sage text-sm lg:text-base font-semibold mb-4 tracking-wide uppercase font-science">
              Our Services
            </span>
            <h2 className="font-soul text-4xl lg:text-6xl text-bg-deep mb-6 leading-tight">
              A Safe Space to <br className="hidden lg:block" /> Find Your Best
              Calm.
            </h2>

            {/* Botanical divider flanking the subtitle */}
            <BotanicalDivider className="mb-6" />

            <p
              className="text-lg lg:text-xl leading-relaxed max-w-xl mx-auto font-science"
              style={{ color: "#5a5a5a" }}
            >
              {servicesIntro}
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={animate ? stagger(0.1) : {}}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s, index) => {
            const IconComponent = serviceIcons[index % serviceIcons.length];
            return (
              <motion.div
                key={s.id}
                variants={v}
                transition={defaultTransition}
              >
                <div
                  className={`h-full group relative overflow-hidden rounded-[2rem] p-8 transition-all duration-500 border border-soul-sage/10 ${
                    index === 1 ? "lg:-translate-y-8" : ""
                  }`}
                  style={{
                    backgroundColor:
                      serviceBackgrounds[index % serviceBackgrounds.length],
                    filter: "drop-shadow(0 8px 24px rgba(45, 74, 53, 0.06))",
                  }}
                >
                  {/* Icon */}
                  <div className="mb-5">
                    <IconComponent
                      className={
                        serviceIconColors[index % serviceIconColors.length]
                      }
                      size={36}
                    />
                  </div>

                  <h3 className="relative z-10 text-2xl lg:text-3xl font-soul mt-0 mb-4 text-bg-deep font-semibold">
                    {s.title}
                  </h3>
                  <p
                    className="relative z-10 text-base lg:text-lg leading-relaxed mb-8 min-h-20 font-science"
                    style={{ color: "#5a5a5a" }}
                  >
                    {s.description}
                  </p>
                  <ul className="relative z-10 space-y-4">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start text-base lg:text-lg font-science"
                        style={{ color: "#4a4a4a" }}
                      >
                        <span className="mr-3 mt-0.5 text-lg shrink-0">🌿</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
