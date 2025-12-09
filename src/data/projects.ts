import executivo1 from "@/assets/executivo1.png";
import executivo2 from "@/assets/executivo2.png";
import executivo3 from "@/assets/executivo3.png";
import executivo4 from "@/assets/executivo4.png";

export interface Project {
  id: number;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  images: string[];
  details?: { label: string; value: string }[];
  tools?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Residência Convívio",
    category: "Projeto Acadêmico",
    shortDescription: "Habitação contemporânea com foco na convivência e integração dos espaços.",
    fullDescription: `Este projeto propõe uma habitação contemporânea com foco na convivência e integração dos espaços sociais, tanto internos quanto externos. A área externa da residência se destaca como o principal ambiente de recepção, oferecendo conforto, ventilação e um visual agradável através do uso de fechamentos em vidro e cobertura aberta.

A entrada da casa se dá diretamente em um ambiente integrado com a sala, formando um espaço de acolhimento fluido logo na chegada. A seguir, uma porta dá acesso à área externa, que foi pensada desde pequenos até grandes encontros. A cozinha, apesar de compacta, mantém seu papel como ponto de apoio e recepção de pequenas reuniões.

A área externa é composta por churrasqueira, mesa com bancos e poltronas, permite diferentes usos, desde encontros com amigos até momentos mais íntimos. As laterais são fechadas com painéis de vidro, garantindo proteção sem bloquear a vista e permitindo a entrada de luz natural.`,
    thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200",
    ],
    details: [
      { label: "Disciplina", value: "Renderização - UCB" },
      { label: "Professora", value: "Rolzelin Rocco" },
      { label: "Ano", value: "2024" },
      { label: "Tipo", value: "Residencial" },
    ],
    tools: ["SketchUp", "V-Ray", "Layout", "AutoCAD"],
  },
  {
    id: 2,
    title: "Projeto Executivo Residencial",
    category: "Estágio",
    shortDescription: "Projeto executivo desenvolvido durante estágio com a arquiteta Ana Novais.",
    fullDescription: `Projeto executivo completo desenvolvido durante o período de estágio no escritório da arquiteta Ana Novais. O trabalho envolveu o desenvolvimento de todas as etapas de documentação técnica necessárias para a execução da obra.

O projeto incluiu plantas baixas detalhadas, cortes, fachadas, planta de cobertura, além de especificações técnicas de materiais e acabamentos. Todo o desenho técnico foi elaborado seguindo as normas da ABNT, garantindo a precisão e clareza necessárias para a execução.`,
    thumbnail: executivo1,
    images: [
      executivo1,
      executivo2,
      executivo3,
      executivo4,
    ],
    details: [
      { label: "Escritório", value: "Ana Novais Arquitetura" },
      { label: "Período", value: "2023 - 2025" },
      { label: "Tipo", value: "Projeto Executivo" },
    ],
    tools: ["AutoCAD", "Layout"],
  },
  {
    id: 3,
    title: "Móveis Planejados",
    category: "Estágio",
    shortDescription: "Desenvolvimento de projetos de móveis planejados na Celmar Móveis.",
    fullDescription: `Durante o estágio na Celmar Móveis, desenvolvi projetos de móveis planejados focados em otimização de espaços e funcionalidade. O trabalho envolveu desde o levantamento de medidas até a elaboração de projetos detalhados para produção.

Os projetos incluíram armários, closets, cozinhas planejadas e home offices, sempre priorizando as necessidades específicas de cada cliente e buscando o melhor aproveitamento do espaço disponível.`,
    thumbnail: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200",
    ],
    details: [
      { label: "Empresa", value: "Celmar Móveis" },
      { label: "Período", value: "2025" },
      { label: "Tipo", value: "Móveis Planejados" },
    ],
    tools: ["Promob", "AutoCAD"],
  },
  {
    id: 4,
    title: "Modelo Reduzido",
    category: "Projeto Acadêmico",
    shortDescription: "Projeto desenvolvido para a matéria de Modelo Reduzido e Prototipagem.",
    fullDescription: `Projeto desenvolvido para a disciplina de Modelo Reduzido e Prototipagem na UCB, sob orientação do professor Amaral. O trabalho envolveu a criação de um modelo físico em escala reduzida, explorando técnicas de prototipagem e materialidade.

O projeto permitiu uma compreensão mais profunda da relação entre espaço, escala e materialidade, além de desenvolver habilidades práticas de construção de modelos arquitetônicos.`,
    thumbnail: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200",
    ],
    details: [
      { label: "Disciplina", value: "Modelo Reduzido e Prototipagem" },
      { label: "Professor", value: "Amaral" },
      { label: "Universidade", value: "UCB" },
    ],
    tools: ["Maquete física", "Corte a laser"],
  },
  {
    id: 5,
    title: "Detalhamento Técnico",
    category: "Estágio",
    shortDescription: "Detalhamento de projetos arquitetônicos e especificações técnicas.",
    fullDescription: `Desenvolvimento de detalhamentos técnicos durante o período de estágio, incluindo especificações de marcenaria, esquadrias e acabamentos. O trabalho envolveu a criação de desenhos de produção com todas as informações necessárias para execução.

Os detalhamentos seguiram normas técnicas e incluíram cotas, especificações de materiais, acabamentos e instruções de montagem, garantindo a precisão na execução dos projetos.`,
    thumbnail: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800",
    images: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200",
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1200",
    ],
    details: [
      { label: "Tipo", value: "Detalhamento Executivo" },
      { label: "Escritório", value: "Ana Novais Arquitetura" },
    ],
    tools: ["AutoCAD", "Layout"],
  },
  {
    id: 6,
    title: "Studio Treliça",
    category: "Estágio Atual",
    shortDescription: "Projetos de arquitetura e interiores no escritório Studio Treliça.",
    fullDescription: `Atualmente estagiando no Studio Treliça, desenvolvendo projetos de arquitetura e design de interiores. O trabalho envolve desde a concepção até a documentação executiva, participando de todas as etapas do processo projetual.

A experiência tem proporcionado contato com diferentes tipologias de projetos e aprimoramento das habilidades em softwares de projeto e renderização.`,
    thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800",
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200",
    ],
    details: [
      { label: "Escritório", value: "Studio Treliça" },
      { label: "Período", value: "Atualmente" },
      { label: "Tipo", value: "Arquitetura e Interiores" },
    ],
    tools: ["SketchUp", "AutoCAD", "Layout", "V-Ray"],
  },
];

export const carouselImages = [
  executivo1,
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
  "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1200",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200",
];
