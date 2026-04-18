import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Ticker from "../ui/Ticker";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingBookingButton from "../ui/FloatingBookingButton";

export default function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;

    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const targetId = hash.replace("#", "");
    let retries = 0;

    // Retry briefly so hash navigation still works while lazy sections mount.
    const scrollToHash = () => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      if (retries < 12) {
        retries += 1;
        window.setTimeout(scrollToHash, 80);
      }
    };

    scrollToHash();
  }, [location.pathname, location.hash]);

  return (
    <div
      className="relative min-h-screen flex flex-col"
      style={{ background: "var(--color-bg-primary)" }}
    >
      <Ticker />
      <Navbar />

      <main className="flex-1 flex flex-col z-10 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-1 flex flex-col"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <FloatingBookingButton />
    </div>
  );
}
