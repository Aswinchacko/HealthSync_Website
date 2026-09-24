import { Navbar } from "@/components/navbar";
import { PrivacySection } from "@/components/privacy-section";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-cyan-200 flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <PrivacySection />
      </div>
      <Footer />
    </main>
  );
}
