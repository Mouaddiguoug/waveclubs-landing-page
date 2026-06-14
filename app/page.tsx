import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatementSection from "@/components/StatementSection";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CommunicationSection from "@/components/CommunicationSection";
import AISection from "@/components/AISection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatementSection />
        <ProblemSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CommunicationSection />
        <AISection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
