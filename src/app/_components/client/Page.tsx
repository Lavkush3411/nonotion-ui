import useCreatePage from "@/lib/hooks/useCreatePage";
import { PageResponse } from "@/lib/types/page-type";
import { PlusIcon } from "lucide-react";
import React from "react";

function Page({ page, level }: { page: PageResponse; level: number }) {
  const { mutate: createPage } = useCreatePage();
  const handleCreatePage = (id: string) => {
    createPage({ title: "New Page", parentId: id });
  };
  return (
    <div key={page.id} style={{ marginLeft: `${level * 5}px` }}>
      <div className="group/page flex justify-between items-center p-2 hover:bg-gray-300">
        <h1>{page.title}</h1>
        <div
          role="button"
          onClick={() => handleCreatePage(page.id)}
          className="opacity-0 group-hover/page:opacity-100 transition"
        >
          <PlusIcon />
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
