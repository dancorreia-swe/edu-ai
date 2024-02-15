import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import ChatPage from "@/components/pages/chat/ChatPage";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Chat" });
  return {
    title: t("metadata-title"),
    description: t("metadata-description"),
  };
}

export type i18nChatPage = {
  header: {
    title: string;
    subtitle: string;
  };
    text: string;
    file: string
};

const ChatPageServer = ({ params: { locale } }: any) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Chat");

  const i18n = {
    header: {
      title: t("title"),
      subtitle: t("subtitle"),
    },
 } as i18nChatPage;

  return <ChatPage i18n={i18n} />;
};

export default ChatPageServer;

