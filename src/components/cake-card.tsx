import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CakeCardProps {
  imageSrc: string;
  imageHint: string;
  name: string;
  description: string;
  price: string;
  buttonLabel?: string;
}

export function CakeCard({ imageSrc, imageHint, name, description, price, buttonLabel = "View Details" }: CakeCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border-none bg-white/60 dark:bg-card">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src={imageSrc}
            alt={name}
            width={400}
            height={300}
            data-ai-hint={imageHint}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-2xl mb-2">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-6 pt-0">
        <p className="text-2xl font-headline font-bold text-primary">{price}</p>
        <Button>
          {buttonLabel} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
