"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/products/ProductCard";
import Reveal from "@/components/ui/Reveal";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";
import { Sparkles } from "lucide-react";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-0 pb-24 bg-[#FFFDF7] text-[#17130F]">
      
      {/* Top Banner Header */}
      <section className="bg-[#17130F] text-[#FFFDF7] pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D9A52B]/10 rounded-full blur-3xl pointer-events-none" />
        <Container>
          <Reveal>
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D9A52B]/20 border border-[#D9A52B]/30 text-xs font-semibold uppercase tracking-widest text-[#F2C94C]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>TIRTH PREMIUM AGARBATTI</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#FFFDF7]">
                OUR COLLECTION
              </h1>
              <p className="text-base sm:text-lg text-[#FFFDF7]/80 font-light leading-relaxed">
                Explore our full line of handcrafted agarbatti sticks and sacred sambrani dhoop cups, formulated to elevate every prayer and sacred space.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Catalog & Filter Section */}
      <section className="py-16">
        <Container>
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-[#D9A52B] text-[#17130F] shadow-md"
                    : "bg-[#FFF8E8] text-[#7A6A57] border border-[#D9A52B]/20 hover:border-[#D9A52B]/60 hover:text-[#17130F]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <Reveal key={product.slug} delay={0.05 * (idx + 1)}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16 space-y-2">
              <p className="text-lg font-serif text-[#17130F]">No products found in this category.</p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="text-xs text-[#D9A52B] underline uppercase tracking-wider font-semibold"
              >
                Reset Filters
              </button>
            </div>
          )}
        </Container>
      </section>

    </div>
  );
}
