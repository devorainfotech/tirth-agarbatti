"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Design3Gallery from "@/components/design3/Design3Gallery";
import Design3CTA from "@/components/design3/Design3CTA";

export default function Design3GalleryPage() {
  return (
    <div className="bg-[#F7F2E8]">
      
      {/* Editorial Page Hero - Matching Design 3 Hero Aesthetics */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-[#0D1629] overflow-hidden pt-32 pb-20 sm:pb-28 border-b border-[#C9A45C]/30">
        {/* Background Cinematic Photograph with High Clarity */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/design3/gallery-hero-cinematic.jpg"
            alt="Tirth Agarbatti Visual Gallery & Imagery"
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
              VISUAL ARCHIVES & IMAGERY
            </span>
          </motion.div>

          {/* Large Cinematic Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal text-[#F8F4EA] tracking-tight leading-[1.03] max-w-4xl mx-auto"
          >
            GALLERY & <span className="italic text-[#C8A45D] font-light drop-shadow-md">CREATIVES</span>
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
            A visual showcase of Tirth Premium Agarbatti packaging, sacred altar setups, devotional moments, and artisanal craftsmanship by Milliard Agarbatti.
          </motion.p>
        </div>
      </section>

      <Design3Gallery />
      <Design3CTA />
    </div>
  );
}
