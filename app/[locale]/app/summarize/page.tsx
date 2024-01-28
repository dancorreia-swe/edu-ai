import SummarizeContent from "@/components/pages/summarize/SummarizeContent";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import SummarizePage from "@/components/pages/summarize/SummarizePage";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Summarize" });
  return {
    title: t("metadata-title"),
    description: t("metadata-description"),
  };
}

const SummarizePageServer = ({ params: { locale } }: any) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Summarize");

  const i18n = {
    header: {
      title: t("title"),
      subtitle: t("subtitle"),
    },
  };
  return <SummarizePage i18n={i18n}/>;
};

export default SummarizePageServer;
