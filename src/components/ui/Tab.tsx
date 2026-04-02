interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

export default function Tab({
  label,
  isActive,
  onClick,
  className = "",
}: TabProps) {
  return (
    <button
      onClick={onClick}
      className={`px-2 md:px-6 py-2 md:py-3 rounded-xl font-medium transition-all duration-300 text-xs md:text-base flex-1 min-w-0 truncate ${
        isActive
          ? "bg-[var(--color-primary-medium)] text-white shadow-lg transform scale-105"
          : "text-[var(--color-primary-medium)] hover:bg-[var(--color-primary-medium)]/10 hover:text-[var(--color-primary-dark)] cursor-pointer"
      } ${className}`}
    >
      {label}
    </button>
  );
}

interface TabGroupProps {
  children: React.ReactNode;
  className?: string;
}

export function TabGroup({ children, className = "" }: TabGroupProps) {
  return (
    <div className={`flex justify-center pt-8 pb-4 px-4 ${className}`}>
      <div className="flex bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg gap-2 md:gap-4 p-3 md:p-4 w-full max-w-2xl">
        {children}
      </div>
    </div>
  );
}
