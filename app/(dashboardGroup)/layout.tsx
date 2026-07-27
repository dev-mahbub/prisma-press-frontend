import { Navbar } from "@/components/shared/Navbar";
import { getMe } from "@/service/getMe";
import React from "react";

const DashboardGroupLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = await getMe();
  return (
    <>
      <Navbar user={user} />
      <div className=" max-w-7xl mx-auto">{children}</div>;
    </>
  );
};

export default DashboardGroupLayout;
