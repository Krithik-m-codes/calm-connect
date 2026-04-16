import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Magic Dust Particles Component
const Sparkles = () => {
  const sparkles = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    color: i % 2 === 0 ? "#C9A84C" : "#FAF6F0", // Gold and Cream
    size: Math.random() * 4 + 2,
    xOffset: Math.random() * 120 - 60,
    yOffset: Math.random() * -100 - 30,
    delay: Math.random() * 1.5,
    duration: Math.random() * 2 + 1.5,
  }));

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: s.size,
            height: s.size,
            backgroundColor: s.color,
            boxShadow: `0 0 8px ${s.color}`,
          }}
          initial={{ opacity: 0, x: "-50%", y: "-50%", scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: `calc(-50% + ${s.xOffset}px)`,
            y: `calc(-50% + ${s.yOffset}px)`,
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </motion.div>
  );
};

export default function FloatingBookingButton() {
  const [isHovered, setIsHovered] = useState(false);
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;

  const handleClick = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: calendlyUrl,
      });
      return;
    }

    window.open(calendlyUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-99 flex items-center justify-center">
      {/* Ambient Pulsing Glow behind the button */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-full bg-soul-gold/40 blur-2xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.5,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center justify-center overflow-hidden rounded-full p-0.5 shadow-2xl focus:outline-none"
      >
        {/* Aceternity Magic Border / Spinning Gradient */}
        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2D4A35_0%,#C9A84C_50%,#2D4A35_100%)]" />

        {/* Inner button content covering the center of spinning gradient to create border effect */}
        <div className="relative z-10 flex h-full w-full items-center justify-center gap-3 rounded-full bg-bg-deep px-5 py-3 text-soul-cream backdrop-blur-3xl sm:px-6 sm:py-4 transition-colors group-hover:bg-[#34573f]">
          {/* Shimmer sweep glass effect inside */}
          <motion.div
            className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-soul-cream/10 to-transparent z-0"
            animate={
              isHovered ? { translateX: "100%" } : { translateX: "-100%" }
            }
            transition={{ duration: 1, ease: "easeInOut" }}
          />

          {/* Magic Dust sparkles on hover */}
          <AnimatePresence>{isHovered && <Sparkles />}</AnimatePresence>

          <motion.span
            className="z-10 text-xl leading-none drop-shadow-md sm:text-2xl"
            animate={{
              scale: isHovered ? 1.4 : [1, 1.4, 1.4, 1.4, 1],
              rotate: isHovered
                ? [0, 20, -15, 20, -10, 15, 0]
                : [0, 20, -15, 20, -15, 20, 0],
            }}
            transition={{
              duration: isHovered ? 1.5 : 2.5,
              repeat: Infinity,
              repeatDelay: isHovered ? 0 : 3.5,
              ease: "easeInOut",
            }}
            style={{ originX: 0.7, originY: 0.7 }}
          >
            👋
          </motion.span>

          <span className="z-10 font-heading text-base font-semibold tracking-wide sm:text-lg">
            Schedule time with me
          </span>
        </div>
      </motion.button>
    </div>
  );
}
