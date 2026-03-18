import { createClient } from "@supabase/supabase-js";

// Server-side Supabase client with service role key (for API routes only)
export function createServerSupabaseClient() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  if (!url || !key) {
    console.warn("Supabase credentials not set — storage calls will fail.");
  }
  return createClient(url, key);
}
