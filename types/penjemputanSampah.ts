export interface PenjemputanSampah {
    id: string;
    waktu_jemput: string; // or Date
    user_id: string;
    user_nama: string;
    sampah_jenis?: string;
    berat_sampah: number;
    alamat: string;
    user_no_telp?: string;
    poin_didapat?: number;
  }
  