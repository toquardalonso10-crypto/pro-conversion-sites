import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { SiteMockup } from "@/components/SiteMockup";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const frame = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = frame.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  return (
    <section className="bg-surface-gradient border-y border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Avant / Après"
          title="Voyez la différence."
          subtitle="À gauche, un site qui fait fuir. À droite, un site qui donne envie de vous contacter. Faites glisser."
        />

        <Reveal className="mt-14">
          <div
            ref={frame}
            role="group"
            aria-label="Comparateur avant / après"
            onPointerDown={(e) => {
              dragging.current = true;
              update(e.clientX);
            }}
            onPointerMove={(e) => dragging.current && update(e.clientX)}
            onPointerUp={() => (dragging.current = false)}
            onPointerLeave={() => (dragging.current = false)}
            className="shadow-elegant relative aspect-[4/3] w-full touch-none overflow-hidden rounded-3xl border border-border select-none sm:aspect-[16/10]"
          >
            <div className="absolute inset-0" aria-label="Site internet moderne, premium et orienté conversion">
              <SiteMockup variant="polished" />
            </div>
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
              aria-label="Ancien site internet peu professionnel"
            >
              <SiteMockup variant="dated" />
            </div>

            <span className="absolute top-4 left-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur">
              Avant
            </span>
            <span className="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              Après
            </span>

            <div
              className="absolute inset-y-0 w-px bg-primary"
              style={{ left: `${pos}%` }}
              aria-hidden
            >
              <span className="shadow-glow absolute top-1/2 left-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-primary/60 bg-background">
                <MoveHorizontal className="size-4 text-primary" />
              </span>
            </div>

            <label className="sr-only" htmlFor="ba-range">
              Position du comparateur
            </label>
            <input
              id="ba-range"
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              className="absolute inset-x-0 bottom-4 mx-auto w-2/3 cursor-pointer accent-primary opacity-0 focus-visible:opacity-100"
            />
          </div>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          <Reveal className="card-premium p-5">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase">Avant</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Site ancien, peu professionnel, mauvais affichage mobile. Le visiteur hésite, compare,
              puis appelle un concurrent.
            </p>
          </Reveal>
          <Reveal delay={100} className="card-premium border-primary/40 p-5">
            <h3 className="text-sm font-semibold text-primary uppercase">Après</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Site moderne, premium, responsive et orienté conversion. Le visiteur comprend, se
              rassure et vous contacte.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
