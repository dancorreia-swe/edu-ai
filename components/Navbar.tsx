"use client";

import { Link } from "@/navigation";
import NavbarItem, { NavbarItemProps } from "./NavbarItem";
import {
  IconMessageQuestion,
  IconPageBreak,
  IconPencilQuestion,
  IconResize,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import { NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ui/mode-toggle";
import { useTranslations } from "next-intl";
import { NavbarLabels } from "@/app/[locale]/app/layout";

type NavbarProps = {
  children: React.ReactNode;
  labels: NavbarLabels;
};

export type NavbarItemPropsWithoutActive = Omit<NavbarItemProps, "active">;

const Navbar = ({ children, labels }: NavbarProps) => {
  const pathname = usePathname();
  const { summarize, qaAnswer, chat } = labels.navbar;
  const { light, dark, system } = labels.theme;

  const navbarList: NavbarItemPropsWithoutActive[] = [
    {
      href: "/app/summarize",
      icon: IconResize,
      label: summarize,
    },
    {
      href: "/app/questions-and-answers",
      icon: IconPencilQuestion,
      label: qaAnswer,
    },
    {
      href: "/app/chat",
      icon: IconMessageQuestion,
      label: chat,
    },
  ];

  return (
    <>
      <div className="z-50 flex w-full flex-wrap items-center border-b bg-white py-2.5 text-sm text-neutral-800 dark:border-slate-700 dark:bg-slate-950 dark:text-white sm:flex-nowrap sm:justify-around sm:py-4">
        <div className="text-xl font-semibold">EduAI</div>
        <NavigationMenu>
          <NavigationMenuList className="space-x-12">
            {navbarList.map(({ label, href, icon: Icon }) => (
              <Link passHref href={href} key={href}>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    "flex cursor-pointer items-center gap-2 rounded px-2 py-1 transition-colors hover:bg-violet-500/20",
                    pathname === href &&
                      "bg-neutral-200/60 dark:bg-violet-500/20",
                  )}
                  active={pathname === href}
                >
                  <span>
                    {Icon && <Icon size={16} />}
                    {label}
                  </span>
                </NavigationMenuLink>
              </Link>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <ModeToggle light={light} dark={dark} system={system} />
      </div>
      {children}
    </>
  );
};

export default Navbar;
