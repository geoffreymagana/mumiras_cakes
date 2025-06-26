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
                            <TableCell colSpan={3} className="h-24 text-center">
                                No subscribers found.
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
