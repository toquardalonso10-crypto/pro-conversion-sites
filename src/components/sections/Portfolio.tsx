import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { projects, type Project } from "@/lib/site";
import { track } from "@/lib/analytics";

const filters = ["Tous", "Artisans", "Commerce", "Services", "Restaurants", "PME"] as const;

export function Portfolio() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Tous");
  const [open, setOpen] = useState<Project | null>(null);

  const list = filter === "Tous" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="realisations" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Réalisations"
          title="Des sites qui donnent envie de vous contacter."
          subtitle="Chaque projet part d'un objectif commercial clair : faire venir, rassurer, puis déclencher le contact."
        />

        <div
          role="tablist"
          aria-label="Filtrer les réalisations"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-surface/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {list.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 80}>
              <button
                type="button"
                onClick={() => {
                  setOpen(p);
                  track("portfolio_view", { project: p.slug });
                }}
                className="card-premium group block w-full overflow-hidden p-0 text-left hover:-translate-y-1 hover:border-primary/50"
              >
                <img
                  src={p.image}
                  alt={`Mockup du site internet réalisé pour une ${p.company.toLowerCase()}`}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="p-6">
                  <p className="text-xs font-medium tracking-wide text-primary uppercase">
                    {p.sector}
                  </p>
                  <h3 className="mt-2 flex items-center gap-2 text-xl font-semibold">
                    {p.company}
                    <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    <span className="text-foreground/80">Objectif : </span>
                    {p.goal}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </ul>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Projets illustratifs de notre approche. Aucun chiffre de résultat n'est affiché tant qu'il
          n'est pas mesuré chez le client.
        </p>
      </div>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
          {open && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">{open.company}</DialogTitle>
                <DialogDescription>{open.sector}</DialogDescription>
              </DialogHeader>
              <img
                src={open.image}
                alt={`Aperçu du site réalisé pour une ${open.company.toLowerCase()}`}
                loading="lazy"
                width={1200}
                height={900}
                className="w-full rounded-xl border border-border"
              />
              <dl className="mt-2 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold">Objectif</dt>
                  <dd className="text-muted-foreground">{open.goal}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Résultat visé</dt>
                  <dd className="text-muted-foreground">{open.outcome}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Ce que nous avons mis en place</dt>
                  <dd>
                    <ul className="mt-1 space-y-1 text-muted-foreground">
                      {open.highlights.map((h) => (
                        <li key={h}>— {h}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
