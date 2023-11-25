import Link from "next/link";
import { ElementType, FC } from "react";

export type NavbarItemProps = {
  href: string;
  icon: ElementType;
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
      className={`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm dark:text-white rounded-lg hover:bg-indigo-800/25 hover:text-white-300 focus:outline-none focus:ring-1 focus:ring-gray-600 transition-colors ${
        active && "dark:bg-indigo-500/40 text-white-300"
      }`}
      href={href}
    >
      {Icon && <Icon className="w-5 h-5 text-white" />}
      {label}
    </Link>
  );
};

export default NavbarItem;
