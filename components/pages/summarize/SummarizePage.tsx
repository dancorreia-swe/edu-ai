"use client";
import { Switch } from "@/components/ui/switch"
import { useState } from "react";
import SummarizeContent from "./SummarizeContent";
import { i18nSummarizePage } from "@/app/[locale]/app/summarize/page";

type SummarizePageProps = {
  i18n: i18nSummarizePage;
};

const SummarizePage = ({ i18n }: SummarizePageProps) => {
  const { title, subtitle } = i18n.header;
  const { text, file } = i18n.type;
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="container my-8">
      <div className="mb-4">
        <h1 className="mb-1 text-3xl font-semibold">{title}</h1>
        <span className="text-base text-neutral-500 dark:text-neutral-300">
          {subtitle}
        </span>
        <div className="flex justify-end ml-auto space-x-4 mr-20 mb-8">
          <span className={`${isChecked ? 'text-slate-500' : 'dark:text-gray-200'}`}>{text}</span>
          <Switch checked={isChecked} onCheckedChange={(prev) => setIsChecked(prev)} />
          <span className={`${!isChecked ? 'text-slate-500' : 'dark:text-gray-200'}`}>{file}</span>
        </div>
      </div>
      <SummarizeContent checked={isChecked}/>
    </div>
  );
};

export default SummarizePage;
