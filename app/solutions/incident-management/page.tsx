import { Navbar } from "@/components/navbar";
import { IncidentManagementDetail } from "@/components/incident-management-detail";
import { Footer } from "@/components/footer";

export default function IncidentManagementPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-200 flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <IncidentManagementDetail />
      </div>
      <Footer />
    </main>
  );
}
