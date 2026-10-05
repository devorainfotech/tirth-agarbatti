import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Package } from 'lucide-react';
import { getProductBySlug, getRelatedProducts, products } from '@/data/products';
import { FadeUp } from '@/components/ui/AnimateIn';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.name} Incense Sticks — Tirth Premium Agarbatti`,
    description: `${product.shortDescription} — ${product.fragranceProfile} Premium ${product.category} agarbatti from Tirth.`,
  };
}

const productImages: Record<string, string> = {
  'sandalwood-agarbatti': '/images/products/sandalwood.jpg',
  'floral-agarbatti': '/images/products/floral.jpg',
  'musk-agarbatti': '/images/products/musk.jpg',
  'aromatic-agarbatti': '/images/products/aromatic.jpg',
  'handrolled-agarbatti': '/images/products/handrolled.jpg',
  'perfumed-agarbatti': '/images/products/perfumed.jpg',
};

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const related = getRelatedProducts(slug, 3);
  const image = productImages[product.id] || product.image;

  return (
    <div className="pt-20">
      {/* Back link */}
      <div className="container-site py-5">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 font-body text-[0.72rem] tracking-[0.12em] uppercase
            transition-colors group"
          style={{ color: 'var(--color-charcoal-light)' }}
        >
          <ArrowLeft size={13} className="transition-transform duration-300 group-hover:-translate-x-1" />
          All Products
        </Link>
      </div>

      {/* Product Hero */}
      <section className="section-py" style={{ background: 'var(--color-ivory)' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image */}
            <FadeUp>
              <div className="relative">
                <div
                  className="absolute -top-4 -left-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] border pointer-events-none"
                  style={{ borderColor: 'rgba(184, 146, 58, 0.3)' }}
                  aria-hidden="true"
                />
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={image}
                    alt={`${product.name} incense sticks — Tirth Premium Agarbatti`}
                    fill

                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </FadeUp>

            {/* Details */}
            <div>
              <FadeUp delay={0.1}>
                <span className="label-sm block mb-3">{product.category}</span>
                <h1
                  className="font-display text-charcoal mb-2"
                  style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 400 }}
                >
                  {product.name}
                </h1>
                <p className="font-body text-sm tracking-widest mb-6" style={{ color: 'var(--color-saffron)' }}>
                  {product.tagline}
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="h-px w-12 mb-6" style={{ background: 'var(--color-gold)' }} />
                <p className="font-body text-[1.05rem] leading-relaxed mb-5" style={{ color: 'var(--color-charcoal-light)' }}>
                  {product.longDescription}
                </p>
                <p className="font-body text-sm italic leading-relaxed" style={{ color: 'var(--color-charcoal-light)', opacity: 0.7 }}>
                  {product.fragranceProfile}
                </p>
              </FadeUp>

              {/* Fragrance Notes */}
              <FadeUp delay={0.3}>
                <div
                  className="mt-8 mb-6 p-6 border"
                  style={{ borderColor: 'rgba(184, 146, 58, 0.25)', background: 'var(--color-cream)' }}
                >
                  <p className="label-sm mb-4">Fragrance Notes</p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {(['top', 'heart', 'base'] as const).map((note) => (
                      <div key={note}>
                        <div className="font-body text-[0.65rem] tracking-[0.15em] uppercase mb-2" style={{ color: 'var(--color-charcoal-light)' }}>
                          {note}
                        </div>
                        <div className="h-px mx-auto w-6 mb-2" style={{ background: 'var(--color-gold)', opacity: 0.4 }} />
                        <div className="font-display italic text-sm" style={{ color: 'var(--color-charcoal)' }}>
                          {product.fragranceNotes[note]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>

              {/* Pack Size */}
              <FadeUp delay={0.35}>
                <div className="mb-6">
                  <p className="label-sm mb-2 flex items-center gap-2">
                    <Package size={12} aria-hidden="true" /> Pack Sizes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.packSizes.map((size) => (
                      <span
                        key={size}
                        className="font-body text-xs px-3 py-1.5 border"
                        style={{ borderColor: 'rgba(184, 146, 58, 0.3)', color: 'var(--color-charcoal-mid)' }}
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeUp>

              {/* Usage */}
              <FadeUp delay={0.4}>
                <div className="mb-8 p-4 bg-beige">
                  <p className="label-sm mb-2">Usage Information</p>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-charcoal-light)' }}>
                    {product.usageInfo}
                  </p>
                </div>
              </FadeUp>

              {/* CTAs */}
              <FadeUp delay={0.45}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-7 py-3.5 font-body text-[0.75rem] tracking-[0.14em] uppercase
                      text-white transition-all duration-300 hover:opacity-90 group"
                    style={{ background: 'var(--color-burgundy)' }}
                  >
                    Product Enquiry
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/wholesale"
                    className="inline-flex items-center gap-3 px-7 py-3.5 font-body text-[0.75rem] tracking-[0.14em] uppercase
                      border transition-all duration-300 hover:border-[var(--color-burgundy)] hover:text-[var(--color-burgundy)]"
                    style={{ borderColor: 'var(--color-gold)', color: 'var(--color-charcoal)' }}
                  >
                    Wholesale Enquiry
                  </Link>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="section-py" style={{ background: 'var(--color-cream)' }}>
          <div className="container-site">
            <FadeUp className="mb-10">
              <div className="label-sm mb-2">Explore More</div>
              <h2 className="font-display text-2xl" style={{ fontWeight: 400 }}>Related Fragrances</h2>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-beige">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/products/${rel.slug}`}
                  className="group bg-white overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={productImages[rel.id] || rel.image}
                      alt={`${rel.name} incense — Tirth`}
                      fill

                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-xl mb-1" style={{ fontWeight: 400 }}>{rel.name}</h3>
                      <p className="font-body text-xs tracking-widest" style={{ color: 'var(--color-saffron)' }}>{rel.tagline}</p>
                    </div>
                    <ArrowRight size={16} className="text-charcoal group-hover:text-[var(--color-burgundy)] transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
