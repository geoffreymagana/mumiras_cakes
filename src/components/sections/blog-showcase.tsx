import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    title: "The Secret to Perfectly Moist Chocolate Cake",
    excerpt: "Discover the one ingredient you're probably missing for the richest, most decadent chocolate cake ever.",
    category: "Baking Tips",
    image: "https://placehold.co/600x400.png",
    imageHint: "chocolate cake",
  },
  {
    title: "A Guide to Natural Food Colorings",
    excerpt: "Move over, artificial dyes! Learn how to use fruits and vegetables to create stunning, all-natural colors for your frosting.",
    category: "Techniques",
    image: "https://placehold.co/600x400.png",
    imageHint: "cake frosting colors",
  },
  {
    title: "Celebrating with a Classic: The Victoria Sponge",
    excerpt: "A deep dive into the history and timeless appeal of this royal dessert. Plus, our foolproof recipe.",
    category: "Recipes",
    image: "https://placehold.co/600x400.png",
    imageHint: "victoria sponge cake",
  },
];

export function BlogShowcase() {
  return (
    <section id="blog" className="w-full py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">From Our Blog</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Sweet stories, baking tips, and delicious inspiration from Mumira's kitchen.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.title} className="group flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border-none bg-white/60 dark:bg-card/80">
              <CardHeader className="p-0">
                <div className="aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    data-ai-hint={post.imageHint}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <Badge variant="secondary" className="mb-2">{post.category}</Badge>
                <CardTitle className="font-headline text-xl mb-2">{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="link" className="p-0 h-auto">Read More <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
