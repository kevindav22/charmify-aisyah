import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { slugify } from '@/lib/utils';

import ProductDetailSection from '@/components/products/ProductDetailSection';
import RelatedProducts from '@/components/products/RelatedProduct';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;

  const product = products.find((item) => slugify(item.name) === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductDetailSection product={product} />
      <RelatedProducts currentProduct={product} />
    </>
  );
}
