// Supabase Storage configuration (client-side)
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://nmfyyudgfkuzyuklmtfv.supabase.co";
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
export const STORAGE_URL = `${SUPABASE_URL}/storage/v1/object/public/images`;

/**
 * Get full Supabase Storage URL for an image path
 * @param path - relative path like "hero/kasper-hero.webp"
 */
export function storageUrl(path: string): string {
  return `${STORAGE_URL}/${path}`;
}
