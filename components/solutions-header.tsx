"use client";

import { useEffect, useRef, useState } from "react";

export function SolutionsHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section ref={sectionRef} className="pt-20 pb-16 bg-white relative overflow-hidden">
      <div className={`container mx-auto px-4 md:px-6 relative z-10 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="inline-flex items-center justify-center rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-bold tracking-widest text-[#1A1053] uppercase mb-8">
          Product Ecosystem
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1053] max-w-4xl mx-auto leading-tight">
          Future-Ready Solutions for Modern Healthcare Enterprise
        </h1>

        <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Streamline your operations with our clinically-integrated suite of medical management tools designed for high-compliance environments.
        </p>
      </div>

      {/* Soft background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-indigo-50/50 blur-[100px] rounded-full -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
    </section>
  );
}
