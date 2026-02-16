"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Store, Calendar, QrCode, Settings, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const navItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Vendors", href: "/vendors", icon: Store },
    { name: "Schedule", href: "/schedule", icon: Calendar },
    { name: "Check-in", href: "/check-in", icon: QrCode },
    { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Mobile Toggle */}
            <div className="md:hidden p-4 border-b flex items-center justify-between bg-white dark:bg-stone-900">
                <span className="font-bold text-lg text-primary">MatchaFest Ops</span>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                    <Menu className="h-6 w-6" />
                </Button>
            </div>

            {/* Sidebar */}
            <div className={cn(
                "fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-stone-900 border-r transform transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:h-screen md:flex-shrink-0",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="flex flex-col h-full">
                    <div className="p-6 border-b hidden md:block">
                        <h1 className="text-2xl font-bold text-primary">MatchaFest Ops</h1>
                        <p className="text-xs text-muted-foreground mt-1">Festival Management</p>
                    </div>

                    <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                        {navItems.map((item) => {
                            const Icon = item.icon
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-secondary hover:text-secondary-foreground",
                                        isActive ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" : "text-foreground"
                                    )}
                                >
                                    <Icon className="h-5 w-5" />
                                    <span>{item.name}</span>
                                </Link>
                            )
                        })}
                    </nav>

                    <div className="p-4 border-t">
                        <div className="bg-secondary/50 rounded-lg p-4">
                            <h3 className="font-medium text-sm text-secondary-foreground">Next Event</h3>
                            <p className="text-xs text-muted-foreground mt-1">Sunday, June 15th</p>
                            <p className="text-xs text-muted-foreground">8:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    )
}
