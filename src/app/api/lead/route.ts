import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import { forwardLeadToAdmin } from "@/lib/webhook";
import { z } from "zod";

const leadSchema = z.object({
  service: z.string(),
  areaM2: z.number().nullable().optional(),
  condition: z.string().nullable().optional(),
  estimatedPrice: z.number().nullable().optional(),
  name: z.string(),
  phone: z.string(),
  email: z.string().nullable().optional(),
  address: z.string().nullable().optional(),
  sourcePage: z.string().nullable().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = leadSchema.parse(body);
    const supabase = createServerSupabaseClient();

    const { data, error } = await supabase
      .from("calculator_leads")
      .insert({
        service: parsed.service,
        area_m2: parsed.areaM2 ?? null,
        condition: parsed.condition ?? null,
        estimated_price: parsed.estimatedPrice ?? null,
        name: parsed.name,
        phone: parsed.phone,
        email: parsed.email ?? null,
        address: parsed.address ?? null,
        source_page: parsed.sourcePage ?? null,
        status: "new",
      })
      .select()
      .single();

    if (error) throw new Error(error.message);

    // Forward to admin (non-blocking)
    void forwardLeadToAdmin({
      name: parsed.name,
      email: parsed.email || undefined,
      phone: parsed.phone,
      address: parsed.address || undefined,
      service: parsed.service,
      area_m2: parsed.areaM2,
      estimated_price: parsed.estimatedPrice,
      source: "prisberegner",
    });

    return NextResponse.json({ success: true, estimatedPrice: data.estimated_price, id: data.id });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
