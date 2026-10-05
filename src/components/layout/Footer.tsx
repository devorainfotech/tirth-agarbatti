"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Phone, MessageSquare, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS, BUSINESS_LINKS, BRAND_INFO } from "@/data/navigation";

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

export default function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/design-2") || pathname?.startsWith("/design-3")) {
    return null;
  }

  return (
    <footer className="bg-[#17130F] text-[#FFFDF7] pt-16 pb-8 border-t border-[#D9A52B]/20 relative overflow-hidden">
      {/* Delicate background decorative pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D9A52B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D97706]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#7A6A57]/30">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#D9A52B]/50 shadow-md shrink-0">
                <Image
                  src="/images/logo/tirth-logo-transparent.png"
                  alt="Tirth Premium Agarbatti Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-wider text-[#F2C94C]">
                  TIRTH
                </h3>
                <p className="text-xs uppercase tracking-[0.25em] text-[#D9A52B]/80 font-medium">
                  {BRAND_INFO.companyName}
                </p>
              </div>
            </div>
            
            <p className="text-[#FFFDF7]/70 text-sm leading-relaxed max-w-md font-light">
              Elevating sacred rituals and quiet reflective moments with handcrafted Indian incense sticks, natural fragrances, and traditional sambrani dhoop.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <a
                href={BRAND_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Milliard Agarbatti Facebook"
                className="w-10 h-10 rounded-full bg-[#FFFDF7]/10 hover:bg-[#D9A52B] hover:text-[#17130F] flex items-center justify-center transition-all duration-300 border border-[#D9A52B]/30"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${BRAND_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact on WhatsApp"
                className="w-10 h-10 rounded-full bg-[#FFFDF7]/10 hover:bg-[#25D366] hover:text-[#FFFDF7] flex items-center justify-center transition-all duration-300 border border-[#D9A52B]/30"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold tracking-wider text-[#F2C94C] border-b border-[#D9A52B]/20 pb-2 inline-block">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-light">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#FFFDF7]/80 hover:text-[#D9A52B] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business & Trade */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold tracking-wider text-[#F2C94C] border-b border-[#D9A52B]/20 pb-2 inline-block">
              Business & Trade
            </h4>
            <ul className="space-y-2.5 text-sm font-light">
              {BUSINESS_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#FFFDF7]/80 hover:text-[#D9A52B] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold tracking-wider text-[#F2C94C] border-b border-[#D9A52B]/20 pb-2 inline-block">
              Connect With Us
            </h4>
            <ul className="space-y-3 text-sm font-light text-[#FFFDF7]/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D9A52B] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D9A52B] shrink-0" />
                <a href={`tel:${BRAND_INFO.phone}`} className="hover:text-[#D9A52B] transition-colors">
                  {BRAND_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D9A52B] shrink-0" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-[#D9A52B] transition-colors">
                  {BRAND_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFFDF7]/50 gap-4">
          <p>© {new Date().getFullYear()} Milliard Agarbatti. Brand: Tirth Premium Agarbatti. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#D9A52B] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#D9A52B] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
