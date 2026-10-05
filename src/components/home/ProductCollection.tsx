"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/products/ProductCard";
import Reveal from "@/components/ui/Reveal";
import { PRODUCTS } from "@/data/products";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

export default function ProductCollection() {
  const INITIAL_COUNT = 3;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const hasMore = visibleCount < PRODUCTS.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, PRODUCTS.length));
  };

  return (
    <section className="py-16 md:py-24 bg-[#FFF8E8]/40 text-[#17130F] relative overflow-hidden border-t border-b border-[#D9A52B]/15">
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#D9A52B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="TIRTH PREMIUM AGARBATTI"
            title="EXPLORE TIRTH COLLECTION"
            description="Discover our curated selection of fine aromatic incense sticks and sacred sambrani dhoop cups, formulated to create a divine aura in your sacred spaces."
          />
        </Reveal>

        {/* Product Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, visibleCount).map((product, idx) => (
            <Reveal key={product.slug} delay={0.1 * (idx % 3 + 1)}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          {hasMore ? (
            <button
              onClick={handleLoadMore}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D9A52B] to-[#D97706] text-[#17130F] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all duration-300 shadow-lg shadow-[#D9A52B]/20 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Load More Products ({PRODUCTS.length - visibleCount} remaining)</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </button>
          ) : (
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => setVisibleCount(INITIAL_COUNT)}
                className="px-6 py-3.5 rounded-full border border-[#D9A52B]/40 bg-[#FFFDF7] text-[#17130F] font-semibold text-xs uppercase tracking-wider hover:bg-[#FFF8E8] transition-all duration-300 shadow-xs"
              >
                Show Initial 3 Products
              </button>

              <Link
                href="/products"
                className="px-8 py-3.5 rounded-full bg-[#17130F] text-[#FFFDF7] font-semibold text-xs uppercase tracking-wider hover:bg-[#D9A52B] hover:text-[#17130F] transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
