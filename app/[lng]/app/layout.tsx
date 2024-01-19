import Navbar from "@/components/Navbar";
import { PropsWithChildren } from "react";

type AppLayoutProps = {
  children: React.ReactNode;
  params: { lng: string };
};

const AppLayout = ({ children, params: { lng } }: AppLayoutProps) => {
  return <Navbar params={{ lng }}>{children}</Navbar>;
};

export default AppLayout;
