// =============================================================================
// PROJETOS DE INTERIORES
// =============================================================================
// Adicione seus projetos na categoria correspondente.
// Você NÃO precisa definir 'type' ou 'category' - isso é feito automaticamente!
// =============================================================================

import type { InteriorCategory } from "./types";

// Interface simplificada - só o que você precisa preencher
interface ProjetoInterior {
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
// RESIDENCIAIS
// =============================================================================
const interior1 = "/images/interiores/residencial/colors/FOTO005.webp";
const interior2 = "/images/interiores/residencial/mirante/FOTO014.webp";
const interior3 = "/images/interiores/residencial/ting/FOTO030.webp";
const interior4 = "/images/interiores/residencial/max/FOTO036.webp";
const interior5 = "/images/interiores/residencial/freedom/FOTO104.webp";
const interior6 = "/images/interiores/residencial/unissono/FOTO048.webp";
const interior7 = "/images/interiores/residencial/alento/FOTO061.webp";
const interior8 = "/images/interiores/residencial/sintonia/FOTO071.webp";
const interior9 = "/images/interiores/residencial/comenale/FOTO082.webp";

export const residenciais: ProjetoInterior[] = [
  {
    id: 1,
    image: interior1,
    images: [
      "/images/interiores/residencial/colors/FOTO002.webp",
      "/images/interiores/residencial/colors/FOTO003.webp",
      "/images/interiores/residencial/colors/FOTO004.webp",
      "/images/interiores/residencial/colors/FOTO005.webp",
      "/images/interiores/residencial/colors/FOTO006.webp",
      "/images/interiores/residencial/colors/FOTO007.webp",
      "/images/interiores/residencial/colors/FOTO008.webp",
      "/images/interiores/residencial/colors/FOTO009.webp",
      "/images/interiores/residencial/colors/FOTO010.webp",
      "/images/interiores/residencial/colors/FOTO011.webp",
    ],
    title: "Colors",
    description:
      "Projeto de interiores para studio com foco em investimento imobiliário",
    details:
      "Este apartamento traduz uma fase de transição. Cada escolha, das texturas amadeiradas aos toques vibrantes de cor, revela o reencontro de uma ex-bancária com sua nova essência de chef de cozinha. O espaço foi pensado para acolher o recomeço: funcional, leve e inspirador, sem excessos. As cores despertam energia e criatividade, enquanto a paleta neutra equilibra o ritmo da rotina com momentos de pausa. A iluminação suave transforma o cotidiano em respiro. Um lar temporário, mas profundamente autêntico.",
    area: "41m²",
    location: "Tatuapé – São Paulo, SP",
    client: "Colors",
  },
  {
    id: 2,
    image: interior2,
    images: [
      "/images/interiores/residencial/mirante/FOTO012.webp",
      "/images/interiores/residencial/mirante/FOTO013.webp",
      "/images/interiores/residencial/mirante/FOTO014.webp",
      "/images/interiores/residencial/mirante/FOTO015.webp",
      "/images/interiores/residencial/mirante/FOTO016.webp",
      "/images/interiores/residencial/mirante/FOTO017.webp",
      "/images/interiores/residencial/mirante/FOTO018.webp",
      "/images/interiores/residencial/mirante/FOTO019.webp",
      "/images/interiores/residencial/mirante/FOTO020.webp",
      "/images/interiores/residencial/mirante/FOTO021.webp",
      "/images/interiores/residencial/mirante/FOTO022.webp",
      "/images/interiores/residencial/mirante/FOTO023.webp",
      "/images/interiores/residencial/mirante/FOTO024.webp",
      "/images/interiores/residencial/mirante/FOTO025.webp",
      "/images/interiores/residencial/mirante/FOTO026.webp",
      "/images/interiores/residencial/mirante/FOTO027.webp",
      "/images/interiores/residencial/mirante/FOTO028.webp",
      "/images/interiores/residencial/mirante/FOTO029.webp",
    ],
    title: "Mirante",
    description:
      "Projeto de interiores para apartamento com foco em fugir da rotina",
    details:
      "Este projeto nasceu como um refúgio. Depois de dias intensos na ambulância, a médica buscava um lar que desacelerasse o tempo. Cada ambiente foi pensado para reconectar corpo e mente: a varanda convida ao vinho e à contemplação, o quarto infantil desperta memórias com as sobrinhas, e o quarto principal aproxima o descanso da natureza. Materiais naturais, luz suave e tons neutros criam uma atmosfera de respiro e aconchego. Um espaço que traduz a pausa, o afeto e o reencontro com o essencial.",
    area: "115m²",
    location: "Vila Maria Alta – São Paulo, SP",
    client: "Mirante",
  },
  {
    id: 3,
    image: interior3,
    images: [
      "/images/interiores/residencial/ting/FOTO030.webp",
      "/images/interiores/residencial/ting/FOTO031.webp",
      "/images/interiores/residencial/ting/FOTO032.webp",
      "/images/interiores/residencial/ting/FOTO033.webp",
      "/images/interiores/residencial/ting/FOTO034.webp",
      "/images/interiores/residencial/ting/FOTO035.webp",
    ],
    title: "Ting",
    description: "Projeto de interiores para apartamento com foco em estética",
    details:
      "Elegância com alma. Este projeto foi pensado para um casal de advogados que desejava um lar à altura do próprio sucesso, sofisticado, imponente e digno de capa de revista, sem abrir mão do aconchego. A estética contemporânea combina mármore, iluminação cênica e tons neutros que traduzem refinamento, enquanto o mobiliário acolhedor e as texturas suaves equilibram o clima formal. Cada detalhe foi planejado para impressionar e, ao mesmo tempo, abraçar: um espaço de ostentação sensível, onde o luxo também é conforto.",
    area: "286m²",
    location: "Perdizes – São Paulo, SP",
    client: "Ting",
  },
  {
    id: 4,
    image: interior4,
    images: [
      "/images/interiores/residencial/max/FOTO036.webp",
      "/images/interiores/residencial/max/FOTO037.webp",
      "/images/interiores/residencial/max/FOTO038.webp",
      "/images/interiores/residencial/max/FOTO039.webp",
      "/images/interiores/residencial/max/FOTO040.webp",
      "/images/interiores/residencial/max/FOTO041.webp",
      "/images/interiores/residencial/max/FOTO042.webp",
      "/images/interiores/residencial/max/FOTO043.webp",
      "/images/interiores/residencial/max/FOTO044.webp",
      "/images/interiores/residencial/max/FOTO045.webp",
      "/images/interiores/residencial/max/FOTO046.webp",
      "/images/interiores/residencial/max/FOTO047.webp",
    ],
    title: "Max",
    description:
      "Projeto de interiores para apartamento com foco em aproveitar itens existentes",
    details:
      "Este projeto vibra em outra frequência. O casal de músicos queria que o lar traduzisse a energia de um show, onde cada ensaio fosse também um momento de inspiração. A base foi o reaproveitamento inteligente de peças existentes, transformadas com novos acabamentos, iluminação e textura. Tijolos aparentes, madeira e cores marcantes compõem uma atmosfera criativa e autêntica. O resultado é um espaço que pulsa vida, ritmo e identidade, uma casa que não apenas abriga, mas amplifica a essência de quem vive nela.",
    area: "70m²",
    location: "Santana – São Paulo, SP",
    client: "Max",
  },
  {
    id: 5,
    image: interior5,
    images: [
      "/images/interiores/residencial/freedom/FOTO092.webp",
      "/images/interiores/residencial/freedom/FOTO093.webp",
      "/images/interiores/residencial/freedom/FOTO094.webp",
      "/images/interiores/residencial/freedom/FOTO095.webp",
      "/images/interiores/residencial/freedom/FOTO096.webp",
      "/images/interiores/residencial/freedom/FOTO097.webp",
      "/images/interiores/residencial/freedom/FOTO098.webp",
      "/images/interiores/residencial/freedom/FOTO099.webp",
      "/images/interiores/residencial/freedom/FOTO100.webp",
      "/images/interiores/residencial/freedom/FOTO101.webp",
      "/images/interiores/residencial/freedom/FOTO102.webp",
      "/images/interiores/residencial/freedom/FOTO103.webp",
      "/images/interiores/residencial/freedom/FOTO104.webp",
      "/images/interiores/residencial/freedom/FOTO105.webp",
      "/images/interiores/residencial/freedom/FOTO106.webp",
      "/images/interiores/residencial/freedom/FOTO107.webp",
      "/images/interiores/residencial/freedom/FOTO108.webp",
    ],
    title: "Freedom",
    description:
      "Projeto de interiores para apartamento com foco em um casal descolado.",
    details:
      "Entre o concreto e os afetos, este apartamento celebra liberdade e encontro. O primeiro lar de um casal descolado, que valoriza o convívio, as pequenas festas e a leveza do cotidiano, sempre acompanhados pelos três gatos. O projeto equilibra funcionalidade e fluidez, criando espaços que acolhem tanto o movimento quanto a pausa. Materiais neutros, tons suaves e integração reforçam a sensação de casa viva, pronta para receber. Mais que um endereço, um cenário onde a vida acontece sem rigidez, com afeto e autenticidade.",
    area: "96m²",
    location: "Brooklin – São Paulo, SP",
    client: "Freedom",
  },
  {
    id: 6,
    image: interior6,
    images: [
      "/images/interiores/residencial/unissono/FOTO048.webp",
      "/images/interiores/residencial/unissono/FOTO049.webp",
      "/images/interiores/residencial/unissono/FOTO050.webp",
      "/images/interiores/residencial/unissono/FOTO051.webp",
      "/images/interiores/residencial/unissono/FOTO052.webp",
      "/images/interiores/residencial/unissono/FOTO053.webp",
      "/images/interiores/residencial/unissono/FOTO054.webp",
      "/images/interiores/residencial/unissono/FOTO055.webp",
      "/images/interiores/residencial/unissono/FOTO056.webp",
      "/images/interiores/residencial/unissono/FOTO057.webp",
      "/images/interiores/residencial/unissono/FOTO058.webp",
      "/images/interiores/residencial/unissono/FOTO059.webp",
      "/images/interiores/residencial/unissono/FOTO060.webp",
    ],
    title: "Uníssono",
    description:
      "Projeto de interiores para casa de família mais conservadora.",
    details:
      "Este projeto nasceu do desejo de reconexão. Uma família que sempre colocou os filhos em primeiro lugar, reencontra aqui o equilíbrio entre o cuidar e o viver. O azul, cor tão presente em suas memórias e afetos, guia o projeto, trazendo serenidade, confiança e harmonia. A integração dos espaços convida ao convívio, enquanto os detalhes acolhedores resgatam a leveza da rotina. Cada linha e textura refletem o reencontro do casal com sua própria sintonia, em um lar que traduz amor, calma e pertencimento.",
    area: "140m²",
    location: "Ipiranga – São Paulo, SP",
    client: "Uníssono",
  },
  {
    id: 7,
    image: interior7,
    images: [
      "/images/interiores/residencial/alento/FOTO061.webp",
      "/images/interiores/residencial/alento/FOTO062.webp",
      "/images/interiores/residencial/alento/FOTO063.webp",
      "/images/interiores/residencial/alento/FOTO064.webp",
      "/images/interiores/residencial/alento/FOTO065.webp",
      "/images/interiores/residencial/alento/FOTO066.webp",
      "/images/interiores/residencial/alento/FOTO067.webp",
      "/images/interiores/residencial/alento/FOTO068.webp",
      "/images/interiores/residencial/alento/FOTO069.webp",
      "/images/interiores/residencial/alento/FOTO070.webp",
    ],
    title: "Alento",
    description: "Projeto de interiores para casal jovem.",
    details:
      "Este lar celebra a união dos opostos, os clientes tinham gostos distintos, mas encontraram equilíbrio em cada detalhe: da madeira acolhedora aos tons suaves que conectam os ambientes. O projeto traduz o encontro entre personalidade e harmonia, um espaço leve, funcional e cheio de significado. Aqui, o design não escolheu lados, escolheu amor.",
    area: "43m²",
    location: "Vila Paulicéia – São Paulo, SP",
    client: "Alento",
  },
  {
    id: 8,
    image: interior8,
    images: [
      "/images/interiores/residencial/sintonia/FOTO071.webp",
      "/images/interiores/residencial/sintonia/FOTO072.webp",
      "/images/interiores/residencial/sintonia/FOTO073.webp",
      "/images/interiores/residencial/sintonia/FOTO074.webp",
      "/images/interiores/residencial/sintonia/FOTO075.webp",
      "/images/interiores/residencial/sintonia/FOTO076.webp",
      "/images/interiores/residencial/sintonia/FOTO077.webp",
      "/images/interiores/residencial/sintonia/FOTO078.webp",
      "/images/interiores/residencial/sintonia/FOTO079.webp",
      "/images/interiores/residencial/sintonia/FOTO080.webp",
    ],
    title: "Sintonia",
    description:
      "Projeto de interiores para casal saindo da cidade e indo para o interior.",
    details:
      "Aqui simboliza um novo começo. O casal decidiu trocar São Paulo por Sorocaba, mais perto da família e amigos, ou seja, mais perto de si. O projeto nasce desse movimento: uma transição guiada pelo desejo de pertencimento. Cada cor, textura e escolha constrói um elo entre o ontem e o amanhã, tornando a nova casa um refúgio emocional. Aqui, o espaço acolhe a mudança e transforma o deslocamento em reencontro.",
    area: "61m²",
    location: "Sorocaba, SP",
    client: "Sintonia",
  },
  {
    id: 9,
    image: interior9,
    images: [
      "/images/interiores/residencial/comenale/FOTO081.webp",
      "/images/interiores/residencial/comenale/FOTO082.webp",
      "/images/interiores/residencial/comenale/FOTO083.webp",
      "/images/interiores/residencial/comenale/FOTO084.webp",
      "/images/interiores/residencial/comenale/FOTO085.webp",
      "/images/interiores/residencial/comenale/FOTO086.webp",
      "/images/interiores/residencial/comenale/FOTO087.webp",
      "/images/interiores/residencial/comenale/FOTO088.webp",
      "/images/interiores/residencial/comenale/FOTO089.webp",
      "/images/interiores/residencial/comenale/FOTO090.webp",
      "/images/interiores/residencial/comenale/FOTO091.webp",
    ],
    title: "Comenale",
    description:
      "Projeto de interiores para casal onde o foco era o contemporâneo e o preto.",
    details:
      "Este apartamento marca o início de uma nova história. O primeiro lar de um casal que sonhou cada detalhe para começar a vida juntos. O preto e os tons contemporâneos refletem maturidade e personalidade, enquanto o equilíbrio entre materiais e texturas traduz o encontro entre força e acolhimento. Mais que um espaço, é um capítulo de transição, o lugar onde o amor encontra forma, e o futuro, endereço.",
    area: "67m²",
    location: "Vila Mascote – São Paulo, SP",
    client: "Comenale",
  },
];

// =============================================================================
// COMERCIAIS
// =============================================================================

const comercial1 = "/images/interiores/comercial/you-art/FOTO109.webp";
const comercial2 = "/images/interiores/comercial/you-art/FOTO119.webp";
const comercial3 = "/images/interiores/comercial/stand-salux/FOTO126.webp";
const comercial4 = "/images/interiores/comercial/loja-bonor/FOTO135.webp";
const comercial5 = "/images/interiores/comercial/estudio-maneva/FOTO142.webp";
const comercial6 =
  "/images/interiores/comercial/espaco-gourmet-jk/FOTO153.webp";
const comercial7 = "/images/interiores/comercial/empresa-vip/FOTO159.webp";
const comercial8 = "/images/interiores/comercial/clinica-km/FOTO171.webp";
const comercial9 = "/images/interiores/comercial/bass-automacao/FOTO154.webp";

export const comerciais: ProjetoInterior[] = [
  {
    id: 20,
    image: comercial1,
    images: [
      "/images/interiores/comercial/you-art/FOTO109.webp",
      "/images/interiores/comercial/you-art/FOTO110.webp",
      "/images/interiores/comercial/you-art/FOTO111.webp",
      "/images/interiores/comercial/you-art/FOTO112.webp",
      "/images/interiores/comercial/you-art/FOTO113.webp",
      "/images/interiores/comercial/you-art/FOTO114.webp",
      "/images/interiores/comercial/you-art/FOTO115.webp",
      "/images/interiores/comercial/you-art/FOTO116.webp",
      "/images/interiores/comercial/you-art/FOTO117.webp",
      "/images/interiores/comercial/you-art/FOTO118.webp",
    ],
    title: "Loja You Art",
    description:
      "Projeto de loja de quadros personalizados dentro de shopping.",
    details:
      "Uma loja de quadros personalizados onde cada detalhe convida à expressão individual. As cores, a iluminação e a fluidez do layout estimulam a criatividade e despertam conexão imediata com o público. O percurso interno valoriza a experiência, transformando a escolha de um quadro em um momento afetivo, não apenas comercial. Em meio ao ritmo acelerado do shopping, o espaço se destaca como um respiro visual — um lugar onde memórias ganham forma, significado e presença.",
    area: "32m²",
    location: "Shopping Center 3 – São Paulo, SP",
    client: "Loja You Art",
  },
  {
    id: 21,
    image: comercial2,
    images: ["/images/interiores/comercial/you-art/FOTO119.webp"],
    title: "Consultório Leopoldo Leão",
    description:
      "Projeto de consultório de nutrição do profissional Leopoldo Leão.",
    details:
      "Este consultório de nutrição foi pensado para transmitir confiança e clareza desde o primeiro contato. A combinação de tons neutros com o amarelo pontual estimula vitalidade e foco, sem gerar excesso de estímulos. O layout organizado favorece conversas próximas e escuta ativa, enquanto a iluminação e os materiais criam uma atmosfera profissional e humana ao mesmo tempo. Mais do que um espaço de atendimento, o ambiente apoia mudanças de hábitos, tornando o cuidado com o corpo um processo leve, consciente e acessível.",
    area: "10m²",
    location: "Centro – São Paulo, SP",
    client: "Leopoldo Leão",
  },
  {
    id: 22,
    image: comercial3,
    images: [
      "/images/interiores/comercial/stand-salux/FOTO126.webp",
      "/images/interiores/comercial/stand-salux/FOTO127.webp",
      "/images/interiores/comercial/stand-salux/FOTO128.webp",
      "/images/interiores/comercial/stand-salux/FOTO129.webp",
      "/images/interiores/comercial/stand-salux/FOTO130.webp",
      "/images/interiores/comercial/stand-salux/FOTO131.webp",
      "/images/interiores/comercial/stand-salux/FOTO132.webp",
      "/images/interiores/comercial/stand-salux/FOTO133.webp",
    ],
    title: "Stand Salux",
    description:
      "Estudo de stand para concorrência de projeto em feira de medicina.",
    details:
      "Este estudo de stand foi desenvolvido para destacar a marca em meio ao fluxo intenso de uma feira de medicina, equilibrando impacto visual e clareza institucional. As formas orgânicas suspensas e a iluminação contínua conduzem o olhar e criam reconhecimento à distância, enquanto a paleta em tons de azul reforça tecnologia, confiança e cuidado. A transparência dos fechamentos favorece a aproximação e a troca, transformando o espaço em um ponto de conexão. Um projeto pensado para comunicar inovação, credibilidade e presença.",
    area: "60m²",
    location: "São Paulo, SP",
    client: "Salux",
  },
  {
    id: 23,
    image: comercial4,
    images: [
      "/images/interiores/comercial/loja-bonor/FOTO134.webp",
      "/images/interiores/comercial/loja-bonor/FOTO135.webp",
      "/images/interiores/comercial/loja-bonor/FOTO136.webp",
      "/images/interiores/comercial/loja-bonor/FOTO137.webp",
      "/images/interiores/comercial/loja-bonor/FOTO138.webp",
      "/images/interiores/comercial/loja-bonor/FOTO139.webp",
      "/images/interiores/comercial/loja-bonor/FOTO140.webp",
      "/images/interiores/comercial/loja-bonor/FOTO141.webp",
    ],
    title: "Loja Bonor",
    description: "Projeto de loja especialista em botões dentro de shopping.",
    details:
      "Este projeto foi pensado para valorizar o produto e facilitar a decisão de compra em um ambiente de alto giro. A organização linear expõe os botões de forma clara e tátil, convidando à experimentação, enquanto a paleta neutra destaca cores e texturas do material. A iluminação direcionada reforça a leitura técnica e o layout favorece negociações rápidas e eficientes. Inserida em um shopping de jeans no Brás, a loja traduz funcionalidade, identidade e presença comercial, sem abrir mão de uma experiência visual organizada e fluida.",
    area: "47m²",
    location: "Shopping Denim City SP – São Paulo, SP",
    client: "Bonor",
  },
  {
    id: 24,
    image: comercial5,
    images: [
      "/images/interiores/comercial/estudio-maneva/FOTO142.webp",
      "/images/interiores/comercial/estudio-maneva/FOTO143.webp",
      "/images/interiores/comercial/estudio-maneva/FOTO144.webp",
      "/images/interiores/comercial/estudio-maneva/FOTO145.webp",
      "/images/interiores/comercial/estudio-maneva/FOTO146.webp",
      "/images/interiores/comercial/estudio-maneva/FOTO147.webp",
      "/images/interiores/comercial/estudio-maneva/FOTO148.webp",
      "/images/interiores/comercial/estudio-maneva/FOTO149.webp",
    ],
    title: "Recepção Estúdio Maneva",
    description:
      "Projeto de recepção e sala de espera de estúdio da banda Maneva.",
    details:
      "A recepção e área de espera da banda Maneva foi pensada como um espaço de pausa, troca e inspiração. As cores quentes, a presença da madeira e os elementos orgânicos criam uma atmosfera acolhedora e descontraída, alinhada à essência da banda. O mural artístico imprime identidade e pertencimento, enquanto o layout favorece encontros, conversas e momentos de criação. Mais do que um ambiente de espera, o espaço traduz ritmo, leveza e conexão — um cenário onde a música continua mesmo em silêncio.",
    area: "20m²",
    location: "Santana – São Paulo, SP",
    client: "Banda Maneva",
  },
  {
    id: 25,
    image: comercial6,
    images: [
      "/images/interiores/comercial/espaco-gourmet-jk/FOTO150.webp",
      "/images/interiores/comercial/espaco-gourmet-jk/FOTO151.webp",
      "/images/interiores/comercial/espaco-gourmet-jk/FOTO152.webp",
      "/images/interiores/comercial/espaco-gourmet-jk/FOTO153.webp",
    ],
    title: "Espaço Gourmet JK",
    description: "Projeto em terreno para cliente locar para eventos.",
    details:
      "O espaço gourmet foi concebido para receber eventos, festas e momentos de celebração com conforto e fluidez. A integração entre área coberta, piscina e jardim cria um cenário versátil, que se adapta a diferentes formatos de uso e número de convidados. Os materiais resistentes e a setorização bem definida garantem funcionalidade sem abrir mão da estética, enquanto a área externa amplia a sensação de liberdade e convivência. Um ambiente pensado para encontros marcantes, onde a arquitetura potencializa a experiência de quem recebe e de quem vive o espaço.",
    area: "300m²",
    location: "Vila Prudente – São Paulo, SP",
    client: "Espaço Gourmet JK",
  },
  {
    id: 26,
    image: comercial7,
    images: [
      "/images/interiores/comercial/empresa-vip/FOTO159.webp",
      "/images/interiores/comercial/empresa-vip/FOTO160.webp",
      "/images/interiores/comercial/empresa-vip/FOTO161.webp",
      "/images/interiores/comercial/empresa-vip/FOTO162.webp",
      "/images/interiores/comercial/empresa-vip/FOTO163.webp",
      "/images/interiores/comercial/empresa-vip/FOTO164.webp",
      "/images/interiores/comercial/empresa-vip/FOTO165.webp",
      "/images/interiores/comercial/empresa-vip/FOTO166.webp",
      "/images/interiores/comercial/empresa-vip/FOTO167.webp",
      "/images/interiores/comercial/empresa-vip/FOTO168.webp",
      "/images/interiores/comercial/empresa-vip/FOTO169.webp",
      "/images/interiores/comercial/empresa-vip/FOTO170.webp",
    ],
    title: "Escritório Empresa VIP",
    description: "Projeto de interiores da empresa VIP GSA.",
    details:
      "O escritório foi projetado para estimular produtividade, foco e troca entre equipes, sem abrir mão do conforto e da identidade da marca. A planta aberta favorece a colaboração e a fluidez do trabalho, enquanto as salas envidraçadas garantem transparência, controle acústico e flexibilidade de uso. A paleta neutra, combinada a elementos de madeira e pontos de cor, cria um ambiente equilibrado, profissional e acolhedor. A iluminação linear reforça a sensação de organização e ritmo, tornando o espaço funcional para a rotina corporativa e estratégico para o crescimento do negócio.",
    area: "300m²",
    location: "Centro – São Paulo, SP",
    client: "VIP GSA",
  },
  {
    id: 27,
    image: comercial8,
    images: [
      "/images/interiores/comercial/clinica-km/FOTO171.webp",
      "/images/interiores/comercial/clinica-km/FOTO172.webp",
      "/images/interiores/comercial/clinica-km/FOTO173.webp",
      "/images/interiores/comercial/clinica-km/FOTO174.webp",
      "/images/interiores/comercial/clinica-km/FOTO175.webp",
    ],
    title: "Clínica de Fisioterapia KM",
    description: "Projeto de sala para clínica de fisioterapia.",
    details:
      "A sala foi pensada para promover acolhimento, bem-estar e recuperação, criando uma atmosfera que reduz a ansiedade e favorece o processo terapêutico. A paleta clara, aliada aos tons naturais e ao verde suave, transmite calma e equilíbrio, enquanto a iluminação indireta contribui para uma experiência mais confortável durante os atendimentos. A organização funcional do espaço garante fluidez entre avaliação e tratamento, reforçando a sensação de cuidado, profissionalismo e confiança. Cada elemento foi escolhido para apoiar o corpo e a mente, transformando o ambiente em parte ativa do processo de reabilitação.",
    area: "12m²",
    location: "Brooklin – São Paulo, SP",
    client: "Clínica KM",
  },
  {
    id: 28,
    image: comercial9,
    images: [
      "/images/interiores/comercial/bass-automacao/FOTO154.webp",
      "/images/interiores/comercial/bass-automacao/FOTO155.webp",
      "/images/interiores/comercial/bass-automacao/FOTO156.webp",
      "/images/interiores/comercial/bass-automacao/FOTO157.webp",
      "/images/interiores/comercial/bass-automacao/FOTO158.webp",
    ],
    title: "Showroom Bass Automação",
    description: "Projeto de escritório e showroom da empresa Bass Automação.",
    details:
      "A loja e showroom foram concebidos para valorizar a tecnologia sem que a estética competisse com ela. A base neutra, com materiais mais quentes e urbanos, cria um cenário equilibrado que direciona o olhar para os equipamentos e demonstrações. O layout favorece a experimentação e a compreensão dos sistemas de automação de forma intuitiva, enquanto a iluminação pontual destaca funcionalidades específicas. O resultado é um espaço acessível, didático e envolvente, onde a inovação se apresenta com clareza, sem excessos visuais.",
    area: "100m²",
    location: "Guarulhos – São Paulo, SP",
    client: "Bass Automação",
  },
];

// =============================================================================
// INSTITUCIONAIS
// =============================================================================

const institucional1 =
  "/images/interiores/institucional/emilio-rousseau-fundamental/FOTO177.webp";
const institucional2 =
  "/images/interiores/institucional/emilio-rousseau-infantil/FOTO195.webp";
const institucional3 =
  "/images/interiores/institucional/liberdade-kids-1/FOTO206.webp";
const institucional4 =
  "/images/interiores/institucional/liberdade-kids-2/FOTO214.webp";

export const institucionais: ProjetoInterior[] = [
  {
    id: 30,
    image: institucional1,
    images: [
      "/images/interiores/institucional/emilio-rousseau-fundamental/FOTO176.webp",
      "/images/interiores/institucional/emilio-rousseau-fundamental/FOTO177.webp",
      "/images/interiores/institucional/emilio-rousseau-fundamental/FOTO178.webp",
      "/images/interiores/institucional/emilio-rousseau-fundamental/FOTO179.webp",
      "/images/interiores/institucional/emilio-rousseau-fundamental/FOTO180.webp",
      "/images/interiores/institucional/emilio-rousseau-fundamental/FOTO181.webp",
      "/images/interiores/institucional/emilio-rousseau-fundamental/FOTO182.webp",
      "/images/interiores/institucional/emilio-rousseau-fundamental/FOTO183.webp",
      "/images/interiores/institucional/emilio-rousseau-fundamental/FOTO184.webp",
      "/images/interiores/institucional/emilio-rousseau-fundamental/FOTO185.webp",
      "/images/interiores/institucional/emilio-rousseau-fundamental/FOTO186.webp",
      "/images/interiores/institucional/emilio-rousseau-fundamental/FOTO187.webp",
      "/images/interiores/institucional/emilio-rousseau-fundamental/FOTO188.webp",
      "/images/interiores/institucional/emilio-rousseau-fundamental/FOTO189.webp",
      "/images/interiores/institucional/emilio-rousseau-fundamental/FOTO190.webp",
      "/images/interiores/institucional/emilio-rousseau-fundamental/FOTO191.webp",
      "/images/interiores/institucional/emilio-rousseau-fundamental/FOTO192.webp",
      "/images/interiores/institucional/emilio-rousseau-fundamental/FOTO193.webp",
    ],
    title: "Colégio Emílio Rousseau – Fundamental",
    description:
      "Projeto de fachada e interiores de colégio – unidade do fundamental.",
    details:
      "O projeto da unidade fundamental foi pensado para estimular convivência, movimento e aprendizado por meio do espaço. As áreas externas integradas convidam ao encontro entre alunos, professores e natureza, enquanto o paisagismo traz o verde como elemento ativo do cotidiano escolar. Caminhos fluidos, mobiliário coletivo e pontos de permanência transformam os intervalos em momentos de troca e descanso. A arquitetura atua como ferramenta pedagógica, criando um ambiente mais leve, acolhedor e conectado, onde o desenvolvimento acontece também fora da sala de aula.",
    area: "500m²",
    location: "Jardim Figueira Grande – São Paulo, SP",
    client: "Colégio Emílio Rousseau",
  },
  {
    id: 31,
    image: institucional2,
    images: [
      "/images/interiores/institucional/emilio-rousseau-infantil/FOTO193.webp",
      "/images/interiores/institucional/emilio-rousseau-infantil/FOTO194.webp",
      "/images/interiores/institucional/emilio-rousseau-infantil/FOTO195.webp",
      "/images/interiores/institucional/emilio-rousseau-infantil/FOTO196.webp",
      "/images/interiores/institucional/emilio-rousseau-infantil/FOTO197.webp",
      "/images/interiores/institucional/emilio-rousseau-infantil/FOTO198.webp",
      "/images/interiores/institucional/emilio-rousseau-infantil/FOTO199.webp",
      "/images/interiores/institucional/emilio-rousseau-infantil/FOTO200.webp",
      "/images/interiores/institucional/emilio-rousseau-infantil/FOTO201.webp",
      "/images/interiores/institucional/emilio-rousseau-infantil/FOTO202.webp",
      "/images/interiores/institucional/emilio-rousseau-infantil/FOTO203.webp",
      "/images/interiores/institucional/emilio-rousseau-infantil/FOTO204.webp",
      "/images/interiores/institucional/emilio-rousseau-infantil/FOTO205.webp",
    ],
    title: "Colégio Emílio Rousseau – Infantil",
    description:
      "Projeto de fachada e interiores de colégio – unidade do infantil.",
    details:
      "O projeto do infantil foi desenvolvido para estimular a imaginação, o movimento e a autonomia desde os primeiros anos. As cores vibrantes, os percursos lúdicos e os espaços de brincar foram pensados para despertar curiosidade e aprendizado de forma natural. A integração entre áreas internas e externas amplia a liberdade de exploração, enquanto o layout garante segurança e fluidez. A arquitetura atua como extensão do brincar, criando um ambiente acolhedor, estimulante e preparado para o desenvolvimento emocional e cognitivo das crianças.",
    area: "430m²",
    location: "Jardim Figueira Grande – São Paulo, SP",
    client: "Colégio Emílio Rousseau",
  },
  {
    id: 32,
    image: institucional3,
    images: [
      "/images/interiores/institucional/liberdade-kids-1/FOTO206.webp",
      "/images/interiores/institucional/liberdade-kids-1/FOTO207.webp",
      "/images/interiores/institucional/liberdade-kids-1/FOTO208.webp",
      "/images/interiores/institucional/liberdade-kids-1/FOTO209.webp",
      "/images/interiores/institucional/liberdade-kids-1/FOTO210.webp",
      "/images/interiores/institucional/liberdade-kids-1/FOTO211.webp",
      "/images/interiores/institucional/liberdade-kids-1/FOTO212.webp",
      "/images/interiores/institucional/liberdade-kids-1/FOTO213.webp",
    ],
    title: "Colégio Liberdade Kids – Unidade I",
    description: "Projeto de interiores de colégio – unidade I.",
    details:
      "A readaptação da arquitetura existente teve como foco atualizar os espaços sem perder a identidade já construída pela escola. A intervenção valorizou o que já funcionava, reorganizando usos, fluxos e mobiliários para atender novas dinâmicas pedagógicas. Ambientes antes neutros ganharam estímulos visuais, áreas de convivência e pontos de aprendizado informal, promovendo integração entre alunos e educadores. A arquitetura passa a atuar como apoio ao ensino contemporâneo, respeitando a história do colégio enquanto amplia possibilidades de uso, interação e pertencimento.",
    area: "970m²",
    location: "São Miguel – São Paulo, SP",
    client: "Colégio Liberdade Kids",
  },
  {
    id: 33,
    image: institucional4,
    images: [
      "/images/interiores/institucional/liberdade-kids-2/FOTO214.webp",
      "/images/interiores/institucional/liberdade-kids-2/FOTO215.webp",
      "/images/interiores/institucional/liberdade-kids-2/FOTO216.webp",
      "/images/interiores/institucional/liberdade-kids-2/FOTO217.webp",
      "/images/interiores/institucional/liberdade-kids-2/FOTO218.webp",
      "/images/interiores/institucional/liberdade-kids-2/FOTO219.webp",
      "/images/interiores/institucional/liberdade-kids-2/FOTO220.webp",
      "/images/interiores/institucional/liberdade-kids-2/FOTO221.webp",
      "/images/interiores/institucional/liberdade-kids-2/FOTO222.webp",
      "/images/interiores/institucional/liberdade-kids-2/FOTO223.webp",
    ],
    title: "Colégio Liberdade Kids – Unidade II",
    description:
      "Projeto de arquitetura, fachada e interiores de colégio – unidade II.",
    details:
      "Este projeto envolveu a transformação completa da unidade, da fachada aos espaços internos, respeitando a identidade do colégio e ampliando sua presença urbana. A nova linguagem visual comunica acolhimento, ludicidade e pertencimento desde o primeiro contato, enquanto as adaptações arquitetônicas reorganizam fluxos e usos para atender às novas demandas pedagógicas. Nos interiores, cores, formas e espaços de convivência estimulam aprendizado, imaginação e interação. A arquitetura atua como elemento integrador, fortalecendo a experiência escolar e consolidando a unidade como extensão natural da proposta educacional já existente.",
    area: "1.030m²",
    location: "São Miguel – São Paulo, SP",
    client: "Colégio Liberdade Kids",
  },
];

// =============================================================================
// OUTROS
// =============================================================================

const outros1 = "/images/interiores/outros/mostra-morar-mais/FOTO225.webp";
const outros2 = "/images/interiores/outros/itapema/FOTO234.webp";
const outros3 = "/images/interiores/outros/vista-da-serra/FOTO240.webp";
const outros4 = "/images/interiores/outros/nancy-1/FOTO249.webp";
const outros5 = "/images/interiores/outros/nancy-2/FOTO253.webp";
const outros6 = "/images/interiores/outros/monte-fuji/FOTO261.webp";

export const outros: ProjetoInterior[] = [
  {
    id: 40,
    image: outros1,
    images: [
      "/images/interiores/outros/mostra-morar-mais/FOTO224.webp",
      "/images/interiores/outros/mostra-morar-mais/FOTO225.webp",
      "/images/interiores/outros/mostra-morar-mais/FOTO226.webp",
      "/images/interiores/outros/mostra-morar-mais/FOTO227.webp",
      "/images/interiores/outros/mostra-morar-mais/FOTO228.webp",
      "/images/interiores/outros/mostra-morar-mais/FOTO229.webp",
      "/images/interiores/outros/mostra-morar-mais/FOTO230.webp",
      "/images/interiores/outros/mostra-morar-mais/FOTO231.webp",
    ],
    title: "Mostra Morar Mais por Menos",
    description:
      "Projeto para mostra em uma feira de arquitetura e interiores.",
    details:
      "A sala criada para a mostra Morar Mais por Menos foi inspirada na atmosfera musical e afetiva do reggae, tendo como referência a essência de Gabriel Elias. Madeira, cores quentes e elementos artesanais constroem um ambiente descontraído e acolhedor, onde o tempo parece desacelerar. A iluminação suave e os detalhes autorais reforçam a sensação de intimidade e pertencimento. O espaço convida à pausa, à escuta e à conexão, traduzindo a música em arquitetura e transformando a experiência expositiva em vivência emocional.",
    area: "20m²",
    location: "Pinheiros – São Paulo, SP",
    client: "Mostra Morar Mais por Menos",
  },
  {
    id: 41,
    image: outros2,
    images: [
      "/images/interiores/outros/itapema/FOTO232.webp",
      "/images/interiores/outros/itapema/FOTO233.webp",
      "/images/interiores/outros/itapema/FOTO234.webp",
      "/images/interiores/outros/itapema/FOTO235.webp",
      "/images/interiores/outros/itapema/FOTO236.webp",
      "/images/interiores/outros/itapema/FOTO237.webp",
      "/images/interiores/outros/itapema/FOTO238.webp",
    ],
    title: "Condomínio Edifício Itapema",
    description:
      "Projeto para áreas comuns de condomínio – hall I e II, brinquedoteca.",
    details:
      "Pensados como extensões do lar, os espaços comuns do condomínio convidam à convivência desde a chegada. A linguagem acolhedora e contemporânea dos acessos cria uma primeira impressão leve e receptiva, estimulando encontros e permanência. Já o espaço dedicado às crianças foi desenhado para incentivar descoberta, movimento e imaginação, com estímulos lúdicos que respeitam o tempo da infância. O conjunto fortalece o senso de comunidade, transformando áreas compartilhadas em lugares de vínculo, troca e pertencimento.",
    area: "",
    location: "Vila Santo Estevão – São Paulo, SP",
    client: "Edifício Itapema",
  },
  {
    id: 42,
    image: outros3,
    images: [
      "/images/interiores/outros/vista-da-serra/FOTO239.webp",
      "/images/interiores/outros/vista-da-serra/FOTO240.webp",
      "/images/interiores/outros/vista-da-serra/FOTO241.webp",
      "/images/interiores/outros/vista-da-serra/FOTO242.webp",
      "/images/interiores/outros/vista-da-serra/FOTO243.webp",
      "/images/interiores/outros/vista-da-serra/FOTO244.webp",
      "/images/interiores/outros/vista-da-serra/FOTO245.webp",
      "/images/interiores/outros/vista-da-serra/FOTO246.webp",
    ],
    title: "Condomínio Edifício Vista da Serra",
    description: "Projeto para áreas comuns de condomínio – área externa.",
    details:
      "Essa área do condomínio foi pensada para estimular o convívio, o movimento e o contato com o verde no dia a dia. Os percursos convidam à caminhada e à permanência, enquanto os espaços de estar e brincar criam oportunidades de encontro entre moradores de diferentes idades. O paisagismo atua como elemento de equilíbrio, suavizando a escala construída e trazendo sensação de respiro. O conjunto transforma o exterior em parte ativa da vida do condomínio, promovendo bem-estar, integração e uso contínuo dos espaços ao ar livre.",
    area: "",
    location: "Santana – São Paulo, SP",
    client: "Edifício Vista da Serra",
  },
  {
    id: 43,
    image: outros4,
    images: [
      "/images/interiores/outros/nancy-1/FOTO247.webp",
      "/images/interiores/outros/nancy-1/FOTO248.webp",
      "/images/interiores/outros/nancy-1/FOTO249.webp",
      "/images/interiores/outros/nancy-1/FOTO250.webp",
      "/images/interiores/outros/nancy-1/FOTO251.webp",
      "/images/interiores/outros/nancy-1/FOTO252.webp",
    ],
    title: "Condomínio Edifício Nancy I",
    description: "Projeto para portaria e fachada de condomínio.",
    details:
      "O projeto reforça a identidade do condomínio por meio de uma linguagem sóbria, clara e atemporal. As linhas retas e a composição equilibrada conferem presença urbana e sensação de segurança, enquanto a implantação valoriza a leitura dos acessos e a fluidez dos fluxos. A relação entre cheios e vazios cria transparência na medida certa, permitindo controle visual sem rigidez. A arquitetura atua como elemento de transição entre o espaço público e o privado, acolhendo moradores e visitantes com clareza, organização e pertencimento desde a chegada.",
    area: "",
    location: "Belém – São Paulo, SP",
    client: "Edifício Nancy I",
  },
  {
    id: 44,
    image: outros5,
    images: [
      "/images/interiores/outros/nancy-2/FOTO253.webp",
      "/images/interiores/outros/nancy-2/FOTO254.webp",
      "/images/interiores/outros/nancy-2/FOTO255.webp",
      "/images/interiores/outros/nancy-2/FOTO256.webp",
      "/images/interiores/outros/nancy-2/FOTO257.webp",
      "/images/interiores/outros/nancy-2/FOTO258.webp",
      "/images/interiores/outros/nancy-2/FOTO259.webp",
      "/images/interiores/outros/nancy-2/FOTO260.webp",
    ],
    title: "Condomínio Edifício Nancy II",
    description: "Projeto para solário I e II, e churrasqueira de condomínio.",
    details:
      "Pensados para ampliar as possibilidades de convivência ao ar livre, os espaços se organizam de forma complementar, equilibrando descanso, encontro e celebração. A presença do verde, a iluminação natural e o mobiliário convidam à permanência, enquanto a cobertura garante conforto em diferentes horários do dia. A área de preparo e apoio foi integrada de maneira discreta, permitindo que o uso aconteça de forma fluida e descomplicada. O conjunto transforma momentos cotidianos em experiências compartilhadas, fortalecendo a vida coletiva do condomínio.",
    area: "190m²",
    location: "Belém – São Paulo, SP",
    client: "Edifício Nancy II",
  },
  {
    id: 45,
    image: outros6,
    images: [
      "/images/interiores/outros/monte-fuji/FOTO261.webp",
      "/images/interiores/outros/monte-fuji/FOTO262.webp",
      "/images/interiores/outros/monte-fuji/FOTO263.webp",
      "/images/interiores/outros/monte-fuji/FOTO264.webp",
    ],
    title: "Condomínio Edifício Monte Fuji",
    description: "Projeto para portaria e hall de entrada de condomínio.",
    details:
      "A chegada ao edifício foi pensada para transmitir segurança, clareza e acolhimento. A composição sóbria, com linhas verticais e materiais atemporais, organiza os fluxos e reforça a leitura dos acessos. A transparência controlada permite visibilidade sem exposição excessiva, enquanto a iluminação e os elementos naturais suavizam a experiência. O espaço atua como filtro entre o público e o privado, criando uma transição tranquila e organizada para quem entra e para quem retorna ao cotidiano do edifício.",
    area: "28m²",
    location: "Saúde – São Paulo, SP",
    client: "Edifício Monte Fuji",
  },
];

// =============================================================================
// FUNÇÃO PARA MONTAR PROJETOS COM CATEGORIA
// =============================================================================
export function getInterioresComCategoria() {
  const addCategory = (
    projects: ProjetoInterior[],
    category: InteriorCategory,
  ) => projects.map((p) => ({ ...p, type: "Interiores" as const, category }));

  return [
    ...addCategory(residenciais, "Residencial"),
    ...addCategory(comerciais, "Comercial"),
    ...addCategory(institucionais, "Institucional"),
    ...addCategory(outros, "Outros"),
  ];
}
