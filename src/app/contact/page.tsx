"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { BRAND_INFO } from "@/data/navigation";
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, Sparkles } from "lucide-react";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

function ContactFormContent() {
  const searchParams = useSearchParams();
  const prefilledProduct = searchParams.get("product") || "";
  const prefilledType = searchParams.get("type") || "general";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    enquiryType: prefilledType === "wholesale" ? "Wholesale Enquiry" : "General Enquiry",
    message: prefilledProduct ? `I am interested in inquiring about ${prefilledProduct}.` : "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full Name is required.";
    if (!formData.phone.trim()) errs.phone = "Phone / WhatsApp number is required.";
    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) errs.message = "Message details are required.";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="pt-0 pb-24 bg-[#FFFDF7] text-[#17130F]">
      
      {/* Header Banner */}
      <section className="bg-[#17130F] text-[#FFFDF7] pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-[#D9A52B]/10 rounded-full blur-3xl pointer-events-none" />
        <Container>
          <Reveal>
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D9A52B]/20 border border-[#D9A52B]/30 text-xs font-semibold uppercase tracking-widest text-[#F2C94C]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>COMMERCIAL & TRADE ENQUIRIES</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#FFFDF7]">
                GET IN TOUCH
              </h1>
              <p className="text-base sm:text-lg text-[#FFFDF7]/80 font-light leading-relaxed">
                Whether you are seeking product information, trade partnerships, or distributor opportunities, our team is at your service.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Info Column */}
            <Reveal className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#D9A52B]">
                  MILLIARD AGARBATTI
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#17130F]">
                  Connect With Our Brand Team
                </h2>
                <p className="text-sm text-[#7A6A57] leading-relaxed font-light">
                  Reach out to us directly for general queries, bulk orders, or dealership inquiries across India.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFF8E8] border border-[#D9A52B]/30 flex items-center justify-center shrink-0 text-[#D9A52B]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#7A6A57] uppercase tracking-wider">Office Location</h4>
                    <p className="text-sm font-medium text-[#17130F]">{BRAND_INFO.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFF8E8] border border-[#D9A52B]/30 flex items-center justify-center shrink-0 text-[#D9A52B]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#7A6A57] uppercase tracking-wider">Phone / WhatsApp</h4>
                    <a href={`tel:${BRAND_INFO.phone}`} className="text-sm font-medium text-[#17130F] hover:text-[#D9A52B] transition-colors block">
                      {BRAND_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFF8E8] border border-[#D9A52B]/30 flex items-center justify-center shrink-0 text-[#D9A52B]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#7A6A57] uppercase tracking-wider">Email Address</h4>
                    <a href={`mailto:${BRAND_INFO.email}`} className="text-sm font-medium text-[#17130F] hover:text-[#D9A52B] transition-colors block">
                      {BRAND_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Link */}
              <div className="p-6 rounded-2xl bg-[#FFF8E8] border border-[#D9A52B]/20 space-y-3">
                <h4 className="font-serif text-lg font-bold text-[#17130F]">Official Social Channel</h4>
                <p className="text-xs text-[#7A6A57] font-light">
                  Follow Milliard Agarbatti on Facebook for visual updates, product launches, and festive highlights.
                </p>
                <a
                  href={BRAND_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#17130F] uppercase tracking-wider hover:text-[#D9A52B] transition-colors"
                >
                  <FacebookIcon className="w-4 h-4 text-[#D9A52B]" />
                  <span>Visit Facebook Page</span>
                </a>
              </div>
            </Reveal>

            {/* Right Contact Form Column */}
            <Reveal delay={0.2} className="lg:col-span-7">
              <div className="bg-[#FFF8E8] rounded-3xl p-8 sm:p-10 border border-[#D9A52B]/30 shadow-xl">
                {isSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#D9A52B]/20 text-[#D9A52B] mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#17130F]">
                      Thank You For Reaching Out!
                    </h3>
                    <p className="text-sm text-[#7A6A57] max-w-md mx-auto font-light">
                      Your enquiry has been received. A representative from Milliard Agarbatti will contact you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          phone: "",
                          email: "",
                          enquiryType: "General Enquiry",
                          message: "",
                        });
                      }}
                      className="text-xs font-semibold text-[#D9A52B] uppercase tracking-wider underline pt-4"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#17130F]">
                        Send Us an Enquiry
                      </h3>
                      <p className="text-xs text-[#7A6A57] mt-1 font-light">
                        Fill out the form below and we will get back to you promptly.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#17130F]">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rajesh Kumar"
                          className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border border-[#D9A52B]/30 text-sm text-[#17130F] focus:outline-none focus:ring-2 focus:ring-[#D9A52B]"
                        />
                        {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#17130F]">
                          Phone / WhatsApp <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border border-[#D9A52B]/30 text-sm text-[#17130F] focus:outline-none focus:ring-2 focus:ring-[#D9A52B]"
                        />
                        {errors.phone && <p className="text-xs text-red-600">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#17130F]">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border border-[#D9A52B]/30 text-sm text-[#17130F] focus:outline-none focus:ring-2 focus:ring-[#D9A52B]"
                        />
                        {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
                      </div>

                      {/* Enquiry Type */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#17130F]">
                          Enquiry Type
                        </label>
                        <select
                          value={formData.enquiryType}
                          onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border border-[#D9A52B]/30 text-sm text-[#17130F] focus:outline-none focus:ring-2 focus:ring-[#D9A52B]"
                        >
                          <option value="General Enquiry">General Enquiry</option>
                          <option value="Distributor Opportunity">Become a Distributor</option>
                          <option value="Wholesale Enquiry">Wholesale & Bulk Order</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#17130F]">
                        Message Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your query or trade requirements here..."
                        className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border border-[#D9A52B]/30 text-sm text-[#17130F] focus:outline-none focus:ring-2 focus:ring-[#D9A52B]"
                      />
                      {errors.message && <p className="text-xs text-red-600">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-[#17130F] text-[#FFFDF7] font-semibold text-xs uppercase tracking-wider hover:bg-[#D9A52B] hover:text-[#17130F] transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Enquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

          </div>
        </Container>
      </section>

    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center">Loading contact page...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
