"use client";

import { useState } from "react";
import SummarizeContent from "./SummarizeContent";
import { i18nSummarizePage } from "@/app/[locale]/app/summarize/page";

type SummarizePageProps = {
  i18n: i18nSummarizePage;
};

const SummarizePage = ({ i18n }: SummarizePageProps) => {
  const { title, subtitle } = i18n.header;
  const [isText, setIsText] = useState(true);

  return (
    <div className="container my-8">
      <div className="mb-4">
        <h1 className="mb-1 text-3xl font-semibold">{title}</h1>
        <span className="text-base text-neutral-500 dark:text-neutral-300">
          {subtitle}
        </span>
      </div>
      <SummarizeContent />
    </div>
  );
};

export default SummarizePage;
