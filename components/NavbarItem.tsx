import Link from "next/link";
import { ElementType, FC } from "react";

export type NavbarItemProps = {
  href: string;
  icon?: ElementType;
  label: string;
  active: boolean;
};

const NavbarItem: FC<NavbarItemProps> = ({
  href,
  icon: Icon,
  label,
  active,
}) => {
  return (
    <Link
      className={`hover:text-white-300 flex w-full items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm transition-colors hover:bg-indigo-800/25 focus:outline-none focus:ring-1 focus:ring-gray-600 dark:text-white ${
        active && "text-white-300 dark:bg-indigo-500/40"
      }`}
      href={href}
    >
      {Icon && <Icon className="h-5 w-5 text-white" />}
      {label}
    </Link>
  );
};

export default NavbarItem;
