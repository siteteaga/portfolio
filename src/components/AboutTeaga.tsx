import { SectionTitle } from "./ui";

export default function AboutTeaga() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--color-primary-medium)]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-accent-dark)]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary-medium)]/3 rounded-full blur-[120px] -z-10"></div>

      <div className="flex flex-col justify-center items-center px-4">
        <SectionTitle
          title="SOBRE O ESCRITÓRIO"
          showDivider={false}
        />
      </div>

      {/* Destaque / Frase principal */}
      <div className="mb-12 md:mb-16 text-center pt-5">
        <blockquote className="relative">
          <p className="text-xl md:text-2xl lg:text-3xl font-medium italic leading-snug text-[var(--color-primary-dark)]/90 px-4">
            Não seguimos tendência,{" "}
            <span className="not-italic font-bold text-[var(--color-primary-medium)]">
              traduzimos essência
            </span>
            .
          </p>
        </blockquote>
      </div>

      {/* Grid de conteúdo — layout assimétrico */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 pt-10">
        {/* Coluna esquerda — card principal mais largo */}
        <div className="lg:col-span-3 bg-white/50 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-xl flex flex-col justify-center">
          <div className="space-y-5 text-base md:text-lg leading-relaxed text-[var(--color-primary-dark)]">
            <p>
              A{" "}
              <span className="font-semibold text-[var(--color-primary-medium)]">
                TEAGÁ Arquitetura e Interiores
              </span>{" "}
              nasce da visão de Nathalia Leme, arquiteta que carrega como lema
              de vida a escolha de não ser igual a todo mundo. Essa forma de
              enxergar pessoas, espaços e processos se reflete diretamente na
              essência do escritório.
            </p>

            <p className="text-[var(--color-primary-dark)]/90">
              Aqui, a arquitetura é entendida como experiência de
              pertencimento. O espaço não é apenas funcional ou esteticamente
              bonito. Ele é pensado para se conectar profundamente com a
              identidade de quem habita.
            </p>
          </div>
        </div>

        {/* Coluna direita — cards empilhados */}
        <div className="lg:col-span-2 flex flex-col gap-6 md:gap-8">
          <div className="bg-[var(--color-primary-dark)] rounded-3xl p-6 md:p-8 shadow-xl flex-1">
            <p className="text-white/90 text-base md:text-lg leading-relaxed">
              Nosso trabalho não é definido por estilo, tendência ou estética
              fixa, mas por{" "}
              <span className="font-semibold text-white">
                essência, escuta e método
              </span>
              .
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl flex-1">
            <p className="text-[var(--color-primary-dark)]/90 text-base md:text-lg leading-relaxed">
              Existimos no ponto de equilíbrio entre sensibilidade e método,
              onde a emoção é estruturada e a técnica é{" "}
              <span className="font-semibold text-[var(--color-primary-medium)]">
                humanizada
              </span>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Pilares — cards horizontais */}
      <div className="pt-8 md:pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
          {[
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
          ].map((pilar) => (
            <div
              key={pilar.label}
              className="group bg-white/40 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:bg-white/60 transition-all duration-300"
            >
              <h4 className="text-lg md:text-xl font-bold text-[var(--color-primary-medium)] mb-2 group-hover:translate-x-1 transition-transform duration-300">
                {pilar.label}
              </h4>
              <p className="text-sm md:text-base text-[var(--color-primary-dark)]/80 leading-relaxed">
                {pilar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}