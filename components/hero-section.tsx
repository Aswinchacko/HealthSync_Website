// import { ArrowRight, ShieldCheck } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import image1 from "@/assets/images/image1.png";

// export function HeroSection() {
//   return (
//     <section className="relative overflow-hidden bg-slate-50 pt-16 md:pt-12 lg:pt-16 pb-16">
//       {/* Background blobs */}
//       <div className="absolute top-0 -left-1/4 w-1/2 h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-0 -right-1/4 w-1/2 h-[500px] bg-teal-50/40 rounded-full blur-3xl pointer-events-none" />

//       <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-12">
//         <div className="flex flex-1 flex-col items-start gap-6">
//           <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-[#1A1053]">
//             <span className="flex h-2 w-2 rounded-full bg-[#1A1053]" />
//             Next-Gen Health SaaS
//           </div>

//           <h1 className="text-4xl font-bold tracking-tight text-[#1A1053] sm:text-3xl lg:text-[4rem] max-w-2xl leading-[1.15]">
//             Healthcare Intelligence For Hospitals & Doctors
//           </h1>

//           <p className="max-w-[600px] text-[1.125rem] text-slate-600 leading-[1.75] text-justify md:text-left">
//             HealthSync is an intelligent healthcare platform designed to empower hospitals and doctors with data-driven insights
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
//             {/* <Link
//               href="/solutions"
//               className="inline-flex items-center justify-center rounded-full bg-[#1A1053] hover:bg-[#1A1053]/90 text-white px-8 py-3.5 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50 transition-all"
//             >
//               Explore Solutions
//               <ArrowRight className="ml-2 text-white" />
//             </Link> */}
//             <Link
//               href="/solutions"
//               className="inline-flex items-center justify-center rounded-full bg-[#1A1053] hover:bg-[] text-white px-8 py-3.5 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-200 transition-all"
//             >
//               Explore Solutions
//               <ArrowRight className="ml-2 text-white" />
//             </Link>
//             <Link
//               href="/demo"
//               className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#1A1053] shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50 transition-all"
//             >
//               Book Demo
//             </Link>
//           </div>
//         </div>

//         <div className="relative flex-1 w-full max-w-2xl lg:max-w-none mt-12 lg:mt-0">
//           <div className="relative rounded-3xl bg-white p-3 shadow-2xl shadow-indigo-900/10 border border-white/40 overflow-hidden transform lg:rotate-[-2deg] transition-transform hover:rotate-0 duration-500">
//             {/* Using user provided image */}
//             <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
//               <Image
//                 src={image1}
//                 alt="Health Sync Dashboard"
//                 className="object-cover w-full h-full opacity-90"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
//             </div>

//             <div className="absolute -left-6 -bottom-6 md:left-6 md:-bottom-8 flex items-center gap-4 rounded-2xl bg-white p-5 shadow-xl shadow-slate-200/50 border border-slate-100 animate-bounce" style={{ animationDuration: '3s' }}>
//               <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-500">
//                 <ShieldCheck className="h-6 w-6" />
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-xl font-bold text-slate-900">99.9%</span>
//                 <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">System reliability</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { ArrowRight, Play, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import image1 from "@/assets/images/Healthsync-1.png";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f8f9fc] py-12 sm:py-16 lg:py-20"
    >
      {/* Premium animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-[#1A1053]/[0.03] rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] bg-[#1A1053]/[0.02] rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute -bottom-[10%] left-[20%] w-[400px] h-[400px] bg-[#1A1053]/[0.025] rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(#1A1053 1px, transparent 1px), linear-gradient(90deg, #1A1053 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-5 md:px-8 lg:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Content */}
          <div className={`flex flex-1 flex-col items-start gap-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-[#1A1053]/[0.06] border border-[#1A1053]/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#1A1053] backdrop-blur-sm shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1A1053] opacity-40" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1A1053]" />
              </span>
              HealthSync Healthcare Technology
            </div>


            <h1 className="text-[1.75rem] sm:text-[2.25rem] lg:text-[3rem] xl:text-[2.75rem] font-bold tracking-tight text-[#1A1053] leading-[1.15] w-full">
              <span className="block font-black text-[#1A1053]">
                Connecting Healthcare.
              </span>
              <span className="relative inline-block bg-gradient-to-r from-[#1A1053] via-[#332296] to-[#4F46E5] bg-clip-text text-transparent font-black mt-1">
                Simplifying Operations.
                {/* <svg className="absolute -bottom-2.5 left-0 w-full h-3.5  text-[#4F46E5]/30" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg> */}
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-[620px] text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              An integrated healthcare technology ecosystem built to streamline hospital operations, optimize revenue, improve patient experience, and drive smarter decision-making.
            </p>

            {/* Feature Highlights Pills */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-xs sm:text-sm font-semibold text-[#1A1053] border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-[#1A1053]/30 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" /> Hospital Operations
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-xs sm:text-sm font-semibold text-slate-700 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-emerald-500/30 transition-colors">
                <TrendingUp className="w-4 h-4 text-emerald-600" /> Revenue Optimization
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-xs sm:text-sm font-semibold text-slate-700 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-amber-500/30 transition-colors">
                <Sparkles className="w-4 h-4 text-amber-500" /> AI Insights
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <Link
                href="/solutions"
                className="group inline-flex items-center justify-center rounded-full bg-[#1A1053] text-white px-8 py-4 text-[15px] font-semibold shadow-[0_8px_30px_rgba(26,16,83,0.25)] transition-all duration-300 hover:bg-[#251a6b] hover:shadow-[0_12px_40px_rgba(26,16,83,0.35)] hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/demo"
                className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-[#1A1053] border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#1A1053]/20 hover:shadow-[0_8px_30px_rgba(26,16,83,0.08)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#1A1053]/5 group-hover:bg-[#1A1053]/10 transition-colors">
                  <Play className="h-3.5 w-3.5 fill-[#1A1053] text-[#1A1053] ml-0.5" />
                </span>
                Book Demo
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 mt-4 pt-6 border-t border-slate-200/60 w-full sm:w-auto">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#1A1053]">500+</span>
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Hospitals</span>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#1A1053]">10k+</span>
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Doctors</span>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#1A1053]">99.9%</span>
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Uptime</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative flex-1 w-full max-w-2xl lg:max-w-none transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <div className="relative animate-float">
              {/* Decorative multi-color ambient glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#1A1053]/15 via-indigo-500/10 to-teal-400/15 rounded-[2.5rem] blur-2xl -z-10" />

              {/* Main image container */}
              <div className="relative rounded-[1.75rem] bg-white/90 p-2 sm:p-3 shadow-[0_25px_60px_-12px_rgba(26,16,83,0.18)] border border-white/80 ring-1 ring-slate-200/60 backdrop-blur-xl overflow-hidden group transition-all duration-500 hover:shadow-[0_30px_70px_-10px_rgba(26,16,83,0.22)]">
                <div className="relative w-full aspect-[16/10.5] rounded-[1.25rem] overflow-hidden bg-slate-50">
                  <Image
                    src={image1}
                    alt="HealthSync IT Solutions Platform"
                    className="object-contain sm:object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.02]"
                    priority
                  />
                  {/* Subtle glass reflection shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/20 pointer-events-none" />
                </div>

                {/* Micro floating live status badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1.5 shadow-md border border-slate-100 text-xs font-semibold text-[#1A1053]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Live Connected Hub
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
