import { Cake } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Cake className="h-8 w-8 text-primary" />
      <span className="text-2xl font-bold font-headline text-foreground">
        Mumira's Cakes
      </span>
    </div>
  );
}
