"use client";

import { Feather, Flame, Award, ShieldCheck } from "lucide-react";

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
    },
  ];

  return (
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
            );
          })}
        </div>

      </div>
    </section>
  );
}
