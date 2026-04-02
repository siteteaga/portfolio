import { useEffect, useRef, useState } from "react";

const bgHero = "/images/hero/FOTO001.webp";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  // Parallax effect - manipula DOM diretamente para evitar re-renders
  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      if (bgRef.current && heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          const scrollY = window.scrollY * 0.4;
          bgRef.current.style.transform = `translate3d(0, ${scrollY}px, 0) scale(1.1)`;
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

  // Trigger animations on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);


  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col overflow-hidden"
    >
      {/* Background with Parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-bg"
        style={{
          backgroundImage: `url(${bgHero})`,
          transform: "translate3d(0, 0, 0) scale(1.1)",
          willChange: "transform",
        }}
      />

      {/* Filtro sobre o background */}
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: "var(--color-overlay-dark)" }}
      />

      {/* Logo no canto superior direito */}
      <div
        className={`absolute top-2 right-2 md:top-4 md:right-20 z-10 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
      >
        <img
          src="/images/logo-th.webp"
          alt="Teaga Arquitetura"
          className="h-20 md:h-24 lg:h-50 w-auto rounded-xl"
        />
      </div>

      {/* Conteudo centralizado */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 md:px-8 text-center text-white">
        <h1
          className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-4 md:mb-6 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          style={{ transitionDelay: "200ms" }}
        >
          PROJETOS COM EMOÇÕES
        </h1>
        <p
          className={`text-lg md:text-xl lg:text-2xl max-w-4xl leading-relaxed font-light mb-12 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          style={{ transitionDelay: "400ms" }}
        >
          Com base na Psicoarquitetura
        </p>


      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"
          }`}
        style={{ transitionDelay: "800ms" }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
