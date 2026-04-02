import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  label?: string;
  showLabel?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function BackButton({
  label = "Voltar ao Portfolio",
  showLabel = true,
  onClick,
  className = "",
}: BackButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 md:gap-4 lg:gap-6 px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-6 text-[var(--color-primary-dark)] hover:text-[var(--color-primary-medium)] transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer ${className}`}
    >
      <ArrowLeft size={18} className="md:w-5 md:h-5" />
      {showLabel && <span className="hidden sm:inline font-medium text-sm md:text-base">{label}</span>}
    </button>
  );
}
