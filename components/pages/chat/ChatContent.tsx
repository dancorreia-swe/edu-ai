"use client";

import { useLocalStorage } from "usehooks-ts";
import { i18nChatPage } from "@/app/[locale]/app/chat/page";
import { UploadDropzone } from "@/lib/uploadthing";
import ChatArea from "./ChatArea";
import ChatFooter from "./ChatFooter";
import { v4 as uuid } from "uuid";
import { useEffect, useRef, useState } from "react";
import { useUpload } from "@/contexts/upload-provider";
import { trpc } from "@/app/_trpc/client";
import { useToast } from "@/components/ui/use-toast";

type PDFFile = { url: string; key: string } | null;

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

const ChatSection = ({ file, i18n }: { file: PDFFile } & ChatSectionProps) => {
  const [messages, setMessages] = useLocalStorage<Message[]>("messages", []);
  const [loading, setLoading] = useState<boolean>(false);
  const chatMutation = trpc.chatWithAI.useMutation();
  const { toast } = useToast();

  const onSendPrompt = async (message: string) => {
    const newMessage = {
      id: uuid(),
      content: message,
      author: Author.USER,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, newMessage]);

    setLoading(true);
    try {
      const result = await chatMutation.mutateAsync({
        prompt: message,
        key: file!.key,
      });

      const aiMessage = {
        id: uuid(),
        content: result.answer,
        author: Author.AI,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      toast({
        title: i18n.toast.error_send_message_title,
        description: i18n.toast.error_send_message_description,
      });
    } finally {
      setLoading(false);
    }
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
        <ChatArea messages={messages} loading={loading} />
        <ChatFooter disabled={false} onSendPrompt={onSendPrompt} />
      </div>
    </div>
  );
};

const DropzoneSection = ({
  onUploadComplete,
  onBeforeUploadBegin,
  onError,
  translations,
}: {
  onUploadComplete: (res: any) => void;
  onBeforeUploadBegin: (files: any) => Promise<any>;
  onError: (error: Error) => void;
  translations: i18nChatPage["uploadthing"];
}) => (
  <main className="flex w-full flex-col items-center justify-between py-4">
    <UploadDropzone
      className="w-full cursor-pointer bg-neutral-100/30 transition-colors ut-button:w-fit ut-button:bg-neutral-950 ut-button:px-3 hover:ut-button:bg-violet-600 ut-label:w-full ut-label:text-xl ut-label:text-neutral-900 ut-uploading:ut-button:after:bg-violet-500 ut-allowed-content:ut-uploading:text-red-300 dark:bg-slate-800 dark:hover:bg-slate-900 dark:ut-button:bg-violet-600/80 dark:hover:ut-button:bg-violet-700 dark:ut-label:text-white"
      endpoint="pdfUploader"
      onBeforeUploadBegin={onBeforeUploadBegin}
      onClientUploadComplete={onUploadComplete}
      onUploadError={onError}
      content={{
        button: ({ ready, isUploading, uploadProgress, fileTypes }) => {
          if (isUploading) {
            return (
              <>
                {uploadProgress && uploadProgress < 100 ? (
                  <span className="z-50 mr-2">{uploadProgress}%</span>
                ) : (
                  <div
                    className="z-50 inline-block size-5 animate-spin rounded-full border-[3px] border-current border-t-transparent text-white"
                    role="status"
                    aria-label="loading"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
              </>
            );
          }

          if (!ready) return translations.button_loading;
          if (fileTypes && fileTypes.length > 0)
            return `${translations.button_ready} (${fileTypes.join(", ")})`;

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
  const { toast } = useToast();
  const { dropped, setDropped } = useUpload();
  const fileRef = useRef(null);
  const [selectedFile, setSelectedFile] = useLocalStorage<PDFFile>(
    "file",
    null,
  );
  const { uploadthing } = i18n;

  const handleUploadComplete = async (res: any) => {
    const formData = new FormData();

    formData.append("file", fileRef.current!);
    formData.append("key", res[0].key);

    try {
      const vectorRes = await fetch("/api/vector-store", {
        method: "POST",
        body: formData,
      });

      if (!vectorRes.ok) {
        toast({
          title: i18n.toast.error_upload_file_title,
          description: i18n.toast.error_upload_file_description,
        });

        return;
      }

      setSelectedFile({ url: res[0].url, key: res[0].key });
      setDropped(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBeforeUploadBegin = (files: any) => {
    if (files.length > 1) {
      toast({
        title: i18n.toast.error_file_length_title,
        description: i18n.toast.error_file_length_description,
      });

      return;
    }

    fileRef.current = files[0];

    return files;
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
            <ChatSection file={selectedFile} i18n={i18n} />
          </>
        ) : (
          <DropzoneSection
            translations={uploadthing}
            onUploadComplete={handleUploadComplete}
            onBeforeUploadBegin={handleBeforeUploadBegin}
            onError={handleError}
          />
        )}
      </div>
    </div>
  );
};

export default ChatContent;
