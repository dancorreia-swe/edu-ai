import ChatBubble from "./ChatBubble";
import { Message } from "./ChatContent";
import ChatPlaceholder from "./ChatPlaceholder";

type ChatAreaProps = {
  messages: Message[];
  loading: boolean;
};

const ChatArea = ({ messages, loading }: ChatAreaProps) => {
  return (
    <main className="h-0 flex-auto overflow-auto">
      {!messages.length && <ChatPlaceholder />}
      {messages.map((message) => (
        <ChatBubble key={message.id} message={message} />
      ))}
    </main>
  );
};

export default ChatArea;