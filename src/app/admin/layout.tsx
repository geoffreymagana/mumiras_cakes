import type { Metadata } from "next";
import Link from "next/link";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  CakeSlice,
  Newspaper,
  CalendarDays,
  ShoppingCart,
  Users,
  Bell,
  Home,
  UserCircle,
  Landmark,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Admin Dashboard - Mumira's Cakes",
  description: "Manage your bakery with ease.",
};

const bottomNavLinks = [
    { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/admin/orders", icon: ShoppingCart, label: "Orders" },
    { href: "/admin/products", icon: CakeSlice, label: "Products" },
    { href: "/admin/profile", icon: UserCircle, label: "Profile" },
];


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Logo />
        </SidebarHeader>
        <SidebarContent className="p-2">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton href="/admin" asChild>
                <Link href="/admin">
                  <LayoutDashboard />
                  Dashboard
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/admin/orders" asChild>
                <Link href="/admin/orders">
                  <ShoppingCart />
                  Orders
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/admin/products" asChild>
                <Link href="/admin/products">
                  <CakeSlice />
                  Products
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/admin/financials" asChild>
                <Link href="/admin/financials">
                  <Landmark />
                  Financials
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
              <SidebarMenuButton href="/admin/notifications" asChild>
                <Link href="/admin/notifications">
                  <Bell />
                  Notifications
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/admin/blog" asChild>
                <Link href="/admin/blog">
                  <Newspaper />
                  Blog
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/admin/calendar" asChild>
                <Link href="/admin/calendar">
                  <CalendarDays />
                  Calendar
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="/admin/subscribers" asChild>
                <Link href="/admin/subscribers">
                  <Users />
                  Subscribers
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
           <SidebarMenu>
             <SidebarMenuItem>
              <SidebarMenuButton href="/" asChild>
                <Link href="/">
                  <Home />
                  View Website
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
           </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 items-center justify-between border-b bg-background px-6 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold font-headline">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/admin/notifications">
                <Bell />
                <span className="sr-only">Notifications</span>
              </Link>
            </Button>
            <Link href="/admin/profile">
                <Avatar className="h-9 w-9 cursor-pointer">
                <AvatarImage src="https://placehold.co/100x100.png" alt="@admin" data-ai-hint="person" />
                <AvatarFallback>AD</AvatarFallback>
                </Avatar>
            </Link>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8 bg-muted/40 pb-20 md:pb-8">
          {children}
        </main>
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background p-2 md:hidden">
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
                {bottomNavLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="inline-flex flex-col items-center justify-center font-medium text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg p-2 group">
                        <link.icon className="w-6 h-6 mb-1 text-muted-foreground group-hover:text-primary" />
                        <span className="text-xs">{link.label}</span>
                    </Link>
                ))}
            </div>
        </nav>
      </SidebarInset>
    </SidebarProvider>
  );
}
