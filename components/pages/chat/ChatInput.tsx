"use client";

import { IconSend } from "@tabler/icons-react";
import { KeyboardEventHandler, useEffect, useRef, useState } from "react";

type ChatInputProps = {
  disabled: boolean;
  onSendPrompt: (prompt: string) => void;
};

const ChatInput = ({ disabled, onSendPrompt }: ChatInputProps) => {
  const [prompt, setPrompt] = useState<string>("");
  const textEl = useRef<HTMLTextAreaElement>(null);

  const handleTextKeyUp = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.code.toLowerCase() === "enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendPrompt();
    }
  };

  const handleSendPrompt = () => {
    if (!disabled && prompt.trim() !== "") {
      onSendPrompt(prompt);
      setPrompt("");
    }
  };

  useEffect(() => {
    if (textEl.current) {
      textEl.current.focus();
    }
  }, [disabled]);

  return (
    <div
      className={`flex rounded-md border-gray-800/50 bg-neutral-100/80 p-2 dark:bg-slate-800 ${
        disabled && "opacity-50"
      }`}
    >
      <textarea
        ref={textEl}
        className="my-2 ml-2 h-6 max-h-48 flex-1 resize-none overflow-y-auto border-0 bg-transparent outline-none dark:text-neutral-200"
        placeholder="Digite uma mensagem"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={handleTextKeyUp}
        disabled={disabled}
      />
      <div
        onClickCapture={handleSendPrompt}
        className={`cursor-pointer self-end rounded p-3 transition-colors ${
          prompt.length
            ? "text-violet-400 opacity-100 hover:bg-neutral-200/45 hover:text-violet-500 dark:hover:bg-slate-950/20"
            : "opacity-20"
        }`}
      >
        <IconSend height={14} width={14} />
      </div>
    </div>
  );
};

export default ChatInput;
