import useCreatePage from "@/lib/hooks/useCreatePage";
import useSidebarPageData from "@/lib/hooks/useSidebarPageData";
import { PlusCircleIcon } from "lucide-react";
import React from "react";

function CreatePage() {
  const { mutate: createPage } = useCreatePage();
  const { data } = useSidebarPageData();
  if (data.length !== 0) return null;
  return (
    <div
      className="flex flex-row hover:bg-gray-200 m-2 p-3 gap-2"
      role="button"
      onClick={() => createPage({ title: "undefined" })}
    >
      <PlusCircleIcon /> Create First Page
    </div>
  );
}

export default CreatePage;
