// Shared animation variants and reduced-motion hook — Science & Soul gentle feel
import { useReducedMotion } from "framer-motion";

export function useMotionSafe() {
  const prefersReduced = useReducedMotion();
  return !prefersReduced;
}

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export const springPop = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
};

// Slow, gentle, never SaaS-snappy
export const defaultTransition = {
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94],
  delay: 0.1,
};

export const gentleTransition = {
  duration: 0.8,
  ease: [0.25, 0.46, 0.45, 0.94],
};

export const stagger = (delay = 0.18) => ({
  visible: { transition: { staggerChildren: delay } },
});

// Returns static (no-animation) variant if reduced motion is preferred
export const noMotion = {
  hidden: { opacity: 1, y: 0, scale: 1 },
  visible: { opacity: 1, y: 0, scale: 1 },
};
