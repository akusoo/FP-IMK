"use server";

import supabase from "@/app/config/supabase-client";
import { Sampah } from "@/types/sampah";

export async function createSampah(sampah: Omit<Sampah, "id">) {
  const { data, error } = await supabase.from("sampah").insert([sampah]);
  if (error) throw error;
  return data;
}

export async function deleteSampahByJenis(jenis: string) {
  const { error } = await supabase.from("sampah").delete().eq("jenis", jenis);
  if (error) throw error;
}
