import { useState } from "react";
import { ArrowLink, SectionTitle, Tab, TabGroup, PortfolioCard } from "./ui";
import {
  getArchitectureProjects,
  getCategoryLabel,
  ARCHITECTURE_CATEGORIES,
  type ArchitectureCategory,
} from "../data/projects";

function ArchitecturePortfolio() {
  const [activeTab, setActiveTab] = useState<ArchitectureCategory>("Casas");

  // Busca projetos do arquivo centralizado
  const architecturalProjects = getArchitectureProjects(activeTab);

  return (
    <section>
      <SectionTitle title="Arquitetura" subtitle="Projetos arquitetônicos completos" />

      <TabGroup label="Categorias de arquitetura" className="mt-8 md:mt-10">
        {ARCHITECTURE_CATEGORIES.map((category) => (
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
          {architecturalProjects.length} projetos · deslize para ver
        </p>

        {/* Celular: faixa deslizável com todos os projetos. Desktop: grade. */}
        <div className="no-scrollbar -mx-5 mt-4 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 sm:-mx-8 sm:scroll-px-8 sm:px-8 md:mx-0 md:mt-10 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-10 md:overflow-visible md:px-0 lg:grid-cols-3">
          {architecturalProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              id={project.id}
              image={project.image}
              title={project.title}
              location={project.location}
              className="w-[84%] shrink-0 snap-start sm:w-[58%] md:w-auto"
            />
          ))}
        </div>
      </div>

      <div className="mt-10 flex md:mt-14 md:justify-end">
        <ArrowLink to="/projetos?tipo=Arquitetura">Ver todos os projetos</ArrowLink>
      </div>
    </section>
  );
}

export default ArchitecturePortfolio;
