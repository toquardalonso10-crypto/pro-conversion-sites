import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Accueil", to: "/", hash: "" },
  { label: "Réalisations", to: "/realisations", hash: "" },
  { label: "Tarifs", to: "/tarifs", hash: "" },
  { label: "Agence", to: "/agence", hash: "" },
  { label: "FAQ", to: "/", hash: "faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-18">
        <Link to="/" aria-label="Accueil" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact" onClick={() => track("cta_click", { location: "header" })}>
              Parler de mon projet
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button variant="hero" size="sm" asChild>
            <Link to="/contact" onClick={() => track("cta_click", { location: "header_mobile" })}>
              Mon projet
            </Link>
          </Button>
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-lg border border-border bg-surface/50"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="container-page flex flex-col py-3" aria-label="Navigation mobile">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                hash={item.hash}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base text-foreground/90 transition-colors hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
