"use client";
import { PageResponse } from "@/lib/types/page-type";
import Page from "./Page";
import useSidebarData from "@/lib/hooks/useSidebarPageData";
import Spinner from "@/components/ui/Spinner";

function Pages() {
  const { data, isPending } = useSidebarData();
  if (isPending) return <Spinner />;
  return (
    data &&
    (data ?? []).map((page: PageResponse) => (
      <Page key={page.id} page={page} level={1} />
    ))
  );
}

export default Pages;
