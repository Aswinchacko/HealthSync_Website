// import { ArrowRight, HeartHandshake, MessageSquareHeart, Sparkles, Network, Boxes, Shield } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import solution2 from "@/assets/images/solution2.png";
// import userImg from "@/assets/images/user.jpg";

// export function ComplaintManagementDetail() {
//   return (
//     <div className="w-full bg-white">
//       {/* 1. Hero Header Section */}
//       <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-sky-50/20 to-white pt-12 md:pt-16 pb-20">
//         <div className="container mx-auto px-4 md:px-6 relative z-10">
//           <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

//             {/* Left Content */}
//             <div className="flex-1 flex flex-col items-start gap-6">
//               <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-1.5 text-xs font-semibold text-sky-700 border border-sky-200/60 shadow-sm">
//                 <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
//                 Patient Experience & Quality Module
//               </div>

//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A1053] leading-[1.12] tracking-tight">
//                 Complaint Management: Patient Feedback to Quality Care
//               </h1>

//               <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
//                 Transform patient grievances into actionable quality improvements with AI-driven sentiment analysis, multi-channel triage, and automated resolution workflows.
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
//                   src={solution2}
//                   alt="Complaint Management Dashboard"
//                   className="object-cover w-full h-full rounded-xl"
//                 />

//                 {/* Floating Status Badge Overlay */}
//                 <div className="absolute top-6 left-6 flex flex-col bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/80 z-20 min-w-[170px]">
//                   <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
//                     RESOLUTION RATE
//                   </span>
//                   <span className="text-xl md:text-2xl font-extrabold text-sky-600 mt-0.5">
//                     98.4% Solved
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
//                 Elevate Patient Trust & Retention
//               </h2>
//               <p className="text-slate-300 text-base md:text-lg leading-relaxed">
//                 HealthSync&apos;s Complaint Management engine automates grievance tracking, ensuring total compliance with healthcare regulatory bodies while elevating HCAHPS scores.
//               </p>
//             </div>

//             {/* Right Stat Cards */}
//             <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
//               <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-center">
//                 <div className="text-5xl lg:text-6xl font-extrabold text-sky-400 tracking-tight mb-2">
//                   75%
//                 </div>
//                 <p className="text-slate-200 text-sm font-semibold leading-snug">
//                   Faster Grievance Resolution
//                 </p>
//               </div>

//               <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-center">
//                 <div className="text-5xl lg:text-6xl font-extrabold text-teal-400 tracking-tight mb-2">
//                   +32%
//                 </div>
//                 <p className="text-slate-200 text-sm font-semibold leading-snug">
//                   Increase in HCAHPS Satisfaction Scores
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
//               Intelligent Feedback Processing
//             </h2>
//             <p className="mt-4 text-base md:text-lg text-slate-600">
//               Empowering patient advocates and clinical quality leaders with automated triage tools.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all duration-300 flex flex-col items-start">
//               <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6">
//                 <Sparkles className="h-7 w-7" />
//               </div>
//               <h3 className="text-xl font-bold text-[#1A1053] mb-3">
//                 AI Sentiment & Priority Scoring
//               </h3>
//               <p className="text-slate-600 text-sm leading-relaxed">
//                 Automatically categorize feedback by severity, clinical risk, and urgency to prioritize critical patient concerns instantly.
//               </p>
//             </div>

//             <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all duration-300 flex flex-col items-start">
//               <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
//                 <MessageSquareHeart className="h-7 w-7" />
//               </div>
//               <h3 className="text-xl font-bold text-[#1A1053] mb-3">
//                 Omnichannel Feedback Capture
//               </h3>
//               <p className="text-slate-600 text-sm leading-relaxed">
//                 Collect patient responses across SMS, patient portals, QR kiosks, and direct ombudsman hotline calls in one dashboard.
//               </p>
//             </div>

//             <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all duration-300 flex flex-col items-start">
//               <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
//                 <HeartHandshake className="h-7 w-7" />
//               </div>
//               <h3 className="text-xl font-bold text-[#1A1053] mb-3">
//                 Closed-Loop Resolution Workflows
//               </h3>
//               <p className="text-slate-600 text-sm leading-relaxed">
//                 Assign accountability to department heads with strict SLA tracking, ensuring zero patient complaints fall through the cracks.
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
//                 Regulatory Compliance Built-In
//               </h2>
//               <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
//                 Fully aligned with CMS, Joint Commission, and HIPAA guidelines for formal patient grievance management and reporting.
//               </p>

//               <div className="flex flex-wrap items-center gap-8 text-slate-600">
//                 <div className="flex flex-col items-center gap-2">
//                   <Network className="h-6 w-6 text-slate-700" />
//                   <span className="text-xs font-bold uppercase tracking-wider text-slate-600">CMS Standards</span>
//                 </div>
//                 <div className="flex flex-col items-center gap-2">
//                   <Boxes className="h-6 w-6 text-slate-700" />
//                   <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Joint Comm.</span>
//                 </div>
//                 <div className="flex flex-col items-center gap-2">
//                   <Shield className="h-6 w-6 text-slate-700" />
//                   <span className="text-xs font-bold uppercase tracking-wider text-slate-600">HIPAA Secure</span>
//                 </div>
//               </div>
//             </div>

//             <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col items-center justify-center text-center">
//                 <h4 className="text-2xl font-extrabold text-slate-900">HCAHPS</h4>
//                 <p className="text-xs font-medium text-slate-500 mt-1">Survey Integration</p>
//               </div>

//               <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col items-center justify-center text-center">
//                 <h4 className="text-2xl font-extrabold text-slate-900">Patient Relations</h4>
//                 <p className="text-xs font-medium text-slate-500 mt-1">Advocate Portal</p>
//               </div>

//               <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col items-center justify-center text-center">
//                 <h4 className="text-2xl font-extrabold text-slate-900">SLA Tracking</h4>
//                 <p className="text-xs font-medium text-slate-500 mt-1">Automated Alerts</p>
//               </div>

//               <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col items-center justify-center text-center">
//                 <h4 className="text-2xl font-extrabold text-slate-900">Audit Logs</h4>
//                 <p className="text-xs font-medium text-slate-500 mt-1">Immutable Trail</p>
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
//                 alt="Patient Relations Director"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <span className="bg-sky-300 text-slate-900 font-bold px-3 py-1 text-xs rounded-md shadow-sm">
//               Anita Sharma
//             </span>
//           </div>

//           <blockquote className="max-w-4xl text-xl sm:text-2xl md:text-3xl font-bold text-[#1A1053] leading-snug italic mb-6">
//             &ldquo;Complaint Management transformed how we listen to our patients. Grievance resolution time dropped from 14 days to under 48 hours, significantly boosting patient satisfaction.&rdquo;
//           </blockquote>

//           <div>
//             <div className="text-lg font-bold text-[#1A1053]">Anita Sharma</div>
//             <div className="text-xs font-semibold tracking-widest text-slate-500 uppercase mt-1">
//               DIRECTOR OF PATIENT RELATIONS, APOLLO CARE SYSTEMS
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
//                 Ready to elevate patient satisfaction?
//               </h2>
//               <p className="text-indigo-200 text-base md:text-lg mb-8 leading-relaxed">
//                 Experience how automated complaint resolution streamlines patient care and compliance.
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

export function ComplaintManagementDetail() {
  return (
    <div className="flex items-center justify-center min-h-[300px]">
      <h1 className="text-xl font-semibold text-muted-foreground">
        Services is not available
      </h1>
    </div>
  );
}