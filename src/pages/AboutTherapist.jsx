import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  ArrowLeft,
  MessageCircle,
  Mail,
  Phone,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import SEOHead from "../components/ui/SEOHead";
import Button from "../components/ui/Button";
// import profilePicture from "../assets/images/author/profile-picture.png";
import profilePicture from "../assets/images/therapist-placeholder.svg";
import { hero, whatsappUrl, email, phone } from "../data/siteConfig";
import { accreditationText, clinicalTraining } from "../data/qualifications";
import { techniques } from "../data/techniques";
import {
  useMotionSafe,
  fadeUp,
  defaultTransition,
  noMotion,
} from "../utils/motion";

const featuredTechniques = techniques.slice(0, 8);

export default function AboutTherapist() {
  const animate = useMotionSafe();
  const v = animate ? fadeUp : noMotion;

  return (
    <div className="pt-24 pb-20 px-[clamp(20px,6vw,80px)]">
      <SEOHead
        title="About Me — Rupinder Kaur"
        description="Meet Rupinder Kaur, an internationally accredited CBT practitioner and hypnotherapist at KalmKonnect. Learn about her therapeutic approach, training, and areas of support."
      />

      <div className="mx-auto mb-6 max-w-6xl">
        <Link
          to="/"
          className="inline-flex items-center rounded-full border border-soul-sage/35 bg-white/80 px-4 py-2 text-sm font-medium text-bg-deep transition-all duration-500 hover:-translate-y-0.5 hover:border-soul-sage"
        >
          <ArrowLeft size={16} aria-hidden="true" className="mr-2" />
          View Full Homepage
        </Link>
      </div>

      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-8 lg:grid-cols-[360px,1fr] lg:gap-12">
        <motion.aside
          initial="hidden"
          animate="visible"
          variants={v}
          transition={defaultTransition}
          className="relative h-fit overflow-hidden rounded-4xl border border-soul-sage/20 bg-linear-to-br from-soul-cream via-white to-bg-sage-light/40 p-6 shadow-[0_20px_60px_rgba(45,74,53,0.08)] sm:p-7"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -right-16 h-48 w-48 rounded-full bg-soul-gold/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-soul-sage/15 blur-3xl"
          />

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 -m-3 rounded-full bg-linear-to-br from-soul-gold/30 via-soul-sage/20 to-soul-blush/20 blur-xl"
              />
              <div
                className="relative rounded-full p-0.75"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--color-soul-gold) 0%, var(--color-soul-sage) 50%, var(--color-soul-blush) 100%)",
                }}
              >
                <div className="rounded-full bg-white p-1.5">
                  <img
                    src={profilePicture}
                    alt="Rupinder Kaur, internationally accredited CBT practitioner and hypnotherapist"
                    className="h-40 w-40 rounded-full object-cover object-center sm:h-44 sm:w-44"
                  />
                </div>
              </div>
              <span
                aria-hidden="true"
                className="absolute bottom-2 right-2 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-soul-sage shadow-md"
              >
                <span className="h-2 w-2 rounded-full bg-white animate-pulse-soft" />
              </span>
            </div>

            <span className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-soul-sage/25 bg-white/80 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-science text-bg-deep/70">
              <Sparkles
                size={10}
                aria-hidden="true"
                className="text-soul-gold"
              />
              Available for sessions
            </span>

            <h1 className="mt-4 font-soul text-3xl text-bg-deep">
              Rupinder Kaur
            </h1>
            <p className="mt-2 max-w-[18rem] text-sm leading-relaxed text-science-slate font-science">
              {accreditationText}
            </p>
          </div>

          <div className="relative z-10 mt-6 flex flex-wrap justify-center gap-2">
            {clinicalTraining.slice(0, 4).map((item) => (
              <span
                key={item}
                className="rounded-full border border-soul-sage/30 bg-soul-sage/10 px-3 py-1 text-xs font-medium text-bg-deep"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="relative z-10 mt-6 grid grid-cols-3 gap-2 border-t border-soul-sage/15 pt-5 text-center">
            <div>
              <p className="font-soul text-2xl text-bg-deep">10+</p>
              <p className="font-science text-[10px] uppercase tracking-wider text-bg-deep/55">
                Yrs Practice
              </p>
            </div>
            <div className="border-x border-soul-sage/15">
              <p className="font-soul text-2xl text-bg-deep">7</p>
              <p className="font-science text-[10px] uppercase tracking-wider text-bg-deep/55">
                Modalities
              </p>
            </div>
            <div>
              <p className="font-soul text-2xl text-bg-deep">∞</p>
              <p className="font-science text-[10px] uppercase tracking-wider text-bg-deep/55">
                Care &amp; Empathy
              </p>
            </div>
          </div>
        </motion.aside>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={v}
          transition={defaultTransition}
          className="rounded-4xl border border-soul-sage/20 bg-white/80 p-6 sm:p-8 lg:p-10"
        >
          <p className="font-science text-xs font-semibold uppercase tracking-[0.12em] text-soul-sage">
            About Me
          </p>
          <h2 className="mt-2 font-soul text-4xl leading-tight text-bg-deep sm:text-5xl">
            Hi, I am Rupinder Kaur
          </h2>

          <div className="mt-5">
            <Button
              variant="whatsapp"
              href={whatsappUrl}
              className="text-sm sm:text-base"
            >
              Book Session With Rupinder
            </Button>
          </div>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-science-slate font-bridge">
            <p>{hero.whomIHelpBody}</p>
            <p>{hero.journeyBody}</p>
          </div>

          <div className="mt-8 grid gap-8 xl:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl text-bg-deep">
                Core Training
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-science-slate font-science">
                {clinicalTraining.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={16}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-soul-sage"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-2xl text-bg-deep">
                Therapeutic Techniques
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {featuredTechniques.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-soul-sage/35 bg-white/70 px-3 py-1 text-xs font-medium text-bg-deep transition-all duration-500 hover:-translate-y-0.5 hover:border-soul-sage hover:bg-soul-sage/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-soul-sage/25 bg-linear-to-br from-soul-cream via-white to-bg-sage-light/40 p-6 sm:p-7">
            <div className="flex flex-col gap-2">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-soul-sage/25 bg-white/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-science text-bg-deep/70">
                <MessageCircle
                  size={10}
                  aria-hidden="true"
                  className="text-soul-sage"
                />
                Connect Now
              </span>
              <h3 className="font-soul text-2xl text-bg-deep">
                Ready to begin your journey with Rupinder?
              </h3>
              <p className="font-science text-sm text-science-slate/80">
                Pick whichever feels easiest — most clients hear back within a
                few hours.
              </p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-soul-sage/30 bg-white/85 p-3.5 transition-all duration-500 hover:-translate-y-0.5 hover:border-soul-sage hover:shadow-[0_10px_24px_rgba(122,158,126,0.15)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-soul-sage/15 text-soul-sage transition-colors duration-500 group-hover:bg-soul-sage group-hover:text-white">
                  <MessageCircle size={18} aria-hidden="true" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="font-science text-[10px] uppercase tracking-[0.18em] text-bg-deep/55">
                    WhatsApp
                  </span>
                  <span className="truncate font-bridge text-sm text-bg-deep">
                    Chat instantly
                  </span>
                </span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Call or message ${phone} on WhatsApp`}
                className="group flex items-center gap-3 rounded-2xl border border-soul-sage/30 bg-white/85 p-3.5 transition-all duration-500 hover:-translate-y-0.5 hover:border-soul-sage hover:shadow-[0_10px_24px_rgba(122,158,126,0.15)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-soul-sage/15 text-soul-sage transition-colors duration-500 group-hover:bg-soul-sage group-hover:text-white">
                  <Phone size={18} aria-hidden="true" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="font-science text-[10px] uppercase tracking-[0.18em] text-bg-deep/55">
                    Call on WhatsApp
                  </span>
                  <span className="truncate font-bridge text-sm text-bg-deep">
                    {phone}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${email}`}
                aria-label={`Send an email to ${email}`}
                className="group flex items-center gap-3 rounded-2xl border border-soul-sage/30 bg-white/85 p-3.5 transition-all duration-500 hover:-translate-y-0.5 hover:border-soul-sage hover:shadow-[0_10px_24px_rgba(122,158,126,0.15)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-soul-sage/15 text-soul-sage transition-colors duration-500 group-hover:bg-soul-sage group-hover:text-white">
                  <Mail size={18} aria-hidden="true" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="font-science text-[10px] uppercase tracking-[0.18em] text-bg-deep/55">
                    Email
                  </span>
                  <span className="truncate font-bridge text-sm text-bg-deep">
                    {email}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
