import { Navbar } from "@/components/navbar";
import { ClaimSyncDetail } from "@/components/claim-sync-detail";
import { Footer } from "@/components/footer";

export default function ClaimSyncPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-200 flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <ClaimSyncDetail />
      </div>
      <Footer />
    </main>
  );
}
