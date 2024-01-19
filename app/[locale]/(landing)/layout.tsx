import React, { FC, ReactNode } from "react";

type LandingLayoutProps = {
  children: ReactNode;
};

const LandingLayout: FC<LandingLayoutProps> = ({ children }) => {
  return <div className="dark:bg-slate-950">{children}</div>;
};

export default LandingLayout;
