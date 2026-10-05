import type { Metadata } from 'next';
import Image from 'next/image';
import CraftSection from '@/components/sections/CraftSection';
import { FadeUp } from '@/components/ui/AnimateIn';
import { HighlightedWord } from '@/components/ui/HighlightedWord';
import SampleRange from '@/components/sections/SampleRange';

export const metadata: Metadata = {
  title: 'Our Craft — Tirth Premium Agarbatti',
  description: 'Discover the art and inspiration behind Tirth fragrances.',
};

export default function CraftPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex flex-col justify-end pt-32 pb-16 overflow-hidden" style={{ background: 'var(--color-burgundy-deeper)' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products/aromatic.jpg"
            alt="The craft of making incense"
            fill
            className="object-cover opacity-45"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(to top, rgba(15,5,8,0.78) 8%, rgba(15,5,8,0.35) 100%)' }} />
        
        <div className="relative z-10 container-site">
          <FadeUp>
            <div className="label-sm mb-3" style={{ color: 'var(--color-gold)' }}>Our Process</div>
            <h1
              className="font-display text-white mb-4"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 400, lineHeight: 1.05 }}
            >
              The Art of<br />
              <HighlightedWord tone="gold">Incense</HighlightedWord>
            </h1>
            <p className="max-w-[22rem] font-body text-[1.05rem] leading-relaxed text-white/80">
              Every Tirth stick begins as a feeling, moves through chosen notes and careful making, then fills a room.
            </p>
          </FadeUp>
        </div>
      </section>

      <SampleRange set="herbal" tone="cream" flip />
      <CraftSection />
    </div>
  );
}
