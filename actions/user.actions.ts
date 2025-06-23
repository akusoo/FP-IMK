"use server";

import supabase from "@/app/config/supabase-client";
import { User } from "@/types/user";

export async function createUser(user: Omit<User, "id" | "poin">) {
  const { data, error } = await supabase.from("user").insert([user]);
  if (error) throw error;
  return data;
}

export async function deleteUser(id: string) {
  const { error } = await supabase.from("user").delete().eq("id", id);
  if (error) throw error;
}

export async function updateUser(id: string, values: Partial<User>) {
  const { data, error } = await supabase.from("user").update(values).eq("id", id);
  if (error) throw error;
  return data;
}
