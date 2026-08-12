import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    n: "01",
    t: "Analyse",
    d: "Nous comprenons votre activité, vos clients et vos objectifs.",
  },
  {
    n: "02",
    t: "Design",
    d: "Nous créons une identité visuelle professionnelle adaptée à votre entreprise.",
  },
  {
    n: "03",
    t: "Développement",
    d: "Nous construisons un site rapide, responsive et optimisé.",
  },
  {
    n: "04",
    t: "Mise en ligne",
    d: "Votre site est publié et prêt à recevoir vos premiers visiteurs.",
  },
];

export function Solution() {
  return (
    <section id="solutions" className="bg-surface-gradient border-y border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Notre méthode"
          title="Nous construisons votre site autour de votre activité."
          subtitle="Pas de modèle générique : la structure, les mots et les parcours sont choisis en fonction de vos clients."
        />

        <ol className="relative mt-16 grid gap-8 md:grid-cols-4">
          <li
            aria-hidden
            className="absolute top-6 right-0 left-0 hidden h-px bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 md:block"
          />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 120} className="relative">
              <span className="grid size-12 place-items-center rounded-2xl border border-primary/30 bg-background font-display text-sm font-semibold text-primary shadow-glow">
                {s.n}
              </span>
              <h3 className="mt-5 text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
