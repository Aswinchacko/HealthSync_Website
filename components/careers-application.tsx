"use client";

import { useState, useRef, useEffect } from "react";
import { Upload, CheckCircle2, FileText, Send, Sparkles, X } from "lucide-react";

export function CareersApplication() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "General Application",
    message: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section
      ref={sectionRef}
      id="application-form"
      className="py-16 md:py-24 bg-[#f8f9fc] border-t border-slate-100 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-100/80 px-4 py-1.5 text-xs font-bold tracking-widest text-sky-900 border border-sky-200/80 uppercase mb-4 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-sky-600 animate-pulse" />
            CAREER OPPORTUNITIES
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1053] tracking-tight mb-4">
            Send Your Application
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Don&apos;t see a role that fits? We&apos;re always looking for talented individuals. Share your details and resume with us.
          </p>
        </div>

        {/* Application Card Form */}
        <div
          className={`bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl shadow-slate-200/50 transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6 shadow-sm">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1053] mb-3">
                Application Received!
              </h3>
              <p className="text-slate-600 max-w-md mb-8 leading-relaxed text-sm sm:text-base">
                Thank you for your interest in joining HealthSync. Our recruitment and talent team will review your profile and reach out to you soon.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    role: "General Application",
                    message: "",
                  });
                  setResumeFile(null);
                }}
                className="rounded-full bg-[#1A1053] px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-[#1A1053]/90 transition-all cursor-pointer"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-sky-500 focus:outline-none transition-all"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-sky-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +971 50 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-sky-500 focus:outline-none transition-all"
                  />
                </div>

                {/* Role / Area of Interest */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Role of Interest
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 focus:bg-white focus:border-sky-500 focus:outline-none transition-all"
                  >
                    <option value="General Application">General Application</option>
                    <option value="Senior Backend Engineer (HL7/FHIR)">Senior Backend Engineer (HL7/FHIR)</option>
                    <option value="Director of Clinical Interoperability">Director of Clinical Interoperability</option>
                    <option value="Enterprise Account Executive">Enterprise Account Executive</option>
                    <option value="Senior Product Designer">Senior Product Designer</option>
                    <option value="Other">Other Position</option>
                  </select>
                </div>
              </div>

              {/* Resume / CV Upload Box */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Upload Resume / CV *
                </label>
                
                <input
                  type="file"
                  ref={fileInputRef}
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />

                <div
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
                    resumeFile
                      ? "border-emerald-400 bg-emerald-50/40"
                      : "border-slate-300 bg-slate-50/60 hover:border-sky-500 hover:bg-sky-50/30"
                  }`}
                >
                  {resumeFile ? (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-bold text-slate-800">{resumeFile.name}</p>
                        <p className="text-xs text-slate-500">{(resumeFile.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setResumeFile(null);
                          if (fileInputRef.current) fileInputRef.current.value = "";
                        }}
                        className="ml-4 p-1.5 rounded-full hover:bg-slate-200 text-slate-500 transition-colors"
                        title="Remove file"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mb-3">
                        <Upload className="h-6 w-6" />
                      </div>
                      <p className="text-sm font-bold text-[#1A1053] mb-1">
                        Click to upload your resume
                      </p>
                      <p className="text-xs text-slate-500">
                        Supports PDF, DOC, DOCX (Max 10MB)
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Message / Cover Note */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Message / Cover Note (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us a little about your experience and why you'd like to join HealthSync..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-sky-500 focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1A1053] px-9 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-950/20 hover:bg-[#1A1053]/90 hover:scale-[1.01] transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              >
                <Send className="h-4 w-4" />
                {isSubmitting ? "Submitting Application..." : "Submit Application"}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}