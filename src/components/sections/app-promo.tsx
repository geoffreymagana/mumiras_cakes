import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag, Palette, Bell, Gift, Rocket, Sparkles, Home, Cake, UserCircle, CakeSlice } from 'lucide-react';

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
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-full animate-pulse [animation-duration:4s]"></div>
            <div className="absolute inset-x-8 inset-y-8 bg-gradient-to-t from-primary/10 to-transparent rounded-full animate-pulse [animation-duration:4s] [animation-delay:300ms]"></div>
            <div className="absolute inset-x-16 inset-y-16 bg-gradient-to-t from-primary/10 to-transparent rounded-full animate-pulse [animation-duration:4s] [animation-delay:600ms]"></div>

            <Card className="absolute top-0 -left-4 sm:-left-8 w-52 bg-white/80 backdrop-blur-sm shadow-xl animate-[float_8s_ease-in-out_infinite] transform -rotate-12 z-20 border-none">
                <CardContent className="p-3 flex items-center gap-2">
                    <div className="bg-secondary p-2 rounded-full">
                        <Gift className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <div>
                        <p className="font-bold text-sm text-foreground">Gift Delivered!</p>
                        <p className="text-xs text-muted-foreground">Alex received your surprise.</p>
                    </div>
                </CardContent>
            </Card>

            <Card className="absolute -bottom-8 -right-4 sm:-right-8 w-56 bg-white/80 backdrop-blur-sm shadow-xl animate-[float_10s_ease-in-out_infinite_1s] transform rotate-6 z-20 border-none">
                <CardContent className="p-3">
                    <div className="flex items-center gap-2">
                        <div className="bg-accent/80 p-2 rounded-full">
                            <Sparkles className="h-5 w-5 text-accent-foreground" />
                        </div>
                        <div>
                            <p className="font-bold text-sm text-foreground">New Treat Alert!</p>
                            <p className="text-xs text-muted-foreground">Mocha-Chip Muffins are here.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

             <div className="relative z-10 mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                <div className="w-[140px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-bakery-cream flex flex-col">
                    <div className="p-3 bg-bakery-cream/80 backdrop-blur-sm border-b border-rose-100">
                        <div className="flex justify-between items-center">
                            <h3 className="font-headline text-md font-bold text-gray-800">Mumira's Cakes</h3>
                            <Bell className="h-4 w-4 text-gray-500"/>
                        </div>
                    </div>

                    <div className="flex-grow overflow-y-auto p-3 space-y-4 text-xs">
                        <div>
                            <h4 className="font-bold text-gray-700 mb-2">Categories</h4>
                            <div className="flex flex-wrap gap-2 pb-2">
                                <Button size="sm" variant="secondary" className="h-7 rounded-full text-xs">Birthdays</Button>
                                <Button size="sm" variant="outline" className="h-7 rounded-full text-xs bg-white">Weddings</Button>
                                <Button size="sm" variant="outline" className="h-7 rounded-full text-xs bg-white">Cupcakes</Button>
                                <Button size="sm" variant="outline" className="h-7 rounded-full text-xs bg-white">Anniversary</Button>
                                <Button size="sm" variant="outline" className="h-7 rounded-full text-xs bg-white">Bento Cakes</Button>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-700 mb-2">Featured Cake</h4>
                            <Card className="bg-bakery-rose/30 border-none shadow-md">
                              <CardContent className="p-3 flex items-center gap-3">
                                 <div className="w-20 h-20 bg-bakery-rose/50 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-4xl" role="img" aria-label="cake">🎂</span>
                                 </div>
                                 <div>
                                    <h5 className="font-headline text-sm font-bold">Celebration Special</h5>
                                    <p className="text-xs text-muted-foreground mb-1">Perfect for any occasion</p>
                                    <p className="font-bold text-sm text-primary">Ksh 4,500</p>
                                 </div>
                              </CardContent>
                            </Card>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-700 mb-2">Recent Orders</h4>
                            <div className="space-y-2">
                                <Card className="bg-white border-rose-100 shadow-sm">
                                    <CardContent className="p-2 flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <CakeSlice className="h-4 w-4 text-primary"/>
                                            <div>
                                                <p className="font-semibold">Velvet Dream</p>
                                                <p className="text-muted-foreground text-xs">Order #1023</p>
                                            </div>
                                        </div>
                                        <Badge variant="secondary" className="text-xs">Processing</Badge>
                                    </CardContent>
                                </Card>
                                <Card className="bg-white border-rose-100 shadow-sm">
                                    <CardContent className="p-2 flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <CakeSlice className="h-4 w-4 text-primary"/>
                                            <div>
                                                <p className="font-semibold">Lemon Zest</p>
                                                <p className="text-muted-foreground text-xs">Order #1021</p>
                                            </div>
                                        </div>
                                        <Badge variant="outline" className="text-xs border-green-300 bg-green-50 text-green-800">Delivered</Badge>
                                    </CardContent>
                                </Card>
                                <Card className="bg-white border-rose-100 shadow-sm">
                                    <CardContent className="p-2 flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <CakeSlice className="h-4 w-4 text-primary"/>
                                            <div>
                                                <p className="font-semibold">Caramel Crunch</p>
                                                <p className="text-muted-foreground text-xs">Order #1020</p>
                                            </div>
                                        </div>
                                        <Badge variant="outline" className="text-xs border-orange-300 bg-orange-50 text-orange-800">Awaiting Delivery</Badge>
                                    </CardContent>
                                </Card>
                                <Card className="bg-white border-rose-100 shadow-sm">
                                    <CardContent className="p-2 flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <CakeSlice className="h-4 w-4 text-primary"/>
                                            <div>
                                                <p className="font-semibold">Choco Decadence</p>
                                                <p className="text-muted-foreground text-xs">Order #1019</p>
                                            </div>
                                        </div>
                                        <Badge variant="destructive" className="text-xs">Cancelled</Badge>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full bg-white/80 backdrop-blur-sm border-t border-gray-200/50 p-3 mt-auto">
                        <div className="flex justify-around items-center">
                            <Home className="h-5 w-5 text-primary" />
                            <Cake className="h-5 w-5 text-muted-foreground/80 hover:text-primary transition-colors cursor-pointer" />
                            <Gift className="h-5 w-5 text-muted-foreground/80 hover:text-primary transition-colors cursor-pointer" />
                            <UserCircle className="h-5 w-5 text-muted-foreground/80 hover:text-primary transition-colors cursor-pointer" />
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
