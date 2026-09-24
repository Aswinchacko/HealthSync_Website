// import { ArrowRight, Cpu, AlertTriangle, FileCheck, Network, Boxes, Shield } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import solution3 from "@/assets/images/solution3.png";
// import userImg from "@/assets/images/user.jpg";

// export function IncidentManagementDetail() {
//   return (
//     <div className="w-full bg-white">
//       {/* 1. Hero Header Section */}
//       <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-cyan-50/20 to-white pt-12 md:pt-16 pb-20">
//         <div className="container mx-auto px-4 md:px-6 relative z-10">
//           <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

//             {/* Left Content */}
//             <div className="flex-1 flex flex-col items-start gap-6">
//               <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700 border border-indigo-200/60 shadow-sm">
//                 <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
//                 Clinical Risk & Safety Module
//               </div>

//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A1053] leading-[1.12] tracking-tight">
//                 Incident Management: Real-Time Risk & Safety Safeguards
//               </h1>

//               <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
//                 Automate clinical safety reporting, root cause analysis, and regulatory audit readiness to eliminate medical errors and protect hospital integrity.
//               </p>

//               <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2 w-full sm:w-auto">
//                 <Link 
//                   href="/demo"
//                   className="inline-flex items-center justify-center rounded-full bg-[#1A1053] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-900/20 hover:bg-[#1A1053]/90 transition-all"
//                 >
//                   Book a Demo
//                 </Link>
//                 <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#1A1053] shadow-sm border border-slate-200 hover:bg-slate-50 transition-all">
//                   View Documentation
//                   <ArrowRight className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>

//             {/* Right Screen Visual */}
//             <div className="flex-1 w-full max-w-2xl relative">
//               <div className="relative rounded-3xl bg-slate-900 border-[10px] border-slate-800 p-2 shadow-2xl shadow-indigo-950/20 overflow-hidden aspect-[4/3] flex items-center justify-center">
//                 <Image
//                   src={solution3}
//                   alt="Incident Management Dashboard"
//                   className="object-cover w-full h-full rounded-xl"
//                 />

//                 {/* Floating Status Badge Overlay */}
//                 <div className="absolute top-6 left-6 flex flex-col bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/80 z-20 min-w-[170px]">
//                   <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
//                     SAFETY SCORE
//                   </span>
//                   <span className="text-xl md:text-2xl font-extrabold text-indigo-600 mt-0.5">
//                     100% Audit Ready
//                   </span>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* 2. Proven Enterprise ROI */}
//       <section className="bg-[#1A1053] py-16 md:py-20 text-white">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

//             {/* Left Description */}
//             <div className="flex-1 max-w-xl">
//               <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
//                 Proactive Risk Mitigation
//               </h2>
//               <p className="text-slate-300 text-base md:text-lg leading-relaxed">
//                 HealthSync&apos;s Incident Management engine provides real-time sentinel event tracking, preventing repeated clinical oversights before they impact patient safety.
//               </p>
//             </div>

//             {/* Right Stat Cards */}
//             <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
//               <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-center">
//                 <div className="text-5xl lg:text-6xl font-extrabold text-cyan-400 tracking-tight mb-2">
//                   85%
//                 </div>
//                 <p className="text-slate-200 text-sm font-semibold leading-snug">
//                   Reduction in Audit Prep Time
//                 </p>
//               </div>

//               <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-center">
//                 <div className="text-5xl lg:text-6xl font-extrabold text-indigo-400 tracking-tight mb-2">
//                   0
//                 </div>
//                 <p className="text-slate-200 text-sm font-semibold leading-snug">
//                   Missed Compliance Deadlines
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* 3. Key Capabilities */}
//       <section className="py-20 md:py-28 bg-white">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1053] tracking-tight">
//               Automated Sentinel Safeguards
//             </h2>
//             <p className="mt-4 text-base md:text-lg text-slate-600">
//               Transforming incident logs into institutional learning and risk prevention.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all duration-300 flex flex-col items-start">
//               <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6">
//                 <AlertTriangle className="h-7 w-7" />
//               </div>
//               <h3 className="text-xl font-bold text-[#1A1053] mb-3">
//                 Instant Sentinel Event Triggers
//               </h3>
//               <p className="text-slate-600 text-sm leading-relaxed">
//                 Automatically detect adverse events, medication errors, and near-misses with immediate alert routing to risk officers.
//               </p>
//             </div>

//             <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all duration-300 flex flex-col items-start">
//               <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
//                 <Cpu className="h-7 w-7" />
//               </div>
//               <h3 className="text-xl font-bold text-[#1A1053] mb-3">
//                 Root Cause Analysis (RCA) AI Copilot
//               </h3>
//               <p className="text-slate-600 text-sm leading-relaxed">
//                 AI analyzes EHR timestamps, clinical logs, and staff assignments to generate comprehensive RCA drafts in seconds.
//               </p>
//             </div>

