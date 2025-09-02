import { useState } from "react";

import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProgramsSection from "@/components/ProgramsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import TrialModal from "@/components/TrialModal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialSection from "@/components/TestimonialSection";
import WhyChoose from "@/components/WhyChoose";
import Features from "@/components/Features";

const Index = () => {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  const handleStartTrial = () => {
    setIsTrialModalOpen(true);
  };

  const handleCloseTrialModal = () => {
    setIsTrialModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onStartTrial={handleStartTrial} />
      <main>
        <HeroSection onStartTrial={handleStartTrial} />
        <FeaturesSection />
        <ProgramsSection onStartTrial={handleStartTrial} />
        <Features />
        <WhyChoose />
        <PricingSection onStartTrial={handleStartTrial} />
        <TestimonialSection />
        <FAQSection />
      </main>
      <Footer />

      <TrialModal isOpen={isTrialModalOpen} onClose={handleCloseTrialModal} />
    </div>
  );
};

export default Index;
