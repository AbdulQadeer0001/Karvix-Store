import { Layout } from '@/components/Layout';
import { Zap, Target, Heart } from 'lucide-react';

const values = [
  { icon: Zap, title: 'Innovation', desc: 'We seek out the latest and greatest in tech, fashion, and sports.' },
  { icon: Target, title: 'Quality', desc: 'Every product meets our rigorous standards before it reaches you.' },
  { icon: Heart, title: 'Community', desc: 'Built by enthusiasts, for enthusiasts. Your passion drives us.' },
];

export default function About() {
  return (
    <Layout>
      <div className="container py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Karvix</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Karvix was born from a simple idea: one destination for the tech, apparel, and sports gear that
            actually makes a difference. We curate products that combine innovation with quality, so you can
            focus on what matters — living your best life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map(v => (
            <div key={v.title} className="rounded-xl border border-border/50 bg-card p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{v.title}</h3>
              <p className="text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            To empower people with carefully selected products that enhance their daily lives —
            whether it's the perfect gadget, the right outfit, or gear that pushes your limits.
            At Karvix, excellence isn't optional.
          </p>
        </div>
      </div>
    </Layout>
  );
}
