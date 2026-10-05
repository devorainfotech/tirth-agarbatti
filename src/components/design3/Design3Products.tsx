"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/data/products";

export default function Design3Products() {
  const featuredProducts = PRODUCTS.slice(0, 6);

  return (
    <section className="py-24 sm:py-32 bg-[#E8DDC8]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#10182B] text-[#C9A45C] text-[10px] font-semibold tracking-[0.3em] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE ROYAL COLLECTION</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#10182B] tracking-tight">
              Curated <span className="italic font-light text-[#C9A45C]">Sacred Blends</span>
            </h2>
          </div>

          <Link
            href="/design-3/products"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#10182B] hover:text-[#C9A45C] transition-colors border-b-2 border-[#C9A45C] pb-1 self-start md:self-auto"
          >
            <span>VIEW ALL FRAGRANCES</span>
            <ArrowUpRight className="w-4 h-4 text-[#C9A45C]" />
          </Link>
        </div>

        {/* Asymmetric / Luxury Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {featuredProducts.map((product, idx) => (
            <div
              key={product.slug}
              className="group bg-[#F7F2E8] border border-[#C9A45C]/30 p-6 flex flex-col justify-between hover:border-[#C9A45C] hover:shadow-2xl transition-all duration-500 rounded-none relative overflow-hidden"
            >
              {/* Gold Top Border Hover Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A45C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between text-[10px] text-[#10182B]/60 font-semibold tracking-[0.25em] uppercase mb-4 pb-2 border-b border-[#C9A45C]/20">
                  <span className="text-[#C9A45C] font-mono">EDITION 0{idx + 1}</span>
                  <span>{product.category}</span>
                </div>

                {/* Product Image Frame */}
                <div className="relative aspect-[4/3] w-full mb-6 overflow-hidden bg-[#10182B] border border-[#C9A45C]/20">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10182B]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-serif text-2xl font-semibold text-[#10182B] group-hover:text-[#C9A45C] transition-colors leading-tight">
                  {product.name}
                </h3>
                <p className="text-xs font-semibold tracking-[0.18em] text-[#C9A45C] uppercase mt-1">
                  {product.subtitle}
                </p>
                
                <p className="text-xs sm:text-sm text-[#20232A]/80 mt-3 font-sans leading-relaxed line-clamp-2">
                  {product.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-[#C9A45C]/20 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {product.aromaNotes.slice(0, 2).map((note) => (
                    <span
                      key={note}
                      className="px-2.5 py-0.5 bg-[#10182B]/5 text-[9px] uppercase font-medium text-[#10182B]/80 border border-[#C9A45C]/20"
                    >
                      {note}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/design-3/products/${product.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#10182B] group-hover:text-[#C9A45C] transition-colors"
                >
                  <span>EXPLORE</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C9A45C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
