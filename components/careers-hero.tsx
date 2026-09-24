"use client";

import { ArrowDown, Sparkles, Building2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import career1 from "@/assets/images/career1.png";

export function CareersHero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section ref={sectionRef} className="pt-20 pb-20 md:pb-28 bg-gradient-to-b from-slate-50/80 via-sky-50/20 to-white text-center relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-cyan-100/40 blur-[120px] rounded-full -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />

      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-7xl">

        {/* Header Badge & Title */}
        <div className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-100/70 px-4 py-1.5 text-xs font-bold text-teal-900 border border-cyan-200/80 shadow-sm mb-6 uppercase tracking-widest transition-transform hover:scale-105 cursor-default">
            <Sparkles className="h-3.5 w-3.5 text-teal-700 animate-pulse" />
            Join the Mission
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1053] leading-[1.12] tracking-tight mb-6">
            Shape the Future of Healthcare
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
            At HealthSync, we&apos;re solving real healthcare challenges with technology. Join a team of innovators, problem-solvers, and healthcare technology enthusiasts who are building solutions that make a difference.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#openings"
              className="rounded-full bg-[#1A1053] px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-950/20 hover:bg-[#1A1053]/90 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
            >
              View Openings <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
          </div>
        </div>

        {/* Hero Visual Grid with Matching Heights & Alignments */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch text-left mt-14">

          {/* Left Card (Span 7) - Collaborative Health Innovation */}
          <div className={`lg:col-span-7 bg-white rounded-[2.5rem] overflow-hidden border border-slate-200/80 shadow-xl shadow-slate-200/40 flex flex-col justify-between h-[380px] sm:h-[420px] relative group transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <Image
              src={career1}
              alt="Healthcare technology team collaborating"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 animate-float"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1053]/95 via-[#1A1053]/30 to-transparent z-10" />

            <div className="absolute bottom-0 left-0 p-8 sm:p-10 z-20 max-w-xl text-white">
              <span className="bg-white/20 backdrop-blur-md text-white font-bold text-xs px-3.5 py-1.5 rounded-full border border-white/30 uppercase tracking-wider mb-3 inline-block">
                Clinical + Engineering
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Collaborative Health Innovation
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Our teams partner across clinical medicine, data engineering, and product design to build secure, life-critical healthcare solutions.
              </p>
            </div>
          </div>

          {/* Right Card (Span 5) - We Are Hiring */}
          <div className={`lg:col-span-5 bg-[#1A1053] rounded-[2.5rem] p-8 sm:p-10 text-white shadow-xl shadow-indigo-950/20 flex flex-col justify-between h-[380px] sm:h-[420px] relative overflow-hidden transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} hover:shadow-2xl hover:shadow-indigo-900/40 group`}>
            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

            <div>
              <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <Building2 className="h-7 w-7" />
              </div>
              <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-cyan-300 mb-3 block">
                WE ARE HIRING
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-snug group-hover:text-cyan-100 transition-colors">
                Shape the Next Chapter of Healthcare
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Join a team where every feature, every integration, and every care pathway is designed to help providers move faster and patients feel safer.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-cyan-300 uppercase tracking-wider">
              <span>Global Remote Roles</span>
              <span>Competitive Benefits</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
