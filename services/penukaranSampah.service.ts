import supabase from "@/app/config/supabase-client";
import { PenukaranSampah } from "@/types/penukaranSampah";

export const getPenukaranSampahByUser = async (
  userId: string
): Promise<PenukaranSampah[]> => {
  const { data, error } = await supabase
    .from("penukaran_sampah")
    .select("*")
    .eq("user_id", userId);
  if (error) throw error;
  return data as PenukaranSampah[];
};
