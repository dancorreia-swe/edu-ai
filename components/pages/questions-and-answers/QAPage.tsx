"use client";

import { i18nQAPage } from "@/app/[locale]/app/questions-and-answers/page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Suspense, useState } from "react";
import { trpc } from "@/app/_trpc/client";
import QAGeneration from "./QAGeneration";
import { Skeleton } from "@/components/ui/skeleton";

type QaPageProps = {
  i18n: i18nQAPage;
};

const QaPage = ({ i18n }: QaPageProps) => {
  const [topic, setTopic] = useState<string>("" as string);
  const [questions, setQuestions] = useState<string>();
  const [answers, setAnswers] = useState<string>();

  const mutation = trpc.generateQA.useMutation({});

  const handleGenerateQA = async () => {
    const { questions, answers } = await mutation.mutateAsync({ text: topic });

    setQuestions(questions);
    setAnswers(answers);
  };

  return (
    <>
      <div className="mb-10 space-y-2">
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
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? (
            <>
              <div
                className="mr-2 inline-block size-3 animate-spin rounded-full border-[3px] border-current border-t-transparent text-white dark:text-white"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
              <span>{i18n.form.topicInput.buttonLoading}</span>
            </>
          ) : (
            <span>{i18n.form.topicInput.button}</span>
          )}
        </Button>
      </div>
      {mutation.isLoading && (
        <Skeleton className="h-96 w-full dark:bg-slate-800" />
      )}
      {!mutation.isLoading && questions && answers && (
        <div className="grid w-full grid-cols-2 gap-x-4">
          <div>
            {true && <QAGeneration label="Perguntas" result={questions} />}
          </div>

          <div>
            <QAGeneration label="Respostas" result={answers} spoilerButton />
          </div>
        </div>
      )}
    </>
  );
};

export default QaPage;
