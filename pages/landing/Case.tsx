import React from "react";
import IconCard from "./IconCard";
import { IconAdOff } from "@tabler/icons-react";
const BoxSection = () => {
  return (
    <div className="lg:px-4- relative mx-auto mt-32 max-w-[85rem] bg-slate-950 px-4 py-10 sm:px-2 lg:py-14 ">
      <p className=" mb-10  text-center text-3xl font-extrabold text-white">
        USO DE CASOS:
      </p>
      <div className="   mt-7   grid grid-cols-2 gap-20">
        <div className="    w-auto items-center rounded-md bg-gradient-to-t from-slate-800/10 to-slate-900/90 p-20 shadow-lg shadow-blue-950/30">
          {/* Icon Block */}
          <IconCard
            icon={IconAdOff}
            title="Perguntas e Respostas"
            description="Gere perguntas e respostas baseada no seu conteúdo e material de estudo"
          />
        </div>
        <div className="  bg   items-center  rounded-md bg-gradient-to-t from-slate-800/10 to-slate-900/90 p-20 shadow-lg shadow-blue-950/30">
          {/* Icon Block */}
          <IconCard
            icon={IconAdOff}
            title="Inteligência artificial"
            description="Tenha a sua disposição um sistema de inteligência artificial de geração para gerar o conteúdo"
          />
        </div>
        <div className="w-auto items-center rounded-md bg-gradient-to-t from-slate-800/10 to-slate-900/90 p-20 shadow-lg shadow-blue-950/30">
          {/* Icon Block */}
          <IconCard
            icon={IconAdOff}
            title="Ajuste em tempo real"
            description="Ajuste e reajuste os seus questionamentos e auxílios até o seu ponto ideal"
          />
        </div>
        <div className="shadow--900 w-auto items-center  rounded-md bg-gradient-to-t from-slate-800/10 to-slate-900/90 p-20 shadow-lg shadow-blue-950/30">
          {/* Icon Block */}
          <IconCard
            icon={IconAdOff}
            title="Perguntas e Respostas"
            description="Gere perguntas e respostas baseada no seu conteúdo e material de estudo"
          />
        </div>
      </div>
    </div>
  );
};

export default BoxSection;
