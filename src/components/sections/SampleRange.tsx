'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FadeUp } from '@/components/ui/AnimateIn';
import { HighlightedWord } from '@/components/ui/HighlightedWord';

const backgrounds = {
  ivory: 'var(--color-ivory)',
  cream: 'var(--color-cream)',
  warm: 'var(--color-ivory-warm)',
  beige: 'var(--color-beige)',
} as const;

const sets = {
  classic: {
    image: '/images/wholesale/tirth-range-types.jpg',
    alt: 'Tirth Floral, Sandalwood, and Musk boxes on a wooden table',
    eyebrow: 'The house boxes',
    lead: 'Floral, sandalwood, and',
    highlight: 'Musk',
    text: 'Three tall packs, each with its own fragrance and the Tirth mark at the top.',
    names: [
      { name: 'Floral', href: '/products/floral-agarbatti' },
      { name: 'Sandalwood', href: '/products/sandalwood-agarbatti' },
      { name: 'Musk', href: '/products/musk-agarbatti' },
    ],
  },
  floral: {
    image: '/images/samples/trio-floral.jpg',
    alt: 'Tirth Rose, Mogra, and Lavender agarbatti boxes',
    eyebrow: 'Floral boxes',
    lead: 'Rose, mogra, and',
    highlight: 'Lavender',
    text: 'The floral side of the range, in the same tall box so a shelf reads as one house.',
    names: [
      { name: 'Rose', href: '/products/floral-agarbatti' },
      { name: 'Mogra', href: '/products/floral-agarbatti' },
      { name: 'Lavender', href: '/products/sage-lavender' },
    ],
  },
  resin: {
    image: '/images/samples/trio-resin.jpg',
    alt: 'Tirth Nagchampa, Loban, and Oud agarbatti boxes',
    eyebrow: 'Resin and masala',
    lead: 'Nagchampa, loban, and',
    highlight: 'Oud',
    text: 'The deeper market types, each in its own colour so they do not blur into one pack.',
    names: [
      { name: 'Nagchampa', href: '/products/aromatic-agarbatti' },
      { name: 'Loban', href: '/products/aromatic-agarbatti' },
      { name: 'Oud', href: '/products/sandalwood-agarbatti' },
    ],
  },
  herbal: {
    image: '/images/samples/trio-herbal.jpg',
    alt: 'Tirth Hand-Rolled, Sage, and Lavender agarbatti boxes',
    eyebrow: 'Hand-rolled and herbal',
    lead: 'Hand-rolled sticks and',
    highlight: 'Sage',
    text: 'A kraft pack for the hand-rolled sticks, then sage and lavender in their own colours.',
    names: [
      { name: 'Hand-Rolled', href: '/products/handrolled-agarbatti' },
      { name: 'Sage', href: '/products/sage-white' },
      { name: 'Lavender', href: '/products/sage-lavender' },
    ],
  },
} as const;

type SetId = keyof typeof sets;
type Tone = keyof typeof backgrounds;

function TrioPhoto({ set, className }: { set: SetId; className?: string }) {
  const item = sets[set];
  return (
    <figure className={`relative overflow-hidden ${className ?? ''}`}>
      <Image src={item.image} alt={item.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
    </figure>
  );
}

function Names({ set }: { set: SetId }) {
  return (
    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
      {sets[set].names.map((name) => (
        <Link
          key={name.name}
          href={name.href}
          className="font-body text-[0.72rem] uppercase tracking-[0.14em] transition-colors hover:text-[var(--color-burgundy)]"
          style={{ color: 'var(--color-charcoal-mid)' }}
        >
          {name.name}
        </Link>
      ))}
    </div>
  );
}

function Copy({ set }: { set: SetId }) {
  const item = sets[set];
  return (
    <>
      <div className="label-sm mb-3">{item.eyebrow}</div>
      <h2
        className="font-display text-charcoal"
        style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, lineHeight: 1.05 }}
      >
        {item.lead}
        <br />
        <HighlightedWord tone="maroon">{item.highlight}</HighlightedWord>
      </h2>
      <p className="mt-4 max-w-md font-body text-[1.02rem] leading-relaxed" style={{ color: 'var(--color-charcoal-light)' }}>
        {item.text}
      </p>
      <Names set={set} />
    </>
  );
}

export default function SampleRange({
  set = 'classic',
  layout = 'feature',
  tone = 'ivory',
  flip = false,
}: {
  set?: SetId;
  layout?: 'feature' | 'compact' | 'catalog';
  tone?: Tone;
  flip?: boolean;
}) {
  if (layout === 'catalog') {
    const groups: SetId[] = ['classic', 'floral', 'resin'];
    return (
      <section className="py-16 md:py-20" style={{ background: backgrounds[tone] }}>
        <div className="container-site">
          <FadeUp className="mb-10 max-w-xl">
            <div className="label-sm mb-3">The boxes</div>
            <h2
              className="font-display text-charcoal"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, lineHeight: 1.05 }}
            >
              One tall box,
              <br />
              a different <HighlightedWord tone="maroon">Fragrance</HighlightedWord>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
            {groups.map((id) => (
              <FadeUp key={id}>
                <TrioPhoto set={id} className="aspect-[3/4]" />
                <Names set={id} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const item = sets[set];

  if (layout === 'compact') {
    return (
      <section className="py-12 md:py-16" style={{ background: backgrounds[tone] }}>
        <div className="container-site grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12">
          <FadeUp className="md:col-span-5">
            <div className="label-sm mb-3">{item.eyebrow}</div>
            <h2 className="font-display text-[2rem] text-charcoal" style={{ fontWeight: 400, lineHeight: 1.1 }}>
              <HighlightedWord tone="maroon">{item.highlight}</HighlightedWord>
            </h2>
            <p className="mt-3 max-w-sm font-body text-sm leading-relaxed" style={{ color: 'var(--color-charcoal-light)' }}>
              {item.text}
            </p>
            <Names set={set} />
          </FadeUp>
          <FadeUp delay={0.1} className="md:col-span-7">
            <TrioPhoto set={set} className="aspect-[4/5] max-h-[28rem] md:ml-auto md:max-w-md" />
          </FadeUp>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20" style={{ background: backgrounds[tone] }}>
      <div className="container-site grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <FadeUp className={flip ? 'lg:order-2 lg:col-span-5' : 'lg:col-span-5'}>
          <Copy set={set} />
        </FadeUp>
        <FadeUp delay={0.08} className={flip ? 'lg:order-1 lg:col-span-7' : 'lg:col-span-7'}>
          <TrioPhoto set={set} className="aspect-[3/4] lg:aspect-[4/5]" />
        </FadeUp>
      </div>
    </section>
  );
}
