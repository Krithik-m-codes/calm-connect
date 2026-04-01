import { motion } from "framer-motion";
import { hero, heroImages, whatsappUrl } from "../data/siteConfig";
import Button from "../components/ui/Button";
import QueryForm from "../components/ui/QueryForm";
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
    <section className="relative z-1 px-[clamp(20px,6vw,80px)] pt-28 lg:pt-32 pb-24 flex flex-col justify-center min-h-[90vh]">
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
            className="text-sm lg:text-base font-semibold uppercase tracking-[0.18em] text-brand-dark mb-4"
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
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-heading text-[clamp(2.8rem,6vw,5rem)] leading-[1.05] mb-8 text-brand-dark"
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
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-wrap gap-4 mt-2"
          >
            <Button
              variant="whatsapp"
              href={whatsappUrl}
              className="text-base py-4 px-8"
            >
              Book on WhatsApp
            </Button>
            <Button variant="secondary" className="text-base py-4 px-8">
              Call Clinic
            </Button>
          </motion.div>
        </motion.div>

        {/* Images side */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="grid gap-6 relative mt-12 lg:mt-0"
        >
          <motion.div
            variants={v}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-4xl bg-white/80 p-4 shadow-[0_30px_60px_rgba(24,45,41,0.08)] backdrop-blur-sm mx-auto w-full max-w-lg relative z-10"
          >
            <img
              src={heroImages.main}
              alt="Therapist in a calm studio"
              className="w-full rounded-3xl h-96 lg:h-128 object-cover"
            />
            <p className="mt-3 text-sm lg:text-base font-medium text-brand-muted text-center">
              Safe, welcoming, and grounded.
            </p>
          </motion.div>
          <motion.div
            variants={v}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="absolute lg:bottom-12 lg:-left-12 -bottom-6 -left-2 rounded-3xl bg-white/90 p-3 shadow-[0_20px_40px_rgba(24,45,41,0.12)] backdrop-blur-md hidden md:block w-48 lg:w-64 z-20"
          >
            <img
              src={heroImages.secondary}
              alt="Supportive conversation"
              className="w-full rounded-2xl h-36 lg:h-45 object-cover"
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
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full max-w-7xl mx-auto mt-16 lg:mt-24 relative z-30"
      >
        <QueryForm />
      </motion.div>
    </section>
  );
}
