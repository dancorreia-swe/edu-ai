"use client";
import { i18nChatPage } from "@/app/[locale]/app/chat/page";
import ChatContent from "./ChatContent";

type ChatPageProps = {
  i18n: i18nChatPage;
};

const ChatPage = ({ i18n }: ChatPageProps) => {
  const { title, subtitle } = i18n.header;

  return (
    <div className="container my-8">
      <div className="mb-4">
        <h1 className="mb-1 text-3xl font-semibold">{title}</h1>
        <span className="text-base text-neutral-500 dark:text-neutral-300">
          {subtitle}
        </span>
      </div>
      <ChatContent />
    </div>
  );
};

export default ChatPage;
