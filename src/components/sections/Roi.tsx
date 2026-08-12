import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { track } from "@/lib/analytics";

const euro = (n: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 })
    .format(n);

export function Roi() {
  const [visitors, setVisitors] = useState(400);
  const [rateBefore, setRateBefore] = useState(1);
  const [rateAfter, setRateAfter] = useState(3);
  const [value, setValue] = useState(800);

  const result = useMemo(() => {
    const leadsBefore = (visitors * rateBefore) / 100;
    const leadsAfter = (visitors * rateAfter) / 100;
    const diff = Math.max(0, leadsAfter - leadsBefore);
    return {
      leadsBefore,
      leadsAfter,
      diff,
      monthly: diff * value,
      yearly: diff * value * 12,
    };
  }, [visitors, rateBefore, rateAfter, value]);

  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Investissement, pas dépense"
          title="Combien vous coûte réellement un mauvais site ?"
          subtitle="Un site qui laisse filer quelques prospects chaque mois peut coûter plus cher que le prix d'un bon site. Faites l'exercice avec vos propres chiffres."
        />

        <Reveal className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="card-premium space-y-8 p-7">
            <Field
              label="Visiteurs par mois"
              value={`${visitors}`}
              onCommit={() => track("roi_calculator_use", { visitors })}
            >
              <Slider
                value={[visitors]}
                min={50}
                max={5000}
                step={50}
                onValueChange={(v) => setVisitors(v[0] ?? 0)}
              />
            </Field>
            <Field label="Taux de contact actuel" value={`${rateBefore} %`}>
              <Slider
                value={[rateBefore]}
                min={0}
                max={10}
                step={0.5}
                onValueChange={(v) => setRateBefore(v[0] ?? 0)}
              />
            </Field>
            <Field label="Taux de contact visé" value={`${rateAfter} %`}>
              <Slider
                value={[rateAfter]}
                min={0}
                max={15}
                step={0.5}
                onValueChange={(v) => setRateAfter(v[0] ?? 0)}
              />
            </Field>
            <Field label="Valeur moyenne d'un client" value={euro(value)}>
              <Slider
                value={[value]}
                min={100}
                max={20000}
                step={100}
                onValueChange={(v) => setValue(v[0] ?? 0)}
              />
            </Field>
          </div>

          <div className="card-premium shadow-glow flex flex-col justify-between border-primary/40 p-7">
            <div className="space-y-5">
              <Row label="Demandes de contact aujourd'hui" value={result.leadsBefore.toFixed(1)} />
              <Row label="Demandes de contact possibles" value={result.leadsAfter.toFixed(1)} />
              <Row label="Demandes supplémentaires / mois" value={result.diff.toFixed(1)} accent />
              <div className="border-t border-border pt-5">
                <p className="text-sm text-muted-foreground">
                  Valeur commerciale potentielle associée
                </p>
                <p className="font-display mt-1 text-3xl font-semibold text-primary">
                  {euro(result.monthly)} <span className="text-base font-normal">/ mois</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  soit environ {euro(result.yearly)} sur douze mois
                </p>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-xs text-muted-foreground">
                Simulation basée sur vos hypothèses. Il s'agit d'un ordre de grandeur, pas d'une
                promesse de résultat : aucun chiffre d'affaires ne peut être garanti.
              </p>
              <Button variant="hero" size="lg" className="mt-5 w-full" asChild>
                <Link to="/" hash="contact" onClick={() => track("cta_click", { location: "roi" })}>
                  Voir ce que ça donnerait pour mon entreprise
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  children,
  onCommit,
}: {
  label: string;
  value: string;
  children: React.ReactNode;
  onCommit?: () => void;
}) {
  return (
    <div onPointerUp={onCommit}>
      <div className="flex items-center justify-between">
        <Label className="text-sm text-muted-foreground">{label}</Label>
        <span className="font-display text-sm font-semibold">{value}</span>
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span
        className={`font-display text-xl font-semibold ${accent ? "text-primary" : "text-foreground"}`}
      >
        {value}
      </span>
    </div>
  );
}
