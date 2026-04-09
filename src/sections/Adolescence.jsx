import { motion } from "framer-motion";
import { adolescenceTags } from "../data/adolescenceTags";
import { adolescenceIntro, calmingImages } from "../data/siteConfig";
import SectionHeading from "../components/ui/SectionHeading";
import Badge from "../components/ui/Badge";
import { LeafIcon } from "../components/ui/BotanicalIcons";
import { useMotionSafe, springPop, noMotion } from "../utils/motion";

export default function Adolescence() {
  const animate = useMotionSafe();
  const v = animate ? springPop : noMotion;

  return (
    <section
      id="expertise"
      className="px-[clamp(20px,6vw,80px)] py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Diagonal split background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, var(--color-soul-cream) 50%, #F7EDE8 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={
            animate
              ? {
                  hidden: { opacity: 0, x: -40 },
                  visible: { opacity: 1, x: 0 },
                }
              : {}
          }
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="order-2 lg:order-1 relative"
        >
          {/* Main image with organic blob frame */}
          <div className="relative group">
            <div
              className="overflow-hidden aspect-4/5 lg:aspect-square group"
              style={{
                borderRadius: "60% 40% 55% 45% / 45% 55% 40% 60%",
                boxShadow: "0 40px 80px rgba(45, 74, 53, 0.12)",
              }}
            >
              <img
                src={calmingImages[0]}
                alt="Calming nature pathway"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(45, 74, 53, 0.4), transparent)",
                }}
              /> */}
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 bg-white/90 backdrop-blur-md rounded-3xl p-6 lg:p-8 shadow-xl z-10">
              <div className="flex items-center gap-2 mb-2">
                <LeafIcon className="text-soul-sage" size={18} />
                <h4 className="font-soul text-xl lg:text-2xl text-bg-deep">
                  Navigating the In-Between at Their Best
                </h4>
                <LeafIcon className="text-soul-sage" size={18} />
              </div>
              <p
                className="text-base leading-relaxed font-science"
                style={{ color: "#5a5a5a" }}
              >
                Providing the best compassionate anchor during the turbulent
                years of growth and discovery.
              </p>
            </div>
          </div>

          {/* Decorative blurs */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-soul-blush rounded-full -z-10 blur-xl opacity-60" />
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-soul-sage/20 rounded-full -z-10 blur-2xl opacity-60" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={
            animate
              ? { visible: { transition: { staggerChildren: 0.08 } } }
              : {}
          }
          className="order-1 lg:order-2"
        >
          <motion.div variants={v}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-soul-lotus/20 text-bg-deep text-sm lg:text-base font-semibold mb-6 font-science">
              Area of Expertise
            </span>
          </motion.div>
          <SectionHeading
            title="Adolescence Counselling"
            subtitle={adolescenceIntro}
          />

          {/* Evidence-based tag */}
          <motion.div variants={v} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-soul-sage/15 text-science-teal border border-science-teal/20">
              <LeafIcon className="text-soul-sage" size={16} />
              Evidence-based, best-practice therapy support
            </span>
          </motion.div>

          {/* Bullet points with 🌸 markers */}
          <motion.ul variants={v} className="space-y-3 mb-8">
            <li
              className="flex items-start gap-3 text-base lg:text-lg font-science"
              style={{ color: "#4a4a4a" }}
            >
              <span className="mt-0.5">🌸</span>
              <span>
                Compassionate support through academic pressure and identity
                exploration for best growth
              </span>
            </li>
            <li
              className="flex items-start gap-3 text-base lg:text-lg font-science"
              style={{ color: "#4a4a4a" }}
            >
              <span className="mt-0.5">🌸</span>
              <span>
                Building emotional intelligence and healthy coping strategies
                for the best outcomes
              </span>
            </li>
            <li
              className="flex items-start gap-3 text-base lg:text-lg font-science"
              style={{ color: "#4a4a4a" }}
            >
              <span className="mt-0.5">🌸</span>
              <span>
                Navigating digital-age challenges with mindfulness and
                best-practice resilience
              </span>
            </li>
          </motion.ul>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-8 w-full">
            {adolescenceTags.map((tag) => (
              <motion.div
                key={tag}
                variants={v}
                transition={
                  animate
                    ? { type: "spring", stiffness: 300, damping: 20 }
                    : { duration: 0 }
                }
                className="flex justify-center"
              >
                <Badge className="bg-white border border-soul-sage/20 shadow-sm hover:shadow-md transition-all duration-500 py-2 px-4 text-sm md:text-base max-w-full text-center whitespace-pre-line w-full">
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
