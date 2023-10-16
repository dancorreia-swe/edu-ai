import { ElementType, FC } from "react";

type IconCardProps = {
  icon: ElementType;
  title: string;
  description: string;
};

const IconCard: FC<IconCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="text-center">
      <div className="group mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-gray-50 transition-colors ease-out dark:border-gray-700 dark:bg-slate-800 hover:dark:border-violet-600">
        <Icon className="group-hover:text-violet-200" />
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="mt-1 text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default IconCard;
