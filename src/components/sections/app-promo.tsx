import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag, Palette, Bell, Gift, Rocket } from 'lucide-react';

export function AppPromo() {
  const features = [
    {
      icon: ShoppingBag,
      title: "Easy Ordering",
      description: "Browse, customize, and order with just a few taps.",
    },
    {
      icon: Palette,
      title: "Custom Design Tool",
      description: "Design your perfect cake with our interactive tools.",
    },
    {
      icon: Bell,
      title: "Order Tracking",
      description: "Get real-time updates on your cake's progress.",
    },
    {
      icon: Gift,
      title: "Exclusive Rewards",
      description: "Earn points and unlock special offers.",
    },
  ];

  return (
    <section id="app-promo" className="w-full py-20 lg:py-32 bg-bakery-cream/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
                <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">
                Mumira's Cakes <span className="text-primary">Mobile App</span>
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                <p className="text-lg text-muted-foreground">
                Get ready for the sweetest mobile experience! Our upcoming app will make ordering your favorite cakes easier than ever before.
                </p>
                <ul className="space-y-6 mt-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-bakery-rose/50 rounded-full p-3 flex items-center justify-center h-12 w-12">
                        <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground text-lg">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                    </li>
                ))}
                </ul>
            </div>
            <Card className="mt-12 bg-white/80 shadow-lg border-none">
                <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                        <Rocket className="h-8 w-8 text-primary animate-pulse" />
                        <h3 className="text-xl font-headline font-bold">Be the First to Know!</h3>
                    </div>
                    <p className="text-muted-foreground mt-2 mb-4">
                        Sign up to get notified when our app launches and receive exclusive early access!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <Input type="email" placeholder="Enter your email" className="flex-grow" />
                        <Button>Notify Me</Button>
                    </div>
                </CardContent>
            </Card>
          </div>
          <div className="flex items-center justify-center lg:pl-12">
             <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                <div className="w-[140px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-bakery-yellow flex items-center justify-center">
                   <div className="w-full h-full p-4 bg-bakery-yellow/80">
                      <div className="text-center mb-4">
                         <h3 className="font-headline text-lg font-bold">Mumira's Cakes</h3>
                         <p className="text-sm text-muted-foreground">Sweet dreams delivered</p>
                      </div>
                      <Card className="bg-bakery-rose/30 border-none shadow-md">
                        <CardContent className="p-4 text-center">
                           <div className="w-32 h-24 bg-bakery-rose/50 rounded-lg mx-auto mb-3 flex items-center justify-center">
                              <span className="text-3xl" role="img" aria-label="cake">🎂</span>
                           </div>
                           <h4 className="font-headline text-md font-bold">Celebration Special</h4>
                           <p className="text-sm text-muted-foreground mb-2">Perfect for any occasion</p>
                           <p className="font-bold text-lg text-primary mb-3">Ksh 4,500</p>
                           <Button size="sm" className="w-full">Order Now</Button>
                        </CardContent>
                      </Card>
                       <div className="grid grid-cols-2 gap-4 mt-4">
                          <Card className="bg-white/70 border-none shadow-sm">
                             <CardContent className="p-3 text-center">
                               <span className="text-2xl" role="img" aria-label="cupcake">🧁</span>
                               <p className="text-sm font-semibold mt-1">Cupcakes</p>
                             </CardContent>
                          </Card>
                          <Card className="bg-white/70 border-none shadow-sm">
                             <CardContent className="p-3 text-center">
                                <span className="text-2xl" role="img" aria-label="cake slice">🍰</span>
                               <p className="text-sm font-semibold mt-1">Custom</p>
                             </CardContent>
                          </Card>
                       </div>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
