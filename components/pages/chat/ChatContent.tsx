"use client";

import { useLocalStorage } from "usehooks-ts";
import { i18nChatPage } from "@/app/[locale]/app/chat/page";
import { UploadDropzone } from "@/lib/uploadthing";
import ChatArea from "./ChatArea";
import ChatFooter from "./ChatFooter";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";
import { useUpload } from "@/contexts/upload-provider";

type PDFFile = { url: string; id: string } | null;

type ChatSectionProps = {
  i18n: i18nChatPage;
};

export type Message = {
  id: string;
  content: string;
  author: Author;
  timestamp: number;
};

enum Author {
  USER = "user",
  AI = "ai",
}

const ChatSection = ({ file }: { file: PDFFile }) => {
  const [messages, setMessages] = useLocalStorage<Message[]>("messages", []);

  const onSendPrompt = (message: string) => {
    const newMessage = {
      id: uuid(),
      content: message,
      author: Author.USER,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="flex gap-8">
      <div className="w-[50rem]">
        <iframe
          src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${file!.url}`}
          width="100%"
          height="700px"
          title="PDF Preview"
        />
      </div>
      <div className="border-l border-dashed border-gray-700" />
      <div className="flex w-full flex-col">
        <ChatArea messages={messages} loading={false} />
        <ChatFooter disabled={false} onSendPrompt={onSendPrompt} />
      </div>
    </div>
  );
};

const DropzoneSection = ({
  onUploadComplete,
  onError,
  translations,
}: {
  onUploadComplete: (res: any) => void;
  onError: (error: Error) => void;
  translations: i18nChatPage["uploadthing"];
}) => (
  <main className="flex w-full flex-col items-center justify-between py-4">
    <UploadDropzone
      className="w-full cursor-pointer bg-neutral-100/30 transition-colors ut-button:w-fit ut-button:bg-neutral-950 ut-button:px-3 hover:ut-button:bg-violet-600 ut-label:w-full ut-label:text-xl ut-label:text-neutral-900 ut-uploading:ut-button:after:bg-violet-500 ut-allowed-content:ut-uploading:text-red-300 dark:bg-slate-800 dark:hover:bg-slate-900 dark:ut-button:bg-violet-600/80 dark:hover:ut-button:bg-violet-700 dark:ut-label:text-white"
      endpoint="imageUploader"
      onClientUploadComplete={onUploadComplete}
      onUploadError={onError}
      content={{
        button: ({ ready, isUploading }) => {
          if (isUploading)
            return (
              <div
                className="z-50 inline-block size-5 animate-spin rounded-full border-[3px] border-current border-t-transparent text-white"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            );
          if (!ready) return translations.button_loading;

          return translations.button_ready;
        },
        allowedContent({ ready, isUploading }) {
          if (!ready) return translations.content_loading;
          if (isUploading) return translations.content_uploading;
        },
        label: ({ ready }) =>
          ready ? translations.label : translations.label_loading,
      }}
    />
  </main>
);

const ChatContent = ({ i18n }: ChatSectionProps) => {
  const { dropped, setDropped } = useUpload();
  const [selectedFile, setSelectedFile] = useLocalStorage<PDFFile>(
    "file",
    null,
  );
  const { uploadthing } = i18n;

  const handleUploadComplete = (res: any) => {
    console.log(res);
    setSelectedFile({ url: res[0].url, id: res[0].key });
    setDropped(true);
  };

  const handleError = (error: Error) => {
    alert(`ERROR! ${error.message}`);
  };

  useEffect(() => {
    selectedFile ? setDropped(true) : setDropped(false);
  }, [selectedFile, setDropped]);

  return (
    <div className="flex w-full items-center justify-center">
      <div className="mt-3 w-full">
        {dropped ? (
          <>
            <ChatSection file={selectedFile} />
          </>
        ) : (
          <DropzoneSection
            translations={uploadthing}
            onUploadComplete={handleUploadComplete}
            onError={handleError}
          />
        )}
      </div>
    </div>
  );
};

export default ChatContent;
