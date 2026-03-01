import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/Layout';
import { ArrowRight, Cpu, Shirt, Trophy, Zap, Shield, Truck } from 'lucide-react';

const categories = [
  { to: '/tech-gadgets', label: 'Tech & Gadgets', icon: Cpu, desc: 'Cutting-edge devices and accessories' },
  { to: '/clothing', label: 'Clothing', icon: Shirt, desc: 'Premium apparel for every occasion' },
  { to: '/sports', label: 'Sports', icon: Trophy, desc: 'Gear up for peak performance' },
];

const values = [
  { icon: Zap, title: 'Curated Quality', desc: 'Every product hand-picked for excellence' },
  { icon: Shield, title: 'Secure Checkout', desc: 'Powered by Shopify for safe transactions' },
  { icon: Truck, title: 'Fast Shipping', desc: 'Quick delivery right to your door' },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="container relative py-24 md:py-36">
          <div className="max-w-2xl space-y-6">
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              Elevate Your <span className="text-gradient">Lifestyle</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Premium tech, apparel, and sports gear — curated for those who demand more.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="glow-sm">
                <Link to="/tech-gadgets">Shop Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map(cat => (
            <Link
              key={cat.to}
              to={cat.to}
              className="group rounded-xl border border-border/50 bg-card p-8 text-center transition-all duration-300 hover:border-primary/30 hover:glow-sm"
            >
              <cat.icon className="h-12 w-12 mx-auto mb-4 text-primary transition-transform duration-300 group-hover:scale-110" />
              <h3 className="font-display text-xl font-semibold mb-2">{cat.label}</h3>
              <p className="text-sm text-muted-foreground">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Value props */}
      <section className="border-t border-border/50 bg-card/30">
        <div className="container py-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">Why Karvix?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map(v => (
              <div key={v.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
