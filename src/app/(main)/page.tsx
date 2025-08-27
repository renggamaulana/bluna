import Combinations from "@/components/landing/Combinations";
import FAQ from "@/components/landing/FAQ";
import HeroSection from "@/components/landing/Hero";
import OurProducts from "@/components/landing/OurProducts";
import Testimonial from "@/components/landing/Testimonial";

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
