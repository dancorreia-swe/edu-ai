import ChatInput from "./ChatInput";

type ChatFooterProps = {
  disabled: boolean;
  onSendPrompt: (message: string) => void;
};

const ChatFooter = ({ disabled, onSendPrompt }: ChatFooterProps) => {
  return (
    <footer className="mt-4 w-full">
      <div className="m-auto w-full">
        <ChatInput disabled={disabled} onSendPrompt={onSendPrompt} />
      </div>
    </footer>
  );
};

export default ChatFooter;
