import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProduct } from '@/data/products';
import { FadeUp, RevealText } from '@/components/ui/AnimateIn';
import { HighlightedWord } from '@/components/ui/HighlightedWord';

export default function FeaturedFragrance() {
  const product = getFeaturedProduct();

  return (
    <section
      className="section-py overflow-hidden"
      style={{ background: 'var(--color-burgundy-dark)' }}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <FadeUp className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Decorative arch shape */}
              <div
                className="absolute -top-6 -right-6 w-32 h-32 border pointer-events-none z-10"
                style={{ borderColor: 'rgba(184, 146, 58, 0.2)' }}
                aria-hidden="true"
              />
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/featured-fragrance.jpg"
                  alt={`${product.name} — Tirth signature fragrance`}
                  fill

                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Subtle dark overlay */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(61,14,23,0.5) 0%, transparent 60%)' }} />
              </div>
            </div>
          </FadeUp>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <FadeUp delay={0.1}>
              <div className="label-sm mb-4" style={{ color: 'var(--color-gold)' }}>
                Signature Fragrance
              </div>
            </FadeUp>

            <RevealText delay={0.2}>
              <h2
                className="font-display text-white mb-4"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 400, lineHeight: 1.05 }}
              >
                {product.name}<br />
                <HighlightedWord tone="gold">Collection</HighlightedWord>
              </h2>
            </RevealText>

            <FadeUp delay={0.3}>
              <div className="h-px w-16 mb-6" style={{ background: 'var(--color-gold)' }} />
              <p className="font-body text-white/65 text-[1.05rem] leading-relaxed mb-8">
                {product.longDescription}
              </p>
            </FadeUp>

            {/* Fragrance Notes */}
            <FadeUp delay={0.4}>
              <div
                className="mb-8 p-6 border"
                style={{ borderColor: 'rgba(184, 146, 58, 0.25)' }}
              >
                <p className="label-sm mb-4" style={{ color: 'var(--color-gold)' }}>Fragrance Notes</p>
                <div className="grid grid-cols-3 gap-4">
                  {(['top', 'heart', 'base'] as const).map((note) => (
                    <div key={note} className="text-center">
                      <div className="font-body text-[0.65rem] tracking-[0.15em] uppercase mb-2 text-white/40">
                        {note}
                      </div>
                      <div className="h-px mx-auto w-6 mb-2" style={{ background: 'var(--color-gold)', opacity: 0.5 }} />
                      <div className="font-display italic text-white/60 text-sm">
                        {product.fragranceNotes[note]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.5}>
              <Link
                href={`/products/${product.slug}`}
                className="inline-flex items-center gap-3 px-7 py-3.5 font-body text-[0.75rem] tracking-[0.14em] uppercase
                  border border-amber-300 text-amber-300 transition-all duration-300
                  hover:bg-amber-300 hover:text-[#1C0A10] group"
              >
                Discover the Fragrance
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
