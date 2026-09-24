"use client";

import { Heart, Rocket, Globe2, Users2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import career2 from "@/assets/images/career2.png";

export function CareersCulture() {
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
    <section ref={sectionRef} id="culture" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-7xl">
        
        {/* Header Stats */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold tracking-widest text-sky-600 uppercase mb-3 block">
              LIFE AT HEALTHSYNC
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1053] tracking-tight">
              Clinical Precision meets Technical Agility
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-base sm:text-lg">
              Our culture is built on trust, transparency, and a shared passion for patient outcomes. We build technology that clinicians depend on every day.
            </p>
          </div>

          <div className="flex gap-8 border-l-2 border-slate-100 pl-6 shrink-0">
            <div className="group">
              <div className="text-4xl font-extrabold text-[#1A1053] tracking-tight group-hover:scale-110 transition-transform origin-left">500+</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 group-hover:text-teal-600 transition-colors">
                Global Employees
              </div>
            </div>
            <div className="border-l border-slate-100 pl-8 group">
              <div className="text-4xl font-extrabold text-[#1A1053] tracking-tight group-hover:scale-110 transition-transform origin-left">12</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 group-hover:text-teal-600 transition-colors">
                Regional Hubs
              </div>
            </div>
          </div>
        </div>

        {/* Culture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Hero Image Card (Span 8) */}
          <div className={`lg:col-span-8 relative rounded-[2.5rem] overflow-hidden group shadow-xl shadow-slate-200/40 h-[380px] sm:h-[420px] transition-all duration-1000 delay-100 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <Image
              src={career2}
              alt="Health technology team working together"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 animate-float"
              priority
            />
            {/* Elegant Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1053]/95 via-[#1A1053]/40 to-transparent z-10" />
            
            <div className="absolute bottom-0 left-0 p-8 sm:p-10 z-20 max-w-xl text-white">
              <span className="bg-sky-400/20 backdrop-blur-md text-cyan-300 font-bold text-xs px-3.5 py-1.5 rounded-full border border-cyan-400/30 uppercase tracking-wider mb-3 inline-block">
                Interdisciplinary Teams
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Interdisciplinary Excellence
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Bridging the gap between software engineering and clinical operations requires a unique blend of empathy, security focus, and technical rigour.
              </p>
            </div>
          </div>

          {/* Health First Highlight Card (Span 4) */}
          <div className={`lg:col-span-4 bg-[#1A1053] rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between text-white shadow-xl shadow-indigo-950/20 h-[380px] sm:h-[420px] relative overflow-hidden transition-all duration-1000 delay-200 ease-out hover:shadow-2xl hover:shadow-indigo-900/40 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Background Subtle Ambient Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

            <div>
              <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <Heart className="h-7 w-7" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 group-hover:text-cyan-100 transition-colors">
                Health First
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Comprehensive medical, dental, and mental health support for every single employee and their dependents from day one.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-cyan-300 uppercase tracking-wider">
              <span>Full Coverage</span>
              <span>Day 1 Benefits</span>
            </div>
          </div>

          {/* 3 Bottom Cards */}
          <div className={`lg:col-span-4 bg-white border border-slate-200/80 rounded-[2rem] p-8 shadow-lg shadow-slate-200/30 hover:shadow-xl hover:border-slate-300 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div>
              <div className="bg-emerald-50 text-emerald-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <Rocket className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="font-extrabold text-xl text-[#1A1053] mb-2 group-hover:text-emerald-700 transition-colors">Continuous Growth</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Annual learning stipends, conference budgets, and internal mobility programs to keep your career synchronized with your goals.
              </p>
            </div>
          </div>

          <div className={`lg:col-span-4 bg-white border border-slate-200/80 rounded-[2rem] p-8 shadow-lg shadow-slate-200/30 hover:shadow-xl hover:border-slate-300 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div>
              <div className="bg-indigo-50 text-indigo-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <Globe2 className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="font-extrabold text-xl text-[#1A1053] mb-2 group-hover:text-indigo-700 transition-colors">Remote-Native</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Work from where you are most productive. Our infrastructure is built for global collaboration across time zones.
              </p>
            </div>
          </div>

          <div className={`lg:col-span-4 bg-white border border-slate-200/80 rounded-[2rem] p-8 shadow-lg shadow-slate-200/30 hover:shadow-xl hover:border-slate-300 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div>
              <div className="bg-cyan-50 text-teal-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                <Users2 className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="font-extrabold text-xl text-[#1A1053] mb-2 group-hover:text-teal-700 transition-colors">Work-Life Balance</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Flexible PTO, parental leave policies, and quarterly wellness days designed to support your life beyond the screen.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
