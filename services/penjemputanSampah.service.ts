import supabase from "@/app/config/supabase-client";
import { PenjemputanSampah } from "@/types/penjemputanSampah";

export const getPenjemputanByUser = async (userId: string): Promise<PenjemputanSampah[]> => {
  const { data, error } = await supabase
    .from("penjemputan_sampah")
    .select("*")
    .eq("user_id", userId);
  if (error) throw error;
  return data as PenjemputanSampah[];
};
