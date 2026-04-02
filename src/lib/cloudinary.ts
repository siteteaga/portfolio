/**
 * Helper para gerar URLs do Cloudinary.
 *
 * Uso: cld("/images/arquitetura/casas/FOTO268.webp")
 * → "https://res.cloudinary.com/{cloud}/image/upload/images/arquitetura/casas/FOTO268.webp"
 *
 * Configure VITE_CLOUDINARY_CLOUD_NAME no arquivo .env.local.
 */

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

export function cld(path: string): string {
  if (!CLOUD_NAME) {
    // fallback local durante desenvolvimento sem .env.local
    return path;
  }
  // Remove barra inicial se houver, pois já inclui no template
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${cleanPath}`;
}
