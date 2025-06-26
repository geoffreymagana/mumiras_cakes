"use client";

import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarPage() {
    const [days, setDays] = useState<Date[] | undefined>();

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
                <Calendar
                    mode="multiple"
                    selected={days}
                    onSelect={setDays}
                    className="p-0 rounded-md border"
                />
            </CardContent>
        </Card>
    )
}
