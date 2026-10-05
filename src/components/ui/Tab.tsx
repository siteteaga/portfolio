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
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={onClick}
      className={`-mb-px shrink-0 cursor-pointer whitespace-nowrap border-b-2 py-3 text-sm md:text-base font-medium tracking-wide transition-colors duration-200 ${
        isActive
          ? "border-primary-dark text-primary-dark"
          : "border-transparent text-ink-soft hover:text-primary-dark hover:border-line-strong"
      } ${className}`}
    >
      {label}
    </button>
  );
}

interface TabGroupProps {
  children: React.ReactNode;
  /** Descrição do grupo para leitores de tela */
  label?: string;
  className?: string;
}

export function TabGroup({ children, label, className = "" }: TabGroupProps) {
  return (
    <div className={`border-b border-line ${className}`}>
      {/* Em telas pequenas a faixa rola na horizontal em vez de cortar os nomes */}
      <div
        role="tablist"
        aria-label={label}
        className="no-scrollbar -mx-5 flex gap-7 overflow-x-auto px-5 sm:mx-0 sm:px-0 md:gap-10"
      >
        {children}
      </div>
    </div>
  );
}
