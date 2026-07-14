'use client';

import { useEffect, useMemo, useState, useCallback } from 'react';
import SafeImage from '@/components/ui/SafeImage';
import { TypesCaraousel } from '@/types/globalTypes';

function getOffset(index: number, active: number, length: number) {
  let diff = index - active;
  if (diff > length / 2) diff -= length;
  if (diff < -length / 2) diff += length;
  return diff;
}

const VISIBLE_RANGE = 2;

const getCardStyle = (offset: number): React.CSSProperties => {
  if (offset === 0) {
    return {
      transform: 'translate(-50%, -50%) translateX(0) rotate(0deg) scale(1)',
      opacity: 1,
      zIndex: 30,
    };
  }
  if (offset === -1) {
    return {
      transform: 'translate(-50%, -50%) translateX(-6.5rem) rotate(-32deg) scale(0.85)',
      opacity: 0.9,
      zIndex: 10,
    };
  }
  if (offset === 1) {
    return {
      transform: 'translate(-50%, -50%) translateX(6.5rem) rotate(32deg) scale(0.85)',
      opacity: 0.9,
      zIndex: 10,
    };
  }
  const dir = offset < 0 ? -1 : 1;
  return {
    transform: `translate(-50%, -50%) translateX(${dir * 9}rem) rotate(${dir * 12}deg) scale(0.7)`,
    opacity: 0,
    zIndex: 0,
  };
};

const HeroCarousel = ({ images }: { images: TypesCaraousel['img'] }) => {
  const [active, setActive] = useState(0);
  const length = images?.length || 0;

  useEffect(() => {
    if (length <= 1) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % length);
    }, 8000);
    return () => clearInterval(interval);
  }, [length]);

  const goTo = useCallback((index: number) => setActive(index), []);

  const visibleItems = useMemo(() => {
    if (length === 0) return [];
    const items: { src: string; index: number; offset: number }[] = [];
    for (let d = -VISIBLE_RANGE; d <= VISIBLE_RANGE; d++) {
      const index = (((active + d) % length) + length) % length;
      items.push({ src: images[index], index, offset: d });
    }
    return items.filter(
      (item, i, arr) => arr.findIndex((x) => x.index === item.index) === i
    );
  }, [active, images, length]);

  if (length === 0) return null;

  return (
    <div className="relative mx-auto h-72 w-80 md:h-80 md:w-96 lg:h-96 lg:w-[28rem]">
      {visibleItems.map(({ src, index, offset }) => {
        const isActive = offset === 0;
        return (
          <div
            key={index}
            className={`absolute left-1/2 top-1/2 overflow-hidden bg-white shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isActive
                ? 'h-64 w-44 rounded-[2rem] ring-1 ring-rose-100 md:h-72 md:w-52 lg:h-80 lg:w-60'
                : 'h-48 w-32 rounded-3xl md:h-56 md:w-36 lg:h-64 lg:w-40'
            }`}
            style={getCardStyle(offset)}
          >
            <SafeImage
              src={src}
              fill
              quality={60}
              sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 28rem"
              alt={isActive ? 'Current' : 'Slide'}
              className="object-cover"
              priority={isActive}
              loading={isActive ? undefined : 'lazy'}
            />
          </div>
        );
      })}

      <div className="absolute -bottom-4 left-1/2 z-40 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`rounded-full transition-all duration-300 ${
              active === index ? 'h-2 w-8 bg-rose-500' : 'size-2 bg-rose-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;