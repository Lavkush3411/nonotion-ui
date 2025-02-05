"use client";
import { PageResponse } from "@/lib/types/page-type";
import Page from "./Page";
import useSidebarData from "@/lib/hooks/useSidebarPageData";

function Pages() {
  const { data } = useSidebarData();
  return (
    data &&
    (data ?? []).map((page: PageResponse) => (
      <Page key={page.id} page={page} level={1} />
    ))
  );
}

export default Pages;
