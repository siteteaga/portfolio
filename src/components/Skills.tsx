import { Home, Palette, Lightbulb, Ruler, Users, Eye } from "lucide-react";
import { SectionTitle, Card } from "./ui";

export default function Skills() {
  const skills = [
    {
      title: "Planejamento de Espaços",
      description:
        "Projetos pensados para aproveitar cada metro de forma inteligente e funcional.",
      icon: <Home className="w-8 h-8" />,
    },
    {
      title: "Harmonização de Cores",
      description:
        "Criação de paletas que refletem personalidade e transmitem as sensações desejadas.",
      icon: <Palette className="w-8 h-8" />,
    },
    {
      title: "Design de Iluminação",
      description:
        "Projetos luminotécnicos que valorizam ambientes e criam atmosferas únicas.",
      icon: <Lightbulb className="w-8 h-8" />,
    },
    {
      title: "Seleção de Materiais",
      description:
        "Escolha criteriosa de acabamentos que aliam beleza, durabilidade e sustentabilidade.",
      icon: <Ruler className="w-8 h-8" />,
    },
    {
      title: "Consultoria Personalizada",
      description:
        "Atendimento dedicado para compreender e transformar sonhos em realidade.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Conceito Visual",
      description:
        "Desenvolvimento de identidade visual única para cada projeto e cliente.",
      icon: <Eye className="w-8 h-8" />,
    },
  ];

  return (
    <section className="min-h-screen py-12 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col items-center">
        <SectionTitle
          title="HABILIDADES"
          subtitle="Experiência em desenvolver projetos criativos e funcionais, unindo estética e praticidade. Especialização em planejamento de espaços, escolha de materiais, harmonização de cores e iluminação."
          className="mb-12 md:mb-24 max-w-3xl"
          showDivider={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl gap-8 md:gap-12 lg:gap-16">
          {skills.map((skill, index) => (
            <Card key={index} variant="skill">
              <div className="p-3 rounded-full border border-[var(--color-border-dark)] text-[var(--color-primary-dark)]">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 tracking-wide">
                {skill.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {skill.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
