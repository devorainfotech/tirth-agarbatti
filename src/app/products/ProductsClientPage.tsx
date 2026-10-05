'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products, productCategories, type ProductCategory } from '@/data/products';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/AnimateIn';
import { HighlightedWord } from '@/components/ui/HighlightedWord';
import SampleRange from '@/components/sections/SampleRange';
import { motion, AnimatePresence } from 'framer-motion';

const categoryImages: Record<string, string> = {
  'sandalwood-agarbatti': '/images/products/sandalwood.jpg',
  'floral-agarbatti': '/images/products/floral.jpg',
  'musk-agarbatti': '/images/products/musk.jpg',
  'aromatic-agarbatti': '/images/products/aromatic.jpg',
  'handrolled-agarbatti': '/images/products/handrolled.jpg',
  'perfumed-agarbatti': '/images/products/perfumed.jpg',
};

export default function ProductsClientPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('All');

  const filtered =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex flex-col justify-end pt-32 pb-16 overflow-hidden" style={{ background: 'var(--color-burgundy-deeper)' }}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products/floral.jpg"
            alt="Incense smoke background"
            fill

            className="object-cover opacity-45"
            sizes="100vw"
            priority
          />
        </div>
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(to top, rgba(15,5,8,0.78) 8%, rgba(15,5,8,0.35) 100%)' }} />

        <div className="relative z-10 container-site">
          <FadeUp>
            <div className="label-sm mb-3" style={{ color: 'var(--color-gold)' }}>Our Products</div>
            <h1
              className="font-display text-white mb-4"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 400, lineHeight: 1.05 }}
            >
              Find Your<br />
              <HighlightedWord tone="gold">Fragrance</HighlightedWord>
            </h1>
            <p className="max-w-[26rem] font-body text-[1.05rem] leading-relaxed text-white/80">
              Explore the Tirth collection — sandalwood, floral, musk, and more — each made for a different mood, room, and moment.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Filters */}
      <section style={{ background: 'var(--color-cream)' }}>
        <div className="container-site py-8">
          <div
            className="flex flex-wrap items-center gap-2"
            role="group"
            aria-label="Filter products by category"
          >
            {productCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 font-body text-[0.72rem] tracking-[0.12em] uppercase border transition-all duration-250
                  ${
                    activeCategory === cat
                      ? 'text-white border-[var(--color-burgundy)] bg-[var(--color-burgundy)]'
                      : 'border-[rgba(184,146,58,0.4)] text-charcoal hover:border-[var(--color-burgundy)] hover:text-[var(--color-burgundy)]'
                  }`}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-py" style={{ background: 'var(--color-ivory)' }}>
        <div className="container-site">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-beige"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="group relative flex flex-col overflow-hidden bg-white"
                >
                  {/* Number */}
                  <div
                    className="absolute top-4 left-4 z-10 font-display italic text-4xl leading-none select-none"
                    style={{ color: 'rgba(184, 146, 58, 0.2)' }}
                    aria-hidden="true"
                  >
                    {String(product.index).padStart(2, '0')}
                  </div>

                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={categoryImages[product.id] || product.image}
                      alt={`${product.name} incense sticks — Tirth`}
                      fill

                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div
                      className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                      style={{ background: 'rgba(107, 26, 42, 0.3)' }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex items-end justify-between gap-4">
                    <div>
                      <h2 className="font-display text-2xl mb-1" style={{ color: 'var(--color-charcoal)', fontWeight: 400 }}>
                        {product.name}
                      </h2>
                      <p className="font-body text-xs tracking-widest" style={{ color: 'var(--color-saffron)' }}>
                        {product.tagline}
                      </p>
                    </div>
                    <div
                      className="flex-shrink-0 w-9 h-9 flex items-center justify-center border transition-all duration-300
                        group-hover:bg-[var(--color-burgundy)] group-hover:border-[var(--color-burgundy)]"
                      style={{ borderColor: 'var(--color-gold)' }}
                    >
                      <ArrowRight size={16} className="transition-colors duration-300 group-hover:text-white" />
                    </div>
                  </div>

                  {/* Bottom reveal line */}
                  <div className="h-[2px] w-0 group-hover:w-full transition-all duration-500" style={{ background: 'var(--color-gold)' }} />
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-display text-2xl text-charcoal italic">No products found</p>
            </div>
          )}
        </div>
      </section>
      <SampleRange layout="catalog" tone="cream" />
    </div>
  );
}
