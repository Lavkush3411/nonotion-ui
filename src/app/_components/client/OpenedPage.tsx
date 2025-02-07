"use client";
import { usePageStore } from "@/lib/store/usePageStore";
import React from "react";

function OpenedPage() {
  const { currentPageData } = usePageStore();

  return (
    <div>
      <h1>{currentPageData?.title}</h1>
      <p>{currentPageData?.content}</p>
    </div>
  );
}

export default OpenedPage;
