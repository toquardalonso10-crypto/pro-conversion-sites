import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/HeroVisual";
import { Magnetic } from "@/components/Magnetic";
import { track } from "@/lib/analytics";

const proofs = [
  "Design professionnel",
  "Optimisé mobile",
  "Optimisé pour Google",
  "Livraison rapide",
  "Accompagnement personnalisé",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div aria-hidden className="bg-hero-glow absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="size-1.5 rounded-full bg-primary" />
            Sites internet pour entreprises locales, artisans et PME
          </span>

          <h1 className="mt-6 text-[2.1rem] leading-[1.08] font-semibold sm:text-5xl lg:text-[3.4rem]">
            Votre site internet doit vous rapporter des clients,{" "}
            <span className="text-gradient">pas seulement être joli.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Nous créons des sites internet professionnels, rapides et conçus pour transformer vos
            visiteurs en demandes de contact et en nouveaux clients.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Magnetic>
              <Button variant="hero" size="xl" asChild>
                <Link to="/" hash="contact" onClick={() => track("cta_click", { location: "hero_primary" })}>
                  Créer mon site
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Magnetic>
            <Button variant="outlineSoft" size="xl" asChild>
              <Link
                to="/"
                hash="realisations"
                onClick={() => track("cta_click", { location: "hero_secondary" })}
              >
                Voir nos réalisations
              </Link>
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2.5 text-sm text-muted-foreground">
            {proofs.map((p) => (
              <li key={p} className="inline-flex items-center gap-2">
                <Check className="size-4 text-primary" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
