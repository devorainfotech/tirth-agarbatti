"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles } from "lucide-react";
import { BRAND_INFO } from "@/data/navigation";

export default function Design3Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "Wholesale & Distribution",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#F7F2E8] text-[#20232A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Contact Information Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#10182B] text-[#C9A45C] text-[10px] font-semibold tracking-[0.3em] uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CONNECT WITH TIRTH</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#10182B] leading-tight">
                Get In Touch With <span className="italic font-light text-[#C9A45C]">Our Team</span>
              </h2>
              <div className="w-16 h-[1px] bg-[#C9A45C] mt-3" />
            </div>

            <p className="font-sans text-sm sm:text-base text-[#20232A]/80 font-light leading-relaxed">
              We welcome trade distribution inquiries, bulk order quotes, retail supply partnerships, and general product questions across India and international markets.
            </p>

            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4 p-5 bg-[#10182B] text-[#F7F2E8] border border-[#C9A45C]/30 shadow-lg">
                <MapPin className="w-6 h-6 text-[#C9A45C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-lg font-semibold text-[#F7F2E8]">Headquarters & Plant</h4>
                  <p className="text-xs text-[#E8DDC8]/80 font-sans mt-1 leading-relaxed">
                    {BRAND_INFO.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-[#10182B] text-[#F7F2E8] border border-[#C9A45C]/30 shadow-lg">
                <Phone className="w-6 h-6 text-[#C9A45C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-lg font-semibold text-[#F7F2E8]">Phone & WhatsApp</h4>
                  <p className="text-xs text-[#E8DDC8]/80 font-sans mt-1">
                    Direct: <a href={`tel:${BRAND_INFO.phone}`} className="text-[#C9A45C] underline">{BRAND_INFO.phone}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-[#10182B] text-[#F7F2E8] border border-[#C9A45C]/30 shadow-lg">
                <Mail className="w-6 h-6 text-[#C9A45C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-lg font-semibold text-[#F7F2E8]">Email Inquiries</h4>
                  <p className="text-xs text-[#E8DDC8]/80 font-sans mt-1">
                    <a href={`mailto:${BRAND_INFO.email}`} className="text-[#C9A45C] underline">{BRAND_INFO.email}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-[#10182B] text-[#F7F2E8] p-8 sm:p-12 border border-[#C9A45C]/40 shadow-2xl relative">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A45C]" />

            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F7F2E8] mb-2">
              Send Us A <span className="italic text-[#C9A45C]">Message</span>
            </h3>
            <p className="text-xs text-[#E8DDC8]/70 font-sans mb-8">
              Fill out the form below and our distribution desk will respond within 24 hours.
            </p>

            {submitted ? (
              <div className="p-8 bg-[#182B52] border border-[#C9A45C] text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#C9A45C] mx-auto" />
                <h4 className="font-serif text-2xl text-[#F7F2E8]">Thank You!</h4>
                <p className="text-xs text-[#E8DDC8]/80 font-sans leading-relaxed">
                  Your inquiry has been logged with Milliard Agarbatti. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-[#C9A45C] uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#182B52] border border-[#C9A45C]/30 text-[#F7F2E8] px-4 py-3 text-xs focus:outline-none focus:border-[#C9A45C]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-[#C9A45C] uppercase mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#182B52] border border-[#C9A45C]/30 text-[#F7F2E8] px-4 py-3 text-xs focus:outline-none focus:border-[#C9A45C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-[#C9A45C] uppercase mb-2">
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#182B52] border border-[#C9A45C]/30 text-[#F7F2E8] px-4 py-3 text-xs focus:outline-none focus:border-[#C9A45C]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-[#C9A45C] uppercase mb-2">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full bg-[#182B52] border border-[#C9A45C]/30 text-[#F7F2E8] px-4 py-3 text-xs focus:outline-none focus:border-[#C9A45C]"
                    >
                      <option value="Wholesale & Distribution">Wholesale & Distribution</option>
                      <option value="Retail Purchase">Retail Purchase</option>
                      <option value="Export & Trade">Export & International Trade</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-wider text-[#C9A45C] uppercase mb-2">
                    Message Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your requirement or store location..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#182B52] border border-[#C9A45C]/30 text-[#F7F2E8] px-4 py-3 text-xs focus:outline-none focus:border-[#C9A45C]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#C9A45C] text-[#10182B] text-xs font-semibold tracking-[0.25em] uppercase hover:bg-[#F7F2E8] transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#10182B]" />
                  <span>SUBMIT INQUIRY</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
