"use client"

import { useState } from "react"
import { Calculator, Plus, Minus, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import AppLayout from "./app-layout"
import AdminGuard from "./admin-guard"
import { useUser } from "@/hooks/use-user"

export default function PenukaranSampah() {
  const { user } = useUser()
  const [wasteItems, setWasteItems] = useState([
    { id: 1, type: "Plastik", weight: 0, price: 2000 },
    { id: 2, type: "Kertas", weight: 0, price: 1500 },
    { id: 3, type: "Logam", weight: 0, price: 5000 },
    { id: 4, type: "Kaca", weight: 0, price: 1000 },
  ])

  const [memberPhone, setMemberPhone] = useState("")
  const [memberInfo, setMemberInfo] = useState(null)

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
    setWasteItems(wasteItems.map((item) => ({ ...item, weight: 0 })))
    setMemberInfo(null)
    setMemberPhone("")
  }

  return (
    <AdminGuard>
      <AppLayout currentUser={user ?? undefined}>
        <div className="flex items-center justify-between mb-8">
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
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {memberInfo && (
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{memberInfo.name}</span>
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
        <Card className="mt-8">
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
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Catatan Tambahan</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea placeholder="Tambahkan catatan untuk transaksi ini (opsional)" className="min-h-[100px]" />
          </CardContent>
        </Card>
      </AppLayout>
    </AdminGuard>
  )
}
