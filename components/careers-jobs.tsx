"use client";

import {
  ArrowRight,
  MapPin,
  Clock,
  Server,
  Stethoscope,
  LineChart,
  LayoutGrid,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function CareersJobs() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("All Roles");
  const [expandedJobIndex, setExpandedJobIndex] = useState<number | null>(null);
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

  const allJobs = [
    {
      id: "eng-1",
      title: "Senior Backend Engineer (HL7/FHIR)",
      location: "Remote",
      type: "Full-time",
      dept: "Engineering",
      icon: <Server className="h-5 w-5" />,
      color: "bg-[#1A1053] text-[#2bc4ff]",
      description:
        "Architect and optimize large-scale HL7/FHIR data transformation pipelines, RESTful APIs, and secure microservices connecting hospitals, EMRs, and payer portals.",
      responsibilities: [
        "Design scalable microservices using Node.js/Go and FHIR standard APIs",
        "Implement high-throughput data pipelines for e-claims validation",
        "Ensure enterprise HIPAA and SOC2 compliance across data endpoints",
      ],
      requirements: [
        "4+ years backend software engineering experience",
        "Deep familiarity with HL7 v2/v3, FHIR R4, and healthcare data protocols",
        "Proficiency in SQL, Redis, and cloud infrastructure (AWS/GCP/Azure)",
      ],
    },
    {
      id: "clin-1",
      title: "Director of Clinical Interoperability",
      location: "Dubai / Remote",
      type: "Full-time",
      dept: "Clinical Operations",
      icon: <Stethoscope className="h-5 w-5" />,
      color: "bg-teal-500 text-white",
      description:
        "Lead healthcare clinical data synchronization, standardizing electronic health records, diagnostic terminologies (ICD-10, SNOMED, CPT), and clinical workflows.",
      responsibilities: [
        "Bridge medical informatics with engineering teams to refine validation rules",
        "Collaborate with hospitals and clinical directors on system deployment",
        "Oversee medical coding compliance for regional healthcare authorities",
      ],
      requirements: [
        "MD, MBBS, or Master's in Health Informatics",
        "5+ years working with hospital clinical workflows and EMR systems",
        "Excellent communication and executive client management skills",
      ],
    },
    {
      id: "sales-1",
      title: "Enterprise Account Executive",
      location: "Dubai / Remote",
      type: "Full-time",
      dept: "Sales & Growth",
      icon: <LineChart className="h-5 w-5" />,
      color: "bg-emerald-600 text-white",
      description:
        "Drive commercial growth across regional hospital networks, medical centers, and enterprise healthcare providers seeking digital transformation.",
      responsibilities: [
        "Manage end-to-end sales cycles with C-suite healthcare executives (CIO, CFO, CMO)",
        "Conduct customized demonstrations of ClaimSync and HIMS platforms",
        "Exceed revenue quotas and build lasting enterprise client relationships",
      ],
      requirements: [
        "3+ years enterprise B2B SaaS sales experience in healthcare or health-tech",
        "Proven track record of closing 6-figure enterprise software contracts",
        "Strong network across Middle East or Global healthcare sectors",
      ],
    },
    {
      id: "prod-1",
      title: "Senior Product Designer",
      location: "Remote",
      type: "Full-time",
      dept: "Product",
      icon: <LayoutGrid className="h-5 w-5" />,
      color: "bg-indigo-600 text-white",
      description:
        "Shape the intuitive, fast, and accessible user interfaces that physicians, billing officers, and clinical administrators use every single day.",
      responsibilities: [
        "Craft sleek user flows, wireframes, and high-fidelity prototypes in Figma",
        "Conduct user research with doctors, nurses, and revenue cycle managers",
        "Maintain and evolve HealthSync's cohesive design system and tokens",
      ],
      requirements: [
        "4+ years product design experience with complex data-dense SaaS dashboards",
        "Strong portfolio demonstrating user-centric problem solving and typography",
        "Familiarity with design systems, modern accessibility (WCAG), and responsive design",
      ],
    },
  ];

  const tabs = ["All Roles", "Engineering", "Clinical Operations", "Sales & Growth", "Product"];

  const filteredJobs =
    activeTab === "All Roles"
      ? allJobs
      : allJobs.filter((job) => job.dept.toLowerCase() === activeTab.toLowerCase());

  const handleApplyClick = (jobTitle: string) => {
    // Dispatch custom event or scroll down to application form
    const roleSelect = document.querySelector<HTMLSelectElement>("select");
    if (roleSelect) {
      // If option exists, select it
      for (let i = 0; i < roleSelect.options.length; i++) {
        if (roleSelect.options[i].value === jobTitle) {
          roleSelect.selectedIndex = i;
          roleSelect.dispatchEvent(new Event("change", { bubbles: true }));
          break;
        }
      }
    }
    const formElement = document.getElementById("application-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="openings"
      className="py-16 md:py-24 bg-white border-t border-slate-100 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl relative z-10">
        
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-1.5 text-xs font-bold text-sky-800 border border-sky-200/80 uppercase tracking-widest mb-4">
            <Sparkles className="h-3.5 w-3.5 text-sky-600" />
            OPEN POSITIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1053] tracking-tight mb-4">
            Current Career Openings
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
            Find your place in the HealthSync ecosystem and help build the digital future of healthcare.
          </p>
        </div>

        {/* Dynamic Filter Tabs */}
        <div
          className={`flex flex-wrap items-center justify-center gap-2.5 mb-12 transition-all duration-1000 delay-100 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            const count =
              tab === "All Roles"
                ? allJobs.length
                : allJobs.filter((j) => j.dept.toLowerCase() === tab.toLowerCase()).length;

            return (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setExpandedJobIndex(null);
                }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer duration-300 flex items-center gap-2 ${
                  isActive
                    ? "bg-[#1A1053] text-white shadow-lg shadow-indigo-950/20 scale-105"
                    : "bg-slate-100/90 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                <span>{tab}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Filtered Jobs List */}
        <div className="space-y-4 mb-14">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-16 bg-slate-50/60 rounded-3xl border border-dashed border-slate-200">
              <p className="text-slate-600 font-semibold mb-2">No active openings in this department.</p>
              <p className="text-xs text-slate-400">
                You can submit a general application below.
              </p>
            </div>
          ) : (
            filteredJobs.map((job, i) => {
              const isExpanded = expandedJobIndex === i;

              return (
                <div
                  key={job.id}
                  className={`rounded-3xl border transition-all duration-400 bg-white overflow-hidden shadow-xs hover:shadow-lg ${
                    isExpanded
                      ? "border-sky-400/60 ring-2 ring-sky-500/10"
                      : "border-slate-200/90 hover:border-slate-300"
                  }`}
                >
                  {/* Job Header Row */}
                  <div
                    onClick={() => setExpandedJobIndex(isExpanded ? null : i)}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:p-7 cursor-pointer group"
                  >
                    <div className="flex items-center gap-5 mb-4 sm:mb-0">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110 ${job.color}`}
                      >
                        {job.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-[#1A1053] mb-1.5 group-hover:text-sky-700 transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-slate-400" /> {job.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5 text-slate-400" /> {job.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4">
                      <span className="bg-slate-100 text-slate-700 px-3.5 py-1.5 rounded-full text-xs font-bold group-hover:bg-sky-50 group-hover:text-sky-700 transition-colors">
                        {job.dept}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#1A1053] group-hover:bg-[#1A1053] group-hover:text-white transition-all duration-300">
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expandable Role Details */}
                  {isExpanded && (
                    <div className="px-6 pb-7 sm:px-8 sm:pb-8 pt-2 border-t border-slate-100 bg-slate-50/40 animate-fadeIn">
                      <p className="text-slate-700 text-sm leading-relaxed mb-6 font-medium">
                        {job.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-xs font-bold text-[#1A1053] uppercase tracking-wider mb-3">
                            Key Responsibilities:
                          </h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-2 text-xs text-slate-600">
                                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs font-bold text-[#1A1053] uppercase tracking-wider mb-3">
                            Qualifications &amp; Experience:
                          </h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, reqIdx) => (
                              <li key={reqIdx} className="flex items-start gap-2 text-xs text-slate-600">
                                <CheckCircle2 className="h-4 w-4 text-sky-500 shrink-0 mt-0.5" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-200/60">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleApplyClick(job.title);
                          }}
                          className="inline-flex items-center gap-2 rounded-full bg-[#1A1053] px-7 py-3 text-xs font-bold text-white shadow-md hover:bg-[#1A1053]/90 hover:scale-[1.02] transition-all cursor-pointer"
                        >
                          Apply for this Position
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* General Application Footer CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm text-slate-500 mb-3">
            Don&apos;t see a role that fits? We&apos;re always looking for talented individuals.
          </p>
          <a
            href="#application-form"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1A1053] border-b-2 border-[#1A1053] pb-1 hover:text-sky-600 hover:border-sky-600 transition-colors cursor-pointer"
          >
            Send a General Application
          </a>
        </div>

      </div>
    </section>
  );
}
