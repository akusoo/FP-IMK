"use server";

import supabase from "@/app/config/supabase-client";
import { BeratSampahUser } from "@/types/beratSampahUser";

export async function updateBeratSampah(userId: string, berat: number) {
  const { data, error } = await supabase
    .from("berat_sampah_user")
    .upsert({ user_id: userId, berat_sampah: berat });
  if (error) throw error;
  return data;
}
