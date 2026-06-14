'use client';

import Image, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';
import { FaImages } from 'react-icons/fa';

type SafeImageProps = ImageProps & {
  useNativeImg?: boolean;
  fallbackIcon?: React.ReactNode;
  fallbackClassName?: string;
};

const SafeImage = ({ useNativeImg = false, fallbackIcon, fallbackClassName, className, src, alt, ...props }: SafeImageProps) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (hasError || !src) {
    return <div className="flex h-full w-full items-center justify-center">{fallbackIcon || <FaImages className={fallbackClassName || 'text-5xl text-slate-300'} />}</div>;
  }

  if (useNativeImg) {
    return <img src={typeof src === 'string' ? src : ''} alt={alt || 'Image'} draggable={false} className={className} onError={() => setHasError(true)} />;
  }

  return <Image {...props} src={src} alt={alt || 'Rental Mobil Solo Kawula Transport'} className={className} onError={() => setHasError(true)} />;
};

export default SafeImage;
