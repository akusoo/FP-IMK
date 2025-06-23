import useSWR from "swr";
import { getSampahJenis } from "@/services/sampah.service";
import { Sampah } from "@/types/sampah";

export default function useSampah() {
  const { data, error, isLoading } = useSWR<Sampah[]>("sampah", getSampahJenis);
  return {
    jenisSampah: data,
    error,
    isLoading,
  };
}
