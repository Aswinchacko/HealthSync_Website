import { Navbar } from "@/components/navbar";
import { ComplaintManagementDetail } from "@/components/complaint-management-detail";
import { Footer } from "@/components/footer";

export default function ComplaintManagementPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-sky-200 flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <ComplaintManagementDetail />
      </div>
      <Footer />
    </main>
  );
}
