import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";
import {
  Sparkles,
  UserRound,
  MessageCircle,
  BookOpen,
  Mail,
  Menu,
  X,
} from "lucide-react";
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
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const navLinkClass = (active) =>
    `relative inline-flex items-center gap-2 border-b-2 pb-1 transition-all duration-500 ${
      active
        ? "border-soul-sage font-semibold text-bg-deep"
        : "border-transparent text-bg-deep hover:border-soul-sage"
    }`;

  const handleSectionNavigation = (hash) => {
    setCurrentHash(hash);
    setMenuOpen(false);

    if (!isHome) {
      navigate({ pathname: "/", hash });
      return;
    }

    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", hash);
      return;
    }

    window.location.hash = hash;
  };

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
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Nav links */}
      <div
        className={`flex items-center gap-6 text-sm lg:text-base font-medium tracking-[0.05em] ${
          menuOpen
            ? "flex-col w-full items-start pt-4 border-t border-soul-sage/20 lg:flex-row lg:w-auto lg:items-center lg:border-0 lg:pt-0"
            : "hidden lg:flex"
        }`}
      >
        <Link
          to={{ pathname: "/", hash: "#expertise" }}
          className={navLinkClass(
            isHome && (currentHash === "#expertise" || currentHash === ""),
          )}
          onClick={(e) => {
            e.preventDefault();
            handleSectionNavigation("#expertise");
          }}
        >
          <Sparkles size={16} aria-hidden="true" />
          Expertise
        </Link>
        <Link
          to="/about-me"
          className={navLinkClass(location.pathname === "/about-me")}
          onClick={() => setMenuOpen(false)}
        >
          <UserRound size={16} aria-hidden="true" />
          About Me
        </Link>
        <Link
          to={{ pathname: "/", hash: "#testimonials" }}
          className={navLinkClass(isHome && currentHash === "#testimonials")}
          onClick={(e) => {
            e.preventDefault();
            handleSectionNavigation("#testimonials");
          }}
        >
          <MessageCircle size={16} aria-hidden="true" />
          Stories
        </Link>
        <Link
          to="/free-resources"
          className={navLinkClass(location.pathname === "/free-resources")}
          onClick={() => setMenuOpen(false)}
        >
          <BookOpen size={16} aria-hidden="true" />
          Free Resources
        </Link>
        <Link
          to="/contact"
          className={navLinkClass(location.pathname === "/contact")}
          onClick={() => setMenuOpen(false)}
        >
          <Mail size={16} aria-hidden="true" />
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
