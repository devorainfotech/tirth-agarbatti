'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Facebook } from '@/components/icons/Facebook';
import { navItems } from '@/data/navigation';
import { company } from '@/data/company';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      setMobileOpen(false);
      prevPathRef.current = pathname;
    }
  }, [pathname]);

  const isHome = pathname === '/';
  const headerBg = scrolled
    ? 'bg-[#1C0A10]/95 shadow-lg backdrop-blur-md'
    : isHome
    ? 'bg-transparent'
    : 'bg-[#1C0A10]/95 backdrop-blur-md';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
        style={{ height: scrolled ? '68px' : '80px' }}
      >
        <div className="container-site h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label={`${company.fullName} Home`}>
            <Image
              src="/images/brand/tirth-logo.png"
              alt=""
              width={360}
              height={360}
              priority
              className="h-12 w-12 shrink-0 object-contain"
            />
            <span className="flex flex-col leading-none">
              <span
                className="font-display text-[1.35rem] tracking-[0.12em] sm:text-[1.5rem]"
                style={{ color: 'var(--color-ivory)' }}
              >
                {company.brandName.toUpperCase()}
              </span>
              <span
                className="mt-[-1px] font-body text-[0.52rem] uppercase tracking-[0.22em] sm:text-[0.58rem]"
                style={{ color: 'var(--color-gold)' }}
              >
                {company.supportingName}
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navItems.map((item) => {
              const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href) && item.href !== '/';
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-body text-[0.8rem] tracking-[0.1em] uppercase transition-colors duration-200 pb-0.5 group
                    ${active ? 'text-amber-300' : 'text-white/85 hover:text-white'}`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[1px] bg-amber-300 transition-all duration-300
                      ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Facebook */}
            <a
              href={company.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tirth Premium Agarbatti on Facebook"
              className="text-white/60 hover:text-amber-300 transition-colors duration-200"
            >
              <Facebook size={18} />
            </a>

            {/* CTA */}
            <Link
              href="/contact"
              className="font-body text-[0.72rem] tracking-[0.14em] uppercase px-5 py-2.5 border transition-all duration-300
                hover:bg-amber-300 hover:border-amber-300 hover:text-[#1C0A10] text-amber-300 border-amber-300"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-white p-2 -mr-2"
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile Overlay Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(340px,90vw)] flex flex-col"
              style={{ background: 'var(--color-burgundy-deeper)' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5" aria-label={`${company.fullName} Home`}>
                  <Image
                    src="/images/brand/tirth-logo.png"
                    alt=""
                    width={360}
                    height={360}
                    className="h-11 w-11 shrink-0 object-contain"
                  />
                  <span className="flex flex-col leading-none">
                    <span className="font-display text-xl tracking-widest text-white">{company.brandName.toUpperCase()}</span>
                    <span className="mt-[-1px] text-[0.6rem] uppercase tracking-[0.2em]" style={{ color: 'var(--color-gold)' }}>
                      {company.supportingName}
                    </span>
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white/70 hover:text-white p-2 -mr-2"
                  aria-label="Close navigation menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 flex flex-col justify-center px-8 gap-1" aria-label="Mobile navigation">
                {navItems.map((item, i) => {
                  const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href) && item.href !== '/';
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block font-display text-[1.65rem] font-300 italic py-2 border-b border-white/8 transition-colors
                          ${active ? 'text-amber-300' : 'text-white/80 hover:text-white'}`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-white/10 space-y-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center text-[0.75rem] tracking-[0.14em] uppercase py-3 border border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-[#1C0A10] transition-all duration-300"
                >
                  Enquire Now
                </Link>
                <a
                  href={company.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
                >
                  <Facebook size={16} />
                  <span className="font-body text-xs tracking-wide">@tirthpremiumagarbatti</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
