"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import finalLogo from "@/assets/images/final_logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About Us" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#1A1053]/10 bg-[#f3f4fb]/90 backdrop-blur-2xl shadow-[0_4px_30px_rgba(26,16,83,0.08)]"
          : "border-b border-transparent bg-[#f3f4fb]/70 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:h-[84px] lg:px-12">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center py-1 transition-transform duration-300 hover:scale-[1.03]"
        >
          <Image
            src={finalLogo}
            alt="HealthSync Logo"
            className="h-[68px] w-auto object-contain sm:h-[76px] md:h-[84px] lg:h-[92px]"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-[15px] tracking-wide transition-colors duration-200 ${
                  active
                    ? "font-bold text-[#1A1053]"
                    : "font-medium text-slate-500 hover:text-[#1A1053]"
                }`}
              >
                {link.label}
                {/* Active Underline Indicator */}
                <span
                  className={`absolute bottom-0 left-1/2 h-[2.5px] -translate-x-1/2 rounded-full bg-[#1A1053] transition-all duration-300 ease-out ${
                    active ? "w-[60%] opacity-100" : "w-0 opacity-0"
                  }`}
                />
                {/* Hover Underline Indicator */}
                <span
                  className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#1A1053]/30 transition-all duration-300 ease-out ${
                    active ? "w-0" : "w-0 group-hover:w-[40%]"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA Button + Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="/demo"
            className="hidden items-center justify-center rounded-full bg-[#1A1053] px-7 py-3 text-[14px] font-semibold text-white shadow-[0_8px_28px_rgba(26,16,83,0.18)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#251873] hover:shadow-[0_12px_32px_rgba(26,16,83,0.28)] active:translate-y-0 sm:inline-flex"
          >
            Request Demo
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col items-center justify-center gap-[5px] rounded-lg p-2.5 transition-colors hover:bg-[#1A1053]/5 lg:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] w-6 rounded-full bg-[#1A1053] transition-all duration-300 ${
                isMobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] rounded-full bg-[#1A1053] transition-all duration-300 ${
                isMobileMenuOpen ? "w-0 opacity-0" : "w-6 opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] w-6 rounded-full bg-[#1A1053] transition-all duration-300 ${
                isMobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-[#1A1053]/8 bg-[#f3f4fb]/95 px-6 py-5 backdrop-blur-2xl">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-[15px] transition-all duration-200 ${
                    active
                      ? "bg-[#1A1053]/8 font-bold text-[#1A1053]"
                      : "font-medium text-slate-500 hover:bg-[#1A1053]/5 hover:text-[#1A1053]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/demo"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-[#1A1053] px-7 py-3.5 text-[14px] font-semibold text-white shadow-[0_8px_24px_rgba(26,16,83,0.2)] transition-all active:scale-[0.98]"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
