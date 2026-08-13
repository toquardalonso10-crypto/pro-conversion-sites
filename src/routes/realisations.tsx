import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { ProjectMockup } from "@/components/ProjectMockup";
import { projects } from "@/lib/site";
import { track } from "@/lib/analytics";

const title = "Réalisations | Web Boost — Sites internet livrés à nos clients";
const description =
  "Des sites conçus pour un objectif commercial précis : faire venir, rassurer, puis déclencher le contact. Découvrez nos réalisations par secteur.";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/realisations" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/realisations" }],
  }),
  component: RealisationsPage,
});

function RealisationsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-14 md:pt-36">
        <div aria-hidden className="bg-hero-glow absolute inset-0 -z-10" />
        <div className="container-page max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Réalisations
          </span>
          <h1 className="mt-6 text-[2rem] leading-[1.1] font-semibold sm:text-5xl">
            Des sites qui donnent envie de vous contacter.
          </h1>
          <p className="mt-6 text-base text-muted-foreground sm:text-lg">
            Chaque projet part d'un objectif commercial clair : faire venir, rassurer, puis déclencher
            le contact. Voici comment nous l'avons construit, secteur par secteur.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container-page space-y-14">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <article className="card-premium grid gap-0 overflow-hidden p-0 lg:grid-cols-2">
                <div className="aspect-[4/3] w-full lg:aspect-auto lg:h-full">
                  <ProjectMockup category={p.category} />
                </div>
                <div className="p-7 sm:p-9">
                  <p className="text-xs font-medium tracking-wide text-primary uppercase">
                    {p.sector}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">{p.company}</h2>
                  <dl className="mt-6 space-y-5 text-sm">
                    <div>
                      <dt className="font-semibold text-foreground/90">Objectif</dt>
                      <dd className="mt-1 text-muted-foreground">{p.goal}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground/90">Résultat visé</dt>
                      <dd className="mt-1 text-muted-foreground">{p.outcome}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground/90">Ce que nous avons mis en place</dt>
                      <dd className="mt-2">
                        <ul className="space-y-2">
                          {p.highlights.map((h) => (
                            <li key={h} className="flex gap-2.5 text-muted-foreground">
                              <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="container-page mt-8 text-center text-xs text-muted-foreground">
          Projets illustratifs de notre approche. Aucun chiffre de résultat n'est affiché tant qu'il
          n'est pas mesuré chez le client.
        </p>
      </section>

      <section className="bg-surface-gradient border-y border-border py-16 md:py-24">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl text-2xl font-semibold sm:text-3xl">
            Votre secteur n'est pas listé ici ?
          </h2>
          <p className="max-w-md text-muted-foreground">
            Nous travaillons avec tous types d'artisans, commerces et entreprises locales. Parlez-nous
            de votre activité.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact" onClick={() => track("cta_click", { location: "realisations_final" })}>
              Parler de mon projet
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
