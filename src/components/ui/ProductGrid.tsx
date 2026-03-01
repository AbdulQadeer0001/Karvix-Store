import { useProducts } from '@/hooks/useProducts';
import { ProductCard } from '@/components/ProductCard';
import { Skeleton } from '@/components/ui/skeleton';
import { PackageOpen } from 'lucide-react';

interface ProductGridProps {
  query?: string;
  title: string;
  description?: string;
}

export function ProductGrid({ query, title, description }: ProductGridProps) {
  const { data: products, isLoading, error } = useProducts(query);

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">{title}</h1>
        {description && <p className="text-muted-foreground text-lg">{description}</p>}
      </div>

      {isLoading && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="aspect-square rounded-xl" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-9 w-full" />
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="text-center py-16">
          <p className="text-destructive">Failed to load products. Please try again.</p>
        </div>
      )}

      {!isLoading && !error && products && products.length === 0 && (
        <div className="text-center py-16">
          <PackageOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="font-display text-xl font-semibold mb-2">No products found</h2>
          <p className="text-muted-foreground">Check back soon — we're adding new items!</p>
        </div>
      )}

      {products && products.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
