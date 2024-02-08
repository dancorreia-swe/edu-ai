import Navbar from "@/components/Navbar";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

type AppLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
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

const AppLayout = ({ children, params: { locale } }: AppLayoutProps) => {
  unstable_setRequestLocale(locale);
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

  return (
    <Navbar labels={labels}>
      <div className="container my-8">{children}</div>
    </Navbar>
  );
};

export default AppLayout;
