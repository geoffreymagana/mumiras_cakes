import Image from 'next/image';
import { ChefHat, Heart, Wheat } from 'lucide-react';

export function BrandStory() {
  return (
    <section id="about" className="w-full py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">Our Sweet Story</h2>
            <p className="text-lg text-muted-foreground">
              Mumira's Cakes began in a small home kitchen with a passion for creating more than just desserts. We believe in baking memories, one celebration at a time. Our founder, Mumira, poured her heart into family recipes passed down through generations, perfecting each one with a modern touch and an unwavering commitment to quality.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, that same love and dedication is in every cake we create. From our kitchen to your table, we're honored to be a part of your special moments.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 mt-8">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 bg-accent rounded-full p-3">
                  <Wheat className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Finest Ingredients</h3>
                  <p className="text-sm text-muted-foreground">Locally sourced, always fresh.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 bg-accent rounded-full p-3">
                  <Heart className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Baked with Love</h3>
                  <p className="text-sm text-muted-foreground">A personal touch in every recipe.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-80 lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
             <Image
              src="https://placehold.co/600x800.png"
              alt="Mumira baking a cake"
              fill
              data-ai-hint="woman baking cake"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
