"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Design2Gallery from "@/components/design2/Design2Gallery";
import Design2BusinessCTA from "@/components/design2/Design2BusinessCTA";

export default function Design2GalleryPage() {
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
            <span>VISUAL ARCHIVES & IMAGERY</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-serif text-4xl sm:text-7xl font-normal text-[#241914] tracking-tight leading-[1.05]"
          >
            GALLERY & <span className="italic text-[#B89042]">CREATIVES</span>
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
            className="font-serif text-base sm:text-xl italic text-[#241914]/90 max-w-xl mt-4 border-l-2 border-[#B89042] pl-4"
          >
            A visual showcase of Tirth Premium Agarbatti packaging, sacred altar setups, devotional moments, and artisanal craftsmanship by Milliard Agarbatti.
          </motion.p>
        </div>
      </section>

      <Design2Gallery />
      <Design2BusinessCTA />
    </div>
  );
}
