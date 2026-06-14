import Link from 'next/link';
import { FiArrowRight, FiPenTool, FiShoppingBag } from 'react-icons/fi';

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-100 to-fuchsia-50">
      <div className="container mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 px-6 py-8 text-white md:px-10 md:py-10">
          <div className="absolute -right-20 -top-20 size-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-white/10" />

          <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">Saatnya Menciptakan Bracelet Versimu Sendiri</span>

            <h2 className="text-2xl font-semibold leading-tight md:text-3xl lg:text-4xl">
              Temukan Pilihanmu sekarang atau buat desain charm bracelet yang benar-benar personal untuk momen spesialmu!
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <Link href="/produk" className="group inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 font-semibold text-rose-600 transition-all duration-300 hover:-translate-y-0.5">
                <FiShoppingBag />

                <span>Belanja Koleksi</span>

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link href="/customize" className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20">
                <FiPenTool />
                <span>Mulai Desain Sendiri</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
