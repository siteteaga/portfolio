import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ArrowLinkProps {
  to: string;
  children: ReactNode;
  /** Usar sobre fundo escuro */
  onDark?: boolean;
  className?: string;
}

export default function ArrowLink({ to, children, onDark = false, className = "" }: ArrowLinkProps) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-3 border-b pb-1.5 text-sm font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
        onDark
          ? "border-white/60 text-white hover:border-white"
          : "border-line-strong text-primary-dark hover:border-primary-dark"
      } ${className}`}
    >
      {children}
      <ArrowRight
        size={16}
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1"
      />
    </Link>
  );
}
