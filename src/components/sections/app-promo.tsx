import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag, Palette, Bell, Gift, Rocket, Truck } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

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
    <section id="app-promo" className="w-full py-20 lg:py-32 bg-bakery-cream/50 overflow-hidden">
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
          <div className="relative flex items-center justify-center lg:pl-12 h-[600px] lg:h-auto mt-12 lg:mt-0">
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-md h-full max-h-md aspect-square bg-primary/5 rounded-full animate-pulse [animation-duration:4s]"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-lg h-full max-h-lg aspect-square bg-primary/5 rounded-full animate-pulse [animation-duration:4s] [animation-delay:300ms]"></div>
              </div>
               <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-xl h-full max-h-xl aspect-square bg-primary/5 rounded-full animate-pulse [animation-duration:4s] [animation-delay:600ms]"></div>
              </div>

            <Card className="absolute top-0 -left-4 sm:-left-8 w-48 bg-white/80 backdrop-blur-sm shadow-xl animate-[float_8s_ease-in-out_infinite] transform -rotate-12 z-20 border-none">
                <CardContent className="p-3 flex items-center gap-2">
                    <div className="bg-mint-frosting p-2 rounded-full">
                        <Truck className="h-5 w-5 text-minty-teal" />
                    </div>
                    <div>
                        <p className="font-bold text-sm text-foreground">Order Shipped!</p>
                        <p className="text-xs text-muted-foreground">Your cake is on its way.</p>
                    </div>
                </CardContent>
            </Card>

            <Card className="absolute -bottom-8 -right-4 sm:-right-8 w-56 bg-white/80 backdrop-blur-sm shadow-xl animate-[float_10s_ease-in-out_infinite_1s] transform rotate-6 z-20 border-none">
                <CardContent className="p-3">
                    <div className="flex items-center gap-2 mb-2">
                        <Gift className="h-5 w-5 text-cherry-red" />
                        <p className="font-bold text-sm text-foreground">You've earned 50 points!</p>
                    </div>
                    <Progress value={50} className="h-2 [&>div]:bg-cherry-red" />
                </CardContent>
            </Card>

             <div className="relative z-10 mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
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
