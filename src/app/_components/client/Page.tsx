import { QUERY_KEYS } from "@/lib/_common/query-keys";
import useCreatePage from "@/lib/hooks/useCreatePage";
import usePageById from "@/lib/hooks/usePageById";
import { usePageStore } from "@/lib/store/usePageStore";
import { PageResponse } from "@/lib/types/page-type";
import { cn } from "@/lib/utils";
import { updateSidebarData } from "@/lib/utils/update-sidebardata";
import { useQueryClient } from "@tanstack/react-query";
import { ChevronsRightIcon, FileText, PlusIcon, Trash } from "lucide-react";
import React, { useState } from "react";
import CustomToolTip from "./tooltip/tooltip.custom";
import useDeletePage from "@/lib/hooks/useDeletePage";

function Page({ page, level }: { page: PageResponse; level: number }) {
  const { mutate: createPage } = useCreatePage();
  const [isExpanded, setIsExpanded] = useState(false);
  const { currentPageData, setCurrentPageData } = usePageStore();
  const handleCreatePage = (id: string) => {
    createPage({ title: "New Page", parentId: id });
  };

  const { mutate: deletePageById } = useDeletePage();

  const { data, refetch } = usePageById(page.id);
  const queryClient = useQueryClient();

  const handleFetchPageData = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await refetch();
    queryClient.setQueryData(QUERY_KEYS.PageList, (old: PageResponse[]) =>
      updateSidebarData(old, data?.data, isExpanded)
    );
    setIsExpanded(!isExpanded);
  };

  const handleOpenPage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    console.log(page);
    setCurrentPageData(page);
  };

  const handleDeletePage = () => {
    deletePageById(page.id);
  };

  return (
    <div
      key={page.id}
      style={{ marginLeft: `${level * 12}px` }}
      onClick={handleOpenPage}
    >
      <div
        className={cn(
          "group/page flex justify-between items-center p-2 hover:bg-gray-200 ",
          currentPageData?.id === page.id && "bg-gray-300  "
        )}
      >
        <h1
          className={cn(
            "flex items-center gap-2 text-muted-foreground font-medium",
            currentPageData?.id === page.id && "text-primary"
          )}
        >
          <FileText />
          {page.content
            ? JSON.parse(page.content)?.[0]?.content?.[0]?.text
            : "undefined"}
        </h1>
        <div
          role="button"
          className="opacity-0 group-hover/page:opacity-100 transition flex"
        >
          <CustomToolTip message={isExpanded ? "Collapse" : "Expand"}>
            <ChevronsRightIcon
              onClick={handleFetchPageData}
              className={cn(
                "transition-all duration-300",
                isExpanded && "rotate-90 "
              )}
            />
          </CustomToolTip>
          <CustomToolTip message="Create page inside">
            <PlusIcon onClick={() => handleCreatePage(page.id)} />
          </CustomToolTip>
          <CustomToolTip message="Delete">
            <Trash size={"20px"} onClick={handleDeletePage} />
          </CustomToolTip>
        </div>
      </div>

      {page.children &&
        page.children.length > 0 &&
        page.children.map((child) => (
          <Page key={child.id} page={child} level={level + 1} />
        ))}
    </div>
  );
}

export default Page;
