import { useEffect } from "react";
import { useLocation } from "react-router";

const SITE_NAME = "KalmKonnect";
const BASE_URL = "https://kalmkonnect.com";
const DEFAULT_DESCRIPTION =
  "Step into a safe space where your peace of mind matters. KalmKonnect offers personalized therapy blending evidence-based methods with mindfulness — internationally accredited CBT & Hypnotherapist.";

/**
 * SEOHead — sets document title and meta tags per-page.
 *
 * Usage:
 *   <SEOHead
 *     title="Free Resources — Worksheets & Guides"
 *     description="Explore our free guides on mindful living..."
 *   />
 */
export default function SEOHead({ title, description }) {
  const location = useLocation();

  useEffect(() => {
    // Build full title
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    document.title = fullTitle;

    // Helper to set or create a <meta> tag
    const setMeta = (attr, key, value) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    const desc = description || DEFAULT_DESCRIPTION;
    const canonicalUrl = `${BASE_URL}${location.pathname}`;

    // Standard meta
    setMeta("name", "description", desc);

    // Open Graph
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", canonicalUrl);

    // Twitter
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", desc);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [title, description, location.pathname]);

  return null;
}
