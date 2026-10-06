"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { BRAND_INFO } from "@/data/navigation";
import Design2BrandIntro from "@/components/design2/Design2BrandIntro";
import Design2QualityPillars from "@/components/design2/Design2QualityPillars";
import Design2BusinessCTA from "@/components/design2/Design2BusinessCTA";
import ScrollReveal from "@/components/design2/ScrollReveal";

export default function Design2AboutPage() {
  return (
    <div className="bg-[#FFFDF8]">
      
      {/* Editorial Page Hero */}
      <section className="bg-[#FAF6EE] pt-28 sm:pt-36 pb-20 sm:pb-28 border-b border-[#C8A45D]/30 relative overflow-hidden text-[#1C140E]">
        
        {/* High-Clarity Background Image Overlay */}
        <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full pointer-events-none overflow-hidden opacity-30 sm:opacity-45">
          <Image
            src="/images/design2/about-hero-cinematic.jpg"
            alt="Tirth Heritage & Craftsmanship Background"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center filter brightness-95 contrast-[1.05] scale-105"
          />
          {/* Smooth Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6EE] via-[#FAF6EE]/90 lg:via-[#FAF6EE]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6EE] via-transparent to-[#FAF6EE]" />
        </div>

        {/* Soft Ambient Golden Glows */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#C8A45D]/14 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-radial from-[#8C5D3B]/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Decorative Corner Watermark Lines */}
        <div className="absolute top-10 left-8 w-16 h-16 border-t border-l border-[#C8A45D]/25 pointer-events-none hidden md:block" />
        <div className="absolute bottom-10 right-8 w-16 h-16 border-b border-r border-[#C8A45D]/25 pointer-events-none hidden md:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#FFFDF8] border border-[#C8A45D]/50 text-[#8C5D3B] text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.3em] uppercase mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
            <span>ABOUT OUR COMPANY & BRAND</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-serif text-4xl sm:text-7xl font-normal text-[#1C140E] tracking-tight leading-[1.02]"
          >
            THE STORY OF <span className="italic font-normal text-[#C8A45D] relative inline-block">
              TIRTH
              <span className="absolute bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-[#C8A45D]/0 via-[#C8A45D]/70 to-[#C8A45D]/0" />
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center gap-3 mt-5 origin-left"
          >
            <div className="w-20 h-[1px] bg-gradient-to-r from-[#C8A45D] to-[#8C5D3B]" />
            <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A45D] bg-[#C8A45D]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="relative bg-[#FFFDF8]/90 backdrop-blur-sm p-5 sm:p-6 border-l-2 border-[#C8A45D] border-y border-r border-[#C8A45D]/25 shadow-md max-w-2xl mt-6"
          >
            <p className="font-serif text-lg sm:text-2xl italic text-[#1C140E]/90 leading-relaxed">
              &ldquo;{BRAND_INFO.companyName} brings you {BRAND_INFO.brandName} — an olfactory ode to divine serenity, artisanal quality, and Indian fragrance heritage.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Brand Story (The Tirth Experience) */}
      <Design2BrandIntro />

      {/* Craftsmanship Focus (Authentic Formulations) */}
      <section className="py-24 sm:py-32 bg-[#FFFDF8] border-b border-[#C8A45D]/25 relative overflow-hidden text-[#1C140E]">
        
        {/* Soft Ambient Glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-radial from-[#C8A45D]/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Decorative Corner Watermarks */}
        <div className="absolute top-10 left-8 w-16 h-16 border-t border-l border-[#C8A45D]/20 pointer-events-none hidden md:block" />
        <div className="absolute bottom-10 right-8 w-16 h-16 border-b border-r border-[#C8A45D]/20 pointer-events-none hidden md:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-7">
              <ScrollReveal direction="up" distance={20}>
                <div className="flex items-center gap-3">
                  {/* <span className="w-8 h-[1px] bg-[#C8A45D]" /> */}
                  <span className="text-xs font-sans font-semibold tracking-[0.35em] uppercase text-[#8C5D3B]">
                    ARTISANAL PROCESS & INGREDIENTS
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C140E] mt-2 leading-tight">
                  AUTHENTIC <span className="italic font-normal text-[#C8A45D] relative inline-block">
                    FORMULATIONS
                    <span className="absolute bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-[#C8A45D]/0 via-[#C8A45D]/60 to-[#C8A45D]/0" />
                  </span>
                </h2>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-16 h-[1px] bg-gradient-to-r from-[#C8A45D] to-[#8C5D3B]" />
                  <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A45D] bg-[#C8A45D]" />
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" distance={20} delay={0.15}>
                <p className="text-sm sm:text-base text-[#1C140E]/85 leading-relaxed font-sans font-normal max-w-xl">
                  Every incense stick produced by {BRAND_INFO.companyName} is hand-rolled using pure sandalwood powder, natural binder gums, and carefully selected aromatic oils. We adhere to strict Vedic standards to deliver a consistent, soot-free, and divine atmospheric experience.
                </p>
              </ScrollReveal>
              
              <ScrollReveal direction="up" distance={20} delay={0.25}>
                <div className="pt-2">
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/design-2/products"
                      className="group relative inline-flex items-center gap-4 px-8 py-4 bg-[#1C140E] text-[#FFFDF8] text-xs font-sans font-semibold tracking-[0.25em] uppercase hover:bg-[#8C5D3B] transition-all duration-300 shadow-xl border border-[#C8A45D]/40 overflow-hidden"
                    >
                      {/* Sheen Effect */}
                      <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
                      
                      <span className="relative z-10">BROWSE FRAGRANCE CATALOG</span>
                      <ArrowUpRight className="w-4 h-4 text-[#C8A45D] relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </motion.div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6">
              <ScrollReveal direction="up" distance={25} delay={0.2}>
                <div className="relative p-3 sm:p-5 bg-[#FAF6EE] border border-[#C8A45D]/40 shadow-[0_20px_50px_-15px_rgba(28,20,14,0.12)] group">
                  
                  {/* Gold Corner Embellishments */}
                  <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#C8A45D] z-30" />
                  <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#C8A45D] z-30" />
                  <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#C8A45D] z-30" />
                  <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#C8A45D] z-30" />

                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1C140E] border border-[#C8A45D]/25">
                    <Image
                      src="/images/brand/tirth-craftsmanship.jpg"
                      alt="Authentic Incense Craftsmanship by Milliard Agarbatti"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center transition-all duration-1000 ease-out group-hover:scale-105 group-hover:brightness-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C140E]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Brand Pillars */}
      <Design2QualityPillars />

      {/* Distributor CTA */}
      <Design2BusinessCTA />
    </div>
  );
}
