import { Gauge, Smartphone, Search, Target, Zap, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const values = [
  {
    icon: Gauge,
    t: "Design premium",
    d: "Un site qui donne immédiatement une image professionnelle de votre entreprise.",
  },
  {
    icon: Smartphone,
    t: "Mobile First",
    d: "Votre site doit être parfaitement utilisable sur smartphone, tablette et ordinateur.",
  },
  {
    icon: Search,
    t: "Optimisation Google",
    d: "Structure technique et contenu pensés pour favoriser votre visibilité sur les moteurs de recherche.",
  },
  {
    icon: Target,
    t: "Conversion",
    d: "Chaque élément du site est pensé pour encourager le visiteur à vous contacter.",
  },
  { icon: Zap, t: "Vitesse", d: "Un site rapide pour offrir une meilleure expérience utilisateur." },
  { icon: ShieldCheck, t: "Sécurité", d: "Site sécurisé et correctement configuré." },
];

export function Value() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Ce qui est inclus"
          title="Tout ce qu'il faut pour transformer votre présence en ligne."
          subtitle="Un site professionnel rassure avant même votre premier appel."
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal as="li" key={v.t} delay={i * 60}>
              <div className="card-premium group h-full p-6 hover:-translate-y-1 hover:border-primary/50">
                <span className="grid size-11 place-items-center rounded-xl bg-primary/12 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <v.icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
