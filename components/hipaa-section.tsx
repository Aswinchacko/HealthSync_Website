"use client";

import { useState, useEffect } from "react";
import { MapPin, Mail, Phone, ShieldCheck, ArrowRight, Send, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import dubaiMap from "@/assets/images/dubai-map.png";

import { toast } from "sonner";

export function HipaaSection() {
  const [inquiryType, setInquiryType] = useState("Sales Inquiry");
  // const [isVisible, setIsVisible] = useState(false);
  // const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Inquiry submitted successfully! Our team will contact you shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="w-full bg-slate-50/30 font-sans text-slate-900 py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-7xl">

        {/* Main Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1053] tracking-tight leading-[1.15] mb-4">
            Let&apos;s build the future of <span className="text-[#02a9da] inline-block hover:scale-105 transition-transform cursor-default">digital health</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed hover:text-slate-800 transition-colors">
            Whether you&apos;re looking for enterprise clinical solutions or require technical assistance with our API, our global team is ready to sync.
          </p>
        </div>

        {/* 2 Columns Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-24">

          {/* Left Form Box Card */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-[2.5rem] p-8 sm:p-10 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-200/60 transition-shadow duration-500 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-100 ease-out">
            {/* Top Switch Pills */}
            <div className="inline-flex p-1.5 bg-slate-100 rounded-full mb-8">
              <button
                type="button"
                onClick={() => setInquiryType("Sales Inquiry")}
                className={`px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 ${inquiryType === "Sales Inquiry"
                    ? "bg-[#1A1053] text-white shadow-md scale-105"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                  }`}
              >
                Sales Inquiry
              </button>
              <button
                type="button"
                onClick={() => setInquiryType("Technical Support")}
                className={`px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 ${inquiryType === "Technical Support"
                    ? "bg-[#1A1053] text-white shadow-md scale-105"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                  }`}
              >
                Technical Support
              </button>
            </div>

            {/* Title & Subtitle */}
            <h2 className="text-2xl font-extrabold text-[#1A1053] mb-1">
              Connect with Sales
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mb-6">
              Speak with a specialist about custom healthcare enterprise solutions.
            </p>

            {/* Form Fields Grid */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 transition-colors">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="John Doe"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200/80 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 transition-colors">
                    Work Email
                  </label>
                  <input
                    type="email"
                    defaultValue="john@hospital.com"
                    placeholder="john@hospital.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200/80 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 transition-colors">
                    Organization
                  </label>
                  <input
                    type="text"
                    defaultValue="General Medical Center"
                    placeholder="General Medical Center"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200/80 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 transition-colors">
                    Inquiry Type
                  </label>
                  <div className="relative group">
                    <select
                      defaultValue="Integration Partnership"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200/80 rounded-xl text-sm font-medium text-slate-800 appearance-none focus:outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 pr-10 transition-all cursor-pointer"
                    >
                      <option>Integration Partnership</option>
                      <option>Enterprise Deployment</option>
                      <option>Compliance Audit</option>
                      <option>API Support</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none group-focus-within:text-blue-500 transition-colors" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 transition-colors">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can our clinical engineering team help you today?"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200/80 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 resize-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#1A1053] hover:bg-[#1A1053]/90 text-white rounded-full font-bold text-sm shadow-lg shadow-indigo-950/20 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 mt-2 group active:scale-95"
              >
                Submit Inquiry
                <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Right Info Column */}
          <div className="lg:col-span-5 space-y-6">

            {/* Dubai Headquarters Card */}
            <div className="bg-[#1A1053] text-white rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden group animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 ease-out hover:shadow-indigo-900/40">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-500" />

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2A2B66] text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-[#2A2B66] transition-all duration-300">
                <MapPin className="h-6 w-6" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                Dubai Headquarters
              </h3>
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest block mb-4">
                Global Enterprise Hub
              </span>

              <div className="text-sm text-slate-300 leading-relaxed space-y-1 mb-6 font-normal">
                <p className="hover:text-white transition-colors">HealthSync Tower, Suite 402</p>
                <p className="hover:text-white transition-colors">Dubai International Financial Centre (DIFC)</p>
                <p className="hover:text-white transition-colors">Dubai, United Arab Emirates</p>
              </div>

              {/* Map Graphic Visual */}
              <div className="w-full h-44 relative rounded-2xl overflow-hidden shadow-inner border border-white/10 group-hover:border-white/20 transition-colors">
                <Image
                  src={dubaiMap}
                  alt="Dubai DIFC Map"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Email Support Box */}
            <div className="bg-white border border-slate-200/60 rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 hover:shadow-md transition-all group cursor-pointer animate-on-scroll opacity-0 translate-y-8 duration-1000 delay-300 ease-out">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 shadow-sm shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase block group-hover:text-teal-600 transition-colors">
                  EMAIL SUPPORT
                </span>
                <span className="text-base font-extrabold text-[#1A1053] group-hover:text-teal-700 transition-colors">
                  info@healthsync.ae
                </span>
              </div>
            </div>

            {/* Phone Support Box */}
            <div className="bg-white border border-slate-200/60 rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 hover:shadow-md transition-all group cursor-pointer animate-on-scroll opacity-0 translate-y-8 duration-1000 delay-400 ease-out">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 shadow-sm shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase block group-hover:text-teal-600 transition-colors">
                  PHONE SUPPORT
                </span>
                <span className="text-base font-extrabold text-[#1A1053] group-hover:text-teal-700 transition-colors">
                  +971 4 555 SYNC
                </span>
              </div>
            </div>

            {/* HIPAA & GDPR Compliant Card */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 text-center shadow-sm space-y-1 hover:-translate-y-1 hover:shadow-md transition-all group cursor-pointer animate-on-scroll opacity-0 translate-y-8 duration-1000 delay-500 ease-out">
              <ShieldCheck className="h-7 w-7 text-emerald-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <h4 className="font-extrabold text-[#1A1053] text-sm sm:text-base group-hover:text-emerald-700 transition-colors">
                HIPAA & GDPR Compliant
              </h4>
              <p className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors">
                Your data is encrypted using military-grade AES-256 protocols.
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Global Clinical Presence Section */}
      <section className="bg-slate-50/70 border-t border-slate-200/60 py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1053] tracking-tight mb-3">
                Global Clinical Presence
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-2xl hover:text-slate-800 transition-colors">
                We maintain 14 regional nodes to ensure sub-10ms latency for critical clinical operations globally.
              </p>
            </div>

            <Link
              href="/infrastructure"
              className="inline-flex items-center gap-2 text-sm font-bold text-teal-600 hover:text-teal-700 transition-all hover:translate-x-1 shrink-0 group"
            >
              View All Locations
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Location 1: Singapore */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-1 hover:-translate-y-1 hover:shadow-lg hover:border-indigo-200 transition-all duration-300 group cursor-default animate-on-scroll opacity-0 translate-y-8 delay-100 ease-out">
              <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs mb-3 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">SG</div>
              <h3 className="text-lg font-extrabold text-[#1A1053] group-hover:text-indigo-600 transition-colors">Singapore</h3>
              <p className="text-xs font-medium text-slate-500 group-hover:text-slate-600 transition-colors">Asia-Pacific Tech Center</p>
              <p className="text-xs font-medium text-slate-500 group-hover:text-slate-600 transition-colors">One North, Buona Vista</p>
            </div>

            {/* Location 2: London */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-1 hover:-translate-y-1 hover:shadow-lg hover:border-indigo-200 transition-all duration-300 group cursor-default animate-on-scroll opacity-0 translate-y-8 delay-200 ease-out">
              <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs mb-3 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">UK</div>
              <h3 className="text-lg font-extrabold text-[#1A1053] group-hover:text-indigo-600 transition-colors">London</h3>
              <p className="text-xs font-medium text-slate-500 group-hover:text-slate-600 transition-colors">EMEA Regulatory HQ</p>
              <p className="text-xs font-medium text-slate-500 group-hover:text-slate-600 transition-colors">Canary Wharf, E14</p>
            </div>

            {/* Location 3: Boston */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-1 hover:-translate-y-1 hover:shadow-lg hover:border-indigo-200 transition-all duration-300 group cursor-default animate-on-scroll opacity-0 translate-y-8 delay-300 ease-out">
              <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs mb-3 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">US</div>
              <h3 className="text-lg font-extrabold text-[#1A1053] group-hover:text-indigo-600 transition-colors">Boston</h3>
              <p className="text-xs font-medium text-slate-500 group-hover:text-slate-600 transition-colors">Clinical Research Lab</p>
              <p className="text-xs font-medium text-slate-500 group-hover:text-slate-600 transition-colors">Kendall Square, MA</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
