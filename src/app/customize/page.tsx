import CustomizeBuilder from '@/components/costumize/CustomizeBuilder';
import CTASection from '@/components/landing/Cta';
import StepCustomSection from '@/components/landing/StepCustom';

const CustomizePage = () => {
  return (
    <section className="bg-gradient-to-b from-rose-50 to-rose-100 via-rose-150">
      <div className="container mx-auto flex max-w-7xl flex-col gap-10 px-5 pt-28 pb-6 md:px-8 lg:px-12 lg:pt-28">
        <div className="flex flex-col gap-4">

          <div className="max-w-3xl">
            <h1 className="text-3xl font-black leading-tight text-slate-900 md:text-4xl lg:text-5xl">Mulai Susun Sesukamu</h1>

            <p className="mt-2 text-slate-600 md:text-lg">Jika masih bingung caranya, Panduan lengkap sudah ada dibawah</p>
          </div>
        </div>
      </div>
      <CustomizeBuilder />
      <StepCustomSection />
      <CTASection />
    </section>
  );
};

export default CustomizePage;
