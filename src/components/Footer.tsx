import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";
import { track } from "@/lib/analytics";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/30">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">
            {site.tagline} Nous construisons des sites pensés pour transformer vos visiteurs en
            prospects.
          </p>
        </div>

        <nav aria-label="Navigation" className="space-y-3 text-sm">
          <h2 className="font-display text-sm font-semibold">Navigation</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-foreground">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/" hash="realisations" className="hover:text-foreground">
                Nos réalisations
              </Link>
            </li>
            <li>
              <Link to="/" hash="solutions" className="hover:text-foreground">
                Solutions
              </Link>
            </li>
            <li>
              <Link to="/" hash="tarifs" className="hover:text-foreground">
                Tarifs
              </Link>
            </li>
            <li>
              <Link to="/" hash="faq" className="hover:text-foreground">
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Services" className="space-y-3 text-sm">
          <h2 className="font-display text-sm font-semibold">Services</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link to="/creation-site-internet" className="hover:text-foreground">
                Création de site internet
              </Link>
            </li>
            <li>
              <Link to="/site-internet-artisan" className="hover:text-foreground">
                Site internet artisan
              </Link>
            </li>
            <li>
              <Link to="/site-internet-couvreur" className="hover:text-foreground">
                Site internet couvreur
              </Link>
            </li>
            <li>
              <Link to="/site-internet-plombier" className="hover:text-foreground">
                Site internet plombier
              </Link>
            </li>
            <li>
              <Link to="/site-internet-electricien" className="hover:text-foreground">
                Site internet électricien
              </Link>
            </li>
            <li>
              <Link to="/site-internet-pme" className="hover:text-foreground">
                Site internet PME
              </Link>
            </li>
          </ul>
        </nav>

        <div className="space-y-3 text-sm">
          <h2 className="font-display text-sm font-semibold">Contact</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                onClick={() => track("phone_click", { location: "footer" })}
                className="hover:text-foreground"
              >
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                onClick={() => track("email_click", { location: "footer" })}
                className="hover:text-foreground"
              >
                {site.email}
              </a>
            </li>
            <li>{site.city}</li>
          </ul>
          <ul className="space-y-2 pt-2 text-muted-foreground">
            <li>
              <Link to="/mentions-legales" className="hover:text-foreground">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link to="/politique-de-confidentialite" className="hover:text-foreground">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page flex flex-col gap-2 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}. Création de sites internet professionnels.</p>
        <p>Conçu pour la performance et la conversion.</p>
      </div>
    </footer>
  );
}
