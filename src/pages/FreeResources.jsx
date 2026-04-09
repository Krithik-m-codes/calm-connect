import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Button from "../components/ui/Button";
import SEOHead from "../components/ui/SEOHead";
import {
  useMotionSafe,
  fadeUp,
  defaultTransition,
  noMotion,
} from "../utils/motion";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

// Dynamically import all PDFs in the assets folder
const pdfModules = import.meta.glob("../assets/free-resources/pdf/*.pdf", {
  query: "?url",
  eager: true,
});

// Dynamically import all image cards
const cardModules = import.meta.glob(
  "../assets/free-resources/cards/*.{png,jpg,jpeg,webp}",
  {
    query: "?url",
    eager: true,
  },
);

const pdfList = Object.keys(pdfModules).map((key) => {
  const url = pdfModules[key].default || pdfModules[key];
  const filename = key.split("/").pop();

  // Format title: remove .pdf, replace hyphens with spaces, capitalize
  let title = filename.replace(".pdf", "").replace(/-/g, " ");
  title = title.replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    id: filename,
    title,
    url,
  };
});

const cardList = Object.keys(cardModules).map((key) => {
  const url = cardModules[key].default || cardModules[key];
  const filename = key.split("/").pop();

  let title = filename.replace(/\.[^/.]+$/, "").replace(/-/g, " ");
  title = title.replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    id: filename,
    title,
    url,
  };
});

