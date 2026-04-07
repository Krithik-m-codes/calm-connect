import { motion } from "framer-motion";
import { testimonialsSubtitle } from "../data/siteConfig";
import { BotanicalDivider } from "../components/ui/BotanicalIcons";
import TestimonialSlider from "../components/ui/TestimonialSlider";
import {
  useMotionSafe,
  fadeUp,
  defaultTransition,
  noMotion,
} from "../utils/motion";

export default function Testimonials() {
  const animate = useMotionSafe();
  const v = animate ? fadeUp : noMotion;

  return (
    <section
      id="testimonials"
      className="px-[clamp(20px,6vw,80px)] py-12 -mt-4 relative overflow-hidden"
    >
      {/* Watercolor blob background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full -z-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(232, 196, 184, 0.2), transparent 70%)",
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={
          animate ? { visible: { transition: { staggerChildren: 0.15 } } } : {}
        }
      >
        <motion.div
          variants={v}
          transition={defaultTransition}
          className="text-center"
        >
          <BotanicalDivider className="mb-6" />
          <h2 className="font-soul text-[clamp(2.5rem,5vw,3.5rem)] leading-tight mb-4 text-bg-deep">
            Testimonials
          </h2>
          <p className="text-base lg:text-xl leading-relaxed max-w-2xl mx-auto font-science" style={{ color: "#6b6b6b" }}>
            {testimonialsSubtitle}
          </p>
        </motion.div>

        <motion.div variants={v} transition={defaultTransition}>
          <TestimonialSlider />
        </motion.div>
      </motion.div>
    </section>
  );
}
