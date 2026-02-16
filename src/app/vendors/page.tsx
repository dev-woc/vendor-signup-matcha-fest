"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BadgeCheck, Clock, XCircle, Search } from "lucide-react"

const vendors = [
    { id: 1, name: "Zen Matcha Co.", category: "Beverage", status: "Approved", booth: "A12" },
    { id: 2, name: "Green Tea Spirits", category: "Alcohol", status: "Pending", booth: "B04" },
    { id: 3, name: "Matcha Mochi Bros", category: "Food", status: "Rejected", booth: "-" },
    { id: 4, name: "Tokyo Treats", category: "Food", status: "Approved", booth: "A14" },
    { id: 5, name: "Kyoto Ceramics", category: "Merchandise", status: "Approved", booth: "C01" },
    { id: 6, name: "Samurai Swords", category: "Merchandise", status: "Pending", booth: "C02" },
    { id: 7, name: "Osaka Okonomiyaki", category: "Food", status: "Approved", booth: "A15" },
]

export default function VendorsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Vendors</h1>
                <Button>Add Vendor</Button>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>All Vendors</CardTitle>
                        <div className="flex items-center space-x-2">
                            <Search className="h-4 w-4 text-muted-foreground" />
                            <input
                                placeholder="Search vendors..."
                                className="h-8 w-[150px] lg:w-[250px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Name</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Category</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Booth</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {vendors.map((vendor) => (
                                    <tr key={vendor.id} className="border-b transition-colors hover:bg-muted/50">
                                        <td className="p-4 align-middle font-medium">{vendor.name}</td>
                                        <td className="p-4 align-middle">{vendor.category}</td>
                                        <td className="p-4 align-middle">
                                            <div className="flex items-center">
                                                {vendor.status === "Approved" && <BadgeCheck className="mr-2 h-4 w-4 text-primary" />}
                                                {vendor.status === "Pending" && <Clock className="mr-2 h-4 w-4 text-accent-foreground" />}
                                                {vendor.status === "Rejected" && <XCircle className="mr-2 h-4 w-4 text-destructive" />}
                                                {vendor.status}
                                            </div>
                                        </td>
                                        <td className="p-4 align-middle">{vendor.booth}</td>
                                        <td className="p-4 align-middle">
                                            <Button variant="ghost" size="sm">Edit</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
