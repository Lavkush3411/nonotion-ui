import React from "react";
import Auth from "../_components/client/Auth";
import { Toaster } from "react-hot-toast";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center align-middle h-full">
      <Auth>
        <>
          <Toaster />
          {children}
        </>
      </Auth>
    </div>
  );
}

export default layout;
