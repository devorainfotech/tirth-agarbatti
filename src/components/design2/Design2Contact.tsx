"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { BRAND_INFO } from "@/data/navigation";

export default function Design2Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    enquiryType: "distributor",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-[#FFFDF8] text-[#241914] relative border-b border-[#B89042]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Large Typography & Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#A95736]">
                Connect With Us
              </span>
              <h2 className="font-serif text-5xl sm:text-6xl font-normal text-[#241914] leading-tight">
                START A <br />
                <span className="italic text-[#B89042]">CONVERSATION</span>
              </h2>
            </div>

            <div className="w-16 h-[2px] bg-[#A95736]" />

            <p className="font-serif text-lg text-[#241914]/85 italic leading-relaxed">
              We welcome trade enquiries, bulk orders, dealership applications, and customer feedback.
            </p>

            <div className="space-y-6 pt-4 border-t border-[#DDD0BB] text-sm">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#A95736] shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-semibold text-base">Corporate Office</h4>
                  <p className="text-[#241914]/75 text-xs mt-0.5">{BRAND_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#A95736] shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-semibold text-base">Phone & WhatsApp</h4>
                  <a href={`tel:${BRAND_INFO.phone}`} className="text-[#241914]/75 hover:text-[#A95736] text-xs transition-colors">
                    {BRAND_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#A95736] shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-semibold text-base">Email Address</h4>
                  <a href={`mailto:${BRAND_INFO.email}`} className="text-[#241914]/75 hover:text-[#A95736] text-xs transition-colors">
                    {BRAND_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#F7F1E6] border border-[#B89042]/30 text-xs">
              <span className="font-serif font-semibold text-[#A95736] block mb-1">
                Company vs Brand Name Notice
              </span>
              <p className="text-[#241914]/70">
                Company: <strong>{BRAND_INFO.companyName}</strong> <br />
                Brand: <strong>{BRAND_INFO.brandName}</strong>
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Contact Form */}
          <div className="lg:col-span-7 bg-[#F7F1E6] border border-[#B89042]/30 p-8 sm:p-12 shadow-xl">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#A95736] mx-auto" />
                <h3 className="font-serif text-3xl font-semibold text-[#241914]">
                  Thank You for Reaching Out
                </h3>
                <p className="text-sm text-[#241914]/75 max-w-md mx-auto font-serif italic">
                  Your enquiry has been received by Milliard Agarbatti. Our team will contact you shortly regarding Tirth Premium Agarbatti.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 bg-[#241914] text-[#FFFDF8] text-xs font-semibold tracking-[0.2em] uppercase"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-serif text-2xl font-semibold text-[#241914]">
                  Send Trade or General Enquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#241914]/80 block">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full bg-[#FFFDF8] border border-[#B89042]/30 px-4 py-3 text-sm text-[#241914] focus:outline-none focus:border-[#241914]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#241914]/80 block">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#FFFDF8] border border-[#B89042]/30 px-4 py-3 text-sm text-[#241914] focus:outline-none focus:border-[#241914]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#241914]/80 block">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-[#FFFDF8] border border-[#B89042]/30 px-4 py-3 text-sm text-[#241914] focus:outline-none focus:border-[#241914]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#241914]/80 block">
                      ENQUIRY TYPE *
                    </label>
                    <select
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full bg-[#FFFDF8] border border-[#B89042]/30 px-4 py-3 text-sm text-[#241914] focus:outline-none focus:border-[#241914]"
                    >
                      <option value="distributor">Distributor / Dealership</option>
                      <option value="wholesale">Wholesale Order</option>
                      <option value="retail">Retail Enquiry</option>
                      <option value="general">General Support</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#241914]/80 block">
                    YOUR MESSAGE / REQUIREMENT *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirement or location..."
                    className="w-full bg-[#FFFDF8] border border-[#B89042]/30 px-4 py-3 text-sm text-[#241914] focus:outline-none focus:border-[#241914]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#241914] text-[#FFFDF8] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#A95736] transition-all shadow-md"
                >
                  <span>SEND ENQUIRY</span>
                  <Send className="w-4 h-4 text-[#B89042]" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
