import { Layout } from '@/components/Layout';
import { ProductGrid } from '@/components/ProductGrid';

export default function TechGadgets() {
  return (
    <Layout>
      <ProductGrid
        query="product_type:Tech"
        title="Tech & Gadgets"
        description="Discover cutting-edge devices and accessories."
      />
    </Layout>
  );
}
