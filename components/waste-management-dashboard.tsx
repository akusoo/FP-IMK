"use client"

import Link from "next/link"
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Recycle,
  Search,
  Users,
  Trash2,
  CalendarPlus,
  Award,
  SettingsIcon,
  LogOut,
  Truck,
  Leaf,
  Coins,
  PlusCircle,
  ArrowUpRight,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function WasteManagementDashboard() {
  const navigationItems = [
    { href: "#", icon: Home, label: "Dasbor" },
    { href: "#", icon: Trash2, label: "Catat Sampah" },
    { href: "#", icon: CalendarPlus, label: "Jadwal Penjemputan" },
    { href: "#", icon: LineChart, label: "Riwayat" },
    { href: "#", icon: Award, label: "Poin & Hadiah" },
  ]

  const dashboardCards = [
    {
      title: "Total Didaur Ulang",
      value: "75.2 kg",
      description: "+3.5 kg minggu ini",
      icon: Recycle,
      color: "text-green-600",
    },
    {
      title: "Poin Terkumpul",
      value: "1,850 Poin",
      description: "+120 poin hari ini",
      icon: Coins,
      color: "text-yellow-600",
    },
    {
      title: "Jadwal Jemput Berikutnya",
      value: "5 Juni, 14:00",
      description: "Status: Terkonfirmasi",
      icon: Truck,
      color: "text-blue-600",
    },
    {
      title: "Dampak Lingkungan",
      value: "15 kg CO₂e",
      description: "Pengurangan emisi",
      icon: Leaf,
      color: "text-teal-600",
    },
  ]

  const recentActivities = [
    {
      type: "Plastik (Botol)",
      quantity: "2.5 kg",
      points: "+50 Poin",
      date: "2 jam lalu",
    },
    {
      type: "Kertas (Kardus)",
      quantity: "5.1 kg",
      points: "+75 Poin",
      date: "Kemarin",
    },
    {
      type: "Penjemputan Selesai",
      quantity: "Total 10.2 kg",
      points: "+200 Poin",
      date: "3 hari lalu",
    },
  ]

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6 text-green-600" />
              <span className="">EcoTrack</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card>
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Butuh Bantuan?</CardTitle>
                <CardDescription>Hubungi dukungan kami jika Anda memiliki pertanyaan atau masalah.</CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                  Hubungi Dukungan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link href="#" className="flex items-center gap-2 text-lg font-semibold mb-4">
                  <Package2 className="h-6 w-6 text-green-600" />
                  <span className="">EcoTrack</span>
                </Link>
                {navigationItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Butuh Bantuan?</CardTitle>
                    <CardDescription>Hubungi dukungan kami jika Anda memiliki pertanyaan atau masalah.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                      Hubungi Dukungan
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Cari transaksi, jadwal..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <SettingsIcon className="mr-2 h-4 w-4" />
                <span>Pengaturan</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Users className="mr-2 h-4 w-4" />
                <span>Dukungan</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Keluar</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold md:text-2xl">Dasbor</h1>
            <Button className="bg-green-600 hover:bg-green-700">
              <PlusCircle className="mr-2 h-4 w-4" />
              Catat Sampah Baru
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {dashboardCards.map((card) => (
              <Card key={card.title} x-chunk={`dashboard-01-chunk-${card.title.replace(/\s+/g, "-").toLowerCase()}`}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                  <card.icon className={`h-5 w-5 ${card.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{card.value}</div>
                  <p className="text-xs text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                  <CardTitle>Aktivitas Terbaru</CardTitle>
                  <CardDescription>Daftar pencatatan sampah dan penjemputan terakhir Anda.</CardDescription>
                </div>
                <Button asChild size="sm" className="ml-auto gap-1 bg-green-500 hover:bg-green-600">
                  <Link href="#">
                    Lihat Semua
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Jenis Sampah</TableHead>
                      <TableHead className="text-right">Jumlah</TableHead>
                      <TableHead className="text-right">Poin</TableHead>
                      <TableHead className="text-right">Tanggal</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentActivities.map((activity) => (
                      <TableRow key={activity.date + activity.type}>
                        <TableCell>
                          <div className="font-medium">{activity.type}</div>
                        </TableCell>
                        <TableCell className="text-right">{activity.quantity}</TableCell>
                        <TableCell className="text-right">
                          <Badge
                            className="text-xs"
                            variant={activity.points.startsWith("+") ? "default" : "destructive"}
                          >
                            {activity.points}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">{activity.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-5">
              <CardHeader>
                <CardTitle>Tips Mengelola Sampah</CardTitle>
                <CardDescription>Maksimalkan daur ulang dan poin Anda dengan tips berikut.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-green-100 p-2 dark:bg-green-800/30">
                    <Recycle className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Pisahkan Sampah Organik & Anorganik</p>
                    <p className="text-sm text-muted-foreground">Memudahkan proses daur ulang.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-800/30">
                    <Package className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Bersihkan Kemasan Bekas</p>
                    <p className="text-sm text-muted-foreground">Meningkatkan nilai jual sampah.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-yellow-100 p-2 dark:bg-yellow-800/30">
                    <CalendarPlus className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Jadwalkan Penjemputan Rutin</p>
                    <p className="text-sm text-muted-foreground">Lebih praktis dan efisien.</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Lihat Semua Tips
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
