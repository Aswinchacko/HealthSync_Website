"use client";

import { ArrowRight, Database, ShieldCheck, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import solution1 from "@/assets/images/solution1.png";

export function HIMSDetail() {
  return (
    <div className="w-full bg-white font-sans">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-sky-50/30 to-white pt-12 md:pt-16 pb-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left Content */}
            <div className="flex-1 flex flex-col items-start gap-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-1.5 text-xs font-semibold text-sky-700 border border-sky-200/60 shadow-xs">
                <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
                Hospital Information Management System (HIMS)
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A1053] leading-[1.12] tracking-tight">
                HIMS: Centralized Healthcare Intelligence
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Centralize, organize, and manage healthcare information securely. HealthSync’s Healthcare Information Management System helps hospitals streamline clinical and administrative data to make more informed decisions.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2 w-full sm:w-auto">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center rounded-full bg-[#1A1053] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-900/20 hover:bg-[#1A1053]/90 hover:scale-[1.02] transition-all"
                >
                  Book a Demo
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#1A1053] shadow-xs border border-slate-200 hover:bg-slate-50 transition-all"
                >
                  Contact Specialists
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Screen Visual */}
            <div className="flex-1 w-full max-w-2xl relative">
              <div className="relative rounded-3xl bg-slate-900 border-[10px] border-slate-800 p-2 shadow-2xl shadow-indigo-950/20 overflow-hidden aspect-[4/3] flex items-center justify-center">
                <Image
                  src={solution1}
                  alt="HealthSync HIMS Platform"
                  className="object-cover w-full h-full rounded-xl"
                  priority
                />
                <div className="absolute top-6 left-6 flex flex-col bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/80 z-20 min-w-[180px]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    DATA ACCURACY
                  </span>
                  <span className="text-xl md:text-2xl font-extrabold text-sky-600 mt-0.5">
                    99.9% Synchronized
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Key Modules Grid */}
      <section className="py-20 bg-slate-50/60 border-t border-slate-100">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-sky-600 uppercase mb-3 block">
              SYSTEM CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1053] tracking-tight">
              Unified Infrastructure for Modern Hospitals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1053] mb-3">Centralized Clinical Records</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Connect electronic health records, diagnostic reports, and medical histories into an accessible, unified patient profile.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1053] mb-3">Administrative Streamlining</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Automate admissions, billing, staff scheduling, and resource allocation to eliminate manual paperwork and operational latency.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1053] mb-3">Security &amp; Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Enterprise grade role-based access control, encrypted patient records, and full alignment with regional UAE regulatory standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
