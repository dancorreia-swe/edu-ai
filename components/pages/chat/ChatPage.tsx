"use client";

import { i18nChatPage } from "@/app/[locale]/app/chat/page";
import ChatContent from "./ChatContent";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useUpload } from "@/contexts/upload-provider";
import { useToast } from "@/components/ui/use-toast";
import { IconCheck, IconX } from "@tabler/icons-react";

type ChatPageProps = {
  i18n: i18nChatPage;
};

const ChatPage = ({ i18n }: ChatPageProps) => {
  const { toast } = useToast();
  const { title, subtitle } = i18n.header;
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { dropped, resetDropped } = useUpload();

  const handleReset = async () => {
    if (typeof window !== "undefined") {
      setLoading(true);

      try {
        const fileId =
          window.localStorage.getItem("file") &&
          JSON.parse(window.localStorage.getItem("file")!).id;

        const res = await fetch(`/api/uploadthing/delete/${fileId}`, {
          method: "DELETE",
        });

        if (!res.ok) {
          toast({
            title: (
              <div className="flex items-center">
                <IconX size={20} className="mr-2 text-red-500" />
                <span>Failed to reset the chat</span>
              </div>
            ),
            description:
              "It wasn't possible to reset your file and chat, please try again soon",
          });

          return;
        }

        window.localStorage.removeItem("messages");
        window.localStorage.removeItem("file");

        toast({
          title: (
            <div className="flex items-center">
              <IconCheck size={20} className="mr-2 text-green-500" />
              <span>Chat reseted successfully</span>
            </div>
          ),
          description:
            "The file and chat history were cleared, you can start a new one",
        });

        resetDropped();
      } catch (error) {
        toast({
          title: (
            <div className="flex items-center">
              <IconX size={20} className="mr-2 text-red-500" />
              <span>Failed to reset the chat</span>
            </div>
          ),
          description:
            "It wasn't possible to reset your file and chat, please try again soon",
        });
      } finally {
        setOpen(false);
        setLoading(false);
      }
    }
  };

  return (
    <div className="container my-8">
      <header className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="mb-1 text-3xl font-semibold">{title}</h1>
          <span className="text-base text-neutral-500 dark:text-neutral-300">
            {subtitle}
          </span>
        </div>
        {dropped && (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size={"sm"}>Novo documento</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  Are you sure you want to reset the chat of this document?
                </DialogTitle>
                <DialogDescription>
                  This action will remove all messages from the chat.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="secondary" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button
                  variant={"default"}
                  onClick={handleReset}
                  disabled={loading}
                >
                  Reset Chat
                  {loading && (
                    <div
                      className="ml-2 inline-block size-3 animate-spin rounded-full border-[3px] border-current border-t-transparent text-white dark:text-slate-900"
                      role="status"
                      aria-label="loading"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </header>
      <ChatContent i18n={i18n} />
    </div>
  );
};

export default ChatPage;
