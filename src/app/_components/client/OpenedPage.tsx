"use client";
import { usePageStore } from "@/lib/store/usePageStore";
import React, { useEffect, useState } from "react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import { Button } from "@/components/ui/button";
import { FaFolderOpen } from "react-icons/fa";
import { Editor } from "./DynamicEditor";
import useSavePage from "@/lib/hooks/useSavePage";
import { Block } from "@blocknote/core";
import Spinner from "@/components/ui/Spinner";
import { Download, Save } from "lucide-react";
import CustomToolTip from "./tooltip/tooltip.custom";

const data = JSON.stringify([
  {
    id: "default-block",
    type: "paragraph",
    content: [{ type: "text", text: "Enter page name...", styles: {} }],
  },
]);
function OpenedPage() {
  const [initialContent, setInitialContent] = useState<string | undefined>(
    undefined
  );
  const [content, setContent] = useState<Block[] | undefined>(undefined);
  const { currentPageData } = usePageStore();

  const { mutate: savePage, isPending } = useSavePage();

  useEffect(() => {
    if (currentPageData?.content)
      return setInitialContent(currentPageData?.content);

    setInitialContent(data);
  }, [currentPageData]);

  const onUpdate = async () => {
    if (!currentPageData?.id) return;
    if (!content) return;
    savePage({
      id: currentPageData.id,
      content,
    });
  };

  const onChange = (content: Block[]) => {
    console.log("content", content);
    setContent(content);
  };

  if (!currentPageData?.id) return <NoOpenedPage />;
  return (
    <div className="w-full h-full text-wrap overflow-y-scroll p-4">
      <div className="flex justify-end gap-2 items-center">
        <CustomToolTip message="Export Page">
          <Button>
            {isPending ? <Spinner /> : <Download className="rotate-180" />}
          </Button>
        </CustomToolTip>
        <CustomToolTip message="Save">
          <Button disabled={isPending} onClick={onUpdate}>
            {isPending ? <Spinner /> : <Save />}
          </Button>
        </CustomToolTip>
      </div>
      <Editor initialContent={initialContent} onChange={onChange} />
    </div>
  );
}

export default OpenedPage;

function NoOpenedPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <FaFolderOpen className="text-gray-400 text-6xl mb-4" />
      <p className="text-gray-500 text-2xl mb-2">No Page Opened</p>
      <p className="text-gray-400 text-lg">
        You can select a page from the sidebar
      </p>
    </div>
  );
}
