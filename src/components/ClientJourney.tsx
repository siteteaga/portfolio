import { SectionTitle } from "./ui";

const journeySteps = [
  {
    title: "Projeto Criativo",
    description:
      "Projetamos todos os ambientes e apresentamos com imagens 3D, onde serão definidos forma, layout, materiais, revestimentos e tudo o que o projeto irá conter. O projeto 3D permite que você veja seu ambiente exatamente como será executado.",
  },
  {
    title: "Projeto Executivo",
    description:
      "Desenhos técnicos para os prestadores de serviço orçarem e executarem a obra conforme projeto aprovado. Incluem plantas de arquitetura, layout, demolição, forro, iluminação, elétrica, hidráulica, revestimentos, marmoraria, marcenaria, portas e janelas, elevações e cortes.",
  },
  {
    title: "Assessoria de Projeto",
    description:
      "Serviços para você não se preocupar durante a obra: indicação de fornecedores, verificação e comparativo de orçamentos, administração de fornecedores, alinhamento de prazos e demandas, visitas à obra, videochamadas com as equipes e documentação de obra.",
  },
];

export default function ClientJourney() {
  return (
    <section className="on-dark bg-primary-dark text-white">
      <div className="container-page py-20 md:py-28">
        {/* Título da seção */}
        <SectionTitle eyebrow="Como funciona" title="Sua jornada" onDark />

        {/* Os 3 passos, em ordem */}
        <ol className="mt-12 grid md:mt-16 md:grid-cols-3 md:gap-x-10 lg:gap-x-16">
          {journeySteps.map((step, index) => (
            <li key={step.title} className="border-t border-white/30 py-8 md:pb-0">
              <span className="text-sm font-semibold tracking-[0.2em] text-white/75">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-xl font-medium md:text-2xl">{step.title}</h3>

              <p className="mt-4 text-base leading-relaxed text-white/85">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
