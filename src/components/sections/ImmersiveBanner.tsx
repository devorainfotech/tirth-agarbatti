'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FadeUp } from '@/components/ui/AnimateIn';
import { HighlightedWord } from '@/components/ui/HighlightedWord';

export default function ImmersiveBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden py-12 md:py-16"
      aria-label="Fragrance philosophy"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src="/images/banner-incense.jpg"
          alt="Incense burning with fragrant smoke"
          fill

          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-1" style={{ background: 'rgba(15, 5, 8, 0.72)' }} />

      {/* Thin gold border */}
      <div className="absolute inset-6 border pointer-events-none z-10" style={{ borderColor: 'rgba(184, 146, 58, 0.2)' }} aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-4 text-center">
        <FadeUp>
          <div className="label-sm mb-6" style={{ color: 'var(--color-gold)' }}>
            The Tirth Philosophy
          </div>

          <blockquote
            className="font-display text-white mb-6"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)', fontWeight: 300, lineHeight: 1.1, fontStyle: 'italic' }}
          >
            "A Fragrance Can Change<br />
            The <HighlightedWord tone="gold">Feeling</HighlightedWord> of a Space."
          </blockquote>

          <p className="font-body text-white/55 text-base mb-10 max-w-md mx-auto">
            Every Tirth incense stick is an invitation to pause, breathe, and experience the quiet
            transformation that only fragrance can bring.
          </p>

          <Link
            href="/products"
            className="inline-flex items-center gap-3 px-7 py-3.5 font-body text-[0.75rem] tracking-[0.14em] uppercase
              border border-white/40 text-white hover:border-amber-300 hover:text-amber-300 transition-all duration-300 group"
          >
            Explore Collection
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
