import { useEffect, useState } from "react";
import { getStokHadiah } from "@/services/stokHadiah.service";
import { StokHadiah } from "@/types/stokHadiah";

export default function useStokHadiah(hadiahId: string) {
  const [stokHadiah, setStokHadiah] = useState<StokHadiah | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    if (!hadiahId) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getStokHadiah(hadiahId);
        setStokHadiah(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [hadiahId]);

  return { stokHadiah, isLoading, error };
}
