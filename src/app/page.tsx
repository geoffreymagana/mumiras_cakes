
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-muted/40 items-center justify-center p-4">
      <Card className="max-w-lg w-full text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <Globe className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl font-headline">Multi-Domain App Root</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This is the root of your multi-domain Next.js application. Content is served based on the domain you are visiting from.
          </p>
          <div className="mt-6 space-y-2 text-left text-sm text-foreground">
            <p><strong>- Main Website:</strong> Access via your main domain (e.g., mumirascakes.com)</p>
            <p><strong>- Admin Panel:</strong> Access via your admin subdomain (e.g., admin.mumirascakes.com)</p>
            <p><strong>- Client App:</strong> Access via your app subdomain (e.g., app.mumirascakes.com)</p>
            <p><strong>- Dispatch App:</strong> Access via your dispatch subdomain (e.g., dispatch.mumirascakes.com)</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
