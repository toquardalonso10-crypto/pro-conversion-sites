import { Link, createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { offers, pricingFaq } from "@/lib/site";
import { track } from "@/lib/analytics";

const title = "Tarifs | Kliviq — Site à 500 € ou projet sur mesure";
const description =
  "Un site internet Classique à 500 €, ou un projet Sur-Mesure avec devis personnalisé. Le détail complet de nos offres, sans coût caché.";

export const Route = createFileRoute("/tarifs")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/tarifs" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/tarifs" }],
  }),
  component: TarifsPage,
});

function TarifsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-14 md:pt-36">
        <div aria-hidden className="bg-hero-glow absolute inset-0 -z-10" />
        <div className="container-page max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Tarifs
          </span>
          <h1 className="mx-auto mt-6 max-w-2xl text-[2rem] leading-[1.1] font-semibold sm:text-5xl">
            Un prix fixe pour démarrer, un devis clair pour aller plus loin.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Deux façons de travailler avec nous. Dans les deux cas, vous savez exactement ce que vous
            payez avant de commencer.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container-page">
          <ul className="mx-auto grid max-w-4xl items-start gap-6 md:grid-cols-2">
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
                  <h2 className="font-display text-2xl font-semibold">{o.name}</h2>
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
                    <Link to="/contact" onClick={() => track("pricing_click", { offer: o.name, location: "tarifs_page" })}>
                      {o.cta}
                    </Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface-gradient border-y border-border py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Questions fréquentes"
            title="Sur les tarifs, précisément."
            subtitle="Si votre question n'y est pas, posez-la directement : nous répondons simplement."
          />
          <Reveal className="mx-auto mt-12 max-w-3xl">
            <Accordion type="single" collapsible className="space-y-3">
              {pricingFaq.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="card-premium border-b px-5 data-[state=open]:border-primary/40"
                >
                  <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl text-2xl font-semibold sm:text-3xl">
            Pas encore sûr de l'offre qu'il vous faut ?
          </h2>
          <p className="max-w-md text-muted-foreground">
            Parlez-nous de votre activité, nous vous orientons sans détour vers ce qui est réellement
            adapté.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact" onClick={() => track("cta_click", { location: "tarifs_final" })}>
              Parler de mon projet
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
