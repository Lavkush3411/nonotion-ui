"use client";
import Spinner from "@/components/ui/Spinner";
import useAuth from "@/lib/hooks/useAuth";
import React from "react";

function Auth({ children }: { children: React.ReactNode }) {
  const { isPending } = useAuth();
  if (isPending) return <Spinner />;
  return children;
}

export default Auth;
