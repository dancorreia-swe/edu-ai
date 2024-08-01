"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

type QAGenerationProps = {
  label: string;
  result?: string;
  spoilerButton?: boolean;
};

const QAGeneration = ({ label, result, spoilerButton }: QAGenerationProps) => {
  const [spoiler, setSpoiler] = useState<boolean>(true as boolean);

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
          `rounded-md border p-4 duration-300 animate-in dark:border-slate-700 dark:bg-slate-900`,
        )}
      >
        <p
          className={`${spoiler && spoilerButton && "blur-md"} whitespace-pre-wrap break-words transition-all`}
        >
          {result ?? "Sem resultado"}
        </p>
      </div>
    </>
  );
};

export default QAGeneration;
