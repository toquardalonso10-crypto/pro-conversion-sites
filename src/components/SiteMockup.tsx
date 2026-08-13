/**
 * Aperçu abstrait d'un site, construit en CSS — jamais une capture avec du
 * faux texte. "dated" imite délibérément les codes d'un vieux site
 * (couleurs par défaut, angles vifs, surcharge) pour le comparateur avant/après.
 */
export function SiteMockup({ variant = "polished" }: { variant?: "polished" | "dated" }) {
  if (variant === "dated") {
    return (
      <div className="size-full overflow-hidden bg-white">
        <div className="flex items-center justify-between border-b-4 border-slate-200 bg-slate-100 px-4 py-3">
          <div className="h-3 w-20 bg-slate-400" />
          <div className="flex gap-2">
            <div className="h-2 w-8 bg-slate-300" />
            <div className="h-2 w-8 bg-slate-300" />
            <div className="h-2 w-8 bg-slate-300" />
            <div className="h-2 w-8 bg-slate-300" />
          </div>
        </div>
        <div className="space-y-2.5 p-5">
          <div className="h-3.5 w-2/3 bg-slate-700" />
          <div className="h-2 w-full bg-slate-300" />
          <div className="h-2 w-11/12 bg-slate-300" />
          <div className="h-2 w-4/6 bg-slate-300" />
          <div className="mt-3 h-7 w-24 bg-blue-700" />
          <div className="mt-5 grid grid-cols-3 gap-1.5">
            <div className="h-12 bg-slate-200" />
            <div className="h-12 bg-slate-200" />
            <div className="h-12 bg-slate-200" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="size-full overflow-hidden bg-card">
      <div className="flex items-center gap-1.5 border-b border-border bg-surface/60 px-4 py-3">
        <span className="size-2 rounded-full bg-destructive/50" />
        <span className="size-2 rounded-full bg-chart-4/60" />
        <span className="size-2 rounded-full bg-success/60" />
      </div>
      <div className="space-y-3 p-5">
        <div className="h-2 w-16 rounded-full bg-primary/50" />
        <div className="space-y-1.5">
          <div className="h-3.5 w-3/4 rounded-full bg-foreground/85" />
          <div className="h-3.5 w-1/2 rounded-full bg-foreground/85" />
        </div>
        <div className="h-1.5 w-full max-w-[220px] rounded-full bg-muted-foreground/25" />
        <div className="flex gap-2 pt-1">
          <div className="h-7 w-24 rounded-lg bg-primary" />
          <div className="h-7 w-20 rounded-lg border border-border" />
        </div>
      </div>
    </div>
  );
}
