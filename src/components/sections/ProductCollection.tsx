import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/AnimateIn';
import { HighlightedWord } from '@/components/ui/HighlightedWord';

const productImages: Record<string, string> = {
  'sandalwood-agarbatti': '/images/products/sandalwood.jpg',
  'floral-agarbatti': '/images/products/floral.jpg',
  'musk-agarbatti': '/images/products/musk.jpg',
  'aromatic-agarbatti': '/images/products/aromatic.jpg',
  'handrolled-agarbatti': '/images/products/handrolled.jpg',
  'perfumed-agarbatti': '/images/products/perfumed.jpg',
};

export default function ProductCollection() {
  return (
    <section className="section-py" style={{ background: 'var(--color-cream)' }}>
      <div className="container-site">
        {/* Header */}
        <FadeUp className="text-center mb-14">
          <div className="label-sm mb-3">Our Fragrances</div>
          <h2
            className="font-display text-charcoal mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400 }}
          >
            Discover Our <HighlightedWord tone="maroon">Fragrances</HighlightedWord>
          </h2>
          <p className="font-body max-w-md mx-auto" style={{ color: 'var(--color-charcoal-light)' }}>
            A collection of aromatic experiences for every mood, moment and space.
          </p>
        </FadeUp>

        {/* Editorial Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-beige">
          {products.slice(0, 6).map((product) => {
            return (
              <StaggerItem key={product.id}>
                <Link
                  href={`/products/${product.slug}`}
                  className="group relative flex flex-col overflow-hidden bg-white h-full"
                >
                  {/* Number badge */}
                  <div
                    className="absolute top-4 left-4 z-10 font-display italic text-4xl leading-none select-none"
                    style={{ color: 'rgba(184, 146, 58, 0.25)' }}
                    aria-hidden="true"
                  >
                    {String(product.index).padStart(2, '0')}
                  </div>

                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[4/5] flex-grow">
                    <Image
                      src={productImages[product.id] || product.image}
                      alt={`${product.name} incense sticks — Tirth Premium Agarbatti`}
                      fill

                      className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                      style={{ background: 'rgba(107, 26, 42, 0.35)' }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-400 mb-1" style={{ color: 'var(--color-charcoal)' }}>
                        {product.name}
                      </h3>
                      <p className="font-body text-xs tracking-widest" style={{ color: 'var(--color-saffron)' }}>
                        {product.tagline}
                      </p>
                    </div>
                    <div
                      className="flex-shrink-0 w-9 h-9 flex items-center justify-center border transition-all duration-300
                        group-hover:bg-[var(--color-burgundy)] group-hover:border-[var(--color-burgundy)]"
                      style={{ borderColor: 'var(--color-gold)', color: 'var(--color-charcoal)' }}
                    >
                      <ArrowRight
                        size={16}
                        className="transition-all duration-300 group-hover:text-white -translate-x-px group-hover:translate-x-px"
                      />
                    </div>
                  </div>

                  {/* Bottom gold line */}
                  <div
                    className="h-[2px] w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: 'var(--color-gold)' }}
                  />
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* CTA */}
        <FadeUp className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 px-8 py-4 font-body text-[0.75rem] tracking-[0.14em] uppercase
              border transition-all duration-300 hover:bg-[var(--color-burgundy)] hover:text-white hover:border-[var(--color-burgundy)]
              text-[var(--color-burgundy)] border-[var(--color-burgundy)]"
          >
            View All Products
            <ArrowRight size={14} />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
