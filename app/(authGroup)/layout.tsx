import React from "react";
import { Toaster } from "sonner";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster position="top-right" richColors />
      <div className=" max-w-7xl mx-auto">{children}</div>;
    </>
  );
};

export default LoginLayout;
