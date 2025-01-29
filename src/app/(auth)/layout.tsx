import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return <div className="text-red-600 h-full bg-black">{children}</div>;
}

export default layout;
