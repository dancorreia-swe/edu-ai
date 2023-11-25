import Link from "next/link";
import React from "react";
import ParticlesBackground from "./Particles";

const Hero = () => {
  return (
    <section className="relative">
      <div className="bg-slate-950">
        <div className="relative bg-gradient-to-b from-violet-600/[.15] via-transparent pt-32">
          <div className="mx-auto max-w-[85rem] space-y-8 px-4 py-24 pb-60 sm:px-6 lg:px-8">
            <ParticlesBackground />
            {/* Announcement Banner */}
            <div className="flex justify-center">
              <Link
                className="group inline-block rounded-full border border-white/[.05] bg-white/[.05] p-1 pl-4 shadow-md hover:bg-white/[.1]"
                href="../figma.html"
              >
                <p className="mr-2 inline-block text-sm text-white">
                  <span className="font-bold">EduAI</span> é totalmente
                  gratuito.
                </p>
                <span className="inline-flex items-center justify-center gap-x-2 rounded-full bg-white/[.075] px-3 py-2 text-sm font-semibold text-white group-hover:bg-white/[.1]">
                  <svg
                    className="h-2.5 w-2.5"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <title>Close</title>
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
            {/* End Announcement Banner */}

            {/* Title */}
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="block text-4xl font-bold text-gray-800 dark:text-gray-200 md:text-5xl lg:text-8xl">
                Nunca foi tão fácil
                <span className="bg-gradient-to-r from-violet-400 to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  aprender
                </span>
              </h1>
            </div>
            {/* End Title */}
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg text-gray-400">
                Gere perguntas, resumos, e muito mais para estudar de forma mais
                eficiente e rápida.
              </p>
            </div>
            {/* Buttons */}
            <div className="text-center">
              <Link
                href="/app"
                className="inline-flex items-center justify-center gap-x-3 rounded-full border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 px-6 py-3 text-center text-base font-medium text-white shadow-lg shadow-transparent hover:shadow-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
              >
                Experimente agora
                <svg
                  className="h-2.5 w-2.5"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
            </div>
            {/* End Buttons */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
