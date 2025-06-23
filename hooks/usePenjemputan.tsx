import useSWR from "swr";
import { getPenjemputanByUser } from "@/services/penjemputanSampah.service";
import { PenjemputanSampah } from "@/types/penjemputanSampah";

export default function usePenjemputan(userId: string) {
  const { data, error, isLoading } = useSWR<PenjemputanSampah[]>(
    userId ? `penjemputan/${userId}` : null,
    () => getPenjemputanByUser(userId)
  );

  return {
    penjemputan: data,
    error,
    isLoading,
  };
}
