"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Flame, ShieldCheck, Award } from "lucide-react";
import { BRAND_INFO } from "@/data/navigation";
import ScrollReveal from "./ScrollReveal";

export default function Design2BrandIntro() {
  return (
    <section className="py-24 sm:py-32 bg-[#FFFDF8] text-[#1C140E] relative overflow-hidden border-b border-[#C8A45D]/20">
      
      {/* Background Atmosphere & Decorative Lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-radial from-[#C8A45D]/12 via-[#C8A45D]/03 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-radial from-[#8C5D3B]/08 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Corner Watermark Lines */}
      <div className="absolute top-8 left-8 w-24 h-24 border-t border-l border-[#C8A45D]/20 pointer-events-none hidden md:block" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-b border-r border-[#C8A45D]/20 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Cinematic Luxury Image Frame */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="up" distance={30} duration={0.9}>
              <div className="relative p-3 sm:p-5 bg-[#FAF6EE] border border-[#C8A45D]/40 shadow-[0_25px_60px_-15px_rgba(28,20,14,0.15)] group">
                
                {/* Gold Corner Embellishments */}
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#C8A45D] z-30" />
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#C8A45D] z-30" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#C8A45D] z-30" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#C8A45D] z-30" />

                {/* Inner Double Frame */}
                <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] w-full bg-[#1C140E] overflow-hidden border border-[#C8A45D]/25">
                  <Image
                    src="/images/design2/brand-craftsmanship.jpg"
                    alt="Artisanal Agarbatti Craftsmanship by Milliard Agarbatti"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-all duration-1000 ease-out group-hover:scale-105 group-hover:brightness-[1.03]"
                  />
                  {/* Subtle Luxury Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C140E]/70 via-[#1C140E]/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />

                  {/* Top Right Micro Badge (Inside Frame) */}
                  <div className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-[#1C140E]/85 backdrop-blur-md border border-[#C8A45D]/50 text-[#FFFDF8] px-3.5 py-1.5 text-[10px] font-sans font-semibold tracking-[0.2em] uppercase shadow-xl z-20 flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-[#C8A45D]" />
                    <span>Vedic Formulation</span>
                  </div>
                </div>

                {/* Overlapping Vertical Accent Badge */}
                <div className="hidden sm:flex absolute -left-6 top-1/2 -translate-y-1/2 rotate-[-90deg] origin-center text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-[#8C5D3B] bg-[#FFFDF8] px-5 py-2 border border-[#C8A45D]/50 shadow-xl whitespace-nowrap items-center gap-2.5 z-20 backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
                  <span>{BRAND_INFO.companyName} • Artisanal Heritage</span>
                </div>

                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-[#1C140E]/90 backdrop-blur-md border border-[#C8A45D]/50 text-[#FFFDF8] px-5 py-2.5 text-xs sm:text-sm font-serif italic shadow-2xl z-20 flex items-center gap-2.5">
                  <Flame className="w-3.5 h-3.5 text-[#C8A45D]" />
                  <span>Handcrafted with Pure Vedic Oils</span>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Editorial Hierarchy & Value Points */}
          <div className="lg:col-span-6 space-y-7 sm:space-y-8">
            
            {/* Header Tag & Title */}
            <ScrollReveal direction="up" distance={20} delay={0.15}>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  {/* <span className="w-8 h-[1px] bg-[#C8A45D]" /> */}
                  <span className="text-xs font-sans font-semibold tracking-[0.35em] text-[#8C5D3B] uppercase">
                    CRAFTED WITH SACRED DEVOTION
                  </span>
                </div>
                
                <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C140E] leading-[1.12] tracking-tight">
                  THE TIRTH <span className="italic font-normal text-[#C8A45D] relative inline-block">
                    EXPERIENCE
                    <span className="absolute bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-[#C8A45D]/0 via-[#C8A45D]/60 to-[#C8A45D]/0" />
                  </span>
                </h2>
              </div>
              
              {/* Luxury Ornamental Divider */}
              <div className="flex items-center gap-3 mt-5">
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#C8A45D] to-[#8C5D3B]" />
                <div className="w-2 h-2 rotate-45 border border-[#C8A45D] bg-[#C8A45D]" />
                <div className="w-8 h-[1px] bg-[#C8A45D]/30" />
              </div>
            </ScrollReveal>

            {/* Quote Block */}
            <ScrollReveal direction="up" distance={20} delay={0.25}>
              <div className="relative bg-[#FAF6EE] p-5 sm:p-6 border-l-2 border-[#C8A45D] border-y border-r border-[#C8A45D]/20 shadow-sm">
                <span className="absolute top-2 right-4 text-4xl font-serif text-[#C8A45D]/20 select-none">
                  &ldquo;
                </span>
                <p className="font-serif text-lg sm:text-xl text-[#1C140E] italic leading-relaxed relative z-10">
                  &ldquo;{BRAND_INFO.brandName} is created to transform your ambient space into a sanctuary of purity, tranquility, and divine reverie.&rdquo;
                </p>
              </div>
            </ScrollReveal>

            {/* Main Body Description */}
            <ScrollReveal direction="up" distance={20} delay={0.35}>
              <p className="text-sm sm:text-base text-[#1C140E]/85 leading-relaxed font-sans font-normal">
                At Milliard Agarbatti, we carefully select aromatic resins, pure sandalwood chips, floral oils, and botanical gums to formulate every single incense stick. Our flagship brand, Tirth Premium Agarbatti, represents an uncompromising commitment to authentic Indian olfactory traditions.
              </p>
            </ScrollReveal>

            {/* Elegant 4-Item Feature Scannable Grid */}
            <ScrollReveal direction="up" distance={20} delay={0.45}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                
                <div className="p-3.5 bg-[#FAF6EE] border border-[#C8A45D]/30 transition-all duration-300 hover:border-[#C8A45D] hover:shadow-md group">
                  <div className="flex items-center gap-2.5 mb-1">
                    <span className="text-[10px] font-sans font-bold text-[#C8A45D]">01 —</span>
                    <h4 className="font-serif text-sm font-bold text-[#1C140E] uppercase tracking-wide group-hover:text-[#8C5D3B] transition-colors">
                      NATURAL INGREDIENTS
                    </h4>
                  </div>
                  <p className="text-xs text-[#1C140E]/75 leading-relaxed font-sans pl-6">
                    Pure sandalwood powder, natural resins & floral oils.
                  </p>
                </div>

                <div className="p-3.5 bg-[#FAF6EE] border border-[#C8A45D]/30 transition-all duration-300 hover:border-[#C8A45D] hover:shadow-md group">
                  <div className="flex items-center gap-2.5 mb-1">
                    <span className="text-[10px] font-sans font-bold text-[#C8A45D]">02 —</span>
                    <h4 className="font-serif text-sm font-bold text-[#1C140E] uppercase tracking-wide group-hover:text-[#8C5D3B] transition-colors">
                      HANDCRAFTED PROCESS
                    </h4>
                  </div>
                  <p className="text-xs text-[#1C140E]/75 leading-relaxed font-sans pl-6">
                    Hand-rolled by skilled artisans in accordance with Vedic tradition.
                  </p>
                </div>

                <div className="p-3.5 bg-[#FAF6EE] border border-[#C8A45D]/30 transition-all duration-300 hover:border-[#C8A45D] hover:shadow-md group">
                  <div className="flex items-center gap-2.5 mb-1">
                    <span className="text-[10px] font-sans font-bold text-[#C8A45D]">03 —</span>
                    <h4 className="font-serif text-sm font-bold text-[#1C140E] uppercase tracking-wide group-hover:text-[#8C5D3B] transition-colors">
                      LONG-LASTING FRAGRANCE
                    </h4>
                  </div>
                  <p className="text-xs text-[#1C140E]/75 leading-relaxed font-sans pl-6">
                    Even burn time with rich, lingering atmospheric throw.
                  </p>
                </div>

                <div className="p-3.5 bg-[#FAF6EE] border border-[#C8A45D]/30 transition-all duration-300 hover:border-[#C8A45D] hover:shadow-md group">
                  <div className="flex items-center gap-2.5 mb-1">
                    <span className="text-[10px] font-sans font-bold text-[#C8A45D]">04 —</span>
                    <h4 className="font-serif text-sm font-bold text-[#1C140E] uppercase tracking-wide group-hover:text-[#8C5D3B] transition-colors">
                      SACRED TRADITION
                    </h4>
                  </div>
                  <p className="text-xs text-[#1C140E]/75 leading-relaxed font-sans pl-6">
                    Formulated to purify ambient space for daily worship & meditation.
                  </p>
                </div>

              </div>
            </ScrollReveal>

            {/* CTA Link Button */}
            <ScrollReveal direction="up" distance={20} delay={0.55}>
              <div className="pt-3">
                <Link
                  href="/design-2/about"
                  className="group relative inline-flex items-center gap-4 px-8 py-4 bg-[#1C140E] text-[#FFFDF8] text-xs font-sans font-semibold tracking-[0.25em] uppercase hover:bg-[#8C5D3B] transition-all duration-300 shadow-xl border border-[#C8A45D]/40 overflow-hidden"
                >
                  {/* Subtle Sheen Hover Effect */}
                  <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
                  
                  <span className="relative z-10">DISCOVER OUR HERITAGE</span>
                  <ArrowRight className="w-4 h-4 text-[#C8A45D] relative z-10 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </div>
    </section>
  );
}

