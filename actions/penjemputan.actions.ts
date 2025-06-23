"use server";

import supabase from "@/app/config/supabase-client";
import { PenjemputanSampah } from "@/types/penjemputanSampah";

export async function createPenjemputan(data: Omit<PenjemputanSampah, "id">) {
  const { error } = await supabase.from("penjemputan_sampah").insert([data]);
  if (error) throw error;
}
