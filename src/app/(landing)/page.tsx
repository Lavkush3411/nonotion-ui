"use client";
import { useRouter } from "next/navigation";

import Heading from "./_components/Heading";
import { useEffect } from "react";
import Spinner from "@/components/ui/Spinner";

export default function LandingPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  });
  return <Spinner />;
  return (
    <div>
      <Heading />
      <div>Landing page</div>
    </div>
  );
}
