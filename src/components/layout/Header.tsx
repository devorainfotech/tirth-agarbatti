"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { NAV_ITEMS } from "@/data/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  if (pathname?.startsWith("/design-2") || pathname?.startsWith("/design-3")) {
    return null;
  }

  // Determine if header should render light (ivory) or transparent (dark hero) mode
  const isLightMode = isScrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLightMode
          ? "bg-[#FFFDF7]/95 backdrop-blur-md border-b border-[#D9A52B]/20 py-3 shadow-md"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-0 select-none rounded-lg p-1"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/logo/tirth-logo-transparent.png"
                alt="Tirth Premium Agarbatti Logo"
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif text-lg sm:text-xl font-bold tracking-wider transition-colors duration-300 ${
                  isLightMode ? "text-[#17130F]" : "text-[#FFFDF7]"
                }`}
              >
                TIRTH
              </span>
              <span
                className={`text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${
                  isLightMode ? "text-[#7A6A57]" : "text-[#F2C94C]/90"
                }`}
              >
                Milliard Agarbatti
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium tracking-wider transition-all duration-300 relative py-1 ${
                    isActive
                      ? "text-[#D9A52B] font-semibold"
                      : isLightMode
                      ? "text-[#17130F]/80 hover:text-[#D9A52B]"
                      : "text-[#FFFDF7]/90 hover:text-[#F2C94C]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D9A52B] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                isLightMode
                  ? "bg-[#D9A52B] text-[#17130F] hover:bg-[#D97706] hover:text-[#FFFDF7] shadow-sm"
                  : "bg-[#FFFDF7]/15 text-[#FFFDF7] hover:bg-[#D9A52B] hover:text-[#17130F] border border-[#D9A52B]/40"
              }`}
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={`p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#D9A52B] ${
                isLightMode ? "text-[#17130F]" : "text-[#FFFDF7]"
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[64px] bg-[#17130F]/95 backdrop-blur-xl border-b border-[#D9A52B]/20 py-6 px-6 shadow-2xl transition-all animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-serif tracking-wide py-2 border-b border-[#7A6A57]/20 flex items-center justify-between ${
                    isActive ? "text-[#F2C94C] font-semibold" : "text-[#FFFDF7]/90 hover:text-[#F2C94C]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-[#D9A52B]" />}
                </Link>
              );
            })}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-[#D9A52B] text-[#17130F] font-semibold text-sm rounded-full tracking-wider uppercase shadow-md active:scale-95 transition-transform"
              >
                Enquire Now
              </Link>
              <Link
                href="/distributor"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 border border-[#D9A52B]/40 text-[#FFFDF7] font-medium text-sm rounded-full tracking-wider uppercase hover:border-[#D9A52B]"
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
