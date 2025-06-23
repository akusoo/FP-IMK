"use server";

import supabase from "@/app/config/supabase-client";
import { PenukaranPoin } from "@/types/penukaranPoin";
import { PenukaranSampah } from "@/types/penukaranSampah";

export async function createPenukaranPoin(data: Omit<PenukaranPoin, "id">) {
  const { error } = await supabase.from("penukaran_poin").insert([data]);
  if (error) throw error;
}

export async function createPenukaranSampah(data: Omit<PenukaranSampah, "id">) {
  const { error } = await supabase.from("penukaran_sampah").insert([data]);
  if (error) throw error;
}
