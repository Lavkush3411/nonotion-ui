"use server";

import { api } from "@/lib/api";

export async function getSidebarData() {
  const { getData } = api();
  await getData("/page");
}
