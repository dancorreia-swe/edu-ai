type AppHeaderProps = {
  title: string;
  subtitle: string;
};

const AppHeader = ({ title, subtitle }: AppHeaderProps) => {
  return (
    <div className="mb-4">
      <h1 className="mb-1 text-3xl font-semibold">{title}</h1>
      <span className="text-base text-neutral-500 dark:text-neutral-300">
        {subtitle}
      </span>
    </div>
  );
};

export default AppHeader;
