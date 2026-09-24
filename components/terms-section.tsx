"use client";

import { ShieldCheck, Shield, Sparkles, CheckCircle2, Download, HelpCircle, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import termsIp from "@/assets/images/terms-ip.png";

export function TermsSection() {
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
    { id: "sec-1", label: "1. Introduction" },
    { id: "sec-2", label: "2. User Obligations" },
    { id: "sec-3", label: "3. Intellectual Property" },
    { id: "sec-4", label: "4. Limitation of Liability" },
    { id: "sec-5", label: "5. Governing Law" },
    { id: "sec-6", label: "6. Support & Contact" },
  ];

  return (
    <div className="w-full bg-slate-50/30 font-sans text-slate-900 py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-7xl">

        {/* Header Title Section */}
        <div className="max-w-3xl mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-1.5 text-xs font-bold text-teal-700 border border-cyan-200/80 shadow-sm mb-6 transition-transform hover:scale-105 cursor-default">
            <ShieldCheck className="h-4 w-4 text-teal-600 animate-pulse" />
            TRUST & COMPLIANCE
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1053] tracking-tight mb-4">
            Terms of Service
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed hover:text-slate-800 transition-colors">
            Last updated: October 24, 2024. These terms outline our mutual commitments to security, HIPAA compliance, and enterprise integrity.
          </p>
        </div>

        {/* 2 Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Sticky Sidebar */}
          <div className="lg:col-span-4 sticky top-28 space-y-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 ease-out">
            <div className="bg-slate-50/70 border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-extrabold tracking-widest text-slate-400 uppercase mb-4 block">
                ON THIS PAGE
              </span>
              <nav className="flex flex-col gap-3 text-sm font-medium text-slate-600">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="hover:text-[#1A1053] hover:font-bold hover:bg-[#e8eafc]/50 p-2 rounded-lg transition-all duration-300 hover:translate-x-1"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Need a PDF Card */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm flex flex-col items-start gap-3 hover:shadow-md hover:-translate-y-1 transition-all group">
              <h4 className="font-bold text-[#1A1053] text-base group-hover:text-indigo-600 transition-colors">Need a PDF?</h4>
              <p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                Download a signed copy for your legal department.
              </p>
              <button className="mt-2 inline-flex items-center gap-2 text-xs font-bold text-[#1A1053] hover:underline hover:text-indigo-600 transition-colors">
                <Download className="h-4 w-4 text-[#1A1053] group-hover:text-indigo-600 group-hover:-translate-y-1 group-hover:scale-110 transition-all" />
                Download Document
              </button>
            </div>
          </div>

          {/* Right Main Content Area */}
          <div className="lg:col-span-8 space-y-16">

            {/* 1. Introduction Section */}
            <div id="sec-1" className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out hover:shadow-lg transition-shadow duration-500">
              <h2 className="text-3xl font-bold text-[#1A1053] tracking-tight mb-6">
                1. Introduction
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p className="hover:text-slate-800 transition-colors">
                  Welcome to HealthSync. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our enterprise healthcare platform, including our HIPAA-compliant data analytics, patient management tools, and integrated API services. By accessing our platform, you agree to be bound by these Terms and our Privacy Policy.
                </p>
                <p className="hover:text-slate-800 transition-colors">
                  HealthSync provides a secure digital infrastructure designed for healthcare providers, pharmaceutical enterprises, and medical research institutions. Our mission is to synchronize health data while maintaining the highest standards of clinical privacy and technological security.
                </p>
              </div>

              {/* 3 Mini Feature Badges Box Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col gap-1 hover:-translate-y-1 hover:shadow-md transition-all group cursor-default">
                  <div className="flex items-center gap-2 text-[#1A1053] font-bold text-sm group-hover:text-blue-700 transition-colors">
                    <Shield className="h-4 w-4 text-blue-600 group-hover:scale-110 transition-transform" />
                    HIPAA Ready
                  </div>
                  <span className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors">Fully compliant data handling</span>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col gap-1 hover:-translate-y-1 hover:shadow-md transition-all group cursor-default">
                  <div className="flex items-center gap-2 text-[#1A1053] font-bold text-sm group-hover:text-teal-700 transition-colors">
                    <Sparkles className="h-4 w-4 text-teal-600 group-hover:scale-110 transition-transform" />
                    Secure API
                  </div>
                  <span className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors">Encrypted data transmission</span>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col gap-1 hover:-translate-y-1 hover:shadow-md transition-all group cursor-default">
                  <div className="flex items-center gap-2 text-[#1A1053] font-bold text-sm group-hover:text-emerald-700 transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                    Enterprise SLA
                  </div>
                  <span className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors">99.99% uptime commitment</span>
                </div>
              </div>
            </div>

            {/* 2. User Obligations Section */}
            <div id="sec-2" className="space-y-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <div className="flex items-center gap-3 group">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1A1053] text-white font-bold text-sm group-hover:bg-indigo-600 group-hover:scale-110 transition-all duration-300">
                  2
                </div>
                <h2 className="text-3xl font-extrabold text-[#1A1053] tracking-tight group-hover:text-indigo-600 transition-colors duration-300">
                  User Obligations
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed hover:text-slate-800 transition-colors">
                To maintain the integrity of the HealthSync ecosystem, all users must adhere to the following professional standards:
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                  <CheckCircle2 className="h-5 w-5 text-teal-500 shrink-0 mt-0.5 group-hover:scale-110 group-hover:text-teal-600 transition-all" />
                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
                    <strong className="text-slate-900 font-bold group-hover:text-indigo-700 transition-colors">Verification:</strong> Users must provide accurate, current, and complete registration information and maintain its accuracy.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                  <CheckCircle2 className="h-5 w-5 text-teal-500 shrink-0 mt-0.5 group-hover:scale-110 group-hover:text-teal-600 transition-all" />
                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
                    <strong className="text-slate-900 font-bold group-hover:text-indigo-700 transition-colors">Security Credentials:</strong> You are responsible for safeguarding the credentials used to access the Service and for any activities or actions under your password.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                  <CheckCircle2 className="h-5 w-5 text-teal-500 shrink-0 mt-0.5 group-hover:scale-110 group-hover:text-teal-600 transition-all" />
                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
                    <strong className="text-slate-900 font-bold group-hover:text-indigo-700 transition-colors">Compliance:</strong> Users must comply with all local, state, and federal healthcare regulations, specifically including HIPAA and HITECH requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Intellectual Property Section */}
            <div id="sec-3" className="bg-[#1A1053] rounded-3xl p-8 sm:p-10 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out hover:shadow-indigo-900/40 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/30 transition-colors duration-700" />

              <div className="flex-1 space-y-4 z-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  3. Intellectual Property
                </h2>
                <p className="text-slate-200 text-sm leading-relaxed group-hover:text-white transition-colors">
                  All clinical algorithms, interface designs, software architectures, and trademarks are the exclusive property of HealthSync. We grant you a limited, non-transferable license to access our services for professional use only.
                </p>
                <div className="pt-2">
                  <button className="rounded-full bg-cyan-400 px-6 py-2.5 text-xs sm:text-sm font-bold text-slate-950 hover:bg-cyan-300 hover:scale-105 hover:-translate-y-0.5 shadow-lg shadow-cyan-900/20 transition-all duration-300">
                    Read Licensing Agreement
                  </button>
                </div>
              </div>

              {/* Visual Image */}
              <div className="w-full md:w-64 aspect-[4/3] relative rounded-2xl overflow-hidden shadow-md shrink-0 border border-white/10 group-hover:border-white/20 transition-colors z-10">
                <Image
                  src={termsIp}
                  alt="Medical History Form"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* 4. Limitation of Liability Section */}
            <div id="sec-4" className="space-y-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="text-3xl font-extrabold text-[#1A1053] tracking-tight">
                4. Limitation of Liability
              </h2>

              {/* Amber Left Accent Quote Box */}
              <div className="border-l-4 border-amber-400 bg-amber-50/40 p-4 sm:p-5 rounded-r-xl text-slate-700 italic font-medium text-sm sm:text-base hover:bg-amber-100/50 hover:border-amber-500 transition-colors duration-300">
                &ldquo;HealthSync provides professional medical management tools, not medical advice. Our platform is intended to assist qualified medical professionals in data organization and should not replace clinical judgment.&rdquo;
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed hover:text-slate-800 transition-colors">
                To the maximum extent permitted by applicable law, HealthSync shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the services.
              </p>
            </div>

            {/* 5. Governing Law Section */}
            <div id="sec-5" className="space-y-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
              <h2 className="text-3xl font-extrabold text-[#1A1053] tracking-tight">
                5. Governing Law
              </h2>

              <div className="bg-white border border-slate-200/60 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed hover:text-slate-800 transition-colors">
                  These Terms shall be governed and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-slate-100 text-slate-800 text-xs font-bold px-3.5 py-1.5 rounded-full hover:bg-slate-200 hover:scale-105 transition-all cursor-default">
                    State of Delaware
                  </span>
                  <span className="bg-slate-100 text-slate-800 text-xs font-bold px-3.5 py-1.5 rounded-full hover:bg-slate-200 hover:scale-105 transition-all cursor-default">
                    Arbitration Clause
                  </span>
                  <span className="bg-slate-100 text-slate-800 text-xs font-bold px-3.5 py-1.5 rounded-full hover:bg-slate-200 hover:scale-105 transition-all cursor-default">
                    International Use
                  </span>
                </div>
              </div>
            </div>

            {/* 6. Support & Contact Section */}
            <div id="sec-6" className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 text-center shadow-sm space-y-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out hover:shadow-lg transition-shadow duration-500 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-[#1A1053] mx-auto group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors duration-300">
                <HelpCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </div>

              <h2 className="text-3xl font-extrabold text-[#1A1053] tracking-tight group-hover:text-indigo-900 transition-colors">
                6. Support & Contact
              </h2>

              <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed group-hover:text-slate-800 transition-colors">
                Have questions about our Terms of Service or need clarification on a specific enterprise clause? Our legal and support teams are here to help.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Link
                  href="/demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#1A1053] px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-[#1A1053]/90 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 group/btn"
                >
                  <Mail className="h-4 w-4 group-hover/btn:animate-pulse" />
                  Contact Legal
                </Link>
                <Link
                  href="/faq"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white border border-[#1A1053] px-8 py-3.5 text-sm font-semibold text-[#1A1053] hover:bg-slate-50 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 group/btn"
                >
                  <HelpCircle className="h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                  Help Center
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
