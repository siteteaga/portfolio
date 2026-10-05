import { ArrowLink } from "./ui";
import { usePageTitle } from "../hooks/usePageTitle";

interface NotFoundProps {
  title?: string;
  message?: string;
}

export default function NotFound({
  title = "Página não encontrada",
  message = "O endereço que você acessou não existe ou foi movido.",
}: NotFoundProps) {
  usePageTitle(title);

  return (
    <main className="pt-[var(--header-height)]">
      <div className="container-page flex min-h-[80svh] flex-col items-start justify-center py-20">
        <p className="eyebrow text-ink-soft">Erro 404</p>
        <h1 className="mt-4 text-[clamp(2rem,1.3rem+3vw,3.5rem)] font-light uppercase leading-[1.05] tracking-[0.04em] text-primary-dark">
          {title}
        </h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">{message}</p>
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
          <ArrowLink to="/projetos">Ver todos os projetos</ArrowLink>
          <ArrowLink to="/">Ir para o início</ArrowLink>
        </div>
      </div>
    </main>
  );
}
