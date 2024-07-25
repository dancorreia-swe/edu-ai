"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { trpc } from "@/app/_trpc/client";
import { Textarea } from "@/components/ui/textarea";
import { IconCheck, IconClipboard } from "@tabler/icons-react";
import type { i18nSummarizePage } from "@/app/[locale]/app/summarize/page";
import { cn } from "@/lib/utils";

type Flatteni18nSummarizePage = {
  [k in keyof i18nSummarizePage["content"]]: i18nSummarizePage["content"][k];
};

type SummarizeContentProps = {
  checked: boolean;
  i18n: Flatteni18nSummarizePage;
};

const SummarizeContent = ({ checked, i18n }: SummarizeContentProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { actions, placeholder, content_header } = i18n;
  const [textareaValue, setTextareaValue] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(checked);
  const [copied, setCopied] = useState<boolean>(false);
  const summarizeMutation = trpc.summarize.useMutation();

  const handleSummarize = async () => {
    if (textAreaRef.current) {
      const text = textAreaRef.current.value;

      try {
        const summedContent = await summarizeMutation.mutateAsync({ text });
        setTextareaValue(summedContent.content as string);
      } catch (error) {}
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(textareaValue);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <>
      <div className="flex w-full items-center justify-center">
        {!isChecked ? (
          <div className="w-full">
            <Textarea
              placeholder={placeholder}
              className="dark:bg-slate-900/50"
              ref={textAreaRef}
            />
            <Button
              className="my-4 flex w-40 gap-x-2 text-white dark:bg-slate-700 dark:hover:!bg-gray-600"
              onClick={handleSummarize}
              disabled={summarizeMutation.isLoading}
            >
              {summarizeMutation.isLoading ? (
                <>
                  <div
                    className="inline-block size-3 animate-spin rounded-full border-[3px] border-current border-t-transparent text-white dark:text-white"
                    role="status"
                    aria-label="loading"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                  {actions.loadingButton}
                </>
              ) : (
                actions.sendButton
              )}
            </Button>
          </div>
        ) : (
          <label
            htmlFor="dropzone-file"
            className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
              <svg
                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                PDF, DOCX, TXT
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        )}
      </div>
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <span className="text-md font-semibold">{content_header}</span>
          <div className="flex items-center gap-x-2">
            {copied && <IconCheck className="text-green-500" size={20} />}
            <Button
              className={cn(
                "flex items-center space-x-2 rounded-md border p-2 text-sm transition-colors",
                copied &&
                  "hover:border-green-500 hover:bg-green-300 hover:text-green-800",
              )}
              variant={"outline"}
              onClick={handleCopy}
              disabled={!textareaValue}
            >
              <IconClipboard size={16} />
              <span>{actions.copyButton}</span>
            </Button>
          </div>
        </div>
        <div className="mt-4 rounded-md border p-4">
          {textareaValue || "No content"}
        </div>
      </div>
    </>
  );
};

export default SummarizeContent;
