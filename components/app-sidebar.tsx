"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Truck, Award, FileText, Trash2 } from "lucide-react"

interface AppSidebarProps {
  currentUser?: {
    name: string
    role: "user" | "admin"
  }
}

export default function AppSidebar({ currentUser = { name: "Budi Santoso", role: "user" } }: AppSidebarProps) {
  const pathname = usePathname()

  // Navigation items berdasarkan role
  const getNavigationItems = () => {
    const baseItems = [
      { href: "/", icon: Home, label: "Dashboard" },
      { href: "/jemput-sampah", icon: Truck, label: "Jemput Sampah" },
      { href: "/rewards", icon: Award, label: "Rewards" },
      { href: "/riwayat", icon: FileText, label: "Riwayat" },
    ]

    // Tambahkan menu admin/petugas
    if (currentUser.role === "admin") {
      baseItems.splice(1, 0, { href: "/penukaran-sampah", icon: Trash2, label: "Catat Sampah" })
    }

    return baseItems
  }

  const navigationItems = getNavigationItems()

  return (
    <aside className="w-64 bg-white border-r-2 border-gray-250 min-h-screen">
      <nav className="p-6">
        <div className="space-y-2">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            )
          })}
        </div>
      </nav>
    </aside>
  )
}
