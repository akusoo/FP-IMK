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
  Trash2,
  Award,
  Users,
  SettingsIcon,
  LogOut,
  Gift,
  Star,
  ShoppingCart,
  Zap,
  Crown,
  Trophy,
  Filter,
  Search,
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function RewardsPage() {
  const [selectedReward, setSelectedReward] = useState<any>(null)
  const [isRedeemDialogOpen, setIsRedeemDialogOpen] = useState(false)

  const navigationItems = [
    { href: "/", icon: Home, label: "Dasbor" },
    { href: "/penukaran-sampah", icon: Trash2, label: "Catat Sampah" },
    { href: "/jemput-sampah", icon: CalendarPlus, label: "Jadwal Penjemputan" },
    { href: "/riwayat", icon: LineChart, label: "Riwayat" },
    { href: "/rewards", icon: Award, label: "Poin & Hadiah" },
  ]

  const userStats = {
    currentPoints: 2450,
    level: "Gold",
    nextLevel: "Platinum",
    pointsToNextLevel: 550,
    totalEarned: 15680,
    totalRedeemed: 13230,
  }

  const rewards = [
    {
      id: 1,
      name: "Voucher Belanja Rp 50.000",
      category: "voucher",
      points: 500,
      image: "/placeholder.svg?height=200&width=200",
      description: "Voucher belanja untuk supermarket dan minimarket",
      stock: 25,
      popular: true,
    },
    {
      id: 2,
      name: "Tumbler Stainless Steel",
      category: "merchandise",
      points: 800,
      image: "/placeholder.svg?height=200&width=200",
      description: "Tumbler ramah lingkungan kapasitas 500ml",
      stock: 15,
      popular: false,
    },
    {
      id: 3,
      name: "Pulsa Rp 25.000",
      category: "digital",
      points: 250,
      image: "/placeholder.svg?height=200&width=200",
      description: "Pulsa untuk semua operator",
      stock: 100,
      popular: true,
    },
    {
      id: 4,
      name: "Tas Belanja Ramah Lingkungan",
      category: "merchandise",
      points: 600,
      image: "/placeholder.svg?height=200&width=200",
      description: "Tas belanja dari bahan daur ulang",
      stock: 20,
      popular: false,
    },
    {
      id: 5,
      name: "Voucher Grab Rp 30.000",
      category: "voucher",
      points: 300,
      image: "/placeholder.svg?height=200&width=200",
      description: "Voucher transportasi online",
      stock: 50,
      popular: true,
    },
    {
      id: 6,
      name: "Bibit Tanaman Hias",
      category: "merchandise",
      points: 400,
      image: "/placeholder.svg?height=200&width=200",
      description: "Paket 3 bibit tanaman hias dalam pot",
      stock: 12,
      popular: false,
    },
  ]

  const redeemHistory = [
    {
      id: "RDM-001",
      date: "15 Nov 2023",
      item: "Voucher Belanja Rp 50.000",
      points: -500,
      status: "Berhasil",
    },
    {
      id: "RDM-002",
      date: "10 Nov 2023",
      item: "Pulsa Rp 25.000",
      points: -250,
      status: "Berhasil",
    },
    {
      id: "RDM-003",
      date: "05 Nov 2023",
      item: "Tumbler Stainless Steel",
      points: -800,
      status: "Dalam Proses",
    },
  ]

  const handleRedeem = (reward: any) => {
    setSelectedReward(reward)
    setIsRedeemDialogOpen(true)
  }

  const confirmRedeem = () => {
    alert(`Berhasil menukar ${selectedReward.name}!`)
    setIsRedeemDialogOpen(false)
    setSelectedReward(null)
  }

  const levelProgress = (userStats.pointsToNextLevel / 1000) * 100

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
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted">
                      <div className="rounded-full bg-green-100 p-1">
                        <Trash2 className="h-3 w-3 text-green-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">Setor Plastik 2.5kg</p>
                        <p className="text-xs text-muted-foreground">+125 poin • 2 jam lalu</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted">
                      <div className="rounded-full bg-blue-100 p-1">
                        <CalendarPlus className="h-3 w-3 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">Jadwal Penjemputan</p>
                        <p className="text-xs text-muted-foreground">Besok, 09:00 • Dikonfirmasi</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted">
                      <div className="rounded-full bg-yellow-100 p-1">
                        <Award className="h-3 w-3 text-yellow-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">Tukar Voucher Belanja</p>
                        <p className="text-xs text-muted-foreground">-500 poin • 1 hari lalu</p>
                      </div>
                    </div>
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
                    item.label === "Poin & Hadiah" ? "bg-muted text-primary" : "text-muted-foreground"
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
                      item.label === "Poin & Hadiah" ? "bg-muted text-foreground" : "text-muted-foreground"
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
                  placeholder="Cari hadiah..."
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
            <div>
              <h1 className="text-lg font-semibold md:text-2xl">Poin & Hadiah</h1>
              <p className="text-sm text-muted-foreground">Tukarkan poin Anda dengan berbagai hadiah menarik</p>
            </div>
          </div>

          {/* User Stats Card */}
          <Card className="bg-gradient-to-r from-green-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Crown className="h-6 w-6" />
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      Level {userStats.level}
                    </Badge>
                  </div>
                  <h2 className="text-3xl font-bold">{userStats.currentPoints.toLocaleString()} Poin</h2>
                  <p className="text-white/80">Poin tersedia</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-5 w-5" />
                    <span className="text-sm">Menuju {userStats.nextLevel}</span>
                  </div>
                  <div className="w-32">
                    <Progress value={levelProgress} className="h-2 bg-white/20" />
                    <p className="text-xs text-white/80 mt-1">{userStats.pointsToNextLevel} poin lagi</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="catalog" className="w-full">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <TabsList>
                <TabsTrigger value="catalog">Katalog Hadiah</TabsTrigger>
                <TabsTrigger value="history">Riwayat Penukaran</TabsTrigger>
              </TabsList>

              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[180px] h-8">
                    <SelectValue placeholder="Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Kategori</SelectItem>
                    <SelectItem value="voucher">Voucher</SelectItem>
                    <SelectItem value="merchandise">Merchandise</SelectItem>
                    <SelectItem value="digital">Digital</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" size="sm" className="h-8">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>
            </div>

            <TabsContent value="catalog" className="mt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {rewards.map((reward) => (
                  <Card key={reward.id} className="relative overflow-hidden">
                    {reward.popular && (
                      <Badge className="absolute top-2 left-2 z-10 bg-orange-500 hover:bg-orange-600">
                        <Star className="mr-1 h-3 w-3" />
                        Populer
                      </Badge>
                    )}
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={reward.image || "/placeholder.svg"}
                        alt={reward.name}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold line-clamp-2 mb-2">{reward.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{reward.description}</p>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1">
                          <Award className="h-4 w-4 text-green-600" />
                          <span className="font-bold text-green-600">{reward.points} Poin</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          Stok: {reward.stock}
                        </Badge>
                      </div>
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700"
                        disabled={userStats.currentPoints < reward.points || reward.stock === 0}
                        onClick={() => handleRedeem(reward)}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        {userStats.currentPoints < reward.points ? "Poin Tidak Cukup" : "Tukar Sekarang"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="history" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Riwayat Penukaran</CardTitle>
                  <CardDescription>Daftar hadiah yang telah Anda tukarkan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {redeemHistory.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-green-100 p-2">
                            <Gift className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">{item.item}</p>
                            <p className="text-sm text-muted-foreground">
                              ID: {item.id} • {item.date}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-red-600">{item.points} Poin</p>
                          <Badge variant={item.status === "Berhasil" ? "default" : "secondary"} className="text-xs">
                            {item.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Total Poin Diperoleh</p>
                    <p className="text-xl font-bold">{userStats.totalEarned.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Total Poin Ditukar</p>
                    <p className="text-xl font-bold">{userStats.totalRedeemed.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Hadiah Ditukar</p>
                    <p className="text-xl font-bold">{redeemHistory.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      {/* Redeem Confirmation Dialog */}
      <Dialog open={isRedeemDialogOpen} onOpenChange={setIsRedeemDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Konfirmasi Penukaran</DialogTitle>
            <DialogDescription>Apakah Anda yakin ingin menukar poin dengan hadiah ini?</DialogDescription>
          </DialogHeader>
          {selectedReward && (
            <div className="py-4">
              <div className="flex items-center gap-4">
                <img
                  src={selectedReward.image || "/placeholder.svg"}
                  alt={selectedReward.name}
                  className="h-16 w-16 rounded-lg object-cover"
                />
                <div>
                  <h4 className="font-semibold">{selectedReward.name}</h4>
                  <p className="text-sm text-muted-foreground">{selectedReward.description}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <Award className="h-4 w-4 text-green-600" />
                    <span className="font-bold text-green-600">{selectedReward.points} Poin</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <div className="flex justify-between text-sm">
                  <span>Poin Saat Ini:</span>
                  <span>{userStats.currentPoints.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Poin yang Digunakan:</span>
                  <span className="text-red-600">-{selectedReward.points.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2 mt-2">
                  <span>Sisa Poin:</span>
                  <span>{(userStats.currentPoints - selectedReward.points).toLocaleString()}</span>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsRedeemDialogOpen(false)}>
              Batal
            </Button>
            <Button className="bg-green-600 hover:bg-green-700" onClick={confirmRedeem}>
              Konfirmasi Penukaran
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
