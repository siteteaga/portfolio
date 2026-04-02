import { Palette, FileText, Handshake } from "lucide-react";

const journeySteps = [
  {
    icon: Palette,
    title: "Projeto Criativo",
    description:
      "Projetamos todos os ambientes e apresentamos com imagens 3D, onde serão definidos forma, layout, materiais, revestimentos e tudo o que o projeto irá conter. O projeto 3D permite que você veja seu ambiente exatamente como será executado.",
  },
  {
    icon: FileText,
    title: "Projeto Executivo",
    description:
      "Desenhos técnicos para os prestadores de serviço orçarem e executarem a obra conforme projeto aprovado. Incluem plantas de arquitetura, layout, demolição, forro, iluminação, elétrica, hidráulica, revestimentos, marmoraria, marcenaria, portas e janelas, elevações e cortes.",
  },
  {
    icon: Handshake,
    title: "Assessoria de Projeto",
    description:
      "Serviços para você não se preocupar durante a obra: indicação de fornecedores, verificação e comparativo de orçamentos, administração de fornecedores, alinhamento de prazos e demandas, visitas à obra, videochamadas com as equipes e documentação de obra.",
  },
];

export default function ClientJourney() {
  return (
    <div className="relative mt-16 md:mt-24 mb-16 md:mb-24">
      {/* Curva orgânica superior */}
      <svg
        className="absolute top-0 left-0 w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ transform: "translateY(-95%)" }}
      >
        <path
          d="M0,120 L0,80 C120,95 240,40 420,55 C600,70 720,20 900,35 C1080,50 1260,90 1440,70 L1440,120 Z"
          fill="var(--color-primary-dark)"
        />
      </svg>

      {/* Fundo sólido da seção */}
      <section className="relative bg-[var(--color-primary-dark)] py-16 md:py-24 overflow-hidden">
        <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
          {/* Título da seção */}
          <div className="text-center mb-14 md:mb-20 pb-15">
            <p className="text-sm md:text-base tracking-[0.3em] uppercase text-white/40 mb-3">
              Como funciona
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 tracking-wider">
              SUA JORNADA
            </h2>
          </div>

          {/* Grid dos 3 passos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 lg:gap-0">
            {journeySteps.map((step, index) => (
              <div key={step.title} className="relative flex flex-col items-center text-center px-4 md:px-6 lg:px-8">
                {/* Badge do número */}
                <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[var(--color-primary-medium)] flex items-center justify-center mb-6 shadow-lg shadow-black/20">
                  <span className="text-white font-bold text-lg md:text-xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Linha conectora horizontal — entre o badge e o próximo card */}
                {index < journeySteps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-6 md:top-7 left-[calc(50%+28px)] md:left-[calc(50%+32px)]"
                    style={{ width: "calc(100% - 56px)" }}
                  >
                    {/* Linha tracejada */}
                    <div className="w-full border-t-2 border-dashed border-white/15" />
                  </div>
                )}

                {/* Título */}
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 tracking-wide">
                  {step.title}
                </h3>

                {/* Descrição */}
                <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curva orgânica inferior */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ transform: "translateY(95%)" }}
      >
        <path
          d="M0,0 L0,50 C180,10 360,70 540,45 C720,20 900,75 1080,55 C1200,42 1350,15 1440,40 L1440,0 Z"
          fill="var(--color-primary-dark)"
        />
      </svg>
    </div>
  );
}