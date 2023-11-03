import {
  IconPencilQuestion,
  IconScribble,
  IconSparkles,
} from "@tabler/icons-react";
import React from "react";
import IconCard from "./IconCard";

const IconSection = () => {
  return (
    <section className="relative mx-auto mt-16 max-w-[85rem] rounded-md bg-slate-900/30 px-8 py-10 backdrop-blur-md sm:px-6 lg:px-20 lg:py-14">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
          Construído para alunos
        </h2>
        <p className="mt-3 max-w-2xl text-xl text-gray-300 dark:text-gray-400">
          Voltado e desenvolvido para alunos impulsionarem seus estudos.
        </p>
      </div>
      <div className="mt-16 grid items-center gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {/* Icon Block */}
        <IconCard
          icon={IconPencilQuestion}
          title="Perguntas e Respostas"
          description="Gere perguntas e respostas baseada no seu conteúdo e material de estudo"
        />
        {/* Icon Block */}
        <IconCard
          icon={IconSparkles}
          title="Inteligência artificial"
          description="Tenha a sua disposição um sistema de inteligência artificial de última geração para gerar o conteúdo"
        />
        {/* Icon Block */}
        <IconCard
          icon={IconScribble}
          title="Ajuste em tempo real"
          description="Ajuste e reajuste os seus questionamentos e auxílios até o seu ponto ideal"
        />
      </div>
    </section>
  );
};

export default IconSection;
