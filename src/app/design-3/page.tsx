import Design3Hero from "@/components/design3/Design3Hero";
import Design3BrandStory from "@/components/design3/Design3BrandStory";
import Design3Products from "@/components/design3/Design3Products";
import Design3FragranceExperience from "@/components/design3/Design3FragranceExperience";
import Design3WhyTirth from "@/components/design3/Design3WhyTirth";
import Design3Heritage from "@/components/design3/Design3Heritage";
import Design3Gallery from "@/components/design3/Design3Gallery";
import Design3CTA from "@/components/design3/Design3CTA";

export default function Design3HomePage() {
  return (
    <>
      <Design3Hero />
      <Design3BrandStory />
      <Design3Products />
      <Design3FragranceExperience />
      <Design3WhyTirth />
      <Design3Heritage />
      <Design3Gallery limit={5} />
      <Design3CTA />
    </>
  );
}
