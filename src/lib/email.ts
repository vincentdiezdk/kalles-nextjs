import { Resend } from "resend";

let _resend: Resend | null = null;
function getResend(): Resend {
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}

const FROM_EMAIL = "Kalles Algerens <noreply@kaspermh.dk>";
const KASPER_EMAIL = "kontakt@kaspermh.dk";

// ─── Service labels ────────────────────────────────────
const serviceLabels: Record<string, string> = {
  fliser: "Fliserens",
  terrasse: "Træterrasse Rens",
  algeFliser: "Algebehandling — Fliser",
  algeTag: "Algebehandling — Tag",
  facade: "Facaderens",
};

// ─── Email to Kasper: new lead from calculator ─────────
export async function sendLeadNotificationToKasper(lead: {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  service: string;
  areaM2?: number | null;
  condition?: string | null;
  estimatedPrice?: number | null;
  sourcePage?: string | null;
}) {
  const svcLabel = serviceLabels[lead.service] || lead.service;
  const priceStr = lead.estimatedPrice
    ? `kr ${lead.estimatedPrice.toLocaleString("da-DK")}`
    : "Ikke beregnet";

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #2d6a2e; color: white; padding: 24px; border-radius: 12px 12px 0 0;">
        <h1 style="margin: 0; font-size: 22px; font-weight: 700;">🔔 Nyt lead fra prisberegneren</h1>
        <p style="margin: 8px 0 0; opacity: 0.85; font-size: 14px;">${svcLabel} — ${priceStr}</p>
      </div>
      <div style="border: 1px solid #e5e7eb; border-top: none; padding: 24px; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          <tr>
            <td style="padding: 10px 0; color: #6b7280; width: 130px; vertical-align: top;">Navn</td>
            <td style="padding: 10px 0; font-weight: 600;">${lead.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #6b7280; vertical-align: top;">Telefon</td>
            <td style="padding: 10px 0; font-weight: 600;">
              <a href="tel:${lead.phone}" style="color: #2d6a2e; text-decoration: none;">${lead.phone}</a>
            </td>
          </tr>
          ${lead.email ? `
          <tr>
            <td style="padding: 10px 0; color: #6b7280; vertical-align: top;">Email</td>
            <td style="padding: 10px 0;">
              <a href="mailto:${lead.email}" style="color: #2d6a2e; text-decoration: none;">${lead.email}</a>
            </td>
          </tr>` : ""}
          ${lead.address ? `
          <tr>
            <td style="padding: 10px 0; color: #6b7280; vertical-align: top;">Adresse</td>
            <td style="padding: 10px 0;">${lead.address}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 10px 0; color: #6b7280; vertical-align: top;">Service</td>
            <td style="padding: 10px 0; font-weight: 600;">${svcLabel}</td>
          </tr>
          ${lead.areaM2 ? `
          <tr>
            <td style="padding: 10px 0; color: #6b7280; vertical-align: top;">Areal</td>
            <td style="padding: 10px 0;">${lead.areaM2} m²</td>
          </tr>` : ""}
          ${lead.condition ? `
          <tr>
            <td style="padding: 10px 0; color: #6b7280; vertical-align: top;">Tilvalg</td>
            <td style="padding: 10px 0;">${lead.condition}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 10px 0; color: #6b7280; vertical-align: top;">Vejl. pris</td>
            <td style="padding: 10px 0; font-weight: 700; font-size: 18px; color: #2d6a2e;">${priceStr}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #6b7280; vertical-align: top;">Kilde</td>
            <td style="padding: 10px 0; font-size: 13px; color: #6b7280;">${lead.sourcePage || "prisberegner"}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e5e7eb; text-align: center;">
          <a href="tel:${lead.phone}" style="display: inline-block; background-color: #2d6a2e; color: white; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px;">
            📞 Ring ${lead.name.split(" ")[0]} op
          </a>
        </div>
      </div>
    </div>
  `;

  try {
    await getResend().emails.send({
      from: FROM_EMAIL,
      to: KASPER_EMAIL,
      subject: `Nyt lead: ${svcLabel} — ${lead.name} (${priceStr})`,
      html,
    });
  } catch (err) {
    console.error("Failed to send lead notification to Kasper:", err);
  }
}

// ─── Confirmation email to customer ────────────────────
export async function sendCustomerConfirmation(lead: {
  name: string;
  email: string;
  service: string;
  areaM2?: number | null;
  estimatedPrice?: number | null;
}) {
  const svcLabel = serviceLabels[lead.service] || lead.service;
  const priceStr = lead.estimatedPrice
    ? `kr ${lead.estimatedPrice.toLocaleString("da-DK")}`
    : null;
  const firstName = lead.name.split(" ")[0];

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #2d6a2e; color: white; padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
        <h1 style="margin: 0; font-size: 22px; font-weight: 700;">Tak for din henvendelse, ${firstName}!</h1>
      </div>
      <div style="border: 1px solid #e5e7eb; border-top: none; padding: 24px; border-radius: 0 0 12px 12px;">
        <p style="font-size: 15px; color: #374151; line-height: 1.6; margin: 0 0 16px;">
          Vi har modtaget din forespørgsel på <strong>${svcLabel}</strong>${lead.areaM2 ? ` (${lead.areaM2} m²)` : ""}.
        </p>

        ${priceStr ? `
        <div style="background-color: #f0fdf0; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; text-align: center; margin-bottom: 16px;">
          <p style="margin: 0 0 4px; font-size: 13px; color: #6b7280;">Vejledende pris inkl. moms</p>
          <p style="margin: 0; font-size: 28px; font-weight: 800; color: #2d6a2e;">${priceStr}</p>
        </div>
        ` : ""}

        <div style="background-color: #f9fafb; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
          <h2 style="margin: 0 0 12px; font-size: 16px; font-weight: 700; color: #1f2937;">Hvad sker der nu?</h2>
          <table style="width: 100%; font-size: 14px; color: #374151;">
            <tr>
              <td style="padding: 6px 0; vertical-align: top; width: 28px;"><strong style="color: #2d6a2e;">1.</strong></td>
              <td style="padding: 6px 0;">Kasper gennemgår din forespørgsel og vender tilbage inden 24 timer.</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; vertical-align: top;"><strong style="color: #2d6a2e;">2.</strong></td>
              <td style="padding: 6px 0;">Du får et endeligt tilbud med præcis pris og dato.</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; vertical-align: top;"><strong style="color: #2d6a2e;">3.</strong></td>
              <td style="padding: 6px 0;">Vi møder op og gør arbejdet — du nyder resultatet.</td>
            </tr>
          </table>
        </div>

        <p style="font-size: 14px; color: #6b7280; line-height: 1.6;">
          Har du spørgsmål i mellemtiden? Ring til Kasper på 
          <a href="tel:+4525131797" style="color: #2d6a2e; text-decoration: none; font-weight: 600;">25 13 17 97</a>
          eller svar på denne mail.
        </p>

        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; text-align: center;">
          <p style="font-size: 13px; color: #9ca3af; margin: 0;">
            Med venlig hilsen<br>
            <strong style="color: #374151;">Kasper — Kalles Algerens</strong><br>
            <a href="https://kaspermh.dk" style="color: #2d6a2e; text-decoration: none;">kaspermh.dk</a>
          </p>
        </div>
      </div>
    </div>
  `;

  try {
    await getResend().emails.send({
      from: FROM_EMAIL,
      replyTo: KASPER_EMAIL,
      to: lead.email,
      subject: `Tak for din forespørgsel på ${svcLabel} — Kalles Algerens`,
      html,
    });
  } catch (err) {
    console.error("Failed to send customer confirmation:", err);
  }
}

// ─── Email to Kasper: contact form ─────────────────────
export async function sendContactNotificationToKasper(contact: {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message?: string;
  sourcePage?: string;
}) {
  const svcLabel = contact.service ? (serviceLabels[contact.service] || contact.service) : "Ikke angivet";

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #2d6a2e; color: white; padding: 24px; border-radius: 12px 12px 0 0;">
        <h1 style="margin: 0; font-size: 22px; font-weight: 700;">📬 Ny henvendelse fra kontaktformular</h1>
      </div>
      <div style="border: 1px solid #e5e7eb; border-top: none; padding: 24px; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          <tr><td style="padding: 10px 0; color: #6b7280; width: 100px;">Navn</td><td style="padding: 10px 0; font-weight: 600;">${contact.name}</td></tr>
          <tr><td style="padding: 10px 0; color: #6b7280;">Telefon</td><td style="padding: 10px 0;"><a href="tel:${contact.phone}" style="color: #2d6a2e; font-weight: 600;">${contact.phone}</a></td></tr>
          ${contact.email ? `<tr><td style="padding: 10px 0; color: #6b7280;">Email</td><td style="padding: 10px 0;"><a href="mailto:${contact.email}" style="color: #2d6a2e;">${contact.email}</a></td></tr>` : ""}
          <tr><td style="padding: 10px 0; color: #6b7280;">Service</td><td style="padding: 10px 0;">${svcLabel}</td></tr>
          ${contact.message ? `<tr><td style="padding: 10px 0; color: #6b7280; vertical-align: top;">Besked</td><td style="padding: 10px 0;">${contact.message}</td></tr>` : ""}
        </table>
        <div style="margin-top: 20px; text-align: center;">
          <a href="tel:${contact.phone}" style="display: inline-block; background-color: #2d6a2e; color: white; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 600;">📞 Ring ${contact.name.split(" ")[0]} op</a>
        </div>
      </div>
    </div>
  `;

  try {
    await getResend().emails.send({
      from: FROM_EMAIL,
      to: KASPER_EMAIL,
      subject: `Ny henvendelse: ${contact.name} — ${svcLabel}`,
      html,
    });
  } catch (err) {
    console.error("Failed to send contact notification to Kasper:", err);
  }
}

// ─── Email to Kasper: exit-intent lead ─────────────────
export async function sendExitLeadNotificationToKasper(lead: {
  name?: string;
  phone: string;
  sourcePage?: string;
}) {
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #ea580c; color: white; padding: 24px; border-radius: 12px 12px 0 0;">
        <h1 style="margin: 0; font-size: 22px; font-weight: 700;">🚪 Exit-popup lead</h1>
        <p style="margin: 8px 0 0; opacity: 0.85; font-size: 14px;">Kunden var ved at forlade siden</p>
      </div>
      <div style="border: 1px solid #e5e7eb; border-top: none; padding: 24px; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          ${lead.name ? `<tr><td style="padding: 10px 0; color: #6b7280; width: 100px;">Navn</td><td style="padding: 10px 0; font-weight: 600;">${lead.name}</td></tr>` : ""}
          <tr><td style="padding: 10px 0; color: #6b7280;">Telefon</td><td style="padding: 10px 0; font-weight: 600;"><a href="tel:${lead.phone}" style="color: #2d6a2e;">${lead.phone}</a></td></tr>
          ${lead.sourcePage ? `<tr><td style="padding: 10px 0; color: #6b7280;">Side</td><td style="padding: 10px 0; font-size: 13px;">${lead.sourcePage}</td></tr>` : ""}
        </table>
        <div style="margin-top: 20px; text-align: center;">
          <a href="tel:${lead.phone}" style="display: inline-block; background-color: #2d6a2e; color: white; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 600;">📞 Ring op</a>
        </div>
      </div>
    </div>
  `;

  try {
    await getResend().emails.send({
      from: FROM_EMAIL,
      to: KASPER_EMAIL,
      subject: `Exit-popup lead: ${lead.name || lead.phone}`,
      html,
    });
  } catch (err) {
    console.error("Failed to send exit lead notification:", err);
  }
}
