import ProductCard from './ProductCard';
import type { Product } from '@/data/products';

type Props = {
  products: Product[];
  onOrder: (product: Product) => void;
};

const ProductGrid = ({ products, onOrder }: Props) => {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.code} product={product} onOrder={onOrder} />
      ))}
    </div>
  );
};

export default ProductGrid;
