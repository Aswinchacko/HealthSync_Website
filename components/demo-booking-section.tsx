"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Lock, ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import image3 from "@/assets/images/image3.png";
import { toast } from "sonner";
import { PhoneInput } from "@components/ui/phone-input";

export function DemoBookingSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [phone, setPhone] = useState<string>();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Demo requested successfully! Check your email for confirmation.");
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-slate-50/60 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column - Hero Content & Visual */}
          <div className={`lg:col-span-6 flex flex-col items-start pt-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-100/80 px-4 py-1.5 text-xs font-bold text-sky-800 tracking-wider uppercase mb-6 shadow-sm transition-transform hover:scale-105 cursor-default">
              Enterprise Healthcare SaaS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#1A1053] leading-[1.15] tracking-tight mb-6">
              Redefining Precision in Clinical Operations.
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl hover:text-slate-800 transition-colors">
              Join over 500+ healthcare institutions using HealthSync to unify patient data, optimize staffing, and ensure absolute compliance at scale.
            </p>

            {/* SLA Badges */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-8">
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all group">
                <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <ShieldCheck className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">99.9%</div>
                  <div className="text-xs font-medium text-slate-500">Uptime SLA</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all group">
                <div className="p-3 rounded-2xl bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                  <Lock className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">HIPAA</div>
                  <div className="text-xs font-medium text-slate-500">Full Compliance</div>
                </div>
              </div>
            </div>

            {/* Dashboard Visual Container */}
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group animate-float" style={{ animationDuration: '8s' }}>
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={image3}
                  alt="Real-time Clinical Analytics Dashboard"
                  className="object-cover w-full h-full opacity-95 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block text-xs font-semibold text-white/90 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20 group-hover:bg-indigo-600/90 transition-colors">
                    Real-time Clinical Analytics Dashboard v4.0
                  </span>
                </div>
              </div>
            </div>

            {/* Trusted By Logos */}
            <div className="mt-10 w-full">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                TRUSTED BY GLOBAL LEADERS
              </p>
              <div className="flex flex-wrap items-center gap-8 text-slate-400 font-extrabold text-sm tracking-wider opacity-70">
                <span className="hover:text-slate-600 hover:scale-105 transition-all cursor-default">MEDICORE</span>
                <span className="hover:text-slate-600 hover:scale-105 transition-all cursor-default">BIOHEALTH</span>
                <span className="hover:text-slate-600 hover:scale-105 transition-all cursor-default">GENESIS</span>
                <span className="hover:text-slate-600 hover:scale-105 transition-all cursor-default">LIFESPAN</span>
              </div>
            </div>

          </div>

          {/* Right Column - Demo Booking Form Card */}
          <div className={`lg:col-span-6 w-full flex justify-center lg:justify-end transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-slate-200/80 shadow-2xl shadow-indigo-900/10 w-full max-w-lg hover:shadow-indigo-900/20 transition-shadow duration-500">
              
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center animate-fade-in-up">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#1A1053] mb-3">
                    Demo Scheduled!
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-xs mb-8">
                    Thank you! Our healthcare solutions specialist will reach out to you within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="py-3 px-8 bg-[#1A1053] text-white font-semibold rounded-full text-sm shadow-md hover:bg-[#1A1053]/90 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <h2 className="text-2xl font-extrabold text-[#1A1053]">
                      Book a Demo
                    </h2>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                      Tell us about your organization and our specialists will reach out within 2 hours.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Sarah Chen"
                      className="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@hospital.org"
                      className="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Organization
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="St. Mary's Medical Center"
                      className="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Role & Org Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Role
                      </label>
                      <div className="relative group">
                        <select className="w-full appearance-none px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all pr-10 cursor-pointer">
                          <option>Chief Medical Officer</option>
                          <option>Chief Executive Officer</option>
                          <option>IT Director</option>
                          <option>Department Head</option>
                          <option>Other</option>
                        </select>
                        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none group-focus-within:text-indigo-500 transition-colors" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Org Size
                      </label>
                      <div className="relative group">
                        <select className="w-full appearance-none px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all pr-10 cursor-pointer">
                          <option>1-100 employees</option>
                          <option>101-500 employees</option>
                          <option>500+ employees</option>
                        </select>
                        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none group-focus-within:text-indigo-500 transition-colors" />
                      </div>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <div className="focus-within:ring-4 focus-within:ring-indigo-100 rounded-xl transition-all">
                      <PhoneInput
                        value={phone}
                        onChange={setPhone}
                        defaultCountry="AE"
                        placeholder="(555) 000-0000"
                        className="bg-slate-50/70 border-slate-200 focus-within:border-indigo-300 focus-within:bg-white text-sm placeholder:text-slate-400 [&_input]:bg-transparent [&_input]:px-4 [&_input]:py-3 [&_button]:bg-slate-100/80 [&_button]:border-r [&_button]:border-slate-200 [&_button]:px-3"
                      />
                    </div>
                  </div>

                  {/* Inquiry Details */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Inquiry Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your clinical challenges..."
                      className="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  {/* Confirm Schedule Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#1A1053] hover:bg-[#1A1053]/90 text-white rounded-full font-bold text-sm shadow-xl shadow-indigo-900/20 hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 mt-2 group active:scale-95"
                  >
                    Confirm Schedule
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                    By clicking confirm, you agree to our <a href="#" className="underline hover:text-indigo-600 transition-colors">Terms</a> and <a href="#" className="underline hover:text-indigo-600 transition-colors">Privacy Policy</a>. Data is stored securely.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
