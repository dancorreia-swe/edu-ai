"use client";

import { useState } from "react";
import SummarizeContent from "./SummarizeContent";

type SummarizePageProps = {
  i18n: any;
};

const SummarizePage = ({ i18n }: SummarizePageProps) => {
  const [isText, setIsText] = useState(true);

  return (
    <div className="container my-8">
      <div className="mb-4">
        <h1 className="mb-1 text-3xl font-semibold">{i18n.title}</h1>
        <span className="text-base text-neutral-500 dark:text-neutral-300">
          {i18n.subtitle}
        </span>
      </div>
      <SummarizeContent />
    </div>
  );
};

export default SummarizePage;
