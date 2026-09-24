"use client";

import { useState, useId, useEffect, useRef } from "react";
import { ChevronDown, HelpCircle, MessageCircleQuestion } from "lucide-react";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What is HealthSync?",
    answer:
      "HealthSync is an integrated healthcare technology ecosystem that connects essential hospital operations in one platform. It helps healthcare organizations streamline workflows, improve visibility, optimize revenue, and make data-driven decisions.",
  },
  {
    question: "What solutions are included in HealthSync?",
    answer:
      "HealthSync brings together ClaimSync, Complaints Management, Incident Management, Asset Management, and Healthcare Information Management System (HIMS), creating a connected digital ecosystem for hospital operations.",
  },
  {
    question: "How does HealthSync help hospitals?",
    answer:
      "HealthSync helps reduce manual processes, improve coordination between departments, centralize information, track operational activities, and provide actionable insights for better decision-making.",
  },
  {
    question: "What does Incident Management cover?",
    answer:
      "Incident Management helps hospitals record, investigate, track, and monitor incidents and corrective actions, supporting better risk management and continuous improvement.",
  },
  {
    question: "What is the Asset Management system used for?",
    answer:
      "It helps hospitals maintain a centralized view of their assets, track asset locations and status, manage maintenance activities, and monitor the asset lifecycle. Asset-management systems commonly include maintenance schedules, service records, and asset movement tracking.",
  },
  {
    question: "Does HealthSync provide dashboards and analytics?",
    answer:
      "Yes. HealthSync can provide centralized visibility into operational data, helping hospital teams monitor performance, identify trends, and make informed decisions.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const baseId = useId();

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

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f8f9fc] py-12 md:py-16 lg:py-20"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1A1053]/[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-[#1A1053]/[0.015] rounded-full blur-[100px]" />
        <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] bg-sky-100/20 rounded-full blur-[80px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-4xl">
        {/* Header */}
        <div
          className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#1A1053]/[0.06] border border-[#1A1053]/10 px-5 py-2 text-xs font-bold tracking-wider text-[#1A1053] uppercase mb-6 backdrop-blur-sm">
            <MessageCircleQuestion className="h-4 w-4" />
            Support &amp; Clarity
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1A1053] leading-tight">
            Frequently Asked{" "}
            <span className="relative inline-block text-sky-600">
              Questions
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Everything you need to know about HealthSync integration,
            solutions, compliance, and hospital deployment.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            const buttonId = `${baseId}-faq-button-${i}`;
            const contentId = `${baseId}-faq-content-${i}`;

            return (
              <div
                key={faq.question}
                className={`group rounded-2xl bg-white/90 backdrop-blur-xl border transition-all duration-500 ease-out ${
                  isOpen
                    ? "border-[#1A1053]/20 shadow-[0_12px_40px_rgba(26,16,83,0.08)] bg-white"
                    : "border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:border-slate-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${120 + i * 70}ms` }}
              >
                <button
                  id={buttonId}
                  onClick={() => toggleFaq(i)}
                  className="w-full p-6 md:p-7 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1053]/20 rounded-2xl cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <span className="flex items-center gap-4">
                    <span
                      className={`flex h-2.5 w-2.5 shrink-0 rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-sky-600 scale-125"
                          : "bg-slate-300 group-hover:bg-slate-400"
                      }`}
                    />
                    <span
                      className={`text-[15px] md:text-base font-bold transition-colors duration-300 ${
                        isOpen ? "text-[#1A1053]" : "text-slate-800"
                      }`}
                    >
                      {i + 1}. {faq.question}
                    </span>
                  </span>

                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-[#1A1053] text-white rotate-180 shadow-[0_4px_12px_rgba(26,16,83,0.25)]"
                        : "bg-slate-100 text-slate-500 group-hover:bg-[#1A1053]/10 group-hover:text-[#1A1053]"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Animated Answer Body */}
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-400 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-7 pb-6 md:pb-7 pt-0">
                      <div className="border-t border-slate-100 pt-5">
                        <p className="text-[14.5px] leading-relaxed text-slate-600 pl-6 font-normal">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Link */}
        <div
          className={`mt-14 text-center transition-all duration-1000 delay-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-slate-500 text-sm mb-4">
            Still have questions about HealthSync?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#1A1053] px-8 py-3.5 text-[14px] font-semibold text-white shadow-[0_8px_28px_rgba(26,16,83,0.22)] transition-all duration-300 hover:bg-[#251a6b] hover:shadow-[0_12px_36px_rgba(26,16,83,0.3)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <HelpCircle className="h-4 w-4" />
            Contact Support &amp; Sales
          </Link>
        </div>
      </div>
    </section>
  );
}