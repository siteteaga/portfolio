import { type ReactNode } from "react";

interface SocialIconProps {
  href: string;
  children: ReactNode;
  variant?: "footer" | "button";
  className?: string;
  ariaLabel?: string;
}

export default function SocialIcon({
  href,
  children,
  variant = "footer",
  className = "",
  ariaLabel,
}: SocialIconProps) {
  const baseClasses = "transition-colors duration-200";

  const variantClasses = {
    footer:
      "w-11 h-11 flex items-center justify-center rounded-sm border border-white/50 text-white hover:bg-white hover:text-primary-medium",
    button:
      "group inline-flex items-center gap-3 rounded-sm border border-primary-dark px-5 py-3 text-primary-dark hover:bg-primary-dark hover:text-white",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
