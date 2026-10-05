import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { BackButton, Button, PortfolioCard, SectionTitle, Tab, TabGroup } from "./ui";
import Footer from "./Footer";
import { usePageTitle } from "../hooks/usePageTitle";
import {
  getAllProjects,
  getCategoryLabel,
  INTERIOR_CATEGORIES,
  ARCHITECTURE_CATEGORIES,
  type ProjectType,
} from "../data/projects";
import { ChevronLeft, ChevronRight } from "lucide-react";

type MainCategory = "Todos" | ProjectType;

const ITEMS_PER_PAGE = 12;

// Categorias principais
const mainCategories: MainCategory[] = ["Todos", "Interiores", "Arquitetura"];

const pageButtonClasses =
  "flex h-11 min-w-11 items-center justify-center rounded-sm border px-2 text-sm font-medium transition-colors duration-200";

function AllProjects() {
  usePageTitle("Todos os projetos");

  // Os filtros vivem na URL: voltar de um projeto mantém aba, categoria e página
  const [searchParams, setSearchParams] = useSearchParams();
  const listRef = useRef<HTMLDivElement>(null);

  const typeParam = searchParams.get("tipo");
  const activeMainTab: MainCategory =
    mainCategories.find((category) => category === typeParam) ?? "Todos";

  // Subcategorias baseadas na categoria principal selecionada
  const getSubCategories = (): string[] => {
    if (activeMainTab === "Interiores") {
      return ["Todos", ...INTERIOR_CATEGORIES];
    } else if (activeMainTab === "Arquitetura") {
      return ["Todos", ...ARCHITECTURE_CATEGORIES];
    }
    return ["Todos"];
  };

  const subCategories = getSubCategories();

  const categoryParam = searchParams.get("categoria");
  const activeSubTab =
    subCategories.find((category) => category === categoryParam) ?? "Todos";

  // Busca todos os projetos do arquivo centralizado
  const allProjects = getAllProjects();

  // Filtrar projetos
  const filteredProjects = allProjects.filter((project) => {
    // Filtro por categoria principal
    if (activeMainTab !== "Todos" && project.type !== activeMainTab) {
      return false;
    }

    // Filtro por subcategoria
    if (activeSubTab !== "Todos" && project.category !== activeSubTab) {
      return false;
    }

    return true;
  });

  // Paginação
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const pageParam = Number(searchParams.get("pagina"));
  const currentPage =
    Number.isInteger(pageParam) && pageParam >= 1 && pageParam <= totalPages
      ? pageParam
      : 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const updateFilters = (main: MainCategory, sub: string, page: number) => {
    const params: Record<string, string> = {};
    if (main !== "Todos") params.tipo = main;
    if (sub !== "Todos") params.categoria = sub;
    if (page > 1) params.pagina = String(page);
    setSearchParams(params, { replace: true });
  };

  const goToPage = (page: number) => {
    updateFilters(activeMainTab, activeSubTab, page);
    listRef.current?.scrollIntoView();
  };

  // Gerar números das páginas a exibir
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }

    return pages;
  };

  const total = filteredProjects.length;

  return (
    <>
      <main className="pt-[var(--header-height)]">
        <div className="container-page min-h-[80svh] py-8 md:py-14">
          {/* Header: Botão voltar + Título */}
          <BackButton label="Voltar para o início" fallbackTo="/" />

          <SectionTitle
            as="h1"
            title="Todos os projetos"
            subtitle="Explore nossa coleção completa de projetos"
            className="mt-6"
          />

          <div ref={listRef}>
            {/* Tabs principais */}
            <TabGroup label="Tipo de projeto" className="mt-10">
              {mainCategories.map((category) => (
                <Tab
                  key={category}
                  label={category}
                  isActive={activeMainTab === category}
                  onClick={() => updateFilters(category, "Todos", 1)}
                />
              ))}
            </TabGroup>

            {/* Subcategorias — filtros menores, para não competir com as abas principais */}
            {subCategories.length > 1 && (
              <div
                role="group"
                aria-label={`Categorias de ${activeMainTab.toLowerCase()}`}
                className="animate-fade-in mt-5 flex flex-wrap gap-2"
              >
                {subCategories.map((category) => {
                  const isActive = activeSubTab === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => updateFilters(activeMainTab, category, 1)}
                      className={`cursor-pointer rounded-sm border px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "border-primary-dark bg-primary-dark text-white"
                          : "border-line-strong text-primary-dark hover:border-primary-dark"
                      }`}
                    >
                      {getCategoryLabel(category)}
                    </button>
                  );
                })}
              </div>
            )}

            <p className="mt-6 text-sm text-ink-soft" aria-live="polite">
              {total} {total === 1 ? "projeto" : "projetos"}
              {totalPages > 1 && ` · página ${currentPage} de ${totalPages}`}
            </p>
          </div>

          {total === 0 ? (
            /* Estado vazio */
            <div className="mt-8 border-t border-line py-16">
              <h2 className="text-xl font-medium text-primary-dark">
                Nenhum projeto nesta categoria por enquanto
              </h2>
              <p className="mt-2 text-base text-ink-soft">
                Veja os projetos das outras categorias.
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => updateFilters("Todos", "Todos", 1)}
              >
                Ver todos os projetos
              </Button>
            </div>
          ) : (
            /* Grid de projetos */
            <div
              key={`${activeMainTab}-${activeSubTab}-${currentPage}`}
              className="animate-fade-in mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
            >
              {displayedProjects.map((project) => (
                <PortfolioCard
                  key={project.id}
                  id={project.id}
                  image={project.image}
                  title={project.title}
                  category={project.category}
                  location={project.location}
                />
              ))}
            </div>
          )}

          {/* Paginação */}
          {totalPages > 1 && (
            <nav
              aria-label="Paginação"
              className="mt-12 flex items-center justify-center gap-2 md:mt-16"
            >
              {/* Botão anterior */}
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Página anterior"
                className={`${pageButtonClasses} border-line-strong text-primary-dark enabled:cursor-pointer enabled:hover:border-primary-dark disabled:opacity-35`}
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>

              {/* Números das páginas */}
              {getPageNumbers().map((page, index) =>
                page === "..." ? (
                  <span
                    key={`ellipsis-${index}`}
                    className="px-1 text-ink-soft"
                    aria-hidden="true"
                  >
                    …
                  </span>
                ) : (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page as number)}
                    aria-label={`Página ${page}`}
                    aria-current={currentPage === page ? "page" : undefined}
                    className={`${pageButtonClasses} cursor-pointer ${
                      currentPage === page
                        ? "border-primary-dark bg-primary-dark text-white"
                        : "border-line-strong text-primary-dark hover:border-primary-dark"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              {/* Botão próximo */}
              <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Próxima página"
                className={`${pageButtonClasses} border-line-strong text-primary-dark enabled:cursor-pointer enabled:hover:border-primary-dark disabled:opacity-35`}
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </nav>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AllProjects;
