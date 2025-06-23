import supabase from "@/app/config/supabase-client";
import { Hadiah } from "@/types/hadiah";

export const getAllHadiah = async (): Promise<Hadiah[]> => {
  const { data, error } = await supabase.from("hadiah").select("*");
  if (error) throw error;
  return data as Hadiah[];
};
