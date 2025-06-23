import supabase from "@/app/config/supabase-client";
import { PenukaranPoin } from "@/types/penukaranPoin";

export const getPenukaranPoinByUser = async (userId: string): Promise<PenukaranPoin[]> => {
  const { data, error } = await supabase.from("penukaran_poin").select("*").eq("user_id", userId);
  if (error) throw error;
  return data as PenukaranPoin[];
};
