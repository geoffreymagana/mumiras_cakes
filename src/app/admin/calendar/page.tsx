"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarPage() {
    const [days, setDays] = useState<Date[] | undefined>();
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <Card>
            <CardHeader>
                <CardTitle>Calendar Availability</CardTitle>
                <CardDescription>
                    Manage your bakery's schedule. Select dates to mark them as unavailable for new orders.
                    This will automatically update the date picker in the custom order form.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pt-6">
                {isClient ? (
                    <Calendar
                        mode="multiple"
                        selected={days}
                        onSelect={setDays}
                        className="p-0 rounded-md border"
                    />
                ) : (
                    <div className="p-0 rounded-md border w-[280px] h-[325px]" />
                )}
            </CardContent>
        </Card>
    )
}
