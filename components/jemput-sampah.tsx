"use client"

import { useState } from "react"
import { CalendarPlus, MapPin, Clock, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AppLayout from "./app-layout"
import { useUser } from "@/hooks/use-user"

export default function JemputSampah() {
  const { user } = useUser()
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  const [weight, setWeight] = useState(0)
  const [category, setCategory] = useState("")

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
    <AppLayout currentUser={user ?? undefined}>
      <div className="flex items-center justify-between mb-8">
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
              <Textarea id="address" placeholder="Masukkan alamat lengkap untuk penjemputan" className="min-h-[80px]" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Nomor Telepon</Label>
              <Input id="phone" type="tel" placeholder="08123456789" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Kategori Sampah</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Plastik">Plastik</SelectItem>
                  <SelectItem value="Kertas">Kertas</SelectItem>
                  <SelectItem value="Logam">Logam</SelectItem>
                  <SelectItem value="Kaca">Kaca</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="weight">Berat (kg)</Label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setWeight(Math.max(0, Math.round((weight - 0.1) * 10) / 10))}
                  disabled={weight === 0}
                >
                  –
                </Button>
                <div className="w-20 text-center">
                  <span className="font-mono text-lg">{weight.toFixed(1)}</span>
                  <p className="text-xs text-muted-foreground">kg</p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setWeight(Math.round((weight + 0.1) * 10) / 10)}
                >
                  +
                </Button>
              </div>
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
      <Card className="mt-8">
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
    </AppLayout>
  )
}
