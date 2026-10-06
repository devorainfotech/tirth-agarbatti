"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Design3Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/design-3";

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
    { label: "HOME", href: "/design-3" },
    { label: "ABOUT", href: "/design-3/about" },
    { label: "PRODUCTS", href: "/design-3/products" },
    { label: "GALLERY", href: "/design-3/gallery" },
    { label: "CONTACT", href: "/design-3/contact" },
  ];

  // Determine navbar background state:
  // On home hero: transparent top, solid dark navy on scroll.
  // On subpages (about, products, product details, contact, distributor, gallery): solid dark navy background always so text contrast is sharp against light ivory page tops.
  const showSolidNav = isScrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showSolidNav
          ? "bg-[#0D1629] border-b border-[#C8A45D]/30 py-4 shadow-2xl"
          : "bg-gradient-to-b from-[#0D1629]/90 via-[#0D1629]/50 to-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo Left */}
          <Link
            href="/design-3"
            className="flex items-center gap-3.5 group focus:outline-none"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden shrink-0 border border-[#C8A45D]/40 bg-[#172746]/60 p-1 group-hover:border-[#C8A45D] transition-colors duration-500">
              <Image
                src="/images/logo/tirth-logo-transparent.png"
                alt="Tirth Agarbatti Logo"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-normal tracking-[0.2em] text-[#F8F4EA] group-hover:text-[#C8A45D] transition-colors duration-300">
                TIRTH
              </span>
              <span className="text-[8px] tracking-[0.3em] uppercase font-sans text-[#C8A45D] -mt-0.5">
                AGARBATTI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links Center */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/design-3" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[11px] font-sans font-medium tracking-[0.25em] uppercase transition-all duration-300 relative py-1 group ${
                    isActive ? "text-[#C8A45D]" : "text-[#F8F4EA]/90 hover:text-[#C8A45D]"
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`absolute -bottom-1 left-0 h-[1px] bg-[#C8A45D] transition-all duration-500 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Distributor Portal Right */}
          <div className="hidden md:flex items-center">
            <Link
              href="/design-3/distributor"
              className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#C8A45D]/50 text-[#F8F4EA] text-[10px] font-sans font-medium tracking-[0.22em] uppercase transition-all duration-500 hover:border-[#C8A45D] hover:bg-[#C8A45D] hover:text-[#0D1629]"
            >
              <span>DISTRIBUTOR PORTAL</span>
              <ArrowRight className="w-3 h-3 text-[#C8A45D] group-hover:text-[#0D1629] transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
              className="p-2 text-[#F8F4EA] hover:text-[#C8A45D] transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[72px] bg-[#0D1629] border-b border-[#C8A45D]/30 py-8 px-8 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col gap-5">
            {navLinks.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/design-3" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-sans tracking-[0.25em] uppercase py-2 border-b border-[#172746] flex items-center justify-between ${
                    isActive ? "text-[#C8A45D] font-semibold" : "text-[#F8F4EA]/90 hover:text-[#C8A45D]"
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <div className="pt-6 flex flex-col gap-3">
              <Link
                href="/design-3/distributor"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-[#C8A45D] text-[#0D1629] font-sans font-semibold text-xs tracking-[0.22em] uppercase rounded-full shadow-lg"
              >
                Distributor Portal
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
