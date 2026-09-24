"use client";

import { useEffect, useState } from "react";
import { ShieldCheck, RefreshCw, Search, FileCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import image4 from "@/assets/images/image4.png";
import userImg from "@/assets/images/user.jpg";

export function ClaimSyncDetail() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-sky-50/20 to-white pt-6 md:pt-8 pb-16">
        <div className="container mx-auto px-5 md:px-8 lg:px-12 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left Content */}
            <div
              className={`flex-[0.95] flex flex-col items-start gap-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-1.5 text-xs font-semibold text-teal-700 border border-cyan-200/60 shadow-sm">
                <FileCheck className="h-4 w-4 text-teal-600" />
                Smart Claim Solutions
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1053] leading-[1.12] tracking-tight">
                ClaimSync
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                ClaimSync is a healthcare claims management and submission platform from HealthSync, designed to simplify the journey from patient service to successful claim submission. Capture claim information, manage authorizations, validate data, submit claims, and track payer responses all through one connected workflow.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2 w-full sm:w-auto">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center rounded-full bg-[#1A1053] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-900/20 hover:bg-[#1A1053]/90 transition-all"
                >
                  Book a Demo
                </Link>
              </div>
            </div>

            {/* Right Screen Visual */}
            <div
              className={`relative flex-[1.05] w-full max-w-2xl lg:max-w-none transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="relative animate-float">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#1A1053]/5 to-transparent rounded-[2rem] blur-xl" />
                <div className="relative rounded-3xl bg-slate-900 border-[10px] border-slate-800 p-2 shadow-2xl shadow-indigo-950/20 overflow-hidden aspect-[4/3] flex items-center justify-center">
                  <Image
                    src={image4}
                    alt="ClaimSync Dashboard"
                    className="object-cover w-full h-full rounded-xl"
                  />
                  {/* Floating Status Card Badge Overlay */}
                  <div className="absolute top-6 left-6 flex flex-col bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/80 z-20 min-w-[170px]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      CLAIM STATUS
                    </span>
                    <span className="text-xl md:text-2xl font-extrabold text-emerald-600 mt-0.5">
                      99.9% Valid
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Proven Enterprise ROI (Dark Navy Stats Section) */}
      <section className="bg-[#1A1053] py-16 md:py-20 text-white">
        <div className="container mx-auto px-5 md:px-8 lg:px-12 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Left Description */}
            <div className="flex-1 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
                Built for Healthcare Revenue Cycle Teams
              </h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6">
                ClaimSync can support organizations that need a more structured approach to electronic claims management.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-200 text-sm md:text-base font-medium">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                  Clinics &amp; Medical Centers
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                  Hospitals &amp; Healthcare Networks
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                  Doctors
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                  Patients
                </li>
              </ul>
            </div>

            {/* Right Stat Cards */}
            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              {/* Stat Card 1 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-center">
                <div className="text-5xl lg:text-6xl font-extrabold text-sky-400 tracking-tight mb-2">
                  40%
                </div>
                <p className="text-slate-200 text-sm font-semibold leading-snug">
                  Reduction in Processing Time
                </p>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-center">
                <div className="text-5xl lg:text-6xl font-extrabold text-emerald-400 tracking-tight mb-2">
                  99.9%
                </div>
                <p className="text-slate-200 text-sm font-semibold leading-snug">
                  Accuracy in Code Mapping
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Unmatched Precision, Unrivaled Speed */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-5 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1053] tracking-tight">
              Unmatched Precision, Unrivaled Speed
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-600">
              Leveraging proprietary AI to bridge the gap between providers and payers instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all duration-300 flex flex-col items-start">
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6">
                <RefreshCw className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1053] mb-3">
                Resubmission Workflow
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Rejected or returned claims don&apos;t have to disappear into a spreadsheet. Claim Sync helps teams identify claims requiring attention, correct the relevant information, and move them through the resubmission workflow.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all duration-300 flex flex-col items-start">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <Search className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1053] mb-3">
                Centralized Claim Search
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Find the claim you need quickly. Search and filter claims using relevant information such as: Patient, Claim number, Authorization number and more. Spend less time looking for claims and more time resolving them.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all duration-300 flex flex-col items-start">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1053] mb-3">
                Data Security &amp; Control
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Your claims data is critical to your organization. Claim Sync is designed with controlled access and data management in mind, helping organizations maintain appropriate visibility over sensitive healthcare and financial information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Built for the Modern Healthcare Stack */}
      <section className="py-20 md:py-24 bg-slate-50/70 border-y border-slate-100">
        <div className="container mx-auto px-5 md:px-8 lg:px-12 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left Column */}
            <div className="flex-1 flex flex-col items-start">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1053] tracking-tight mb-4">
                Built for Healthcare Revenue Cycle Teams
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 max-w-lg">
                Claim Sync can support organizations that need a more structured approach to electronic claims management.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#1A1053]" />
                  Clinics &amp; Medical Centers
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#1A1053]" />
                  Hospitals &amp; Healthcare Networks
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#1A1053]" />
                  Doctors
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#1A1053]" />
                  Patients
                </li>
              </ul>
            </div>

            {/* Right 2x2 EHR Cards */}
            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col items-center justify-center text-center hover:border-slate-300 transition-all">
                <h4 className="text-2xl font-extrabold text-slate-900">Epic</h4>
                <p className="text-xs font-medium text-slate-500 mt-1">Native Integration</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col items-center justify-center text-center hover:border-slate-300 transition-all">
                <h4 className="text-2xl font-extrabold text-slate-900">Cerner</h4>
                <p className="text-xs font-medium text-slate-500 mt-1">Certified Partner</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col items-center justify-center text-center hover:border-slate-300 transition-all">
                <h4 className="text-2xl font-extrabold text-slate-900">MEDITECH</h4>
                <p className="text-xs font-medium text-slate-500 mt-1">API Hub Connect</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col items-center justify-center text-center hover:border-slate-300 transition-all">
                <h4 className="text-2xl font-extrabold text-slate-900">Athena</h4>
                <p className="text-xs font-medium text-slate-500 mt-1">Real-time Feed</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 5. Testimonial Quote Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-8 lg:px-12 max-w-7xl flex flex-col items-center text-center">
          {/* Avatar and yellow highlight tag */}
          <div className="flex flex-col items-center mb-6 relative">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md mb-2 bg-slate-100">
              <Image
                src={userImg}
                alt="Dr. Sarah Chen"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="bg-amber-300 text-slate-900 font-bold px-3 py-1 text-xs rounded-md shadow-sm">
              Medhavi Gupta
            </span>
          </div>

          {/* Quote Text */}
          <blockquote className="max-w-4xl text-xl sm:text-2xl md:text-3xl font-bold text-[#1A1053] leading-snug italic mb-6">
            &ldquo;Implementing Claim Sync was a turning point for our revenue cycle operations. We saw an immediate 25% uplift in first-pass clean claims and significantly reduced our administrative overhead.&rdquo;
          </blockquote>

          {/* Author Details */}
          <div>
            <div className="text-lg font-bold text-[#1A1053]">
              Dr. Sarah Chen
            </div>
            <div className="text-xs font-semibold tracking-widest text-slate-500 uppercase mt-1">
              CHIEF FINANCIAL OFFICER, METROPOL REGIONAL MEDICAL CENTER
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Card Banner Section */}
      <section className="py-12 pb-20 bg-white">
        <div className="container mx-auto px-5 md:px-8 lg:px-12 max-w-7xl">
          <div className="bg-[#1A1053] rounded-[2.5rem] p-10 sm:p-14 md:p-16 text-center text-white relative overflow-hidden shadow-2xl max-w-6xl mx-auto">
            {/* Background Blob decoration */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Ready To Explore ClaimSync
              </h2>
              <p className="text-indigo-200 text-base md:text-lg mb-8 leading-relaxed">
                Connect with our enterprise specialists to see how Claim Sync fits into your existing ecosystem.
              </p>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#1A1053] shadow-lg hover:bg-slate-100 transition-all hover:scale-105"
              >
                Book a Demo Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
