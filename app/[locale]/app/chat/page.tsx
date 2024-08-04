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
  reset: {
    button: string;
    dialog_title: string;
    dialog_description: string;
    dialog_confirm: string;
    dialog_cancel: string;
  };
  toast: {
    success_title: string;
    success_description: string;
    error_title: string;
    error_description: string;
    error_file_length_title: string;
    error_file_length_description: string;
    error_upload_file_title: string;
    error_upload_file_description: string;
    error_send_message_title: string;
    error_send_message_description: string;
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
    reset: {
      button: t("reset_button"),
      dialog_title: t("reset_title"),
      dialog_description: t("reset_description"),
      dialog_confirm: t("reset_confirm"),
      dialog_cancel: t("reset_cancel"),
    },
    toast: {
      success_title: t("toast.success_title"),
      success_description: t("toast.success_description"),
      error_title: t("toast.error_title"),
      error_description: t("toast.error_description"),
      error_file_length_title: t("toast.error_file_length_title"),
      error_file_length_description: t("toast.error_file_length_description"),
      error_upload_file_title: t("toast.error_upload_file_title"),
      error_upload_file_description: t("toast.error_upload_file_description"),
      error_send_message_title: t("toast.error_send_message_title"),
      error_send_message_description: t("toast.error_send_message_description"),
    },
  } satisfies i18nChatPage;

  return (
    <UploadProvider>
      <ChatPage i18n={i18n} />
    </UploadProvider>
  );
};

export default ChatPageServer;
