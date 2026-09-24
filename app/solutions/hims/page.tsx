import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { HIMSDetail } from "@/components/hims-detail";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "HIMS - Healthcare Information Management System | HealthSync",
  description:
    "Centralize, organize, and manage healthcare information securely with HealthSync’s Healthcare Information Management System (HIMS).",
};

export default function HIMSPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-200 flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <HIMSDetail />
      </div>
      <Footer />
    </main>
  );
}
