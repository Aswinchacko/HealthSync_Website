"use client";

import {
  Globe,
  Share2,
  AtSign,
  ShieldCheck,
  ArrowRight,
  ArrowUp,
  MapPin,
  Mail,
  Phone,
  Check,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import finalLogo from "@/assets/images/final_logo.png";

const productLinks = [
  { label: "ClaimSync", href: "/solutions/claim-sync" },
  { label: "Complaint Management", href: "/solutions/complaint-management" },
  { label: "Incident Management", href: "/solutions/incident-management" },
  { label: "Asset Management", href: "/solutions/asset-management" },
  { label: "HIMS", href: "/solutions/hims" },
  { label: "All Solutions", href: "/solutions" },
];

const resourceLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Global Infrastructure", href: "/infrastructure" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Compliance", href: "/compliance" },
  { label: "Terms of Service", href: "/terms" },
  { label: "HIPAA Statement", href: "/hipaa" },
];

const socialLinks = [
  { icon: Globe, href: "/infrastructure", label: "Global Infrastructure" },
  { icon: Share2, href: "/solutions", label: "Explore Solutions" },
  { icon: AtSign, href: "mailto:info@healthsync.ae", label: "Contact Support", isExternal: true },
];

const certifications = [
  { label: "SOC2 Certified", href: "/compliance" },
  { label: "ISO 27001", href: "/hipaa" },
  { label: "HIPAA Compliant", href: "/hipaa" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#0f0c29] text-white">
      {/* Background ambient lighting effects */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[240px] bg-[#1A1053]/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-[-10%] w-[450px] h-[300px] bg-[#1A1053]/30 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle, #fff 0.5px, transparent 0.5px)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* CTA Banner with dynamic responsive alignment */}
      <div className="relative z-10 border-b border-white/[0.08]">
        <div className="container mx-auto px-5 md:px-8 lg:px-12 max-w-7xl py-8 md:py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="max-w-xl">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                Ready to transform your{" "}
                <span className="text-sky-300">healthcare operations?</span>
              </h3>
              <p className="mt-1 text-sm text-white/50">
                Join healthcare organizations streamlining clinical and administrative workflows.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto shrink-0">
              <Link
                href="/demo"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1A1053] shadow-[0_6px_24px_rgba(255,255,255,0.15)] transition-all duration-300 hover:bg-white/90 hover:shadow-[0_10px_32px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 active:translate-y-0"
              >
                Request Demo
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/35"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content with Dynamic Grid Alignment */}
      <div className="relative z-10 container mx-auto px-5 md:px-8 lg:px-12 max-w-7xl pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-10 items-start">

          {/* Brand & Newsletter Column (Spans 5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Link href="/" className="flex items-center w-fit group">
              <Image
                src={finalLogo}
                alt="HealthSync IT Solutions Logo"
                className="h-11 sm:h-12 w-auto max-w-[220px] object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
              />
            </Link>

            {/* Stay Updated Newsletter Subscription */}
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5 max-w-md w-full">
              <label className="text-[11px] font-bold tracking-[0.18em] text-white/50 uppercase">
                Stay updated
              </label>
              <div className="flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.12] p-1.5 focus-within:border-sky-400/50 focus-within:bg-white/[0.09] transition-all">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="flex-1 bg-transparent outline-none px-3.5 text-sm text-white placeholder:text-white/35 min-w-0"
                />
                <button
                  type="submit"
                  className={`shrink-0 inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-300 active:scale-95 ${subscribed
                      ? "bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                      : "bg-white text-[#1A1053] hover:bg-sky-50 shadow-sm"
                    }`}
                >
                  {subscribed ? (
                    <>
                      <Check className="h-3.5 w-3.5" /> Done
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </div>
            </form>

            {/* Contact Details List */}
            <div className="flex flex-col gap-3 text-[13.5px] text-white/60">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-sky-400/80" />
                <span> Dubai</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-sky-400/80" />
                <a
                  href="mailto:info@healthsync.ae"
                  className="hover:text-white transition-colors duration-200"
                >
                  info@healthsync.ae
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-sky-400/80" />
                <a
                  href="tel:+971566067509"
                  className="hover:text-white transition-colors duration-200"
                >
                  +971 566067509
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                const Component = social.isExternal ? "a" : Link;
                return (
                  <Component
                    key={i}
                    href={social.href}
                    title={social.label}
                    {...(social.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.08] text-white/60 transition-all duration-300 hover:bg-[#1A1053] hover:border-sky-400/40 hover:text-white hover:shadow-[0_4px_16px_rgba(26,16,83,0.5)] hover:-translate-y-0.5"
                  >
                    <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </Component>
                );
              })}
            </div>
          </div>

          {/* Links Columns (Spans 7 cols on lg, evenly distributed) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-2 sm:pt-0">

            {/* Column 1: Products */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[11px] font-bold tracking-[0.2em] text-sky-300/80 uppercase">
                Product
              </h4>
              <ul className="flex flex-col gap-3">
                {productLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="group relative inline-flex items-center text-[13.5px] text-white/55 transition-colors duration-300 hover:text-white"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-sky-400 transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Resources & Company */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[11px] font-bold tracking-[0.2em] text-sky-300/80 uppercase">
                Resources
              </h4>
              <ul className="flex flex-col gap-3">
                {resourceLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="group relative inline-flex items-center text-[13.5px] text-white/55 transition-colors duration-300 hover:text-white"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-sky-400 transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Legal & Security */}
            <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
              <h4 className="text-[11px] font-bold tracking-[0.2em] text-sky-300/80 uppercase">
                Legal
              </h4>
              <ul className="flex flex-col gap-3">
                {legalLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="group relative inline-flex items-center text-[13.5px] text-white/55 transition-colors duration-300 hover:text-white"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-sky-400 transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar — dynamic alignment with certifications & back-to-top */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            {certifications.map((cert, i) => (
              <Link
                key={i}
                href={cert.href}
                className="group flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] px-3.5 py-1.5 text-[11px] font-medium text-white/60 transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-300"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400/80 group-hover:text-emerald-300 transition-colors" />
                {cert.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[12px] text-white/40">
              © {new Date().getFullYear()} HealthSync IT Solutions. All rights reserved.
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06] border border-white/[0.1] text-white/60 transition-all duration-300 hover:bg-white/15 hover:text-white hover:-translate-y-0.5 shrink-0"
            >
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}