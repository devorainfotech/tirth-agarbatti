'use client';

import Image from 'next/image';
import { useState, useCallback } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/AnimateIn';
import { HighlightedWord } from '@/components/ui/HighlightedWord';

const galleryItems = [
  { id: 1, src: '/images/gallery/gallery-smoke.jpg', alt: 'A single incense stick with a rising ribbon of smoke', category: 'Incense', aspect: 'tall' },
  { id: 2, src: '/images/gallery/gallery-resin.jpg', alt: 'Frankincense resin in a brass bowl', category: 'Ingredients', aspect: 'tall' },
  { id: 3, src: '/images/gallery/gallery-cup.jpg', alt: 'Unlit incense sticks standing in a ceramic cup', category: 'Products', aspect: 'tall' },
  { id: 4, src: '/images/gallery/gallery-jasmine.jpg', alt: 'Jasmine beside a burning incense stick', category: 'Lifestyle', aspect: 'tall' },
  { id: 5, src: '/images/gallery/gallery-copper.jpg', alt: 'A copper incense burner with a glowing tip', category: 'Incense', aspect: 'tall' },
  { id: 6, src: '/images/gallery/gallery-evening.jpg', alt: 'Evening lamps and burning incense', category: 'Lifestyle', aspect: 'wide' },
  { id: 7, src: '/images/gallery/gallery-hands.jpg', alt: 'Hands rolling incense onto a bamboo stick', category: 'Craft', aspect: 'wide' },
  { id: 8, src: '/images/gallery/gallery-boxes.jpg', alt: 'Kraft incense boxes with marigold', category: 'Brand', aspect: 'tall' },
];

export default function GallerySection() {
  const [lightboxImage, setLightboxImage] = useState<(typeof galleryItems)[0] | null>(null);

  const openLightbox = useCallback((item: (typeof galleryItems)[0]) => {
    setLightboxImage(item);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
  }, []);

  return (
    <section className="section-py" style={{ background: 'var(--color-ivory)' }}>
      <div className="container-site">
        <FadeUp className="text-center mb-12">
          <div className="label-sm mb-3">Gallery</div>
          <h2
            className="font-display text-charcoal"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400 }}
          >
            The World of<br />
            <HighlightedWord tone="maroon">Tirth</HighlightedWord>
          </h2>
        </FadeUp>

        {/* Masonry-style grid */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 auto-rows-[200px]">
          {galleryItems.map((item) => (
            <StaggerItem key={item.id}>
              <button
                onClick={() => openLightbox(item)}
                className={`relative group overflow-hidden w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300
                  ${item.aspect === 'wide' ? 'col-span-2' : ''}`}
                aria-label={`View ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill

                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(107, 26, 42, 0.72)' }}
                >
                  <ZoomIn size={24} className="text-white mb-2" />
                  <span className="font-body text-[0.65rem] tracking-[0.15em] uppercase text-white/80">
                    {item.category}
                  </span>
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.92)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors z-10"
                aria-label="Close lightbox"
              >
                <X size={24} />
              </button>
              <div className="relative max-h-[85vh] overflow-hidden">
                <Image
                  src={lightboxImage.src}
                  alt={lightboxImage.alt}
                  width={1200}
                  height={800}

                  className="object-contain max-h-[85vh] w-auto mx-auto"
                />
              </div>
              <p className="text-center mt-3 font-body text-xs text-white/40 tracking-widest uppercase">
                {lightboxImage.category}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
