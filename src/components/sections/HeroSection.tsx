'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { HighlightedWord } from '@/components/ui/HighlightedWord';

const highlights = [
  { label: 'Origin', value: 'Ahmedabad, Gujarat' },
  { label: 'Craft', value: 'Made for daily ritual' },
  { label: 'Trade', value: 'Wholesale welcome' },
];

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden bg-[#14080c]"
      aria-label="Hero"
    >
      {/* Full-width Photograph background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={reduceMotion ? false : { scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative h-full w-full">
              <Image
                src="/images/final-hero-banner.jpg"
                alt="Beautiful incense sticks background"
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-[#14080c]/55 lg:bg-gradient-to-r lg:from-[#14080c]/80 lg:via-[#14080c]/50 lg:to-[#14080c]/20" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-start lg:justify-center">
        <div className="container-site min-w-0 pb-16 pt-[calc(42svh+1.75rem)] lg:py-28 lg:pt-28">
          <div className="max-w-[34rem] min-w-0">
            <motion.div
              className="mb-7 flex items-center gap-4"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="h-px w-10" style={{ background: 'var(--color-gold)' }} />
              <p className="label-sm" style={{ color: 'var(--color-gold-light)' }}>
                Tirth Premium Agarbatti
              </p>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                className="font-display text-white"
                style={{
                  fontSize: 'clamp(2.75rem, 5.6vw, 5.1rem)',
                  fontWeight: 400,
                  lineHeight: 0.98,
                }}
                initial={reduceMotion ? false : { y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Fragrance that
                <br />
                <HighlightedWord tone="gold">transforms</HighlightedWord>
                <br />
                every moment
              </motion.h1>
            </div>

            <motion.p
              className="mt-7 max-w-[26rem] font-body text-base leading-relaxed text-white/80"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.55 }}
            >
              Thoughtfully crafted incense for the spaces you return to. Warmth, calm, and a fragrance that stays in the room after the stick is gone.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.72 }}
            >
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-2.5 bg-amber-300 px-7 py-3.5 font-body text-[0.72rem] uppercase tracking-[0.16em] text-[#1C0A10] transition-colors duration-300 hover:bg-amber-200 sm:justify-start"
              >
                Explore Our Collection
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/wholesale"
                className="inline-flex items-center justify-center px-7 py-3.5 font-body text-[0.72rem] uppercase tracking-[0.16em] text-white border border-white/35 transition-colors duration-300 hover:border-amber-300 hover:text-amber-300 sm:justify-start"
              >
                Wholesale Enquiry
              </Link>
            </motion.div>
          </div>

          <motion.dl
            className="mt-14 grid min-w-0 max-w-xl grid-cols-1 gap-5 border-t border-white/10 pt-6 sm:grid-cols-3 sm:gap-6"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.95 }}
          >
            {highlights.map((item) => (
              <div key={item.label}>
                <dt className="font-body text-[0.62rem] uppercase tracking-[0.18em] text-amber-300/80">
                  {item.label}
                </dt>
                <dd className="mt-1 font-display text-[1.15rem] font-medium text-white/90">
                  {item.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
