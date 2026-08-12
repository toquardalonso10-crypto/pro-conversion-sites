import { useEffect, useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { track } from "@/lib/analytics";

const SEEN_KEY = "audit-popup-seen-v1";

/** Lead magnet : mini-audit gratuit, déclenché au temps passé ou à la sortie. */
export function AuditPopup() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(SEEN_KEY)) return;

    const show = () => {
      setOpen(true);
      window.localStorage.setItem(SEEN_KEY, "1");
      cleanup();
    };
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) show();
    };
    const timer = window.setTimeout(show, 45000);
    document.addEventListener("mouseout", onLeave);

    function cleanup() {
      window.clearTimeout(timer);
      document.removeEventListener("mouseout", onLeave);
    }
    return cleanup;
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-60 grid place-items-center bg-background/70 p-4 backdrop-blur-sm">
      <div className="card-premium shadow-glow relative w-full max-w-md border-primary/40 p-7">
        <button
          type="button"
          aria-label="Fermer"
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
        >
          <X className="size-5" />
        </button>

        {sent ? (
          <div className="py-6 text-center">
            <CheckCircle2 className="mx-auto size-10 text-success" />
            <h2 className="mt-4 text-xl font-semibold">Demande enregistrée</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Nous regardons votre site et revenons vers vous avec des pistes concrètes.
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-display text-xl font-semibold">
              Votre site actuel vous fait-il perdre des clients ?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Recevez un mini-audit : lisibilité mobile, vitesse, visibilité Google et parcours de
              contact.
            </p>
            <form
              className="mt-5 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                track("audit_popup_submit");
                setSent(true);
              }}
            >
              <div className="grid gap-1.5">
                <Label htmlFor="audit-nom">Nom</Label>
                <Input id="audit-nom" name="nom" required className="h-11 rounded-xl" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="audit-email">Email</Label>
                <Input
                  id="audit-email"
                  name="email"
                  type="email"
                  required
                  className="h-11 rounded-xl"
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="audit-site">Site internet (si vous en avez un)</Label>
                <Input
                  id="audit-site"
                  name="site"
                  placeholder="www.votre-site.fr"
                  className="h-11 rounded-xl"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Recevoir un mini-audit gratuit
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Sans engagement. Vos données ne sont pas revendues.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
