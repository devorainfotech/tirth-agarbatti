"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, Sparkles, ShieldCheck, Leaf, Flame } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { BRAND_INFO } from "@/data/navigation";

export default function Design2Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (shouldReduceMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = ((e.clientX / innerWidth) - 0.5) * 12;
      const y = ((e.clientY / innerHeight) - 0.5) * 12;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion]);

  const containerEase = "easeOut";

  return (
    <section className="relative min-h-[92vh] lg:min-h-[96vh] pt-28 sm:pt-32 pb-16 sm:pb-20 bg-[#FAF6EE] text-[#1C140E] flex items-center overflow-hidden border-b border-[#C8A45D]/30">
      
      {/* High-Clarity Background Photograph Overlay */}
      <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full pointer-events-none opacity-30 overflow-hidden">
        <Image
          src="/images/design2/hero-incense-luxury-cinematic.jpg"
          alt="Luxury Incense Atmosphere Background"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-center filter brightness-95 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6EE] via-[#FAF6EE]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6EE] via-transparent to-[#FAF6EE]" />
      </div>

      {/* Luxury Golden Ambient Glow Lights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-[#C8A45D]/14 rounded-full blur-3xl pointer-events-none motion-safe:animate-pulse-glow" />
      <div className="absolute bottom-5 right-12 w-[500px] h-[500px] bg-[#8C5D3B]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Architectural Background Watermark */}
      <div className="absolute top-6 left-4 md:left-12 text-[130px] sm:text-[220px] md:text-[320px] font-serif font-bold text-[#1C140E]/[0.025] select-none pointer-events-none leading-none tracking-tight">
        TIRTH
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Premium Editorial Content */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            
            {/* 1. Gold Crest Header Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: containerEase }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#FFFDF8] border border-[#C8A45D]/50 text-[#8C5D3B] text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.3em] uppercase shadow-sm rounded-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
              <span>{BRAND_INFO.companyName} • Artisanal Sacred Incense</span>
            </motion.div>

            {/* 2. Main Editorial Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: containerEase }}
              className="space-y-1"
            >
              <span className="block text-xs font-sans font-medium tracking-[0.4em] uppercase text-[#C8A45D] mb-1">
                PREMIUM SACRED BOTANICALS
              </span>
              <h1 className="font-serif text-[clamp(2.8rem,6.5vw,5.2rem)] font-normal leading-[0.98] tracking-tight text-[#1C140E]">
                THE ART OF SACRED <br />
                <span className="font-serif italic text-[clamp(2.5rem,5.8vw,4.5rem)] text-[#C8A45D] font-light">TIRTH</span>{" "}
                <span className="font-serif font-medium text-[clamp(2.5rem,5.8vw,4.5rem)] text-[#1C140E]">AGARBATTI</span>
              </h1>
            </motion.div>

            {/* Ornamental Metallic Gold Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.35, ease: containerEase }}
              className="flex items-center gap-3 origin-left"
            >
              <div className="w-24 h-[1px] bg-gradient-to-r from-[#C8A45D] via-[#D9A52B] to-[#8C5D3B]" />
              <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A45D] bg-[#FAF6EE]" />
              <div className="w-16 h-[1px] bg-[#C8A45D]/40" />
            </motion.div>

            {/* 3. Luxury Quote Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: containerEase }}
              className="space-y-3 max-w-lg"
            >
              <div className="flex gap-4 items-start">
                <div className="w-1 self-stretch bg-gradient-to-b from-[#C8A45D] via-[#8C5D3B] to-[#C8A45D] shrink-0 rounded-full" />
                <p className="text-base sm:text-lg text-[#1C140E]/90 font-serif leading-relaxed italic py-0.5">
                  Elevating divine rituals and quiet reflective moments with handcrafted Indian incense sticks, pure sandalwood, sweet mogra, and sacred sambrani resins.
                </p>
              </div>
            </motion.div>

            {/* 4. Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: containerEase }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.25 }}>
                <Link
                  href="/design-2/products"
                  className="group relative inline-flex items-center justify-between gap-6 px-8 py-4 bg-[#1C140E] text-[#FFFDF8] text-xs font-sans font-semibold tracking-[0.25em] uppercase hover:bg-[#8C5D3B] transition-all duration-300 shadow-xl border border-[#C8A45D]/50 overflow-hidden"
                >
                  {/* Subtle Sheen Hover Effect */}
                  <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
                  
                  <span className="relative z-10">EXPLORE COLLECTION</span>
                  <ArrowDownRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 text-[#C8A45D]" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.25 }}>
                <Link
                  href="/design-2/about"
                  className="inline-flex items-center justify-center px-7 py-4 border border-[#C8A45D]/60 bg-transparent text-[#1C140E] text-xs font-sans font-medium tracking-[0.22em] uppercase hover:border-[#1C140E] hover:bg-[#FFFDF8] transition-all duration-300"
                >
                  DISCOVER OUR STORY
                </Link>
              </motion.div>
            </motion.div>

            {/* 5. Key Highlights Grid Cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.7, ease: containerEase }}
              className="pt-6 grid grid-cols-3 gap-3 sm:gap-4 border-t border-[#C8A45D]/25"
            >
              <div className="p-3 bg-[#FFFDF8]/85 border border-[#C8A45D]/30 rounded-xs space-y-1 hover:border-[#C8A45D]/60 transition-colors shadow-xs">
                <div className="flex items-center gap-1.5 text-[#8C5D3B]">
                  <Leaf className="w-3.5 h-3.5 text-[#C8A45D]" />
                  <span className="font-serif text-sm sm:text-base font-bold text-[#8C5D3B]">100% Pure</span>
                </div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-medium text-[#1C140E]/70 block font-sans">Natural Botanicals</span>
              </div>

              <div className="p-3 bg-[#FFFDF8]/85 border border-[#C8A45D]/30 rounded-xs space-y-1 hover:border-[#C8A45D]/60 transition-colors shadow-xs">
                <div className="flex items-center gap-1.5 text-[#8C5D3B]">
                  <Flame className="w-3.5 h-3.5 text-[#C8A45D]" />
                  <span className="font-serif text-sm sm:text-base font-bold text-[#8C5D3B]">Vedic Recipe</span>
                </div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-medium text-[#1C140E]/70 block font-sans">Sacred Formulations</span>
              </div>

              <div className="p-3 bg-[#FFFDF8]/85 border border-[#C8A45D]/30 rounded-xs space-y-1 hover:border-[#C8A45D]/60 transition-colors shadow-xs">
                <div className="flex items-center gap-1.5 text-[#8C5D3B]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C8A45D]" />
                  <span className="font-serif text-sm sm:text-base font-bold text-[#8C5D3B]">Hand-Rolled</span>
                </div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-medium text-[#1C140E]/70 block font-sans">Artisanal Sticks</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Premium Hero Visual Card Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 25 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              x: shouldReduceMotion ? 0 : mousePos.x,
            }}
            transition={{
              duration: 0.95,
              delay: 0.35,
              ease: containerEase,
              x: { duration: 0.4, ease: "easeOut" },
            }}
            className="lg:col-span-6 relative mt-6 lg:mt-0 space-y-4"
          >
            {/* Main Image Frame Container with Double Gold Hairline Border */}
            <div className="relative p-2 sm:p-3 bg-[#FFFDF8] border-2 border-[#C8A45D]/50 rounded-xs shadow-2xl group">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full rounded-xs overflow-hidden border border-[#C8A45D]/30 bg-[#1C140E]">
                <Image
                  src="/images/design2/hero-incense-premium.jpg"
                  alt="Tirth Premium Agarbatti Incense Packaging Showcase"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                /> 

                {/* Subtle Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C140E]/90 via-[#1C140E]/25 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-500" />

                {/* Top Left Badge */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                  <span className="px-3 py-1.5 bg-[#1C140E]/90 backdrop-blur-md text-[#FFFDF8] text-[9px] sm:text-[10px] font-sans font-medium tracking-[0.25em] uppercase border border-[#C8A45D]/40 shadow-sm inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D] animate-pulse" />
                    Limited Botanical Batch
                  </span>
                </div>

                {/* Editorial Overlay Text */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex justify-between items-end text-[#FFFDF8]">
                  <div className="space-y-1 max-w-[70%]">
                    <span className="text-[10px] tracking-[0.25em] font-sans font-medium text-[#C8A45D] uppercase block">
                      Signature Creation
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#FFFDF8] drop-shadow-sm leading-tight">
                      Tirth Luxury Agarbatti
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="inline-block text-[9px] sm:text-[10px] tracking-[0.2em] font-sans font-medium text-[#FFFDF8] uppercase px-3 py-1 bg-[#8C5D3B] border border-[#C8A45D]/40 rounded-xs shadow-sm">
                      Pure Flora Resin
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Clean Integrated Fragrance Pyramid Card Below Image */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: containerEase }}
              className="p-4 sm:p-5 bg-[#FFFDF8] border-2 border-[#C8A45D]/40 shadow-lg rounded-xs"
            >
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#C8A45D]/25">
                <span className="text-[10px] font-sans font-semibold tracking-[0.25em] uppercase text-[#8C5D3B] flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
                  Aroma Profile Pyramid
                </span>
                <span className="text-[10px] text-[#C8A45D] font-serif italic font-medium">100% Pure Essential Oils</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#1C140E]">
                <div className="p-2 bg-[#FAF6EE] border border-[#C8A45D]/25 rounded-xs">
                  <span className="text-[#8C5D3B] font-sans font-semibold text-[10px] uppercase tracking-wider block">Top Notes:</span>
                  <span className="font-serif italic text-xs text-[#1C140E] font-medium block mt-0.5">Fresh Mogra & Jasmine</span>
                </div>
                <div className="p-2 bg-[#FAF6EE] border border-[#C8A45D]/25 rounded-xs">
                  <span className="text-[#8C5D3B] font-sans font-semibold text-[10px] uppercase tracking-wider block">Heart Note:</span>
                  <span className="font-serif italic text-xs text-[#1C140E] font-medium block mt-0.5">Mysore Sandalwood</span>
                </div>
                <div className="p-2 bg-[#FAF6EE] border border-[#C8A45D]/25 rounded-xs">
                  <span className="text-[#8C5D3B] font-sans font-semibold text-[10px] uppercase tracking-wider block">Base Note:</span>
                  <span className="font-serif italic text-xs text-[#1C140E] font-medium block mt-0.5">Sacred Sambrani Resin</span>
                </div>              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
