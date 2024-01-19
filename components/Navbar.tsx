"use client";

import Link from "next/link";
import { NavbarItemProps } from "./NavbarItem";
import {
  IconMessageQuestion,
  IconPageBreak,
  IconPencilQuestion,
} from "@tabler/icons-react";
import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import { NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ui/mode-toggle";
import { useTranslation } from "@/app/i18n/client";

type NavbarItemPropsWithoutActive = Omit<NavbarItemProps, "active">;

const navbarList: NavbarItemPropsWithoutActive[] = [
  {
    href: "/app/summarize",
    icon: IconPageBreak,
    label: "summarize",
  },
  {
    href: "app/questions-and-answers",
    icon: IconPencilQuestion,
    label: "qa-answers",
  },
  {
    href: "app/chat",
    icon: IconMessageQuestion,
    label: "chat",
  },
];

type NavbarProps = {
  children: React.ReactNode;
  params: { lng: string };
};

const Navbar = ({ children, params: { lng } }: NavbarProps) => {
  const pathname = usePathname();
  const { t } = useTranslation(lng, "navigation");

  return (
    <>
      <div className="z-50 flex w-full flex-wrap items-center border-b bg-white py-2.5 text-sm text-neutral-800 dark:border-slate-700 dark:bg-slate-900 dark:text-white sm:flex-nowrap sm:justify-around sm:py-4">
        <div className="text-xl font-semibold">EduAI</div>
        <NavigationMenu>
          <NavigationMenuList className="space-x-12">
            {navbarList.map(({ label, href, icon: Icon }) => (
              <Link legacyBehavior href={href} key={href}>
                <NavigationMenuLink
                  className={cn(
                    "flex cursor-pointer items-center gap-2 rounded px-2 py-1 transition-colors hover:bg-violet-500/20",
                    pathname === href &&
                      "bg-neutral-200/60 dark:bg-violet-500/20",
                  )}
                  active={pathname === href}
                >
                  {Icon && <Icon size={16} />}
                  {t(label)}
                </NavigationMenuLink>
              </Link>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <ModeToggle />
      </div>
      {children}
    </>
  );
};

export default Navbar;
