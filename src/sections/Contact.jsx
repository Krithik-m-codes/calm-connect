import { motion } from "framer-motion";
import { Mail, Phone, Clock3, MapPin, MessageCircle } from "lucide-react";
import {
  contactHeading,
  contactSubheading,
  whatsappUrl,
  email,
  phone,
  hours,
  address,
} from "../data/siteConfig";
import { BotanicalDivider } from "../components/ui/BotanicalIcons";
import Button from "../components/ui/Button";
import PaymentQRReveal from "../components/ui/PaymentQRReveal";
import {
  useMotionSafe,
  fadeUp,
  defaultTransition,
  noMotion,
} from "../utils/motion";

export default function Contact() {
  const animate = useMotionSafe();
  const v = animate ? fadeUp : noMotion;

  const telHref = `tel:${phone.replace(/\s+/g, "")}`;

  return (
    <section id="contact" className="px-[clamp(20px,6vw,80px)] py-24 pb-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={
          animate ? { visible: { transition: { staggerChildren: 0.12 } } } : {}
        }
        className="mx-auto max-w-6xl"
      >
        <motion.div
          variants={v}
          transition={defaultTransition}
          className="text-center"
        >
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

        <div className="mt-12 grid grid-cols-1 items-stretch gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-10">
          <motion.div variants={v} transition={defaultTransition}>
            <PaymentQRReveal />
          </motion.div>

          <motion.div
            variants={v}
            transition={defaultTransition}
            className="flex h-full flex-col gap-7 rounded-4xl border border-soul-sage/20 bg-soul-cream p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(45,74,53,0.06)]"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-soul-sage/25 bg-white/70 px-4 py-1.5 text-xs uppercase tracking-[0.18em] font-science text-bg-deep/70">
                <MessageCircle
                  size={12}
                  aria-hidden="true"
                  className="text-soul-sage"
                />
                Reach Out
              </span>
              <h3 className="mt-4 font-soul text-3xl sm:text-4xl text-bg-deep">
                Get in Touch
              </h3>
              <p className="mt-2 font-science text-sm sm:text-base text-bg-deep/60">
                I'm here whenever you're ready — choose what feels easiest for
                you.
              </p>
            </div>

            <Button
              variant="whatsapp"
              href={whatsappUrl}
              className="w-full justify-center py-4 text-base lg:text-lg"
              leafIcon
            >
              Message Me on WhatsApp
            </Button>

            <ul className="flex flex-col divide-y divide-soul-sage/15">
              <li className="flex items-start gap-4 py-4">
                <span className="shrink-0 rounded-xl border border-soul-sage/20 bg-white p-2.5">
                  <Mail size={18} className="text-soul-sage" />
                </span>
                <div className="min-w-0 flex flex-col">
                  <span className="font-science text-[11px] uppercase tracking-[0.18em] text-bg-deep/50">
                    Email
                  </span>
                  <a
                    href={`mailto:${email}`}
                    className="break-all font-bridge text-bg-deep transition-colors duration-500 hover:text-soul-gold"
                  >
                    {email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4 py-4">
                <span className="shrink-0 rounded-xl border border-soul-sage/20 bg-white p-2.5">
                  <Phone size={18} className="text-soul-sage" />
                </span>
                <div className="flex flex-col">
                  <span className="font-science text-[11px] uppercase tracking-[0.18em] text-bg-deep/50">
                    Phone
                  </span>
                  <a
                    href={telHref}
                    className="font-bridge text-bg-deep transition-colors duration-500 hover:text-soul-gold"
                  >
                    {phone}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4 py-4">
                <span className="shrink-0 rounded-xl border border-soul-sage/20 bg-white p-2.5">
                  <Clock3 size={18} className="text-soul-sage" />
                </span>
                <div className="flex flex-col">
                  <span className="font-science text-[11px] uppercase tracking-[0.18em] text-bg-deep/50">
                    Hours
                  </span>
                  <span className="font-bridge text-bg-deep">{hours}</span>
                </div>
              </li>

              <li className="flex items-start gap-4 py-4">
                <span className="shrink-0 rounded-xl border border-soul-sage/20 bg-white p-2.5">
                  <MapPin size={18} className="text-soul-sage" />
                </span>
                <div className="flex flex-col">
                  <span className="font-science text-[11px] uppercase tracking-[0.18em] text-bg-deep/50">
                    Visit In Person
                  </span>
                  <span className="font-bridge text-bg-deep">{address}</span>
                  <span className="mt-1 font-science text-sm text-bg-deep/60">
                    A safe, fully-equipped office for tranquil, in-person
                    healing.
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
