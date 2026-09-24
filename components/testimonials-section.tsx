// import { Star } from "lucide-react";
// import Image from "next/image";
// import userImg from "@/assets/images/user.jpg";

// export function TestimonialsSection() {
//   const testimonials = [
//     {
//       quote:
//         '"HealthSync has helped us streamline our e-claim processes from data conversion and validation through submission. The reduction in manual work has made our claims operations significantly more efficient."',
//       author: "Dr. Elena Rodriguez",
//       role: "Chief Information Officer, St. Jude's Network",
//     },
//     {
//       quote:
//         '"The validation capabilities have made a real difference to our claims process. We can identify data issues before submission, helping our team improve claim accuracy and reduce avoidable rework."',
//       author: "Michael Thompson",
//       role: "Director of Revenue Cycle, Mercy Health System",
//     },
//     {
//       quote:
//         '"HealthSync gives our team greater visibility across claims and operational workflows. Having actionable data and insights in one platform helps us respond faster and make better-informed decisions."',
//       author: "Priya Shah",
//       role: "VP of Clinical Operations, North Valley Medical Group",
//     },
//   ];

//   return (
//     <section className="py-24 bg-slate-50">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1053]">
//             Trusted by Healthcare Pioneers
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {testimonials.map((item, i) => (
//             <div key={i} className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
//               <div className="flex gap-1 mb-6 text-amber-400">
//                 <Star className="h-5 w-5 fill-current" />
//                 <Star className="h-5 w-5 fill-current" />
//                 <Star className="h-5 w-5 fill-current" />
//                 <Star className="h-5 w-5 fill-current" />
//                 <Star className="h-5 w-5 fill-current" />
//               </div>

//               <p className="text-slate-600 italic leading-relaxed flex-grow mb-8 font-medium text-justify md:text-left">
//                 {item.quote}
//               </p>

//               <div className="flex items-center gap-4 mt-auto">
//                 <div className="h-12 w-12 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm ring-1 ring-slate-100">
//                   <Image src={userImg} alt={item.author} className="h-full w-full object-cover" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-[#1A1053] text-sm">{item.author}</h4>
//                   <p className="text-xs text-slate-500 mt-0.5 leading-tight">{item.role}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { Star, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import userImg from "@/assets/images/user.jpg";

const testimonials = [
  {
    quote:
      "HealthSync has helped us streamline our e-claim processes from data conversion and validation through submission. The reduction in manual work has made our claims operations significantly more efficient.",
    author: "Dubai London Clinics and Hospitals",
    role: "Chief Information Officer, Dubai Hospital",
  },
  {
    quote:
      "The validation capabilities have made a real difference to our claims process. We can identify data issues before submission, helping our team improve claim accuracy and reduce avoidable rework.",
    author: "Michael Thompson",
    role: "Director of Revenue Cycle, Dubai  Clinic",
  },
  {
    quote:
      "HealthSync gives our team greater visibility across claims and operational workflows. Having actionable data and insights in one platform helps us respond faster and make better-informed decisions.",
    author: "Priya Shah",
    role: "VP of Clinical Operations, Dubai  Specialty Hospital",
  },
];

export function TestimonialsSection() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f8f9fc] py-8 md:py-12 lg:py-16"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#1A1053]/[0.025] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[400px] bg-amber-100/30 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] left-[-5%] w-[300px] h-[300px] bg-[#1A1053]/[0.02] rounded-full blur-[80px]" />
      </div>

      <div className="container relative z-10 mx-auto px-5 md:px-8 lg:px-12 max-w-7xl">
        {/* Header */}
        <div
          className={`mx-auto max-w-2xl text-center mb-16 lg:mb-20 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#1A1053]/[0.06] border border-[#1A1053]/10 px-5 py-2 text-sm font-semibold text-[#1A1053] mb-8 backdrop-blur-sm">
            <Users className="h-4 w-4" />
            Testimonials
          </div>

          <h2 className="text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] font-bold tracking-tight text-[#1A1053] leading-[1.1]">
            Trusted by{" "}
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
            Pioneers
          </h2>

          <p className="mt-6 text-lg text-slate-500 leading-relaxed">
            See how leading healthcare organizations are transforming their
            operations with HealthSync.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`group relative flex flex-col rounded-[1.75rem] bg-white/70 backdrop-blur-xl border border-white/80 p-8 lg:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-500 ease-out hover:shadow-[0_24px_60px_rgba(26,16,83,0.1)] hover:-translate-y-2 hover:bg-white hover:border-[#1A1053]/8 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
                }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              {/* Decorative large quote */}
              <div className="absolute top-6 right-8 text-[6rem] leading-none font-serif text-[#1A1053]/[0.04] select-none pointer-events-none">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-7">
                {[...Array(5)].map((_, si) => (
                  <div
                    key={si}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 transition-transform duration-300 group-hover:scale-110"
                    style={{ transitionDelay: `${si * 50}ms` }}
                  >
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  </div>
                ))}
              </div>

              {/* Quote */}
              <p className="relative z-10 text-[15px] leading-[1.8] text-slate-600 flex-grow mb-10 font-medium">
                "{item.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
                <div className="relative">
                  <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-white shadow-md">
                    <Image
                      src={userImg}
                      alt={item.author}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full bg-emerald-500 border-2 border-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1053] text-sm tracking-tight">
                    {item.author}
                  </h4>
                  <p className="text-xs font-medium text-slate-400 mt-0.5 leading-tight">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] rounded-t-full bg-gradient-to-r from-transparent via-[#1A1053]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}