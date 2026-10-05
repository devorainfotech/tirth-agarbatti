import type { Metadata } from 'next';
import Image from 'next/image';
import GallerySection from '@/components/sections/GallerySection';
import { FadeUp } from '@/components/ui/AnimateIn';
import { HighlightedWord } from '@/components/ui/HighlightedWord';
import SampleRange from '@/components/sections/SampleRange';

export const metadata: Metadata = {
  title: 'Gallery — Tirth Premium Agarbatti',
  description: 'Explore the world of Tirth Premium Agarbatti through our gallery.',
};

export default function GalleryPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex flex-col justify-end pt-32 pb-16 overflow-hidden" style={{ background: 'var(--color-burgundy-dark)' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/gallery-evening.jpg"
            alt="Gallery hero"
            fill
            className="object-cover opacity-45"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(to top, rgba(15,5,8,0.78) 8%, rgba(15,5,8,0.35) 100%)' }} />
        
        <div className="relative z-10 container-site">
          <FadeUp>
            <div className="label-sm mb-3" style={{ color: 'var(--color-gold)' }}>Visual Journey</div>
            <h1
              className="font-display text-white"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 400, lineHeight: 1.05 }}
            >
              Our<br />
              <HighlightedWord tone="gold">Gallery</HighlightedWord>
            </h1>
            <p className="mt-4 max-w-[26rem] font-body text-[1.05rem] leading-relaxed text-white/80">
              A closer look at Tirth: the smoke, the flowers, the brass, and the hands that roll each stick before it reaches your home.
            </p>
          </FadeUp>
        </div>
      </section>

      <SampleRange set="resin" layout="compact" tone="cream" />
      <GallerySection />
    </div>
  );
}
