"use client";
import { useTranslations } from "next-intl";
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const SummarizeContent = ({ checked }: any) => {
  const [isChecked, setIsChecked] = useState<Boolean>(checked);
  useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  return (
    <div className="flex w-full items-center justify-center">
      {!isChecked ? (
        <div className="w-full">
          <Textarea placeholder="Type your text to summarize" className="dark:bg-slate-900/50" />
          <Button className="m-auto my-10 flex dark:bg-slate-700 text-white w-40 dark:hover:!bg-gray-600">Send</Button>
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
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      )}
    </div>
  );
};

export default SummarizeContent;
