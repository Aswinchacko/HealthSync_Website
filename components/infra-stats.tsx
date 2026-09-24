"use client";

import { useEffect, useRef, useState } from "react";

export function InfraStats() {
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

  const stats = [
    { value: "42%", label: "EFFICIENCY GAIN", desc: "Reduction in administrative overhead across multi-site networks.", delay: "delay-100" },
    { value: "99.9%", label: "UPTIME SLA", desc: "Enterprise-grade reliability for mission-critical care environments.", delay: "delay-200" },
    { value: "₹14M", label: "ANNUAL SAVINGS", desc: "Average cost reduction for networks with 5,000+ beds.", delay: "delay-300" },
    { value: "<1S", label: "LATENCY", desc: "Real-time data synchronization across international jurisdictions.", delay: "delay-400" }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold text-[#1A1053] mb-4">Quantifiable Enterprise Impact</h2>
          <p className="text-slate-600">Driving operational excellence and superior clinical outcomes through data-driven automation.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className={`bg-white rounded-2xl p-8 border border-slate-100 shadow-sm text-center flex flex-col items-center justify-center hover:shadow-lg transition-all duration-700 ease-out hover:-translate-y-2 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${stat.delay}`}>
              <div className="text-5xl font-serif text-[#1A1053] mb-4 font-bold group-hover:scale-110 transition-transform duration-500">{stat.value}</div>
              <div className="text-xs font-bold text-teal-600 tracking-wider mb-3 group-hover:text-teal-700 transition-colors">{stat.label}</div>
              <p className="text-sm text-slate-500 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
