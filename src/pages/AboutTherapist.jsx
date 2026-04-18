import { motion } from "framer-motion";
import { Link } from "react-router";
import SEOHead from "../components/ui/SEOHead";
import Button from "../components/ui/Button";
import therapistPlaceholder from "../assets/images/therapist-placeholder.svg";
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
          View Full Homepage
        </Link>
      </div>

      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-8 lg:grid-cols-[360px,1fr] lg:gap-12">
        <motion.aside
          initial="hidden"
          animate="visible"
          variants={v}
          transition={defaultTransition}
          className="rounded-4xl border border-soul-sage/20 bg-white/80 p-4 shadow-sm"
        >
          <img
            src={therapistPlaceholder}
            alt="Placeholder for Rupinder Kaur profile"
            className="h-56 w-full rounded-3xl border border-soul-sage/15 object-cover object-center sm:h-64"
          />
          <p className="mt-3 text-xs leading-relaxed text-science-slate/70 font-science">
            Placeholder image: replace
            src/assets/images/therapist-placeholder.svg with the therapist's
            profile photo.
          </p>

          <h1 className="mt-5 font-soul text-3xl text-bg-deep">
            Rupinder Kaur
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-science-slate font-science">
            {accreditationText}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {clinicalTraining.slice(0, 4).map((item) => (
              <span
                key={item}
                className="rounded-full border border-soul-sage/30 bg-soul-sage/10 px-3 py-1 text-xs font-medium text-bg-deep"
              >
                {item}
              </span>
            ))}
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
              <ul className="mt-4 space-y-2 text-sm text-science-slate font-science">
                {clinicalTraining.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-soul-sage" />
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
                    className="rounded-full border border-soul-sage/35 bg-white/70 px-3 py-1 text-xs font-medium text-bg-deep"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-soul-sage/25 bg-white/75 p-5">
            <p className="text-sm text-science-slate font-science">
              Ready to connect with Rupinder Kaur?
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button variant="whatsapp" href={whatsappUrl} className="text-sm">
                Chat on WhatsApp
              </Button>
              <Button
                variant="ghost"
                href={`mailto:${email}`}
                className="text-sm"
              >
                 {email}
              </Button>
              <Button
                variant="ghost"
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="text-sm"
              >
                Call {phone}
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
