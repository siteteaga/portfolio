import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses = "font-semibold rounded-lg transition-all duration-300 transform cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary: "bg-[var(--color-primary-medium)] hover:bg-[var(--color-primary-dark)] text-white hover:scale-105 ",
    secondary: "bg-white text-[var(--color-primary-medium)] border border-[var(--color-primary-medium)] hover:bg-[var(--color-primary-medium)] hover:text-white",
    outline: "border border-[var(--color-primary-medium)] text-[var(--color-primary-medium)] hover:bg-[var(--color-primary-medium)] hover:text-white",
    ghost: "text-[var(--color-primary-medium)] hover:bg-[var(--color-primary-medium)]/10",
  };

  const sizeClasses = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}