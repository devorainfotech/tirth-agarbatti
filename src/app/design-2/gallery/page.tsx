"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Design2Gallery from "@/components/design2/Design2Gallery";
import Design2BusinessCTA from "@/components/design2/Design2BusinessCTA";

export default function Design2GalleryPage() {
  return (
    <div className="bg-[#FFFDF8]">
      
      {/* Editorial Page Hero */}
      <section className="bg-[#FAF6EE] pt-28 sm:pt-32 pb-14 sm:pb-20 border-b border-[#C8A45D]/25 relative overflow-hidden">
        {/* Soft Atmospheric Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src="/images/design3/gallery-hero-cinematic.jpg"
            alt="Tirth Gallery Heritage Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6EE]/90 via-[#FAF6EE]/70 to-[#FAF6EE]" />
        </div>

        {/* Soft Ambient Golden Radial Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-radial from-[#C8A45D]/12 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Decorative Corner Framing Marks */}
        <div className="absolute top-10 left-8 w-16 h-16 border-t border-l border-[#C8A45D]/30 pointer-events-none hidden md:block" />
        <div className="absolute bottom-10 right-8 w-16 h-16 border-b border-r border-[#C8A45D]/30 pointer-events-none hidden md:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFFDF8] border border-[#C8A45D]/40 text-[#8C5D3B] text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.3em] uppercase mb-4 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
            <span>VISUAL ARCHIVES & IMAGERY</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#1C140E] tracking-tight leading-[1.05]"
          >
            GALLERY & <span className="italic font-normal text-[#C8A45D] relative inline-block">
              CREATIVES
              <span className="absolute bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-[#C8A45D]/0 via-[#C8A45D]/60 to-[#C8A45D]/0" />
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center gap-3 mt-4 origin-left"
          >
            <div className="w-20 h-[2px] bg-gradient-to-r from-[#C8A45D] to-[#8C5D3B]" />
            <div className="w-1.5 h-1.5 rotate-45 border border-[#C8A45D] bg-[#FAF6EE]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-serif text-base sm:text-lg italic text-[#1C140E]/90 max-w-2xl mt-5 border-l-2 border-[#C8A45D] pl-4 leading-relaxed"
          >
            A curated visual showcase of Tirth Premium Agarbatti packaging, sacred altar setups, devotional moments, and artisanal craftsmanship by Milliard Agarbatti.
          </motion.p>
        </div>
      </section>

      <Design2Gallery />
      <Design2BusinessCTA />
    </div>
  );
}

