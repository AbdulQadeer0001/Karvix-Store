import { Layout } from '@/components/Layout';
import { ProductGrid } from '@/components/ProductGrid';

export default function Sports() {
  return (
    <Layout>
      <ProductGrid
        query="product_type:Sports"
        title="Sports"
        description="Gear up for peak performance."
      />
    </Layout>
  );
}
