"use client";

import Image from "next/image";
import Link from "next/link";
<<<<<<< HEAD
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/design3/ScrollReveal";

export default function Design3BrandStory() {
  return (
    <section className="py-20 sm:py-28 bg-[#F5F0E6] text-[#0D1629] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Photography with Overlapping Label */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="up" duration={0.9}>
              <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl group">
=======
import { ArrowUpRight, Sparkles } from "lucide-react";
import { BRAND_INFO } from "@/data/navigation";

export default function Design3BrandStory() {
  return (
    <section className="py-24 sm:py-32 bg-[#F7F2E8] relative overflow-hidden">
      {/* Subtle Sandalwood Pattern Accent */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#C9A45C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Editorial Image Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full bg-[#10182B] p-3 sm:p-4 shadow-2xl border border-[#C9A45C]/30 group">
              <div className="relative w-full h-full overflow-hidden">
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
                <Image
                  src="/images/design3/brand-story.jpg"
                  alt="Crafted With Devotion by Tirth Agarbatti"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
<<<<<<< HEAD
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1629]/35 via-transparent to-transparent" />
              </div>

              {/* Overlapping Handcrafted Incense Label */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-[#0D1629] text-[#F8F4EA] border border-[#C8A45D]/50 px-5 py-3 shadow-2xl text-[10px] sm:text-xs font-sans font-medium tracking-[0.25em] uppercase">
                <span>HANDCRAFTED PREMIUM INCENSE</span>
              </div>
            </ScrollReveal>
=======
                <div className="absolute inset-0 bg-gradient-to-t from-[#10182B]/80 via-transparent to-transparent opacity-40" />
              </div>
              
              {/* Gold Ornament Accent Box on Corner */}
              <div className="absolute -bottom-6 -right-6 hidden sm:flex bg-[#10182B] border border-[#C9A45C] p-6 text-center shadow-2xl max-w-xs flex-col items-center">
                <Sparkles className="w-5 h-5 text-[#C9A45C] mb-1" />
                <span className="font-serif text-lg text-[#F7F2E8] font-semibold">100% Handcrafted</span>
                <span className="text-[10px] tracking-[0.2em] text-[#C9A45C] uppercase mt-1">Guaranteed Quality</span>
              </div>
            </div>
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
<<<<<<< HEAD
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-xs font-sans font-medium tracking-[0.4em] uppercase text-[#C8A45D] block">
                THE ESSENCE OF TIRTH
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#0D1629] leading-[1.05] tracking-tight">
                Crafted With <span className="italic text-[#C8A45D] font-light">Devotion</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="font-serif text-xl sm:text-2xl italic text-[#0D1629]/85 leading-relaxed">
                "Fragrance is the invisible bridge connecting ancient sacred rituals to modern quiet mindfulness."
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.35}>
              <div className="w-16 h-[1px] bg-[#C8A45D]" />
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <p className="font-sans text-sm sm:text-base text-[#0D1629]/80 leading-relaxed font-light">
                At Milliard Agarbatti, we believe incense is an art of patience. Every stick of Tirth Agarbatti is meticulously rolled using natural sandalwood powders, pure floral essences, and rare resins harvested with reverence.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.45}>
              <p className="font-sans text-sm sm:text-base text-[#0D1629]/80 leading-relaxed font-light">
                Formulated to provide a clean, soot-free burn, Tirth elevates daily prayers, meditation sessions, and reflective living spaces with an unhurried aromatic elegance.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.5}>
              <div className="pt-2">
                <Link
                  href="/design-3/about"
                  className="inline-flex items-center gap-3 text-xs font-sans font-medium tracking-[0.25em] uppercase text-[#0D1629] hover:text-[#C8A45D] transition-colors border-b border-[#C8A45D] pb-1 group"
                >
                  <span>READ OUR HERITAGE STORY</span>
                  <ArrowRight className="w-4 h-4 text-[#C8A45D] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
=======
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#10182B] text-[#C9A45C] text-[10px] font-semibold tracking-[0.3em] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE ESSENCE OF TIRTH</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#10182B] leading-[1.1] tracking-tight">
              Crafted With <span className="italic font-light text-[#C9A45C]">Devotion</span>
            </h2>

            {/* Thin Gold Divider */}
            <div className="flex items-center gap-3">
              <div className="w-20 h-[1px] bg-[#C9A45C]" />
              <div className="w-1.5 h-1.5 rotate-45 border border-[#C9A45C] bg-[#F7F2E8]" />
            </div>

            <p className="font-serif text-xl sm:text-2xl italic text-[#10182B]/85 leading-relaxed pl-4 border-l-2 border-[#C9A45C]">
              "Fragrance is the invisible thread that connects human devotion to divine serenity."
            </p>

            <p className="font-sans text-sm sm:text-base text-[#20232A]/85 leading-relaxed font-light">
              At {BRAND_INFO.companyName}, we believe incense is far more than a scent—it is a sacred ritual. Every stick of {BRAND_INFO.brandName} is painstakingly hand-rolled using natural sandalwood powders, pure floral extracts, rare herbs, and aromatic essential oils.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#20232A]/85 leading-relaxed font-light">
              Rooted in centuries of Indian fragrance heritage, our master formulators balance ancient wisdom with modern perfectionism to deliver a clean, soothing, soot-free burn that elevates any altar, home, or meditation hall.
            </p>

            <div className="pt-4 flex items-center gap-6">
              <Link
                href="/design-3/about"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#10182B] text-[#F7F2E8] text-xs font-semibold tracking-[0.22em] uppercase hover:bg-[#182B52] transition-all duration-300 shadow-xl border border-[#C9A45C]/40 group"
              >
                <span>READ OUR HERITAGE STORY</span>
                <ArrowUpRight className="w-4 h-4 text-[#C9A45C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef

          </div>

        </div>
      </div>
    </section>
  );
}
