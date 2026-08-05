import CustomizeBuilder from '@/components/costumize/CustomizeBuilder';
import CTASection from '@/components/landing/Cta';
import StepCustomSection from '@/components/landing/StepCustom';

const CustomizePage = () => {
  return (
    <section className="bg-white pt-18">
      <CustomizeBuilder />
      <StepCustomSection />
      <CTASection />
    </section>
  );
};

export default CustomizePage;