//             <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all duration-300 flex flex-col items-start">
//               <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
//                 <FileCheck className="h-7 w-7" />
//               </div>
//               <h3 className="text-xl font-bold text-[#1A1053] mb-3">
//                 One-Click Regulatory Reporting
//               </h3>
//               <p className="text-slate-600 text-sm leading-relaxed">
//                 Export compliant reports formatted directly for state health boards, OSHA, and national accreditation databases.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 4. Standards & Compliance */}
//       <section className="py-20 md:py-24 bg-slate-50/70 border-y border-slate-100">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
//             <div className="flex-1 flex flex-col items-start">
//               <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1053] tracking-tight mb-4">
//                 Enterprise Clinical Safety Architecture
//               </h2>
//               <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
//                 Seamlessly connects to EHR clinical event streams and hospital governance frameworks for continuous monitoring.
//               </p>

//               <div className="flex flex-wrap items-center gap-8 text-slate-600">
//                 <div className="flex flex-col items-center gap-2">
//                   <Network className="h-6 w-6 text-slate-700" />
//                   <span className="text-xs font-bold uppercase tracking-wider text-slate-600">OSHA Ready</span>
//                 </div>
//                 <div className="flex flex-col items-center gap-2">
//                   <Boxes className="h-6 w-6 text-slate-700" />
//                   <span className="text-xs font-bold uppercase tracking-wider text-slate-600">FHIR Alerts</span>
//                 </div>
//                 <div className="flex flex-col items-center gap-2">
//                   <Shield className="h-6 w-6 text-slate-700" />
//                   <span className="text-xs font-bold uppercase tracking-wider text-slate-600">ISO 27001</span>
//                 </div>
//               </div>
//             </div>

//             <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col items-center justify-center text-center">
//                 <h4 className="text-2xl font-extrabold text-slate-900">RCA Copilot</h4>
//                 <p className="text-xs font-medium text-slate-500 mt-1">AI Root Cause</p>
//               </div>

//               <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col items-center justify-center text-center">
//                 <h4 className="text-2xl font-extrabold text-slate-900">Risk Matrix</h4>
//                 <p className="text-xs font-medium text-slate-500 mt-1">Heatmap Analytics</p>
//               </div>

//               <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col items-center justify-center text-center">
//                 <h4 className="text-2xl font-extrabold text-slate-900">Anonymous</h4>
//                 <p className="text-xs font-medium text-slate-500 mt-1">Whistleblower Portal</p>
//               </div>

//               <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col items-center justify-center text-center">
//                 <h4 className="text-2xl font-extrabold text-slate-900">Sentinel Alert</h4>
//                 <p className="text-xs font-medium text-slate-500 mt-1">Real-time Push</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 5. Testimonial */}
//       <section className="py-20 md:py-24 bg-white">
//         <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
//           <div className="flex flex-col items-center mb-6 relative">
//             <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md mb-2 bg-slate-100">
//               <Image
//                 src={userImg}
//                 alt="Chief Medical Officer"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <span className="bg-indigo-300 text-slate-900 font-bold px-3 py-1 text-xs rounded-md shadow-sm">
//               Dr. Rajesh Varma
//             </span>
//           </div>

//           <blockquote className="max-w-4xl text-xl sm:text-2xl md:text-3xl font-bold text-[#1A1053] leading-snug italic mb-6">
//             &ldquo;Incident Management gave our clinical leadership full visibility into safety metrics. We reduced sentinel risk events by over 40% in our first quarter alone.&rdquo;
//           </blockquote>

//           <div>
//             <div className="text-lg font-bold text-[#1A1053]">Dr. Rajesh Varma</div>
//             <div className="text-xs font-semibold tracking-widest text-slate-500 uppercase mt-1">
//               CHIEF MEDICAL OFFICER, MAX HEALTHCARE NETWORK
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 6. CTA Card Banner */}
//       <section className="py-12 pb-20 bg-white">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="bg-[#1A1053] rounded-[2.5rem] p-10 sm:p-14 md:p-16 text-center text-white relative overflow-hidden shadow-2xl max-w-6xl mx-auto">
//             <div className="relative z-10 max-w-2xl mx-auto">
//               <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
//                 Safeguard your hospital today.
//               </h2>
//               <p className="text-indigo-200 text-base md:text-lg mb-8 leading-relaxed">
//                 Deploy automated incident monitoring and risk safeguards across your clinical network.
//               </p>
//               <Link 
//                 href="/demo"
//                 className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#1A1053] shadow-lg hover:bg-slate-100 transition-all hover:scale-105"
//               >
//                 Book a private demo
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



export function IncidentManagementDetail() {
  return (
    <div className="flex items-center justify-center min-h-[300px]">
      <h1 className="text-xl font-semibold text-muted-foreground">
        Services is not available
      </h1>
    </div>
  );
}