import { Navbar } from "@/components/navbar";
import { AssetManagementDetail } from "@/components/asset-management-detail";
import { Footer } from "@/components/footer";

export default function AssetManagementPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-teal-200 flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <AssetManagementDetail />
      </div>
      <Footer />
    </main>
  );
}
