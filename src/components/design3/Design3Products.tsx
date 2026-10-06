"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import ScrollReveal from "@/components/design3/ScrollReveal";

export default function Design3Products() {
  const featuredProduct = PRODUCTS[0]; // Tirth Chandan Agarbatti
  const subProducts = PRODUCTS.slice(1, 4); // Mogra, Sambrani, Royal Rose

  return (
    <section className="py-20 sm:py-28 bg-[#F5F0E6] text-[#0D1629] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mb-14">
            <span className="text-xs font-sans font-medium tracking-[0.4em] uppercase text-[#C8A45D] block mb-2">
              CURATED ESSENCES
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#0D1629] tracking-tight">
              Tirth <span className="italic text-[#C8A45D] font-light">Collection</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#0D1629]/75 font-light mt-2">
              Sacred fragrances crafted for everyday rituals.
            </p>
          </div>
        </ScrollReveal>

        {/* FEATURED PRODUCT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" delay={0.2} duration={0.9}>
              <div className="relative aspect-[16/10] w-full overflow-hidden shadow-2xl group border border-[#C8A45D]/15 hover:border-[#C8A45D]/30 transition-colors duration-500 rounded-xs">
                <Image
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#0D1629] text-[#C8A45D] px-3.5 py-1 text-[10px] font-sans font-medium tracking-[0.25em] uppercase shadow-lg">
                  FEATURED EDITION
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <ScrollReveal direction="up" delay={0.3}>
              <span className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-[#C8A45D] block">
                {featuredProduct.subtitle}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#0D1629] mt-1">
                {featuredProduct.name}
              </h3>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.35}>
              <p className="font-sans text-sm text-[#0D1629]/80 font-light leading-relaxed">
                {featuredProduct.description}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="pt-1">
                <Link
                  href={`/design-3/products/${featuredProduct.slug}`}
                  className="inline-flex items-center gap-2.5 text-xs font-sans font-medium tracking-[0.25em] uppercase text-[#0D1629] hover:text-[#C8A45D] transition-colors border-b border-[#C8A45D] pb-1 group"
                >
                  <span>EXPLORE PRODUCT</span>
                  <ArrowRight className="w-4 h-4 text-[#C8A45D] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* 3 SUB-PRODUCTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {subProducts.map((p, idx) => (
            <ScrollReveal key={p.slug} direction="up" delay={0.2 + idx * 0.12}>
              <Link
                href={`/design-3/products/${p.slug}`}
                className="group flex flex-col space-y-4"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden shadow-lg border border-[#C8A45D]/10 hover:border-[#C8A45D]/30 transition-all duration-500 rounded-xs">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-sans font-medium tracking-[0.25em] uppercase text-[#C8A45D] block">
                    {p.subtitle}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#0D1629] group-hover:text-[#C8A45D] transition-colors">
                    {p.name}
                  </h4>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
