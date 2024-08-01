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
    <div className={cn("flex items-start py-4")}>
      <span className="inline-block rounded-md bg-neutral-900 p-2 text-white dark:bg-slate-800">
        {isAI ? <IconRobot /> : <IconUser />}
      </span>
      <div
        className={cn(
          "mx-4 flex items-center justify-center",
          !isAI && "rounded bg-neutral-200/70 px-4 py-2 dark:bg-slate-800",
        )}
      >
        <div className="w-full flex-1 whitespace-normal text-base">
          {message.content}
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
