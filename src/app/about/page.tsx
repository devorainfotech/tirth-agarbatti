import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeUp, RevealText } from '@/components/ui/AnimateIn';
import { HighlightedWord } from '@/components/ui/HighlightedWord';
import SampleRange from '@/components/sections/SampleRange';

export const metadata: Metadata = {
  title: 'About Tirth Premium Agarbatti',
  description:
    'Learn about Tirth Premium Agarbatti — our brand philosophy, fragrance approach and commitment to aromatic experiences. Premium incense from Ahmedabad, Gujarat.',
};

const values = [
  {
    title: 'Fragrance First',
    description:
      'Every decision at Tirth starts with fragrance — how it smells, how it lingers, how it makes a space feel. This is the core of everything we create.',
  },
  {
    title: 'Quality Over Quantity',
    description:
      'We focus on creating fragrance products that are thoughtfully composed — offering a collection that is curated rather than exhaustive.',
  },
  {
    title: 'For Everyone',
    description:
      'Our fragrance collections are designed to be inclusive — whether for prayer, meditation, home fragrance or gifting, there is a Tirth fragrance for every occasion.',
  },
  {
    title: 'Honest & Transparent',
    description:
      'We believe in presenting our products honestly — without exaggeration, without unfounded claims. Only what we can genuinely offer.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative flex min-h-[68vh] flex-col justify-end overflow-hidden pt-32 pb-16" style={{ background: 'var(--color-burgundy-deeper)' }}>
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-milliard.jpg"
            alt="Zen meditation stones and incense"
            fill

            className="object-cover object-center opacity-45"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(to top, rgba(15,5,8,0.78) 8%, rgba(15,5,8,0.35) 100%)' }} />

        <div className="relative z-10 container-site">
          <FadeUp>
            <div className="label-sm mb-4" style={{ color: 'var(--color-gold)' }}>About Tirth</div>
            <h1
              className="font-display text-white mb-5"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 400, lineHeight: 1.05 }}
            >
              Fragrance Is More<br />
              Than Aroma.<br />
              It&apos;s an <HighlightedWord tone="gold">Experience</HighlightedWord>
            </h1>
            <p className="mt-5 max-w-[26rem] font-body text-[1.05rem] leading-relaxed text-white/80">
              Tirth is an incense house in Ahmedabad. We compose fragrances for prayer, home, and the quiet moments you return to.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-py" style={{ background: 'var(--color-ivory)' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="label-sm mb-3">About Tirth</div>
              <RevealText>
                <h2
                  className="font-display text-charcoal mb-6"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400 }}
                >
                  A Premium Incense<br />
                  Brand from <HighlightedWord tone="maroon">Gujarat</HighlightedWord>
                </h2>
              </RevealText>
              <div className="h-px w-12 mb-6" style={{ background: 'var(--color-gold)' }} />
              <p className="font-body text-[1.05rem] leading-relaxed mb-5" style={{ color: 'var(--color-charcoal-light)' }}>
                Tirth Premium Agarbatti is an incense brand based in Ahmedabad, Gujarat, India.
                We offer a range of carefully composed fragrance products — from classic sandalwood
                and floral collections to richly perfumed and hand-rolled varieties.
              </p>
              <p className="font-body text-[1.05rem] leading-relaxed mb-5" style={{ color: 'var(--color-charcoal-light)' }}>
                Our fragrance products are designed with a clear belief: that the right fragrance
                can transform the character of any space — bringing calm, warmth and a sense of
                presence to every moment.
              </p>
              <p className="font-body text-[1.05rem] leading-relaxed" style={{ color: 'var(--color-charcoal-light)' }}>
                Whether for morning rituals, meditation, prayer, home fragrance or gifting, Tirth
                offers an aromatic experience suited to every mood and environment.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="relative">
                <div
                  className="absolute -top-4 -right-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] border pointer-events-none"
                  style={{ borderColor: 'rgba(184, 146, 58, 0.35)' }}
                  aria-hidden="true"
                />
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/craft-incense.jpg"
                    alt="Incense craft and tradition"
                    fill

                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <SampleRange set="floral" tone="beige" flip />

      {/* Philosophy */}
      <section className="section-py" style={{ background: 'var(--color-ivory-warm)' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-20">
            <FadeUp className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
              <div className="label-sm mb-4">Brand Philosophy</div>
              <h2
                className="font-display text-charcoal"
                style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 400, lineHeight: 1.05 }}
              >
                Our Approach to
                <br />
                <HighlightedWord tone="maroon">Fragrance</HighlightedWord>
              </h2>
              <p className="mt-6 max-w-sm font-body text-[1.02rem] leading-relaxed" style={{ color: 'var(--color-charcoal-light)' }}>
                What guides every Tirth fragrance — how it is chosen, who it is for, and how plainly we speak about it.
              </p>
            </FadeUp>

            <div className="border-t border-[rgba(184,146,58,0.35)] lg:col-span-8">
              {values.map((value, i) => (
                <FadeUp key={value.title} delay={i * 0.08}>
                  <article className="group grid grid-cols-[auto_1fr] gap-5 border-b border-[rgba(184,146,58,0.35)] py-7 md:gap-8 md:py-9">
                    <span
                      className="font-display italic leading-none text-[var(--color-gold)] transition-colors duration-300 group-hover:text-[var(--color-burgundy)]"
                      style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)' }}
                    >
                      0{i + 1}
                    </span>
                    <div>
                      <h3
                        className="font-display mb-2 text-[1.7rem] leading-tight md:text-[2rem]"
                        style={{ color: 'var(--color-charcoal)', fontWeight: 400 }}
                      >
                        {value.title}
                      </h3>
                      <p className="max-w-xl font-body text-[0.98rem] leading-relaxed" style={{ color: 'var(--color-charcoal-light)' }}>
                        {value.description}
                      </p>
                    </div>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 text-center"
        style={{ background: 'var(--color-burgundy-dark)' }}
      >
        <div className="container-site max-w-xl">
          <FadeUp>
            <div className="label-sm mb-4" style={{ color: 'var(--color-gold)' }}>Our Products</div>
            <h2 className="font-display text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400 }}>
              Explore the<br />
              Tirth <HighlightedWord tone="gold">Collection</HighlightedWord>
            </h2>
            <p className="font-body text-white/60 mb-8">
              Discover our full range of incense and fragrance products.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-3 px-7 py-3.5 font-body text-[0.75rem] tracking-[0.14em] uppercase
                bg-amber-300 text-[#1C0A10] hover:bg-amber-200 transition-all duration-300 group"
            >
              View All Products
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
