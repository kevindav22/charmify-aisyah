import { FiArrowRight } from 'react-icons/fi';
import { carouselImg, profilData } from '@/data/statisData';
import HeroCarousel from './HeroCarousel';
import { Button, WhatsAppButton } from '@/components/ui/Button';

const HeroSection = () => {
  const pesanText = 'Halo kak izin bertanya tanya terkait Vluffy'
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-rose-50 via-pink-300 to-fuchsia-50 pb-16 pt-24">
      <div className="absolute -left-24 top-0 size-72 rounded-full bg-rose-200/20 blur-3xl" />
      <div className="absolute right-0 top-0 size-96 rounded-full bg-pink-200/20 blur-3xl" />

      <div className="container mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="flex flex-col-reverse items-center gap-14 lg:flex-row lg:justify-between">
          <div className="flex w-full max-w-2xl flex-col gap-6">
            <h1 className="text-3xl font-black leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
              Setiap Charm Menyimpan Cerita, Setiap Gelang Adalah Kenangan
            </h1>

            <p className="max-w-xl text-justify text-base leading-relaxed text-slate-600 md:text-lg">
              Hadirkan sentuhan personal dalam setiap penampilanmu dengan koleksi charm bracelet yang elegan, manis, dan penuh makna. Dirancang untuk menemani momen spesial yang ingin selalu kamu kenang.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/produk" className="group w-full sm:w-auto">
              Temukan Koleksi
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              <WhatsAppButton phone={profilData.phone} message={pesanText} className="w-full sm:w-auto"/>
            </div>
          </div>
          <HeroCarousel images={carouselImg.img} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;