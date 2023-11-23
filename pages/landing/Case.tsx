import React from "react";

const BoxSection = () => {
  return (
    <div className="gap:6rem flex h-screen items-center justify-center  bg-slate-900">
      <div className="grid max-w-4xl grid-cols-2 gap-8">
        <div className="rounded-md bg-white p-16">
          <p className="text-slate-900">USO DE CASO 1</p>
        </div>
        <div className="rounded-md bg-white p-16">
          <p className="text-slate-900">USO DE CASO 2</p>
        </div>
        <div className="rounded-md bg-white p-16">
          <p className="text-slate-900">USO DE CASO 3</p>
        </div>
        <div className="rounded-md bg-white p-16">
          <p className="text-slate-900">USO DE CASO 4</p>
        </div>
      </div>
    </div>
  );
};

export default BoxSection;
