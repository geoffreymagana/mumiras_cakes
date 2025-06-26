import Link from 'next/link';
import { Logo } from './logo';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Instagram, Facebook } from 'lucide-react';

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.95-6.43-2.88-1.59-1.94-2.2-4.42-1.8-6.83.39-2.35 1.85-4.59 3.99-5.74.57-.3 1.16-.52 1.78-.69.01-1.67-.02-3.34.01-5.02.01-.19.01-.38.03-.57.21-.04.42-.04.63-.04 1.39.01 2.79.01 4.18.01zm-1.5 5.92c-.39-.01-.78-.01-1.17-.01-.03 1.83.01 3.65-.01 5.48-.02.44-.06.88-.13 1.32-.16 1.03-.6 2.01-1.25 2.87-1.11 1.48-2.73 2.28-4.49 2.16-1.54-.1-2.9-.85-3.82-2.11-.82-1.12-1.12-2.42-1.01-3.75.11-1.34.7-2.61 1.73-3.62 1.14-1.12 2.6-1.68 4.16-1.61.44.02.88.07 1.31.15.02-1.78-.01-3.57.01-5.35z"/>
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
