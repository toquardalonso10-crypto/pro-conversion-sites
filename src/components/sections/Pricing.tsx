import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { offers } from "@/lib/site";
import { track } from "@/lib/analytics";

export function Pricing() {
  return (
    <section id="tarifs" className="bg-surface-gradient border-y border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Offres"
          title="Trois façons de travailler avec nous."
          subtitle="Le périmètre exact est défini avec vous lors du premier échange. Vous recevez ensuite un devis clair, sans coût caché."
        />

        <ul className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {offers.map((o, i) => (
            <Reveal as="li" key={o.name} delay={i * 100}>
              <div
                className={`card-premium relative flex h-full flex-col p-7 ${
                  o.featured
                    ? "shadow-glow border-primary/60 bg-surface/90 lg:-mt-4 lg:p-8"
                    : "hover:border-primary/40"
                }`}
              >
                {o.featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Offre recommandée
                  </span>
                )}
                <h3 className="font-display text-2xl font-semibold">{o.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{o.pitch}</p>
                <div className="mt-6">
                  <p className="font-display text-2xl font-semibold text-primary">{o.price}</p>
                  <p className="text-xs text-muted-foreground">{o.priceNote}</p>
                </div>
                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {o.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={o.featured ? "hero" : "outlineSoft"}
                  size="lg"
                  className="mt-8 w-full"
                  asChild
                >
                  <Link
                    to="/"
                    hash="contact"
                    onClick={() => track("pricing_click", { offer: o.name })}
                  >
                    {o.cta}
                  </Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
