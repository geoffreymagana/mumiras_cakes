import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star, StarHalf } from "lucide-react";

const testimonials = [
  {
    name: "Sarah L.",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "woman smiling",
    initials: "SL",
    rating: 5,
    quote: "The wedding cake was an absolute masterpiece! It was not only stunningly beautiful but also the most delicious cake I've ever tasted. Mumira's is the best!",
  },
  {
    name: "David Chen",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "man portrait",
    initials: "DC",
    rating: 5,
    quote: "I ordered a custom birthday cake and was blown away by the attention to detail. It exceeded all my expectations. Highly, highly recommend!",
  },
  {
    name: "Emily Rodriguez",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "woman happy",
    initials: "ER",
    rating: 4.5,
    quote: "Fantastic customer service and even better cupcakes. The lemon zest flavor is a must-try. Will definitely be back for more treats.",
  },
];

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
  return (
    <div className="flex text-accent-foreground">
      {[...Array(fullStars)].map((_, i) => <Star key={`full-${i}`} className="h-5 w-5 fill-current" />)}
      {halfStar && <StarHalf key="half" className="h-5 w-5 fill-current" />}
      {[...Array(emptyStars)].map((_, i) => <Star key={`empty-${i}`} className="h-5 w-5" />)}
    </div>
  );
};


export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">A Spoonful of Love</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our happy customers have to say.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg bg-background transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-lg text-foreground">{testimonial.name}</p>
                    <div className="flex items-center">{renderStars(testimonial.rating)}</div>
                  </div>
                </div>
                <blockquote className="text-foreground/80 italic border-l-4 border-primary pl-4">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
