"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { BRAND_INFO } from "@/data/navigation";
import ScrollReveal from "./ScrollReveal";

export default function Design2BrandIntro() {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFDF8] text-[#241914] relative overflow-hidden border-b border-[#B89042]/20">
      
      {/* Background Soft Lighting Accent */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-96 h-96 bg-[#B89042]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Cinematic Image Showcase */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="up" distance={25} duration={0.9}>
              <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] w-full bg-[#F7F1E6] p-3 sm:p-4 border-2 border-[#B89042]/40 shadow-2xl group rounded-xs">
                
                {/* Main Image Container */}
                <div className="relative w-full h-full overflow-hidden bg-[#241914] rounded-xs">
                  <Image
                    src="/images/design2/brand-craftsmanship.jpg"
                    alt="Artisanal Agarbatti Craftsmanship by Milliard Agarbatti"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#241914]/60 via-transparent to-transparent opacity-60" />
                </div>

                {/* Overlapping Vertical Accent Label */}
                <div className="hidden sm:flex absolute -left-5 top-1/2 -translate-y-1/2 rotate-[-90deg] origin-center text-[10px] font-semibold tracking-[0.3em] uppercase text-[#A95736] bg-[#FFFDF8] px-4 py-1.5 border border-[#B89042]/40 shadow-md whitespace-nowrap items-center gap-2 z-20">
                  <Sparkles className="w-3 h-3 text-[#B89042]" />
                  <span>{BRAND_INFO.companyName} • Artisanal Heritage</span>
                </div>

                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-[#241914]/90 backdrop-blur-md border border-[#B89042]/50 text-[#FFFDF8] px-4 py-2 text-xs font-serif italic shadow-lg z-20">
                  Handcrafted with Pure Vedic Oils
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Editorial Hierarchy & Value Points */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            
            {/* Header Tag & Title */}
            <ScrollReveal direction="up" distance={20} delay={0.15}>
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-[0.3em] text-[#A95736] uppercase block">
                  CRAFTED WITH SACRED DEVOTION
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#241914] leading-[1.1]">
                  THE TIRTH <span className="italic text-[#B89042]">EXPERIENCE</span>
                </h2>
              </div>
              
              {/* Small Gold Decorative Divider */}
              <div className="flex items-center gap-3 mt-4">
                <div className="w-16 h-[2px] bg-gradient-to-r from-[#B89042] to-[#A95736]" />
                <div className="w-1.5 h-1.5 rotate-45 border border-[#B89042] bg-[#FFFDF8]" />
              </div>
            </ScrollReveal>

            {/* Quote Block */}
            <ScrollReveal direction="up" distance={20} delay={0.25}>
              <p className="font-serif text-lg sm:text-xl text-[#241914] italic leading-relaxed border-l-2 border-[#B89042] pl-4 py-0.5">
                &ldquo;{BRAND_INFO.brandName} is created to transform your ambient space into a sanctuary of purity, tranquility, and divine reverie.&rdquo;
              </p>
            </ScrollReveal>

            {/* Main Body Description */}
            <ScrollReveal direction="up" distance={20} delay={0.35}>
              <p className="text-sm sm:text-base text-[#241914]/85 leading-relaxed font-sans font-normal">
                At Milliard Agarbatti, we carefully select aromatic resins, pure sandalwood chips, floral oils, and botanical gums to formulate every single incense stick. Our flagship brand, Tirth Premium Agarbatti, represents an uncompromising commitment to authentic Indian olfactory traditions.
              </p>
            </ScrollReveal>

            {/* Elegant Value Points Grid */}
            <ScrollReveal direction="up" distance={20} delay={0.45}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#B89042]/20">
                
                <div className="p-3.5 bg-[#F7F1E6]/60 border border-[#B89042]/25 rounded-xs space-y-1">
                  <div className="flex items-center gap-2 text-[#A95736]">
                    <CheckCircle2 className="w-4 h-4 text-[#B89042]" />
                    <h4 className="font-serif text-sm sm:text-base font-bold text-[#241914]">Pure Chandan Oil</h4>
                  </div>
                  <p className="text-xs text-[#241914]/75 leading-normal">Authentic sandalwood fragrance for meditation and daily worship.</p>
                </div>

                <div className="p-3.5 bg-[#F7F1E6]/60 border border-[#B89042]/25 rounded-xs space-y-1">
                  <div className="flex items-center gap-2 text-[#A95736]">
                    <CheckCircle2 className="w-4 h-4 text-[#B89042]" />
                    <h4 className="font-serif text-sm sm:text-base font-bold text-[#241914]">Natural Sambrani Resin</h4>
                  </div>
                  <p className="text-xs text-[#241914]/75 leading-normal">Dense aromatic smoke formulated to purify atmospheric energy.</p>
                </div>

              </div>
            </ScrollReveal>

            {/* CTA Link */}
            <ScrollReveal direction="up" distance={20} delay={0.55}>
              <div className="pt-2">
                <Link
                  href="/design-2/about"
                  className="group inline-flex items-center gap-3 px-6 py-3 bg-[#241914] text-[#FFFDF8] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#A95736] transition-all duration-300 shadow-md"
                >
                  <span>DISCOVER OUR HERITAGE</span>
                  <ArrowRight className="w-4 h-4 text-[#D9A52B] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </div>
    </section>
  );
}
