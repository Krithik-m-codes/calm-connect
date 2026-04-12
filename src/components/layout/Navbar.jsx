import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";
import { whatsappUrl } from "../../data/siteConfig";
import logo from "../../assets/images/logo-no-bg.webp";
import Button from "../ui/Button";
import {
  useMotionSafe,
  fadeDown,
  defaultTransition,
  noMotion,
} from "../../utils/motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(() =>
    typeof window !== "undefined" ? window.location.hash : "",
  );
  const animate = useMotionSafe();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinkClass = (active) =>
    `relative border-b-2 pb-1 transition-all duration-500 ${
      active
        ? "border-soul-sage font-semibold text-bg-deep"
        : "border-transparent text-bg-deep hover:border-soul-sage"
    }`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome || typeof window === "undefined") {
      setCurrentHash("");
      return;
    }

    const syncHash = () => setCurrentHash(window.location.hash || "#expertise");
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [isHome, location.pathname]);

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={animate ? fadeDown : noMotion}
      transition={defaultTransition}
      className={`sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 px-[clamp(20px,6vw,80px)] py-4 transition-all duration-500 ${
        scrolled
          ? "bg-soul-cream/80 shadow-md backdrop-blur-lg"
          : "bg-soul-cream/50 backdrop-blur-md"
      }`}
      style={{
        backdropFilter: scrolled ? "blur(8px)" : "blur(4px)",
      }}
    >
      {/* Brand with lotus */}
      <Link
        to="/"
        className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-all duration-500"
      >
        <span className="relative h-14 w-14 shrink-0 overflow-hidden sm:h-16 sm:w-16">
          <img
            src={logo}
            alt="Kalm Konnect logo"
            className="h-full w-full scale-125 object-contain"
          />
        </span>
        <p className="m-0 font-science text-base font-semibold leading-none tracking-[0.08em] text-bg-deep sm:text-lg lg:text-xl">
          Kalm Konnect
        </p>
      </Link>

      {/* Mobile menu button */}
      <button
        className="lg:hidden p-2 text-bg-deep"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          {menuOpen ? (
            <path d="M6 6l12 12M6 18L18 6" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>

      {/* Nav links */}
      <div
        className={`flex items-center gap-6 text-sm lg:text-base font-medium tracking-[0.05em] ${
          menuOpen
            ? "flex-col w-full items-start pt-4 border-t border-soul-sage/20 lg:flex-row lg:w-auto lg:items-center lg:border-0 lg:pt-0"
            : "hidden lg:flex"
        }`}
      >
        <a
          href={isHome ? "#expertise" : "/#expertise"}
          className={navLinkClass(
            isHome && (currentHash === "#expertise" || currentHash === ""),
          )}
          onClick={() => {
            setCurrentHash("#expertise");
            setMenuOpen(false);
          }}
        >
          Expertise
        </a>
        <Link
          to="/about-me"
          className={navLinkClass(location.pathname === "/about-me")}
          onClick={() => setMenuOpen(false)}
        >
          About Me
        </Link>
        <a
          href={isHome ? "#testimonials" : "/#testimonials"}
          className={navLinkClass(isHome && currentHash === "#testimonials")}
          onClick={() => {
            setCurrentHash("#testimonials");
            setMenuOpen(false);
          }}
        >
          Stories
        </a>
        <Link
          to="/free-resources"
          className={navLinkClass(location.pathname === "/free-resources")}
          onClick={() => setMenuOpen(false)}
        >
          Free Resources
        </Link>
        <Link
          to="/contact"
          className={navLinkClass(location.pathname === "/contact")}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
        <Button
          variant="whatsapp"
          href={whatsappUrl}
          className="text-sm lg:text-base"
        >
          Book on WhatsApp
        </Button>
      </div>
    </motion.nav>
  );
}
