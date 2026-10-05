"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Design3FragranceExperience() {
  const fragranceCategories = [
    {
      title: "Pure Chandan (Sandalwood)",
      subtitle: "Meditation & Divine Calm",
      description: "Harvested from ancient sandalwood forests, releasing a deep, buttery wood scent that settles mind and spirit during morning worship.",
      image: "/images/design3/fragrance-chandan.jpg",
      aromaProfile: ["Warm Earth", "Creamy Wood", "Pure Amber"],
    },
    {
      title: "Royal Mogra (Jasmine)",
      subtitle: "Floral Elegance & Sacred Freshness",
      description: "Distilled from night-blooming white Mogra blossoms to evoke the uplifting aura of fresh temple floral garlands.",
      image: "/images/design3/fragrance-mogra.jpg",
      aromaProfile: ["Fresh Bloom", "Sweet Nectar", "Floral Breeze"],
    },
    {
      title: "Sacred Sambrani (Benzoin Resin)",
      subtitle: "Atmospheric Purification & Cleansing",
      description: "Dense, aromatic resin smoke formulated with natural frankincense to banish negativity and purify home environments.",
      image: "/images/design3/fragrance-sambrani.jpg",
      aromaProfile: ["Frankincense", "Sacred Smoke", "Vedic Herbs"],
    },
    {
      title: "Velvet Rose & Devotional Musk",
      subtitle: "Harmonious Energy & Peaceful Aura",
      description: "Rich Damask rose petals blended with natural musk notes to create a comforting, celebratory sanctuary.",
      image: "/images/products/tirth-royal-rose.jpg",
      aromaProfile: ["Velvet Rose", "Devotional Musk", "Sweet Amber"],
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#10182B] text-[#F7F2E8] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#182B52] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#182B52] border border-[#C9A45C]/40 text-[#C9A45C] text-[10px] font-semibold tracking-[0.3em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OLFACTORY JOURNEY</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#F7F2E8] tracking-tight">
            The Fragrance <span className="italic font-light text-[#C9A45C]">Experience</span>
          </h2>
          <div className="flex items-center justify-center gap-3 my-3">
            <div className="w-16 h-[1px] bg-[#C9A45C]" />
            <div className="w-1.5 h-1.5 rotate-45 border border-[#C9A45C] bg-[#10182B]" />
            <div className="w-16 h-[1px] bg-[#C9A45C]" />
          </div>
          <p className="font-sans text-sm sm:text-base text-[#E8DDC8]/80 font-light max-w-xl mx-auto">
            Discover the distinct note profiles and spiritual benefits of our signature incense classifications.
          </p>
        </div>

        {/* 4 Category Showcase Cards with Smooth Interactive Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {fragranceCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="group relative bg-[#182B52]/60 border border-[#C9A45C]/30 p-8 flex flex-col justify-between hover:border-[#C9A45C] transition-all duration-500 overflow-hidden shadow-2xl"
            >
              {/* Card Image Container with Zoom */}
              <div className="relative aspect-[16/9] w-full mb-6 overflow-hidden border border-[#C9A45C]/20 bg-[#10182B]">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10182B] via-[#10182B]/40 to-transparent opacity-80" />
                
                {/* Floating Category Number */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#10182B]/90 border border-[#C9A45C]/40 text-[#C9A45C] font-mono text-xs tracking-wider">
                  0{idx + 1}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F7F2E8] group-hover:text-[#C9A45C] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs font-semibold tracking-[0.2em] text-[#C9A45C] uppercase mt-1">
                  {cat.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#E8DDC8]/80 mt-3 font-sans leading-relaxed font-light">
                  {cat.description}
                </p>
              </div>

              {/* Aroma Notes Badges */}
              <div className="pt-6 mt-6 border-t border-[#C9A45C]/20 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {cat.aromaProfile.map((note) => (
                    <span
                      key={note}
                      className="px-2.5 py-1 bg-[#10182B] text-[10px] font-semibold tracking-wider text-[#C9A45C] uppercase border border-[#C9A45C]/20"
                    >
                      {note}
                    </span>
                  ))}
                </div>

                <Link
                  href="/design-3/products"
                  className="inline-flex items-center gap-1 text-xs font-semibold tracking-[0.2em] uppercase text-[#F7F2E8] group-hover:text-[#C9A45C] transition-colors"
                >
                  <span>DISCOVER</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C9A45C]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
