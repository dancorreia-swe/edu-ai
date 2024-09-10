import {
  IconFileSearch,
  IconMessageChatbot,
  IconQuestionMark,
} from "@tabler/icons-react";

const ChatPlaceholder = () => {
  return (
    <div className="flex h-full w-full justify-center pt-24">
      <div className="space-y-2">
        <h1 className="text-center text-3xl font-semibold">
          Comece a conversar
        </h1>
        <p className="text-center text-neutral-500 dark:text-neutral-300">
          Faça uma pergunta ou esclareça suas dúvidas sobre seu documento.
        </p>
        <div className="flex justify-center gap-x-4 pt-3">
          <IconQuestionMark />
          <IconFileSearch />
          <IconMessageChatbot />
        </div>
      </div>
    </div>
  );
};

export default ChatPlaceholder;
