// =============================================================================
// ARQUIVO PRINCIPAL - COMBINA TODOS OS PROJETOS
// =============================================================================
// Este arquivo junta os projetos de interiores e arquitetura.
// Para adicionar projetos, edite os arquivos:
//   - interiores.ts (residenciais, comerciais, institucionais, outros)
//   - arquitetura.ts (casas, edificios)
// =============================================================================

import { getInterioresComCategoria } from "./interiores";
import { getArquiteturaComCategoria } from "./arquitetura";

// Re-exporta tipos para uso nos componentes
export type {
  InteriorCategory,
  ArchitectureCategory,
  ProjectType,
  ProjectDetails,
} from "./types";

export {
  INTERIOR_CATEGORIES,
  ARCHITECTURE_CATEGORIES,
} from "./types";

// Combina todos os projetos
export const projects = [
  ...getInterioresComCategoria(),
  ...getArquiteturaComCategoria(),
];

// =============================================================================
// FUNÇÕES AUXILIARES (HELPERS)
// =============================================================================

import type { ProjectDetails, InteriorCategory, ArchitectureCategory, ProjectType } from "./types";

/**
 * Busca um projeto pelo ID
 */
export function getProjectById(id: number): ProjectDetails | undefined {
  return projects.find(p => p.id === id);
}

/**
 * Filtra projetos por tipo (Interiores ou Arquitetura)
 */
export function getProjectsByType(type: ProjectType): ProjectDetails[] {
  return projects.filter(p => p.type === type);
}

/**
 * Filtra projetos de interiores por categoria
 */
export function getInteriorProjects(category?: InteriorCategory): ProjectDetails[] {
  const interiorProjects = projects.filter(p => p.type === "Interiores");
  if (category) {
    return interiorProjects.filter(p => p.category === category);
  }
  return interiorProjects;
}

/**
 * Filtra projetos de arquitetura por categoria
 */
export function getArchitectureProjects(category?: ArchitectureCategory): ProjectDetails[] {
  const archProjects = projects.filter(p => p.type === "Arquitetura");
  if (category) {
    return archProjects.filter(p => p.category === category);
  }
  return archProjects;
}

/**
 * Retorna todos os projetos
 */
export function getAllProjects(): ProjectDetails[] {
  return projects;
}
