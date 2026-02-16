import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SchedulePage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Schedule</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Sunday, June 15th</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex border-b pb-4">
                            <div className="w-24 font-bold text-muted-foreground">08:00 AM</div>
                            <div>Vendor Setup Begins</div>
                        </div>
                        <div className="flex border-b pb-4">
                            <div className="w-24 font-bold text-muted-foreground">10:00 AM</div>
                            <div>Gates Open</div>
                        </div>
                        <div className="flex border-b pb-4">
                            <div className="w-24 font-bold text-muted-foreground">11:00 AM</div>
                            <div>Tea Ceremony Demonstration (Main Stage)</div>
                        </div>
                        <div className="flex border-b pb-4">
                            <div className="w-24 font-bold text-muted-foreground">01:00 PM</div>
                            <div>Matcha Making Workshop (Tent B)</div>
                        </div>
                        <div className="flex border-b pb-4">
                            <div className="w-24 font-bold text-muted-foreground">04:00 PM</div>
                            <div>Live Music: The Green Teas</div>
                        </div>
                        <div className="flex">
                            <div className="w-24 font-bold text-muted-foreground">06:00 PM</div>
                            <div>Closing Ceremony</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
