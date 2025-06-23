export interface PenukaranSampah {
    id: string;
    user_id: string;
    waktu_penukaran: string; // or Date
    user_nama: string;
    sampah_jenis: string;
    berat_sampah: number;
    poin_didapat: number;
    user_no_telp?: string;
  }
  