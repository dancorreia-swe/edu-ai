import { useTranslation } from "@/app/i18n";
import SummarizeContent from "@/components/pages/summarize/SummarizeContent";
import { BaseLanguageProps } from "@/types/i18n";

export async function generateMetadata({ params: { lng } }: BaseLanguageProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, "metadata");

  return {
    title: t("summarize.title"),
    description: t("summarize.description"),
  };
}
const SummarizePage = async ({ params: { lng } }: BaseLanguageProps) => {
  const { t } = await useTranslation(lng, "translation");

  return (
    <div className="container my-8">
      <div className="mb-4">
        <h1 className="mb-1 text-3xl font-semibold">{t("summarize.title")}</h1>
        <span className="text-base text-neutral-500">
          {t("summarize.subtitle")}
        </span>
      </div>
      <SummarizeContent lng={lng} />
    </div>
  );
};

export default SummarizePage;
