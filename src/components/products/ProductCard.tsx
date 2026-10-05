import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-[#FFF8E8] rounded-2xl overflow-hidden border border-[#D9A52B]/20 hover:border-[#D9A52B]/60 transition-all duration-500 hover:shadow-xl flex flex-col h-full">
      {/* Product Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#17130F]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17130F]/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 bg-[#17130F]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#D9A52B]/40 flex items-center gap-1.5 shadow-md">
          <Sparkles className="w-3 h-3 text-[#F2C94C]" />
          <span className="text-[10px] font-semibold tracking-wider text-[#FFFDF7] uppercase">
            {product.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#17130F] group-hover:text-[#D97706] transition-colors leading-snug">
            {product.name}
          </h3>
          <p className="text-xs font-semibold text-[#D9A52B] tracking-wider uppercase">
            {product.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-[#7A6A57] line-clamp-2 leading-relaxed font-light">
            {product.description}
          </p>
        </div>

        {/* Footer Actions & Packaging Tag */}
        <div className="pt-3 border-t border-[#D9A52B]/20 flex items-center justify-between gap-2">
          <span
            className="text-[10px] sm:text-[11px] font-medium text-[#7A6A57] uppercase tracking-wider truncate max-w-[55%]"
            title={product.packaging}
          >
            {product.packaging}
          </span>

          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D97706] group-hover:text-[#17130F] uppercase tracking-wider transition-colors shrink-0"
          >
            <span>View Product</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
