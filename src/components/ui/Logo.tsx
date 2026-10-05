interface LogoProps {
  className?: string;
}

const LOGO_SRC = "/images/logo-th-horizontal.webp";

/**
 * Logo como máscara: assume a cor do texto ao redor (currentColor),
 * então serve tanto sobre a foto do hero quanto sobre o fundo claro.
 * Defina a altura via className (ex.: "h-10").
 */
export default function Logo({ className = "" }: LogoProps) {
  return (
    <span
      role="img"
      aria-label="TEAGÁ Arquitetura e Interiores"
      className={`block aspect-[823/213] bg-current ${className}`}
      style={{
        maskImage: `url(${LOGO_SRC})`,
        WebkitMaskImage: `url(${LOGO_SRC})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "left center",
        WebkitMaskPosition: "left center",
      }}
    />
  );
}
