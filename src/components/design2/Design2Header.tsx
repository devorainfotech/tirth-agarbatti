"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { BRAND_INFO } from "@/data/navigation";

const D2_NAV_ITEMS = [
  { label: "HOME", href: "/design-2" },
  { label: "ABOUT", href: "/design-2/about" },
  { label: "PRODUCTS", href: "/design-2/products" },
  { label: "GALLERY", href: "/design-2/gallery" },
];

export default function Design2Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#FFFDF8]/95 backdrop-blur-md py-3 border-b border-[#B89042]/25 shadow-sm"
          : "bg-[#F7F1E6]/90 backdrop-blur-xs py-4 sm:py-5 border-b border-[#B89042]/15"
      }`}
    >
      {/* Scroll Progress Bar at the top of header */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B89042] via-[#D9A52B] to-[#A95736] origin-left z-50"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Tirth Logo & Milliard Subtitle */}
          <Link
            href="/design-2"
            className="flex items-center gap-3 group focus:outline-none focus:ring-0 select-none"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-300 border border-[#B89042]/40 bg-[#FFFDF8] p-0.5 shadow-sm">
              <Image
                src="/images/logo/tirth-logo-transparent.png"
                alt="Tirth Logo"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.18em] font-bold text-[#241914] leading-none">
                TIRTH
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase text-[#A95736] font-semibold mt-0.5">
                {BRAND_INFO.companyName}
              </span>
            </div>
          </Link>

          {/* Center: Editorial Nav Links with Champagne Gold Active Underline */}
          <nav className="hidden md:flex items-center gap-10">
            {D2_NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs tracking-[0.22em] font-semibold uppercase transition-colors duration-300 relative py-1 group ${
                    isActive
                      ? "text-[#241914]"
                      : "text-[#241914]/80 hover:text-[#A95736]"
                  }`}
                >
                  <span>{item.label}</span>
                  {/* Champagne Gold Underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#B89042] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right: Contact CTA Button with Micro-Interaction */}
          <div className="hidden md:flex items-center">
            <motion.div
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="/design-2/contact"
                className="group inline-flex items-center gap-2 px-5 py-2.5 border border-[#B89042]/70 bg-[#FFFDF8]/90 text-[#241914] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#241914] hover:text-[#FFFDF8] hover:border-[#241914] transition-all duration-300 shadow-xs"
              >
                <span>CONTACT</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B89042] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 text-[#241914] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Fullscreen Editorial Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 top-[65px] bg-[#241914] text-[#FFFDF8] z-50 flex flex-col justify-between p-8"
        >
          <div className="space-y-2 text-xs text-[#B89042] tracking-[0.25em] uppercase font-mono">
            <span>Menu — Milliard Agarbatti</span>
          </div>

          <nav className="flex flex-col gap-6 my-auto">
            {D2_NAV_ITEMS.map((item, idx) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.08 + 0.1, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl tracking-wider hover:text-[#B89042] transition-colors flex items-center justify-between border-b border-[#DDD0BB]/10 pb-3"
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono text-[#B89042]">0{idx + 1}</span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
            >
              <Link
                href="/design-2/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl tracking-wider text-[#A95736] hover:text-[#B89042] transition-colors flex items-center justify-between border-b border-[#DDD0BB]/10 pb-3"
              >
                <span>CONTACT</span>
                <ArrowUpRight className="w-5 h-5 text-[#B89042]" />
              </Link>
            </motion.div>
          </nav>

          <div className="pt-6 border-t border-[#DDD0BB]/15 flex justify-between items-end text-xs text-[#DDD0BB]/70">
            <div>
              <p className="font-serif text-sm text-[#FFFDF8]">Tirth Premium Agarbatti</p>
              <p>Milliard Agarbatti, Ahmedabad</p>
            </div>
            <a
              href={BRAND_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B89042] underline uppercase tracking-wider text-[11px]"
            >
              Facebook
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
