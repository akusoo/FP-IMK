"use client"

import Link from "next/link"
import {
  ArrowRight,
  Recycle,
  Truck,
  Gift,
  BarChart3,
  Users,
  Leaf,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <Recycle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">SampahKu.id</span>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/auth">
                <Button variant="ghost" className="text-gray-600 hover:text-green-600">
                  Masuk
                </Button>
              </Link>
              <Link href="/auth">
                <Button className="bg-green-600 hover:bg-green-700 text-white">Daftar Sekarang</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-100 text-green-800 mb-4">
                🌱 Platform Bank Sampah Digital #1 di Indonesia
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Kelola Sampah,
                <span className="text-green-600"> Raih Keuntungan</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Bergabunglah dengan revolusi pengelolaan sampah digital. Tukar sampah Anda menjadi poin, dapatkan reward
                menarik, dan berkontribusi untuk lingkungan yang lebih bersih.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/auth">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                    Mulai Sekarang
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>100% Gratis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Mudah Digunakan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Ramah Lingkungan</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-green-500 rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-between text-white mb-4">
                    <span className="text-lg font-semibold">Total Poin Anda</span>
                    <Recycle className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-white">2,450 Poin</div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Plastik (5kg)</span>
                    <span className="font-semibold text-green-600">+500 poin</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Kertas (3kg)</span>
                    <span className="font-semibold text-green-600">+300 poin</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Logam (2kg)</span>
                    <span className="font-semibold text-green-600">+400 poin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">10K+</div>
              <div className="text-gray-600">Pengguna Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Bank Sampah Partner</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100T</div>
              <div className="text-gray-600">Sampah Terkumpul (kg)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">5M+</div>
              <div className="text-gray-600">Poin Terdistribusi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Removed: Fitur Unggulan SampahKu.id title and description */}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Recycle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Catat Sampah Digital</h3>
                <p className="text-gray-600 leading-relaxed">
                  Catat dan kelola sampah Anda secara digital. Dapatkan poin untuk setiap sampah yang Anda setorkan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Jemput Sampah</h3>
                <p className="text-gray-600 leading-relaxed">
                  Layanan penjemputan sampah langsung ke rumah Anda. Praktis dan mudah dengan sekali klik.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Gift className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tukar Poin Reward</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tukarkan poin Anda dengan berbagai hadiah menarik, voucher, atau saldo digital.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tracking & Analytics</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pantau progress kontribusi lingkungan Anda dengan dashboard analytics yang lengkap.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Komunitas Hijau</h3>
                <p className="text-gray-600 leading-relaxed">
                  Bergabung dengan komunitas peduli lingkungan dan berbagi tips pengelolaan sampah.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Impact Lingkungan</h3>
                <p className="text-gray-600 leading-relaxed">
                  Lihat dampak positif kontribusi Anda terhadap lingkungan dalam bentuk data yang mudah dipahami.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Removed: Cara Kerja SampahKu.id title and description */}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Daftar & Verifikasi</h3>
              <p className="text-gray-600 leading-relaxed">
                Buat akun gratis dan verifikasi identitas Anda untuk mulai menggunakan platform.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kumpulkan & Setor</h3>
              <p className="text-gray-600 leading-relaxed">
                Kumpulkan sampah di rumah dan setor ke bank sampah terdekat atau gunakan layanan jemput.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Dapatkan Reward</h3>
              <p className="text-gray-600 leading-relaxed">
                Tukarkan poin yang terkumpul dengan berbagai hadiah menarik dan manfaat lainnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Mengapa Memilih SampahKu.id?</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Mudah & Praktis</h3>
                    <p className="text-gray-600">
                      Interface yang user-friendly dan proses yang sederhana untuk semua kalangan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Menguntungkan</h3>
                    <p className="text-gray-600">
                      Dapatkan poin dan reward dari sampah yang biasanya hanya dibuang begitu saja.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Dampak Positif</h3>
                    <p className="text-gray-600">
                      Berkontribusi langsung untuk lingkungan yang lebih bersih dan berkelanjutan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Terpercaya</h3>
                    <p className="text-gray-600">
                      Platform yang telah dipercaya oleh ribuan pengguna di seluruh Indonesia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Siap Memulai Perjalanan Hijau Anda?</h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Bergabunglah dengan ribuan pengguna lainnya yang telah merasakan manfaat mengelola sampah dengan SampahKu.id
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
                Daftar Gratis Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3"
            >
              Hubungi Kami
            </Button>
          </div>

          <div className="mt-8 text-green-100 text-sm">
            Gratis selamanya • Tanpa biaya tersembunyi • Mulai dalam 2 menit
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <Recycle className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">SampahKu.id</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Platform Bank Sampah Digital terdepan di Indonesia. Bersama-sama kita ciptakan lingkungan yang lebih
                bersih dan berkelanjutan.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Jakarta, Indonesia</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2 text-gray-400">
                 <li>Bank Sampah Digital</li>
                <li>Jemput Sampah</li>
                <li>Tukar Poin</li>
                <li>Komunitas</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Kontak</h3>
             <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+62 812 8595 1314</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">info@sampahku.id</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">© 2024 SampahKu.id. All rights reserved.</div>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
