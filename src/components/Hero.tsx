import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

const bgHero = "/images/hero/FOTO001.webp";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  // Parallax effect - manipula DOM diretamente para evitar re-renders
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    const updateParallax = () => {
      if (bgRef.current && heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          const scrollY = window.scrollY * 0.25;
          bgRef.current.style.transform = `translate3d(0, ${scrollY}px, 0) scale(1.08)`;
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="on-dark relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-primary-dark"
    >
      {/* Background with Parallax */}
      <div
        ref={bgRef}
        className="parallax-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgHero})`,
          transform: "translate3d(0, 0, 0) scale(1.08)",
        }}
      />

      {/* Escurece a base da foto para o texto ter contraste, sem tingir a imagem inteira */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2a1504]/85 via-[#2a1504]/30 to-[#2a1504]/40" />

      {/* Conteúdo alinhado à base, na mesma margem do restante da página */}
      <div className="container-page animate-fade-in relative z-10 pb-12 pt-[calc(var(--header-height)+3rem)] text-white md:pb-20">
        <h1 className="max-w-[14ch] text-[clamp(2.5rem,1.2rem+6vw,6rem)] font-light uppercase leading-[1] tracking-[0.04em]">
          Projetos com emoções
        </h1>

        <div className="mt-8 flex flex-col gap-6 border-t border-white/40 pt-6 sm:flex-row sm:items-center sm:justify-between md:mt-10">
          <p className="text-lg font-normal md:text-xl">Com base na Psicoarquitetura</p>

          <a
            href="#interiores"
            className="group inline-flex items-center gap-3 self-start text-sm font-semibold uppercase tracking-[0.14em] sm:self-auto"
          >
            <span className="link-underline pb-1">Ver projetos</span>
            <ArrowDown
              size={16}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
