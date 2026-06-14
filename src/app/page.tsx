import BuildBraceletSection from "@/components/landing/StepCustom";
import CustomDesignSection from "@/components/landing/CustomDesain";
import FeaturedProducts from "@/components/landing/FeaturedProducts";
import Hero from "@/components/landing/hero/Hero";
import WhyChooseUsSection from "@/components/landing/Keunggulan";
import TestimonialSection from "@/components/landing/Testimonials";
import CTASection from "@/components/landing/Cta";
import CollectionSection from "@/components/landing/Collection";

export default function Home() { 
  return (
    <>
      <Hero />
      <WhyChooseUsSection />
      <CollectionSection />
      <FeaturedProducts />
      <CustomDesignSection />
      <BuildBraceletSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
}