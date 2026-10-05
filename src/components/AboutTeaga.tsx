import { SectionTitle } from "./ui";

const pilares = [
  {
    label: "Essência",
    desc: "Cada projeto nasce da identidade de quem habita, não de modismos.",
  },
  {
    label: "Escuta",
    desc: "Antes de desenhar, compreendemos sentimentos, histórias e desejos.",
  },
  {
    label: "Pertencimento",
    desc: "Criamos espaços que acolhem quem você é e fortalecem sua conexão com o lar.",
  },
];

export default function AboutTeaga() {
  return (
    <section>
      <SectionTitle title="Sobre o escritório" />

      <div className="mt-10 grid gap-10 md:mt-14 lg:grid-cols-12 lg:gap-16">
        {/* Destaque / Frase principal */}
        <blockquote className="lg:col-span-5">
          <p className="text-[clamp(1.875rem,1.3rem+2.2vw,3rem)] font-light leading-[1.15] text-primary-dark">
            Não seguimos tendência,{" "}
            <span className="font-semibold text-primary-medium">
              traduzimos essência
            </span>
            .
          </p>
        </blockquote>

        {/* Texto corrido — uma única coluna de leitura */}
        <div className="max-w-[62ch] space-y-5 text-base leading-relaxed text-primary-dark md:text-lg lg:col-span-7">
          <p>
            A{" "}
            <strong className="font-semibold">
              TEAGÁ Arquitetura e Interiores
            </strong>{" "}
            nasce da visão de Nathalia Leme, arquiteta que carrega como lema
            de vida a escolha de não ser igual a todo mundo. Essa forma de
            enxergar pessoas, espaços e processos se reflete diretamente na
            essência do escritório.
          </p>

          <p>
            Aqui, a arquitetura é entendida como experiência de
            pertencimento. O espaço não é apenas funcional ou esteticamente
            bonito. Ele é pensado para se conectar profundamente com a
            identidade de quem habita.
          </p>

          <p>
            Nosso trabalho não é definido por estilo, tendência ou estética
            fixa, mas por{" "}
            <strong className="font-semibold">essência, escuta e método</strong>.
          </p>

          <p>
            Existimos no ponto de equilíbrio entre sensibilidade e método,
            onde a emoção é estruturada e a técnica é{" "}
            <strong className="font-semibold">humanizada</strong>.
          </p>
        </div>
      </div>

      {/* Pilares — colunas separadas por fios, sem caixas */}
      <dl className="mt-14 grid border-t border-line sm:grid-cols-3 sm:gap-x-10 md:mt-20">
        {pilares.map((pilar) => (
          <div
            key={pilar.label}
            className="border-b border-line py-6 sm:border-b-0 sm:pb-0 sm:pt-7"
          >
            <dt className="eyebrow text-primary-dark">{pilar.label}</dt>
            <dd className="mt-3 text-base leading-relaxed text-ink-soft">
              {pilar.desc}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
