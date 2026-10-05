/**
 * Gera public/sitemap.xml com a home, a lista de projetos e cada projeto.
 * Roda automaticamente antes do build (script "prebuild").
 *
 * Uso: node scripts/generate-sitemap.mjs
 */

import { readFileSync, writeFileSync } from "node:fs";

const SITE_URL = "https://www.teagaarquitetura.com.br";
const DATA_FILES = ["src/data/interiores.ts", "src/data/arquitetura.ts"];

// Os ids dos projetos ficam no primeiro nível de cada objeto (4 espaços de recuo)
const projectIds = DATA_FILES.flatMap((file) =>
  [...readFileSync(file, "utf8").matchAll(/^ {4}id:\s*(\d+)/gm)].map((match) => match[1])
);

const paths = ["/", "/projetos", ...projectIds.map((id) => `/projeto/${id}`)];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `  <url><loc>${SITE_URL}${path}</loc></url>`).join("\n")}
</urlset>
`;

writeFileSync("public/sitemap.xml", xml);
console.log(`sitemap.xml gerado com ${paths.length} URLs`);
