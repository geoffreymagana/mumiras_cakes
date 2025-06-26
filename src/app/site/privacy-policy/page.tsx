
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="container mx-auto max-w-4xl px-4 py-16 sm:py-24 lg:px-8">
        <div className="space-y-8">
          <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">Mumira’s Cakes – Privacy Policy</h1>
          <p className="text-muted-foreground">Effective Date: 27/06/2025 2:43:36 am</p>

          <div className="space-y-6 text-foreground/80 prose dark:prose-invert max-w-none">
            <section className="space-y-2">
              <h2 className="text-2xl font-headline font-semibold">1. Who We Are</h2>
              <p>
                Mumira’s Cakes (“we,” “us,” or “our”) is a bakery brand based in Kikuyu, Kiambu County, Kenya, offering made-to-order cakes, event treats, and bakery subscriptions through our website and mobile app (coming soon).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-headline font-semibold">2. What Information We Collect</h2>
              <p>When you use our site, we may collect:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li><strong>Personal Information:</strong> Name, email, phone number, delivery address, and payment details.</li>
                <li><strong>Order Information:</strong> Products ordered, delivery preferences, subscription data.</li>
                <li><strong>Device Info:</strong> IP address, browser type, and site usage patterns (via cookies or analytics tools).</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-headline font-semibold">3. How We Use Your Information</h2>
              <p>We use the information to:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Fulfill your orders and subscriptions.</li>
                <li>Send you order confirmations and status updates.</li>
                <li>Improve our services and customer experience.</li>
                <li>Share product updates, promotions, and news (if you opt in).</li>
                <li>Prevent fraud and comply with legal obligations.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-headline font-semibold">4. Sharing Your Data</h2>
              <p>We do not sell your data. We may share your info with:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Delivery partners (to fulfill your orders).</li>
                <li>Payment processors (for secure transactions).</li>
                <li>Service providers like website hosting, email marketing, etc.</li>
              </ul>
              <p>All partners are bound by data protection agreements.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-headline font-semibold">5. Cookies</h2>
              <p>
                We use cookies to improve your browsing experience, remember your preferences, and analyze how our site is used. You can disable cookies through your browser settings.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-headline font-semibold">6. Data Security</h2>
              <p>
                Your personal information is stored securely. We implement SSL encryption and best practices to protect your data.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-headline font-semibold">7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Access your data</li>
                <li>Correct inaccuracies</li>
                <li>Request deletion</li>
                <li>Withdraw consent (e.g., unsubscribe from emails)</li>
              </ul>
              <p>To exercise these rights, email us at: mumirascakes@gmail.com</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-headline font-semibold">8. Children’s Privacy</h2>
              <p>We do not knowingly collect personal data from children under 13.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-2xl font-headline font-semibold">9. Changes to this Policy</h2>
              <p>
                We may update this policy occasionally. Changes will be posted here with a revised "Effective Date".
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
