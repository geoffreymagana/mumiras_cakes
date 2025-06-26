import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

function PaymentsTab() {
    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h3 className="text-xl font-semibold">All Transactions</h3>
                    <p className="text-sm text-muted-foreground">Review all incoming and outgoing payments.</p>
                </div>
                 <Button variant="outline">Export Data</Button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Transaction ID</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell colSpan={5} className="h-48 text-center">
                            <div className="flex flex-col items-center justify-center text-muted-foreground">
                                <div className="text-5xl mb-4" role="img" aria-label="Receipt">🧾</div>
                                <p className="font-semibold">No payment records yet</p>
                                <p className="text-sm">All transactions will appear here.</p>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

function BudgetsTab() {
    return (
         <div>
            <div className="flex items-center justify-between mb-4">
                 <div>
                    <h3 className="text-xl font-semibold">Budget Management</h3>
                    <p className="text-sm text-muted-foreground">Create and track budgets for different categories.</p>
                </div>
                 <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    New Budget
                </Button>
            </div>
            <div className="flex h-[450px] w-full flex-col items-center justify-center rounded-lg border border-dashed text-center text-muted-foreground">
                <div className="flex flex-col items-center justify-center">
                    <div className="text-5xl mb-4" role="img" aria-label="Piggy Bank">🐖</div>
                    <p className="font-semibold text-xl">No budgets created</p>
                    <p className="text-sm">Click "New Budget" to get started.</p>
                </div>
            </div>
        </div>
    )
}

export default function FinancialsPage() {
    return (
        <Tabs defaultValue="payments" className="flex flex-col gap-4">
             <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold font-headline">Financials</h1>
                <TabsList>
                    <TabsTrigger value="payments">Payments</TabsTrigger>
                    <TabsTrigger value="budgets">Budgets</TabsTrigger>
                </TabsList>
            </div>
            <Card className="mt-0">
                <CardContent className="pt-6">
                    <TabsContent value="payments">
                        <PaymentsTab />
                    </TabsContent>
                    <TabsContent value="budgets">
                        <BudgetsTab />
                    </TabsContent>
                </CardContent>
            </Card>
        </Tabs>
    );
}
