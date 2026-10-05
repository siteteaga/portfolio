import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  label?: string;
  showLabel?: boolean;
  /** Destino usado quando não há página anterior no histórico (acesso direto pelo link) */
  fallbackTo?: string;
  onClick?: () => void;
  className?: string;
}

export default function BackButton({
  label = "Voltar ao Portfolio",
  showLabel = true,
  fallbackTo = "/",
  onClick,
  className = "",
}: BackButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (window.history.state?.idx > 0) {
      navigate(-1);
    } else {
      navigate(fallbackTo);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={showLabel ? undefined : label}
      className={`group inline-flex cursor-pointer items-center gap-2 py-2 text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-primary-dark ${className}`}
    >
      <ArrowLeft
        size={16}
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:-translate-x-1"
      />
      {showLabel && <span>{label}</span>}
    </button>
  );
}
