import React, { ReactNode } from "react";
import Navigation from "../../_components/client/Navigation";
import Pages from "../../_components/client/Pages";

function Home({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation>
        <Pages />
      </Navigation>

      <div className="flex-1 w-24 bg-primary-700  overflow-y-hidden">
        {children}
      </div>
    </>
  );
}

export default Home;
