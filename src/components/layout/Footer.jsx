import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  Mail,
  Phone,
  Clock3,
  MapPin,
  ShieldCheck,
  FileText,
  LifeBuoy,
} from "lucide-react";
import { siteName, email, phone, hours, address } from "../../data/siteConfig";
import { LotusWatermark } from "../ui/BotanicalIcons";
import {
  useMotionSafe,
  fadeUp,
  defaultTransition,
  noMotion,
} from "../../utils/motion";

export default function Footer() {
  const animate = useMotionSafe();
  const v = animate ? fadeUp : noMotion;

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={
        animate ? { visible: { transition: { staggerChildren: 0.1 } } } : {}
      }
      className="relative overflow-hidden px-[clamp(20px,6vw,80px)] py-12 pb-8"
      style={{ backgroundColor: "var(--color-bg-deep)" }}
    >
      {/* Lotus watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <LotusWatermark className="text-white/50" />
      </div>

      {/* Tagline */}
      <motion.div
        variants={v}
        transition={defaultTransition}
        className="relative z-10 text-center mb-10"
      >
        <p
          className="font-soul italic text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
          style={{ color: "var(--color-soul-cream)" }}
        >
          "Healing is not just about reducing symptoms - it's about
          rediscovering your best joy, balance, and strength."
        </p>
      </motion.div>

      <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 text-white/90">
        <motion.div variants={v} transition={defaultTransition}>
          <h3
            className="font-soul text-lg mt-0"
            style={{ color: "var(--color-soul-cream)" }}
          >
            {siteName}
          </h3>
        </motion.div>

        <motion.div
          variants={v}
          transition={defaultTransition}
          className="flex flex-col gap-3"
        >
          <p className="text-sm opacity-80 flex items-center gap-2 transition-all duration-500 hover:opacity-100 hover:translate-x-0.5">
            <Mail size={15} aria-hidden="true" />
            {email}
          </p>
          <p className="text-sm opacity-80 flex items-center gap-2 transition-all duration-500 hover:opacity-100 hover:translate-x-0.5">
            <Phone size={15} aria-hidden="true" />
            {phone}
          </p>
        </motion.div>

        <motion.div
          variants={v}
          transition={defaultTransition}
          className="flex flex-col gap-3"
        >
          <p className="text-sm opacity-80 flex items-center gap-2 transition-all duration-500 hover:opacity-100 hover:translate-x-0.5">
            <Clock3 size={15} aria-hidden="true" />
            {hours}
          </p>
          <p className="text-sm opacity-80 flex items-start gap-2 transition-all duration-500 hover:opacity-100 hover:translate-x-0.5">
            <MapPin size={15} aria-hidden="true" className="mt-0.5 shrink-0" />
            <span>{address}</span>
          </p>
        </motion.div>

        <motion.div
          variants={v}
          transition={defaultTransition}
          className="space-y-3 flex flex-col items-start"
        >
          <div className="flex flex-wrap gap-4">
            <Link
              to="/privacy"
              className="inline-flex items-center gap-1 text-sm underline underline-offset-2 transition-all duration-500 hover:text-soul-gold hover:-translate-y-0.5"
              style={{ color: "var(--color-soul-cream)" }}
            >
              <ShieldCheck size={14} aria-hidden="true" />
              Privacy
            </Link>
            <Link
              to="/terms"
              className="inline-flex items-center gap-1 text-sm underline underline-offset-2 transition-all duration-500 hover:text-soul-gold hover:-translate-y-0.5"
              style={{ color: "var(--color-soul-cream)" }}
            >
              <FileText size={14} aria-hidden="true" />
              Terms
            </Link>
            <Link
              to="/support"
              className="inline-flex items-center gap-1 text-sm underline underline-offset-2 transition-all duration-500 hover:text-soul-gold hover:-translate-y-0.5"
              style={{ color: "var(--color-soul-cream)" }}
            >
              <LifeBuoy size={14} aria-hidden="true" />
              Support
            </Link>
          </div>
          <p
            className="text-xs leading-relaxed mt-2"
            style={{ color: "rgba(250, 246, 240, 0.5)" }}
          >
            The information provided shall strictly be used for the purpose of
            counselling and therapy and not otherwise.
          </p>
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-medium"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "var(--color-soul-cream)",
            }}
          >
            DPDPA Compliant - Your Best Privacy is Guaranteed.
          </span>
        </motion.div>
      </div>

      <motion.div
        variants={v}
        transition={defaultTransition}
        className="relative z-10 mt-8 text-center"
      >
        <p
          className="text-xs uppercase tracking-[0.14em]"
          style={{ color: "rgba(250, 246, 240, 0.55)" }}
        >
          Powered by
        </p>
        <p
          className="mt-1 text-sm"
          style={{ color: "rgba(250, 246, 240, 0.8)" }}
        >
          Ashbourne and Wells Corp.
        </p>
        <p className="mt-1 text-sm">
          <a
            href="https://abwells.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-soul-gold transition-colors duration-500"
            style={{ color: "var(--color-soul-cream)" }}
          >
            abwells.ca
          </a>
        </p>
      </motion.div>

      {/* Gold line above copyright */}
      <div
        className="relative z-10 mt-10 pt-4"
        style={{ borderTop: "1px solid var(--color-soul-gold)" }}
      >
        <p
          className="text-center text-xs"
          style={{ color: "rgba(250, 246, 240, 0.4)" }}
        >
          © {new Date().getFullYear()} {siteName}. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
