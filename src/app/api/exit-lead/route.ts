import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import { z } from "zod";

const exitLeadSchema = z.object({
  name: z.string().nullable().optional(),
  phone: z.string(),
  sourcePage: z.string().nullable().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = exitLeadSchema.parse(body);
    const supabase = createServerSupabaseClient();

    const { data, error } = await supabase
      .from("exit_leads")
      .insert({
        name: parsed.name ?? null,
        phone: parsed.phone,
        source_page: parsed.sourcePage ?? null,
        status: "new",
      })
      .select()
      .single();

    if (error) throw new Error(error.message);
    return NextResponse.json({ success: true, id: data.id });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
