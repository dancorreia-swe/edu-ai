import Navbar from "@/components/Navbar";
import { useTranslations } from "next-intl";

type AppLayoutProps = {
  children: React.ReactNode;
};

export type NavbarLabels = {
  navbar: {
    summarize: string;
    qaAnswer: string;
    chat: string;
  };
  theme: {
    light: string;
    dark: string;
    system: string;
  };
};

const AppLayout = ({ children }: AppLayoutProps) => {
  const n = useTranslations("Navbar");
  const t = useTranslations("Theme");

  const labels: NavbarLabels = {
    navbar: {
      summarize: n("summarize"),
      qaAnswer: n("qa-answer"),
      chat: n("chat"),
    },
    theme: {
      light: t("light"),
      dark: t("dark"),
      system: t("system"),
    },
  };

  return <Navbar labels={labels}>{children}</Navbar>;
};

export default AppLayout;
