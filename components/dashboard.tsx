"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Recycle, Star, ArrowUpRight } from "lucide-react"
import AppLayout from "./app-layout"
import { useUser } from "@/hooks/use-user"

export default function Dashboard() {
  const { user } = useUser()

  const recentActivities = [
    {
      type: "Plastik (Botol)",
      quantity: "2.5 Kg",
      points: "+50 Poin",
      date: "5/6/2025",
    },
    {
      type: "Plastik (Botol)",
      quantity: "2.5 Kg",
      points: "+50 Poin",
      date: "5/6/2025",
    },
  ]

  const rewards = [
    {
      title: "Voucher Shell",
      description: "Payment for shell product",
      points: "120 poin",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Voucher Shell",
      description: "Payment for shell product",
      points: "120 poin",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Voucher Shell",
      description: "Payment for shell product",
      points: "120 poin",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Voucher Shell",
      description: "Payment for shell product",
      points: "120 poin",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
        <AppLayout currentUser={user ?? undefined}>
        <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <Card className="border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Recycle className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-gray-600 font-medium">Total Daur Ulang</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">75,2 Kg</div>
              <div className="text-sm text-gray-500">+3.5 kg minggu ini</div>
            </CardContent>
          </Card>

          <Card className="border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-yellow-600" />
                </div>
                <span className="text-gray-600 font-medium">Poin Terkumpul</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">1,850 Poin</div>
              <div className="text-sm text-gray-500">+120 poin minggu ini</div>
            </CardContent>
          </Card>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 gap-8">
          {/* Bank Sampah Terdekat */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Bank Sampah Terdekat</h2>
            <Card className="border-gray-200">
              <CardContent className="p-0">
                <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=256&width=400"
                    alt="Map showing nearby waste banks"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Rewards */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Rewards</h2>
                <p className="text-sm text-gray-600">Tukarkan poin anda dengan voucher voucher yang menggiurkan</p>
              </div>
              <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
                <a href="/rewards">
                  Lihat Semua
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {rewards.map((reward, index) => (
                <Card key={index} className="border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm">{reward.title}</h3>
                        <p className="text-xs text-gray-500 mb-1">{reward.description}</p>
                        <div className="text-xs font-medium text-gray-900">{reward.points}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Aktivitas Terbaru */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Aktivitas Terbaru</h2>
              <p className="text-sm text-gray-600">Daftar pencatatan sampah dan penjemputan terakhir anda</p>
            </div>
            <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
              <a href="/riwayat">
                Lihat Semua
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>

          <Card className="border-gray-200">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Jenis Sampah</th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Jumlah</th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Poin</th>
                      <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Tanggal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentActivities.map((activity, index) => (
                      <tr key={index} className="border-b border-gray-100 last:border-b-0">
                        <td className="py-4 px-6 text-sm font-medium text-gray-900">{activity.type}</td>
                        <td className="py-4 px-6 text-sm text-gray-600">{activity.quantity}</td>
                        <td className="py-4 px-6">
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{activity.points}</Badge>
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-600">{activity.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  )
}
