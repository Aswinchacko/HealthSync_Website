"use client";

import { ArrowRight, ShieldCheck, Activity } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import image3 from "@/assets/images/image3.png"; // Using a dashboard-like image

export function InfraHero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section ref={sectionRef} className="pt-24 pb-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Text Content */}
          <div className={`flex-1 w-full max-w-2xl lg:max-w-none transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-sm font-semibold text-[#1A1053] mb-8 transition-transform hover:scale-105 cursor-default">
              <ShieldCheck className="h-4 w-4" />
              Trusted by Global Health Systems
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-[#1A1053] sm:text-5xl lg:text-[3.5rem] leading-[1.15]">
              Scaling Healthcare<br />
              Intelligence for the<br />
              Modern Enterprise
            </h1>

            <p className="mt-6 max-w-[600px] text-[1.125rem] text-slate-600 leading-[1.75]">
              HealthSync delivers mission-critical data infrastructure for large-scale hospital networks and government projects. Unified, secure, and infinitely scalable.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-[#1A1053] px-8 py-3.5 text-[15px] font-semibold text-white shadow-xl shadow-indigo-900/20 hover:bg-[#1A1053]/90 hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
                Schedule an Enterprise Briefing <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="rounded-full bg-white border-2 border-slate-200 px-8 py-3.5 text-[15px] font-semibold text-[#1A1053] hover:border-slate-300 hover:bg-slate-50 transition-all">
                View Case Studies
              </button>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className={`relative flex-1 w-full max-w-2xl lg:max-w-none transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative rounded-[2rem] bg-white p-3 shadow-2xl shadow-slate-200/50 border border-slate-100 animate-float">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50">
                <Image
                  src={image3}
                  alt="Infrastructure Dashboard"
                  className="object-cover w-full h-full opacity-90 transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-4 animate-float-delayed">
                <div className="bg-cyan-400 p-3 rounded-xl text-white shadow-lg shadow-cyan-400/30">
                  <Activity className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold text-[#1A1053] text-sm">Live Fleet Monitoring</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Active across 140+ locations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
