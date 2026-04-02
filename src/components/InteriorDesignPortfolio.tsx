import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { SectionTitle, Tab, TabGroup, PortfolioCard } from "./ui";
import {
  getInteriorProjects,
  INTERIOR_CATEGORIES,
  type InteriorCategory,
} from "../data/projects";

function InteriorDesignPortfolio() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<InteriorCategory>("Residencial");

  // Busca projetos do arquivo centralizado
  const portfolioItems = getInteriorProjects(activeTab);

  // Função para determinar quantos projetos mostrar baseado no breakpoint
  const getItemsToShow = useCallback(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768 ? 3 : portfolioItems.length;
    }
    return portfolioItems.length;
  }, [portfolioItems.length]);

  const [itemsToShow, setItemsToShow] = useState(getItemsToShow);

  // Atualizar quantidade de itens quando redimensionar a tela
  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(getItemsToShow());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [portfolioItems.length, getItemsToShow]);

  const displayedItems = portfolioItems.slice(0, itemsToShow);

  const handleProjectClick = (projectId: number) => {
    navigate(`/projeto/${projectId}`);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center px-4">
        <SectionTitle
          title="PROJETOS DE INTERIORES"
          subtitle="Projetos de design de interiores"
          showDivider={false}
        />
      </div>

      <TabGroup>
        {INTERIOR_CATEGORIES.map((category) => (
          <Tab
            key={category}
            label={category}
            isActive={activeTab === category}
            onClick={() => setActiveTab(category)}
          />
        ))}
      </TabGroup>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 md:pt-8 pb-6 md:pb-8 gap-3 md:gap-4">
        {displayedItems.map((item) => (
          <PortfolioCard
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            category={item.category}
            onClick={handleProjectClick}
          />
        ))}
      </div>

      {/* Botão Ver todos os projetos */}
      <div>
        <button
          onClick={() => navigate("/projetos")}
          className="w-full relative overflow-hidden border-2 border-[var(--color-primary-medium)] bg-transparent py-4 md:py-5 cursor-pointer rounded-xl md:rounded-2xl group transition-all duration-500"
        >
          {/* Background que preenche no hover */}
          <span className="absolute inset-0 bg-[var(--color-primary-medium)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>

          {/* Texto */}
          <span className="relative z-10 font-semibold text-[var(--color-primary-medium)] group-hover:text-white text-base md:text-lg tracking-wide transition-colors duration-500 flex items-center justify-center gap-2 md:gap-3">
            Ver todos os projetos
            <svg
              className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>
      </div>
    </>
  );
}

export default InteriorDesignPortfolio;
