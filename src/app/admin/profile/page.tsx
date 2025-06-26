import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function ProfilePage() {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Profile</CardTitle>
                    <CardDescription>Update your photo and personal details here.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col sm:flex-row items-center gap-8">
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="https://placehold.co/100x100.png" alt="@admin" data-ai-hint="person" />
                            <AvatarFallback>AD</AvatarFallback>
                        </Avatar>
                        <div className="flex-grow space-y-4">
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="picture">Profile Picture</Label>
                                <Input id="picture" type="file" />
                                <p className="text-sm text-muted-foreground">Upload a new photo. We recommend a 1:1 aspect ratio.</p>
                            </div>
                        </div>
                    </div>
                    <Separator className="my-8" />
                    <form className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                             <div className="space-y-2">
                                <Label htmlFor="fullName">Full Name</Label>
                                <Input id="fullName" defaultValue="Admin User" />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" type="email" defaultValue="admin@mumirascakes.com" />
                            </div>
                        </div>
                        <Button type="submit">Update Profile</Button>
                    </form>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                    <CardDescription>Update your password here. It's a good idea to use a strong password that you're not using elsewhere.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="current-password">Current Password</Label>
                            <Input id="current-password" type="password" />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="new-password">New Password</Label>
                                <Input id="new-password" type="password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirm-password">Confirm New Password</Label>
                                <Input id="confirm-password" type="password" />
                            </div>
                        </div>
                        <Button type="submit">Update Password</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