export default function FreeResources() {
  const animate = useMotionSafe();
  const v = animate ? fadeUp : noMotion;
  const pdfViewportRef = useRef(null);

  // Automatically select the first PDF if available
  const [selectedPdf, setSelectedPdf] = useState(
    pdfList.length > 0 ? pdfList[0] : null,
  );

  const [selectedCard, setSelectedCard] = useState(null);
  const [activeTab, setActiveTab] = useState("pdfs"); // 'pdfs' or 'cards'
  const [pdfViewerWidth, setPdfViewerWidth] = useState(860);
  const [pdfPageCount, setPdfPageCount] = useState(null);
  const [currentPdfPage, setCurrentPdfPage] = useState(1);
  const [downloadTarget, setDownloadTarget] = useState(null);
  const [isGateOpen, setIsGateOpen] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [gateForm, setGateForm] = useState({ name: "", contact: "" });
  const [gateError, setGateError] = useState("");

  useEffect(() => {
    if (!pdfViewportRef.current) {
      return;
    }

    const updateWidth = () => {
      const nextWidth = Math.floor(pdfViewportRef.current.clientWidth);
      setPdfViewerWidth(Math.max(260, Math.min(nextWidth - 24, 900)));
    };

    updateWidth();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }

    const observer = new ResizeObserver(updateWidth);
    observer.observe(pdfViewportRef.current);

    return () => observer.disconnect();
  }, [selectedPdf]);

  useEffect(() => {
    setCurrentPdfPage(1);
  }, [selectedPdf?.id]);

  const triggerDownload = (resource) => {
    if (!resource) {
      return;
    }

    const link = document.createElement("a");
    link.href = resource.url;
    link.setAttribute("download", "");
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleRequestDownload = (e, resource) => {
    e.preventDefault();
    e.stopPropagation();
    setDownloadTarget(resource);
    setGateError("");
    setIsGateOpen(true);
  };

  const handleGateSubmit = (e) => {
    e.preventDefault();

    const name = gateForm.name.trim();
    const contact = gateForm.contact.trim();
    if (!name || !contact) {
      setGateError("Please enter your name and contact details.");
      return;
    }

    setIsUnlocking(true);
    setGateError("");

    setTimeout(() => {
      triggerDownload(downloadTarget);
      setIsUnlocking(false);
      setIsGateOpen(false);
      setDownloadTarget(null);
      setGateForm({ name: "", contact: "" });
    }, 350);
  };

  const handleSelect = (e, pdf) => {
    e.preventDefault();
    setSelectedPdf(pdf);
    setTimeout(() => {
      document.getElementById("reader")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleSelectCard = (e, card) => {
    e.preventDefault();
    setSelectedCard(card);
  };

  return (
    <>
      <SEOHead
        title="Free Resources — Worksheets & Guides"
        description="Explore the best free guides, PDF worksheets, and printable cards on mindful living, resilience building, and emotional intelligence from KalmKonnect."
      />
      <motion.main
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="flex flex-col min-h-screen py-16 lg:py-20 px-[clamp(16px,5vw,72px)] bg-brand-sand/30"
      >
        <div className="max-w-6xl mx-auto w-full mt-4 lg:mt-6">
          <motion.div
            variants={v}
            transition={defaultTransition}
            className="text-center mb-8 lg:mb-10"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-mint/40 text-brand-dark text-sm font-semibold mb-4 tracking-wide uppercase">
              Free Resources
            </span>
            <h1 className="font-heading text-4xl lg:text-5xl text-brand-dark mb-4">
              Library & Worksheets
            </h1>
            <p className="text-base sm:text-lg text-brand-charcoal/80 max-w-2xl mx-auto mb-6 lg:mb-8">
              Explore our best comprehensive guides on mindful living,
              resilience building, and emotional intelligence. Read online or
              download to reflect at your own pace.
            </p>

            {/* Section Tabs */}
            <div className="inline-flex bg-white rounded-full p-1.5 sm:p-2 shadow-sm border border-brand-dark/5 mx-auto gap-1">
              <button
                onClick={() => setActiveTab("pdfs")}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === "pdfs"
                    ? "bg-brand-sage text-brand-dark shadow-xs"
                    : "text-brand-muted hover:text-brand-dark hover:bg-brand-sand/30"
                }`}
              >
                PDF Worksheets
              </button>
              <button
                onClick={() => setActiveTab("cards")}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === "cards"
                    ? "bg-brand-sage text-brand-dark shadow-xs"
                    : "text-brand-muted hover:text-brand-dark hover:bg-brand-sand/30"
                }`}
              >
                Front & Back Cards
              </button>
            </div>
          </motion.div>

          {activeTab === "pdfs" && (
            <motion.div
              key="pdfs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Resources Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 mb-8 sm:mb-10 lg:mb-12">
                {pdfList.map((pdf) => (
                  <div
                    key={pdf.id}
                    className={`bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-5 lg:p-6 shadow-sm border transition-all duration-300 hover:shadow-[0_15px_30px_rgba(24,45,41,0.06)] cursor-pointer flex flex-col h-full min-h-[220px] sm:min-h-[260px] ${
                      selectedPdf?.id === pdf.id
                        ? "border-brand-coral/50 ring-2 ring-brand-coral/10"
                        : "border-brand-dark/10"
                    }`}
                    onClick={(e) => handleSelect(e, pdf)}
                  >
                    <div className="bg-brand-mint/30 w-11 h-11 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-brand-dark shrink-0">
                      <svg
                        className="w-5 h-5 sm:w-8 sm:h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <h3 className="font-heading text-base sm:text-xl lg:text-2xl mb-2 sm:mb-3 text-brand-dark leading-snug grow">
                      {pdf.title}
                    </h3>
                    <div className="flex items-center justify-between mt-auto pt-3 sm:pt-4 border-t border-brand-dark/5">
                      <span className="text-[11px] sm:text-sm font-semibold text-brand-coral uppercase tracking-wide">
                        Read Now
                      </span>
                      <Button
                        type="button"
                        variant="secondary"
                        className="py-2 px-2.5 sm:py-2.5 sm:px-4 text-xs sm:text-sm rounded-lg sm:rounded-xl"
                        onClick={(e) => handleRequestDownload(e, pdf)}
                      >
                        <svg
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Selected PDF Viewer */}
              <AnimatePresence mode="wait">
                {selectedPdf && (
                  <motion.div
                    key={selectedPdf.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    id="reader"
                    className="rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-[0_40px_80px_rgba(24,45,41,0.15)] bg-white border border-brand-dark/10 min-h-[58vh] lg:min-h-[68vh] flex flex-col"
                  >
                    <div className="bg-brand-dark text-white p-3 sm:p-4 lg:p-5 flex justify-between items-center px-4 sm:px-6 lg:px-8 border-b border-white/10 shrink-0">
                      <h2 className="font-heading text-lg lg:text-xl font-medium truncate pr-4 text-white align-middle">
                        {selectedPdf.title}
                      </h2>
                      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                        {pdfPageCount ? (
                          <div className="flex items-center gap-2 bg-white/10 rounded-xl p-1">
                            <Button
                              type="button"
                              variant="secondary"
                              className="rounded-lg py-1.5 px-3 text-xs"
                              onClick={() =>
                                setCurrentPdfPage((prev) =>
                                  Math.max(prev - 1, 1),
                                )
                              }
                              disabled={currentPdfPage <= 1}
                            >
                              Prev
                            </Button>
                            <span className="text-xs sm:text-sm text-white/90 font-medium px-1 whitespace-nowrap">
                              Page {currentPdfPage} of {pdfPageCount}
                            </span>
                            <Button
                              type="button"
                              variant="secondary"
                              className="rounded-lg py-1.5 px-3 text-xs"
                              onClick={() =>
                                setCurrentPdfPage((prev) =>
                                  Math.min(prev + 1, pdfPageCount),
                                )
                              }
                              disabled={currentPdfPage >= pdfPageCount}
                            >
                              Next
                            </Button>
                          </div>
                        ) : (
                          <div className="text-sm opacity-80 hidden sm:block">
                            Web PDF Reader
                          </div>
                        )}
                        <Button
                          type="button"
                          className="bg-white/10 hover:bg-white/20 text-white border-0 py-2 px-4 text-sm rounded-xl flex items-center gap-2 transition-colors"
                          onClick={(e) => handleRequestDownload(e, selectedPdf)}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                          </svg>
                          <span className="hidden sm:inline">Download</span>
                        </Button>
                      </div>
                    </div>
                    <div
                      ref={pdfViewportRef}
                      className="flex-grow w-full relative bg-brand-sand/10 overflow-y-auto p-2 sm:p-4 flex flex-col items-center"
                    >
                      <Document
                        className="flex flex-col items-center w-full"
                        file={selectedPdf.url}
                        onLoadSuccess={({ numPages }) => {
                          setPdfPageCount(numPages);
                          setCurrentPdfPage(1);
                        }}
                        onLoadError={() => {
                          setPdfPageCount(null);
                          setCurrentPdfPage(1);
                        }}
                        loading={
                          <div className="absolute inset-0 p-8 text-center flex items-center justify-center text-brand-muted">
                            Loading PDF...
                          </div>
                        }
                        error={
                          <div className="absolute inset-0 p-8 text-center flex flex-col items-center justify-center text-brand-muted">
                            <p className="mb-4 text-brand-charcoal/80 max-w-md">
                              This file cannot be previewed in your browser
                              right now.
                            </p>
                            <Button
                              type="button"
                              onClick={(e) =>
                                handleRequestDownload(e, selectedPdf)
                              }
                              variant="primary"
                            >
                              Download {selectedPdf.title}
                            </Button>
                          </div>
                        }
                      >
                        {pdfPageCount ? (
                          <>
                            <Page
                              key={`page_${currentPdfPage}`}
                              pageNumber={currentPdfPage}
                              width={pdfViewerWidth}
                              renderTextLayer={false}
                              renderAnnotationLayer={false}
                              className="mx-auto"
                            />
                          </>
                        ) : null}
                      </Document>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Front & Back Cards Section */}
          {activeTab === "cards" && cardList.length > 0 && (
            <motion.div
              key="cards"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-4 lg:mt-6"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
                {cardList.map((card) => (
                  <div
                    key={card.id}
                    onClick={(e) => handleSelectCard(e, card)}
                    className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_15px_40px_rgba(24,45,41,0.12)] transition-all duration-300 transform hover:-translate-y-1 bg-white border border-brand-dark/5 aspect-[3/4]"
                  >
                    <img
                      src={card.url}
                      alt={card.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <p className="text-white font-medium text-sm truncate">
                        {card.title}
                      </p>
                      <span className="text-brand-sand text-xs mt-1 font-semibold flex items-center gap-1">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        View
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Card Viewer Modal */}
          <AnimatePresence>
            {selectedCard && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/90 backdrop-blur-sm"
                onClick={() => setSelectedCard(null)}
              >
                <div
                  className="relative max-w-4xl max-h-[92vh] w-full flex flex-col items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 flex gap-2 sm:gap-3">
                    <Button
                      type="button"
                      variant="primary"
                      className="py-2 px-3 sm:px-4 text-xs sm:text-sm rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
                      onClick={(e) => handleRequestDownload(e, selectedCard)}
                    >
                      Download
                    </Button>
                    <button
                      onClick={() => setSelectedCard(null)}
                      className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <motion.img
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    src={selectedCard.url}
                    alt={selectedCard.title}
                    className="max-h-[85vh] max-w-full object-contain rounded-xl lg:rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isGateOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] bg-brand-dark/75 backdrop-blur-sm p-4 flex items-center justify-center"
                onClick={() => !isUnlocking && setIsGateOpen(false)}
              >
                <motion.div
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-[0_22px_60px_rgba(0,0,0,0.25)]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="font-heading text-3xl text-brand-dark mb-2">
                    Unlock your best free download
                  </h3>
                  <p className="text-brand-charcoal/80 text-sm sm:text-base mb-5">
                    Please share your contact details before downloading your
                    best-fit resource
                    {downloadTarget ? ` "${downloadTarget.title}".` : "."}
                  </p>

                  <form onSubmit={handleGateSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="gate-name"
                        className="block text-sm font-medium text-brand-dark mb-1.5"
                      >
                        Full name
                      </label>
                      <input
                        id="gate-name"
                        type="text"
                        value={gateForm.name}
                        onChange={(e) =>
                          setGateForm((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-brand-dark/15 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-sage/40"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="gate-contact"
                        className="block text-sm font-medium text-brand-dark mb-1.5"
                      >
                        Email or phone number
                      </label>
                      <input
                        id="gate-contact"
                        type="text"
                        value={gateForm.contact}
                        onChange={(e) =>
                          setGateForm((prev) => ({
                            ...prev,
                            contact: e.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-brand-dark/15 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-sage/40"
                        placeholder="you@example.com or +91..."
                        required
                      />
                    </div>

                    {gateError && (
                      <p className="text-sm text-red-600" role="alert">
                        {gateError}
                      </p>
                    )}

                    <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                      <Button
                        type="button"
                        variant="secondary"
                        className="w-full justify-center rounded-xl"
                        onClick={() => setIsGateOpen(false)}
                        disabled={isUnlocking}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full justify-center rounded-xl"
                        disabled={isUnlocking}
                      >
                        {isUnlocking
                          ? "Starting download..."
                          : "Submit & Download"}
                      </Button>
                    </div>
                  </form>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.main>
    </>
  );
}
