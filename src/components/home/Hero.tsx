"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#17130F] text-[#FFFDF7]">
      {/* Soft warm background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D9A52B]/25 via-[#17130F] to-[#17130F] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-[#D97706]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[400px] h-[400px] bg-[#D9A52B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-7 text-center lg:text-left"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#D9A52B]/15 border border-[#D9A52B]/40 backdrop-blur-md shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#F2C94C]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#F2C94C]">
                TIRTH PREMIUM AGARBATTI
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-[#FFFDF7]">
              THE FRAGRANCE <br className="hidden sm:block" />
              OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2C94C] via-[#D9A52B] to-[#D97706] drop-shadow-xs">DEVOTION</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#FFFDF7]/85 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Handcrafted incense sticks and sacred sambrani dhoop by <strong className="font-semibold text-[#F2C94C]">Milliard Agarbatti</strong>. Formulated with authentic botanical essences to elevate your daily prayers and tranquil moments.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/products"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D9A52B] to-[#D97706] text-[#17130F] font-semibold text-xs uppercase tracking-wider hover:brightness-110 transition-all duration-300 shadow-xl shadow-[#D9A52B]/25 flex items-center justify-center gap-2 group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#D9A52B]/40 bg-[#FFFDF7]/5 backdrop-blur-xs text-[#FFFDF7] font-semibold text-xs uppercase tracking-wider hover:bg-[#D9A52B]/15 hover:border-[#D9A52B] transition-all duration-300 text-center"
              >
                Contact Us
              </Link>
            </div>

            {/* Key Quality Tags */}
            <div className="pt-6 border-t border-[#FFFDF7]/15 grid grid-cols-3 gap-4 text-center lg:text-left max-w-lg mx-auto lg:mx-0">
              <div className="space-y-1">
                <p className="text-xs text-[#F2C94C] uppercase tracking-wider font-bold">100% Handcrafted</p>
                <p className="text-[11px] text-[#FFFDF7]/70 font-light">Natural Botanicals</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-[#F2C94C] uppercase tracking-wider font-bold">Pure Aroma</p>
                <p className="text-[11px] text-[#FFFDF7]/70 font-light">Long-lasting Fragrance</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-[#F2C94C] uppercase tracking-wider font-bold">Sacred Purity</p>
                <p className="text-[11px] text-[#FFFDF7]/70 font-light">Ideal for Puja & Rituals</p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Premium Hero Product Card & Floating Stats Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing Accent Ring */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#D9A52B]/40 to-[#D97706]/20 opacity-70 blur-xl pointer-events-none" />

            <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#D9A52B]/40 group bg-[#17130F]">
              <Image
                src="/images/hero/tirth-hero.jpg"
                alt="Tirth Premium Agarbatti Product Box"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17130F]/90 via-[#17130F]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Floating product info badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#17130F]/85 backdrop-blur-md border border-[#D9A52B]/40 flex items-center justify-between shadow-lg">
                <div>
                  <span className="text-[10px] tracking-[0.2em] font-semibold text-[#D9A52B] uppercase block">
                    Handcrafted incense
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#FFFDF7]">TIRTH Signature Box</h4>
                </div>
                <Link
                  href="/products/tirth-chandan-agarbatti"
                  className="p-2.5 rounded-full bg-[#D9A52B] text-[#17130F] hover:bg-[#D97706] hover:text-white transition-all shadow-md group-hover:scale-105"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Floating Side Highlight Badge */}
            <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#17130F]/90 border border-[#D9A52B]/40 backdrop-blur-md shadow-xl text-[#FFFDF7]">
              <div className="w-2 h-2 rounded-full bg-[#F2C94C] animate-ping" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#F2C94C]">
                Vedic Formulation
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
