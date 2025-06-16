import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { UserProvider } from "@/hooks/use-user"

export const metadata: Metadata = {
  title: "EcoTrack - Bank Sampah Digital",
  description: "Aplikasi Bank Sampah Digital untuk pengelolaan sampah yang lebih baik",
  generator: "Next.js",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  )
}
