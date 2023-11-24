import React from "react";

const Trybtn = () => {
  return (
    <div className="bg-white p-16 text-center">
      <div className="mb-10 mt-4  text-center text-3xl font-extrabold ">
        <p className="text-black">EduAI, Voltado para você</p>
      </div>
      {/* Buttons */}
      <div className="text-center">
        <a
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
        </a>
      </div>
    </div>
  );
};

export default Trybtn;
