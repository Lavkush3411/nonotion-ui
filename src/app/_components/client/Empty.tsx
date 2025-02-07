"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import useCreatePage from "@/lib/hooks/useCreatePage";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

function Empty() {
  const { mutate: createPage } = useCreatePage();

  const handleCreatePage = () => {
    createPage({ title: "Page from home" });
  };
  return (
    <>
      <Image
        src="/images/empty.jpg"
        className="justify-center align-center"
        alt="Home"
        width={500}
        height={500}
      />
      <h1 className="text-3xl font-bold">NoNotion</h1>
      <p className="text-lg">Welcome to the Workspace</p>

      <Button className="mt-4" size="lg" onClick={handleCreatePage}>
        <PlusCircle size={36} /> Create a new page
      </Button>
    </>
  );
}

export default Empty;
