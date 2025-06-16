"use client"

import { useState } from "react"
import Link from "next/link"
import {
  CalendarPlus,
  CircleUser,
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
  Plus,
  Minus,
  Calculator,
  User,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"

export default function PenukaranSampah() {
  const [wasteItems, setWasteItems] = useState([
    { id: 1, type: "Plastik", weight: 0, price: 2000 },
    { id: 2, type: "Kertas", weight: 0, price: 1500 },
    { id: 3, type: "Logam", weight: 0, price: 5000 },
    { id: 4, type: "Kaca", weight: 0, price: 1000 },
  ])

  const [memberPhone, setMemberPhone] = useState("")
  const [memberInfo, setMemberInfo] = useState(null)

  const navigationItems = [
    { href: "/", icon: Home, label: "Dasbor" },
    { href: "/penukaran-sampah", icon: Trash2, label: "Catat Sampah" },
    { href: "/jemput-sampah", icon: CalendarPlus, label: "Jadwal Penjemputan" },
    { href: "/riwayat", icon: LineChart, label: "Riwayat" },
    { href: "/rewards", icon: Award, label: "Poin & Hadiah" },
  ]

  const recentActivities = [
    {
      id: 1,
      type: "setor",
      title: "Setor Plastik 2.5kg",
      points: "+125",
      time: "2 jam lalu",
      icon: Trash2,
      color: "green",
    },
    {
      id: 2,
      type: "jadwal",
      title: "Jadwal Penjemputan",
      points: "Besok, 09:00",
      time: "Dikonfirmasi",
      icon: CalendarPlus,
      color: "blue",
    },
    {
      id: 3,
      type: "tukar",
      title: "Tukar Voucher Belanja",
      points: "-500",
      time: "1 hari lalu",
      icon: Award,
      color: "yellow",
    },
  ]

  const updateWeight = (id: number, increment: boolean) => {
    setWasteItems(
      wasteItems.map((item) =>
        item.id === id
          ? {
              ...item,
              weight: increment
                ? Math.round((item.weight + 0.1) * 10) / 10
                : Math.max(0, Math.round((item.weight - 0.1) * 10) / 10),
            }
          : item,
      ),
    )
  }

  const totalWeight = wasteItems.reduce((sum, item) => sum + item.weight, 0)
  const totalValue = wasteItems.reduce((sum, item) => sum + item.weight * item.price, 0)
  const totalPoints = Math.floor(totalValue / 100)

  const searchMember = () => {
    // Simulasi pencarian anggota
    if (memberPhone) {
      setMemberInfo({
        name: "Budi Santoso",
        phone: memberPhone,
        points: 1250,
        level: "Gold",
      })
    }
  }

  const processTransaction = () => {
    if (!memberInfo) {
      alert("Silakan cari anggota terlebih dahulu!")
      return
    }
    if (totalWeight === 0) {
      alert("Silakan masukkan berat sampah!")
      return
    }
    alert(`Transaksi berhasil! ${memberInfo.name} mendapat ${totalPoints} poin.`)
    // Reset form
    setWasteItems(wasteItems.map((item) => ({ ...item, weight: 0 })))
    setMemberInfo(null)
    setMemberPhone("")
  }

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6 text-green-600" />
              <span className="">EcoTrack</span>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                  <LineChart className="h-4 w-4" />
                  <span className="sr-only">Riwayat Singkat</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel className="flex items-center justify-between">
                  <span>Aktivitas Terbaru</span>
                  <Link href="/riwayat">
                    <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                      Lihat Semua
                    </Button>
                  </Link>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="max-h-64 overflow-y-auto">
                  <div className="p-2 space-y-2">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted">
                        <div className={`rounded-full bg-${activity.color}-100 p-1`}>
                          <activity.icon className={`h-3 w-3 text-${activity.color}-600`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{activity.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {activity.points} • {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <DropdownMenuSeparator />
                <div className="p-2">
                  <Link href="/riwayat">
                    <Button variant="outline" size="sm" className="w-full">
                      <LineChart className="mr-2 h-4 w-4" />
                      Lihat Riwayat Lengkap
                    </Button>
                  </Link>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
                    item.label === "Catat Sampah" ? "bg-muted text-primary" : "text-muted-foreground"
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
                      item.label === "Catat Sampah" ? "bg-muted text-foreground" : "text-muted-foreground"
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
                  placeholder="Cari anggota atau transaksi..."
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
                <Link href="/profile" className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profil</span>
                </Link>
              </DropdownMenuItem>
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
                <Link href="/auth" className="flex items-center">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Keluar</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold md:text-2xl">Pencatatan Sampah</h1>
              <p className="text-sm text-muted-foreground">Catat transaksi penyetoran sampah anggota</p>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {/* Member Search */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Cari Anggota</CardTitle>
                <CardDescription>Masukkan nomor telepon anggota</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Nomor Telepon</Label>
                  <div className="flex gap-2">
                    <Input
                      id="phone"
                      placeholder="08123456789"
                      value={memberPhone}
                      onChange={(e) => setMemberPhone(e.target.value)}
                    />
                    <Button onClick={searchMember} disabled={!memberPhone}>
                      Cari
                    </Button>
                  </div>
                </div>

                {memberInfo && (
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold">{memberInfo.name}</span>
                          <Badge variant="secondary">{memberInfo.level}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{memberInfo.phone}</p>
                        <p className="text-sm">
                          <span className="font-medium">Poin Saat Ini: </span>
                          <span className="text-green-600 font-bold">{memberInfo.points.toLocaleString()}</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>

            {/* Waste Input */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Input Sampah</CardTitle>
                <CardDescription>Masukkan jenis dan berat sampah yang disetor</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {wasteItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">{item.type}</h4>
                        <p className="text-sm text-muted-foreground">Rp {item.price.toLocaleString()}/kg</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateWeight(item.id, false)}
                          disabled={item.weight === 0}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <div className="w-20 text-center">
                          <span className="font-mono text-lg">{item.weight.toFixed(1)}</span>
                          <p className="text-xs text-muted-foreground">kg</p>
                        </div>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateWeight(item.id, true)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="w-24 text-right">
                        <p className="font-medium">Rp {(item.weight * item.price).toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Ringkasan Transaksi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">Total Berat</p>
                  <p className="text-2xl font-bold">{totalWeight.toFixed(1)} kg</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">Total Nilai</p>
                  <p className="text-2xl font-bold text-green-600">Rp {totalValue.toLocaleString()}</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">Poin Didapat</p>
                  <p className="text-2xl font-bold text-blue-600">{totalPoints}</p>
                </div>
                <div className="flex items-center justify-center">
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    size="lg"
                    onClick={processTransaction}
                    disabled={!memberInfo || totalWeight === 0}
                  >
                    Proses Transaksi
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notes */}
          <Card>
            <CardHeader>
              <CardTitle>Catatan Tambahan</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea placeholder="Tambahkan catatan untuk transaksi ini (opsional)" className="min-h-[100px]" />
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
