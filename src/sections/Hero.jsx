import { motion } from "framer-motion";
import { hero, heroImages, whatsappUrl } from "../data/siteConfig";
import Button from "../components/ui/Button";
import QueryForm from "../components/ui/QueryForm";
import { LotusIcon, LeafCluster } from "../components/ui/BotanicalIcons";
import {
  useMotionSafe,
  fadeUp,
  defaultTransition,
  noMotion,
} from "../utils/motion";

export default function Hero() {
  const animate = useMotionSafe();
  const v = animate ? fadeUp : noMotion;

  return (
    <section
      className="relative z-1 px-[clamp(20px,6vw,80px)] pt-28 lg:pt-32 pb-24 flex flex-col justify-center min-h-[90vh] overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 30% 20%, #FAF6F0 0%, #F0E8E0 70%, #F7EDE8 100%)",
      }}
    >
      {/* Floating decorative elements */}
      <div className="absolute bottom-12 left-8 text-soul-lotus/30 animate-float-gentle pointer-events-none">
        <LotusIcon size={64} />
      </div>
      <div className="absolute top-20 right-12 pointer-events-none opacity-40">
        <LeafCluster className="text-soul-sage" />
      </div>

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 w-full max-w-7xl mx-auto mb-12">
        {/* Copy side */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="flex flex-col justify-center lg:pr-10"
        >
          <motion.p
            variants={v}
            transition={defaultTransition}
            className="text-sm lg:text-base font-semibold uppercase tracking-[0.18em] text-soul-sage mb-4 font-science"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            variants={
              animate
                ? {
                    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }
                : noMotion
            }
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-soul italic text-[clamp(2.8rem,6vw,5rem)] leading-[1.05] mb-8 text-bg-deep"
          >
            {hero.headline}
          </motion.h1>

          <motion.div
            variants={
              animate
                ? {
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: { opacity: 1, scale: 1 },
                  }
                : noMotion
            }
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-wrap gap-4 mt-2"
          >
            <Button
              variant="whatsapp"
              href={whatsappUrl}
              className="text-base py-4 px-8"
              leafIcon
            >
              Book on WhatsApp
            </Button>
            <Button variant="secondary" className="text-base py-4 px-8">
              Call Clinic
            </Button>
          </motion.div>
        </motion.div>

        {/* Images side — organic blob shapes */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="grid gap-6 relative mt-12 lg:mt-0"
        >
          <motion.div
            variants={v}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative mx-auto w-full max-w-lg z-10"
          >
            {/* Blush shadow behind blob */}
            <div
              className="absolute inset-4 rounded-full blur-3xl pointer-events-none"
              style={{ background: "rgba(232, 196, 184, 0.3)" }}
            />
            <img
              src={heroImages.main}
              alt="Therapist in a calm studio"
              className="w-full h-96 lg:h-128 object-cover relative z-10"
              style={{
                borderRadius: "60% 40% 50% 70% / 50% 60% 40% 50%",
              }}
            />
            <p
              className="mt-5 text-sm lg:text-base font-medium text-center font-bridge"
              style={{ color: "#5a5a5a" }}
            >
              Safe, welcoming, grounded, and built for your best care.
            </p>
          </motion.div>
          <motion.div
            variants={v}
            transition={{
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2,
            }}
            className="absolute lg:bottom-12 lg:-left-12 -bottom-6 -left-2 hidden md:block w-48 lg:w-64 z-20"
          >
            {/* Blush shadow */}
            <div
              className="absolute inset-2 rounded-full blur-2xl pointer-events-none"
              style={{ background: "rgba(232, 196, 184, 0.25)" }}
            />
            <img
              src={heroImages.secondary}
              alt="Supportive conversation"
              className="w-full h-36 lg:h-45 object-cover relative z-10"
              style={{
                borderRadius: "40% 60% 70% 30% / 60% 40% 50% 50%",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Full-width Query Form below Hero Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={v}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full max-w-7xl mx-auto mt-16 lg:mt-24 relative z-30"
      >
        <QueryForm />
      </motion.div>
    </section>
  );
}
