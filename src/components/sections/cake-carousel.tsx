"use client";

import * as React from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CakeCard } from "@/components/cake-card";
import { Button } from "@/components/ui/button";

const signatureCakes = [
  {
    name: "Velvet Dream",
    description: "Classic red velvet with a rich cream cheese frosting, a timeless favorite.",
    price: "Ksh 5,500",
    imageSrc: "https://placehold.co/400x300.png",
    imageHint: "red velvet cake"
  },
  {
    name: "Lemon Zest Delight",
    description: "A light and airy sponge with tangy lemon curd and a sweet meringue topping.",
    price: "Ksh 5,000",
    imageSrc: "https://placehold.co/400x300.png",
    imageHint: "lemon meringue cake"
  },
  {
    name: "Chocolate Decadence",
    description: "Layers of rich dark chocolate ganache and moist chocolate cake.",
    price: "Ksh 6,000",
    imageSrc: "https://placehold.co/400x300.png",
    imageHint: "chocolate ganache cake"
  },
  {
    name: "Strawberry Shortcake Cloud",
    description: "Fresh strawberries and light whipped cream between layers of fluffy vanilla cake.",
    price: "Ksh 5,200",
    imageSrc: "https://placehold.co/400x300.png",
    imageHint: "strawberry shortcake"
  },
  {
    name: "Caramel Crunch",
    description: "Salted caramel and crunchy honeycomb pieces in a vanilla bean cake.",
    price: "Ksh 5,800",
    imageSrc: "https://placehold.co/400x300.png",
    imageHint: "caramel cake"
  },
];

export function CakeCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <section id="cakes" className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">Our Signature Cakes</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Crafted with passion, our signature cakes are perfect for any celebration.
          </p>
        </div>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {signatureCakes.map((cake, index) => (
              <CarouselItem key={index} className="pl-4 pb-8 basis-full md:basis-1/2 lg:basis-1/3 group">
                <CakeCard {...cake} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex" />
          <CarouselNext className="hidden md:inline-flex" />
        </Carousel>
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: count }).map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              className={
                "h-2.5 w-2.5 rounded-full p-0 " +
                (index === current
                  ? "bg-primary"
                  : "bg-primary/20 hover:bg-primary/40")
              }
              onClick={() => api?.scrollTo(index)}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
