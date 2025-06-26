
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck } from "lucide-react";

export default function DispatchHomePage() {
  return (
    <div className="flex flex-col min-h-dvh bg-muted/40 items-center justify-center p-4">
      <Card className="max-w-lg w-full text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <Truck className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl font-headline">Dispatcher App</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This is the placeholder for the dispatcher/delivery staff application.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
