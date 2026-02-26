import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HistorySection from "@/components/HistorySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PhoneButton from "@/components/PhoneButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <HistorySection />
        <TestimonialsSection />
        <MissionVisionSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <PhoneButton />
    </div>
  );
};

export default Index;
