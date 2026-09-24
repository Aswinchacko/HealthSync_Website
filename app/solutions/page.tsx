import { Navbar } from "@/components/navbar";
import { SolutionsHeader } from "@/components/solutions-header";
import { SolutionsGrid } from "@/components/solutions-grid";
import { Footer } from "@/components/footer";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <SolutionsHeader />
        <SolutionsGrid />
      </div>
      <Footer />
    </main>
  );
}
