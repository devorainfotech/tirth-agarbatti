"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
<<<<<<< HEAD
import { Menu, X, ArrowRight } from "lucide-react";
=======
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef

export default function Design3Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

<<<<<<< HEAD
  const isHome = pathname === "/design-3";

=======
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
<<<<<<< HEAD
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
=======
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
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
              <Image
                src="/images/logo/tirth-logo-transparent.png"
                alt="Tirth Agarbatti Logo"
                fill
<<<<<<< HEAD
                sizes="40px"
=======
                sizes="48px"
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
<<<<<<< HEAD
              <span className="font-serif text-lg sm:text-xl font-normal tracking-[0.2em] text-[#F8F4EA] group-hover:text-[#C8A45D] transition-colors duration-300">
                TIRTH
              </span>
              <span className="text-[8px] tracking-[0.3em] uppercase font-sans text-[#C8A45D] -mt-0.5">
=======
              <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.15em] text-[#F7F2E8] group-hover:text-[#C9A45C] transition-colors">
                TIRTH
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase font-medium text-[#C9A45C]/90">
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
                AGARBATTI
              </span>
            </div>
          </Link>

<<<<<<< HEAD
          {/* Desktop Navigation Links Center */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/design-3" && pathname?.startsWith(item.href));
=======
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
              return (
                <Link
                  key={item.href}
                  href={item.href}
<<<<<<< HEAD
                  className={`text-[11px] font-sans font-medium tracking-[0.25em] uppercase transition-all duration-300 relative py-1 group ${
                    isActive ? "text-[#C8A45D]" : "text-[#F8F4EA]/90 hover:text-[#C8A45D]"
=======
                  className={`text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 relative py-1 group ${
                    isActive
                      ? "text-[#C9A45C]"
                      : "text-[#E8DDC8]/80 hover:text-[#F7F2E8]"
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
                  }`}
                >
                  <span>{item.label}</span>
                  <span
<<<<<<< HEAD
                    className={`absolute -bottom-1 left-0 h-[1px] bg-[#C8A45D] transition-all duration-500 ${
=======
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#C9A45C] transition-all duration-300 ${
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

<<<<<<< HEAD
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
=======
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
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
<<<<<<< HEAD
        <div className="md:hidden fixed inset-x-0 top-[72px] bg-[#0D1629] border-b border-[#C8A45D]/30 py-8 px-8 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col gap-5">
            {navLinks.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/design-3" && pathname?.startsWith(item.href));
=======
        <div className="md:hidden fixed inset-x-0 top-[64px] bg-[#10182B]/98 backdrop-blur-2xl border-b border-[#C9A45C]/30 py-6 px-6 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
<<<<<<< HEAD
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
=======
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
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
