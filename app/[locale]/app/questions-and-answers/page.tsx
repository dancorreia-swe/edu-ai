import QaPage from "@/components/pages/questions-and-answers/QAPage";
import AppHeader from "@/components/ui/app-header";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "QA" });
  return {
    title: t("metadata-title"),
    description: t("metadata-description"),
  };
}

export type i18nQAPage = {
  header: {
    title: string;
    subtitle: string;
  };
  form: {
    topicInput: {
      label: string;
      placeholder: string;
      button: string;
    };
  };
};

const QaPageServer = ({ params: { locale } }: any) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("QA");

  const i18n = {
    header: {
      title: t("title"),
      subtitle: t("subtitle"),
    },
    form: {
      topicInput: {
        label: t("topic_input_label"),
        placeholder: t("topic_input_placeholder"),
        button: t("topic_generate_button"),
      },
    },
  } satisfies i18nQAPage as i18nQAPage;

  return (
    <>
      <AppHeader title={i18n.header.title} subtitle={i18n.header.subtitle} />
      <QaPage i18n={i18n} />
    </>
  );
};

export default QaPageServer;
