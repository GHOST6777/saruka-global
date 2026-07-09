import ProductCard from "./ProductCard";
import { Product } from "@/app/types/product";

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
}

export default function ProductGrid({
  products,
  columns = 3,
}: ProductGridProps) {
  const gridClass =
    columns === 4
      ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      : columns === 2
      ? "grid gap-6 sm:grid-cols-2"
      : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={gridClass}>
      {products.map((product) => (
        <ProductCard
          key={product.name}
          {...product}
        />
      ))}
    </div>
  );
}