"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Bell,
  CalendarPlus,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package2,
  Trash2,
  Award,
  Users,
  SettingsIcon,
  LogOut,
  MapPin,
  Truck,
  Bike,
  Car,
  Clock,
  ArrowRight,
  CalendarIcon,
  Clock3,
  Info,
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
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

export default function WastePickupPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined)
  const [selectedVehicle, setSelectedVehicle] = useState<string>("motorcycle")
  const [selectedWasteCenter, setSelectedWasteCenter] = useState<string | undefined>(undefined)
  const [pickupAddress, setPickupAddress] = useState("")
  const [step, setStep] = useState(1)

  const navigationItems = [
    { href: "#", icon: Home, label: "Dasbor" },
    { href: "#", icon: Trash2, label: "Catat Sampah" },
    { href: "#", icon: CalendarPlus, label: "Jadwal Penjemputan" },
    { href: "#", icon: LineChart, label: "Riwayat" },
    { href: "#", icon: Award, label: "Poin & Hadiah" },
  ]

  const wasteCenters = [
    {
      id: "wc1",
      name: "Bank Sampah Bersih Sejahtera",
      address: "Jl. Merdeka No. 123, Jakarta Pusat",
      distance: 2.5,
      rating: 4.8,
    },
    {
      id: "wc2",
      name: "Bank Sampah Hijau",
      address: "Jl. Sudirman No. 45, Jakarta Selatan",
      distance: 3.2,
      rating: 4.6,
    },
    {
      id: "wc3",
      name: "Bank Sampah Mandiri",
      address: "Jl. Gatot Subroto No. 67, Jakarta Selatan",
      distance: 4.1,
      rating: 4.7,
    },
  ]

  const vehicles = [
    {
      id: "motorcycle",
      name: "Motor",
      icon: Bike,
      capacity: "Hingga 20kg",
      price: 15000,
      eta: "15-25",
    },
    {
      id: "car",
      name: "Mobil",
      icon: Car,
      capacity: "Hingga 100kg",
      price: 35000,
      eta: "20-30",
    },
    {
      id: "truck",
      name: "Truk Kecil",
      icon: Truck,
      capacity: "Hingga 500kg",
      price: 75000,
      eta: "30-45",
    },
  ]

  const timeSlots = ["08:00 - 10:00", "10:00 - 12:00", "13:00 - 15:00", "15:00 - 17:00"]

  const getSelectedVehicleDetails = () => {
    return vehicles.find((v) => v.id === selectedVehicle)
  }

  const getSelectedWasteCenterDetails = () => {
    return wasteCenters.find((wc) => wc.id === selectedWasteCenter)
  }

  const handleContinue = () => {
    if (step === 1 && pickupAddress && selectedWasteCenter) {
      setStep(2)
    } else if (step === 2 && selectedVehicle && date && selectedTime) {
      setStep(3)
    } else if (step === 3) {
      // Submit order
      alert("Permintaan penjemputan sampah berhasil dibuat!")
      // Reset form
      setStep(1)
      setPickupAddress("")
      setSelectedWasteCenter(undefined)
      setSelectedVehicle("motorcycle")
      setDate(new Date())
      setSelectedTime(undefined)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const calculatePrice = () => {
    const vehicle = getSelectedVehicleDetails()
    const wasteCenter = getSelectedWasteCenterDetails()

    if (!vehicle || !wasteCenter) return 0

    // Base price + distance fee
    return vehicle.price + Math.round(wasteCenter.distance) * 5000
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
            <h2 className="text-lg font-semibold">Jemput Sampah</h2>
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
            <div>
              <h1 className="text-lg font-semibold md:text-2xl">Pesan Layanan Jemput Sampah</h1>
              <p className="text-sm text-muted-foreground">
                Kami akan menjemput sampah Anda dan mengantarkannya ke bank sampah pilihan Anda
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 1 ? "bg-green-600" : "bg-muted"} text-white`}
            >
              1
            </div>
            <div className={`h-1 w-full ${step >= 2 ? "bg-green-600" : "bg-muted"}`}></div>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 2 ? "bg-green-600" : "bg-muted"} text-white`}
            >
              2
            </div>
            <div className={`h-1 w-full ${step >= 3 ? "bg-green-600" : "bg-muted"}`}></div>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 3 ? "bg-green-600" : "bg-muted"} text-white`}
            >
              3
            </div>
          </div>

          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Lokasi Penjemputan & Tujuan</CardTitle>
                <CardDescription>Pilih lokasi penjemputan dan bank sampah tujuan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="pickup-location">Lokasi Penjemputan</Label>
                    <div className="flex gap-2">
                      <Input
                        id="pickup-location"
                        placeholder="Masukkan alamat penjemputan"
                        value={pickupAddress}
                        onChange={(e) => setPickupAddress(e.target.value)}
                      />
                      <Button variant="outline" size="icon">
                        <MapPin className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">Atau pilih lokasi di peta</p>
                  </div>

                  <div className="aspect-video w-full rounded-md bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-8 w-8 mx-auto text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mt-2">Peta akan ditampilkan di sini</p>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <Label>Pilih Bank Sampah Tujuan</Label>
                    <RadioGroup value={selectedWasteCenter} onValueChange={setSelectedWasteCenter}>
                      {wasteCenters.map((center) => (
                        <div key={center.id} className="flex items-center space-x-2">
                          <RadioGroupItem value={center.id} id={center.id} />
                          <Label htmlFor={center.id} className="flex flex-1 cursor-pointer justify-between">
                            <div>
                              <p className="font-medium">{center.name}</p>
                              <p className="text-sm text-muted-foreground">{center.address}</p>
                            </div>
                            <div className="text-right">
                              <Badge variant="outline">{center.distance} km</Badge>
                              <p className="text-sm text-muted-foreground">Rating: {center.rating}/5</p>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" disabled>
                  Kembali
                </Button>
                <Button
                  className="bg-green-600 hover:bg-green-700"
                  disabled={!pickupAddress || !selectedWasteCenter}
                  onClick={handleContinue}
                >
                  Lanjutkan
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Pilih Kendaraan & Jadwal</CardTitle>
                <CardDescription>Pilih jenis kendaraan dan jadwal penjemputan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label>Pilih Jenis Kendaraan</Label>
                    <RadioGroup value={selectedVehicle} onValueChange={setSelectedVehicle}>
                      <div className="grid gap-3 md:grid-cols-3">
                        {vehicles.map((vehicle) => (
                          <div
                            key={vehicle.id}
                            className={`flex cursor-pointer flex-col rounded-lg border p-4 ${
                              selectedVehicle === vehicle.id ? "border-green-600 bg-green-50" : ""
                            }`}
                            onClick={() => setSelectedVehicle(vehicle.id)}
                          >
                            <RadioGroupItem value={vehicle.id} id={vehicle.id} className="sr-only" />
                            <div className="flex items-center justify-between">
                              {vehicle.icon && <vehicle.icon className="h-6 w-6 text-green-600" />}
                              <Badge variant="outline">{vehicle.capacity}</Badge>
                            </div>
                            <p className="mt-3 font-medium">{vehicle.name}</p>
                            <div className="mt-1 flex items-center text-sm text-muted-foreground">
                              <Clock className="mr-1 h-3 w-3" />
                              <span>{vehicle.eta} menit</span>
                            </div>
                            <p className="mt-2 font-medium text-green-600">Rp {vehicle.price.toLocaleString()}</p>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  <Separator />

                  <div className="grid gap-3">
                    <Label>Pilih Tanggal Penjemputan</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pilih tanggal</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => {
                            // Disable dates in the past
                            const today = new Date()
                            today.setHours(0, 0, 0, 0)
                            return date < today
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="grid gap-3">
                    <Label>Pilih Waktu Penjemputan</Label>
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          type="button"
                          variant={selectedTime === time ? "default" : "outline"}
                          className={selectedTime === time ? "bg-green-600 hover:bg-green-700" : ""}
                          onClick={() => setSelectedTime(time)}
                        >
                          <Clock3 className="mr-2 h-4 w-4" />
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="waste-description">Deskripsi Sampah</Label>
                    <Textarea
                      id="waste-description"
                      placeholder="Jelaskan jenis dan perkiraan jumlah sampah yang akan dijemput"
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handleBack}>
                  Kembali
                </Button>
                <Button
                  className="bg-green-600 hover:bg-green-700"
                  disabled={!selectedVehicle || !date || !selectedTime}
                  onClick={handleContinue}
                >
                  Lanjutkan
                </Button>
              </CardFooter>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Konfirmasi Pesanan</CardTitle>
                <CardDescription>Periksa detail pesanan Anda sebelum melanjutkan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Detail Lokasi</h3>
                    <div className="mt-3 grid gap-2">
                      <div className="flex justify-between">
                        <div className="flex items-start gap-2">
                          <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">Lokasi Penjemputan</p>
                            <p className="text-sm text-muted-foreground">{pickupAddress}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center py-2">
                        <ArrowRight className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-start gap-2">
                          <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">Bank Sampah Tujuan</p>
                            <p className="text-sm text-muted-foreground">{getSelectedWasteCenterDetails()?.name}</p>
                            <p className="text-sm text-muted-foreground">{getSelectedWasteCenterDetails()?.address}</p>
                          </div>
                        </div>
                        <Badge variant="outline">{getSelectedWasteCenterDetails()?.distance} km</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Detail Penjemputan</h3>
                    <div className="mt-3 grid gap-3">
                      <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                          {(() => {
                            const vehicleDetails = getSelectedVehicleDetails()
                            const IconComponent = vehicleDetails?.icon
                            return IconComponent ? <IconComponent className="h-5 w-5 text-green-600" /> : null
                          })()}
                          <p className="text-sm">
                            {getSelectedVehicleDetails()?.name} ({getSelectedVehicleDetails()?.capacity})
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                          <p className="text-sm">{date ? format(date, "PPP") : ""}</p>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <p className="text-sm">{selectedTime}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Rincian Biaya</h3>
                    <div className="mt-3 space-y-2">
                      <div className="flex justify-between">
                        <p className="text-sm">Biaya Layanan ({getSelectedVehicleDetails()?.name})</p>
                        <p className="text-sm">Rp {getSelectedVehicleDetails()?.price.toLocaleString()}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm">Biaya Jarak ({getSelectedWasteCenterDetails()?.distance} km)</p>
                        <p className="text-sm">
                          Rp {(Math.round(getSelectedWasteCenterDetails()?.distance || 0) * 5000).toLocaleString()}
                        </p>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between font-medium">
                        <p>Total</p>
                        <p className="text-green-600">Rp {calculatePrice().toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 p-3 text-blue-800">
                    <Info className="h-5 w-5" />
                    <p className="text-sm">
                      Anda akan mendapatkan poin sesuai dengan jenis dan berat sampah yang dijemput setelah sampah
                      diterima oleh bank sampah.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handleBack}>
                  Kembali
                </Button>
                <Button className="bg-green-600 hover:bg-green-700" onClick={handleContinue}>
                  Konfirmasi Pesanan
                </Button>
              </CardFooter>
            </Card>
          )}
        </main>
      </div>
    </div>
  )
}
