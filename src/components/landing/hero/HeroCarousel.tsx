'use client';

import { useEffect, useState } from 'react';
import SafeImage from '@/components/ui/SafeImage';

interface HeroCarouselProps {
  images: string[];
}

const HeroCarousel = ({ images }: HeroCarouselProps) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  const prev = active === 0 ? images.length - 1 : active - 1;
  const next = active === images.length - 1 ? 0 : active + 1;

  return (
    <div className="relative mx-auto flex h-72 w-80 items-center justify-center md:h-80 md:w-96 lg:h-96 lg:w-[28rem]">
      <div className="absolute left-4 top-1/2 z-10 h-48 w-32 -translate-y-1/2 -rotate-12 overflow-hidden rounded-3xl bg-white opacity-90 shadow-xl transition-all duration-500 md:h-56 md:w-36 lg:h-64 lg:w-40">
        <SafeImage src={images[prev]} fill quality={60} sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 28rem" alt="Previous" className="object-cover" />
      </div>

      <div className="relative z-30 h-64 w-44 overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-rose-100 transition-all duration-500 md:h-72 md:w-52 lg:h-80 lg:w-60">
        <SafeImage src={images[active]} fill quality={60} sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 28rem" alt="Current" className="object-cover" />
      </div>

      <div className="absolute right-4 top-1/2 z-10 h-48 w-32 -translate-y-1/2 rotate-12 overflow-hidden rounded-3xl bg-white opacity-90 shadow-xl transition-all duration-500 md:h-56 md:w-36 lg:h-64 lg:w-40">
        <SafeImage src={images[next]} fill quality={60} sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 28rem" alt="Next" className="object-cover" />
      </div>

      <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button key={index} onClick={() => setActive(index)} className={`rounded-full transition-all duration-300 ${active === index ? 'h-2 w-8 bg-rose-500' : 'size-2 bg-rose-200'}`} />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
