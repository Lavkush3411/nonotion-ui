"use server";
import { api } from "@/lib/api";
import { revalidateTag } from "next/cache";

export async function createPage(data: { title: string; content?: string }) {
  const { postData } = api();
  await postData("/page", data);
  revalidateTag("page");
}
