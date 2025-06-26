
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

export default function AppHomePage() {
  return (
    <div className="flex flex-col min-h-dvh bg-muted/40 items-center justify-center p-4">
      <Card className="max-w-lg w-full text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <User className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl font-headline">Client App</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This is the placeholder for the client-facing application.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
