import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BackButton, SectionTitle, Tab, TabGroup } from "./ui";
import Footer from "./Footer";
import {
  getAllProjects,
  INTERIOR_CATEGORIES,
  ARCHITECTURE_CATEGORIES,
  type ProjectType,
} from "../data/projects";
import { ChevronLeft, ChevronRight } from "lucide-react";

type MainCategory = "Todos" | ProjectType;

const ITEMS_PER_PAGE = 6;

function AllProjects() {
  const navigate = useNavigate();
  const [activeMainTab, setActiveMainTab] = useState<MainCategory>("Todos");
  const [activeSubTab, setActiveSubTab] = useState<string>("Todos");
  const [currentPage, setCurrentPage] = useState(1);

  // Busca todos os projetos do arquivo centralizado
  const allProjects = getAllProjects();

  // Categorias principais
  const mainCategories: MainCategory[] = ["Todos", "Interiores", "Arquitetura"];

  // Subcategorias baseadas na categoria principal selecionada
  const getSubCategories = () => {
    if (activeMainTab === "Interiores") {
      return ["Todos", ...INTERIOR_CATEGORIES];
    } else if (activeMainTab === "Arquitetura") {
      return ["Todos", ...ARCHITECTURE_CATEGORIES];
    }
    return ["Todos"];
  };

  const subCategories = getSubCategories();

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
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Resetar para página 1 quando mudar filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [activeMainTab, activeSubTab]);

  // Resetar subcategoria quando mudar a categoria principal
  useEffect(() => {
    setActiveSubTab("Todos");
  }, [activeMainTab]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
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

  const handleProjectClick = (projectId: number) => {
    navigate(`/projeto/${projectId}`);
  };

  return (
    <div>
      <section className="min-h-screen pt-8 md:pt-24 px-4 md:px-8 lg:px-20">
        {/* Header: Botão voltar + Título */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 md:pb-8">
          <BackButton label="Voltar para home" />
          <div className="flex-1 flex justify-center">
            <SectionTitle
              title="TODOS OS PROJETOS"
              subtitle="Explore nossa coleção completa de projetos"
              showDivider={false}
            />
          </div>
          {/* Espaço vazio para balancear o layout - hidden em mobile */}
          <div className="hidden md:block w-[180px]"></div>
        </div>

        {/* Tabs principais */}
        <TabGroup>
          {mainCategories.map((category) => (
            <Tab
              key={category}
              label={category}
              isActive={activeMainTab === category}
              onClick={() => setActiveMainTab(category)}
            />
          ))}
        </TabGroup>

        {/* Tabs de subcategorias */}
        {subCategories.length > 1 && (
          <TabGroup className="pt-2">
            {subCategories.map((category) => (
              <Tab
                key={category}
                label={category}
                isActive={activeSubTab === category}
                onClick={() => setActiveSubTab(category)}
              />
            ))}
          </TabGroup>
        )}

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 md:pt-8 pb-6 md:pb-8 gap-3 md:gap-4">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer transform transition-all duration-300 relative"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="aspect-[4/3] md:aspect-[6/3] overflow-hidden shadow-2xl relative rounded-2xl bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter transition-all duration-300 rounded-2xl group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay com gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-overlay-medium)] via-transparent to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-center transition-all duration-300 rounded-2xl">
                  <div className="text-center p-4 md:p-6">
                    <span className="text-white text-lg md:text-xl font-bold text-center drop-shadow-lg block mb-2 md:mb-4">
                      {project.title}
                    </span>
                    <span className="text-white text-xs md:text-sm opacity-90 font-medium">
                      Ver projeto completo
                    </span>
                  </div>
                </div>

                {/* Badge de categoria */}
                <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-[var(--color-primary-medium)] text-white px-2 md:px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.category.toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Paginação */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 pb-8">
            {/* Botão anterior */}
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className={`p-2 md:p-3 rounded-xl transition-all duration-300 ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white shadow-md hover:bg-[var(--color-primary-medium)] hover:text-white text-[var(--color-primary-dark)]"
              }`}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Números das páginas */}
            <div className="flex gap-1 md:gap-2">
              {getPageNumbers().map((page, index) =>
                page === "..." ? (
                  <span
                    key={`ellipsis-${index}`}
                    className="px-2 md:px-3 py-2 text-[var(--color-primary-dark)]/50"
                  >
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => goToPage(page as number)}
                    className={`min-w-[40px] md:min-w-[44px] py-2 md:py-3 rounded-xl font-semibold transition-all duration-300 ${
                      currentPage === page
                        ? "bg-[var(--color-primary-medium)] text-white shadow-lg"
                        : "bg-white shadow-md hover:bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            {/* Botão próximo */}
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`p-2 md:p-3 rounded-xl transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white shadow-md hover:bg-[var(--color-primary-medium)] hover:text-white text-[var(--color-primary-dark)]"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default AllProjects;
