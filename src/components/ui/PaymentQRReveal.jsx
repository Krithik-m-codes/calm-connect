import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScanLine, Sparkles, X } from "lucide-react";
import paytmQR from "../../assets/payment-qr-codes/paytm.jpeg";
import { LotusIcon } from "./BotanicalIcons";

export default function PaymentQRReveal() {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="relative h-full w-full">
      <div className="relative h-full overflow-hidden rounded-4xl border border-soul-sage/20 bg-linear-to-br from-soul-cream via-white to-bg-sage-light/40 p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(45,74,53,0.08)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-20 h-56 w-56 rounded-full bg-soul-gold/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-16 h-64 w-64 rounded-full bg-soul-sage/15 blur-3xl"
        />

        <div className="relative z-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-soul-sage/25 bg-white/70 px-4 py-1.5 text-xs uppercase tracking-[0.18em] font-science text-bg-deep/70">
            <Sparkles
              size={12}
              aria-hidden="true"
              className="text-soul-gold"
            />
            Instant Payment
          </span>
          <h3 className="mt-4 font-soul text-3xl sm:text-4xl leading-tight text-bg-deep">
            Pay Securely with a Scan
          </h3>
          <p className="mx-auto mt-2 max-w-sm font-science text-sm sm:text-base text-bg-deep/60">
            For in-person sessions or instant transfers — tap to reveal the QR.
          </p>
        </div>

        <div className="relative z-10 mt-8 flex min-h-[360px] items-center justify-center sm:min-h-[440px]">
          <AnimatePresence mode="wait" initial={false}>
            {!showQR ? (
              <motion.button
                key="collapsed"
                type="button"
                onClick={() => setShowQR(true)}
                aria-label="Reveal payment QR code"
                className="group relative flex aspect-square w-full max-w-[22rem] cursor-pointer flex-col items-center justify-center gap-5 overflow-hidden rounded-[1.75rem] border-2 border-dashed border-soul-sage/40 bg-white/60 backdrop-blur-sm transition-all duration-500 hover:border-soul-sage hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-soul-gold/60 focus:ring-offset-2"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92, filter: "blur(6px)" }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -inset-x-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-soul-gold/20 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer-sweep"
                />

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -m-3 rounded-full bg-soul-gold/25 blur-2xl"
                  />
                  <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-soul-sage/30 bg-white shadow-md">
                    <LotusIcon size={42} className="text-soul-sage" />
                  </span>
                </motion.div>

                <div className="relative px-6 text-center">
                  <p className="font-soul text-2xl text-bg-deep">
                    Tap to Reveal
                  </p>
                  <p className="mt-2 inline-flex items-center gap-1.5 font-science text-[11px] uppercase tracking-[0.22em] text-bg-deep/55">
                    <ScanLine size={12} aria-hidden="true" />
                    Payment QR Code
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-4 right-4 h-2 w-2 rounded-full bg-soul-gold/70 shadow-[0_0_12px_rgba(201,168,76,0.6)] animate-pulse-soft"
                />
              </motion.button>
            ) : (
              <motion.div
                key="revealed"
                initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.92, filter: "blur(6px)" }}
                transition={{
                  type: "spring",
                  stiffness: 110,
                  damping: 18,
                }}
                className="relative flex w-full max-w-[22rem] flex-col items-center"
              >
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-soul-gold/20 via-soul-sage/15 to-soul-blush/15 blur-2xl"
                />

                <div
                  className="relative w-full rounded-[1.85rem] p-[2px] animate-shine-border"
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, var(--color-soul-gold) 0%, var(--color-soul-sage) 35%, var(--color-soul-blush) 65%, var(--color-soul-gold) 100%)",
                    backgroundSize: "220% 220%",
                  }}
                >
                  <div className="rounded-[1.7rem] bg-white p-3 sm:p-4">
                    <motion.img
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.18, duration: 0.55 }}
                      src={paytmQR}
                      alt="Scan with any UPI app to pay"
                      className="aspect-square w-full rounded-2xl object-contain"
                    />
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32, duration: 0.45 }}
                  className="mt-5 flex flex-col items-center gap-1 text-center"
                >
                  <p className="font-soul text-xl text-bg-deep">
                    Scan with any UPI app
                  </p>
                  <p className="font-science text-[11px] uppercase tracking-[0.22em] text-soul-sage">
                    Paytm · GPay · PhonePe
                  </p>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45, duration: 0.4 }}
                  type="button"
                  onClick={() => setShowQR(false)}
                  className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-soul-sage/30 bg-white/85 px-4 py-1.5 text-xs font-medium text-bg-deep/70 transition-all duration-500 hover:-translate-y-0.5 hover:border-soul-sage hover:text-bg-deep focus:outline-none focus:ring-2 focus:ring-soul-sage/40"
                >
                  <X size={12} aria-hidden="true" />
                  Hide QR
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
