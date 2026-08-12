import { AlertTriangle } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const problems = [
  {
    t: "Un site qui a vieilli",
    d: "Il ne ressemble plus à votre entreprise d'aujourd'hui, et vos clients le remarquent.",
  },
  {
    t: "Illisible sur téléphone",
    d: "La majorité de vos visiteurs viennent d'un smartphone. S'ils zooment, ils partent.",
  },
  { t: "Trop lent", d: "Quelques secondes d'attente suffisent pour perdre un visiteur pressé." },
  {
    t: "Invisible sur Google",
    d: "Vos prospects cherchent votre métier près de chez eux, et trouvent vos concurrents.",
  },
  { t: "Aucune demande de devis", d: "Le site existe, mais il ne déclenche jamais un appel ou un message." },
  {
    t: "Une image en dessous de la réalité",
    d: "Votre travail est sérieux. Votre site doit le montrer avant votre premier appel.",
  },
];

export function Problem() {
  return (
    <section id="probleme" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Le constat"
          title="Votre entreprise mérite mieux qu'un site qui dort sur Internet."
          subtitle="Votre prochain client cherche probablement votre entreprise sur Google. Que va-t-il découvrir ?"
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal as="li" key={p.t} delay={i * 60}>
              <div className="card-premium h-full p-6 hover:border-destructive/40">
                <AlertTriangle className="size-5 text-destructive" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120} className="mt-12">
          <blockquote className="mx-auto max-w-3xl rounded-3xl border border-primary/25 bg-primary/8 p-8 text-center text-lg font-medium sm:text-xl">
            « Un client compare votre entreprise à vos concurrents en quelques secondes. Votre site
            peut faire la différence entre un appel… et un client perdu. »
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
