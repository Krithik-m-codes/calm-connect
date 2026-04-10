import { motion } from "framer-motion";
import {
  contactHeading,
  contactSubheading,
  whatsappUrl,
  email,
} from "../data/siteConfig";
import { BotanicalDivider } from "../components/ui/BotanicalIcons";
import Button from "../components/ui/Button";
import {
  useMotionSafe,
  fadeUp,
  defaultTransition,
  noMotion,
} from "../utils/motion";

export default function Contact() {
  const animate = useMotionSafe();
  const v = animate ? fadeUp : noMotion;

  return (
    <section id="contact" className="px-[clamp(20px,6vw,80px)] py-24 pb-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={
          animate ? { visible: { transition: { staggerChildren: 0.12 } } } : {}
        }
        className="text-center"
      >
        <motion.div variants={v} transition={defaultTransition}>
          <BotanicalDivider className="mb-6" />
          <h2 className="font-soul text-[clamp(2.5rem,5vw,3.5rem)] leading-tight mb-4 text-bg-deep">
            {contactHeading}
          </h2>
          <p
            className="text-base lg:text-xl leading-relaxed max-w-2xl mx-auto font-science"
            style={{ color: "#6b6b6b" }}
          >
            {contactSubheading}
          </p>
        </motion.div>

        <motion.div
          variants={v}
          transition={defaultTransition}
          className="flex flex-wrap items-center justify-center gap-5 mt-8"
        >
          <Button
            variant="whatsapp"
            href={whatsappUrl}
            className="text-base lg:text-lg py-4 px-8"
            leafIcon
          >
            Message Me on WhatsApp
          </Button>
        </motion.div>

        <motion.div
          variants={v}
          transition={defaultTransition}
          className="mt-12 bg-white/50 backdrop-blur-sm border border-soul-sage rounded-2xl p-8 max-w-2xl mx-auto shadow-sm"
        >
          <h3 className="text-xl font-soul text-bg-deep mb-3">
            Visit Personally at Office
          </h3>
          <p className="font-science text-gray-600 leading-relaxed">
            I offer in-person sessions at my fully-equipped office, providing a
            safe and tranquil environment for profound healing.
          </p>
        </motion.div>

        <motion.p
          variants={v}
          transition={defaultTransition}
          className="mt-8 text-base lg:text-lg font-science"
          style={{ color: "#6b6b6b" }}
        >
          Prefer email? Write to me for best support at:{" "}
          <a
            href={`mailto:${email}`}
            className="underline underline-offset-4 hover:text-soul-gold transition-colors duration-500"
            style={{ color: "var(--color-soul-gold)" }}
          >
            {email}
          </a>
        </motion.p>
      </motion.div>
    </section>
  );
}
