import { cn } from "@/lib/utils";
import { Message } from "./ChatContent";
import { IconRobot, IconUser } from "@tabler/icons-react";

type ChatBubbleProps = {
  message: Message;
  handleScroll?: () => void;
};

const ChatBubble = ({ message }: ChatBubbleProps) => {
  const isAI = message.author === "ai";

  return (
    <div className={cn("flex items-center py-4")}>
      <span className="rounded-md p-2 dark:bg-slate-800">
        {isAI ? <IconRobot /> : <IconUser />}
      </span>
      <div
        className={cn(
          "mx-4 flex h-10 w-10 items-center justify-center px-6",
          !isAI && "rounded px-8 dark:bg-slate-800",
        )}
      >
        <div className="flex-1 whitespace-pre-wrap text-base">
          {message.content}
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
