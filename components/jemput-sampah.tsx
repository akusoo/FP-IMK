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
  MapPin,
  Clock,
  User,
  Calendar,
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function JemputSampah() {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

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

  const timeSlots = ["08:00 - 10:00", "10:00 - 12:00", "13:00 - 15:00", "15:00 - 17:00"]

  const upcomingPickups = [
    {
      id: 1,
      date: "2023-11-20",
      time: "09:00 - 11:00",
      address: "Jl. Merdeka No. 123",
      status: "Dikonfirmasi",
      estimatedWeight: "5-8 kg",
    },
    {
      id: 2,
      date: "2023-11-18",
      time: "14:00 - 16:00",
      address: "Jl. Sudirman No. 456",
      status: "Dalam Perjalanan",
      estimatedWeight: "3-5 kg",
    },
  ]

  const handleSchedulePickup = () => {
    if (!selectedDate || !selectedTime) {
      alert("Silakan pilih tanggal dan waktu penjemputan!")
      return
    }
    alert("Jadwal penjemputan berhasil dibuat!")
    setSelectedDate("")
    setSelectedTime("")
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
                    item.label === "Jadwal Penjemputan" ? "bg-muted text-primary" : "text-muted-foreground"
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
                      item.label === "Jadwal Penjemputan" ? "bg-muted text-foreground" : "text-muted-foreground"
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
                  placeholder="Cari jadwal penjemputan..."
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
              <h1 className="text-lg font-semibold md:text-2xl">Jadwal Penjemputan</h1>
              <p className="text-sm text-muted-foreground">Atur jadwal penjemputan sampah di lokasi Anda</p>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {/* Schedule Form */}
            <Card>
              <CardHeader>
                <CardTitle>Buat Jadwal Baru</CardTitle>
                <CardDescription>Isi form untuk membuat jadwal penjemputan sampah</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Tanggal</Label>
                    <Input
                      id="date"
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Waktu</Label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih waktu" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Alamat Penjemputan</Label>
                  <Textarea
                    id="address"
                    placeholder="Masukkan alamat lengkap untuk penjemputan"
                    className="min-h-[80px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Nomor Telepon</Label>
                  <Input id="phone" type="tel" placeholder="08123456789" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="estimated-weight">Perkiraan Berat (kg)</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih perkiraan berat" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">1-3 kg</SelectItem>
                      <SelectItem value="3-5">3-5 kg</SelectItem>
                      <SelectItem value="5-10">5-10 kg</SelectItem>
                      <SelectItem value="10+">Lebih dari 10 kg</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Catatan Tambahan</Label>
                  <Textarea id="notes" placeholder="Catatan khusus untuk petugas (opsional)" />
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700" onClick={handleSchedulePickup}>
                  <CalendarPlus className="mr-2 h-4 w-4" />
                  Buat Jadwal Penjemputan
                </Button>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Lokasi Penjemputan</CardTitle>
                <CardDescription>Pilih lokasi pada peta atau masukkan alamat</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Peta akan ditampilkan di sini</p>
                    <p className="text-sm text-muted-foreground">Integrasi dengan Google Maps</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Pickups */}
          <Card>
            <CardHeader>
              <CardTitle>Jadwal Penjemputan Mendatang</CardTitle>
              <CardDescription>Daftar jadwal penjemputan yang telah Anda buat</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingPickups.map((pickup) => (
                  <div key={pickup.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-blue-100 p-2">
                        <Calendar className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">{pickup.date}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {pickup.time}
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {pickup.address}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={pickup.status === "Dikonfirmasi" ? "default" : "secondary"} className="mb-2">
                        {pickup.status}
                      </Badge>
                      <p className="text-sm text-muted-foreground">Est. {pickup.estimatedWeight}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
