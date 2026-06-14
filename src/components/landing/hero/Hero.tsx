import Link from 'next/link';
import { HiSparkles } from 'react-icons/hi2';
import { FiArrowRight, FiHeart } from 'react-icons/fi';
import { CarouselImg } from '@/data/statisData';
import HeroCarousel from './HeroCarousel';
import { FaWhatsapp } from 'react-icons/fa6';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-300 to-fuchsia-50">
      <div className="absolute -left-24 top-0 size-72 rounded-full bg-rose-200/30 blur-3xl" />
      <div className="absolute right-0 top-0 size-96 rounded-full bg-pink-200/20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 size-72 rounded-full bg-amber-100/30 blur-3xl" />

      <div className="container mx-auto max-w-7xl px-5 pt-28 pb-16 md:px-8 md:pt-32 lg:px-12 lg:pt-36">
        <div className="flex flex-col-reverse items-center gap-14 lg:flex-row lg:justify-between">
          <div className="w-full max-w-2xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-rose-600 shadow-sm backdrop-blur">
              <HiSparkles className="size-4" />
              Kenapa Charmify?
            </span>

            <h1 className="mb-6 text-3xl font-black leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl">Setiap Charm Menyimpan Cerita, Setiap Gelang Adalah Kenangan</h1>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              Hadirkan sentuhan personal dalam setiap penampilanmu dengan koleksi charm bracelet yang elegan, manis, dan penuh makna. Dirancang untuk menemani momen spesial yang ingin selalu kamu kenang.
            </p>

            <div className="mb-8 flex flex-wrap gap-4">
              <Link
                href="/produk"
                className="group inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 px-6 font-semibold text-white shadow-lg shadow-rose-200 transition-all hover:-translate-y-0.5"
              >
                Temukan Koleksi
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link href="/koleksi" className="inline-flex h-12 items-center gap-2 rounded-xl border border-rose-200 bg-white/80 px-6 font-semibold text-slate-700 backdrop-blur transition hover:border-rose-300 hover:bg-white">
                <FaWhatsapp />
                Hubungi Kami
              </Link>
            </div>
          </div>

          <HeroCarousel images={CarouselImg.img} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
