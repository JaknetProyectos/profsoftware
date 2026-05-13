import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import SeoSection from "@/components/SeoSection";
import Principles from "@/components/Principles";
import Services from "@/components/Services";
import SoftwareSolutions from "@/components/SoftwareSolutions";
import ContactSection from "@/components/ContactSection";
import SuccessStories from "@/components/SuccessStories";
import OurSolutions from "@/components/OurSolutions";
import WorkProcess from "@/components/WorkProcess";
import StartProject from "@/components/StartProject";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <AboutUs />
      <SeoSection />
      <Principles />
      <Services />
      <SoftwareSolutions />
      <ContactSection />
      <SuccessStories />
      <OurSolutions />
      <WorkProcess />
      <StartProject />
      <Footer />
    </main>
  );
}
