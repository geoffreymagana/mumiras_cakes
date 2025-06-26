import Link from 'next/link';
import { Logo } from './logo';
import { Button } from './ui/button';
import { ShoppingBag, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export function Header() {
  const navLinks = [
    { name: 'Our Story', href: '#about' },
    { name: 'Cakes', href: '#cakes' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Order', href: '#custom-order' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="#" aria-label="Home">
            <Logo />
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" aria-label="Shopping cart">
            <ShoppingBag />
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-6 pt-10">
                    <Logo />
                    {navLinks.map((link) => (
                        <Link
                        key={link.name}
                        href={link.href}
                        className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
                        >
                        {link.name}
                        </Link>
                    ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
