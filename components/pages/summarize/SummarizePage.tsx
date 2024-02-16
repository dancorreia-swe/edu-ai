"use client";
import SummarizeContent from "./SummarizeContent";
import { i18nSummarizePage } from "@/app/[locale]/app/summarize/page";
import AppHeader from "@/components/ui/app-header";

type SummarizePageProps = {
  i18n: i18nSummarizePage;
};

const SummarizePage = ({ i18n }: SummarizePageProps) => {
  const { title, subtitle } = i18n.header;

  return (
    <>
      <AppHeader title={title} subtitle={subtitle} />
      <SummarizeContent />
    </>
  );
};

export default SummarizePage;
