"use client";

import { Zap, ShieldCheck, Heart, Share2, Users, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import aboutHero from "@/assets/images/about-hero.png";
// import aboutCeo from "@/assets/images/about-ceo.png";
// import aboutCto from "@/assets/images/about-cto.png";
// import aboutCfo from "@/assets/images/about-cfo.png";

export function AboutSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-12");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-white font-sans overflow-hidden">
      {/* 1. Hero Header Section */}
      <section className="relative w-full h-[520px] sm:h-[600px] md:h-[650px] overflow-hidden flex items-center animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
        {/* Background AI Image */}
        <div
          className="absolute inset-0 z-0 animate-float"
          style={{ animationDuration: "10s" }}
        >
          <Image
            src={aboutHero}
            alt="HealthSync Modern Facility"
            className="w-full h-full object-cover scale-105"
            priority
          />
          {/* Dark Blue Gradient Overlay matching screenshot */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1053] via-[#1A1053]/95 sm:via-[#1A1053]/80 to-transparent z-10" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 lg:px-12 relative z-20 text-white max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 text-xs font-semibold tracking-wider text-sky-200 uppercase mb-6 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              ESTABLISHED 2026
            </div>

            <div className="text-xs sm:text-sm font-bold tracking-widest text-sky-300 uppercase mb-3">
              HealthSync: The Digital Engine for Modern Healthcare
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.15] tracking-tight mb-6">
              Transforming Healthcare.{" "}
              <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-indigo-200 bg-clip-text text-transparent block sm:inline">
                Empowering Better Outcomes.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed max-w-2xl font-normal">
              HealthSync brings together intelligent solutions across clinical, financial, administrative, and operational functions, helping healthcare organizations work smarter, operate efficiently, and deliver better outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Our Purpose & Core Principles Section */}
      <section className="py-20 md:py-28 bg-[#f8f9fc] animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 delay-100 ease-out relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">

          {/* Header Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-100/80 px-4 py-1.5 text-xs font-bold tracking-widest text-sky-900 border border-sky-200/80 uppercase mb-4 shadow-2xs">
                01. OUR PURPOSE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1053] leading-tight tracking-tight">
                Transforming Healthcare Through Smarter Technology
              </h2>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center">
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                At HealthSync, we believe technology should make healthcare simpler, smarter, and more connected. Our solutions are designed to help healthcare organizations streamline operations, turn data into actionable insights, and empower their teams to deliver better outcomes.
              </p>
            </div>
          </div>

          {/* 3 Principles Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

            {/* Principle 1 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg shadow-slate-200/40 hover:shadow-xl hover:border-indigo-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="h-6 w-6" />
                  </div>
                  <span className="text-2xl font-black text-slate-300 group-hover:text-indigo-600 transition-colors">
                    01
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1A1053] mb-3 group-hover:text-indigo-900 transition-colors">
                  Empower People
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Technology should simplify the work of healthcare professionals and help them focus on what matters most.
                </p>
              </div>
            </div>

            {/* Principle 2 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg shadow-slate-200/40 hover:shadow-xl hover:border-sky-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <span className="text-2xl font-black text-slate-300 group-hover:text-sky-600 transition-colors">
                    02
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1A1053] mb-3 group-hover:text-sky-900 transition-colors">
                  Turn Data Into Insights
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  The right information, at the right time, enables better decisions and stronger outcomes.
                </p>
              </div>
            </div>

            {/* Principle 3 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg shadow-slate-200/40 hover:shadow-xl hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="h-6 w-6" />
                  </div>
                  <span className="text-2xl font-black text-slate-300 group-hover:text-emerald-600 transition-colors">
                    03
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1A1053] mb-3 group-hover:text-emerald-900 transition-colors">
                  Make Complexity Simple
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Powerful technology should be intuitive, practical, and easy to use.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Dark Blue Stats Banner */}
      <section className="bg-[#1A1053] py-16 text-white relative animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
        {/* Subtle Glow */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 animate-pulse pointer-events-none"
          style={{ animationDuration: "4s" }}
        />
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex flex-col items-start justify-center pt-4 md:pt-0 group">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">
                GLOBAL REACH
              </span>
              <div className="text-4xl sm:text-5xl font-serif font-extrabold text-white group-hover:scale-110 transition-transform origin-left">
                500+
              </div>
              <span className="text-sm font-medium text-slate-300 mt-1">
                Medical Partners Worldwide
              </span>
            </div>

            <div className="flex flex-col items-start justify-center pt-6 md:pt-0 md:pl-8 group">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">
                VOLUME
              </span>
              <div className="text-4xl sm:text-5xl font-serif font-extrabold text-white group-hover:scale-110 transition-transform origin-left">
                1.2M
              </div>
              <span className="text-sm font-medium text-slate-300 mt-1">
                Daily Data Syncs
              </span>
            </div>

            <div className="flex flex-col items-start justify-center pt-6 md:pt-0 md:pl-8 group">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">
                EFFICIENCY
              </span>
              <div className="text-4xl sm:text-5xl font-serif font-extrabold text-white group-hover:scale-110 transition-transform origin-left">
                40%
              </div>
              <span className="text-sm font-medium text-slate-300 mt-1">
                Reduction in Admin Latency
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Commitment Cards Section */}
      <section className="py-20 md:py-28 bg-[#f5f8fc]/70 border-t border-slate-100 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest text-sky-600 uppercase mb-3 block">
              02. OUR COMMITMENT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1053] tracking-tight mb-4">
              Secure. Responsible. Connected.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1053] mb-3">
                Data Security &amp; Privacy
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Protecting sensitive healthcare information is at the heart of HealthSync, with secure access, responsible data management, and privacy built into our solutions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-500 flex items-center justify-center mb-6">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1053] mb-3">
                Built on Trust
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We design HealthSync with security, privacy, accountability, and reliability at every stage, helping healthcare organizations manage sensitive data with confidence.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left">
              <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-500 flex items-center justify-center mb-6">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1053] mb-3">
                Smarter, Connected Operations
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                HealthSync connects essential healthcare workflows, enabling organizations to streamline operations, improve visibility, and make better-informed decisions.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mb-6">
                <Share2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1053] mb-3">
                Regulatory Control
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Built for the UAE healthcare ecosystem, HealthSync supports organizations across Dubai, Sharjah, and Al Ain with solutions designed around applicable security, privacy, and regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call to Action Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#f0f6fa] via-sky-50/40 to-slate-100 border-t border-slate-100 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1053] tracking-tight mb-8">
            Ready to Transform Your Healthcare Operations?
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto rounded-full bg-[#1A1053] px-9 py-4 text-sm font-semibold text-white shadow-xl shadow-indigo-950/20 hover:bg-[#1A1053]/90 hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
