import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

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

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Kalles Algerens ApS. Alle rettigheder forbeholdes.
          </p>
          <a
            href="https://www.perplexity.ai/computer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-background/40 hover:text-background/60 transition-colors"
          >
            Created with Perplexity Computer
          </a>
        </div>
      </div>
    </footer>
  );
}
