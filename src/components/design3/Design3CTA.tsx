"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Design3CTA() {
  return (
    <section className="py-24 sm:py-32 bg-[#10182B] text-[#F7F2E8] relative overflow-hidden border-t border-[#C9A45C]/30">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#182B52] rounded-full blur-[150px] pointer-events-none opacity-60" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Gold Ornament Top */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-16 h-[1px] bg-[#C9A45C]" />
          <Sparkles className="w-4 h-4 text-[#C9A45C]" />
          <div className="w-16 h-[1px] bg-[#C9A45C]" />
        </div>

        <span className="text-[11px] font-semibold tracking-[0.35em] text-[#C9A45C] uppercase block">
          THE TIRTH FRAGRANCE JOURNEY
        </span>

        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F7F2E8] leading-[1.08] max-w-4xl mx-auto tracking-tight">
          Let Every Moment Begin With <span className="italic font-light text-[#C9A45C]">Fragrance</span>
        </h2>

        <p className="font-sans text-base sm:text-xl text-[#E8DDC8]/85 font-light max-w-2xl mx-auto leading-relaxed">
          Bring sacred calm and pure artisanal sandalwood fragrance into your home, temple, or wholesale store.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/design-3/products"
            className="w-full sm:w-auto px-10 py-4 bg-[#C9A45C] text-[#10182B] text-xs font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-[#F7F2E8] transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 group"
          >
            <span>EXPLORE TIRTH AGARBATTI</span>
            <ArrowRight className="w-4 h-4 text-[#10182B] transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/design-3/distributor"
            className="w-full sm:w-auto px-10 py-4 bg-[#182B52]/60 text-[#F7F2E8] border border-[#C9A45C]/50 text-xs font-semibold tracking-[0.25em] uppercase rounded-full hover:bg-[#182B52] hover:border-[#C9A45C] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>BECOME A DISTRIBUTOR</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
