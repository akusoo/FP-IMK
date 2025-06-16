"use client"

import { useState } from "react"
import {
  Camera,
  Edit,
  Shield,
  Smartphone,
  Mail,
  MapPin,
  Calendar,
  Trophy,
  Star,
  Target,
  Zap,
  Eye,
  EyeOff,
  Trash2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import AppLayout from "./app-layout"
import { useUser } from "@/hooks/use-user"

export default function ProfilePage() {
  const { user } = useUser()
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const userProfile = {
    name: "Budi Santoso",
    email: "budi.santoso@email.com",
    phone: "+62 812-3456-7890",
    address: "Jl. Merdeka No. 123, Jakarta Pusat, DKI Jakarta",
    joinDate: "12 Januari 2023",
    avatar: "/placeholder.svg?height=100&width=100",
    level: "Gold",
    currentPoints: 2450,
    totalWaste: 127.5,
    co2Saved: 45.2,
  }

  const achievements = [
    {
      id: 1,
      name: "Eco Warrior",
      description: "Setor sampah 50kg pertama",
      icon: Trophy,
      earned: true,
      date: "15 Mar 2023",
    },
    {
      id: 2,
      name: "Green Champion",
      description: "Setor sampah 100kg",
      icon: Star,
      earned: true,
      date: "20 Jun 2023",
    },
    {
      id: 3,
      name: "Planet Saver",
      description: "Kurangi 50kg CO₂",
      icon: Target,
      earned: false,
      progress: 90,
    },
    {
      id: 4,
      name: "Consistency King",
      description: "Setor sampah 30 hari berturut-turut",
      icon: Zap,
      earned: false,
      progress: 60,
    },
  ]

  const handleSaveProfile = () => {
    alert("Profil berhasil diperbarui!")
  }

  const handleChangePassword = () => {
    alert("Password berhasil diubah!")
  }

  return (
    <AppLayout currentUser={user}>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-lg font-semibold md:text-2xl">Profil Pengguna</h1>
          <p className="text-sm text-muted-foreground">Kelola informasi profil dan pengaturan akun Anda</p>
        </div>
      </div>

      {/* Profile Header Card */}
      <Card className="bg-gradient-to-r from-green-500 to-blue-600 text-white mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-6">
            <div className="relative">
              <Avatar className="h-20 w-20 border-4 border-white/20">
                <AvatarImage src={userProfile.avatar || "/placeholder.svg"} alt={userProfile.name} />
                <AvatarFallback className="bg-white/20 text-white text-xl">
                  {userProfile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-white text-green-600 hover:bg-white/90"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold">{userProfile.name}</h2>
              <p className="text-white/80 mb-2">{userProfile.email}</p>
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Level {userProfile.level}
                </Badge>
                <span className="text-sm">Bergabung sejak {userProfile.joinDate}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{userProfile.currentPoints.toLocaleString()}</div>
              <div className="text-white/80">Poin Tersedia</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-green-100 p-2">
                <Trash2 className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Sampah Disetorkan</p>
                <p className="text-xl font-bold">{userProfile.totalWaste} kg</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-blue-100 p-2">
                <Target className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">CO₂ yang Dikurangi</p>
                <p className="text-xl font-bold">{userProfile.co2Saved} kg</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-yellow-100 p-2">
                <Trophy className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pencapaian Diraih</p>
                <p className="text-xl font-bold">{achievements.filter((a) => a.earned).length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profil</TabsTrigger>
          <TabsTrigger value="security">Keamanan</TabsTrigger>
          <TabsTrigger value="notifications">Notifikasi</TabsTrigger>
          <TabsTrigger value="achievements">Pencapaian</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Informasi Profil</CardTitle>
              <CardDescription>Perbarui informasi profil dan kontak Anda</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input id="name" defaultValue={userProfile.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="email" type="email" defaultValue={userProfile.email} className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Nomor Telepon</Label>
                    <div className="relative">
                      <Smartphone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="phone" type="tel" defaultValue={userProfile.phone} className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birthdate">Tanggal Lahir</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="birthdate" type="date" className="pl-10" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Alamat</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Textarea id="address" defaultValue={userProfile.address} className="pl-10 min-h-[100px]" />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button className="bg-green-600 hover:bg-green-700" onClick={handleSaveProfile}>
                    <Edit className="mr-2 h-4 w-4" />
                    Simpan Perubahan
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Keamanan Akun</CardTitle>
              <CardDescription>Kelola password dan pengaturan keamanan akun Anda</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Password Saat Ini</Label>
                  <div className="relative">
                    <Shield className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="current-password"
                      type={showCurrentPassword ? "text" : "password"}
                      className="pl-10 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    >
                      {showCurrentPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">Password Baru</Label>
                  <div className="relative">
                    <Shield className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="new-password" type={showNewPassword ? "text" : "password"} className="pl-10 pr-10" />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Konfirmasi Password Baru</Label>
                  <div className="relative">
                    <Shield className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                      className="pl-10 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h4 className="font-medium">Pengaturan Keamanan Tambahan</h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Autentikasi Dua Faktor</p>
                      <p className="text-sm text-muted-foreground">Tambahkan lapisan keamanan ekstra untuk akun Anda</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Notifikasi Login</p>
                      <p className="text-sm text-muted-foreground">
                        Dapatkan notifikasi saat ada login dari perangkat baru
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button className="bg-green-600 hover:bg-green-700" onClick={handleChangePassword}>
                    <Shield className="mr-2 h-4 w-4" />
                    Ubah Password
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Pengaturan Notifikasi</CardTitle>
              <CardDescription>Atur preferensi notifikasi yang ingin Anda terima</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-4">Notifikasi Email</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Konfirmasi Transaksi</p>
                        <p className="text-sm text-muted-foreground">
                          Email konfirmasi setiap kali Anda melakukan transaksi
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Update Poin</p>
                        <p className="text-sm text-muted-foreground">
                          Notifikasi saat poin Anda bertambah atau berkurang
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Promosi & Penawaran</p>
                        <p className="text-sm text-muted-foreground">
                          Informasi tentang hadiah baru dan penawaran khusus
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium mb-4">Notifikasi Push</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Status Penjemputan</p>
                        <p className="text-sm text-muted-foreground">
                          Update real-time tentang status penjemputan sampah
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Reminder Jadwal</p>
                        <p className="text-sm text-muted-foreground">Pengingat jadwal penjemputan sampah</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Pencapaian Baru</p>
                        <p className="text-sm text-muted-foreground">Notifikasi saat Anda meraih pencapaian baru</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Pencapaian & Badge</CardTitle>
              <CardDescription>Lihat pencapaian yang telah Anda raih dan yang sedang dalam progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {achievements.map((achievement) => (
                  <Card
                    key={achievement.id}
                    className={`relative ${achievement.earned ? "bg-green-50 border-green-200" : ""}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className={`rounded-full p-3 ${achievement.earned ? "bg-green-100" : "bg-muted"}`}>
                          <achievement.icon
                            className={`h-6 w-6 ${achievement.earned ? "text-green-600" : "text-muted-foreground"}`}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold">{achievement.name}</h4>
                            {achievement.earned && (
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Selesai</Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                          {achievement.earned ? (
                            <p className="text-xs text-green-600">Diraih pada {achievement.date}</p>
                          ) : (
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-muted-foreground">Progress</span>
                                <span className="text-xs text-muted-foreground">{achievement.progress}%</span>
                              </div>
                              <Progress value={achievement.progress} className="h-2" />
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AppLayout>
  )
}
