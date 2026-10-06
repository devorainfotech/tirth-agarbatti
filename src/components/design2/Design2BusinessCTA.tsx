"use client";

import Link from "next/link";
import { ArrowUpRight, Building2, Store, Truck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { BRAND_INFO } from "@/data/navigation";
import ScrollReveal from "./ScrollReveal";

export default function Design2BusinessCTA() {
  return (
<<<<<<< HEAD
    <section className="py-24 sm:py-32 bg-[#FAF6EE] text-[#1C140E] relative border-b border-[#C8A45D]/25 overflow-hidden">
      
      {/* Soft Atmosphere Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#C8A45D]/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Corner Watermarks */}
      <div className="absolute top-10 left-8 w-16 h-16 border-t border-l border-[#C8A45D]/20 pointer-events-none hidden md:block" />
      <div className="absolute bottom-10 right-8 w-16 h-16 border-b border-r border-[#C8A45D]/20 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <ScrollReveal direction="up" distance={25}>
          <div className="bg-[#FFFDF8] border border-[#C8A45D]/40 p-8 sm:p-14 relative overflow-hidden shadow-[0_20px_50px_-15px_rgba(28,20,14,0.12)]">
            
            {/* Gold Corner Embellishments */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#C8A45D]" />
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#C8A45D]" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#C8A45D]" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#C8A45D]" />

            {/* Curved Golden Radial Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#C8A45D]/15 via-[#8C5D3B]/05 to-transparent rounded-bl-full pointer-events-none" />
=======
    <section className="py-20 sm:py-28 bg-[#F7F1E6] text-[#241914] relative border-b border-[#B89042]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal direction="up" distance={20}>
          <div className="bg-[#FFFDF8] border-2 border-[#B89042]/40 p-8 sm:p-14 relative overflow-hidden shadow-2xl rounded-xs">
            
            {/* Curved Golden Decorative Radial Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#B89042]/20 via-[#A95736]/10 to-transparent rounded-bl-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#B89042]/15 via-transparent to-transparent rounded-tr-full pointer-events-none" />
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Content Side */}
              <div className="lg:col-span-8 space-y-6">
                
<<<<<<< HEAD
                <div className="flex items-center gap-3">
                  {/* <span className="w-8 h-[1px] bg-[#C8A45D]" /> */}
                  <span className="text-xs font-sans font-semibold tracking-[0.35em] uppercase text-[#8C5D3B]">
                    DISTRIBUTOR & TRADE PARTNERSHIP
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-6xl font-normal text-[#1C140E] leading-[1.05] tracking-tight">
                  BRING TIRTH <br />
                  <span className="italic font-normal text-[#C8A45D] relative inline-block">
                    TO YOUR MARKET
                    <span className="absolute bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-[#C8A45D]/0 via-[#C8A45D]/60 to-[#C8A45D]/0" />
                  </span>
                </h2>

                <div className="bg-[#FAF6EE] p-4 border-l-2 border-[#C8A45D] border-y border-r border-[#C8A45D]/20">
                  <p className="text-sm sm:text-base text-[#1C140E]/90 font-serif italic leading-relaxed">
                    &ldquo;Partner with {BRAND_INFO.companyName} to distribute {BRAND_INFO.brandName} across retail outlets, wholesale networks, and devotional stores nationwide.&rdquo;
                  </p>
                </div>

                {/* 3 Trade Points */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4 border-t border-[#C8A45D]/20">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#FAF6EE] border border-[#C8A45D]/30 text-[#8C5D3B]">
                      <Store className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#1C140E]">Retail Packaging</h4>
                      <p className="text-xs text-[#1C140E]/80 font-sans leading-tight mt-0.5">Luxury gold foil boxes & zipper packs.</p>
=======
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F1E6] text-[#A95736] text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase border border-[#B89042]/30">
                  <Sparkles className="w-3.5 h-3.5 text-[#B89042]" />
                  <span>DISTRIBUTOR & TRADE PARTNERSHIP</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-6xl font-normal text-[#241914] leading-[1.05]">
                  BRING TIRTH <br />
                  <span className="italic text-[#B89042]">TO YOUR MARKET</span>
                </h2>

                <p className="text-sm sm:text-lg text-[#241914]/90 font-serif italic max-w-2xl leading-relaxed border-l-2 border-[#B89042] pl-4">
                  Partner with {BRAND_INFO.companyName} to distribute {BRAND_INFO.brandName} across retail outlets, wholesale networks, and devotional stores nationwide.
                </p>

                {/* 3 Trade Points */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4 border-t border-[#B89042]/20">
                  <div className="flex items-start gap-3">
                    <Store className="w-5 h-5 text-[#A95736] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#241914]">Retail Packaging</h4>
                      <p className="text-xs text-[#241914]/75 leading-tight mt-0.5">Luxury gold foil boxes & premium zipper packs.</p>
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
<<<<<<< HEAD
                    <div className="p-2 bg-[#FAF6EE] border border-[#C8A45D]/30 text-[#8C5D3B]">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#1C140E]">Factory Direct</h4>
                      <p className="text-xs text-[#1C140E]/80 font-sans leading-tight mt-0.5">Direct dispatch from manufacturing plant.</p>
=======
                    <Building2 className="w-5 h-5 text-[#A95736] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#241914]">Factory Direct</h4>
                      <p className="text-xs text-[#241914]/75 leading-tight mt-0.5">Direct manufacturer dispatch from Ahmedabad.</p>
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
<<<<<<< HEAD
                    <div className="p-2 bg-[#FAF6EE] border border-[#C8A45D]/30 text-[#8C5D3B]">
                      <Truck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#1C140E]">Trade Margin</h4>
                      <p className="text-xs text-[#1C140E]/80 font-sans leading-tight mt-0.5">Attractive margins & nationwide dispatch.</p>
=======
                    <Truck className="w-5 h-5 text-[#A95736] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#241914]">Trade Margin</h4>
                      <p className="text-xs text-[#241914]/75 leading-tight mt-0.5">Attractive margins & nationwide logistics.</p>
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="lg:col-span-4 flex flex-col items-stretch lg:items-end gap-4">
                
<<<<<<< HEAD
                {/* Primary CTA: BECOME A DISTRIBUTOR → */}
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="w-full">
                  <Link
                    href="/design-2/distributor"
                    className="group relative w-full inline-flex items-center justify-between gap-4 px-8 py-4 bg-[#1C140E] text-[#FFFDF8] text-xs font-sans font-semibold tracking-[0.25em] uppercase hover:bg-[#8C5D3B] transition-all duration-300 shadow-xl border border-[#C8A45D]/50 overflow-hidden"
                  >
                    {/* Sheen Effect */}
                    <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
                    
                    <span className="relative z-10">BECOME A DISTRIBUTOR</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C8A45D] relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </motion.div>

                {/* Secondary CTA: WHOLESALE ENQUIRY (Lighter) */}
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="w-full">
                  <Link
                    href="/design-2/contact"
                    className="w-full inline-flex items-center justify-between gap-4 px-8 py-3.5 border border-[#C8A45D]/50 bg-transparent text-[#1C140E] text-xs font-sans font-medium tracking-[0.22em] uppercase hover:border-[#1C140E] hover:bg-[#FAF6EE] transition-all duration-300"
                  >
                    <span>WHOLESALE ENQUIRY</span>
                    <ArrowUpRight className="w-4 h-4 text-[#8C5D3B]" />
=======
                <motion.div whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.98 }} className="w-full">
                  <Link
                    href="/design-2/distributor"
                    className="w-full inline-flex items-center justify-between gap-4 px-8 py-4 bg-[#241914] text-[#FFFDF8] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#A95736] transition-all duration-300 shadow-xl border border-[#B89042]/40"
                  >
                    <span>BECOME A DISTRIBUTOR</span>
                    <ArrowUpRight className="w-4 h-4 text-[#D9A52B]" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="w-full">
                  <Link
                    href="/design-2/contact"
                    className="w-full inline-flex items-center justify-between gap-4 px-8 py-3.5 border-2 border-[#B89042]/70 bg-[#FFFDF8] text-[#241914] text-xs font-semibold tracking-[0.2em] uppercase hover:border-[#241914] hover:bg-[#241914] hover:text-[#FFFDF8] transition-all duration-300"
                  >
                    <span>WHOLESALE ENQUIRY</span>
                    <ArrowUpRight className="w-4 h-4 text-[#A95736]" />
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
                  </Link>
                </motion.div>

              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
<<<<<<< HEAD

=======
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
