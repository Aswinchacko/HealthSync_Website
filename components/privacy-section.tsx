"use client";

import {
  ShieldCheck,
  Gavel,
  Info,
  Database,
  Shield,
  Lock,
  UserCheck,
  Mail,
  User,
  Sliders,
  CheckCircle2,
  KeyRound,
  ShieldOff
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export function PrivacySection() {
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

  const navItems = [
    { id: "sec-1", icon: <Info className="h-4 w-4" />, label: "Introduction" },
    { id: "sec-2", icon: <Database className="h-4 w-4" />, label: "Information Collection" },
    { id: "sec-3", icon: <Shield className="h-4 w-4" />, label: "HIPAA Compliance" },
    { id: "sec-4", icon: <Lock className="h-4 w-4" />, label: "Data Security" },
    { id: "sec-5", icon: <UserCheck className="h-4 w-4" />, label: "User Rights & GDPR" },
    { id: "sec-6", icon: <Mail className="h-4 w-4" />, label: "Contact Privacy Team" },
  ];

  return (
    <div className="w-full bg-slate-50/30 font-sans text-slate-900 py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-7xl">

        {/* Header Title Section */}
        <div className="max-w-3xl mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-100/70 px-4 py-1.5 text-xs font-bold text-teal-900 border border-cyan-200 shadow-sm mb-6 transition-transform hover:scale-105 cursor-default">
            <ShieldCheck className="h-4 w-4 text-teal-700 animate-pulse" />
            Privacy Commitment 2024
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1053] tracking-tight mb-4">
            Privacy Policy & Data Protection
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed hover:text-slate-800 transition-colors">
            At HealthSync, we believe that health data is the most sensitive information a person owns. We are committed to maintaining the highest standards of security and transparency.
          </p>
        </div>

        {/* 2 Top Highlight Cards (Side-by-Side) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-5xl animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-100 ease-out">
          {/* Card 1: HIPAA Compliant */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex items-start gap-4 border-l-4 border-l-emerald-500 hover:-translate-y-1 hover:shadow-md transition-all group cursor-pointer">
            <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
              <ShieldCheck className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1A1053] mb-1 group-hover:text-emerald-700 transition-colors">HIPAA Compliant</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                Full adherence to the Health Insurance Portability and Accountability Act. All PHI is encrypted and strictly audited.
              </p>
            </div>
          </div>

          {/* Card 2: GDPR Ready */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex items-start gap-4 border-l-4 border-l-sky-500 hover:-translate-y-1 hover:shadow-md transition-all group cursor-pointer">
            <div className="p-3 bg-sky-100 text-sky-700 rounded-xl shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
              <Gavel className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1A1053] mb-1 group-hover:text-sky-700 transition-colors">GDPR Ready</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                Global data protection standards for our international enterprise partners. Full &quot;Right to be Forgotten&quot; support.
              </p>
            </div>
          </div>
        </div>

        {/* 2 Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Navigation Sidebar */}
          <div className="lg:col-span-4 sticky top-28 space-y-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 ease-out">
            <div className="bg-slate-50/70 border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-extrabold tracking-widest text-slate-400 uppercase mb-4 block">
                NAVIGATION
              </span>
              <nav className="flex flex-col gap-2.5">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#e8eafc]/50 text-[#1A1053] font-bold text-sm hover:bg-[#1A1053] hover:text-white transition-all duration-300 hover:scale-[1.02] group"
                  >
                    <span className="text-indigo-600 group-hover:text-indigo-300 transition-colors">{item.icon}</span>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Main Content Column */}
          <div className="lg:col-span-8 space-y-16">

            {/* 1. Introduction Section */}
            <div id="sec-1" className="space-y-4 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="text-3xl font-extrabold text-[#1A1053] tracking-tight">
                1. Introduction
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed hover:text-slate-800 transition-colors">
                This Privacy Policy describes how HealthSync (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and discloses your information when you use our Enterprise Health Platform. By accessing our services, you consent to the practices described in this policy.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed hover:text-slate-800 transition-colors">
                Last updated: June 15, 2024. This policy is reviewed quarterly by our compliance and legal departments to ensure alignment with evolving medical data regulations.
              </p>
            </div>

            {/* 2. Information Collection Section */}
            <div id="sec-2" className="space-y-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="text-3xl font-extrabold text-[#1A1053] tracking-tight">
                2. Information Collection
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Provided Information */}
                <div className="bg-white border border-slate-200/60 rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
                  <div className="flex items-center gap-2 text-[#1A1053] font-bold text-sm sm:text-base group-hover:text-indigo-600 transition-colors">
                    <User className="h-5 w-5 text-indigo-600 group-hover:scale-110 transition-transform" />
                    Provided Information
                  </div>
                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Personal identification (Name, DOB, Email)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Professional credentials for clinicians</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Protected Health Information (PHI) entered by users</span>
                    </div>
                  </div>
                </div>

                {/* Automatic Collection */}
                <div className="bg-white border border-slate-200/60 rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
                  <div className="flex items-center gap-2 text-[#1A1053] font-bold text-sm sm:text-base group-hover:text-teal-600 transition-colors">
                    <Sliders className="h-5 w-5 text-teal-600 group-hover:scale-110 transition-transform" />
                    Automatic Collection
                  </div>
                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Device telemetry and IP addresses</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Diagnostic logs for performance monitoring</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Integration tokens from wearable devices</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. HIPAA Compliance Section */}
            <div id="sec-3" className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm space-y-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out hover:shadow-lg transition-shadow duration-500">
              <h2 className="text-3xl font-extrabold text-[#1A1053] tracking-tight">
                3. HIPAA Compliance
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                As a Business Associate under HIPAA, HealthSync enters into Business Associate Agreements (BAAs) with all Covered Entities. Our platform architecture separates PHI from standard metadata to ensure maximum security.
              </p>

              <div className="bg-slate-50/70 border border-slate-200/60 rounded-2xl p-6 space-y-3 group hover:bg-slate-100/50 transition-colors">
                <h4 className="font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">
                  Our HIPAA Protocols Include:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc pl-5">
                  <li className="hover:text-slate-800 transition-colors">Automated session timeouts for workstations</li>
                  <li className="hover:text-slate-800 transition-colors">Role-based access control (RBAC) restricted by clinical necessity</li>
                  <li className="hover:text-slate-800 transition-colors">Tamper-proof audit logs of all PHI access</li>
                  <li className="hover:text-slate-800 transition-colors">Physical security of data centers (SOC2 Type II certified)</li>
                </ul>
              </div>
            </div>

            {/* 4. Data Security Section */}
            <div id="sec-4" className="space-y-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="text-3xl font-extrabold text-[#1A1053] tracking-tight">
                4. Data Security
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white border border-slate-200/80 rounded-2xl p-6 text-center space-y-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 mx-auto group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                    <Lock className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="font-bold text-[#1A1053] text-sm group-hover:text-cyan-700 transition-colors">AES-256 Encryption</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Military-grade encryption for all data at rest and in transit.
                  </p>
                </div>

                <div className="bg-white border border-slate-200/80 rounded-2xl p-6 text-center space-y-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 mx-auto group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    <KeyRound className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="font-bold text-[#1A1053] text-sm group-hover:text-indigo-700 transition-colors">MFA Mandatory</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Multi-factor authentication required for all platform access.
                  </p>
                </div>

                <div className="bg-white border border-slate-200/80 rounded-2xl p-6 text-center space-y-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 mx-auto group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <ShieldOff className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="font-bold text-[#1A1053] text-sm group-hover:text-emerald-700 transition-colors">Zero-Trust Architecture</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Never trust, always verify every single network request.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. User Rights & GDPR Section */}
            <div id="sec-5" className="space-y-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="text-3xl font-extrabold text-[#1A1053] tracking-tight">
                5. User Rights & GDPR
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-800 font-bold text-xs shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1053] text-sm sm:text-base group-hover:text-indigo-600 transition-colors">Right of Access</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5 group-hover:text-slate-700 transition-colors">
                      You may request a copy of all data we hold about you at any time through our Privacy Portal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-800 font-bold text-xs shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1053] text-sm sm:text-base group-hover:text-indigo-600 transition-colors">Right to Rectification</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5 group-hover:text-slate-700 transition-colors">
                      Correct any inaccurate or incomplete health records directly or via your provider.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-800 font-bold text-xs shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1053] text-sm sm:text-base group-hover:text-indigo-600 transition-colors">Right to Erasure</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5 group-hover:text-slate-700 transition-colors">
                      Request the deletion of your account and personal data, subject to medical record retention laws.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Questions about your privacy? Card Banner */}
            <div id="sec-6" className="bg-[#1A1053] rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out hover:shadow-indigo-900/30 group">
              {/* Background Shield Faint Icon */}
              <Shield className="absolute -right-10 -bottom-10 h-64 w-64 text-white/5 pointer-events-none stroke-[1] group-hover:scale-110 transition-transform duration-700" />

              {/* Animated Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

              <div className="space-y-4 max-w-lg z-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Questions about your privacy?
                </h2>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Our dedicated Data Protection Office is available to discuss our security protocols and your data rights.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/demo"
                    className="rounded-full bg-cyan-400 px-7 py-3 text-xs sm:text-sm font-bold text-slate-950 hover:bg-cyan-300 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-cyan-900/20"
                  >
                    Contact DPO
                  </Link>
                  <Link
                    href="/terms"
                    className="rounded-full border border-indigo-400/50 px-7 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/10 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Compliance Portal
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
