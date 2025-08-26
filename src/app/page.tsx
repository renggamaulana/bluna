import Combinations from "@/components/Combinations";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/Hero";
import OurProducts from "@/components/OurProducts";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurProducts/>
      <Combinations/>
      <Testimonial/>
      <FAQ/>
    </>
  );
}
