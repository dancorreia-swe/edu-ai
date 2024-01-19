import Link from "next/link";
import React from "react";
import CtaButton from "./CtaButton";

const CtaSection = () => {
  return (
    <section className="bg-slate-900/50 backdrop-blur-xl p-16 text-center mt-24 mb-16">
      <div className="mb-8 mt-4 text-center text-3xl font-extrabold ">
        <p className="text-white">EduAI</p>
        <span className="bg-gradient-to-r from-violet-400 to-blue-600 bg-clip-text text-transparent text-2xl font-semibold ">
          Seu aprendizado nunca foi tão visível
        </span>
      </div>
      {/* Buttons */}
      <div className="text-center">
        <CtaButton />
      </div>
    </section>
  );
};

export default CtaSection;
