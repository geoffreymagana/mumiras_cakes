import Link from 'next/link';
import { Logo } from './logo';
import { Button } from './ui/button';
import { ShoppingBag, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from './ui/sheet';

export function Header() {
  const navLinks = [
    { name: 'Our Story', href: '#about' },
    { name: 'Cakes', href: '#cakes' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Order', href: '#custom-order' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
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

          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
            <Link href="/admin">Admin</Link>
          </Button>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Main navigation links for the website.
                  </SheetDescription>
                </SheetHeader>
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
                    <div className="pt-6 border-t mt-6">
                      <Button asChild className="w-full">
                        <Link href="/admin">Admin Dashboard</Link>
                      </Button>
                    </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
