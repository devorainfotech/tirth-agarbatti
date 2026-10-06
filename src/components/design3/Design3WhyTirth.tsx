"use client";

import { Feather, Flame, Award, ShieldCheck } from "lucide-react";
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
    },
  ];

  return (
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
            );
          })}
        </div>

      </div>
    </section>
  );
}
