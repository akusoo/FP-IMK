"use client"

import Link from "next/link"
import { Search, User, Settings, LogOut, Recycle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface AppHeaderProps {
  currentUser?: {
    name: string
    role: "user" | "admin"
  }
}

export default function AppHeader({ currentUser = { name: "Budi Santoso", role: "user" } }: AppHeaderProps) {
  return (
    <header className="bg-white border-b-2 border-gray-250 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <Recycle className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">SampahKu.id</span>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input type="search" placeholder="Cari Bank Sampah Terdekat" className="pl-10 bg-gray-50 border-gray-200" />
          </div>
        </div>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <User className="w-5 h-5 text-gray-600" />
              <span className="sr-only">Open user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-48 bg-white border border-gray-200 shadow-lg rounded-md"
            sideOffset={5}
          >
            <DropdownMenuLabel className="px-3 py-2 text-sm font-medium text-gray-900 border-b border-gray-100">
              <div>
                <p>{currentUser.name}</p>
                <p className="text-xs text-gray-500 capitalize">{currentUser.role}</p>
              </div>
            </DropdownMenuLabel>
            <div className="py-1">
              <DropdownMenuItem className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
                <Link href="/pengaturan" className="flex items-center w-full">
                  <Settings className="mr-3 h-4 w-4 text-gray-400" />
                  Pengaturan
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
                <Link href="/profile" className="flex items-center w-full">
                  <User className="mr-3 h-4 w-4 text-gray-400" />
                  Profil
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="my-1 border-gray-100" />
              <DropdownMenuItem className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
                <Link href="/auth" className="flex items-center w-full">
                  <LogOut className="mr-3 h-4 w-4 text-gray-400" />
                  Keluar
                </Link>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
