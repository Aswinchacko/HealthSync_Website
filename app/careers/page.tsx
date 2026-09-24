import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { CareersHero } from "@/components/careers-hero";
import { CareersJobs } from "@/components/careers-jobs";
import { CareersApplication } from "@/components/careers-application";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Careers – HealthSync",
  description:
    "Join the team at HealthSync IT Solutions. Explore open positions in healthcare technology, clinical interoperability, engineering, and product.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-cyan-200 flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <CareersHero />
        <CareersJobs />
        <CareersApplication />
      </div>
      <Footer />
    </main>
  );
}
