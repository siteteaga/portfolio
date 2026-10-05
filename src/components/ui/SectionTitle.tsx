interface SectionTitleProps {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  alignment?: "center" | "left" | "right";
  /** Nível do título. Use "h1" apenas uma vez por página. */
  as?: "h1" | "h2";
  /** Usar sobre fundo escuro */
  onDark?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  eyebrow,
  subtitle,
  alignment = "left",
  as: Heading = "h2",
  onDark = false,
  className = "",
}: SectionTitleProps) {
  const alignmentClasses = {
    center: "text-center items-center",
    left: "text-left items-start",
    right: "text-right items-end",
  };

  return (
    <div className={`flex flex-col ${alignmentClasses[alignment]} ${className}`}>
      {eyebrow && (
        <p className={`eyebrow mb-4 ${onDark ? "text-white/75" : "text-ink-soft"}`}>
          {eyebrow}
        </p>
      )}

      <Heading
        className={`text-[clamp(1.75rem,1.2rem+2.2vw,3rem)] font-light uppercase leading-[1.1] tracking-[0.06em] ${
          onDark ? "text-white" : "text-primary-dark"
        }`}
      >
        {title}
      </Heading>

      {subtitle && (
        <p
          className={`mt-4 max-w-xl text-base md:text-lg leading-relaxed ${
            onDark ? "text-white/80" : "text-ink-soft"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
