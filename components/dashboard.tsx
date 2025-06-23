"use client"

import { useEffect, useState } from "react"
import supabase from "@/app/config/supabase-client"
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
  TrendingUp,
  Recycle,
  Leaf,
  Target,
  User,
} from "lucide-react"
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
import { Progress } from "@/components/ui/progress"

type User = {
  id: string
  name: string
  poin: number
}

export default function Dashboard() {

  const [fetchError, setFetchError] = useState()
  const [users, setUsers] = useState<User[]>([])

  const [todos, setTodos] = useState<User[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
      .from('user')
      .select('*')
      if (error) console.error(error)
      else setUsers(data as User[])
    }
  
    fetchData()
  }, [])
  

  const [currentPoints, setCurrentPoints] = useState(1250)

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

  const wasteData = [
    { type: "Plastik", amount: 45.2, unit: "kg", color: "bg-blue-500", percentage: 60 },
    { type: "Kertas", amount: 32.8, unit: "kg", color: "bg-green-500", percentage: 45 },
    { type: "Logam", amount: 18.5, unit: "kg", color: "bg-yellow-500", percentage: 30 },
    { type: "Kaca", amount: 12.3, unit: "kg", color: "bg-purple-500", percentage: 20 },
  ]

  const tips = [
    {
      title: "Pisahkan Sampah Organik",
      description: "Pisahkan sampah organik dari anorganik untuk memudahkan proses daur ulang.",
      icon: Leaf,
    },
    {
      title: "Bersihkan Kemasan Plastik",
      description: "Cuci bersih kemasan plastik sebelum disetor untuk meningkatkan nilai jual.",
      icon: Recycle,
    },
    {
      title: "Kumpulkan Sampah Kertas",
      description: "Kumpulkan kertas bekas dan majalah untuk mendapatkan poin tambahan.",
      icon: Target,
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
                    item.label === "Dasbor" ? "bg-muted text-primary" : "text-muted-foreground"
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
                      item.label === "Dasbor" ? "bg-muted text-foreground" : "text-muted-foreground"
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
                  placeholder="Cari transaksi, jadwal, atau hadiah..."
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
              <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
              <p className="text-sm text-muted-foreground">Pantau aktivitas dan poin Anda</p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Poin</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {users.map((user) => (<li key={user.id}>{user.poin.toString()}</li>))}
                </div>
                <p className="text-xs text-muted-foreground">+180 dari bulan lalu</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sampah Didaur Ulang</CardTitle>
                <Recycle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">108.8 kg</div>
                <p className="text-xs text-muted-foreground">+12.5kg minggu ini</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">CO₂ Dikurangi</CardTitle>
                <Leaf className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">38.2 kg</div>
                <p className="text-xs text-muted-foreground">Setara 156 pohon</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Transaksi Bulan Ini</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">+8 dari bulan lalu</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            {/* Recent Activities */}
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Aktivitas Terbaru</CardTitle>
                <CardDescription>Transaksi dan aktivitas terbaru Anda</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center gap-4">
                      <div className={`rounded-full bg-${activity.color}-100 p-2`}>
                        <activity.icon className={`h-4 w-4 text-${activity.color}-600`} />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                      </div>
                      <div
                        className={`text-sm font-medium ${activity.points.startsWith("+") ? "text-green-600" : activity.points.startsWith("-") ? "text-red-600" : "text-muted-foreground"}`}
                      >
                        {activity.points}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Link href="/riwayat">
                    <Button variant="outline" className="w-full">
                      <LineChart className="mr-2 h-4 w-4" />
                      Lihat Semua Riwayat
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Waste Breakdown */}
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Jenis Sampah</CardTitle>
                <CardDescription>Breakdown sampah yang telah Anda setor</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {wasteData.map((waste, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{waste.type}</span>
                        <span className="text-muted-foreground">
                          {waste.amount} {waste.unit}
                        </span>
                      </div>
                      <Progress value={waste.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tips Section */}
          <Card>
            <CardHeader>
              <CardTitle>Tips Pengelolaan Sampah</CardTitle>
              <CardDescription>Tips untuk memaksimalkan poin dan dampak lingkungan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg border">
                    <div className="rounded-full bg-green-100 p-2">
                      <tip.icon className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{tip.title}</h4>
                      <p className="text-sm text-muted-foreground">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/penukaran-sampah">
              <Card className="cursor-pointer transition-colors hover:bg-muted/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="rounded-full bg-green-100 p-3">
                    <Trash2 className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Catat Sampah</h3>
                    <p className="text-sm text-muted-foreground">Setor sampah dan dapatkan poin</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/jemput-sampah">
              <Card className="cursor-pointer transition-colors hover:bg-muted/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="rounded-full bg-blue-100 p-3">
                    <CalendarPlus className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Jadwal Penjemputan</h3>
                    <p className="text-sm text-muted-foreground">Atur jadwal penjemputan sampah</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/rewards">
              <Card className="cursor-pointer transition-colors hover:bg-muted/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="rounded-full bg-yellow-100 p-3">
                    <Award className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Tukar Poin</h3>
                    <p className="text-sm text-muted-foreground">Tukar poin dengan hadiah menarik</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}
