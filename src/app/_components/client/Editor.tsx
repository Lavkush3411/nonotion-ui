"use client"; // this registers <Editor> as a Client Component
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { Block, BlockNoteEditor } from "@blocknote/core";
import { useMemo } from "react";

export default function Editor({
  initialContent,
  onChange,
}: {
  initialContent: string | undefined;
  onChange: (content: Block[]) => void;
}) {
  // Creates a new editor instance.
  const editor = useMemo(() => {
    return BlockNoteEditor.create({
      initialContent: JSON.parse(initialContent || ""),
    });
  }, [initialContent]);
  return (
    <BlockNoteView
      editor={editor}
      theme={"light"}
      onChange={() => onChange(editor.document)}
    />
  );
}
