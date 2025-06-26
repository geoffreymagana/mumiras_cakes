"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";
import { ShoppingCart, Package, Truck, CheckCircle } from "lucide-react";

const chartData: any[] = [
  // Empty data as requested
];

const chartConfig = {
  cakes: {
    label: "Cakes",
  },
  "Velvet Dream": {
    label: "Velvet Dream",
    color: "hsl(var(--chart-1))",
  },
  "Lemon Zest": {
    label: "Lemon Zest",
    color: "hsl(var(--chart-2))",
  },
  "Choco Decadence": {
    label: "Choco Decadence",
    color: "hsl(var(--chart-3))",
  },
  "Strawberry Cloud": {
    label: "Strawberry Cloud",
    color: "hsl(var(--chart-4))",
  },
  "Caramel Crunch": {
    label: "Caramel Crunch",
    color: "hsl(var(--chart-5))",
  },
};

const orderStats = [
    { title: "Orders Made", value: "0", icon: ShoppingCart },
    { title: "Processing", value: "0", icon: Package },
    { title: "Awaiting Delivery", value: "0", icon: Truck },
    { title: "Orders Fulfilled", value: "0", icon: CheckCircle },
];

export default function DashboardPage() {
  return (
    <div className="grid gap-6">
       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {orderStats.map((stat, index) => (
             <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    <stat.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground">in the last 30 days</p>
                </CardContent>
            </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Top Performing Cakes</CardTitle>
            <CardDescription>A breakdown of sales by cake.</CardDescription>
          </CardHeader>
          <CardContent className="pb-8 flex items-center justify-center">
            {chartData.length === 0 ? (
                <div className="flex h-[250px] w-full flex-col items-center justify-center text-center text-muted-foreground">
                    <div className="text-5xl mb-4">🎂</div>
                    <p>No sales data available yet.</p>
                    <p className="text-xs">Sales will appear here once you receive orders.</p>
                </div>
            ) : (
             <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="sales"
                  nameKey="cake"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.fill}
                      className="focus:outline-none"
                    />
                  ))}
                </Pie>
              </PieChart>
            </ChartContainer>
            )}
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Notifications</CardTitle>
             <CardDescription>New orders and contact requests will appear here.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="flex h-[300px] w-full items-center justify-center text-center text-muted-foreground">
                <div>
                    <div className="text-5xl mb-4">📬</div>
                    <p>No recent activity.</p>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
