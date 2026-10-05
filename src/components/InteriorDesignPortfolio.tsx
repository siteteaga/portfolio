import { useState } from "react";
import { ArrowLink, SectionTitle, Tab, TabGroup, PortfolioCard } from "./ui";
import {
  getInteriorProjects,
  getCategoryLabel,
  INTERIOR_CATEGORIES,
  type InteriorCategory,
} from "../data/projects";

function InteriorDesignPortfolio() {
  const [activeTab, setActiveTab] = useState<InteriorCategory>("Residencial");

  // Busca projetos do arquivo centralizado
  const portfolioItems = getInteriorProjects(activeTab);

  return (
    <section>
      <SectionTitle title="Projetos de interiores" />

      <TabGroup label="Categorias de interiores" className="mt-8 md:mt-10">
        {INTERIOR_CATEGORIES.map((category) => (
          <Tab
            key={category}
            label={getCategoryLabel(category)}
            isActive={activeTab === category}
            onClick={() => setActiveTab(category)}
          />
        ))}
      </TabGroup>

      {/* A key refaz o painel a cada troca de aba: reinicia a rolagem e o fade */}
      <div key={activeTab} role="tabpanel" className="animate-fade-in">
        <p className="mt-5 text-sm text-ink-soft md:hidden">
          {portfolioItems.length} projetos · deslize para ver
        </p>

        {/* Celular: faixa deslizável com todos os projetos. Desktop: grade. */}
        <div className="no-scrollbar -mx-5 mt-4 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 sm:-mx-8 sm:scroll-px-8 sm:px-8 md:mx-0 md:mt-10 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-10 md:overflow-visible md:px-0 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <PortfolioCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              location={item.location}
              className="w-[84%] shrink-0 snap-start sm:w-[58%] md:w-auto"
            />
          ))}
        </div>
      </div>

      <div className="mt-10 flex md:mt-14 md:justify-end">
        <ArrowLink to="/projetos?tipo=Interiores">Ver todos os projetos</ArrowLink>
      </div>
    </section>
  );
}

export default InteriorDesignPortfolio;
