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
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-semibold tracking-wide rounded-sm transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed";

  const variantClasses = {
    primary: "bg-primary-dark text-white hover:bg-primary-medium disabled:hover:bg-primary-dark",
    secondary: "bg-surface text-primary-dark border border-line-strong hover:border-primary-dark",
    outline: "border border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white",
    ghost: "text-primary-dark hover:bg-primary-dark/10",
  };

  const sizeClasses = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-base",
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
