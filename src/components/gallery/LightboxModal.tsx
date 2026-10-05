"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/data/gallery";

interface LightboxProps {
  item: GalleryItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function LightboxModal({ item, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 bg-[#17130F]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full bg-[#FFFDF7]/10 hover:bg-[#D9A52B] text-[#FFFDF7] hover:text-[#17130F] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D9A52B]"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-8 p-3 rounded-full bg-[#FFFDF7]/10 hover:bg-[#D9A52B] text-[#FFFDF7] hover:text-[#17130F] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D9A52B]"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        className="absolute right-4 sm:right-8 p-3 rounded-full bg-[#FFFDF7]/10 hover:bg-[#D9A52B] text-[#FFFDF7] hover:text-[#17130F] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D9A52B]"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Content Box */}
      <div className="max-w-4xl w-full flex flex-col items-center space-y-4">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[75vh] rounded-2xl overflow-hidden border border-[#D9A52B]/40 shadow-2xl bg-black">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="text-center space-y-1 max-w-xl">
          <span className="text-xs font-semibold text-[#F2C94C] uppercase tracking-widest">
            {item.category}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FFFDF7]">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#FFFDF7]/70 font-light">
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
