import { Link } from "@/navigation";
import React from "react";

const CtaButton = () => {
  return (
    <Link
      href={`/app`}
      className="inline-flex items-center justify-center gap-x-3 rounded-full border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 px-6 py-3 text-center text-base font-medium text-white shadow-md shadow-transparent transition-all hover:shadow-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
    >
      Experimente agora
      <svg
        className="h-2.5 w-2.5"
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
      >
        <title>Right arrow</title>
        <path
          d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>
    </Link>
  );
};

export default CtaButton;
