"use client";

import Link from "next/link";
import NavbarItem, { NavbarItemProps } from "./NavbarItem";
import {
  IconHome,
  IconMessageQuestion,
  IconPageBreak,
  IconPencilQuestion,
} from "@tabler/icons-react";
import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";

type NavbarItemPropsWithoutActive = Omit<NavbarItemProps, "active">;

const navbarList: NavbarItemPropsWithoutActive[] = [
  {
    href: "/app/summarize",
    icon: IconPageBreak,
    label: "Sumarizar",
  },
  {
    href: "app/questions-and-answers",
    icon: IconPencilQuestion,
    label: "Perguntas e Respostas",
  },
  {
    href: "app/chat",
    icon: IconMessageQuestion,
    label: "Chat",
  },
];

const Navbar = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();

  return (
    <>
      <div>
        {/* Sidebar */}
        <div
          id="application-sidebar-dark"
          className="hs-overlay hs-overlay-open:translate-x-0 fixed bottom-0 start-0 top-0 z-[60] hidden w-64 -translate-x-full transform overflow-y-auto border-e border-gray-800 bg-gradient-to-b from-violet-600/[.15] to-slate-950 pb-10 pt-7 transition-all duration-300 lg:bottom-0 lg:end-auto lg:block lg:translate-x-0 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-slate-700 [&::-webkit-scrollbar]:w-2 bg-black"
        >
          <div className="px-6">
            <Link
              className="flex-none text-xl font-semibold text-white focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="#"
              aria-label="Brand"
            >
              EduAI
            </Link>
          </div>
          <nav
            className="flex w-full flex-col flex-wrap p-6"
            data-hs-accordion-always-open
          >
            <ul className="space-y-1.5">
              {navbarList.map((item) => {
                return (
                  <li key={item.href}>
                    <NavbarItem {...item} active={pathname === item.href} />
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        {/* End Sidebar */}
        {/* Content */}
        <div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Navbar;
