import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
}

export function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  if (dark === null) {
    return <span aria-hidden className={cn("size-9", className)} />;
  }

  return (
    <button
      type="button"
      aria-label={dark ? "Activer le thème clair" : "Activer le thème sombre"}
      onClick={() => {
        setDark((prev) => {
          const next = !prev;
          applyTheme(next);
          return next;
        });
      }}
      className={cn(
        "grid size-9 place-items-center rounded-lg border border-border bg-surface/50 text-foreground/80 transition-colors hover:border-primary/50 hover:text-foreground",
        className,
      )}
    >
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
