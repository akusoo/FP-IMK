import useSWR from "swr";
import { getPenukaranPoinByUser } from "@/services/penukaranPoin.service";
import { PenukaranPoin } from "@/types/penukaranPoin";

export default function usePenukaranPoin(userId: string) {
  const { data, error, isLoading } = useSWR<PenukaranPoin[]>(
    userId ? `penukaran_poin/${userId}` : null,
    () => getPenukaranPoinByUser(userId)
  );

  return {
    penukaranPoin: data,
    error,
    isLoading,
  };
}
