"use client"

import { useState } from "react"
import Link from "next/link"
import {
  AlertCircle,
  Bell,
  CalendarPlus,
  Check,
  CircleUser,
  Home,
  LineChart,
  Loader2,
  Menu,
  Package2,
  Trash2,
  Award,
  Users,
  SettingsIcon,
  LogOut,
  CalendarIcon,
  Scale,
  User,
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function WasteExchangePage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [memberData, setMemberData] = useState<any>(null)
  const [wasteCategory, setWasteCategory] = useState("")
  const [wasteWeight, setWasteWeight] = useState("")
  const [calculatedPoints, setCalculatedPoints] = useState<number | null>(null)

  const navigationItems = [
    { href: "#", icon: Home, label: "Dasbor" },
    { href: "#", icon: Trash2, label: "Catat Sampah" },
    { href: "#", icon: CalendarPlus, label: "Jadwal Penjemputan" },
    { href: "#", icon: LineChart, label: "Riwayat" },
    { href: "#", icon: Award, label: "Poin & Hadiah" },
  ]

  const wasteCategories = [
    { value: "plastic", label: "Plastik", pointsPerKg: 20 },
    { value: "paper", label: "Kertas", pointsPerKg: 15 },
    { value: "metal", label: "Logam", pointsPerKg: 30 },
    { value: "glass", label: "Kaca", pointsPerKg: 10 },
    { value: "electronic", label: "Elektronik", pointsPerKg: 50 },
    { value: "organic", label: "Organik", pointsPerKg: 5 },
    { value: "textile", label: "Tekstil", pointsPerKg: 10 },
  ]

  const handleVerifyMember = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      alert("Masukkan nomor telepon yang valid")
      return
    }

    setIsVerifying(true)

    // Simulasi verifikasi API
    setTimeout(() => {
      setIsVerifying(false)
      setIsVerified(true)

      // Data dummy anggota
      setMemberData({
        id: "USR-" + Math.floor(1000 + Math.random() * 9000),
        name: "Budi Santoso",
        phone: phoneNumber,
        address: "Jl. Merdeka No. 123, Jakarta",
        memberSince: "12 Jan 2023",
        currentPoints: 1250,
      })
    }, 1500)
  }

  const calculatePoints = () => {
    if (!wasteCategory || !wasteWeight || isNaN(Number.parseFloat(wasteWeight))) {
      return
    }

    const category = wasteCategories.find((cat) => cat.value === wasteCategory)
    if (category) {
      const weight = Number.parseFloat(wasteWeight)
      const points = Math.round(weight * category.pointsPerKg)
      setCalculatedPoints(points)
    }
  }

  const handleWeightChange = (value: string) => {
    setWasteWeight(value)
    if (wasteCategory && value && !isNaN(Number.parseFloat(value))) {
      calculatePoints()
    } else {
      setCalculatedPoints(null)
    }
  }

  const handleCategoryChange = (value: string) => {
    setWasteCategory(value)
    if (value && wasteWeight && !isNaN(Number.parseFloat(wasteWeight))) {
      calculatePoints()
    }
  }

  const handleSubmitTransaction = () => {
    // Simulasi pengiriman data ke server
    alert("Transaksi berhasil disimpan!")
    // Reset form
    setPhoneNumber("")
    setIsVerified(false)
    setMemberData(null)
    setWasteCategory("")
    setWasteWeight("")
    setCalculatedPoints(null)
    setDate(new Date())
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
            <div className="flex items-center">
              <h2 className="text-lg font-semibold">Penukaran Sampah</h2>
              <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">Petugas</Badge>
            </div>
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
          <div className="flex flex-col gap-4 md:flex-row">
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Verifikasi Anggota</CardTitle>
                <CardDescription>Masukkan nomor telepon anggota untuk memverifikasi keanggotaan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Nomor Telepon</Label>
                    <div className="flex gap-2">
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Contoh: 08123456789"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        disabled={isVerified}
                      />
                      <Button onClick={handleVerifyMember} disabled={isVerifying || isVerified || !phoneNumber}>
                        {isVerifying ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Memverifikasi
                          </>
                        ) : isVerified ? (
                          <>
                            <Check className="mr-2 h-4 w-4" />
                            Terverifikasi
                          </>
                        ) : (
                          "Verifikasi"
                        )}
                      </Button>
                    </div>
                  </div>

                  {isVerified && memberData && (
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-green-100 p-2">
                          <User className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">{memberData.name}</h3>
                          <p className="text-sm text-muted-foreground">{memberData.phone}</p>
                        </div>
                        <Badge className="ml-auto">ID: {memberData.id}</Badge>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Alamat</p>
                          <p>{memberData.address}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Anggota Sejak</p>
                          <p>{memberData.memberSince}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-muted-foreground">Poin Saat Ini</p>
                          <p className="text-xl font-bold text-green-600">{memberData.currentPoints} Poin</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {isVerified && memberData && (
            <Card>
              <CardHeader>
                <CardTitle>Detail Transaksi Penukaran Sampah</CardTitle>
                <CardDescription>Masukkan informasi sampah yang ditukarkan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="transaction-date">Tanggal Transaksi</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            id="transaction-date"
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pilih tanggal</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="transaction-type">Jenis Transaksi</Label>
                      <Select defaultValue="deposit">
                        <SelectTrigger id="transaction-type">
                          <SelectValue placeholder="Pilih jenis transaksi" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="deposit">Penyetoran Sampah</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="waste-category">Kategori Sampah</Label>
                      <Select value={wasteCategory} onValueChange={handleCategoryChange}>
                        <SelectTrigger id="waste-category">
                          <SelectValue placeholder="Pilih kategori sampah" />
                        </SelectTrigger>
                        <SelectContent>
                          {wasteCategories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label} ({category.pointsPerKg} poin/kg)
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="waste-weight">Berat Sampah (kg)</Label>
                      <div className="flex items-center gap-2">
                        <Input
                          id="waste-weight"
                          type="number"
                          step="0.1"
                          min="0.1"
                          placeholder="Masukkan berat dalam kg"
                          value={wasteWeight}
                          onChange={(e) => handleWeightChange(e.target.value)}
                        />
                        <div className="flex items-center gap-1 text-sm">
                          <Scale className="h-4 w-4 text-muted-foreground" />
                          kg
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="waste-details">Detail Sampah</Label>
                      <Input id="waste-details" placeholder="Contoh: Botol plastik bekas minuman" />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="transaction-status">Status</Label>
                      <Select defaultValue="completed">
                        <SelectTrigger id="transaction-status">
                          <SelectValue placeholder="Pilih status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="completed">Selesai</SelectItem>
                          <SelectItem value="pending">Tertunda</SelectItem>
                          <SelectItem value="cancelled">Dibatalkan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="notes">Catatan Tambahan</Label>
                    <Textarea id="notes" placeholder="Tambahkan catatan jika diperlukan" className="min-h-[100px]" />
                  </div>

                  {calculatedPoints !== null && (
                    <Alert className="bg-green-50 border-green-200">
                      <AlertCircle className="h-4 w-4 text-green-600" />
                      <AlertTitle className="text-green-800">Poin yang akan didapatkan</AlertTitle>
                      <AlertDescription className="text-green-800">
                        Anggota akan mendapatkan <span className="font-bold">{calculatedPoints} poin</span> dari
                        transaksi ini.
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsVerified(false)
                    setMemberData(null)
                  }}
                >
                  Batal
                </Button>
                <Button
                  className="bg-green-600 hover:bg-green-700"
                  disabled={!wasteCategory || !wasteWeight || calculatedPoints === null}
                  onClick={handleSubmitTransaction}
                >
                  Simpan Transaksi
                </Button>
              </CardFooter>
            </Card>
          )}
        </main>
      </div>
    </div>
  )
}
