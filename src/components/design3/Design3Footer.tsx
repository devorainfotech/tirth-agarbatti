"use client";

import Link from "next/link";
import Image from "next/image";
<<<<<<< HEAD
import { Mail, MapPin, Phone } from "lucide-react";
import { BRAND_INFO } from "@/data/navigation";

export default function Design3Footer() {
  return (
    <footer className="bg-[#0D1629] text-[#F8F4EA] pt-20 pb-12 border-t border-[#C8A45D]/25 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-[#172746]">
          
          {/* Logo & Brand Statement (2 Cols) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#C8A45D]/40 bg-[#172746]/60 p-1 shrink-0">
=======
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { BRAND_INFO } from "@/data/navigation";

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

export default function Design3Footer() {
  return (
    <footer className="bg-[#10182B] text-[#F7F2E8] pt-20 pb-10 border-t border-[#C9A45C]/25 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#182B52]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A45C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Gold Ornament Divider */}
        <div className="flex items-center justify-center gap-4 mb-16 opacity-70">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#C9A45C]" />
          <div className="w-2 h-2 rotate-45 border border-[#C9A45C] bg-[#10182B]" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#C9A45C] font-semibold">
            TIRTH AGARBATTI
          </span>
          <div className="w-2 h-2 rotate-45 border border-[#C9A45C] bg-[#10182B]" />
          <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#C9A45C]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-[#182B52]">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#C9A45C]/50 bg-[#182B52]/50 p-1 shrink-0">
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
                <Image
                  src="/images/logo/tirth-logo-transparent.png"
                  alt="Tirth Agarbatti Logo"
                  fill
                  className="object-contain"
                />
              </div>
<<<<<<< HEAD
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-normal tracking-[0.2em] text-[#F8F4EA]">
                  TIRTH
                </span>
                <span className="text-[9px] tracking-[0.3em] uppercase font-sans text-[#C8A45D] -mt-0.5">
                  AGARBATTI
                </span>
              </div>
            </div>
            
            <p className="text-[#A9A49A] text-xs sm:text-sm leading-relaxed max-w-sm font-sans font-light">
              Crafted with devotion. Elevating sacred rituals and daily quiet living with handcrafted Indian incense sticks, pure sandalwood, mogra, and sacred sambrani dhoop.
            </p>
          </div>

          {/* Column 1: Navigation */}
          <div className="space-y-3.5">
            <h4 className="font-serif text-sm font-normal tracking-[0.2em] text-[#C8A45D] uppercase">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans font-light tracking-wider uppercase text-[#A9A49A]">
              <li><Link href="/design-3" className="hover:text-[#F8F4EA] transition-colors">Home</Link></li>
              <li><Link href="/design-3/about" className="hover:text-[#F8F4EA] transition-colors">About</Link></li>
              <li><Link href="/design-3/products" className="hover:text-[#F8F4EA] transition-colors">Products</Link></li>
              <li><Link href="/design-3/gallery" className="hover:text-[#F8F4EA] transition-colors">Gallery</Link></li>
              <li><Link href="/design-3/contact" className="hover:text-[#F8F4EA] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 2: Trade & Business */}
          <div className="space-y-3.5">
            <h4 className="font-serif text-sm font-normal tracking-[0.2em] text-[#C8A45D] uppercase">
              TRADE & BUSINESS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans font-light tracking-wider uppercase text-[#A9A49A]">
              <li><Link href="/design-3/distributor" className="hover:text-[#F8F4EA] transition-colors">Distributor Portal</Link></li>
              <li><Link href="/design-3/contact?type=wholesale" className="hover:text-[#F8F4EA] transition-colors">Wholesale Inquiry</Link></li>
              <li><Link href="/design-3/products" className="hover:text-[#F8F4EA] transition-colors">Product Catalogue</Link></li>
              <li><Link href="/design-3/about" className="hover:text-[#F8F4EA] transition-colors">Brand Story</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-3.5">
            <h4 className="font-serif text-sm font-normal tracking-[0.2em] text-[#C8A45D] uppercase">
              CONTACT
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-sans font-light text-[#A9A49A]">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <a href={`tel:${BRAND_INFO.phone}`} className="hover:text-[#F8F4EA] transition-colors">
=======
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-[0.12em] text-[#F7F2E8]">
                  TIRTH <span className="text-[#C9A45C]">AGARBATTI</span>
                </h3>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#E8DDC8]/70 font-medium">
                  {BRAND_INFO.companyName}
                </p>
              </div>
            </div>
            
            <p className="text-[#E8DDC8]/75 text-sm leading-relaxed max-w-md font-sans font-light">
              Crafted with devotion. Elevating sacred rituals, homes, and quiet moments with handcrafted Indian incense sticks, natural sandalwood, mogra, and sambrani dhoop.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BRAND_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#182B52]/80 hover:bg-[#C9A45C] hover:text-[#10182B] flex items-center justify-center transition-all duration-300 border border-[#C9A45C]/30 text-[#F7F2E8]"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BRAND_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-[#182B52]/80 hover:bg-[#25D366] hover:text-[#FFFDF7] flex items-center justify-center transition-all duration-300 border border-[#C9A45C]/30 text-[#F7F2E8]"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold tracking-wider text-[#C9A45C] border-b border-[#C9A45C]/20 pb-2 inline-block">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase font-medium">
              {[
                { label: "Home", href: "/design-3" },
                { label: "About", href: "/design-3/about" },
                { label: "Products", href: "/design-3/products" },
                { label: "Gallery", href: "/design-3/gallery" },
                { label: "Contact", href: "/design-3/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#E8DDC8]/80 hover:text-[#C9A45C] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C9A45C]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold tracking-wider text-[#C9A45C] border-b border-[#C9A45C]/20 pb-2 inline-block">
              Trade & Business
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase font-medium">
              {[
                { label: "Distributor Inquiry", href: "/design-3/distributor" },
                { label: "Wholesale Contact", href: "/design-3/contact?type=wholesale" },
                { label: "Product Catalogue", href: "/design-3/products" },
                { label: "Brand Story", href: "/design-3/about" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#E8DDC8]/80 hover:text-[#C9A45C] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C9A45C]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold tracking-wider text-[#C9A45C] border-b border-[#C9A45C]/20 pb-2 inline-block">
              Corporate Office
            </h4>
            <ul className="space-y-3.5 text-xs text-[#E8DDC8]/80 font-sans">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C9A45C] shrink-0" />
                <a href={`tel:${BRAND_INFO.phone}`} className="hover:text-[#C9A45C] transition-colors font-medium">
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
                  {BRAND_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
<<<<<<< HEAD
                <Mail className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-[#F8F4EA] transition-colors">
=======
                <Mail className="w-4 h-4 text-[#C9A45C] shrink-0" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-[#C9A45C] transition-colors font-medium">
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
                  {BRAND_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
<<<<<<< HEAD
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-[#A9A49A] font-sans font-light gap-4">
          <p>© {new Date().getFullYear()} Milliard Agarbatti. Tirth Agarbatti Luxury Heritage. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#F8F4EA] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#F8F4EA] transition-colors">
=======
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E8DDC8]/50 gap-4">
          <p>© {new Date().getFullYear()} Milliard Agarbatti. Tirth Agarbatti Luxury Heritage Concept. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#C9A45C] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#C9A45C] transition-colors">
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
