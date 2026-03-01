import { Link } from 'react-router-dom';
import { NavLink } from '@/components/NavLink';
import { CartDrawer } from '@/components/CartDrawer';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/tech-gadgets', label: 'Tech & Gadgets' },
  { to: '/clothing', label: 'Clothing' },
  { to: '/sports', label: 'Sports' },
  { to: '/about', label: 'About Us' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="font-display text-sm font-bold text-primary-foreground">K</span>
          </div>
          <span className="font-display text-xl font-bold tracking-tight">Karvix</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className="px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground rounded-md"
              activeClassName="text-foreground bg-secondary"
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CartDrawer />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-border/50 bg-background p-4 space-y-1">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className="block px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground rounded-md"
              activeClassName="text-foreground bg-secondary"
              end={link.to === '/'}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
