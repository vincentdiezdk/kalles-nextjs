import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().nullable().optional(),
  service: z.string().nullable().optional(),
  message: z.string().nullable().optional(),
  sourcePage: z.string().nullable().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.parse(body);
    const supabase = createServerSupabaseClient();

    const { data, error } = await supabase
      .from("contact_submissions")
      .insert({
        name: parsed.name,
        phone: parsed.phone,
        email: parsed.email ?? null,
        service: parsed.service ?? null,
        message: parsed.message ?? null,
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
