const ADMIN_WEBHOOK_URL = process.env.ADMIN_WEBHOOK_URL;
const ADMIN_WEBHOOK_SECRET = process.env.ADMIN_WEBHOOK_SECRET;

export async function forwardLeadToAdmin(lead: {
  name: string;
  email?: string;
  phone: string;
  address?: string;
  service?: string;
  area_m2?: number | null;
  estimated_price?: number | null;
  message?: string;
  source: string; // "prisberegner" | "kontaktformular" | "exit_intent"
}) {
  if (!ADMIN_WEBHOOK_URL || !ADMIN_WEBHOOK_SECRET) {
    console.warn(
      "[Webhook] ADMIN_WEBHOOK_URL eller ADMIN_WEBHOOK_SECRET ikke sat — skipper forward til admin"
    );
    return;
  }

  try {
    const response = await fetch(ADMIN_WEBHOOK_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ADMIN_WEBHOOK_SECRET}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: lead.name,
        email: lead.email || "",
        phone: lead.phone,
        address: lead.address || "",
        service: lead.service || "",
        area_m2: lead.area_m2 ?? null,
        estimated_price: lead.estimated_price ?? null,
        message: lead.message || "",
        source: lead.source,
      }),
    });

    if (!response.ok) {
      console.error(
        "[Webhook] Admin forward failed:",
        response.status,
        await response.text()
      );
    } else {
      console.log("[Webhook] Lead forwarded to admin:", lead.name);
    }
  } catch (err) {
    console.error("[Webhook] Admin forward error:", err);
  }
}
