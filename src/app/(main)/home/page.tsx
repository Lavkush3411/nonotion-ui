"use client";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/ui/Spinner";
import useAuth from "@/hooks/useAuth";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

function HomePage() {
  const { isPending } = useAuth();
  if (isPending) return <Spinner />;
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Image
        src="/images/empty.jpg"
        className="justify-center align-center"
        alt="Home"
        width={500}
        height={500}
      />
      <h1 className="text-3xl font-bold">NoNotion</h1>
      <p className="text-lg">Welcome to the Workspace</p>
      <Button className="mt-4" size="lg">
        <PlusCircle size={36} /> Create a new page
      </Button>
    </div>
  );
}

export default HomePage;
