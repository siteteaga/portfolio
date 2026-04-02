interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: "center" | "left" | "right";
  showDivider?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  alignment = "center",
  showDivider = true,
  className = "",
}: SectionTitleProps) {
  const alignmentClasses = {
    center: "text-center items-center",
    left: "text-left items-start",
    right: "text-right items-end",
  };

  return (
    <div
      className={`flex flex-col gap-4 ${alignmentClasses[alignment]} ${className}`}
    >
      {showDivider && alignment === "center" && (
        <>
          <div className="w-100 md:w-4xl h-px bg-[var(--color-primary-dark)] opacity-60"></div>
          <div className="w-50 md:w-2xl h-px bg-[var(--color-primary-dark)] opacity-60"></div>
        </>
      )}

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-[var(--color-primary-dark)] opacity-60 tracking-wider">
        {title}
      </h1>

      {subtitle && (
        <span className="text-base md:text-lg text-[var(--color-primary-medium)] opacity-80 font-medium tracking-wide">
          {subtitle}
        </span>
      )}

      <div className="w-full max-w-120 h-px bg-[var(--color-primary-dark)] opacity-60"></div>
    </div>
  );
}
