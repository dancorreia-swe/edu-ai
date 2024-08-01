import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import ChatPage from "@/components/pages/chat/ChatPage";
import UploadProvider from "@/contexts/upload-provider";

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
  uploadthing: {
    button_loading: string;
    button_ready: string;
    label: string;
    label_loading: string;
    content_loading: string;
    content_uploading: string;
  };
};

const ChatPageServer = ({ params: { locale } }: any) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Chat");

  const i18n = {
    header: {
      title: t("title"),
      subtitle: t("subtitle"),
    },
    uploadthing: {
      button_loading: t("uploadthing.button_loading"),
      button_ready: t("uploadthing.button_ready"),
      label: t("uploadthing.label"),
      label_loading: t("uploadthing.label_loading"),
      content_loading: t("uploadthing.content_loading"),
      content_uploading: t("uploadthing.content_uploading"),
    },
  } satisfies i18nChatPage;

  return (
    <UploadProvider>
      <ChatPage i18n={i18n} />
    </UploadProvider>
  );
};

export default ChatPageServer;
