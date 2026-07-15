import { FiArrowRight, FiPenTool, FiShoppingBag } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-100 to-fuchsia-50">
      <div className="container mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 px-6 py-8 text-white md:px-10 md:py-10">
          <div className="absolute -right-20 -top-20 size-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-white/10" />

          <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              Lengkapi Kecantikanmu
            </span>

            <h2 className="text-xl leading-tight md:text-2xl lg:text-3xl">
              Temukan Pilihanmu sekarang atau buat desain charm bracelet yang benar-benar personal untuk momen spesialmu!
            </h2>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button
                href="/produk"
                variant="plain"
                className="group w-full sm:w-auto"
              >
                <FiShoppingBag />
                <span>Belanja Koleksi</span>
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                href="/customize"
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/20 sm:w-auto"
              >
                <FiPenTool />
                <span>Mulai Desain Sendiri</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;