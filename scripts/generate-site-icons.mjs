/**
 * Gera favicon, ícones e a imagem de compartilhamento (Open Graph) a partir da logo.
 *
 * Uso: node scripts/generate-site-icons.mjs
 *
 * Saída em public/: favicon.ico, favicon-48.png, favicon-96.png, icon-192.png,
 * icon-512.png, apple-touch-icon.png e og-image.jpg
 */

import sharp from "sharp";
import { writeFileSync } from "node:fs";

const LOGO = "public/images/logo-th.webp";
const LOGO_HORIZONTAL = "public/images/logo-th-horizontal.webp";
const HERO = "public/images/hero/FOTO001.webp";

const BROWN = { r: 0x63, g: 0x32, b: 0x0a };
const CREAM = { r: 0xf7, g: 0xed, b: 0xe4 };

// Pinta a logo (preta com transparência) com uma cor sólida, mantendo o recorte
async function tint(input, color) {
  const { data, info } = await input.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    data[i] = color.r;
    data[i + 1] = color.g;
    data[i + 2] = color.b;
  }
  return sharp(data, { raw: info }).png().toBuffer();
}

// Monograma "TH": metade esquerda da logo, antes do fio vertical
async function monogram(color) {
  const cropped = await sharp(LOGO)
    .extract({ left: 80, top: 390, width: 325, height: 260 })
    .png()
    .toBuffer();
  const trimmed = await sharp(cropped).trim().png().toBuffer();
  return tint(sharp(trimmed), color);
}

async function icon(size, file) {
  const mark = await sharp(await monogram(CREAM))
    .resize({ width: Math.round(size * 0.72), height: Math.round(size * 0.72), fit: "inside" })
    .png()
    .toBuffer();

  const png = await sharp({
    create: { width: size, height: size, channels: 4, background: { ...BROWN, alpha: 1 } },
  })
    .composite([{ input: mark, gravity: "center" }])
    .png()
    .toBuffer();

  if (file) writeFileSync(file, png);
  return png;
}

// .ico com um PNG de 48px dentro (formato aceito por todos os navegadores atuais)
function writeIco(png, size, file) {
  const header = Buffer.alloc(22);
  header.writeUInt16LE(0, 0); // reservado
  header.writeUInt16LE(1, 2); // tipo: ícone
  header.writeUInt16LE(1, 4); // quantidade de imagens
  header.writeUInt8(size, 6); // largura
  header.writeUInt8(size, 7); // altura
  header.writeUInt8(0, 8); // paleta
  header.writeUInt8(0, 9); // reservado
  header.writeUInt16LE(1, 10); // planos
  header.writeUInt16LE(32, 12); // bits por pixel
  header.writeUInt32LE(png.length, 14); // tamanho dos dados
  header.writeUInt32LE(22, 18); // offset dos dados
  writeFileSync(file, Buffer.concat([header, png]));
}

async function ogImage() {
  const width = 1200;
  const height = 630;

  const logo = await sharp(await tint(sharp(LOGO_HORIZONTAL), { r: 255, g: 255, b: 255 }))
    .resize({ width: 620 })
    .png()
    .toBuffer();

  const overlay = await sharp({
    create: { width, height, channels: 4, background: { r: 42, g: 21, b: 4, alpha: 0.62 } },
  })
    .png()
    .toBuffer();

  await sharp(HERO)
    .resize(width, height, { fit: "cover", position: "centre" })
    .composite([{ input: overlay }, { input: logo, gravity: "center" }])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile("public/og-image.jpg");
}

const png48 = await icon(48, "public/favicon-48.png");
writeIco(png48, 48, "public/favicon.ico");
await icon(96, "public/favicon-96.png");
await icon(192, "public/icon-192.png");
await icon(512, "public/icon-512.png");
await icon(180, "public/apple-touch-icon.png");
await ogImage();

console.log("Ícones e og-image.jpg gerados em public/");
