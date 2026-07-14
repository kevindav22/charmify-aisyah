'use client';

import SafeImage from '@/components/ui/SafeImage';
import { FiHeart, FiStar } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { formatRupiah, slugify } from '@/lib/utils';
import type { Product } from '@/data/products';
// Import komponen Button yang Anda miliki
import { Button } from '@/components/ui/Button'; // Sesuaikan path import button Anda jika berbeda

type Props = {
  product: Product;
  onOrder: (product: Product) => void;
};

const ProductCard = ({ product, onOrder }: Props) => {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-rose-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-square overflow-hidden">
        <SafeImage 
          src={product.image} 
          alt={product.name} 
          fill 
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" 
          className="object-cover transition duration-700 group-hover:scale-105" 
        />

        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-rose-600 backdrop-blur">{product.badge}</span>

        <button className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/90 text-slate-700 backdrop-blur transition hover:text-rose-500">
          <FiHeart />
        </button>

        <div className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur">{product.code}</div>
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center gap-1 text-amber-400">
          {[...Array(5)].map((_, index) => (
            <FiStar key={index} className="fill-current" />
          ))}
          <span className="ml-2 text-sm text-slate-500">(4.9)</span>
        </div>

        <h3 className="mb-2 text-lg font-bold text-slate-900">{product.name}</h3>

        <p className="mb-5 text-xl font-black text-rose-500">{formatRupiah(product.price)}</p>

        <div className="flex gap-2">
          {/* Menggunakan Button Kustom dengan variant secondary untuk Detail */}
          <Button 
            href={`/product/${slugify(product.name)}`} 
            variant="secondary" 
            className="flex-1 text-sm py-2 px-4"
          >
            Detail
          </Button>

          {/* Menggunakan Button Kustom dengan variant primary untuk Pesan */}
          <Button
            onClick={() => onOrder(product)}
            variant="primary"
            className="flex-1 text-sm py-2 px-4"
          >
            <FaWhatsapp />
            Pesan
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;