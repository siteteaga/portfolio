import { useState } from "react";
import { SectionTitle } from "./ui";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 5,
    name: "Nayara V.",
    role: "Cliente",
    text: "Meu lar é minha personalidade. E isso não seria possível sem a Nath. Isso resume muito o quanto seu trabalho é incrível!",
  },
  {
    id: 6,
    name: "Bruna O.",
    role: "Cliente",
    text: "Deixo aqui meu agradecamento pelo excelente serviço prestado, onde o meu investimento valeu a pena. O projeto se tornou um grande sonho e em breve se tornará realidade graças a Arq Nath que esteve aberta e foi super respeitosa diante das minhas expectativas. Eu amei e me emocionei bastante com o projeto pronto... imagina quando eu por em prática cada detalhe. Amei demais obrigada por cada detalhe e por ser uma profissional tão incrível e tão empática. Paciente, responsável e por ter feito com amor cada cantinho, cada detalhe do meu lar. Não vejo a hora de ficar pronto e morar em um lugar com a minha cara e a minha personalidade. Obrigada mesmo por tudo!",
  },
  {
    id: 7,
    name: "Jéssica e Luis",
    role: "Casal",
    text: "Nosso projeto com a Nathalia ficou incrível! A entrevista e a aplicação da Psicoarquitetura fora fundamentais para compreender o que estávamos buscando, dentro do nosso orçamento na época. Fica o destaque pelo zelo e acompanhamento direto da arquiteta, bem como a noção realista de não empurrar tendências nem insistir em materiais ou conceitos caros que fizessem pouco ou nenhum sentido. No final, nos sentimos acolhidos e compreendidos pela TEAGÁ e representados pelo projeto entregue e pela execução do mesmo.",
  },
  {
    id: 8,
    name: "Giane K.",
    role: "Cliente",
    text: "Agradeço demais pelo seu carinho, atenção e paciência durante todo o meu projeto. E também pelo resultado incrível, amo cada detalhe do meu apto! Muito muito obrigada!",
  },
];

// Depoimentos acima deste tamanho começam recolhidos
const LONG_TEXT_LENGTH = 320;

function TestimonialItem({ testimonial }: { testimonial: Testimonial }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = testimonial.text.length > LONG_TEXT_LENGTH;
  const textId = `depoimento-${testimonial.id}`;

  return (
    <figure className="border-t border-line py-8 md:py-10">
      <blockquote>
        <p
          id={textId}
          className={`text-lg leading-relaxed text-primary-dark md:text-xl ${
            isLong && !isExpanded ? "line-clamp-5" : ""
          }`}
        >
          “{testimonial.text}”
        </p>
      </blockquote>

      {isLong && (
        <button
          type="button"
          onClick={() => setIsExpanded((expanded) => !expanded)}
          aria-expanded={isExpanded}
          aria-controls={textId}
          className="link-underline mt-3 cursor-pointer text-sm font-semibold text-primary-medium"
        >
          {isExpanded ? "Mostrar menos" : "Ler depoimento completo"}
        </button>
      )}

      {/* Client Info */}
      <figcaption className="mt-6 text-sm">
        <span className="font-semibold text-primary-dark">{testimonial.name}</span>
        <span className="text-ink-soft"> · {testimonial.role}</span>
      </figcaption>
    </figure>
  );
}

function Testimonials() {
  // Duas colunas independentes: expandir um depoimento não desloca a coluna vizinha
  const columns = [
    testimonials.filter((_, i) => i % 2 === 0),
    testimonials.filter((_, i) => i % 2 === 1),
  ];

  return (
    <section className="border-y border-line bg-surface">
      <div className="container-page py-16 md:py-24">
        <SectionTitle
          title="Depoimentos"
          subtitle="O que nossos clientes dizem sobre a experiência"
        />

        <div className="mt-10 grid md:mt-14 md:grid-cols-2 md:gap-x-16 lg:gap-x-24">
          {columns.map((column, i) => (
            <div key={i}>
              {column.map((testimonial) => (
                <TestimonialItem key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
