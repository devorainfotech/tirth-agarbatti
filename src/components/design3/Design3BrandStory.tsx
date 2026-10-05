"use client";

import Image from "next/image";
import Link from "next/link";
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
                <Image
                  src="/images/design3/brand-story.jpg"
                  alt="Crafted With Devotion by Tirth Agarbatti"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10182B]/80 via-transparent to-transparent opacity-40" />
              </div>
              
              {/* Gold Ornament Accent Box on Corner */}
              <div className="absolute -bottom-6 -right-6 hidden sm:flex bg-[#10182B] border border-[#C9A45C] p-6 text-center shadow-2xl max-w-xs flex-col items-center">
                <Sparkles className="w-5 h-5 text-[#C9A45C] mb-1" />
                <span className="font-serif text-lg text-[#F7F2E8] font-semibold">100% Handcrafted</span>
                <span className="text-[10px] tracking-[0.2em] text-[#C9A45C] uppercase mt-1">Guaranteed Quality</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
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

          </div>

        </div>
      </div>
    </section>
  );
}
