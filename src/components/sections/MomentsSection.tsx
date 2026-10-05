'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/AnimateIn';
import { HighlightedWord } from '@/components/ui/HighlightedWord';
import { motion, AnimatePresence } from 'framer-motion';

const moments = [
  {
    id: 'prayer',
    label: 'Prayer',
    image: '/images/banner-incense.jpg',
    description: 'Sacred moments and daily devotion',
  },
  {
    id: 'meditation',
    label: 'Meditation',
    image: '/images/products/musk.jpg',
    description: 'Stillness and inner peace',
  },
  {
    id: 'morning',
    label: 'Morning Rituals',
    image: '/images/about-milliard.jpg',
    description: 'Start every day with intention',
  },
  {
    id: 'home',
    label: 'Home Fragrance',
    image: '/images/products/floral.jpg',
    description: 'Transform any space beautifully',
  },
  {
    id: 'relaxation',
    label: 'Relaxation',
    image: '/images/products/sandalwood.jpg',
    description: 'Unwind and breathe deeply',
  },
  {
    id: 'special',
    label: 'Special Moments',
    image: '/images/featured-fragrance.jpg',
    description: 'Create lasting memories',
  },
];

export default function MomentsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="section-py" style={{ background: 'var(--color-beige)' }}>
      <div className="container-site">
        <FadeUp className="text-center mb-12">
          <div className="label-sm mb-3">Use Cases</div>
          <h2
            className="font-display text-charcoal"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400 }}
          >
            Fragrance for<br />
            Every <HighlightedWord tone="maroon">Moment</HighlightedWord>
          </h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1">
          {moments.map((moment) => (
            <StaggerItem key={moment.id}>
              <div
                className="relative overflow-hidden cursor-default group"
                onMouseEnter={() => setHoveredId(moment.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image */}
                <div className="relative aspect-[2/3]">
                  <Image
                    src={moment.image}
                    alt={`${moment.label} — Tirth Premium Agarbatti`}
                    fill

                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 17vw"
                  />
                  {/* Normal overlay */}
                  <div className="absolute inset-0" style={{ background: 'rgba(10,3,5,0.4)' }} />

                  {/* Hover colour wash — text stays in the caption below */}
                  <AnimatePresence>
                    {hoveredId === moment.id && (
                      <motion.div
                        className="absolute inset-0"
                        style={{ background: 'rgba(107, 26, 42, 0.82)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      />
                    )}
                  </AnimatePresence>

                  <div className="absolute bottom-0 left-0 right-0 z-10 p-3 text-center">
                    <AnimatePresence>
                      {hoveredId === moment.id && (
                        <motion.p
                          className="font-body text-[0.65rem] text-white/75 tracking-wide leading-snug mb-1.5"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          {moment.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <h3
                      className="font-display text-white leading-tight"
                      style={{ fontSize: '0.95rem', fontWeight: 400 }}
                    >
                      {moment.label}
                    </h3>
                    <div
                      className={`h-[1px] mx-auto mt-1 transition-all duration-300 ${hoveredId === moment.id ? 'w-8' : 'w-0'}`}
                      style={{ background: 'var(--color-gold)' }}
                    />
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
