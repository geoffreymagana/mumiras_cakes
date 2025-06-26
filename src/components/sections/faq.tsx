import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const faqsByCategory = {
  ordering: [
    {
      question: "How far in advance do I need to place my order?",
      answer: "For our signature cakes, we recommend ordering at least 48 hours in advance. For custom or wedding cakes, please contact us at least 2-3 weeks ahead of time to ensure we can perfectly craft your vision.",
    },
  ],
  delivery: [
    {
      question: "Do you offer delivery services?",
      answer: "Yes, we offer delivery within Nairobi and surrounding areas. Delivery fees are calculated based on distance. You are also welcome to pick up your order from our bakery.",
    },
  ],
  payments: [
    {
      question: "What payment methods do you accept?",
      answer: "We accept payments via M-Pesa, all major credit and debit cards, and direct bank transfers. Full payment is required to confirm your order.",
    },
  ],
  custom: [
    {
      question: "Can you create a cake that isn't on your menu?",
      answer: "Absolutely! We specialize in custom creations. Please fill out our custom order form with your ideas, flavor preferences, and any inspiration photos, and our team will get back to you with a quote.",
    },
  ],
}

export function Faq() {
  return (
    <section id="faq" className="w-full py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="ordering" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
              <TabsTrigger value="ordering" className="py-2">Ordering</TabsTrigger>
              <TabsTrigger value="delivery" className="py-2">Delivery</TabsTrigger>
              <TabsTrigger value="payments" className="py-2">Payments</TabsTrigger>
              <TabsTrigger value="custom" className="py-2">Custom Orders</TabsTrigger>
            </TabsList>
            
            <Accordion type="single" collapsible className="w-full mt-8">
              <TabsContent value="ordering">
                  {faqsByCategory.ordering.map((faq, index) => (
                    <AccordionItem value={`ordering-item-${index}`} key={index} className="border-b">
                      <AccordionTrigger className="text-lg text-left hover:no-underline">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </TabsContent>
              <TabsContent value="delivery">
                  {faqsByCategory.delivery.map((faq, index) => (
                    <AccordionItem value={`delivery-item-${index}`} key={index} className="border-b">
                      <AccordionTrigger className="text-lg text-left hover:no-underline">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </TabsContent>
              <TabsContent value="payments">
                  {faqsByCategory.payments.map((faq, index) => (
                    <AccordionItem value={`payments-item-${index}`} key={index} className="border-b">
                      <AccordionTrigger className="text-lg text-left hover:no-underline">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </TabsContent>
              <TabsContent value="custom">
                  {faqsByCategory.custom.map((faq, index) => (
                    <AccordionItem value={`custom-item-${index}`} key={index} className="border-b">
                      <AccordionTrigger className="text-lg text-left hover:no-underline">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </TabsContent>
            </Accordion>
          </Tabs>
        </div>

        <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
          <p className="text-xl font-medium">Still have questions?</p>
          <Button asChild size="lg">
            <a href="#custom-order">Contact Us Today</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
