import Link from 'next/link';
import { Logo } from './logo';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Instagram, Facebook } from 'lucide-react';

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 12.31 10v6.23a2.42 2.42 0 0 0 2.42 2.42h.06a2.39 2.39 0 0 0 2.37-2.27V10.1a7.83 7.83 0 0 0 4.29-4.28C22.93 5.31 22.42 5.32 16.6 5.82zM7.18 10.63a3.53 3.53 0 1 0 0-7.06 3.53 3.53 0 0 0 0 7.06z"/>
    </svg>
  );

export function Footer() {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Our Story', href: '#about' },
    { name: 'Signature Cakes', href: '#cakes' },
    { name: 'Custom Orders', href: '#custom-order' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/61557173366960' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/mumiras_cakes?igsh=a21iczF2bjZxdGtn' },
    { name: 'Tiktok', icon: TiktokIcon, href: 'https://www.tiktok.com/@mumiras_cakes?_t=ZM-8xXFE29G84U&_r=1' },
  ];

  return (
    <footer className="bg-card" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Logo />
            <p className="text-sm leading-6 text-muted-foreground">
              Handcrafted cakes baked with love and the finest ingredients for every memorable occasion.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 font-headline text-foreground">Navigation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navLinks.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-primary">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                 <h3 className="text-sm font-semibold leading-6 font-headline text-foreground">Legal</h3>
                 <ul role="list" className="mt-6 space-y-4">
                    <li><a href="#" className="text-sm leading-6 text-muted-foreground hover:text-primary">Privacy Policy</a></li>
                    <li><a href="#" className="text-sm leading-6 text-muted-foreground hover:text-primary">Terms of Service</a></li>
                 </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
               <div>
                  <h3 className="text-sm font-semibold leading-6 font-headline text-foreground">Stay in touch</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">Subscribe to our newsletter for special offers and new cake alerts!</p>
                  <form className="mt-4 flex flex-col sm:flex-row gap-2">
                    <label htmlFor="footer-email" className="sr-only">Email address</label>
                    <Input
                      id="footer-email"
                      type="email"
                      placeholder="Enter your email"
                      className="flex-grow"
                    />
                    <Button type="submit">Subscribe</Button>
                  </form>
               </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border/80 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-muted-foreground">&copy; {new Date().getFullYear()} Mumira's Cakes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
