import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BellRing } from "lucide-react";

export default function NotificationsPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>
                    Recent activity from your store will appear here, including new orders and contact requests.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex h-[450px] w-full flex-col items-center justify-center rounded-lg border border-dashed text-center text-muted-foreground">
                    <div className="flex flex-col items-center justify-center">
                        <BellRing className="h-16 w-16 mb-4" />
                        <p className="font-semibold text-xl">No new notifications</p>
                        <p className="text-sm">We'll let you know when something new comes up.</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
