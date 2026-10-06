"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/design3/ScrollReveal";

export default function Design3FragranceExperience() {
  const fragrances = [
    {
      name: "SANDALWOOD",
      subtitle: "Meditation & Divine Calm",
      desc: "Warm earth notes blended with pure creamy sandalwood.",
      image: "/images/design3/fragrance-chandan.jpg",
    },
    {
      name: "JASMINE",
      subtitle: "Floral Elegance & Grace",
      desc: "Distilled from fresh night-blooming white Mogra garlands.",
      image: "/images/design3/fragrance-mogra.jpg",
    },
    {
      name: "SAMBRANI",
      subtitle: "Sacred Smoke & Cleansing",
      desc: "Pure frankincense resin purifying residential & sacred spaces.",
      image: "/images/design3/fragrance-sambrani.jpg",
    },
    {
      name: "ROSE",
      subtitle: "Harmonious Velvet Aura",
      desc: "Velvet Damask rose petals blended with devotional musk.",
      image: "/images/products/tirth-royal-rose.jpg",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0D1629] text-[#F8F4EA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-sans font-medium tracking-[0.4em] uppercase text-[#C8A45D] block mb-2">
              OLFACTORY PROFILE
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#F8F4EA] tracking-tight">
              The Fragrance <span className="italic text-[#C8A45D] font-light">Experience</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#C8A45D] mx-auto mt-4" />
          </div>
        </ScrollReveal>

        {/* 4 Tall Editorial Tiles with Subtle Rhythm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {fragrances.map((f, idx) => (
            <ScrollReveal
              key={f.name}
              direction="up"
              delay={0.2 + idx * 0.1}
              className={idx % 2 === 1 ? "lg:translate-y-4" : ""}
            >
              <div className="group relative aspect-[3/4] w-full overflow-hidden shadow-2xl border border-[#C8A45D]/15 hover:border-[#C8A45D]/40 transition-all duration-500 cursor-pointer rounded-xs">
                {/* Background Image */}
                <Image
                  src={f.image}
                  alt={f.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                />

                {/* Gradient Overlay - slightly darker on mobile for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1629] via-[#0D1629]/50 to-transparent opacity-90 sm:opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

                {/* Content - text always readable on mobile, refined hover reveal on desktop */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#C8A45D] mb-1">
                    {f.subtitle}
                  </span>

                  <h3 className="font-serif text-2xl font-normal text-[#F8F4EA] group-hover:text-[#C8A45D] transition-colors">
                    {f.name}
                  </h3>

                  <p className="text-xs text-[#A9A49A] font-sans font-light mt-2 line-clamp-2 leading-relaxed opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500">
                    {f.desc}
                  </p>

                  <div className="pt-3 flex items-center gap-1.5 text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-[#C8A45D] opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500">
                    <span>EXPLORE</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C8A45D] transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
