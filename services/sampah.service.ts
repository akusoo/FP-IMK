import supabase from "@/app/config/supabase-client";
import { Sampah } from "@/types/sampah";

export const getSampahJenis = async (): Promise<Sampah[]> => {
  const { data, error } = await supabase.from("sampah").select("*");
  if (error) throw error;
  return data as Sampah[];
};
