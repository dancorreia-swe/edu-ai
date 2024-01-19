import SummarizeContent from "@/components/pages/summarize/SummarizeContent";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

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
const SummarizePage = ({ params: { locale } }: any) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Summarize");

  return (
    <div className="container my-8">
      <div className="mb-4">
        <h1 className="mb-1 text-3xl font-semibold">{t("title")}</h1>
        <span className="text-base text-neutral-500">{t("subtitle")}</span>
      </div>
      <SummarizeContent />
    </div>
  );
};

export default SummarizePage;
