import { Layout } from '@/components/Layout';
import { ProductGrid } from '@/components/ProductGrid';

export default function Clothing() {
  return (
    <Layout>
      <ProductGrid
        query="product_type:Clothing"
        title="Clothing"
        description="Premium apparel for every occasion."
      />
    </Layout>
  );
}
