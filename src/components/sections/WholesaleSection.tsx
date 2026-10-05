import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Package, Store, Truck } from 'lucide-react';
import { FadeUp } from '@/components/ui/AnimateIn';
import { HighlightedWord } from '@/components/ui/HighlightedWord';

const partnerTypes = [
  { icon: Store, label: 'Retailers' },
  { icon: Package, label: 'Wholesalers' },
  { icon: Truck, label: 'Distributors' },
];

export default function WholesaleSection() {
  return (
    <section className="section-py overflow-hidden" style={{ background: 'var(--color-burgundy-deeper)' }}>
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <FadeUp>
              <div className="label-sm mb-4" style={{ color: 'var(--color-gold)' }}>
                Partner with Tirth
              </div>
              <h2
                className="font-display text-white mb-5"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.8rem)', fontWeight: 400, lineHeight: 1.1 }}
              >
                Bring Tirth<br />
                <HighlightedWord tone="gold">Fragrances</HighlightedWord> to<br />
                Your Customers
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="h-px w-12 mb-6" style={{ background: 'var(--color-gold)' }} />
              <p className="font-body text-white/60 text-[1.05rem] leading-relaxed mb-8">
                We invite retailers, distributors, wholesalers and business partners to explore
                partnership opportunities with Tirth Premium Agarbatti. Whether you are looking to
                stock our incense collections or explore sourcing opportunities, we&apos;d love to connect.
              </p>
            </FadeUp>

            {/* Partner types */}
            <FadeUp delay={0.3}>
              <div className="flex flex-wrap gap-4 mb-10">
                {partnerTypes.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 px-4 py-2.5 border"
                    style={{ borderColor: 'rgba(184, 146, 58, 0.3)' }}
                  >
                    <Icon size={15} style={{ color: 'var(--color-gold)' }} aria-hidden="true" />
                    <span className="font-body text-sm text-white/70">{label}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* CTAs */}
            <FadeUp delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/wholesale"
                  className="inline-flex items-center gap-3 px-7 py-3.5 font-body text-[0.75rem] tracking-[0.14em] uppercase
                    text-[#1C0A10] bg-amber-300 hover:bg-amber-200 transition-all duration-300 group"
                >
                  Send Wholesale Enquiry
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-7 py-3.5 font-body text-[0.75rem] tracking-[0.14em] uppercase
                    border border-white/30 text-white hover:border-amber-300 hover:text-amber-300 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Image */}
          <FadeUp delay={0.2} className="relative">
            <div
              className="absolute -bottom-6 -left-6 w-40 h-40 border pointer-events-none"
              style={{ borderColor: 'rgba(184, 146, 58, 0.15)' }}
              aria-hidden="true"
            />
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/wholesale-products.jpg"
                alt="Tirth Premium Agarbatti wholesale products"
                fill

                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(61,14,23,0.3) 0%, transparent 60%)' }} />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
