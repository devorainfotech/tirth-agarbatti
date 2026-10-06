"use client";

import { Feather, Flame, Award, ShieldCheck } from "lucide-react";
<<<<<<< HEAD
import ScrollReveal from "@/components/design3/ScrollReveal";

export default function Design3WhyTirth() {
  const values = [
    {
      num: "01",
      title: "PURE BOTANICAL INGREDIENTS",
      desc: "Handcrafted with natural wood powders, floral extracts & essential oils without charcoal additives.",
      icon: Feather,
    },
    {
      num: "02",
      title: "LONG-LASTING FRAGRANCE",
      desc: "Slow-burning incense sticks engineered to release a steady, lingering aroma across living spaces.",
      icon: Flame,
    },
    {
      num: "03",
      title: "TRADITIONAL CRAFT",
      desc: "Rooted in authentic Indian incense formulations passed down through generations of master formulators.",
      icon: Award,
    },
    {
      num: "04",
      title: "QUALITY YOU CAN TRUST",
      desc: "Manufactured by Milliard Agarbatti with rigorous quality checks to guarantee clean, soot-free devotion.",
      icon: ShieldCheck,
=======

export default function Design3WhyTirth() {
  const pillars = [
    {
      icon: Feather,
      title: "Pure Botanical Ingredients",
      description: "Formulated without toxic synthetic fillers or charcoal additives. Handcrafted using pure wood powders and aromatic natural essential oils.",
    },
    {
      icon: Flame,
      title: "Long-Lasting Fragrance",
      description: "Slow-burning sticks engineered to release steady, uplifting perfume that lingers pleasantly in rooms for hours after burning.",
    },
    {
      icon: Award,
      title: "Traditional Craftsmanship",
      description: "Rooted in authentic Indian incense-making techniques passed down through generations, maintaining spiritual integrity in every batch.",
    },
    {
      icon: ShieldCheck,
      title: "Quality You Can Trust",
      description: "Manufactured by Milliard Agarbatti with rigorous quality checks to ensure soot-free, non-irritating, and divine olfactory perfection.",
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
    },
  ];

  return (
<<<<<<< HEAD
    <section className="py-20 sm:py-28 bg-[#F5F0E6] text-[#0D1629] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Centered Heading */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-14">
            <span className="text-xs font-sans font-medium tracking-[0.4em] uppercase text-[#C8A45D] block mb-2">
              OUR PROMISE
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#0D1629]">
              Why <span className="italic text-[#C8A45D] font-light">Tirth Agarbatti</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#C8A45D] mx-auto mt-4" />
          </div>
        </ScrollReveal>

        {/* 4 Feature Blocks */}
        <div className="space-y-0 border-t border-[#C8A45D]/40">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <ScrollReveal key={v.num} direction="up" delay={0.15 + idx * 0.1}>
                <div className="py-7 sm:py-10 border-b border-[#C8A45D]/40 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-center group hover:bg-[#F5F0E6]/90 transition-colors">
                  
                  {/* Number & Icon */}
                  <div className="md:col-span-3 flex items-center gap-5">
                    <span className="font-mono text-2xl sm:text-3xl text-[#C8A45D] font-light tracking-wider">
                      {v.num}
                    </span>
                    <div className="w-9 h-9 rounded-full border border-[#C8A45D]/40 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#C8A45D]" />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="md:col-span-5">
                    <h3 className="font-sans text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-[#0D1629] group-hover:text-[#C8A45D] transition-colors leading-snug">
                      {v.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-4">
                    <p className="text-xs sm:text-sm text-[#0D1629]/75 font-sans font-light leading-relaxed">
                      {v.desc}
                    </p>
                  </div>

                </div>
              </ScrollReveal>
=======
    <section className="py-24 sm:py-32 bg-[#F7F2E8] relative overflow-hidden border-y border-[#C9A45C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#C9A45C]">
            OUR COMMITMENT TO EXCELLENCE
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#10182B]">
            Why <span className="italic font-light text-[#C9A45C]">Tirth Agarbatti</span>
          </h2>
          <div className="w-16 h-[1px] bg-[#C9A45C] mx-auto mt-2" />
        </div>

        {/* 4 Feature Columns with Elegant Line Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-[#10182B] text-[#F7F2E8] border border-[#C9A45C]/30 p-8 space-y-4 hover:border-[#C9A45C] transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div>
                  {/* Line Icon in Gold Box */}
                  <div className="w-12 h-12 rounded-none bg-[#182B52] border border-[#C9A45C]/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#C9A45C]" />
                  </div>

                  <span className="text-[10px] font-mono text-[#C9A45C] tracking-widest block uppercase mb-1">
                    PILLAR 0{idx + 1}
                  </span>

                  <h3 className="font-serif text-xl font-semibold text-[#F7F2E8] leading-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-[#E8DDC8]/80 mt-3 font-sans leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="w-8 h-[1px] bg-[#C9A45C]/40 group-hover:w-full transition-all duration-500 mt-6" />
              </div>
>>>>>>> 3213276f7823ce84bb20ede18b69aff031f10fef
            );
          })}
        </div>

      </div>
    </section>
  );
}
