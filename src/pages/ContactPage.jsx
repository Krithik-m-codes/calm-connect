import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import SEOHead from "../components/ui/SEOHead";
import Contact from "../sections/Contact";

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact"
        description="Get in touch with KalmKonnect for counselling and therapy sessions with Rupinder Kaur Sangar. Reach out on WhatsApp, email, or call to book your session."
      />
      <div className="px-[clamp(20px,6vw,80px)] pt-8">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/"
            className="inline-flex items-center rounded-full border border-soul-sage/35 bg-white/80 px-4 py-2 text-sm font-medium text-bg-deep transition-all duration-500 hover:-translate-y-0.5 hover:border-soul-sage"
          >
            <ArrowLeft size={16} aria-hidden="true" className="mr-2" />
            View Full Homepage
          </Link>
        </div>
      </div>
      <Contact />
    </>
  );
}
