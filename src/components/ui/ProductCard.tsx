import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Loader2 } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import type { ShopifyProduct } from '@/lib/shopify';
import { toast } from 'sonner';

export function ProductCard({ product }: { product: ShopifyProduct }) {
  const addItem = useCartStore(state => state.addItem);
  const isLoading = useCartStore(state => state.isLoading);
  const p = product.node;
  const variant = p.variants.edges[0]?.node;
  const image = p.images.edges[0]?.node;
  const price = p.priceRange.minVariantPrice;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success(`${p.title} added to cart`);
  };

  return (
    <Link to={`/product/${p.handle}`} className="group block">
      <div className="rounded-xl border border-border/50 bg-card overflow-hidden transition-all duration-300 hover:border-primary/30 hover:glow-sm">
        <div className="aspect-square bg-muted overflow-hidden">
          {image ? (
            <img
              src={image.url}
              alt={image.altText || p.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <ShoppingCart className="h-12 w-12" />
            </div>
          )}
        </div>
        <div className="p-4 space-y-2">
          <h3 className="font-display font-semibold text-sm truncate group-hover:text-primary transition-colors">{p.title}</h3>
          <p className="text-lg font-bold text-primary">
            {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
          </p>
          <Button
            onClick={handleAddToCart}
            disabled={isLoading || !variant?.availableForSale}
            size="sm"
            className="w-full"
          >
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><ShoppingCart className="w-4 h-4 mr-2" />Add to Cart</>}
          </Button>
        </div>
      </div>
    </Link>
  );
}
