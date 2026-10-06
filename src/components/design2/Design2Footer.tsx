"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { BRAND_INFO } from "@/data/navigation";
import ScrollReveal from "./ScrollReveal";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
  </svg>
);

export default function Design2Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
<<<<<<< HEAD
    <footer className="bg-[#140D08] text-[#F8F4EA] pt-16 pb-10 border-t border-[#C8A45D]/30 relative overflow-hidden font-sans">
      
      {/* Subtle Warm Atmospheric Lighting */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[300px] bg-[#C8A45D]/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[350px] h-[250px] bg-[#8C5D3B]/[0.04] rounded-full blur-[90px] pointer-events-none" />
      
      {/* Background Watermark */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-[120px] sm:text-[180px] font-serif font-bold text-[#F8F4EA]/[0.015] select-none pointer-events-none tracking-widest leading-none">
=======
    <footer className="bg-[#1A120C] text-[#F7F1E6] pt-16 pb-10 border-t border-[#D9A52B]/30 relative overflow-hidden font-sans">
      
      {/* Subtle Warm Atmospheric Lighting (No glaring graphics) */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[300px] bg-[#D9A52B]/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[350px] h-[250px] bg-[#A95736]/[0.03] rounded-full blur-[90px] pointer-events-none" />
      
      {/* Barely visible background watermark behind content */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-[120px] sm:text-[180px] font-serif font-bold text-[#F7F1E6]/[0.012] select-none pointer-events-none tracking-widest leading-none">
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
        TIRTH
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 4-Column Clean Editorial Grid */}
        <ScrollReveal direction="up" distance={20} delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14">
            
<<<<<<< HEAD
            {/* Left / Brand Section */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[#C8A45D]/40 bg-[#FFFDF8] p-1 shadow-md">
=======
            {/* Left / Brand Section (Span 4) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[#D9A52B]/40 bg-[#FFFDF8] p-1 shadow-md">
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
                  <Image
                    src="/images/logo/tirth-logo-transparent.png"
                    alt="Tirth Premium Agarbatti Logo"
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <div>
<<<<<<< HEAD
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-[#F8F4EA] leading-tight">
                    TIRTH <span className="italic text-[#C8A45D] font-normal">PREMIUM AGARBATTI</span>
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[#C8A45D]/90 font-medium pt-0.5">
=======
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-[#F7F1E6] leading-tight">
                    TIRTH <span className="italic text-[#D9A52B] font-normal">PREMIUM AGARBATTI</span>
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[#D9A52B]/80 font-medium pt-0.5">
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
                    {BRAND_INFO.companyName}
                  </p>
                </div>
              </div>

<<<<<<< HEAD
              <p className="text-sm text-[#E8DDC8]/85 leading-relaxed font-light max-w-sm">
                Elevating sacred rituals and ambient spaces with handcrafted Indian incense sticks, pure natural sandalwood, sweet mogra, and traditional sambrani dhoop.
              </p>

              {/* Social Icons */}
=======
              <p className="text-sm text-[#DDD0BB]/85 leading-relaxed font-light max-w-sm">
                Elevating sacred rituals and ambient spaces with handcrafted Indian incense sticks, pure natural sandalwood, sweet mogra, and traditional sambrani dhoop.
              </p>

              {/* Social Icons - Small, elegant circular outlined */}
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
              <div className="flex items-center gap-3 pt-1">
                <motion.a
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={BRAND_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Page"
<<<<<<< HEAD
                  className="w-9 h-9 rounded-full bg-[#1C140E] border border-[#C8A45D]/30 text-[#E8DDC8] hover:text-[#C8A45D] hover:border-[#C8A45D] flex items-center justify-center transition-colors shadow-sm"
=======
                  className="w-9 h-9 rounded-full bg-[#241914] border border-[#D9A52B]/30 text-[#DDD0BB] hover:text-[#D9A52B] hover:border-[#D9A52B] flex items-center justify-center transition-colors shadow-sm"
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
                >
                  <FacebookIcon className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`https://wa.me/${BRAND_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Contact"
<<<<<<< HEAD
                  className="w-9 h-9 rounded-full bg-[#1C140E] border border-[#C8A45D]/30 text-[#E8DDC8] hover:text-[#25D366] hover:border-[#25D366]/60 flex items-center justify-center transition-colors shadow-sm"
=======
                  className="w-9 h-9 rounded-full bg-[#241914] border border-[#D9A52B]/30 text-[#DDD0BB] hover:text-[#25D366] hover:border-[#25D366]/60 flex items-center justify-center transition-colors shadow-sm"
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </motion.a>
              </div>
            </div>

<<<<<<< HEAD
            {/* Middle Col 1: Navigation */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-serif text-sm font-bold tracking-[0.18em] uppercase text-[#C8A45D] border-b border-[#C8A45D]/25 pb-2 inline-block">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-sm font-light text-[#E8DDC8]">
=======
            {/* Middle Col 1: Navigation (Span 2) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-serif text-sm font-bold tracking-[0.18em] uppercase text-[#D9A52B] border-b border-[#D9A52B]/20 pb-2 inline-block">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-sm font-light text-[#DDD0BB]">
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
                {[
                  { label: "Home", href: "/design-2" },
                  { label: "About", href: "/design-2/about" },
                  { label: "Products", href: "/design-2/products" },
                  { label: "Gallery", href: "/design-2/gallery" },
                  { label: "Contact", href: "/design-2/contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
<<<<<<< HEAD
                      className="hover:text-[#C8A45D] transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#C8A45D]" />
=======
                      className="hover:text-[#D9A52B] transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#D9A52B]" />
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

<<<<<<< HEAD
            {/* Middle Col 2: Business */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-serif text-sm font-bold tracking-[0.18em] uppercase text-[#C8A45D] border-b border-[#C8A45D]/25 pb-2 inline-block">
                Business
              </h4>
              <ul className="space-y-2.5 text-sm font-light text-[#E8DDC8]">
=======
            {/* Middle Col 2: Business (Span 3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-serif text-sm font-bold tracking-[0.18em] uppercase text-[#D9A52B] border-b border-[#D9A52B]/20 pb-2 inline-block">
                Business
              </h4>
              <ul className="space-y-2.5 text-sm font-light text-[#DDD0BB]">
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
                {[
                  { label: "Become a Distributor", href: "/design-2/distributor" },
                  { label: "Wholesale Enquiry", href: "/design-2/contact" },
                  { label: "Brand Presence", href: "/design-2/about" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
<<<<<<< HEAD
                      className="hover:text-[#C8A45D] transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#C8A45D]" />
=======
                      className="hover:text-[#D9A52B] transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#D9A52B]" />
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

<<<<<<< HEAD
            {/* Right Col: Connect With Us */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-serif text-sm font-bold tracking-[0.18em] uppercase text-[#C8A45D] border-b border-[#C8A45D]/25 pb-2 inline-block">
                Connect With Us
              </h4>
              <ul className="space-y-3 text-sm font-light text-[#E8DDC8]">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                  <span>{BRAND_INFO.location}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C8A45D] shrink-0" />
                  <a href={`tel:${BRAND_INFO.phone}`} className="hover:text-[#C8A45D] transition-colors">
=======
            {/* Right Col: Connect With Us (Span 3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-serif text-sm font-bold tracking-[0.18em] uppercase text-[#D9A52B] border-b border-[#D9A52B]/20 pb-2 inline-block">
                Connect With Us
              </h4>
              <ul className="space-y-3 text-sm font-light text-[#DDD0BB]">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D9A52B] shrink-0 mt-0.5" />
                  <span>{BRAND_INFO.location}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#D9A52B] shrink-0" />
                  <a href={`tel:${BRAND_INFO.phone}`} className="hover:text-[#D9A52B] transition-colors">
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
                    {BRAND_INFO.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
<<<<<<< HEAD
                  <Mail className="w-4 h-4 text-[#C8A45D] shrink-0" />
                  <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-[#C8A45D] transition-colors">
=======
                  <Mail className="w-4 h-4 text-[#D9A52B] shrink-0" />
                  <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-[#D9A52B] transition-colors">
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
                    {BRAND_INFO.email}
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </ScrollReveal>

        {/* Thin Champagne-Gold Horizontal Divider */}
<<<<<<< HEAD
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C8A45D]/40 to-transparent my-2" />

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E8DDC8]/70 gap-4 font-light">
          <p>© {new Date().getFullYear()} {BRAND_INFO.companyName}. Brand: {BRAND_INFO.brandName}. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#C8A45D] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#C8A45D] transition-colors">
=======
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D9A52B]/40 to-transparent my-2" />

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#DDD0BB]/70 gap-4 font-light">
          <p>© {new Date().getFullYear()} {BRAND_INFO.companyName}. Brand: {BRAND_INFO.brandName}. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#D9A52B] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#D9A52B] transition-colors">
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
              Terms & Conditions
            </Link>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
<<<<<<< HEAD
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1C140E] border border-[#C8A45D]/30 text-[#C8A45D] hover:text-[#FFFDF8] hover:border-[#C8A45D] transition-all rounded-xs text-[11px]"
=======
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#241914] border border-[#D9A52B]/30 text-[#D9A52B] hover:text-[#FFFDF8] hover:border-[#D9A52B] transition-all rounded-xs text-[11px]"
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

