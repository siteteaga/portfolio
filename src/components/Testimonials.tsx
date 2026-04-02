import { SectionTitle } from "./ui";

function Testimonials() {
  const testimonials = [
    {
      id: 5,
      name: "Nayara V.",
      role: "Cliente",
      text: "Meu lar é minha personalidade. E isso não seria possível sem a Nath. Isso resume muito o quanto seu trabalho é incrível!",
      image: "client5",
      projectId: 5,
    },
    {
      id: 6,
      name: "Bruna O.",
      role: "Cliente",
      text: "Deixo aqui meu agradecamento pelo excelente serviço prestado, onde o meu investimento valeu a pena. O projeto se tornou um grande sonho e em breve se tornará realidade graças a Arq Nath que esteve aberta e foi super respeitosa diante das minhas expectativas. Eu amei e me emocionei bastante com o projeto pronto... imagina quando eu por em prática cada detalhe. Amei demais obrigada por cada detalhe e por ser uma profissional tão incrível e tão empática. Paciente, responsável e por ter feito com amor cada cantinho, cada detalhe do meu lar. Não vejo a hora de ficar pronto e morar em um lugar com a minha cara e a minha personalidade. Obrigada mesmo por tudo!",
      image: "client6",
      projectId: 6,
    },
    {
      id: 7,
      name: "Jéssica e Luis",
      role: "Casal",
      text: "Nosso projeto com a Nathalia ficou incrível! A entrevista e a aplicação da Psicoarquitetura fora fundamentais para compreender o que estávamos buscando, dentro do nosso orçamento na época. Fica o destaque pelo zelo e acompanhamento direto da arquiteta, bem como a noção realista de não empurrar tendências nem insistir em materiais ou conceitos caros que fizessem pouco ou nenhum sentido. No final, nos sentimos acolhidos e compreendidos pela TEAGÁ e representados pelo projeto entregue e pela execução do mesmo.",
      image: "client7",
      projectId: 7,
    },
    {
      id: 8,
      name: "Giane K.",
      role: "Cliente",
      text: "Agradeço demais pelo seu carinho, atenção e paciência durante todo o meu projeto. E também pelo resultado incrível, amo cada detalhe do meu apto! Muito muito obrigada!",
      image: "client8",
      projectId: 8,
    },
  ];

  return (
    <section className="relative flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-16 md:py-24 overflow-hidden">

      <div className="flex flex-col justify-center items-center px-4">
        <SectionTitle
          title="DEPOIMENTOS"
          subtitle="O que nossos clientes dizem sobre a experiência"
          showDivider={false}
        />
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full pt-10">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="group bg-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            {/* Estrelas de avaliação */}
            <div className="flex items-center pb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-[var(--color-primary-medium)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
              ))}
            </div>
            {/* Quote */}
            <div className="flex-1 mb-4 md:mb-6">
              <span className="text-3xl md:text-4xl text-[var(--color-primary-medium)] opacity-30 font-serif leading-none">
                "
              </span>
              <p className="text-base md:text-lg text-[var(--color-primary-dark)] leading-relaxed mt-3 md:mt-4">
                {testimonial.text}
              </p>
              <span className="text-3xl md:text-4xl text-[var(--color-primary-medium)] opacity-30 font-serif leading-none float-right -mt-2">
                "
              </span>
            </div>

            {/* Client Info */}
            <div className="border-t border-[var(--color-primary-medium)]/20 pt-3 md:pt-4">
              <div className="flex justify-between">
                <div className="flex items-center gap-3 md:gap-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden shadow-lg flex items-center justify-center flex-shrink-0 bg-[var(--color-primary-medium)]/10">
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10 text-[var(--color-primary-medium)]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--color-primary-dark)] text-base md:text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-[var(--color-primary-medium)] italic text-sm md:text-base">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
