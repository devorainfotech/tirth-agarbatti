"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Design3Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0D1629] overflow-hidden pt-32 pb-24">
      {/* Background Cinematic Photograph with High Clarity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/design3/hero-cinematic.jpg"
          alt="The Art of Sacred Fragrance by Tirth Agarbatti"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 filter brightness-85 contrast-105 transition-transform duration-1000"
        />
        {/* Dark Navy Radial & Linear Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1629] via-[#0D1629]/40 to-[#0D1629]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0D1629]/25 to-[#0D1629]/85" />
      </div>

      {/* Hero Content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-20 w-full text-center">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block mb-6"
        >
          <span className="text-xs font-sans font-medium tracking-[0.45em] uppercase text-[#C8A45D]">
            PREMIUM INDIAN INCENSE BRAND
          </span>
        </motion.div>

        {/* Large Cinematic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-6xl sm:text-8xl lg:text-9xl font-normal text-[#F8F4EA] tracking-tight leading-[1.01] max-w-4xl mx-auto"
        >
          THE ART OF <br />
          SACRED <br className="hidden sm:block" />
          <span className="italic text-[#C8A45D] font-light drop-shadow-md">FRAGRANCE</span>
        </motion.h1>

        {/* Thin Gold Separator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-20 h-[1px] bg-[#C8A45D] mx-auto my-8"
        />

        {/* Short Editorial Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-sm sm:text-lg text-[#F8F4EA]/90 font-light max-w-lg mx-auto leading-relaxed tracking-wide"
        >
          Handcrafted incense inspired by India's timeless rituals, natural woods and sacred traditions.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link
            href="/design-3/products"
            className="w-full sm:w-auto px-10 py-4 bg-[#C8A45D] text-[#0D1629] text-xs font-sans font-medium tracking-[0.25em] uppercase rounded-full hover:bg-[#F8F4EA] transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 group"
          >
            <span>EXPLORE COLLECTION</span>
            <ArrowRight className="w-4 h-4 text-[#0D1629] transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/design-3/about"
            className="w-full sm:w-auto px-10 py-4 border border-[#C8A45D]/60 text-[#F8F4EA] text-xs font-sans font-medium tracking-[0.25em] uppercase rounded-full hover:bg-[#172746] hover:border-[#C8A45D] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>DISCOVER OUR STORY</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
