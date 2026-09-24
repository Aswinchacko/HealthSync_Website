// import Image from "next/image";
// import { Monitor, Smartphone, Cpu } from "lucide-react";
// import image4 from "@/assets/images/image4.png";
// import image5 from "@/assets/images/image5.png";

// export function DevicesSection() {
//   return (
//     <section className="pt-16 pb-20 md:pb-28 bg-slate-50 relative overflow-hidden">
//       {/* Subtle Background Glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

//       <div className="container mx-auto px-4 md:px-6 relative z-10">
//         {/* Section Header with Tight Spacing */}
//         <div className="text-center max-w-3xl mx-auto mb-6">
//           <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-bold text-[#1A1053] mb-3 border border-indigo-100/80 shadow-sm">
//             <Cpu className="h-3.5 w-3.5 text-teal-600" />
//             Seamless Accessibility
//           </div>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1053] tracking-tight">
//             Built for Every Healthcare Workflow
//           </h2>
//           <p className="mt-2 text-base md:text-lg text-slate-600 max-w-xl mx-auto text-justify md:text-center">
//            Seamless, high-performance access to HealthSync across the platforms your healthcare teams use every day. Get a centralized view of claims, revenue cycle activity, validation results, and operational performance from one intuitive dashboard. Whether you’re a provider, payer, administrator, or healthcare authority, HealthSync delivers consistent access to the information and tools you need anytime, anywhere
//           </p>
//         </div>

//         {/* Feature Badges */}
//         <div className="flex flex-wrap justify-center items-center gap-5 text-xs font-semibold text-slate-600 mb-10">
//           <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm">
//             <Monitor className="h-3.5 w-3.5 text-blue-600" /> Desktop Dashboard
//           </span>
//           <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm">
//             <Smartphone className="h-3.5 w-3.5 text-teal-600" /> Mobile Companion App
//           </span>
//         </div>

//         {/* Mockups Container with Centered Tight Alignment */}
//         <div className="flex justify-center items-end max-w-5xl mx-auto relative h-[340px] sm:h-[420px] md:h-[500px]">

//           {/* Desktop Monitor Mockup */}
//           <div className="relative w-[85%] sm:w-[75%] md:w-[70%] lg:w-[65%] z-10 drop-shadow-2xl ">
//             <div className="rounded-2xl md:rounded-3xl border-[6px] sm:border-[8px] md:border-[12px] border-slate-900 bg-slate-900 overflow-hidden aspect-video relative shadow-2xl">
//               <Image
//                 src={image4}
//                 alt="Desktop view"
//                 className="w-full h-full object-cover"
//                 priority
//               />
//             </div>
//             {/* Monitor Stand Base */}
//             <div className="w-1/5 h-6 sm:h-8 md:h-10 bg-gradient-to-b from-slate-300 to-slate-400 mx-auto rounded-b-lg shadow-md" />
//             <div className="w-2/5 h-1.5 sm:h-2 bg-slate-300 mx-auto rounded-t-md" />
//           </div>

