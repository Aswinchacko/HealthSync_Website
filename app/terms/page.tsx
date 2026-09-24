import { Navbar } from "@/components/navbar";
import { TermsSection } from "@/components/terms-section";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-cyan-200 flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <TermsSection />
      </div>
      <Footer />
    </main>
  );
}
