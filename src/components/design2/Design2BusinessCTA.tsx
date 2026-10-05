"use client";

import Link from "next/link";
import { ArrowUpRight, Building2, Store, Truck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { BRAND_INFO } from "@/data/navigation";
import ScrollReveal from "./ScrollReveal";

export default function Design2BusinessCTA() {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F1E6] text-[#241914] relative border-b border-[#B89042]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal direction="up" distance={20}>
          <div className="bg-[#FFFDF8] border-2 border-[#B89042]/40 p-8 sm:p-14 relative overflow-hidden shadow-2xl rounded-xs">
            
            {/* Curved Golden Decorative Radial Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#B89042]/20 via-[#A95736]/10 to-transparent rounded-bl-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#B89042]/15 via-transparent to-transparent rounded-tr-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Content Side */}
              <div className="lg:col-span-8 space-y-6">
                
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
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-[#A95736] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#241914]">Factory Direct</h4>
                      <p className="text-xs text-[#241914]/75 leading-tight mt-0.5">Direct manufacturer dispatch from Ahmedabad.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-[#A95736] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#241914]">Trade Margin</h4>
                      <p className="text-xs text-[#241914]/75 leading-tight mt-0.5">Attractive margins & nationwide logistics.</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="lg:col-span-4 flex flex-col items-stretch lg:items-end gap-4">
                
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
