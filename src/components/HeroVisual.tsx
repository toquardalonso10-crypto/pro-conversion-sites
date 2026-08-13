import { ArrowUpRight, Check, Gauge } from "lucide-react";

/** Aperçu abstrait d'un site — toujours dans la charte, pas une photo stock. */
export function HeroVisual() {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-primary/15 blur-3xl" />

      <div className="shadow-elegant overflow-hidden rounded-3xl border border-border bg-card">
        <div className="flex items-center gap-1.5 border-b border-border bg-surface/60 px-4 py-3">
          <span className="size-2.5 rounded-full bg-destructive/60" />
          <span className="size-2.5 rounded-full bg-chart-4/70" />
          <span className="size-2.5 rounded-full bg-success/70" />
          <span className="ml-3 h-5 flex-1 rounded-md bg-background/80" />
        </div>

        <div className="space-y-5 p-6 sm:p-8">
          <div className="h-2.5 w-24 rounded-full bg-primary/50" />
          <div className="space-y-2">
            <div className="h-4 w-4/5 rounded-full bg-foreground/85" />
            <div className="h-4 w-3/5 rounded-full bg-foreground/85" />
          </div>
          <div className="h-2 w-full max-w-sm rounded-full bg-muted-foreground/30" />
          <div className="h-2 w-2/3 max-w-xs rounded-full bg-muted-foreground/30" />
          <div className="flex gap-3 pt-2">
            <div className="h-10 w-36 rounded-xl bg-primary" />
            <div className="h-10 w-28 rounded-xl border border-border" />
          </div>
          <div className="grid grid-cols-3 gap-3 pt-4">
            <div className="aspect-square rounded-xl bg-secondary" />
            <div className="aspect-square rounded-xl bg-secondary" />
            <div className="aspect-square rounded-xl bg-secondary" />
          </div>
        </div>
      </div>

      <div className="card-premium absolute -top-5 -left-5 hidden items-center gap-2.5 px-4 py-3 sm:flex">
        <Gauge className="size-4 text-primary" aria-hidden />
        <span className="text-xs font-semibold">Chargement &lt; 1s</span>
      </div>

      <div className="card-premium absolute -right-4 -bottom-5 flex items-center gap-2.5 px-4 py-3 sm:right-8">
        <span className="grid size-6 shrink-0 place-items-center rounded-full bg-success/20 text-success">
          <Check className="size-3.5" aria-hidden />
        </span>
        <span className="text-xs font-semibold">Optimisé pour Google</span>
        <ArrowUpRight className="size-3.5 text-muted-foreground" aria-hidden />
      </div>
    </div>
  );
}
