import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function SubscribersPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Subscribers</CardTitle>
                <CardDescription>A list of all newsletter and app sign-ups.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Email Address</TableHead>
                            <TableHead>Source</TableHead>
                            <TableHead>Subscription Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={3} className="h-48 text-center">
                                <div className="flex flex-col items-center justify-center text-muted-foreground">
                                    <div className="text-5xl mb-4" role="img" aria-label="Letter">💌</div>
                                    <p className="font-semibold">No subscribers yet</p>
                                    <p className="text-sm">Newsletter and app sign-ups will be listed here.</p>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
