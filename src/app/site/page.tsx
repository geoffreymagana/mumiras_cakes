import { Hero } from '@/components/sections/hero';
import { CakeCarousel } from '@/components/sections/cake-carousel';
import { BrandStory } from '@/components/sections/brand-story';
import { ShopPreview } from '@/components/sections/shop-preview';
import { Testimonials } from '@/components/sections/testimonials';
import { CustomOrderForm } from '@/components/sections/custom-order-form';
import { BlogShowcase } from '@/components/sections/blog-showcase';
import { AppPromo } from '@/components/sections/app-promo';
import { Faq } from '@/components/sections/faq';
import { ContactUs } from '@/components/sections/contact-us';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CakeCarousel />
      <BrandStory />
      <ShopPreview />
      <Testimonials />
      <AppPromo />
      <BlogShowcase />
      <Faq />
      <CustomOrderForm />
      <ContactUs />
    </>
  );
}
