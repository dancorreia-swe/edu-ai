"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { use, useEffect, useState } from "react";

type QAGenerationProps = {
  label: string;
  result?: string;
  isLoading: boolean;
  spoilerButton?: boolean;
};

const QAGeneration = ({
  label,
  result,
  isLoading,
  spoilerButton,
}: QAGenerationProps) => {
  const [spoiler, setSpoiler] = useState<boolean>(false as boolean);

  if (isLoading) {
    return <Skeleton className="h-[400px] w-full dark:bg-slate-700" />;
  }

  return (
    <>
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-md mb-2 font-semibold">{label}</h2>
        {spoilerButton && (
          <Button
            onClick={() => setSpoiler(!spoiler)}
            className="h-full px-2 py-1"
          >
            {spoiler ? "Mostrar" : "Esconder"}
          </Button>
        )}
      </div>
      <div
        className={cn(
          `rounded-md border bg-slate-900 p-4 duration-300 animate-in dark:border-slate-700`,
          {
            "blur-sm": spoiler,
          },
        )}
      >
        <p>{result ?? "Sem resultado"}</p>
      </div>
    </>
  );
};

export default QAGeneration;
