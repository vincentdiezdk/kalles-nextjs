"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import BreadcrumbNav from "@/components/breadcrumb-nav";

export default function KontaktPageContent() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim() || undefined,
          service: service || undefined,
          message: message.trim() || undefined,
          sourcePage: "kontakt",
        }),
      });
      setSubmitted(true);
    } catch {
      // Continue
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-20" data-testid="kontakt-page">
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={[{ label: "Forside", href: "/" }, { label: "Kontakt" }]} />
          <div className="text-center mb-12">
            <h1 className="font-sans font-extrabold text-3xl md:text-4xl text-foreground mb-3">
              Kontakt os
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Vi svarer inden 24 timer. Ring direkte for hurtigst svar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="font-sans font-bold text-xl text-foreground mb-6">
                Kontaktoplysninger
              </h2>
              <div className="space-y-5 mb-8">
                <a
                  href="tel:+4525131797"
                  className="flex items-center gap-3 group"
                  data-testid="kontakt-phone"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      25 13 17 97
                    </p>
                    <p className="text-xs text-muted-foreground">Ring direkte til Kasper</p>
                  </div>
                </a>
                <a
                  href="mailto:kontakt@kaspermh.dk"
                  className="flex items-center gap-3 group"
                  data-testid="kontakt-email"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      kontakt@kaspermh.dk
                    </p>
                    <p className="text-xs text-muted-foreground">Send en email</p>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Vibevej 38, 7330 Brande</p>
                    <p className="text-xs text-muted-foreground">Kalles Algerens ApS</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Svar inden 24 timer</p>
                    <p className="text-xs text-muted-foreground">Vi ringer dig op hurtigst muligt</p>
                  </div>
                </div>
              </div>

              {/* Service van image */}
              <div className="rounded-xl overflow-hidden mb-6">
                <img
                  src="https://nmfyyudgfkuzyuklmtfv.supabase.co/storage/v1/object/public/images/kontakt/service-van.webp"
                  alt="Kalles Algerens servicebil"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Nabo-rabat reminder */}
              <div className="border-2 border-dashed border-primary/30 rounded-xl p-5 bg-primary/[0.03]">
                <h3 className="font-sans font-bold text-sm text-foreground mb-1">
                  🏘️ Vidste du det? Nabo-rabat!
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Bestil sammen med din nabo og spar begge penge.
                </p>
                <Link href="/nabo-rabat" className="text-sm font-medium text-primary hover:underline">
                  Læs mere om nabo-rabat →
                </Link>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="bg-card rounded-2xl border border-border p-8 text-center">
                  <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-sans font-bold text-xl text-foreground mb-2">
                    Tak for din henvendelse!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Vi vender tilbage inden 24 timer. Du kan også ringe til os på{" "}
                    <a href="tel:+4525131797" className="text-primary font-medium">
                      25 13 17 97
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-card rounded-2xl border border-border p-6 md:p-8 space-y-5"
                  data-testid="contact-form"
                >
                  <div>
                    <h2 className="font-sans font-bold text-lg text-foreground mb-1">
                      Send en besked
                    </h2>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" /> Vi svarer inden 24 timer — ofte hurtigere
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name" className="text-sm font-medium mb-1.5 block">
                        Navn *
                      </Label>
                      <Input
                        id="contact-name"
                        placeholder="Dit fulde navn"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        data-testid="contact-name-input"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-phone" className="text-sm font-medium mb-1.5 block">
                        Telefon *
                      </Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        placeholder="Dit telefonnummer"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        data-testid="contact-phone-input"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="contact-email" className="text-sm font-medium mb-1.5 block">
                      Email
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="Din email (valgfrit)"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      data-testid="contact-email-input"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-1.5 block">
                      Service
                    </Label>
                    <Select value={service} onValueChange={setService}>
                      <SelectTrigger data-testid="contact-service-select">
                        <SelectValue placeholder="Vælg service (valgfrit)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fliserens">Fliserens</SelectItem>
                        <SelectItem value="tagrens">Tagrens & Tagmaling</SelectItem>
                        <SelectItem value="facaderens">Facaderens</SelectItem>
                        <SelectItem value="terrasse">Træterrasse Rens</SelectItem>
                        <SelectItem value="algebehandling">Algebehandling</SelectItem>
                        <SelectItem value="andet">Andet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="contact-message" className="text-sm font-medium mb-1.5 block">
                      Besked
                    </Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Fortæl os om din opgave (valgfrit)"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      data-testid="contact-message-input"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full font-semibold text-base py-6"
                    disabled={submitting}
                    data-testid="contact-submit"
                  >
                    {submitting ? "Sender..." : "Send besked — få svar inden 24 timer"}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Ingen binding. Uforpligtende tilbud.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-xl text-foreground mb-6">
            Find os
          </h2>
          <div className="rounded-xl overflow-hidden border border-border" data-testid="kontakt-map">
            <iframe
              title="Kalles Algerens placering på kort"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.openstreetmap.org/export/embed.html?bbox=9.098%2C55.939%2C9.138%2C55.959&layer=mapnik&marker=55.949%2C9.118"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            Vibevej 38, 7330 Brande —{" "}
            <a
              href="https://www.openstreetmap.org/?mlat=55.949&mlon=9.118#map=15/55.949/9.118"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Vis større kort
            </a>
          </p>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 md:py-20 bg-muted/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-xl text-foreground mb-6">
            Professionel algerens i Herning, Ikast, Brande og hele Midtjylland
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Hos Kalles Algerens ApS står vi klar til at hjælpe dig. Vi tilbyder professionel{" "}
              <Link href="/fliserens" className="text-primary hover:underline font-medium">algerens</Link>,{" "}
              <Link href="/fliserens" className="text-primary hover:underline font-medium">fliserens</Link> og{" "}
              <Link href="/facaderens" className="text-primary hover:underline font-medium">facaderens</Link> i{" "}
              <Link href="/fliserens-i-herning" className="text-primary hover:underline font-medium">Herning</Link>,{" "}
              <Link href="/fliserens-i-ikast" className="text-primary hover:underline font-medium">Ikast</Link>,{" "}
              <Link href="/fliserens-i-brande" className="text-primary hover:underline font-medium">Brande</Link> og resten af Midtjylland.
            </p>
            <p>
              Vi udfører opgaver i hele Danmark. Desuden giver vi altid et gratis og uforpligtende tilbud, så du kan se, hvad det koster, inden du beslutter dig. Ring til os eller udfyld formularen ovenfor, og vi vender tilbage inden 24 timer.
            </p>
            <p>
              Vores team har mange års erfaring med rengøring af tage, fliser og facader. Vi bruger kun miljøgodkendte produkter og professionelt udstyr for at sikre det bedst mulige resultat.
            </p>
            <p>
              Uanset om du har brug for{" "}
              <Link href="/fliserens-i-herning" className="text-primary hover:underline font-medium">fliserens i Herning</Link>,{" "}
              <Link href="/algebehandling-af-tag" className="text-primary hover:underline font-medium">algebehandling af tag i Brande</Link> eller{" "}
              <Link href="/facaderens" className="text-primary hover:underline font-medium">facaderens i Ikast</Link>, så klarer vi opgaven professionelt og til en fair pris.
            </p>
            <p>
              Vi servicerer både private og erhverv. Alle kunder får samme grundige behandling og personlige service. Du taler altid direkte med Kasper, og vi garanterer kvaliteten af vores arbejde.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
