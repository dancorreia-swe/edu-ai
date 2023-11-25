"use client";

import { trpc } from "@/app/_trpc/client";
import React from "react";

const SummarizePage = () => {
  const { data, isLoading } = trpc.test.useQuery();

  return (
    <>
      <div className="flex flex-col mb-4 space-y-1">
        <h1 className="text-2xl font-semibold">Sumarizar</h1>
        <span className="text-neutral-200">
          Importe seus documentos e sumarize seu conteúdo
        </span>
      </div>
      <div className="bg-slate-900 p-4 rounded-md">
        <div>sfasdf</div>
      </div>
    </>
  );
};

export default SummarizePage;
