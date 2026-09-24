"use client";

import { Layers, Sparkles, BrainCircuit } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import image3 from "@/assets/images/HealthSync-2.png";

const features = [
  {
    icon: Layers,
    title: "One Ecosystem. Every Workflow.",
    desc: "From claims and complaints to incidents, assets, and healthcare information, HealthSync connects critical hospital workflows in one intelligent ecosystem. Reduce manual processes, improve coordination, and give teams the visibility they need to work more efficiently.",
    accent: "#0ea5e9",
    lightBg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    icon: Sparkles,
    title: "End-to-End Healthcare Intelligence",
    desc: "Connect every critical operation in one ecosystem. From ClaimSync and Complaints Management to Incident Management, Asset Management, and HIMS, HealthSync creates a unified flow of information across your organization.",
    accent: "#6366f1",
    lightBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
];

export function IntelligenceSection() {
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
      className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-20"
    >
      {/* Premium ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-[#1A1053]/[0.02] rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#1A1053]/[0.015] rounded-full blur-[120px]" />
        <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-sky-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Content */}
          <div
            className={`flex flex-1 flex-col items-start gap-8 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            {/* Header */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#1A1053]/[0.06] border border-[#1A1053]/10 px-4 py-1.5 text-xs font-bold tracking-wider text-[#1A1053] uppercase mb-5 backdrop-blur-sm">
                <BrainCircuit className="h-4 w-4" />
                AI-Powered Intelligence
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold tracking-tight text-[#1A1053] leading-[1.15]">
                Smart Healthcare{" "}
                <span className="relative inline-block text-sky-600">
                  Intelligence
                  <svg
                    className="absolute -bottom-1.5 left-0 w-full h-[8px] text-[#1A1053]/12"
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
                </span>
              </h2>

              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                HealthSync connects healthcare operations through intelligent, integrated solutions—helping hospitals streamline workflows, optimize revenue, improve visibility, and make smarter decisions.
              </p>
            </div>

            {/* Exactly 2 Feature Cards */}
            <div className="flex flex-col gap-5 w-full">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className={`group relative rounded-2xl bg-[#f8f9fc] border border-slate-200/80 p-6 md:p-7 transition-all duration-500 ease-out hover:bg-white hover:shadow-[0_12px_36px_rgba(26,16,83,0.08)] hover:border-[#1A1053]/20 hover:-translate-y-1 ${isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                      }`}
                    style={{ transitionDelay: `${250 + i * 150}ms` }}
                  >
                    {/* Left accent indicator bar */}
                    <div
                      className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: feature.accent }}
                    />

                    <div className="flex items-start gap-5">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${feature.lightBg} transition-all duration-300 group-hover:scale-110`}
                        style={{
                          boxShadow: `0 4px 20px ${feature.accent}20`,
                        }}
                      >
                        <Icon className={`h-6 w-6 ${feature.iconColor}`} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-[#1A1053] mb-2 tracking-tight">
                          {feature.title}
                        </h3>
                        <p className="text-[14px] leading-relaxed text-slate-600 font-normal">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: AI Brain Visual */}
          <div
            className={`flex-1 w-full max-w-2xl lg:max-w-none transition-all duration-1000 delay-300 ease-out ${isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
              }`}
          >
            <div className="relative animate-float">
              {/* Decorative Cyber Neon Glow */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-sky-500/20 via-indigo-600/15 to-teal-400/20 rounded-[3rem] blur-2xl -z-10" />

              {/* Image Container */}
              <div className="relative rounded-[1.75rem] bg-gradient-to-b from-[#0f172a] to-[#020617] p-2.5 sm:p-3.5 shadow-[0_30px_80px_-15px_rgba(14,165,233,0.25)] border border-sky-500/30 ring-1 ring-cyan-400/15 overflow-hidden group transition-all duration-500 hover:shadow-[0_35px_90px_-10px_rgba(14,165,233,0.35)]">
                <div className="relative w-full aspect-[16/10.5] rounded-[1.25rem] overflow-hidden bg-slate-950">
                  <Image
                    src={image3}
                    alt="AI HealthSync Core Intelligence Ecosystem"
                    className="w-full h-full object-contain sm:object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    priority
                  />
                  {/* Subtle cyber scanline shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/[0.04] via-transparent to-indigo-500/[0.04] pointer-events-none" />
                </div>

                {/* Floating Status Pill */}
                <div className="absolute top-4 right-4 flex items-center gap-2.5 rounded-full bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 border border-sky-400/30 shadow-lg text-sky-200 text-xs font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                  </span>
                  AI Neural Engine Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}