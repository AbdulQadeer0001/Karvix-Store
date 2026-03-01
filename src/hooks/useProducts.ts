import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchProductByHandle } from '@/lib/shopify';

export function useProducts(query?: string) {
  return useQuery({
    queryKey: ['products', query],
    queryFn: () => fetchProducts(50, query),
  });
}

export function useProductByHandle(handle: string) {
  return useQuery({
    queryKey: ['product', handle],
    queryFn: () => fetchProductByHandle(handle),
    enabled: !!handle,
  });
}
