"use client";

import Link from "next/link";
import Image from "next/image";
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
                <Image
                  src="/images/logo/tirth-logo-transparent.png"
                  alt="Tirth Agarbatti Logo"
                  fill
                  className="object-contain"
                />
              </div>
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
                  {BRAND_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-[#F8F4EA] transition-colors">
                  {BRAND_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-[#A9A49A] font-sans font-light gap-4">
          <p>© {new Date().getFullYear()} Milliard Agarbatti. Tirth Agarbatti Luxury Heritage. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#F8F4EA] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#F8F4EA] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
