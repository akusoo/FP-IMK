"use client"
import { useState } from "react"
import { Filter, ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AppLayout from "./app-layout"
import { useUser } from "@/hooks/use-user"

export default function RiwayatPage() {
  const { user } = useUser()
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState("tanggal")
  const [sortOrder, setSortOrder] = useState("desc")
  const [filterStatus, setFilterStatus] = useState("semua")

  const transactions = [
    {
      id: "RCY-001",
      tanggal: "05 Juni 2025",
      jenis: "penyetoran",
      kategori: "Botol",
      detail: "Botol Plastik",
      berat: "3.5 Kg",
      poin: "+50",
      status: "Selesai",
    },
    {
      id: "RCY-002",
      tanggal: "05 Juni 2025",
      jenis: "Penukaran",
      kategori: "-",
      detail: "Voucher",
      berat: "-",
      poin: "-50",
      status: "Selesai",
    },
    {
      id: "RCY-003",
      tanggal: "05 Juni 2025",
      jenis: "Penjemputan",
      kategori: "Botol",
      detail: "Botol Plastik",
      berat: "3.5 Kg",
      poin: "+50",
      status: "Selesai",
    },
    {
      id: "RCY-004",
      tanggal: "05 Juni 2025",
      jenis: "Penjemputan",
      kategori: "Botol",
      detail: "Botol Plastik",
      berat: "3.5 Kg",
      poin: "+50",
      status: "Selesai",
    },
    {
      id: "RCY-005",
      tanggal: "05 Juni 2025",
      jenis: "Penjemputan",
      kategori: "Botol",
      detail: "Botol Plastik",
      berat: "3.5 Kg",
      poin: "+50",
      status: "Selesai",
    },
    {
      id: "RCY-006",
      tanggal: "05 Juni 2025",
      jenis: "penyetoran",
      kategori: "Botol",
      detail: "Botol Plastik",
      berat: "3.5 Kg",
      poin: "+50",
      status: "Selesai",
    },
  ]

  const filteredTransactions = transactions.filter((transaction) => {
    if (filterStatus === "semua") return true
    return transaction.jenis.toLowerCase() === filterStatus.toLowerCase()
  })

  return (
    <AppLayout currentUser={user}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Riwayat Transaksi</h1>
        <p className="text-gray-600 mb-8">Lihat dan kelola semua transaksi penyetoran sampah dan penukaran poin anda</p>

        {/* Filter and Sort Controls */}
        <div className="flex items-center gap-4 mb-6">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <ArrowUpDown className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Urutkan berdasarkan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tanggal">Tanggal</SelectItem>
              <SelectItem value="poin">Poin</SelectItem>
              <SelectItem value="jenis">Jenis</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-48">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="semua">Semua Status</SelectItem>
              <SelectItem value="selesai">Selesai</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="semua" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="semua">Semua</TabsTrigger>
            <TabsTrigger value="penyetoran">Penyetoran</TabsTrigger>
            <TabsTrigger value="penukaran">Penukaran</TabsTrigger>
            <TabsTrigger value="penjemputan">Penjemputan</TabsTrigger>
          </TabsList>

          <TabsContent value="semua">
            <Card className="border-gray-200">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="text-left py-3 px-6 text-sm font-bold text-gray-600 ">ID</th>
                        <th className="text-left py-3 px-6 text-sm font-bold text-gray-600 ">Tanggal</th>
                        <th className="text-left py-3 px-6 text-sm font-bold text-gray-600">Jenis</th>
                        <th className="text-left py-3 px-6 text-sm font-bold text-gray-600">Kategori</th>
                        <th className="text-left py-3 px-6 text-sm font-bold text-gray-600">Detail</th>
                        <th className="text-left py-3 px-6 text-sm font-bold text-gray-600">Berat</th>
                        <th className="text-left py-3 px-6 text-sm font-bold text-gray-600">Poin</th>
                        <th className="text-left py-3 px-6 text-sm font-bold text-gray-600">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredTransactions.map((transaction, index) => (
                        <tr key={index} className="border-b border-gray-100 last:border-b-0">
                          <td className="py-4 px-6 text-sm font-medium text-gray-900">{transaction.id}</td>
                          <td className="py-4 px-6 text-sm text-gray-600">{transaction.tanggal}</td>
                          <td className="py-4 px-6 text-sm text-gray-600">{transaction.jenis}</td>
                          <td className="py-4 px-6 text-sm text-gray-600">{transaction.kategori}</td>
                          <td className="py-4 px-6 text-sm text-gray-600">{transaction.detail}</td>
                          <td className="py-4 px-6 text-sm text-gray-600">{transaction.berat}</td>
                          <td className="py-4 px-6">
                            <Badge
                              className={`${
                                transaction.poin.startsWith("+")
                                  ? "bg-green-100 text-green-800 hover:bg-green-100"
                                  : "bg-red-100 text-red-800 hover:bg-red-100"
                              }`}
                            >
                              {transaction.poin}
                            </Badge>
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-600">{transaction.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>

              <div className="flex items-center gap-1">
                {[1, 2, 3].map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="w-8 h-8 p-0"
                  >
                    {page}
                  </Button>
                ))}
                <span className="px-2 text-gray-500">...</span>
              </div>

              <Button variant="outline" size="sm" onClick={() => setCurrentPage(currentPage + 1)}>
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </TabsContent>

          {/* Other tab contents would be similar but filtered */}
          <TabsContent value="penyetoran">{/* Same table structure but filtered for penyetoran */}</TabsContent>

          <TabsContent value="penukaran">{/* Same table structure but filtered for penukaran */}</TabsContent>

          <TabsContent value="penjemputan">{/* Same table structure but filtered for penjemputan */}</TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}
