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
      <section className="bg-[#F7F1E6] pt-24 sm:pt-28 pb-16 sm:pb-24 border-b border-[#B89042]/20 relative overflow-hidden">
        {/* Soft Ambient Golden Light */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B89042]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FFFDF8] border border-[#B89042]/30 text-[#A95736] text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B89042]" />
            <span>ABOUT OUR COMPANY & BRAND</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-serif text-4xl sm:text-7xl font-normal text-[#241914] tracking-tight leading-[1.05]"
          >
            THE STORY OF <span className="italic text-[#B89042]">TIRTH</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center gap-3 mt-4 origin-left"
          >
            <div className="w-20 h-[2px] bg-gradient-to-r from-[#B89042] to-[#A95736]" />
            <div className="w-1.5 h-1.5 rotate-45 border border-[#B89042] bg-[#F7F1E6]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-serif text-lg sm:text-2xl italic text-[#241914]/90 max-w-2xl mt-5 leading-relaxed border-l-2 border-[#B89042] pl-4"
          >
            {BRAND_INFO.companyName} brings you {BRAND_INFO.brandName} — an olfactory ode to divine serenity, artisanal quality, and Indian fragrance heritage.
          </motion.p>
        </div>
      </section>

      {/* Main Brand Story (The Tirth Experience) */}
      <Design2BrandIntro />

      {/* Craftsmanship Focus (Authentic Formulations) */}
      <section className="py-20 sm:py-28 bg-[#FFFDF8] border-b border-[#B89042]/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal direction="up" distance={20}>
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#A95736] block">
                  ARTISANAL PROCESS & INGREDIENTS
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#241914] mt-1">
                  AUTHENTIC <span className="italic text-[#B89042]">FORMULATIONS</span>
                </h2>
                <div className="flex items-center gap-3 mt-3">
                  <div className="w-16 h-[2px] bg-[#A95736]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B89042]" />
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" distance={20} delay={0.15}>
                <p className="text-sm sm:text-base text-[#241914]/85 leading-relaxed font-sans font-normal max-w-xl">
                  Every incense stick produced by {BRAND_INFO.companyName} is hand-rolled using pure wood powders, natural binder gums, and carefully selected aromatic oils. We maintain strict quality standards to ensure that {BRAND_INFO.brandName} delivers a consistent, soot-free, and uplifting aromatic experience.
                </p>
              </ScrollReveal>
              
              <ScrollReveal direction="up" distance={20} delay={0.25}>
                <div className="pt-2">
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/design-2/products"
                      className="group inline-flex items-center gap-4 px-8 py-4 bg-[#241914] text-[#FFFDF8] text-xs font-semibold tracking-[0.22em] uppercase hover:bg-[#A95736] transition-all duration-300 shadow-lg border border-[#B89042]/30"
                    >
                      <span>BROWSE FRAGRANCE CATALOG</span>
                      <ArrowUpRight className="w-4 h-4 text-[#D9A52B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </motion.div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6">
              <ScrollReveal direction="up" distance={25} delay={0.2}>
                <div className="relative aspect-[4/3] w-full border-2 border-[#B89042]/40 p-3 sm:p-4 bg-[#F7F1E6] shadow-2xl rounded-xs group">
                  <div className="relative w-full h-full overflow-hidden rounded-xs bg-[#241914]">
                    <Image
                      src="/images/brand/tirth-craftsmanship.jpg"
                      alt="Authentic Incense Craftsmanship by Milliard Agarbatti"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241914]/60 via-transparent to-transparent opacity-60" />
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
