// =============================================================================
// TIPOS E INTERFACES COMPARTILHADOS
// =============================================================================

// Categorias de Interiores
export type InteriorCategory = "Residencial" | "Comercial" | "Institucional" | "Outros";

// Categorias de Arquitetura
export type ArchitectureCategory = "Casas" | "Edificios";

// Tipo principal do projeto
export type ProjectType = "Interiores" | "Arquitetura";

// Interface completa do projeto
export interface ProjectDetails {
  id: number;
  image: string;
  images: string[];
  title: string;
  type: ProjectType;
  category: InteriorCategory | ArchitectureCategory;
  description: string;
  details: string;
  area: string;
  location: string;
  client: string;
  year?: number;
  services?: string[];
}

// Constantes de categorias
export const INTERIOR_CATEGORIES: InteriorCategory[] = [
  "Residencial",
  "Comercial",
  "Institucional",
  "Outros"
];

export const ARCHITECTURE_CATEGORIES: ArchitectureCategory[] = [
  "Casas",
  "Edificios"
];
