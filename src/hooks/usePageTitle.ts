import { useEffect } from "react";

const SITE_NAME = "TEAGÁ Arquitetura e Interiores";
// Título definido no index.html, usado na home
const DEFAULT_TITLE = document.title;

/**
 * Define o título da aba (e do resultado no Google) para a página atual.
 * Ao sair da página, volta para o título padrão do index.html.
 */
export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `${title} | ${SITE_NAME}`;

    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title]);
}
