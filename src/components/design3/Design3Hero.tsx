"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Design3Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#10182B] overflow-hidden pt-24 pb-16">
      {/* Background Image with Dark Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/design3/hero-luxury-navy.jpg"
          alt="Tirth Agarbatti Luxury Incense Packaging and Smoke"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 filter brightness-75 transition-transform duration-1000"
        />
        {/* Multilayer Dark Navy Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#10182B] via-[#10182B]/65 to-[#10182B]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#10182B]/40 to-[#10182B]/90" />
      </div>

      {/* Floating Animated Smoke Canvas / Particles Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-[#C9A45C]/10 rounded-full blur-[90px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#182B52]/60 rounded-full blur-[110px]" />
      </div>

      {/* Subtle Gold Frame Accent around Hero */}
      <div className="absolute inset-4 sm:inset-8 border border-[#C9A45C]/15 pointer-events-none z-10 hidden md:block" />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center">
        
        {/* Top Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#182B52]/80 border border-[#C9A45C]/40 text-[#C9A45C] text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-6 shadow-2xl backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C9A45C] animate-spin-slow" />
          <span>LUXURY INDIAN HERITAGE INCENSE</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal text-[#F7F2E8] tracking-tight leading-[1.02] max-w-5xl mx-auto drop-shadow-lg"
        >
          TIRTH <span className="italic font-light text-[#C9A45C]">AGARBATTI</span>
        </motion.h1>

        {/* Thin Gold Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-3 my-6 origin-center"
        >
          <div className="w-16 sm:w-28 h-[1px] bg-gradient-to-r from-transparent to-[#C9A45C]" />
          <div className="w-2 h-2 rotate-45 border border-[#C9A45C] bg-[#C9A45C]/20" />
          <div className="w-16 sm:w-28 h-[1px] bg-gradient-to-l from-transparent to-[#C9A45C]" />
        </motion.div>

        {/* Brand Statement */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-sans text-base sm:text-xl text-[#E8DDC8]/90 font-light max-w-2xl mx-auto leading-relaxed tracking-wide"
        >
          The fragrance of devotion. Crafted with pure sandalwood, natural botanical resins, and sacred temple floristry to illuminate your daily rituals.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            href="/design-3/products"
            className="w-full sm:w-auto px-9 py-4 bg-[#C9A45C] text-[#10182B] text-xs font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-[#F7F2E8] transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 group"
          >
            <span>EXPLORE COLLECTION</span>
            <ArrowRight className="w-4 h-4 text-[#10182B] transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/design-3/about"
            className="w-full sm:w-auto px-9 py-4 bg-[#182B52]/60 text-[#F7F2E8] border border-[#C9A45C]/50 text-xs font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-[#182B52] hover:border-[#C9A45C] transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
          >
            <span>DISCOVER OUR STORY</span>
          </Link>
        </motion.div>

        {/* Highlight Stats / Feature Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 sm:mt-20 pt-8 border-t border-[#C9A45C]/20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center"
        >
          <div>
            <span className="block font-serif text-2xl sm:text-3xl text-[#C9A45C]">100% Pure</span>
            <span className="text-[10px] tracking-[0.2em] text-[#E8DDC8]/70 uppercase">Botanical Extracts</span>
          </div>
          <div>
            <span className="block font-serif text-2xl sm:text-3xl text-[#C9A45C]">Soot Free</span>
            <span className="text-[10px] tracking-[0.2em] text-[#E8DDC8]/70 uppercase">Clean Sacred Smoke</span>
          </div>
          <div>
            <span className="block font-serif text-2xl sm:text-3xl text-[#C9A45C]">Long Lasting</span>
            <span className="text-[10px] tracking-[0.2em] text-[#E8DDC8]/70 uppercase">Aromatic Presence</span>
          </div>
          <div>
            <span className="block font-serif text-2xl sm:text-3xl text-[#C9A45C]">Authentic</span>
            <span className="text-[10px] tracking-[0.2em] text-[#E8DDC8]/70 uppercase">Vedic Formulations</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
