import { Building2, Home, UtensilsCrossed, Wrench, type LucideIcon } from "lucide-react";
import type { ProjectCategory } from "@/lib/site";

const iconByCategory: Record<ProjectCategory, LucideIcon> = {
  Artisans: Home,
  Restaurants: UtensilsCrossed,
  Services: Wrench,
  PME: Building2,
  Commerce: Building2,
};

/** Aperçu abstrait d'un projet, construit en CSS — jamais une capture avec du faux texte. */
export function ProjectMockup({ category }: { category: ProjectCategory }) {
  const Icon = iconByCategory[category];
  return (
    <div className="flex size-full flex-col overflow-hidden bg-card">
      <div className="flex items-center gap-1.5 border-b border-border bg-surface/60 px-4 py-3">
        <span className="size-2 rounded-full bg-destructive/50" />
        <span className="size-2 rounded-full bg-chart-4/60" />
        <span className="size-2 rounded-full bg-success/60" />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-4 p-6">
        <span className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary">
          <Icon className="size-5" aria-hidden />
        </span>
        <div className="space-y-2">
          <div className="h-3 w-3/4 rounded-full bg-foreground/85" />
          <div className="h-3 w-1/2 rounded-full bg-foreground/85" />
        </div>
        <div className="h-1.5 w-full max-w-[180px] rounded-full bg-muted-foreground/25" />
        <div className="h-7 w-28 rounded-lg bg-primary" />
      </div>
    </div>
  );
}
