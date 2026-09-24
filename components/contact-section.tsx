"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck, MessageSquare } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    subject: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-slate-50/60 py-16 md:py-24 font-sans">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-100/80 px-4 py-1.5 text-xs font-bold tracking-widest text-sky-900 border border-sky-200/80 uppercase mb-4">
            <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
            GET IN TOUCH
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1053] tracking-tight leading-tight mb-4">
            Connect with our <span className="text-sky-600">Healthcare Specialists</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you are looking to streamline operations, explore enterprise solutions, or have technical inquiries, our team is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Contact Details & Info (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Primary Contact Card */}
            <div className="bg-[#1A1053] text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Direct Contact</h3>
                  <p className="text-sm text-slate-300">
                    Reach out directly to our healthcare technology advisors.
                  </p>
                </div>

                <div className="flex flex-col gap-5 pt-2">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-sky-300">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium uppercase tracking-wider">Email Us</span>
                      <a
                        href="mailto:info@healthsync.ae"
                        className="text-base font-semibold text-white hover:text-sky-300 transition-colors"
                      >
                        info@healthsync.ae
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-sky-300">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium uppercase tracking-wider">Call or WhatsApp</span>
                      <a
                        href="tel:+971566067509"
                        className="text-base font-semibold text-white hover:text-sky-300 transition-colors"
                      >
                        +971 566067509
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-sky-300">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium uppercase tracking-wider">Locations</span>
                      <p className="text-sm text-slate-200">
                    Dubai
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-slate-300">
                  <Clock className="h-4 w-4 text-emerald-400" />
                  <span>Support Hours: Mon - Fri, 9:00 AM - 6:00 PM (GST)</span>
                </div>
              </div>
            </div>

            {/* Security Guarantee Box */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1A1053] mb-1">HIPAA &amp; SOC2 Compliant</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  All communications and information shared with HealthSync are securely encrypted and protected by strict enterprise compliance standards.
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form (Spans 7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl shadow-slate-200/50">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1053] mb-2">Message Sent Successfully!</h3>
                <p className="text-slate-600 max-w-md mb-8">
                  Thank you for reaching out. One of our enterprise healthcare advisors will connect with you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      organization: "",
                      subject: "General Inquiry",
                      message: "",
                    });
                  }}
                  className="rounded-full bg-[#1A1053] px-8 py-3 text-sm font-semibold text-white hover:bg-[#1A1053]/90 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="h-5 w-5 text-sky-600" />
                  <h3 className="text-xl font-bold text-[#1A1053]">Send Us a Message</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Jane Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-sky-500 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@hospital.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-sky-500 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-sky-500 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Organization / Hospital
                    </label>
                    <input
                      type="text"
                      placeholder="Dubai Health Center"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-sky-500 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 focus:bg-white focus:border-sky-500 focus:outline-none transition-all"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Enterprise Demo">Request Enterprise Demo</option>
                    <option value="ClaimSync Solution">ClaimSync Platform</option>
                    <option value="Partnership">Partnership &amp; Integrations</option>
                    <option value="Technical Support">Technical Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your requirements or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-sky-500 focus:outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1A1053] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-950/20 hover:bg-[#1A1053]/90 hover:scale-[1.01] transition-all duration-200 cursor-pointer mt-2"
                >
                  <Send className="h-4 w-4" />
                  Submit Request
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
