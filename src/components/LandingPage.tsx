import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";
import { track } from "@/lib/analytics";

export type LandingContent = {
  eyebrow: string;
  h1: string;
  intro: string;
  bullets: { t: string; d: string }[];
  bodyTitle: string;
  body: string[];
  checklistTitle: string;
  checklist: string[];
  ctaTitle: string;
};

/** Gabarit des pages de service : contenu unique fourni par chaque route. */
export function LandingPage({ content }: { content: LandingContent }) {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-14 md:pt-36">
        <div aria-hidden className="bg-hero-glow absolute inset-0 -z-10" />
        <div className="container-page max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {content.eyebrow}
          </span>
          <h1 className="mt-6 text-[2rem] leading-[1.1] font-semibold sm:text-5xl">{content.h1}</h1>
          <p className="mt-6 text-base text-muted-foreground sm:text-lg">{content.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="hero" size="xl" asChild>
              <Link
                to="/contact"
                onClick={() => track("cta_click", { location: "landing_hero" })}
              >
                Parler de mon projet
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="outlineSoft" size="xl" asChild>
              <Link to="/realisations">Voir nos réalisations</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.bullets.map((b, i) => (
            <Reveal key={b.t} delay={i * 70}>
              <div className="card-premium h-full p-6">
                <h2 className="text-lg font-semibold">{b.t}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface-gradient border-y border-border py-16 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-semibold sm:text-3xl">{content.bodyTitle}</h2>
            <div className="mt-5 space-y-4 text-sm text-muted-foreground sm:text-base">
              {content.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="text-xl font-semibold">{content.checklistTitle}</h3>
            <ul className="mt-5 space-y-3">
              {content.checklist.map((c) => (
                <li key={c} className="flex gap-3 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <span className="text-muted-foreground">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24">
        <div className="container-page grid items-start gap-10 lg:grid-cols-[1fr_1.05fr]">
          <Reveal>
            <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">{content.ctaTitle}</h2>
            <p className="mt-4 text-muted-foreground">
              Parlez-nous de votre activité. Nous vous expliquons ce qui serait le plus adapté, sans
              jargon et sans engagement.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Sans engagement • Réponse rapide</p>
          </Reveal>
          <Reveal delay={100}>
            <LeadForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
