"use client";

import {
  FileCheck,
  Stethoscope,
  Microscope,
  PackagePlus,
  Database,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface SolutionItem {
  icon: any;
  title: string;
  desc: string;
  href: string;
  accent: string;
  gradient: string;
  lightBg: string;
}

const solutions: SolutionItem[] = [
  {
    icon: FileCheck,
    title: "ClaimSync",
    desc: "Automate e-claim conversion, validation, submission, and resubmission to improve accuracy and accelerate reimbursement cycles.",
    href: "/solutions/claim-sync",
    accent: "#1A1053",
    gradient: "from-[#1A1053] to-[#3d2b9c]",
    lightBg: "bg-[#1A1053]/[0.07]",
  },
  {
    icon: Stethoscope,
    title: "Complaint Management",
    desc: "Manage claims efficiently with intelligent validation, data conversion, tracking, and actionable insights that reduce rejections.",
    href: "/solutions/complaint-management",
    accent: "#059669",
    gradient: "from-emerald-600 to-emerald-400",
    lightBg: "bg-emerald-50",
  },
  {
    icon: Microscope,
    title: "Incident Management",
    desc: "Support providers with intelligent clinical insights, data-driven recommendations, and tools that enhance care quality.",
    href: "/solutions/incident-management",
    accent: "#d97706",
    gradient: "from-amber-600 to-amber-400",
    lightBg: "bg-amber-50",
  },
  {
    icon: PackagePlus,
    title: "Asset Management",
    desc: "Improve the management of medical assets, equipment, and inventory with greater visibility, control, and efficiency.",
    href: "/solutions/asset-management",
    accent: "#e11d48",
    gradient: "from-rose-600 to-rose-400",
    lightBg: "bg-rose-50",
  },
  {
    icon: Database,
    title: "HIMS",
    desc: "Centralize, organize, and manage healthcare information securely. HealthSync’s Healthcare Information Management System helps hospitals streamline clinical and administrative data to make more informed decision.",
    href: "/solutions/hims",
    accent: "#0284c7",
    gradient: "from-sky-600 to-sky-400",
    lightBg: "bg-sky-50",
  },
];

export function SolutionsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  const renderSolutionCard = (solution: SolutionItem, i: number) => {
    const Icon = solution.icon;
    const isHovered = hoveredIndex === i;

    return (
      <div
        onMouseEnter={() => setHoveredIndex(i)}
        onMouseLeave={() => setHoveredIndex(null)}
        className={`group relative flex flex-col justify-between w-full h-full rounded-[2rem] bg-white/95 backdrop-blur-xl p-8 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-500 ease-out hover:shadow-[0_24px_60px_rgba(26,16,83,0.12)] hover:-translate-y-2 hover:bg-white hover:border-slate-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
        style={{ transitionDelay: `${100 + i * 80}ms` }}
      >
        {/* Top glow accent bar */}
        <div
          className="absolute top-0 left-8 right-8 h-[3px] rounded-b-full opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{
            background: `linear-gradient(to right, ${solution.accent}40, ${solution.accent})`,
          }}
        />

        {/* Large stylized watermark number */}
        <span className="absolute top-6 right-7 text-[3.75rem] font-bold leading-none text-slate-100/90 select-none transition-colors duration-300 group-hover:text-slate-200/90 pointer-events-none">
          0{i + 1}
        </span>

        <div className="flex flex-col flex-grow">
          {/* Icon Box */}
          <div className="relative mb-6">
            <div
              className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${solution.lightBg} transition-all duration-500 group-hover:scale-110 group-hover:shadow-md`}
              style={{
                boxShadow: isHovered ? `0 8px 25px ${solution.accent}25` : "none",
              }}
            >
              <Icon
                className="h-7 w-7 transition-transform duration-500 group-hover:scale-110"
                style={{ color: solution.accent }}
              />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-[#1A1053] mb-3 tracking-tight group-hover:text-[#1A1053] transition-colors">
            {solution.title}
          </h3>

          {/* Description */}
          <p className="text-[14.5px] leading-relaxed text-slate-600 mb-8 font-normal flex-grow">
            {solution.desc}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 w-full pt-4 border-t border-slate-100 mt-auto">
          <Link
            href={solution.href}
            className="group/btn flex flex-1 items-center justify-center gap-1.5 rounded-full border border-slate-200/90 bg-slate-50/70 py-3 text-xs font-semibold text-slate-700 transition-all duration-300 hover:border-[#1A1053]/30 hover:bg-[#1A1053]/[0.04] hover:text-[#1A1053]"
          >
            Details
            <ChevronRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </Link>

          <Link
            href="/demo"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#1A1053] py-3 text-xs font-semibold text-white shadow-[0_4px_16px_rgba(26,16,83,0.22)] transition-all duration-300 hover:bg-[#251a6b] hover:shadow-[0_8px_24px_rgba(26,16,83,0.32)] active:scale-[0.98]"
          >
            Demo
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f8f9fc] py-16 md:py-20 lg:py-24"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#1A1053]/[0.025] rounded-full blur-[140px]" />
        <div className="absolute bottom-[-5%] right-[-10%] w-[600px] h-[600px] bg-[#1A1053]/[0.02] rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[-5%] w-[400px] h-[400px] bg-[#1A1053]/[0.015] rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div
          className={`mx-auto max-w-3xl text-center mb-16 lg:mb-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#1A1053]/[0.06] border border-[#1A1053]/10 px-5 py-2 text-xs font-bold tracking-wider text-[#1A1053] uppercase mb-6 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            Our Enterprise Solutions
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1A1053] leading-tight">
            Solutions for Every{" "}
            <span className="relative inline-block text-sky-600">
              Healthcare
            </span>{" "}
            Stakeholder
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Our integrated platform delivers intelligent solutions that simplify
            healthcare operations, improve claims efficiency, and support better
            outcomes across the entire ecosystem.
          </p>
        </div>

        {/* All 5 Cards with EXACT Same Width and Height, Centered */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, i) => (
            <div
              key={i}
              className="w-full sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-64px)/3)] flex"
            >
              {renderSolutionCard(solution, i)}
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div
          className={`mt-16 lg:mt-20 text-center transition-all duration-1000 delay-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="/solutions"
            className="group inline-flex items-center gap-3 rounded-full bg-white border border-slate-200/80 px-9 py-4 text-sm font-bold text-[#1A1053] shadow-md transition-all duration-300 hover:border-[#1A1053]/20 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            Explore All Solutions
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1A1053]/[0.06] group-hover:bg-[#1A1053]/10 transition-colors">
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}