"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";
import { BRAND_INFO } from "@/data/navigation";
import Design3CTA from "@/components/design3/Design3CTA";

export default function Design3ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProducts = PRODUCTS.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

  return (
    <div className="bg-[#F7F2E8]">
      
      {/* Editorial Page Header */}
      <section className="bg-[#10182B] text-[#F7F2E8] pt-32 pb-20 sm:pb-24 border-b border-[#C9A45C]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A45C] block">
                ROYAL CATALOGUE — {BRAND_INFO.companyName}
              </span>
              <h1 className="font-serif text-4xl sm:text-7xl font-normal text-[#F7F2E8] mt-2 leading-[1.05]">
                TIRTH <span className="italic text-[#C9A45C]">COLLECTION</span>
              </h1>
              <p className="font-serif text-base sm:text-xl italic text-[#E8DDC8]/90 mt-3 max-w-xl border-l-2 border-[#C9A45C] pl-4">
                Explore handcrafted agarbatti, premium sandalwood sticks, floral mogra, and sacred sambrani dhoop cups.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2.5">
              {PRODUCT_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-sm ${
                    selectedCategory === cat
                      ? "bg-[#C9A45C] text-[#10182B] border-2 border-[#C9A45C]"
                      : "bg-[#182B52] text-[#F7F2E8] border border-[#C9A45C]/30 hover:border-[#C9A45C]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 sm:py-32 bg-[#F7F2E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredProducts.map((product, idx) => (
              <div
                key={product.slug}
                className="group bg-[#10182B] text-[#F7F2E8] border border-[#C9A45C]/30 p-6 flex flex-col justify-between hover:border-[#C9A45C] transition-all duration-500 shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A45C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div>
                  <div className="flex items-center justify-between text-[10px] text-[#C9A45C] font-semibold tracking-[0.25em] uppercase mb-4 pb-2 border-b border-[#C9A45C]/20">
                    <span>EDITION 0{idx + 1}</span>
                    <span className="px-2 py-0.5 bg-[#182B52] border border-[#C9A45C]/30 text-[#F7F2E8]">
                      {product.category}
                    </span>
                  </div>

                  <div className="relative aspect-[4/3] w-full mb-6 overflow-hidden bg-[#182B52] border border-[#C9A45C]/20">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10182B]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[#F7F2E8] group-hover:text-[#C9A45C] transition-colors leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-xs font-semibold tracking-[0.18em] text-[#C9A45C] uppercase mt-1">
                    {product.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#E8DDC8]/80 mt-3 font-sans leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#C9A45C]/20 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {product.aromaNotes.slice(0, 2).map((note) => (
                      <span
                        key={note}
                        className="px-2 py-0.5 bg-[#182B52] text-[9px] uppercase font-semibold text-[#E8DDC8] border border-[#C9A45C]/20"
                      >
                        {note}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/design-3/products/${product.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#F7F2E8] group-hover:text-[#C9A45C] transition-colors"
                  >
                    <span>DETAILS</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C9A45C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Design3CTA />
    </div>
  );
}
