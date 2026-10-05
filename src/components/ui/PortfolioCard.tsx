import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ImageOff } from "lucide-react";
import { Skeleton } from "./Skeleton";
import { getCategoryLabel } from "../../data/projects";

interface PortfolioCardProps {
  id: number;
  image: string;
  title: string;
  /** Omita quando a categoria já está clara pelo contexto (ex.: dentro de uma aba) */
  category?: string;
  location?: string;
  className?: string;
}

export function PortfolioCard({
  id,
  image,
  title,
  category,
  location,
  className = "",
}: PortfolioCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Imagens já em cache podem terminar de carregar antes do onLoad ser registrado
  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete) {
      setIsLoading(false);
      setHasError(img.naturalWidth === 0);
    }
  }, [image]);

  return (
    <Link to={`/projeto/${id}`} className={`group block ${className}`}>
      <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-sand">
        {/* Skeleton Loading */}
        {isLoading && <Skeleton className="absolute inset-0 rounded-none" />}

        {/* Error State */}
        {hasError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-ink-soft">
            <ImageOff size={22} strokeWidth={1.5} aria-hidden="true" />
            <span className="text-sm">Imagem indisponível</span>
          </div>
        ) : (
          <img
            ref={imgRef}
            src={image}
            alt=""
            className={`h-full w-full object-cover transition-[transform,opacity] duration-700 ease-out group-hover:scale-[1.03] ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
          />
        )}
      </div>

      {/* Legenda sempre visível — não depende de hover, funciona no toque */}
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <h3 className="text-base md:text-lg font-medium leading-snug text-primary-dark">
          <span className="link-underline">{title}</span>
        </h3>
        {category && (
          <span className="shrink-0 text-xs font-medium uppercase tracking-[0.14em] text-ink-soft">
            {getCategoryLabel(category)}
          </span>
        )}
      </div>
      {location && <p className="mt-1 text-sm text-ink-soft">{location}</p>}
    </Link>
  );
}

export default PortfolioCard;
