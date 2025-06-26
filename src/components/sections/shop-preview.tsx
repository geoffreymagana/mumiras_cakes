import { CakeCard } from "@/components/cake-card";

const featuredProducts = [
  {
    name: "Celebration Sprinkle",
    description: "A fun and festive vanilla bean cake loaded with colorful sprinkles.",
    price: "Ksh 4,800",
    imageSrc: "https://placehold.co/400x300.png",
    imageHint: "sprinkle cake"
  },
  {
    name: "Classic Carrot Cake",
    description: "Perfectly spiced carrot cake with a tangy cream cheese frosting and walnuts.",
    price: "Ksh 5,500",
    imageSrc: "https://placehold.co/400x300.png",
    imageHint: "carrot cake"
  },
  {
    name: "Cookies & Cream",
    description: "A chocolate lover's dream with Oreo chunks baked in and on top.",
    price: "Ksh 5,800",
    imageSrc: "https://placehold.co/400x300.png",
    imageHint: "cookies cream cake"
  },
];


export function ShopPreview() {
  return (
    <section id="shop-preview" className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">Our Featured Treats</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A selection of our most-loved cakes, ready to make your day special.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((cake) => (
             <div key={cake.name} className="group">
                <CakeCard {...cake} buttonLabel="Add to Cart" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
