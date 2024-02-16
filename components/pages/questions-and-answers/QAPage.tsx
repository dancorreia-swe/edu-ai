"use client";

import { i18nQAPage } from "@/app/[locale]/app/questions-and-answers/page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { trpc } from "@/app/_trpc/client";
import QAGeneration from "./QAGeneration";

type QaPageProps = {
  i18n: i18nQAPage;
};

const QaPage = ({ i18n }: QaPageProps) => {
  const [topic, setTopic] = useState<string>("" as string);

  const mutation = trpc.generateQA.useMutation({});

  const handleGenerateQA = () => {
    mutation.mutate({
      topic,
    });
  };

  return (
    <>
      <div className="mb-4 space-y-2">
        <Label htmlFor="topic" className="cursor-pointer">
          {i18n.form.topicInput.label}
        </Label>
        <Input
          id="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder={i18n.form.topicInput.placeholder}
          className="transition-colors dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-indigo-800"
        />
        <Button
          className="dark:bg-slate-600 dark:text-white dark:hover:bg-slate-500"
          onClick={handleGenerateQA}
        >
          {i18n.form.topicInput.button}
        </Button>
      </div>

      <div className="grid w-full grid-cols-2 gap-x-4">
        <div>
          {true && (
            <QAGeneration
              isLoading={false}
              label="Perguntas"
              result={mutation.data?.topic}
            />
          )}
        </div>

        <div>
          <QAGeneration
            isLoading={false}
            label="Respostas"
            result="afasdfasdfasdfasdf"
            spoilerButton
          />
        </div>
      </div>
    </>
  );
};

export default QaPage;
