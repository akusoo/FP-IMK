import { useEffect, useState } from "react";
import { getBeratSampahByUser } from "@/services/beratSampahUser.service";
import { BeratSampahUser } from "@/types/beratSampahUser";

export default function useBeratSampah(userId: string) {
  const [beratSampah, setBeratSampah] = useState<BeratSampahUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getBeratSampahByUser(userId);
        setBeratSampah(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return { beratSampah, isLoading, error };
}
