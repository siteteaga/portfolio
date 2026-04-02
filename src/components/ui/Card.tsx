import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "hover" | "testimonial" | "skill";
  className?: string;
  onClick?: () => void;
}

export default function Card({
  children,
  variant = "default",
  className = "",
  onClick,
}: CardProps) {
  const baseClasses = "bg-white rounded-2xl transition-all duration-300";

  const variantClasses = {
    default: "border border-[var(--color-border-medium)] shadow-md",
    hover:
      "border border-[var(--color-border-medium)] shadow-md hover:shadow-lg hover:-translate-y-1 cursor-pointer",
    testimonial:
      "bg-[var(--color-primary-bg)] p-5 md:p-8 shadow-[0_0_15px_rgba(0,0,0,0.25)] hover:shadow-[0_0_25px_rgba(0,0,0,0.35)] hover:-translate-y-1 flex flex-col justify-between h-full",
    skill:
      "border border-[var(--color-border-medium)] shadow-md flex flex-col items-start hover:shadow-lg p-5 md:p-8 gap-3 md:gap-4",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (onClick) {
    return (
      <div className={`${classes} cursor-pointer`} onClick={onClick}>
        {children}
      </div>
    );
  }

  return <div className={classes}>{children}</div>;
}
