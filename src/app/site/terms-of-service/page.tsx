
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="container mx-auto max-w-4xl px-4 py-16 sm:py-24 lg:px-8">
        <div className="space-y-8">
          <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">Mumira’s Cakes – Terms of Service</h1>
          <p className="text-muted-foreground">Effective Date: 27/06/2025 2:43:36 am</p>

          <div className="space-y-6 text-foreground/80 prose dark:prose-invert max-w-none">
            <section className="space-y-2">
              <h2 className="text-2xl font-headline font-semibold">1. Acceptance of Terms</h2>
              <p>
                By using our website or services, you agree to these Terms of Service. If you don’t agree, please do not use the platform.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-headline font-semibold">2. Orders & Subscriptions</h2>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>You agree to provide accurate information when placing an order.</li>
                <li>Subscriptions renew automatically unless canceled at least 3 days before renewal.</li>
                <li>You’re responsible for keeping your account information up to date.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-headline font-semibold">3. Payments</h2>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>All prices are shown in KES and are subject to applicable taxes.</li>
                <li>We accept mobile money, card payments, or cash on delivery (if available).</li>
                <li>Orders must be paid in full before fulfillment.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-headline font-semibold">4. Cancellation & Refunds</h2>
               <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Orders canceled within 24 hours of placement may be eligible for a refund upon revision and approval.</li>
                <li>Custom cake orders are non-refundable once preparation has begun.</li>
                <li>Subscription payments are non-refundable once a cycle begins.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-headline font-semibold">5. Delivery</h2>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>We aim to deliver on your selected date but do not guarantee specific delivery times.</li>
                <li>Delays caused by incorrect delivery info or third parties are not our responsibility.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-headline font-semibold">6. User Conduct</h2>
              <ul className="list-disc list-inside space-y-1 pl-4">
                 <li>You agree not to misuse our website, hack, spam, or upload harmful content.</li>
                <li>Any violation may result in account suspension or legal action.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-headline font-semibold">7. Intellectual Property</h2>
              <p>
                All website content, images, and branding are owned by Mumira’s Cakes. Do not copy or use without permission.
              </p>
            </section>

             <section className="space-y-2">
              <h2 className="text-2xl font-headline font-semibold">8. App Coming Soon</h2>
              <p>
                The "App Coming Soon" section is for preview and interest registration only. Features listed are subject to change.
              </p>
            </section>

             <section className="space-y-2">
              <h2 className="text-2xl font-headline font-semibold">9. Liability Limitation</h2>
              <p>
                We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-headline font-semibold">10. Governing Law</h2>
              <p>
                These terms are governed by the laws of Kenya. Disputes shall be resolved under local jurisdiction.
              </p>
            </section>
            
            <section className="space-y-2">
                <h2 className="text-2xl font-headline font-semibold">11. Contact Us</h2>
                <p>For any questions, contact us at: mumirascakes@gmail.com</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
