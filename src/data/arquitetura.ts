// =============================================================================
// PROJETOS DE ARQUITETURA
// =============================================================================
// Adicione seus projetos na categoria correspondente.
// Você NÃO precisa definir 'type' ou 'category' - isso é feito automaticamente!
// =============================================================================

import type { ArchitectureCategory } from "./types";

// Interface simplificada - só o que você precisa preencher
interface ProjetoArquitetura {
  id: number;
  image: string;
  images: string[];
  title: string;
  description: string;
  details: string;
  area: string;
  location: string;
  client: string;
}

// =============================================================================
// CASAS
// =============================================================================

const casa1 = "/images/arquitetura/casas/casa-penha/FOTO268.webp";
const casa2 = "/images/arquitetura/casas/casa-container/FOTO291.webp";
const casa3 = "/images/arquitetura/casas/casa-toni/FOTO313.webp";
const casa4 = "/images/arquitetura/casas/casa-doroti/FOTO326.webp";
const casa5 = "/images/arquitetura/casas/casa-crem/FOTO341.webp";

export const casas: ProjetoArquitetura[] = [
  {
    id: 101,
    image: casa1,
    images: [
      "/images/arquitetura/casas/casa-penha/FOTO265.webp",
      "/images/arquitetura/casas/casa-penha/FOTO266.webp",
      "/images/arquitetura/casas/casa-penha/FOTO267.webp",
      "/images/arquitetura/casas/casa-penha/FOTO268.webp",
      "/images/arquitetura/casas/casa-penha/FOTO269.webp",
      "/images/arquitetura/casas/casa-penha/FOTO270.webp",
      "/images/arquitetura/casas/casa-penha/FOTO271.webp",
      "/images/arquitetura/casas/casa-penha/FOTO272.webp",
      "/images/arquitetura/casas/casa-penha/FOTO273.webp",
      "/images/arquitetura/casas/casa-penha/FOTO274.webp",
      "/images/arquitetura/casas/casa-penha/FOTO275.webp",
      "/images/arquitetura/casas/casa-penha/FOTO276.webp",
      "/images/arquitetura/casas/casa-penha/FOTO277.webp",
      "/images/arquitetura/casas/casa-penha/FOTO278.webp",
      "/images/arquitetura/casas/casa-penha/FOTO279.webp",
      "/images/arquitetura/casas/casa-penha/FOTO280.webp",
      "/images/arquitetura/casas/casa-penha/FOTO281.webp",
      "/images/arquitetura/casas/casa-penha/FOTO282.webp",
      "/images/arquitetura/casas/casa-penha/FOTO283.webp",
      "/images/arquitetura/casas/casa-penha/FOTO284.webp",
      "/images/arquitetura/casas/casa-penha/FOTO285.webp",
      "/images/arquitetura/casas/casa-penha/FOTO286.webp",
    ],
    title: "Casa Penha",
    description: "Projeto de arquitetura e interiores para casa.",
    details:
      "A decisão de construir do zero nasceu da leitura estratégica do terreno e do vínculo dos moradores com o lugar. Localizado em uma área valorizada da Penha, o lote oferecia potencial que não seria alcançado com reformas ou mudança de endereço. A demolição da antiga casa abriu espaço para um projeto totalmente alinhado às necessidades atuais da família, com melhor aproveitamento de área, iluminação e integração. O resultado é uma residência contemporânea, funcional e duradoura, que transforma um ativo existente em qualidade de vida, respeitando escolhas conscientes e inteligentes.",
    area: "450m²",
    location: "Saúde – São Paulo, SP",
    client: "Casa Penha",
  },
  {
    id: 102,
    image: casa2,
    images: [
      "/images/arquitetura/casas/casa-container/FOTO291.webp",
      "/images/arquitetura/casas/casa-container/FOTO292.webp",
      "/images/arquitetura/casas/casa-container/FOTO293.webp",
      "/images/arquitetura/casas/casa-container/FOTO294.webp",
      "/images/arquitetura/casas/casa-container/FOTO295.webp",
      "/images/arquitetura/casas/casa-container/FOTO296.webp",
      "/images/arquitetura/casas/casa-container/FOTO297.webp",
      "/images/arquitetura/casas/casa-container/FOTO298.webp",
      "/images/arquitetura/casas/casa-container/FOTO299.webp",
      "/images/arquitetura/casas/casa-container/FOTO300.webp",
      "/images/arquitetura/casas/casa-container/FOTO301.webp",
      "/images/arquitetura/casas/casa-container/FOTO302.webp",
      "/images/arquitetura/casas/casa-container/FOTO303.webp",
      "/images/arquitetura/casas/casa-container/FOTO304.webp",
      "/images/arquitetura/casas/casa-container/FOTO305.webp",
      "/images/arquitetura/casas/casa-container/FOTO306.webp",
      "/images/arquitetura/casas/casa-container/FOTO307.webp",
      "/images/arquitetura/casas/casa-container/FOTO308.webp",
      "/images/arquitetura/casas/casa-container/FOTO309.webp",
      "/images/arquitetura/casas/casa-container/FOTO310.webp",
      "/images/arquitetura/casas/casa-container/FOTO311.webp",
    ],
    title: "Casa Container",
    description:
      "Projeto de arquitetura com container e interiores de casa de campo.",
    details:
      "A proposta partiu do aproveitamento inteligente da construção existente, aliada a uma ampliação contemporânea por meio do uso de containers. A intervenção respeita a edificação original enquanto introduz novos volumes com linguagem atual e funcional. A integração entre áreas internas e externas amplia a vivência do espaço, trazendo mais luz, fluidez e possibilidades de uso. O contraste entre materiais reforça o caráter inovador da solução, transformando a ampliação em elemento protagonista do projeto. Uma residência que une reaproveitamento, flexibilidade e identidade arquitetônica.",
    area: "520m²",
    location: "Atibaia, SP",
    client: "Casa Container",
  },
  {
    id: 103,
    image: casa3,
    images: [
      "/images/arquitetura/casas/casa-toni/FOTO312.webp",
      "/images/arquitetura/casas/casa-toni/FOTO313.webp",
      "/images/arquitetura/casas/casa-toni/FOTO314.webp",
      "/images/arquitetura/casas/casa-toni/FOTO315.webp",
      "/images/arquitetura/casas/casa-toni/FOTO316.webp",
      "/images/arquitetura/casas/casa-toni/FOTO317.webp",
      "/images/arquitetura/casas/casa-toni/FOTO318.webp",
      "/images/arquitetura/casas/casa-toni/FOTO319.webp",
    ],
    title: "Casa Toni",
    description: "Projeto de arquitetura e interiores para casa no interior.",
    details:
      "O projeto foi desenvolvido a partir do desejo por uma casa compacta, discreta e bem resolvida. A escolha por volumes contidos e aberturas mais controladas garante privacidade e conforto, sem comprometer iluminação e ventilação. A arquitetura valoriza o essencial, com soluções funcionais e materiais atemporais que trazem aconchego e equilíbrio. Cada espaço foi pensado para atender às necessidades do dia a dia de forma eficiente, resultando em uma residência íntima, acolhedora e alinhada ao modo de viver dos moradores.",
    area: "185m²",
    location: "São Manuel, SP",
    client: "Casa Toni",
  },
  {
    id: 104,
    image: casa4,
    images: [
      "/images/arquitetura/casas/casa-doroti/FOTO326.webp",
      "/images/arquitetura/casas/casa-doroti/FOTO327.webp",
      "/images/arquitetura/casas/casa-doroti/FOTO328.webp",
      "/images/arquitetura/casas/casa-doroti/FOTO329.webp",
      "/images/arquitetura/casas/casa-doroti/FOTO330.webp",
      "/images/arquitetura/casas/casa-doroti/FOTO331.webp",
      "/images/arquitetura/casas/casa-doroti/FOTO332.webp",
      "/images/arquitetura/casas/casa-doroti/FOTO333.webp",
      "/images/arquitetura/casas/casa-doroti/FOTO334.webp",
    ],
    title: "Casa Doroti",
    description: "Projeto de arquitetura e interiores para casa de campo.",
    details:
      "A proposta valoriza a conexão com a natureza e o ritmo desacelerado da vida no campo. A arquitetura privilegia materiais naturais, grandes planos de integração e a continuidade entre interior e exterior, criando espaços amplos e convidativos. A estrutura aparente e os elementos em madeira reforçam a sensação de aconchego e autenticidade, enquanto a implantação respeita a paisagem ao redor. O resultado é uma residência pensada para o descanso, o convívio e o prazer de estar, onde o tempo encontra outro ritmo.",
    area: "620m²",
    location: "Estrada Vicinal Tibiriçá, SP",
    client: "Casa Doroti",
  },
  {
    id: 105,
    image: casa5,
    images: [
      "/images/arquitetura/casas/casa-crem/FOTO341.webp",
      "/images/arquitetura/casas/casa-crem/FOTO342.webp",
      "/images/arquitetura/casas/casa-crem/FOTO343.webp",
      "/images/arquitetura/casas/casa-crem/FOTO344.webp",
      "/images/arquitetura/casas/casa-crem/FOTO345.webp",
      "/images/arquitetura/casas/casa-crem/FOTO346.webp",
    ],
    title: "Casa Crem",
    description: "Projeto de arquitetura de fachada e área gourmet para casa.",
    details:
      "A composição da fachada foi pensada para transmitir equilíbrio, privacidade e presença urbana. O jogo entre volumes, cheios e vazios cria profundidade e movimento, enquanto a combinação de materiais claros com texturas naturais aquece a leitura do conjunto. As aberturas são posicionadas de forma estratégica, garantindo iluminação e ventilação sem exposição excessiva. O resultado é uma fachada contemporânea, atemporal e coerente com o uso interno, que valoriza a edificação e sua relação com o entorno.",
    area: "400m²",
    location: "Penha – São Paulo, SP",
    client: "Casa Crem",
  },
];

