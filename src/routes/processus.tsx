import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { track } from "@/lib/analytics";

const title = "Notre processus | Web Boost — Comment nous construisons votre site";
const description =
  "De l'échange initial à la mise en ligne : découvrez étape par étape comment Web Boost construit votre site internet, sans jargon technique.";

export const Route = createFileRoute("/processus")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/processus" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/processus" }],
  }),
  component: ProcessusPage,
});

const steps = [
  {
    n: 1,
    t: "Vous nous expliquez votre activité.",
    d: "Un échange de 20 à 30 minutes, par téléphone ou visio, sans vocabulaire technique. Nous voulons comprendre vos clients, vos concurrents et ce qui vous distingue avant de parler design.",
  },
  {
    n: 2,
    t: "Nous vous proposons la structure et le design.",
    d: "Vous recevez une proposition concrète : les pages prévues, l'organisation du contenu et une direction visuelle. Vous voyez où nous allons avant que nous construisions quoi que ce soit.",
  },
  {
    n: 3,
    t: "Nous construisons votre site.",
    d: "Textes, design, technique, optimisation pour Google : nous nous occupons de tout. Si vous avez déjà des photos ou des textes, nous les utilisons ; sinon, nous les produisons à partir de nos échanges.",
  },
  {
    n: 4,
    t: "Vous validez, nous ajustons.",
    d: "Vous parcourez le site avant sa mise en ligne et demandez les changements que vous voulez. Nous n'appelons pas un projet terminé tant que vous n'êtes pas à l'aise avec le résultat.",
  },
  {
    n: 5,
    t: "Votre site est mis en ligne.",
    d: "Publication, vérifications techniques, connexion à votre nom de domaine si besoin. Votre site est prêt à recevoir des visiteurs et nous restons disponibles pour les ajustements qui suivent.",
  },
];

function ProcessusPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-14 md:pt-36">
        <div aria-hidden className="bg-hero-glow absolute inset-0 -z-10" />
        <div className="container-page max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Notre processus
          </span>
          <h1 className="mt-6 text-[2rem] leading-[1.1] font-semibold sm:text-5xl">
            Simple pour vous. Nous nous occupons du reste.
          </h1>
          <p className="mt-6 text-base text-muted-foreground sm:text-lg">
            Vous n'avez pas besoin d'être expert en informatique pour obtenir un site à la hauteur de
            votre activité. Voici exactement comment nous procédons, étape par étape.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page">
          <ol className="mx-auto max-w-3xl space-y-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 80}>
                <div className="card-premium flex items-start gap-5 p-6 sm:p-7">
                  <span className="font-display grid size-11 shrink-0 place-items-center rounded-full border border-primary/40 text-base font-semibold text-primary">
                    {s.n}
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold sm:text-xl">{s.t}</h2>
                    <p className="mt-2 text-sm text-muted-foreground sm:text-base">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-surface-gradient border-y border-border py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Délais"
            title="Combien de temps ça prend ?"
            subtitle="Le site Classique se construit en quelques jours une fois le contenu réuni. Un projet Sur-Mesure dépend de son périmètre : nous vous donnons un calendrier précis dès le devis, et nous nous y tenons."
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl text-2xl font-semibold sm:text-3xl">
            Prêt à en discuter pour votre activité ?
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" onClick={() => track("cta_click", { location: "processus_cta" })}>
                Parler de mon projet
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="outlineSoft" size="xl" asChild>
              <Link to="/tarifs">Voir les tarifs</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
