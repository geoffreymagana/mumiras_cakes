import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MiraChat } from '@/components/mira-chat';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-dvh bg-background overflow-x-hidden">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <MiraChat />
    </div>
  );
}