// =============================================================================
// EDIFÍCIOS
// =============================================================================

const edificio1 = "/images/arquitetura/edificios/edificio-lobo/FOTO288.webp";
const edificio2 = "/images/arquitetura/edificios/edificio-blue/FOTO320.webp";
const edificio3 =
  "/images/arquitetura/edificios/edificio-jose-maria/FOTO336.webp";
const edificio4 =
  "/images/arquitetura/edificios/edificio-utupanema/FOTO347.webp";
export const edificios: ProjetoArquitetura[] = [
  {
    id: 201,
    image: edificio1,
    images: [
      "/images/arquitetura/edificios/edificio-lobo/FOTO287.webp",
      "/images/arquitetura/edificios/edificio-lobo/FOTO288.webp",
      "/images/arquitetura/edificios/edificio-lobo/FOTO289.webp",
      "/images/arquitetura/edificios/edificio-lobo/FOTO290.webp",
    ],
    title: "Edifício Lobo",
    description:
      "Projeto de arquitetura para edifício residencial de 9 unidades.",
    details:
      "O projeto foi desenvolvido a partir de uma leitura criteriosa do entorno e do potencial construtivo do terreno. A volumetria equilibrada, as aberturas bem posicionadas e a composição das fachadas garantem iluminação, ventilação e conforto aos usuários. A linguagem contemporânea prioriza linhas claras e materiais duráveis, reforçando a integração entre estética e funcionalidade. Cada decisão arquitetônica busca otimizar o uso do espaço, valorizar o empreendimento e criar uma edificação eficiente, coerente com a dinâmica urbana e preparada para o uso a longo prazo.",
    area: "",
    location: "São Miguel – São Paulo, SP",
    client: "Edifício Lobo",
  },
  {
    id: 202,
    image: edificio2,
    images: [
      "/images/arquitetura/edificios/edificio-blue/FOTO320.webp",
      "/images/arquitetura/edificios/edificio-blue/FOTO321.webp",
      "/images/arquitetura/edificios/edificio-blue/FOTO322.webp",
      "/images/arquitetura/edificios/edificio-blue/FOTO323.webp",
      "/images/arquitetura/edificios/edificio-blue/FOTO324.webp",
      "/images/arquitetura/edificios/edificio-blue/FOTO325.webp",
    ],
    title: "Edifício Blue",
    description:
      "Projeto de arquitetura para edifício residencial de 28 unidades.",
    details:
      "A proposta nasce da leitura do contexto urbano e da busca por uma edificação contemporânea, funcional e eficiente. A composição volumétrica explora cheios e vazios de forma equilibrada, garantindo iluminação, ventilação e identidade arquitetônica. As fachadas recebem tratamento que valoriza a horizontalidade e cria ritmo visual, enquanto os elementos construtivos reforçam a durabilidade e a manutenção simplificada. O resultado é um edifício que dialoga com a cidade, otimiza o uso do terreno e atende às demandas atuais de moradia com clareza e personalidade.",
    area: "",
    location: "São Miguel – São Paulo, SP",
    client: "Edifício Blue",
  },
  {
    id: 203,
    image: edificio3,
    images: [
      "/images/arquitetura/edificios/edificio-jose-maria/FOTO335.webp",
      "/images/arquitetura/edificios/edificio-jose-maria/FOTO336.webp",
      "/images/arquitetura/edificios/edificio-jose-maria/FOTO337.webp",
      "/images/arquitetura/edificios/edificio-jose-maria/FOTO338.webp",
      "/images/arquitetura/edificios/edificio-jose-maria/FOTO339.webp",
      "/images/arquitetura/edificios/edificio-jose-maria/FOTO340.webp",
    ],
    title: "Edifício José Maria",
    description:
      "Projeto de arquitetura para edifício residencial de 26 unidades.",
    details:
      "A edificação foi pensada para dialogar com o entorno de forma equilibrada e contemporânea. A composição volumétrica explora a verticalidade com leveza, enquanto o uso de elementos vazados, vegetação integrada e materiais naturais suaviza a presença urbana. As aberturas garantem iluminação e ventilação adequadas, contribuindo para conforto e eficiência. O projeto busca aliar estética, funcionalidade e durabilidade, resultando em um edifício que valoriza o uso cotidiano e reforça a identidade do espaço na cidade.",
    area: "",
    location: "São Miguel – São Paulo, SP",
    client: "Edifício José Maria",
  },
  {
    id: 204,
    image: edificio4,
    images: [
      "/images/arquitetura/edificios/edificio-utupanema/FOTO347.webp",
      "/images/arquitetura/edificios/edificio-utupanema/FOTO348.webp",
      "/images/arquitetura/edificios/edificio-utupanema/FOTO349.webp",
      "/images/arquitetura/edificios/edificio-utupanema/FOTO350.webp",
    ],
    title: "Edifício Utupanema",
    description:
      "Projeto de arquitetura para edifício residencial de 12 unidades.",
    details:
      "A proposta valoriza a composição equilibrada entre volumes, materiais e proporções. A alternância entre planos claros e texturas mais marcantes cria ritmo visual e identidade, enquanto os elementos verdes integrados às fachadas suavizam a escala do edifício. As aberturas foram pensadas para garantir conforto ambiental e privacidade, reforçando a funcionalidade dos espaços internos. O conjunto resulta em uma edificação contemporânea, coerente com o contexto urbano e pensada para uma ocupação eficiente e duradoura.",
    area: "",
    location: "São Miguel – São Paulo, SP",
    client: "Edifício Utupanema",
  },
];

// =============================================================================
// FUNÇÃO PARA MONTAR PROJETOS COM CATEGORIA
// =============================================================================
export function getArquiteturaComCategoria() {
  const addCategory = (
    projects: ProjetoArquitetura[],
    category: ArchitectureCategory,
  ) => projects.map((p) => ({ ...p, type: "Arquitetura" as const, category }));

  return [
    ...addCategory(casas, "Casas"),
    ...addCategory(edificios, "Edificios"),
  ];
}
