import CustomizeBuilder from '@/components/costumize/CustomizeBuilder';
import CTASection from '@/components/landing/Cta';
import StepCustomSection from '@/components/landing/StepCustom';

const CustomizePage = () => {
  return (
    <section className="bg-gradient-to-b from-rose-50 via-white to-white">
      <div className="container mx-auto flex max-w-7xl flex-col gap-10 px-5 pt-28 pb-12 md:px-8 lg:px-12 lg:pt-36">
        <div className="flex flex-col gap-4">
          <span className="inline-flex w-fit rounded-full border border-rose-200 bg-white px-4 py-2 text-sm font-medium text-rose-600">Design Your Own Bracelet</span>

          <div className="max-w-3xl">
            <h1 className="text-3xl font-black leading-tight text-slate-900 md:text-4xl lg:text-5xl">Mulai susun sesuka hatimu</h1>

            <p className="mt-4 text-slate-600 md:text-lg">Pilih charm favoritmu, atur urutannya, lalu simpan hasil desain dan kirimkan ke WhatsApp untuk diproses oleh tim kami.</p>
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
