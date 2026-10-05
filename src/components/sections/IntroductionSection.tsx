import Image from 'next/image';
import Link from 'next/link';
import { FadeUp, RevealText } from '@/components/ui/AnimateIn';

import { HighlightedWord } from '@/components/ui/HighlightedWord';

export default function IntroductionSection() {
  return (
    <section className="section-py overflow-hidden" style={{ background: 'var(--color-ivory)' }}>
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <FadeUp className="order-2 lg:order-1">
            <div className="relative">
              {/* Decorative gold border frame */}
              <div
                className="absolute -top-4 -left-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] border z-10 pointer-events-none"
                style={{ borderColor: 'rgba(184, 146, 58, 0.4)' }}
              />
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/about-milliard.jpg"
                  alt="Tirth Premium Agarbatti — incense ingredients and natural elements"
                  fill

                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Small decorative label */}
              <div
                className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 z-20"
                style={{ borderLeft: '2px solid var(--color-gold)' }}
              >
                <p className="font-body text-xs tracking-widest uppercase" style={{ color: 'var(--color-gold)' }}>
                  Ahmedabad, Gujarat
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <FadeUp delay={0.1}>
              <div className="label-sm mb-4">The Tirth Experience</div>
            </FadeUp>

            <RevealText delay={0.2}>
              <h2
                className="font-display text-charcoal mb-6"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: 400, lineHeight: 1.1 }}
              >
                Where Fragrance<br />
                Meets <HighlightedWord tone="maroon">Tradition</HighlightedWord>
              </h2>
            </RevealText>

            <FadeUp delay={0.3}>
              {/* Gold divider */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12" style={{ background: 'var(--color-gold)' }} />
                <div className="h-[3px] w-3" style={{ background: 'var(--color-gold)' }} />
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p
                className="font-body leading-relaxed mb-5"
                style={{ color: 'var(--color-charcoal-light)', fontSize: '1.05rem' }}
              >
                At Tirth, we believe fragrance is more than a scent — it is an atmosphere, a feeling,
                a quiet transformation of any space you inhabit.
              </p>
              <p
                className="font-body leading-relaxed mb-5"
                style={{ color: 'var(--color-charcoal-light)', fontSize: '1.05rem' }}
              >
                Our incense products are designed for everyday rituals — whether you seek the calm of
                morning meditation, the warmth of a home filled with beautiful fragrance, or the
                serenity of a peaceful evening.
              </p>
              <p
                className="font-body leading-relaxed mb-8"
                style={{ color: 'var(--color-charcoal-light)', fontSize: '1.05rem' }}
              >
                Each fragrance collection at Tirth has been conceived to bring an aromatic
                experience that is both meaningful and memorable.
              </p>
            </FadeUp>

            <FadeUp delay={0.5}>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 font-body text-[0.75rem] tracking-[0.14em] uppercase group"
                style={{ color: 'var(--color-burgundy)' }}
              >
                Discover Our Story
                <span className="inline-block w-10 h-[1px] transition-all duration-300 group-hover:w-16" style={{ background: 'var(--color-burgundy)' }} />
              </Link>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
