"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Bell,
  CalendarDays,
  CalendarPlus,
  CircleUser,
  Download,
  Filter,
  Home,
  LineChart,
  Menu,
  Package2,
  Search,
  Trash2,
  Award,
  Users,
  SettingsIcon,
  LogOut,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"

export default function HistoryPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)

  const navigationItems = [
    { href: "#", icon: Home, label: "Dasbor" },
    { href: "#", icon: Trash2, label: "Catat Sampah" },
    { href: "#", icon: CalendarPlus, label: "Jadwal Penjemputan" },
    { href: "#", icon: LineChart, label: "Riwayat" },
    { href: "#", icon: Award, label: "Poin & Hadiah" },
  ]

  const historyItems = [
    {
      id: "TRX-001",
      date: "05 Jun 2023",
      type: "Penyetoran",
      category: "Plastik",
      details: "Botol Plastik",
      weight: "3.5 kg",
      points: "+70",
      status: "Selesai",
    },
    {
      id: "TRX-002",
      date: "03 Jun 2023",
      type: "Penyetoran",
      category: "Kertas",
      details: "Kardus & Koran",
      weight: "5.2 kg",
      points: "+104",
      status: "Selesai",
    },
    {
      id: "TRX-003",
      date: "01 Jun 2023",
      type: "Penukaran",
      category: "-",
      details: "Voucher Belanja",
      weight: "-",
      points: "-500",
      status: "Selesai",
    },
    {
      id: "TRX-004",
      date: "28 Mei 2023",
      type: "Penyetoran",
      category: "Logam",
      details: "Kaleng Aluminium",
      weight: "1.8 kg",
      points: "+90",
      status: "Selesai",
    },
    {
      id: "TRX-005",
      date: "25 Mei 2023",
      type: "Penyetoran",
      category: "Kaca",
      details: "Botol Kaca",
      weight: "4.0 kg",
      points: "+80",
      status: "Selesai",
    },
    {
      id: "TRX-006",
      date: "20 Mei 2023",
      type: "Penjemputan",
      category: "Campuran",
      details: "Plastik, Kertas, Logam",
      weight: "12.5 kg",
      points: "+250",
      status: "Selesai",
    },
    {
      id: "TRX-007",
      date: "15 Mei 2023",
      type: "Penukaran",
      category: "-",
      details: "Pulsa Telepon",
      weight: "-",
      points: "-200",
      status: "Selesai",
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
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
                    item.label === "Riwayat" ? "bg-muted text-primary" : "text-muted-foreground"
                  }`}
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
                    className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground ${
                      item.label === "Riwayat" ? "bg-muted text-foreground" : "text-muted-foreground"
                    }`}
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
                  placeholder="Cari transaksi berdasarkan ID, jenis..."
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
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-lg font-semibold md:text-2xl">Riwayat Transaksi</h1>
              <p className="text-sm text-muted-foreground">
                Lihat dan kelola semua transaksi penyetoran sampah dan penukaran poin Anda.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8">
                <Download className="mr-2 h-4 w-4" />
                Ekspor
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <TabsList>
                <TabsTrigger value="all">Semua</TabsTrigger>
                <TabsTrigger value="deposit">Penyetoran</TabsTrigger>
                <TabsTrigger value="redemption">Penukaran</TabsTrigger>
                <TabsTrigger value="pickup">Penjemputan</TabsTrigger>
              </TabsList>

              <div className="flex flex-wrap gap-2">
                <Select>
                  <SelectTrigger className="w-[180px] h-8">
                    <SelectValue placeholder="Kategori Sampah" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Kategori</SelectItem>
                    <SelectItem value="plastic">Plastik</SelectItem>
                    <SelectItem value="paper">Kertas</SelectItem>
                    <SelectItem value="metal">Logam</SelectItem>
                    <SelectItem value="glass">Kaca</SelectItem>
                    <SelectItem value="mixed">Campuran</SelectItem>
                  </SelectContent>
                </Select>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <CalendarDays className="h-4 w-4" />
                      {date ? date.toLocaleDateString() : "Pilih Tanggal"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>

                <Button variant="outline" size="sm" className="h-8">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>
            </div>

            <TabsContent value="all" className="mt-4">
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">ID</TableHead>
                          <TableHead>Tanggal</TableHead>
                          <TableHead>Jenis</TableHead>
                          <TableHead>Kategori</TableHead>
                          <TableHead>Detail</TableHead>
                          <TableHead>Berat</TableHead>
                          <TableHead>Poin</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {historyItems.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell className="font-medium">{item.id}</TableCell>
                            <TableCell>{item.date}</TableCell>
                            <TableCell>{item.type}</TableCell>
                            <TableCell>{item.category}</TableCell>
                            <TableCell>{item.details}</TableCell>
                            <TableCell>{item.weight}</TableCell>
                            <TableCell>
                              <Badge
                                className={`text-xs ${
                                  item.points.startsWith("+")
                                    ? "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-800/30 dark:text-green-400"
                                    : "bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-800/30 dark:text-red-400"
                                }`}
                              >
                                {item.points}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className="text-xs">
                                {item.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t p-4">
                  <div className="text-xs text-muted-foreground">Menampilkan 1-7 dari 42 transaksi</div>
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="deposit" className="mt-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <p>Menampilkan riwayat penyetoran sampah.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="redemption" className="mt-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <p>Menampilkan riwayat penukaran poin.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pickup" className="mt-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <p>Menampilkan riwayat penjemputan sampah.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>Ringkasan Transaksi</CardTitle>
              <CardDescription>Statistik transaksi Anda dalam 30 hari terakhir.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col gap-1">
                <div className="text-sm font-medium text-muted-foreground">Total Sampah Disetorkan</div>
                <div className="text-2xl font-bold">27.0 kg</div>
                <div className="text-xs text-green-600">+12% dari bulan lalu</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-sm font-medium text-muted-foreground">Total Poin Diperoleh</div>
                <div className="text-2xl font-bold">594 Poin</div>
                <div className="text-xs text-green-600">+8% dari bulan lalu</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-sm font-medium text-muted-foreground">Poin Ditukarkan</div>
                <div className="text-2xl font-bold">700 Poin</div>
                <div className="text-xs text-red-600">+25% dari bulan lalu</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-sm font-medium text-muted-foreground">Jumlah Transaksi</div>
                <div className="text-2xl font-bold">9</div>
                <div className="text-xs text-green-600">+2 dari bulan lalu</div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
