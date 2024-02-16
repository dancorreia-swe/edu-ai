import Link from "next/link";
import React from "react";

const BadgeLabel = () => {
  return (
    <div className="flex justify-center">
      <Link
        className="group inline-block rounded-full border border-white/[.05] bg-white/[.05] p-1 pl-4 shadow-md hover:bg-white/[.1]"
        href="../figma.html"
      >
        <p className="mr-2 inline-block text-sm text-white">
          <span className="font-bold">EduAI</span> é totalmente gratuito.
        </p>
        <span className="inline-flex items-center justify-center gap-x-2 rounded-full bg-white/[.075] px-3 py-2 text-sm font-semibold text-white group-hover:bg-white/[.1]">
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
        </span>
      </Link>
    </div>
  );
};

export default BadgeLabel;
