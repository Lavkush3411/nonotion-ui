"use client";
import { PageResponse } from "@/lib/types/page-type";
import Page from "./Page";
import useSidebarData from "@/lib/hooks/useSidebarPageData";
import Spinner from "@/components/ui/Spinner";

function Pages() {
  const { data, isPending } = useSidebarData();
  if (isPending) return <Spinner />;
  return (
    <>
      <div className=" font-medium text-lg ml-2 text-gray-500">Pages</div>

      {data &&
        (data ?? []).map((page: PageResponse) => (
          <Page key={page.id} page={page} level={0} />
        ))}
    </>
  );
}

export default Pages;
