import React, { ReactNode } from "react";
import Navigation from "../_components/Navigation";

function Home({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full">
      <Navigation />
      <div className="flex-1 w-24 bg-primary-700  overflow-y-hidden">
        {children}
      </div>
    </div>
  );
}

export default Home;
