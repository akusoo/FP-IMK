import useSWR from "swr";
import { getAllHadiah } from "@/services/hadiah.service";
import { Hadiah } from "@/types/hadiah";

export default function useHadiah() {
  const { data, error, isLoading } = useSWR<Hadiah[]>("hadiah", getAllHadiah);
  return {
    hadiah: data,
    error,
    isLoading,
  };
}
