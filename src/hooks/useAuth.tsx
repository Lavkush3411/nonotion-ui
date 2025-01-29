"use client";
import { useQuery } from "@tanstack/react-query";

function useAuth() {
  const { data, isPending } = useQuery({
    queryKey: ["hello"],
    queryFn: async () =>
      new Promise((resolve) => setTimeout(() => resolve(true), 1000)),
  });
  return { data, isPending };
}

export default useAuth;
