import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[500px] lg:h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 to-[#FFF9F2]">
      <div className="absolute inset-0 z-0">
        {/* Animated sprinkles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-[float_8s_ease-in-out_infinite_1s]"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-secondary rounded-full animate-[float-fast_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-accent rounded-full animate-[float_10s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-destructive rounded-full animate-[float-fast_7s_ease-in-out_infinite_2s]"></div>
        
        {/* Animated frosting swirls (as SVGs) */}
        <svg className="absolute w-32 h-32 top-10 left-10 text-primary/30 opacity-50 animate-[float_12s_ease-in-out_infinite]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 36.8383 5.9234 25.0215 15.5 17.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        </svg>
        <svg className="absolute w-40 h-40 bottom-10 right-10 text-accent/50 opacity-50 animate-[float-fast_9s_ease-in-out_infinite_1s]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.16992 58.05C-2.43008 38.35 4.86992 14.05 24.5699 2.45001C44.2699 -9.14999 68.5699 -1.85001 80.1699 17.85C91.7699 37.55 84.4699 61.85 64.7699 73.45C45.0699 85.05 20.7699 77.75 9.16992 58.05Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl font-extrabold font-headline tracking-tight text-foreground sm:text-6xl lg:text-8xl">
          Baking Your Day Better
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 sm:text-xl">
          Experience a slice of heaven with Mumira's handcrafted cakes, made with the finest ingredients and a sprinkle of love. Perfect for every occasion, or just because.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="text-lg py-7 px-8">
            <a href="#custom-order">Order a Custom Cake</a>
          </Button>
          <Button asChild variant="secondary" size="lg" className="text-lg py-7 px-8">
            <a href="#cakes">Explore Flavors</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
