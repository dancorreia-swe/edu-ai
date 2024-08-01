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
          Start a conversation
        </h1>
        <p className="text-center text-neutral-500 dark:text-neutral-300">
          Ask a question or clarify your doubts about your document.
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
