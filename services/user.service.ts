import supabase from "@/app/config/supabase-client";
import { User } from "@/types/user";

export const getUsers = async (): Promise<User[]> => {
  const { data, error } = await supabase.from("user").select("*");
  if (error) throw error;
  return data as User[];
};

export const getUserById = async (id: string): Promise<User | null> => {
  const { data, error } = await supabase.from("user").select("*").eq("id", id).single();
  if (error) throw error;
  return data;
};
