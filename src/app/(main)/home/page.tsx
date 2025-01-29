"use client";
import Spinner from "@/components/ui/Spinner";
import useAuth from "@/hooks/useAuth";
import React from "react";

function HomePage() {
  const { isPending } = useAuth();
  if (isPending) return <Spinner />;
  return <div className="">HomePage</div>;
}

export default HomePage;
