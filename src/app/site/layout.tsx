import { MiraChat } from '@/components/mira-chat';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <MiraChat />
    </>
  );
}
