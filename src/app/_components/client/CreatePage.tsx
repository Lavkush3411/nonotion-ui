import useCreatePage from "@/lib/hooks/useCreatePage";
import { PlusCircleIcon } from "lucide-react";
import React from "react";

function CreatePage() {
  const {mutate:createPage} = useCreatePage();
  return (
    <div
      className="flex flex-row hover:bg-gray-200 m-2 p-3 gap-2"
      role="button"
      onClick={() => createPage({ title: "Page new" })}
    >
      <PlusCircleIcon /> CreatePage
    </div>
  );
}

export default CreatePage;
