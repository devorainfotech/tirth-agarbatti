import Hero from "@/components/home/Hero";
import BrandIntro from "@/components/home/BrandIntro";
import ProductCollection from "@/components/home/ProductCollection";
import FragranceSection from "@/components/home/FragranceSection";
import DevotionSection from "@/components/home/DevotionSection";
import ProductShowcase from "@/components/home/ProductShowcase";
import GalleryPreview from "@/components/home/GalleryPreview";
import DistributorCTA from "@/components/home/DistributorCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <ProductCollection />
      <FragranceSection />
      <DevotionSection />
      <ProductShowcase />
      <GalleryPreview />
      <DistributorCTA />
    </>
  );
}
