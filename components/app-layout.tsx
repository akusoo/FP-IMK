"use client"

import type { ReactNode } from "react"
import AppHeader from "./app-header"
import AppSidebar from "./app-sidebar"

interface AppLayoutProps {
  children: ReactNode
  currentUser?: {
    name: string
    role: "user" | "admin"
  }
}

export default function AppLayout({ children, currentUser }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader currentUser={currentUser} />
      <div className="flex max-w-7xl mx-auto">
        <AppSidebar currentUser={currentUser} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
