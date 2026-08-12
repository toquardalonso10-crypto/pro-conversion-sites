import { Check } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const items = [
  "Pas besoin de connaissances techniques",
  "Accompagnement personnalisé",
  "Design adapté à votre activité",
  "Site responsive",
  "Optimisation des performances",
  "Communication transparente",
  "Support après livraison",
];

export function Trust() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Réassurance"
          title="Ce sur quoi vous pouvez compter."
          subtitle="Nous préférons annoncer moins et tenir ce qui est écrit. Aucune garantie commerciale inventée."
        />
        <ul className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
          {items.map((t, i) => (
            <Reveal as="li" key={t} delay={i * 50}>
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface/40 px-5 py-4">
                <Check className="size-4 shrink-0 text-primary" aria-hidden />
                <span className="text-sm">{t}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
