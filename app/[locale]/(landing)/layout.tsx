import { unstable_setRequestLocale } from "next-intl/server";
import React, { FC, ReactNode } from "react";

type LandingLayoutProps = {
  children: ReactNode;
  params: {
    locale: string;
  };
};

const LandingLayout: FC<LandingLayoutProps> = ({
  children,
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  return <div className="dark:bg-slate-950">{children}</div>;
};

export default LandingLayout;
