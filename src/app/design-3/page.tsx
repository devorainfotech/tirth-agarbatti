import Design3Hero from "@/components/design3/Design3Hero";
import Design3BrandStory from "@/components/design3/Design3BrandStory";
import Design3Craftsmanship from "@/components/design3/Design3Craftsmanship";
import Design3Products from "@/components/design3/Design3Products";
import Design3FragranceExperience from "@/components/design3/Design3FragranceExperience";
import Design3WhyTirth from "@/components/design3/Design3WhyTirth";
import Design3Heritage from "@/components/design3/Design3Heritage";
import Design3Gallery from "@/components/design3/Design3Gallery";
import Design3CTA from "@/components/design3/Design3CTA";

export default function Design3HomePage() {
  return (
    <>
      {/* 1. HERO SECTION (Dark Navy Cinematic Advert) */}
      <Design3Hero />

      {/* 2. BRAND STORY (Warm Ivory Editorial) */}
      <Design3BrandStory />

      {/* 3. CRAFTSMANSHIP (Dark Navy Editorial) */}
      <Design3Craftsmanship />

      {/* 4. PRODUCT COLLECTION (Warm Ivory Image-First Catalogue) */}
      <Design3Products />

      {/* 5. FRAGRANCE EXPERIENCE (Dark Navy Tall Editorial Tiles) */}
      <Design3FragranceExperience />

      {/* 6. WHY TIRTH (Warm Ivory Horizontal Feature Rows) */}
      <Design3WhyTirth />

      {/* 7. HERITAGE SECTION (Dark Navy Subtle Gold Mandala) */}
      <Design3Heritage />

      {/* 8. VISUAL GALLERY (Warm Ivory Asymmetric Editorial Grid) */}
      <Design3Gallery limit={3} />

      {/* 9. PREMIUM CTA (Dark Navy Cinematic Final Action) */}
      <Design3CTA />
    </>
  );
}
