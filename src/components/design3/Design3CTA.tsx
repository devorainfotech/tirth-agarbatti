"use client";

import Link from "next/link";
<<<<<<< HEAD
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/design3/ScrollReveal";

export default function Design3CTA() {
  return (
    <section className="py-24 sm:py-32 bg-[#0D1629] text-[#F8F4EA] relative overflow-hidden">
      {/* Subtle Background Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#172746] rounded-full blur-[140px] opacity-60 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-8">
        
        <ScrollReveal direction="up" delay={0.1}>
          <span className="text-xs font-sans font-medium tracking-[0.4em] text-[#C8A45D] uppercase block">
            THE TIRTH FRAGRANCE JOURNEY
          </span>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F8F4EA] leading-[1.05] tracking-tight">
            LET EVERY MOMENT BEGIN WITH <br />
            <span className="italic text-[#C8A45D] font-light">FRAGRANCE</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.25}>
          <div className="w-16 h-[1px] bg-[#C8A45D] mx-auto" />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <p className="font-sans text-sm sm:text-base text-[#F8F4EA]/90 font-light max-w-xl mx-auto leading-relaxed">
            Bring sacred calm and pure artisanal sandalwood fragrance into your home, temple, or wholesale store.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/design-3/products"
              className="w-full sm:w-auto px-10 py-4 bg-[#C8A45D] text-[#0D1629] text-xs font-sans font-medium tracking-[0.25em] uppercase rounded-full hover:bg-[#F8F4EA] transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 group"
            >
              <span>EXPLORE TIRTH AGARBATTI</span>
              <ArrowRight className="w-4 h-4 text-[#0D1629] transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/design-3/distributor"
              className="w-full sm:w-auto px-10 py-4 border border-[#C8A45D]/60 text-[#F8F4EA] text-xs font-sans font-medium tracking-[0.25em] uppercase rounded-full hover:bg-[#172746] hover:border-[#C8A45D] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>BECOME A DISTRIBUTOR</span>
            </Link>
          </div>
        </ScrollReveal>
=======
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
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef

      </div>
    </section>
  );
}
