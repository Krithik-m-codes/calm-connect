import { motion } from "framer-motion";
import { whatsappUrl } from "../data/siteConfig";
import Button from "../components/ui/Button";
import { LotusIcon } from "../components/ui/BotanicalIcons";
import {
  useMotionSafe,
  fadeUp,
  defaultTransition,
  noMotion,
} from "../utils/motion";

export default function StartToday() {
  const animate = useMotionSafe();
  const v = animate ? fadeUp : noMotion;

  return (
    <section className="px-4 md:px-8 py-20 mb-2 w-full max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={
          animate ? { visible: { transition: { staggerChildren: 0.15 } } } : {}
        }
        className="w-full relative overflow-hidden rounded-[2.5rem] px-6 py-20 text-center"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(232, 196, 184, 0.3), var(--color-soul-cream) 70%)",
        }}
      >
        {/* Floating lotus SVGs */}
        <div className="absolute top-10 left-10 text-soul-lotus/20 animate-float-gentle pointer-events-none">
          <LotusIcon size={80} />
        </div>
        <div
          className="absolute bottom-10 right-10 text-soul-sage/20 animate-float-gentle pointer-events-none"
          style={{ animationDelay: "3s" }}
        >
          <LotusIcon size={60} />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <motion.h2
            variants={v}
            transition={defaultTransition}
            className="font-soul italic text-4xl md:text-5xl lg:text-7xl text-bg-deep tracking-tight mb-6"
          >
            Your best healing journey begins with one step.
          </motion.h2>

          <motion.p
            variants={v}
            transition={defaultTransition}
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-science"
            style={{ color: "#5a5a5a" }}
          >
            Book a free 15-minute consultation for best-fit support - no
            pressure, just presence.
          </motion.p>

          <motion.div variants={v} transition={defaultTransition}>
            <Button
              variant="primary"
              href={whatsappUrl}
              leafIcon
              className={`text-base lg:text-lg font-medium px-12 py-5 rounded-full shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-0.5 ${animate ? "animate-pulse-soft" : ""}`}
            >
              Book Your Best Session
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
