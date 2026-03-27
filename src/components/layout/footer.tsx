import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Clock, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <h3 className="font-sans font-bold text-lg mb-4">Kalles Algerens</h3>
            <p className="text-sm text-background/70 leading-relaxed mb-4">
              Professionel udendørs rengøring i Herning, Ikast, Brande og hele Midtjylland. 
              Miljøgodkendte produkter og op til 10 års garanti.
            </p>
            <p className="text-xs text-background/50">
              Kalles Algerens ApS · CVR 46154894
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Fliserens", href: "/fliserens" },
                { label: "Tagrens & Tagmaling", href: "/tagrens" },
                { label: "Facaderens", href: "/facaderens" },
                { label: "Træterrasse Rens", href: "/traeterrasse-rens" },
                { label: "Algebehandling", href: "/algebehandling-af-tag" },
                { label: "Serviceaftaler", href: "/serviceaftaler" },
                { label: "Nabo-rabat", href: "/nabo-rabat" },
              ].map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                    data-testid={`footer-link-${s.href.slice(1)}`}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-sans font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Priser", href: "/priser" },
                { label: "Om Kalles Algerens", href: "/om" },
                { label: "Kontakt", href: "/kontakt" },
                { label: "Galleri", href: "/galleri" },
                { label: "Service Områder", href: "/service-omraader" },
                { label: "Blog", href: "/blog" },
                { label: "Cookiepolitik", href: "/cookiepolitik" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                    data-testid={`footer-link-${link.href.slice(1)}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans font-bold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+4525131797"
                  className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
                  data-testid="footer-phone"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  25 13 17 97
                </a>
              </li>
              <li>
                <a
                  href="mailto:kontakt@kaspermh.dk"
                  className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
                  data-testid="footer-email"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  kontakt@kaspermh.dk
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Vibevej 38, 7330 Brande</span>
              </li>
            </ul>
            {/* Åbningstider */}
            <div className="mt-5 pt-4 border-t border-background/10">
              <div className="flex items-start gap-2 text-sm text-background/70">
                <Clock className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-background/90">Åbningstider</p>
                  <p>Man–Fre: 07:00–17:00</p>
                  <p>Lørdag: 08:00–14:00</p>
                  <p>Søndag: Lukket</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/kallesalgerens"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors"
                data-testid="footer-social-facebook"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-background/70" />
              </a>
              <a
                href="https://www.instagram.com/kallesalgerens/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors"
                data-testid="footer-social-instagram"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-background/70" />
              </a>
            </div>
          </div>
        </div>

        {/* Miljøstyrelsen badge */}
        <div className="mt-10 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-background/60">
          <ShieldCheck className="h-5 w-5 text-green-400 shrink-0" />
          <span>
            Vi bruger udelukkende{" "}
            <a
              href="https://mst.dk/natur-vand/vand-i-hverdagen/spildevand/regnvand-og-overfladevand/vask-og-rensning-af-tage-facader-og-belaegninger/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-background transition-colors"
              data-testid="footer-miljostyrelsen-link"
            >
              Miljøstyrelsen-godkendte produkter
            </a>
          </span>
        </div>

        <div className="mt-6 pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Kalles Algerens ApS. Alle rettigheder forbeholdes.
          </p>
          <a
            href="https://vincentdiez.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-background/40 hover:text-background/60 transition-colors"
          >
            Lavet af Commercer ApS
          </a>
        </div>
      </div>
    </footer>
  );
}
