import React from "react";
import IconCard from "./IconCard";
import {
  IconAdOff,
  IconFileNeutral,
  IconInfinity,
  IconMessageQuestion,
  IconRobot,
} from "@tabler/icons-react";

const cards = [
  {
    title: "Perguntas e Respostas",
    description:
      "Gere perguntas e respostas baseada no seu conteúdo e material de estudo",
    icon: IconMessageQuestion,
  },
  {
    title: "Inteligência artificial",
    description:
      "Tenha a sua disposição um sistema de inteligência artificial de geração para gerar o conteúdo",
    icon: IconRobot,
  },
  {
    title: "Ajuste em tempo real",
    description:
      "Ajuste e reajuste os seus questionamentos e auxílios até o seu ponto ideal",
    icon: IconInfinity,
  },
  {
    title: "Leia seus documentos",
    description:
      "Converse com seus arquivos e documentos, e tenha uma experiência de estudo com seu próprio material",
    icon: IconFileNeutral,
  },
];

const UseCaseSection = () => {
  return (
    <div id="useCaseSection">
      <div className="relative mx-auto mt-32 max-w-6xl bg-slate-950 px-4 py-10 sm:px-2 lg:py-14 flex items-center flex-col">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
            Usos de caso
          </h2>
          <p className="mt-3 max-w-2xl text-xl text-gray-300 dark:text-gray-400">
            Faça os seus processos de estudo serem mais dinâmicos e eficientes
          </p>
        </div>
        <div className="grid grid-cols-2 gap-16">
          {cards.map((card) => (
            <IconCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              bg
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCaseSection;