//           {/* Mobile Phone Mockup Overlay */}
//           <div className="absolute right-2 sm:right-8 md:right-16 lg:right-24 bottom-2 sm:bottom-4 w-[28%] sm:w-[24%] md:w-[22%] lg:w-[20%] z-20 drop-shadow-2xl">
//             <div className="rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] border-[5px] sm:border-[8px] md:border-[10px] border-white bg-white overflow-hidden aspect-[9/19] relative shadow-2xl ring-1 ring-slate-200/80">
//               {/* Phone Notch */}
//               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-3 sm:h-4 bg-slate-900 rounded-b-xl z-30" />
//               <Image
//                 src={image5}
//                 alt="Mobile view"
//                 className="w-full h-full object-cover"
//                 priority
//               />
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import Image from "next/image";
import { Monitor, Smartphone, Cpu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import image4 from "@/assets/images/HealthSync-3.png";
// import image5 from "@/assets/images/image5.png";

const badges = [
  {
    icon: Monitor,
    label: "Desktop Dashboard",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Smartphone,
    label: "Mobile Companion App",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
];

export function DevicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f8f9fc] py-8 md:py-12 lg:py-16"
    >
      {/* Premium background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#1A1053]/[0.02] rounded-full blur-[150px]" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] bg-teal-100/15 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-5 md:px-8 lg:px-12 max-w-7xl">
        {/* Header */}
        <div
          className={`mx-auto max-w-3xl text-center mb-10 transition-all duration-1000 ease-out ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
            }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#1A1053]/[0.06] border border-[#1A1053]/10 px-5 py-2 text-sm font-semibold text-[#1A1053] mb-8 backdrop-blur-sm">
            <Cpu className="h-4 w-4" />
            Seamless Accessibility
          </div>

          <h2 className="text-[2.25rem] sm:text-[2.75rem] lg:text-[3.5rem] font-bold tracking-tight text-[#1A1053] leading-[1.1]">
            Built for Every{" "}
            <span className="relative inline-block">
              Healthcare
              <svg
                className="absolute -bottom-2 left-0 w-full h-[10px] text-[#1A1053]/12"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 10C50 2 150 2 198 10"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Workflow
          </h2>

          <p className="mt-7 text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Seamless, high-performance access to HealthSync across the platforms
            your healthcare teams use every day. Get a centralized view of
            claims, revenue cycle activity, validation results, and operational
            performance from one intuitive dashboard.
          </p>
        </div>

        {/* Feature Badges */}
        <div
          className={`flex flex-wrap justify-center items-center gap-4 mb-16 transition-all duration-1000 delay-200 ease-out ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
            }`}
        >
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <div
                key={i}
                className="group inline-flex items-center gap-2.5 rounded-full bg-white border border-slate-200/80 px-5 py-2.5 text-sm font-semibold text-slate-600 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-[#1A1053]/15 hover:shadow-[0_8px_24px_rgba(26,16,83,0.08)] hover:-translate-y-0.5"
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${badge.bg} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className={`h-4 w-4 ${badge.color}`} />
                </span>
                {badge.label}
              </div>
            );
          })}
        </div>

        {/* Device Mockups */}
        <div
          className={`relative mx-auto max-w-5xl transition-all duration-1000 delay-400 ease-out ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
            }`}
        >
          <div className="relative flex justify-center animate-float">
            {/* Desktop Monitor */}
            <div className="relative w-[95%] sm:w-[88%] md:w-[82%] lg:w-[78%] max-w-4xl z-10">
              {/* Monitor Frame */}
              <div className="relative rounded-t-xl md:rounded-t-2xl bg-[#1e293b] p-1.5 md:p-2 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.3)]">
                {/* Screen bezel */}
                <div className="relative rounded-lg md:rounded-xl bg-[#0f172a] overflow-hidden aspect-[16/10]">
                  <Image
                    src={image4}
                    alt="Desktop Dashboard"
                    className="w-full h-full object-cover"
                    priority
                  />
                  {/* Screen reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* Webcam dot */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-slate-600" />
              </div>

              {/* Monitor Stand */}
              <div className="flex flex-col items-center">
                <div className="w-[12%] h-5 sm:h-6 md:h-8 bg-gradient-to-b from-slate-300 to-slate-400 rounded-b-sm" />
                <div className="w-[28%] h-1.5 sm:h-2 bg-gradient-to-b from-slate-300 to-slate-400 rounded-t-md mt-px" />
              </div>

              {/* Monitor shadow */}
              <div className="absolute -bottom-2 left-[10%] right-[10%] h-4 bg-black/10 blur-xl rounded-full" />
            </div>



            <div className="absolute -bottom-3 left-[20%] right-[20%] h-6 bg-black/15 blur-lg rounded-full" />
          </div>

          {/* Decorative elements */}
          {/* <div className="absolute left-[-5%] top-[20%] hidden lg:flex flex-col gap-3">
            {["Real-time Sync", "Cloud Native", "HIPAA Compliant"].map(
              (item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-xl border border-slate-100 px-4 py-2 text-xs font-semibold text-slate-600 shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  {item}
                </div>
              )
            )}
          </div> */}
        </div>
      </div>
    </section>
  );
}