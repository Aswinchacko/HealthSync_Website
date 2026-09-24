// import { Asterisk, Activity, ShieldCheck } from "lucide-react";
// import Image from "next/image";
// import image2 from "@/assets/images/image2.png";

// export function VisionSection() {
//   const partners = [
//     "Global Health Inc.",
//     "GlobalCare Europe",
//     "MetroGen Hub",
//     "SwissMed Tech",
//     "Nordic Diagnostics",
//     "Apollo Lite"
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4 md:px-6">
        
//         {/* Partners Banner */}
//         <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale border-b border-gray-100 pb-16 mb-16">
//           {partners.map((partner, i) => (
//             <div key={i} className="flex items-center gap-2 font-bold text-slate-800 text-lg md:text-xl">
//               <Asterisk className="h-5 w-5" />
//               {partner}
//             </div>
//           ))}
//         </div>

//         <div className="flex flex-col lg:flex-row items-center gap-16">
          
//           {/* Left: Illustration */}
//           <div className="flex-1 w-full relative">
//              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-indigo-900/10 border border-slate-100 aspect-square md:aspect-[4/3] bg-slate-50">
//                <Image 
//                  src={image2} 
//                  alt="Doctor reviewing digital dashboard" 
//                  className="w-full h-full object-cover object-center mix-blend-multiply opacity-90"
//                />
//                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-transparent mix-blend-overlay"></div>
//              </div>
//              {/* Decorative glow */}
//              <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-full -z-10" />
//           </div>

//           {/* Right: Content */}
//           <div className="flex-1 flex flex-col items-start gap-8">
//             <div>
//               <p className="text-sm font-bold tracking-widest text-teal-600 uppercase mb-3">The Vision</p>
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1053] leading-tight">
//                 Interconnected Healthcare<br />Intelligence
//               </h2>
//               <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
//                 HealthSync isn't just software; it's a nervous system for modern medicine. We bridge the gap between complex diagnostic labs, busy hospital wards, and patients seeking clarity.
//               </p>
//             </div>

//             <div className="flex flex-col gap-6 mt-4 w-full">
//               {/* Feature 1 */}
//               <div className="flex gap-4">
//                 <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-500">
//                   <Asterisk className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-[#1A1053]">Unified Data Hub</h3>
//                   <p className="mt-2 text-slate-600 leading-relaxed">Centralize patient records across all touchpoints with zero latency and full encryption.</p>
//                 </div>
//               </div>
              
//               {/* Feature 2 */}
//               <div className="flex gap-4">
//                 <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-500">
//                   <Activity className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-[#1A1053]">AI-Driven Diagnostics</h3>
//                   <p className="mt-2 text-slate-600 leading-relaxed">Leverage neural networks to assist in early disease detection and treatment planning.</p>
//                 </div>
//               </div>
              
//               {/* Feature 3 */}
//               <div className="flex gap-4">
//                 <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-green-500">
//                   <ShieldCheck className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-[#1A1053]">Compliance by Design</h3>
//                   <p className="mt-2 text-slate-600 leading-relaxed">Built from the ground up to meet and exceed global HIPAA and GDPR standards.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//         </div>
//       </div>
//     </section>
//   );
// }
