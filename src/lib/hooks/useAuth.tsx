"use client";
import { useQuery } from "@tanstack/react-query";

function useAuth() {
  const { data, isPending } = useQuery({
    queryKey: ["hello"],
    queryFn: async () =>
      new Promise((resolve) => setTimeout(() => resolve(true), 0)),
  });
  return { data, isPending };
}

export default useAuth;
