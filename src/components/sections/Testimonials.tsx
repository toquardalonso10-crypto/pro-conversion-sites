import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

/**
 * Emplacements de témoignages. Aucun avis n'est inventé : remplacez chaque
 * bloc par un avis client réel (prénom, entreprise, activité, photo, texte).
 * Une intégration Google Reviews peut ensuite alimenter cette section.
 */
const slots = [
  { activity: "Couverture / Zinguerie" },
  { activity: "Restauration" },
  { activity: "Garage automobile" },
];

export function Testimonials() {
  return (
    <section className="bg-surface-gradient border-y border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Avis clients"
          title="Les avis affichés ici seront de vrais avis."
          subtitle="Nous n'inventons pas de témoignages. Ces emplacements accueilleront les retours de nos clients, et pourront être reliés à vos avis Google."
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {slots.map((s, i) => (
            <Reveal as="li" key={s.activity} delay={i * 90}>
              <figure className="card-premium h-full border-dashed p-6">
                <div className="flex items-center gap-1 text-muted-foreground/60" aria-hidden>
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="size-4" />
                  ))}
                </div>
                <Quote className="mt-4 size-5 text-primary/70" aria-hidden />
                <blockquote className="mt-3 text-sm text-muted-foreground italic">
                  « Emplacement réservé au témoignage du client — à compléter avec un avis réel. »
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <span
                    aria-hidden
                    className="grid size-10 place-items-center rounded-full bg-secondary text-xs text-muted-foreground"
                  >
                    Photo
                  </span>
                  <span className="text-sm">
                    <span className="block font-medium">Prénom — Entreprise</span>
                    <span className="text-muted-foreground">{s.activity}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Intégration Google Reviews possible dès que votre fiche établissement compte des avis.
        </p>
      </div>
    </section>
  );
}
