"use client";
import Empty from "@/app/_components/client/Empty";
import OpenedPage from "@/app/_components/client/OpenedPage";
import Spinner from "@/components/ui/Spinner";
import useSidebarPageData from "@/lib/hooks/useSidebarPageData";
import React from "react";

function HomePage() {
  const { data, isPending } = useSidebarPageData();
  if (isPending) return <Spinner />;
  const isEmpty = !data || data.length === 0;
  return (
    <div className="flex flex-col items-center justify-center h-full">
      {isEmpty ? <Empty /> : <OpenedPage />}
    </div>
  );
}

export default HomePage;
