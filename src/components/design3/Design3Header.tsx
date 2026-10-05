"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

export default function Design3Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/design-3" },
    { label: "About", href: "/design-3/about" },
    { label: "Products", href: "/design-3/products" },
    { label: "Gallery", href: "/design-3/gallery" },
    { label: "Contact", href: "/design-3/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-[#10182B]/95 backdrop-blur-md border-b border-[#C9A45C]/30 py-3 shadow-2xl"
          : "bg-gradient-to-b from-[#10182B]/90 via-[#10182B]/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/design-3"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden shrink-0 border border-[#C9A45C]/40 bg-[#182B52]/50 p-1 group-hover:border-[#C9A45C] transition-colors duration-300">
              <Image
                src="/images/logo/tirth-logo-transparent.png"
                alt="Tirth Agarbatti Logo"
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.15em] text-[#F7F2E8] group-hover:text-[#C9A45C] transition-colors">
                TIRTH
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase font-medium text-[#C9A45C]/90">
                AGARBATTI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 relative py-1 group ${
                    isActive
                      ? "text-[#C9A45C]"
                      : "text-[#E8DDC8]/80 hover:text-[#F7F2E8]"
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#C9A45C] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/design-3/distributor"
              className="relative group overflow-hidden px-5 py-2.5 rounded-full border border-[#C9A45C]/60 text-[#F7F2E8] text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-500 hover:border-[#C9A45C] shadow-lg"
            >
              <span className="absolute inset-0 bg-[#C9A45C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-[#10182B] transition-colors">
                <span>Distributor Portal</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-[#F7F2E8] hover:text-[#C9A45C] transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[64px] bg-[#10182B]/98 backdrop-blur-2xl border-b border-[#C9A45C]/30 py-6 px-6 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-serif tracking-widest uppercase py-2.5 border-b border-[#182B52] flex items-center justify-between ${
                    isActive ? "text-[#C9A45C] font-semibold" : "text-[#E8DDC8] hover:text-[#C9A45C]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-[#C9A45C]" />}
                </Link>
              );
            })}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/design-3/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-[#C9A45C] text-[#10182B] font-semibold text-xs tracking-[0.2em] uppercase rounded-full shadow-md"
              >
                Enquire Now
              </Link>
              <Link
                href="/design-3/distributor"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 border border-[#C9A45C]/40 text-[#F7F2E8] font-medium text-xs tracking-[0.2em] uppercase rounded-full"
              >
                Become a Distributor
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
