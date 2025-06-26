import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle } from "lucide-react";

function ProductsTable({ emptyStateMessage }: { emptyStateMessage: string }) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell colSpan={4} className="h-48 text-center">
                       <div className="flex flex-col items-center justify-center text-muted-foreground">
                            <div className="text-5xl mb-4" role="img" aria-label="Cake slice">🍰</div>
                            <p className="font-semibold">{emptyStateMessage}</p>
                            <p className="text-sm">Click 'Add Product' to get started.</p>
                        </div>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default function ProductsPage() {
    return (
        <div className="flex flex-col gap-4">
             <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold font-headline">Manage Products</h1>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Product
                </Button>
            </div>
            <Tabs defaultValue="catalogue">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="catalogue">Main Catalogue</TabsTrigger>
                    <TabsTrigger value="featured">Featured Products</TabsTrigger>
                </TabsList>
                <Card className="mt-4">
                    <CardContent className="pt-6">
                        <TabsContent value="catalogue">
                            <ProductsTable emptyStateMessage="No products in your main catalogue." />
                        </TabsContent>
                        <TabsContent value="featured">
                            <ProductsTable emptyStateMessage="No featured products." />
                        </TabsContent>
                    </CardContent>
                </Card>
            </Tabs>
        </div>
    )
}
