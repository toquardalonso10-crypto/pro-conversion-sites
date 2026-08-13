import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Gauge, KeyRound, Layers, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { track } from "@/lib/analytics";

const title = "L'agence | Web Boost — Sites internet pensés pour convertir";
const description =
  "Web Boost conçoit des sites internet pour artisans, commerces et entreprises locales. Notre méthode, nos exigences, et pourquoi nous refusons les gabarits recyclés et les faux résultats.";

export const Route = createFileRoute("/agence")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/agence" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/agence" }],
  }),
  component: AgencePage,
});

const principles = [
  {
    icon: Layers,
    t: "Aucun gabarit recyclé",
    d: "Chaque site est structuré autour de votre activité réelle, pas d'un modèle générique appliqué à toutes les entreprises qui passent par ici.",
  },
  {
    icon: ShieldCheck,
    t: "Aucun résultat inventé",
    d: "Pas de faux chiffres, pas de faux avis, pas de promesse de position Google. Ce que nous affichons est vérifiable, ou nous ne l'affichons pas.",
  },
  {
    icon: Gauge,
    t: "La vitesse comme exigence",
    d: "Un site lent perd des clients avant même d'avoir eu la chance de les convaincre. Nous la traitons comme une fonctionnalité, pas comme une option.",
  },
  {
    icon: KeyRound,
    t: "Vous restez propriétaire",
    d: "Votre nom de domaine, votre contenu, votre code : rien ne reste enfermé chez nous si vous décidez un jour de partir.",
  },
];

function AgencePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-14 md:pt-36">
        <div aria-hidden className="bg-hero-glow absolute inset-0 -z-10" />
        <div className="container-page max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            L'agence
          </span>
          <h1 className="mt-6 text-[2rem] leading-[1.1] font-semibold sm:text-5xl">
            Un site internet est un outil commercial. Nous le construisons comme tel.
          </h1>
          <p className="mt-6 text-base text-muted-foreground sm:text-lg">
            Web Boost conçoit des sites pour les artisans, les commerces et les entreprises locales qui
            veulent un outil qui travaille pour eux, pas une simple carte de visite numérique.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-4 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.t} delay={i * 70}>
              <div className="card-premium h-full p-6">
                <p.icon className="size-5 text-primary" aria-hidden />
                <h2 className="mt-4 text-lg font-semibold">{p.t}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface-gradient border-y border-border py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="Notre méthode" title="Comprendre votre métier avant de dessiner la moindre page." align="left" />
          <div className="mt-8 space-y-5 text-sm text-muted-foreground sm:text-base">
            <p>
              Nous travaillons avec des artisans, des commerces et des entreprises locales de tous
              secteurs — plombiers, couvreurs, élagueurs, restaurateurs, boutiques, PME. Chaque métier
              a sa propre logique d'achat : l'urgence ne se traite pas comme un projet de rénovation,
              une boutique ne se vend pas comme un cabinet B2B. Nous prenons le temps de comprendre
              cette logique avant de dessiner la moindre page.
            </p>
            <p>
              Un site qui plaît à son propriétaire mais que ses visiteurs ne comprennent pas en
              quelques secondes ne sert à rien. Nous concevons donc chaque page autour d'une question
              simple : qu'est-ce que la personne qui arrive ici doit comprendre, et que doit-elle
              faire ensuite ?
            </p>
            <p>
              Cette rigueur se retrouve dans le prix : un site Classique à 500 € pour démarrer
              proprement, un projet Sur-Mesure quand votre activité a besoin de plus. Dans les deux
              cas, vous savez ce que vous payez et pourquoi avant de commencer.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl text-2xl font-semibold sm:text-3xl">
            Voyez comment nous travaillons, concrètement.
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="hero" size="xl" asChild>
              <Link to="/processus" onClick={() => track("cta_click", { location: "agence_process" })}>
                Découvrir notre processus
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="outlineSoft" size="xl" asChild>
              <Link to="/realisations">Voir nos réalisations</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
