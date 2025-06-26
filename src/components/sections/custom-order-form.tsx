"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { format } from "date-fns"
import { Calendar as CalendarIcon, ChefHat, Ruler, Sparkles } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent } from "../ui/card"


const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  deliveryDate: z.date({ required_error: "A delivery date is required." }),
  cakeType: z.string({ required_error: "Please select a cake type." }),
  cakeSize: z.enum(["6-inch", "8-inch", "10-inch", "sheet"], { required_error: "You need to select a cake size." }),
  flavor: z.string({ required_error: "Please select a flavor." }),
  customMessage: z.string().max(100, { message: "Message cannot be longer than 100 characters." }).optional(),
  details: z.string().optional(),
})

export function CustomOrderForm() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      customMessage: "",
      details: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Order Submitted!",
      description: "Thank you for your custom order. We will be in touch shortly!",
    })
    form.reset()
  }

  return (
    <section id="custom-order" className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">Create Your Custom Cake</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have a special design in mind? Fill out the form below and let's bring your delicious vision to life.
          </p>
        </div>
        <Card className="max-w-4xl mx-auto shadow-xl border-none bg-white/60 dark:bg-card/80">
          <CardContent className="p-8 md:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="jane.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(123) 456-7890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="deliveryDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Requested Delivery Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date < new Date(new Date().setDate(new Date().getDate()))
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="border-t border-border pt-8 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FormField
                            control={form.control}
                            name="cakeType"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel className="flex items-center"><ChefHat className="mr-2 h-4 w-4"/>Cake Type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger><SelectValue placeholder="Select a type" /></SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="birthday">Birthday Cake</SelectItem>
                                    <SelectItem value="wedding">Wedding Cake</SelectItem>
                                    <SelectItem value="cupcakes">Cupcakes</SelectItem>
                                    <SelectItem value="anniversary">Anniversary</SelectItem>
                                    <SelectItem value="other">Other Celebration</SelectItem>
                                </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="flavor"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel className="flex items-center"><Sparkles className="mr-2 h-4 w-4"/>Flavor Profile</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger><SelectValue placeholder="Select a flavor" /></SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="vanilla">Classic Vanilla</SelectItem>
                                    <SelectItem value="chocolate">Rich Chocolate</SelectItem>
                                    <SelectItem value="red-velvet">Red Velvet</SelectItem>
                                    <SelectItem value="lemon">Zesty Lemon</SelectItem>
                                    <SelectItem value="strawberry">Strawberry Bliss</SelectItem>
                                </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="cakeSize"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                <FormLabel className="flex items-center"><Ruler className="mr-2 h-4 w-4"/>Cake Size</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                    >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl><RadioGroupItem value="6-inch" /></FormControl>
                                        <FormLabel className="font-normal">6-inch (serves 8-10)</FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl><RadioGroupItem value="8-inch" /></FormControl>
                                        <FormLabel className="font-normal">8-inch (serves 12-15)</FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl><RadioGroupItem value="10-inch" /></FormControl>
                                        <FormLabel className="font-normal">10-inch (serves 20-25)</FormLabel>
                                    </FormItem>
                                     <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl><RadioGroupItem value="sheet" /></FormControl>
                                        <FormLabel className="font-normal">Sheet Cake (serves 40+)</FormLabel>
                                    </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                    </div>
                </div>

                <div className="border-t border-border pt-8 space-y-8">
                     <FormField
                        control={form.control}
                        name="customMessage"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Message on Cake</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g., Happy Birthday, Alex!" {...field} />
                            </FormControl>
                            <FormDescription>
                                A short message to be written on the cake.
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                     <FormField
                        control={form.control}
                        name="details"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Design Details & Inspiration</FormLabel>
                            <FormControl>
                                <Textarea
                                placeholder="Describe your ideal cake design, colors, themes, or any specific requests."
                                className="resize-y min-h-[120px]"
                                {...field}
                                />
                            </FormControl>
                             <FormDescription>
                                Feel free to mention any allergies or dietary restrictions here.
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                </div>


                <div className="flex justify-end pt-8">
                    <Button type="submit" size="lg">Submit Order Request</Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
