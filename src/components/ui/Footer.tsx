import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50 mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-display text-sm font-bold text-primary-foreground">K</span>
              </div>
              <span className="font-display text-xl font-bold tracking-tight">Karvix</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your destination for premium tech, apparel, and sports gear. Curated for those who demand excellence.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/tech-gadgets" className="hover:text-foreground transition-colors">Tech & Gadgets</Link></li>
              <li><Link to="/clothing" className="hover:text-foreground transition-colors">Clothing</Link></li>
              <li><Link to="/sports" className="hover:text-foreground transition-colors">Sports</Link></li>
              <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Connect</h4>
            <p className="text-sm text-muted-foreground">Follow us for the latest drops and deals.</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Karvix. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
