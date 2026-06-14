'use client';

import Link from 'next/link';
import ProductGrid from './ProductGrid';
import type { Product } from '@/data/products';
import { FiArrowRight } from 'react-icons/fi';

type Props = {
  badge?: string;
  title: string;
  description?: string;
  products: Product[];
  onOrder: (product: Product) => void;
  showViewAll?: boolean;
};

const ProductSection = ({ badge, title, description, products, onOrder, showViewAll = false }: Props) => {
  return (
    <section className="bg-white">
      <div className="container mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 md:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4">
            {badge && <span className="inline-flex w-fit rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-medium text-rose-600">{badge}</span>}

            <div className="max-w-3xl">
              <h2 className="text-2xl font-black text-slate-900 md:text-3xl lg:text-4xl">{title}</h2>

              {description && <p className="mt-3 text-slate-600 md:text-lg">{description}</p>}
            </div>
          </div>

          {showViewAll && (
            <Link href="/store" className="group inline-flex h-12 shrink-0 items-center gap-2 rounded-xl border border-rose-200 bg-white px-5 font-semibold text-slate-700 transition-all duration-300 hover:border-rose-300 hover:bg-rose-50">
              Lihat Semua
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        <ProductGrid products={products} onOrder={onOrder} />
      </div>
    </section>
  );
};

export default ProductSection;
