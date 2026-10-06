"use client";

import Image from "next/image";
import Link from "next/link";
<<<<<<< HEAD
import { motion } from "framer-motion";
=======
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
import { ArrowUpRight, Sparkles } from "lucide-react";
import { BRAND_INFO } from "@/data/navigation";
import Design3BrandStory from "@/components/design3/Design3BrandStory";
import Design3WhyTirth from "@/components/design3/Design3WhyTirth";
import Design3Heritage from "@/components/design3/Design3Heritage";
import Design3CTA from "@/components/design3/Design3CTA";

export default function Design3AboutPage() {
  return (
    <div className="bg-[#F7F2E8]">
      
<<<<<<< HEAD
      {/* Editorial Page Hero - Matching Design 3 Hero Aesthetics */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-[#0D1629] overflow-hidden pt-32 pb-20 sm:pb-28 border-b border-[#C9A45C]/30">
        {/* Background Cinematic Photograph with High Clarity */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/design3/about-hero-cinematic.jpg"
            alt="The Heritage & Story of Tirth Agarbatti"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 filter brightness-90 contrast-105 transition-transform duration-1000"
          />
          {/* Dark Navy Radial & Linear Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1629] via-[#0D1629]/55 to-[#0D1629]/75" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0D1629]/35 to-[#0D1629]/85" />
        </div>

        {/* Hero Content */}
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-20 w-full text-center">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#182B52]/80 border border-[#C9A45C]/50 backdrop-blur-md mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span className="text-xs font-sans font-medium tracking-[0.35em] uppercase text-[#C9A45C]">
              ABOUT OUR COMPANY & BRAND
            </span>
          </motion.div>

          {/* Large Cinematic Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal text-[#F8F4EA] tracking-tight leading-[1.03] max-w-4xl mx-auto"
          >
            THE STORY OF <br />
            <span className="italic text-[#C8A45D] font-light drop-shadow-md">TIRTH AGARBATTI</span>
          </motion.h1>

          {/* Thin Gold Separator with Diamond Accent */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center justify-center gap-3 my-7"
          >
            <div className="w-16 sm:w-24 h-[1px] bg-[#C8A45D]" />
            <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A45D] bg-[#0D1629]" />
            <div className="w-16 sm:w-24 h-[1px] bg-[#C8A45D]" />
          </motion.div>

          {/* Editorial Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-base sm:text-xl text-[#F8F4EA]/90 font-light max-w-2xl mx-auto leading-relaxed tracking-wide"
          >
            {BRAND_INFO.companyName} presents <strong className="font-medium text-[#C8A45D]">{BRAND_INFO.brandName}</strong> — a luxury celebration of sacred serenity, natural flora, and Indian incense heritage.
          </motion.p>
=======
      {/* Editorial Page Hero */}
      <section className="bg-[#10182B] text-[#F7F2E8] pt-32 pb-20 sm:pb-28 border-b border-[#C9A45C]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#182B52] border border-[#C9A45C]/40 text-[#C9A45C] text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT OUR COMPANY & BRAND</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-7xl font-normal text-[#F7F2E8] tracking-tight leading-[1.05]">
            THE STORY OF <span className="italic font-light text-[#C9A45C]">TIRTH</span>
          </h1>

          <div className="flex items-center gap-3 my-4">
            <div className="w-20 h-[1px] bg-[#C9A45C]" />
            <div className="w-1.5 h-1.5 rotate-45 border border-[#C9A45C] bg-[#10182B]" />
          </div>

          <p className="font-serif text-lg sm:text-2xl italic text-[#E8DDC8]/90 max-w-2xl leading-relaxed border-l-2 border-[#C9A45C] pl-4">
            {BRAND_INFO.companyName} presents {BRAND_INFO.brandName} — a luxury celebration of sacred serenity, natural flora, and Indian incense heritage.
          </p>
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
        </div>
      </section>

      {/* Main Brand Story */}
      <Design3BrandStory />

      {/* Artisanal Formulations Detail Section */}
      <section className="py-24 sm:py-32 bg-[#10182B] text-[#F7F2E8] border-b border-[#C9A45C]/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A45C] block">
                ARTISANAL PROCESS & INGREDIENTS
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F7F2E8] mt-1">
                Authentic <span className="italic text-[#C9A45C]">Formulations</span>
              </h2>
              <div className="w-16 h-[1px] bg-[#C9A45C] mt-2" />

              <p className="text-sm sm:text-base text-[#E8DDC8]/85 leading-relaxed font-sans font-light max-w-xl">
                Every incense stick produced by {BRAND_INFO.companyName} is hand-rolled using pure wood powders, natural binder gums, and carefully selected aromatic oils. We maintain strict quality standards to ensure that {BRAND_INFO.brandName} delivers a consistent, soot-free, and uplifting aromatic experience.
              </p>
              
              <div className="pt-2">
                <Link
                  href="/design-3/products"
                  className="inline-flex items-center gap-4 px-8 py-4 bg-[#C9A45C] text-[#10182B] text-xs font-semibold tracking-[0.22em] uppercase hover:bg-[#F7F2E8] transition-all duration-300 shadow-lg border border-[#C9A45C]"
                >
                  <span>BROWSE FRAGRANCE CATALOG</span>
                  <ArrowUpRight className="w-4 h-4 text-[#10182B]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full border border-[#C9A45C]/40 p-3 bg-[#182B52] shadow-2xl group">
                <div className="relative w-full h-full overflow-hidden bg-[#10182B]">
                  <Image
                    src="/images/design3/craftsmanship.jpg"
                    alt="Authentic Incense Craftsmanship by Milliard Agarbatti"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10182B]/60 via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Brand Pillars */}
      <Design3WhyTirth />

      {/* Heritage */}
      <Design3Heritage />

      {/* CTA */}
      <Design3CTA />
    </div>
  );
}
