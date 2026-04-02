/**
 * Script de upload para o Cloudinary
 *
 * Pré-requisitos:
 *   1. Crie uma conta gratuita em https://cloudinary.com
 *   2. No dashboard, copie o "Cloud name", "API Key" e "API Secret"
 *   3. Crie um arquivo .env.local na raiz do projeto com:
 *        CLOUDINARY_CLOUD_NAME=seu_cloud_name
 *        CLOUDINARY_API_KEY=sua_api_key
 *        CLOUDINARY_API_SECRET=seu_api_secret
 *   4. Instale a dependência: npm install cloudinary --save-dev
 *   5. Execute: node scripts/upload-to-cloudinary.mjs
 *
 * O script preserva a estrutura de pastas. Exemplo:
 *   public/images/arquitetura/casas/FOTO268.webp
 *   → Cloudinary public_id: images/arquitetura/casas/FOTO268
 */

import { v2 as cloudinary } from "cloudinary";
import { readdir } from "fs/promises";
import { join, extname, relative, dirname } from "path";
import { fileURLToPath } from "url";
import { createReadStream, existsSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "../public");
const IMAGES_DIR = join(PUBLIC_DIR, "images");

// Carrega variáveis de ambiente do .env.local manualmente (sem depender de dotenv)
import { readFile } from "fs/promises";

async function loadEnv() {
  const envPath = join(__dirname, "../.env.local");
  if (!existsSync(envPath)) {
    console.error("❌ Arquivo .env.local não encontrado. Crie-o com as credenciais do Cloudinary.");
    process.exit(1);
  }
  const content = await readFile(envPath, "utf-8");
  for (const line of content.split("\n")) {
    const [key, ...rest] = line.split("=");
    if (key && rest.length) process.env[key.trim()] = rest.join("=").trim();
  }
}

await loadEnv();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function getImageFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true, recursive: true });
  return entries
    .filter((e) => e.isFile() && /\.(webp|jpg|jpeg|png)$/i.test(e.name))
    .map((e) => join(e.parentPath ?? e.path, e.name));
}

async function uploadFile(filePath) {
  // Gera o public_id relativo a /public, ex: images/arquitetura/casas/FOTO268
  const relativePath = relative(PUBLIC_DIR, filePath);
  const ext = extname(filePath);
  const publicId = relativePath.replace(/\\/g, "/").slice(0, -ext.length);

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        public_id: publicId,
        overwrite: false, // não re-sobe se já existir
        resource_type: "image",
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    createReadStream(filePath).pipe(uploadStream);
  });
}

async function main() {
  console.log("🔍 Procurando imagens em public/images/...");
  const files = await getImageFiles(IMAGES_DIR);
  console.log(`📦 ${files.length} imagens encontradas.\n`);

  let success = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const relativePath = relative(PUBLIC_DIR, file).replace(/\\/g, "/");
    process.stdout.write(`[${i + 1}/${files.length}] ${relativePath} ... `);

    try {
      await uploadFile(file);
      console.log("✅");
      success++;
    } catch (err) {
      if (err?.http_code === 400 && err?.message?.includes("already exists")) {
        console.log("⏭️  já existe");
        skipped++;
      } else {
        console.log(`❌ ${err.message}`);
        failed++;
      }
    }
  }

  console.log(`\n🏁 Concluído!`);
  console.log(`   ✅ Enviadas: ${success}`);
  console.log(`   ⏭️  Já existiam: ${skipped}`);
  console.log(`   ❌ Falhas: ${failed}`);
}

main();
