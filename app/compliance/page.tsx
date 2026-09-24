import { Navbar } from "@/components/navbar";
import { HipaaSection } from "@/components/hipaa-section";
import { Footer } from "@/components/footer";

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-cyan-200 flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <HipaaSection />
      </div>
      <Footer />
    </main>
  );
}
