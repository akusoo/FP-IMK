import supabase from "@/app/config/supabase-client";
import { BeratSampahUser } from "@/types/beratSampahUser";

export const getBeratSampahByUser = async (userId: string): Promise<BeratSampahUser | null> => {
  const { data, error } = await supabase
    .from("berat_sampah_user")
    .select("*")
    .eq("user_id", userId)
    .single();
  if (error) throw error;
  return data;
};
