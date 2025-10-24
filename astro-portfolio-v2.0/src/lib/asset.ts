/**
 * Convert a Storyblok asset URL to WebP format.
 * Works for PNG, JPG, etc. without needing extra config.
 */
export function sbWebp(filename: string, quality = 100): string {
  if (!filename) return "";
  // Remove any existing domain (just in case)
  const cleanPath = filename.replace(/^https?:\/\/[^/]+/i, "");
  return `https://img2.storyblok.com/0x0${cleanPath}?format=webp&quality=${quality}`;
}
