"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/data/gallery";

interface Design3LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export default function Design3Lightbox({ item, items, onClose, onSelect }: Design3LightboxProps) {
  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelect(items[currentIndex - 1]);
    } else {
      onSelect(items[items.length - 1]);
    }
  }, [currentIndex, items, onSelect]);

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onSelect(items[currentIndex + 1]);
    } else {
      onSelect(items[0]);
    }
  }, [currentIndex, items, onSelect]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [item, onClose, handlePrev, handleNext]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0D1629]/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-[#F8F4EA] hover:text-[#C8A45D] p-3 rounded-full bg-[#172746]/80 hover:bg-[#C8A45D] hover:text-[#0D1629] border border-[#C8A45D]/40 transition-all focus:outline-none"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 text-[#F8F4EA] p-3 rounded-full bg-[#172746]/80 hover:bg-[#C8A45D] hover:text-[#0D1629] border border-[#C8A45D]/40 transition-all focus:outline-none"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 sm:left-auto right-4 sm:right-8 text-[#F8F4EA] p-3 rounded-full bg-[#172746]/80 hover:bg-[#C8A45D] hover:text-[#0D1629] border border-[#C8A45D]/40 transition-all focus:outline-none"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content Container */}
      <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center space-y-4">
        <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full max-h-[70vh] overflow-hidden border border-[#C8A45D]/40 bg-[#0D1629] shadow-2xl">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        <div className="text-center text-[#F8F4EA] space-y-1 max-w-xl mx-auto">
          <span className="text-[10px] font-sans font-medium tracking-[0.3em] text-[#C8A45D] uppercase">
            {item.category} — TIRTH AGARBATTI
          </span>
          <h3 className="font-serif text-2xl font-normal text-[#F8F4EA]">
            {item.title}
          </h3>
          <p className="text-xs text-[#A9A49A] font-sans font-light leading-relaxed">
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
