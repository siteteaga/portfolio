import { useState } from "react";
import { Skeleton } from "./Skeleton";

interface PortfolioCardProps {
  id: number;
  image: string;
  title: string;
  category: string;
  onClick: (id: number) => void;
}

export function PortfolioCard({ id, image, title, category, onClick }: PortfolioCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div
      className="group cursor-pointer transform transition-all duration-300 relative"
      onClick={() => onClick(id)}
    >
      <div className="aspect-[4/3] md:aspect-[6/3] overflow-hidden shadow-2xl relative rounded-2xl bg-[var(--color-overlay-light)]">
        {/* Skeleton Loading */}
        {isLoading && (
          <div className="absolute inset-0 z-10">
            <Skeleton className="w-full h-full" />
          </div>
        )}

        {/* Error State */}
        {hasError && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-[var(--color-overlay-light)]">
            <span className="text-[var(--color-primary-medium)] text-sm">Erro ao carregar imagem</span>
          </div>
        )}

        {/* Image */}
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover filter transition-all duration-500 rounded-2xl group-hover:scale-110 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          loading="lazy"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />

        {/* Overlay com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-overlay-medium)] via-transparent to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-center transition-all duration-300 rounded-2xl">
          <div className="text-center p-4 md:p-6">
            <span className="text-white text-lg md:text-xl font-bold text-center drop-shadow-lg block mb-2 md:mb-4">
              {title}
            </span>
            <span className="text-white text-xs md:text-sm opacity-90 font-medium">
              Ver projeto completo
            </span>
          </div>
        </div>

        {/* Badge de categoria */}
        <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-[var(--color-primary-medium)] text-white px-2 md:px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {category.toUpperCase()}
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
