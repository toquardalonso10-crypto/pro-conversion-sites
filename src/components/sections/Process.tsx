import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const steps = [
  { n: 1, t: "Vous nous expliquez votre activité.", d: "Un échange simple, sans vocabulaire technique." },
  { n: 2, t: "Nous vous proposons la structure et le design.", d: "Vous voyez où vous allez avant que nous construisions." },
  { n: 3, t: "Nous construisons votre site.", d: "Textes, design, technique, optimisation : nous nous en occupons." },
  { n: 4, t: "Vous validez.", d: "Vous demandez les ajustements que vous voulez." },
  { n: 5, t: "Votre site est mis en ligne.", d: "Publié, mesuré, prêt à recevoir vos visiteurs." },
];

export function Process() {
  return (
    <section className="bg-surface-gradient border-y border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Le déroulé"
          title="Simple pour vous. Nous nous occupons du reste."
          subtitle="Vous n'avez pas besoin d'être expert en informatique."
        />
        <ol className="mx-auto mt-14 max-w-3xl space-y-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 80}>
              <div className="card-premium flex items-start gap-5 p-6">
                <span className="font-display grid size-10 shrink-0 place-items-center rounded-full border border-primary/40 text-sm font-semibold text-primary">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{s.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
