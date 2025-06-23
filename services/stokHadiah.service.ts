import supabase from "@/app/config/supabase-client";
import { StokHadiah } from "@/types/stokHadiah";

export const getStokHadiah = async (hadiahId: string): Promise<StokHadiah | null> => {
  const { data, error } = await supabase
    .from("stok_hadiah")
    .select("*")
    .eq("hadiah_id", hadiahId)
    .single();
  if (error) throw error;
  return data;
};
