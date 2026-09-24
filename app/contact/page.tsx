import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact Us – HealthSync",
  description:
    "Get in touch with the HealthSync team for enterprise healthcare software, support, or inquiries. Email: info@healthsync.ae | Phone: +971 566067509",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-200 flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
