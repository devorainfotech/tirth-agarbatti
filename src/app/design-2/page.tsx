import Design2Hero from "@/components/design2/Design2Hero";
import Design2BrandIntro from "@/components/design2/Design2BrandIntro";
import Design2Products from "@/components/design2/Design2Products";
import Design2Fragrance from "@/components/design2/Design2Fragrance";
import Design2Devotion from "@/components/design2/Design2Devotion";
import Design2Showcase from "@/components/design2/Design2Showcase";
import Design2QualityPillars from "@/components/design2/Design2QualityPillars";
import Design2Gallery from "@/components/design2/Design2Gallery";
import Design2BusinessCTA from "@/components/design2/Design2BusinessCTA";

export default function Design2HomePage() {
  return (
    <>
      <Design2Hero />
      <Design2BrandIntro />
      <Design2Products />
      <Design2Fragrance />
      <Design2Devotion />
      <Design2Showcase />
      <Design2QualityPillars />
      <Design2Gallery limit={3} />
      <Design2BusinessCTA />
    </>
  );
}
