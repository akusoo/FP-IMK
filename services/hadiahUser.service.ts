import supabase from "@/app/config/supabase-client";
import { HadiahUser } from "@/types/hadiahUser";

export const getHadiahUser = async (userId: string): Promise<HadiahUser[]> => {
  const { data, error } = await supabase.from("hadiah_user").select("*").eq("user_id", userId);
  if (error) throw error;
  return data as HadiahUser[];
};
