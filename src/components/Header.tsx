import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./ui";

const navLinks = [
  { label: "Interiores", hash: "#interiores" },
  { label: "Arquitetura", hash: "#arquitetura" },
  { label: "Escritório", hash: "#escritorio" },
  { label: "Jornada", hash: "#jornada" },
  { label: "A arquiteta", hash: "#arquiteta" },
  { label: "Contato", hash: "#contato" },
];

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha o menu ao navegar
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.key]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  // Só fica transparente sobre a foto do hero, no topo da home
  const isOverHero = location.pathname === "/" && !isScrolled && !isMenuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 h-[var(--header-height)] border-b transition-colors duration-300 ${
        isOverHero
          ? "on-dark border-transparent text-white"
          : "border-line bg-primary-bg text-primary-dark"
      }`}
    >
      <div className="container-page flex h-full items-center justify-between gap-6">
        <Link to="/" aria-label="TEAGÁ Arquitetura e Interiores, ir para o início">
          <Logo className="h-9 md:h-11" />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.hash}>
                <Link
                  to={{ pathname: "/", hash: link.hash }}
                  className="link-underline py-2 text-sm font-medium tracking-wide"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="menu-mobile"
          className="eyebrow -mr-2 cursor-pointer px-2 py-3 lg:hidden"
        >
          {isMenuOpen ? "Fechar" : "Menu"}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="menu-mobile"
          aria-label="Principal"
          className="animate-fade-in border-b border-line bg-primary-bg lg:hidden"
        >
          <ul className="container-page pb-4">
            {navLinks.map((link) => (
              <li key={link.hash} className="border-t border-line">
                <Link
                  to={{ pathname: "/", hash: link.hash }}
                  className="block py-4 text-lg font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
