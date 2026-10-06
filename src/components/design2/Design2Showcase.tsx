"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Award, Flame, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import { BRAND_INFO } from "@/data/navigation";
import ScrollReveal from "./ScrollReveal";

export default function Design2Showcase() {
  return (
    <section className="py-24 sm:py-32 bg-[#140D08] text-[#FFFDF8] relative overflow-hidden border-b border-[#C8A45D]/30">
      
      {/* Background Soft Gold Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C8A45D]/12 rounded-full blur-3xl pointer-events-none motion-safe:animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8C5D3B]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Corner Watermarks */}
      <div className="absolute top-10 left-8 w-16 h-16 border-t border-l border-[#C8A45D]/25 pointer-events-none hidden md:block" />
      <div className="absolute bottom-10 right-8 w-16 h-16 border-b border-r border-[#C8A45D]/25 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: All Text Content & Value Highlights */}
          <div className="lg:col-span-6 space-y-7 sm:space-y-8">
            
            {/* Header Tag */}
            <ScrollReveal direction="up" distance={20}>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#1C140E] border border-[#C8A45D]/60 text-[#C8A45D] text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.3em] uppercase shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
                <span>EXCELLENCE IN SACRED AROMATICS</span>
              </div>
            </ScrollReveal>

            {/* Main Title & Ornamental Divider */}
            <ScrollReveal direction="up" distance={20} delay={0.15}>
              <div className="space-y-2">
                <span className="text-xs font-sans font-semibold tracking-[0.35em] uppercase text-[#C8A45D] block">
                  {BRAND_INFO.companyName} SIGNATURE
                </span>
                <h2 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-[#FFFDF8] leading-[0.95]">
                  TIRTH <br />
                  <span className="italic font-normal text-[#C8A45D] relative inline-block">
                    PREMIUM AGARBATTI
                    <span className="absolute bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-[#C8A45D]/0 via-[#C8A45D]/70 to-[#C8A45D]/0" />
                  </span>
                </h2>
              </div>
              
              <div className="flex items-center gap-3 mt-5">
                <div className="w-20 h-[1px] bg-gradient-to-r from-[#C8A45D] to-[#8C5D3B]" />
                <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A45D] bg-[#C8A45D]" />
              </div>
            </ScrollReveal>

            {/* Devotional Quote Box */}
            <ScrollReveal direction="up" distance={20} delay={0.25}>
              <div className="relative bg-[#1C140E] p-5 sm:p-6 border-l-2 border-[#C8A45D] border-y border-r border-[#C8A45D]/30 shadow-xl">
                <p className="font-serif text-lg sm:text-xl font-light text-[#F8F4EA] italic leading-relaxed">
                  &ldquo;Crafted to elevate everyday moments into tranquil spiritual reflections.&rdquo;
                </p>
              </div>
            </ScrollReveal>

            {/* Description Paragraph */}
            <ScrollReveal direction="up" distance={20} delay={0.35}>
              <p className="text-sm sm:text-base text-[#E8DDC8]/90 leading-relaxed font-sans font-normal">
                Discover the signature aromas of pure Indian sandalwood, velvety rose, sweet mogra, and traditional sambrani dhoop cups. Available for home devotion and commercial distribution across India.
              </p>
            </ScrollReveal>

            {/* Value Highlights List */}
            <ScrollReveal direction="up" distance={20} delay={0.4}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-[#1C140E] border border-[#C8A45D]/30 flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-[#C8A45D] shrink-0" />
                  <span className="text-xs font-sans font-medium text-[#E8DDC8]">Heritage Recipe</span>
                </div>
                <div className="p-3 bg-[#1C140E] border border-[#C8A45D]/30 flex items-center gap-2.5">
                  <Flame className="w-4 h-4 text-[#C8A45D] shrink-0" />
                  <span className="text-xs font-sans font-medium text-[#E8DDC8]">Long Burning</span>
                </div>
                <div className="p-3 bg-[#1C140E] border border-[#C8A45D]/30 flex items-center gap-2.5">
                  <HeartHandshake className="w-4 h-4 text-[#C8A45D] shrink-0" />
                  <span className="text-xs font-sans font-medium text-[#E8DDC8]">Pan-India Supply</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal direction="up" distance={20} delay={0.45}>
              <div className="pt-2 flex flex-wrap items-center gap-5">
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.25 }}>
                  <Link
                    href="/design-2/contact"
                    className="group relative inline-flex items-center gap-3.5 px-8 py-4 bg-[#C8A45D] text-[#140D08] text-xs font-sans font-semibold tracking-[0.25em] uppercase hover:bg-[#FFFDF8] transition-all duration-300 shadow-xl border border-[#C8A45D] overflow-hidden"
                  >
                    {/* Sheen Effect */}
                    <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
                    
                    <span className="relative z-10">SEND TRADE ENQUIRY</span>
                    <ArrowUpRight className="w-4 h-4 text-[#140D08] relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </motion.div>

                <Link
                  href="/design-2/products"
                  className="text-xs font-sans font-semibold tracking-[0.22em] uppercase text-[#F8F4EA] hover:text-[#C8A45D] underline underline-offset-8 transition-colors"
                >
                  EXPLORE ALL PRODUCTS
                </Link>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: High-Impact Dedicated Image Showcase Only */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="up" distance={25} delay={0.2}>
              <div className="relative p-3 sm:p-5 bg-[#1C140E] border border-[#C8A45D]/50 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] group">
                
                {/* Gold Corner Embellishments */}
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#C8A45D] z-30" />
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#C8A45D] z-30" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#C8A45D] z-30" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#C8A45D] z-30" />

                {/* Inner Image Frame */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden bg-[#140D08] border border-[#C8A45D]/30">
                  <Image
                    src="/images/design2/cinematic-brand-showcase.jpg"
                    alt="Tirth Premium Agarbatti Golden Box Showcase"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-all duration-1000 ease-out group-hover:scale-105 group-hover:brightness-[1.05]"
                  />
                  {/* Subtle Luxury Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140D08]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                </div>

                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-[#140D08]/90 backdrop-blur-md border border-[#C8A45D]/60 text-[#FFFDF8] px-5 py-2.5 shadow-2xl z-20 flex items-center gap-2.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
                  <div>
                    <span className="block text-[9px] uppercase tracking-[0.25em] font-sans font-semibold text-[#C8A45D]">
                      FLAGSHIP SELECTION
                    </span>
                    <span className="font-serif text-xs sm:text-sm font-semibold text-[#FFFDF8]">
                      {BRAND_INFO.companyName}
                    </span>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}


