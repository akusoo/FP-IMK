import useSWR from "swr";
import { getPenukaranSampahByUser } from "@/services/penukaranSampah.service";
import { PenukaranSampah } from "@/types/penukaranSampah";

export default function usePenukaranSampah(userId: string) {
  const { data, error, isLoading } = useSWR<PenukaranSampah[]>(
    userId ? `penukaran_sampah/${userId}` : null,
    () => getPenukaranSampahByUser(userId)
  );

  return {
    penukaranSampah: data,
    error,
    isLoading,
  };
}
