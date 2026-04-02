import sharp from "sharp";
import { readdir, unlink } from "fs/promises";
import { join, extname, dirname, basename } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const imagesDir = join(__dirname, "../public/images");

async function getImageFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true, recursive: true });
  return entries
    .filter(e => e.isFile() && /\.(jpg|jpeg|png)$/i.test(e.name))
    .map(e => join(e.parentPath ?? e.path, e.name));
}

async function convert(filePath) {
  const ext = extname(filePath);
  const webpPath = filePath.slice(0, -ext.length) + ".webp";
  await sharp(filePath)
    .webp({ quality: 82 })
    .toFile(webpPath);
  await unlink(filePath);
  return webpPath;
}

const files = await getImageFiles(imagesDir);
console.log(`Convertendo ${files.length} imagens para WebP...`);

let done = 0;
for (const file of files) {
  try {
    await convert(file);
    done++;
    if (done % 20 === 0) console.log(`  ${done}/${files.length}`);
  } catch (e) {
    console.error(`Erro: ${basename(file)} — ${e.message}`);
  }
}

console.log(`\nConcluído! ${done} imagens convertidas.`);
