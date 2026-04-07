import SEOHead from "../components/ui/SEOHead";
import Hero from "../sections/Hero";
import Stats from "../sections/Stats";
import About from "../sections/About";
import Features from "../sections/Features";
import Services from "../sections/Services";
import Adolescence from "../sections/Adolescence";
import Techniques from "../sections/Techniques";
import Qualifications from "../sections/Qualifications";
import StartToday from "../sections/StartToday";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <SEOHead
        title="Internationally Accredited CBT & Hypnotherapist — Online Therapy"
        description="Step into a safe space where your peace of mind matters. KalmKonnect offers personalized therapy blending evidence-based methods (CBT, EMDR, Hypnotherapy) with mindfulness and yoga practices for depression, anxiety, burnout, and adolescent care."
      />
      <Hero />
      <Stats />
      <About />
      <Features />
      <Services />
      <Adolescence />
      <Techniques />
      <Qualifications />
      <StartToday />
      <Testimonials />
      <Contact />
    </>
  );
}
