import Navbar from "@/components/Navbar";
import React, { FC, PropsWithChildren, ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
};

const Layout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar>
        <div className="w-full px-4 pt-10 sm:px-6 md:px-8 lg:ps-72 bg-white dark:bg-slate-950 h-screen">
          {children}
        </div>
      </Navbar>
    </>
  );
};

export default Layout;
