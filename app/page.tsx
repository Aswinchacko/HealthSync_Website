import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
// import { VisionSection } from "@/components/vision-section";
import { SolutionsSection } from "@/components/solutions-section";
import { IntelligenceSection } from "@/components/intelligence-section";
import { DevicesSection } from "@/components/devices-section";
import { StatsSection } from "@/components/stats-section";
import { TestimonialsSection } from "@/components/testimonials-section";
// import { JourneySection } from "@/components/journey-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
      <Navbar />
      <HeroSection />
      {/* <VisionSection /> */}
      <SolutionsSection />
      <IntelligenceSection />
      <DevicesSection />
      <StatsSection />
      <TestimonialsSection />
      {/* <JourneySection /> */}
      <FaqSection />
      <Footer />
    </main>
  );
}
