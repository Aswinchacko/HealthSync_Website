import { Navbar } from "@/components/navbar";
import { DemoBookingSection } from "@/components/demo-booking-section";
import { Footer } from "@/components/footer";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-slate-50/60 font-sans text-slate-900 selection:bg-blue-200 flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <DemoBookingSection />
      </div>
      <Footer />
    </main>
  );
}
