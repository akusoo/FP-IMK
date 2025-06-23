"use server";

import supabase from "@/app/config/supabase-client";
import { Hadiah } from "@/types/hadiah";

export async function createHadiah(hadiah: Omit<Hadiah, "id">) {
  const { data, error } = await supabase.from("hadiah").insert([hadiah]);
  if (error) throw error;
  return data;
}

export async function updateHadiah(id: string, values: Partial<Hadiah>) {
  const { data, error } = await supabase.from("hadiah").update(values).eq("id", id);
  if (error) throw error;
  return data;
}

export async function deleteHadiah(id: string) {
  const { error } = await supabase.from("hadiah").delete().eq("id", id);
  if (error) throw error;
}
