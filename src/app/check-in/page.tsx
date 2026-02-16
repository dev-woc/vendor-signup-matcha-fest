"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { QrCode } from "lucide-react"

export default function CheckInPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Check-in</h1>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <QrCode className="mr-2 h-5 w-5" />
                            Vendor Check-in
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">Scan vendor QR code or enter ID</p>
                        <div className="flex space-x-2">
                            <Input placeholder="Vendor ID..." />
                            <Button>Check In</Button>
                        </div>
                        <div className="border-t pt-4">
                            <Button variant="outline" className="w-full h-32 flex flex-col items-center justify-center border-dashed">
                                <QrCode className="h-8 w-8 mb-2 text-muted-foreground" />
                                <span>Activate Camera</span>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between border-b pb-2">
                            <span className="font-medium">Zen Matcha Co.</span>
                            <span className="text-sm text-muted-foreground">Just now</span>
                        </div>
                        <div className="flex items-center justify-between border-b pb-2">
                            <span className="font-medium">Tokyo Treats</span>
                            <span className="text-sm text-muted-foreground">5 min ago</span>
                        </div>
                        <div className="flex items-center justify-between border-b pb-2">
                            <span className="font-medium">Kyoto Ceramics</span>
                            <span className="text-sm text-muted-foreground">12 min ago</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
