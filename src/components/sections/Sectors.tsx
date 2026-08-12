import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { sectors } from "@/lib/site";

export function Sectors() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Pour qui"
          title="Votre métier mérite un site pensé pour vos clients."
          subtitle="Nous travaillons avec les entreprises qui vivent de leurs clients locaux : on parle de devis, d'appels et de rendez-vous, pas de jargon."
        />
        <Reveal className="mt-12 flex flex-wrap justify-center gap-2.5">
          {sectors.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-surface/50 px-4 py-2 text-sm text-foreground/85 transition-colors hover:border-primary/50 hover:text-foreground"
            >
              {s}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
