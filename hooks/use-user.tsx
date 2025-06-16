"use client"

import { createContext, useContext, type ReactNode } from "react"

interface User {
  name: string
  role: "user" | "admin"
  email: string
  phone: string
}

interface UserContextType {
  user: User | null
  isAdmin: boolean
  isUser: boolean
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  // Simulasi user - dalam implementasi nyata, ini akan dari API/auth
  const user: User = {
    name: "Budi Santoso",
    role: "admin", // Ubah ke "admin" untuk testing admin features
    email: "budi@example.com",
    phone: "08123456789",
  }

  const value = {
    user,
    isAdmin: user?.role === "admin",
    isUser: user?.role === "user",
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}
