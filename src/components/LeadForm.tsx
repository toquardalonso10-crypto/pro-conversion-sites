import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { track } from "@/lib/analytics";

const secteurs = [
  "Artisan / Bâtiment",
  "Couvreur",
  "Plombier / Chauffagiste",
  "Électricien",
  "Élagueur / Paysagiste",
  "Garage / Automobile",
  "Restaurant",
  "Boutique / Commerce",
  "Coiffeur / Esthétique",
  "Immobilier",
  "Profession indépendante",
  "PME / Industrie",
  "Autre",
];

const typesProjet = [
  "Création d'un nouveau site",
  "Refonte de mon site actuel",
  "Site + visibilité Google",
  "Je ne sais pas encore",
];

const budgets = [
  "Site Classique (500 €)",
  "Sur-Mesure — 1 000 à 3 000 €",
  "Sur-Mesure — 3 000 à 6 000 €",
  "Sur-Mesure — plus de 6 000 €",
  "À définir ensemble",
];

const fieldClass =
  "h-11 rounded-xl border-border bg-background/60 focus-visible:ring-primary/60 focus-visible:ring-2";

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [noSite, setNoSite] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setLoading(true);
    track("form_submit", { form: "projet", secteur: data["secteur"], budget: data["budget"] });
    // Placeholder d'envoi : brancher ici l'e-mail ou le CRM de votre choix.
    window.setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 700);
  }

  if (sent) {
    return (
      <div className="card-premium p-8 text-center sm:p-12">
        <CheckCircle2 className="mx-auto size-12 text-success" />
        <h3 className="mt-5 text-2xl font-semibold">Demande reçue. Merci.</h3>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Nous étudions votre activité et nous revenons vers vous rapidement avec une proposition
          concrète et adaptée à votre entreprise. Aucun engagement de votre part.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      onFocus={() => track("form_open", { form: "projet" })}
      className="card-premium p-6 sm:p-8"
      noValidate={false}
    >
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <div className="grid gap-2">
          <Label htmlFor="nom">Nom *</Label>
          <Input id="nom" name="nom" required autoComplete="name" className={fieldClass} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="entreprise">Entreprise</Label>
          <Input id="entreprise" name="entreprise" autoComplete="organization" className={fieldClass} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="telephone">Téléphone *</Label>
          <Input
            id="telephone"
            name="telephone"
            type="tel"
            required
            autoComplete="tel"
            className={fieldClass}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="secteur">Secteur d'activité</Label>
          <select
            id="secteur"
            name="secteur"
            defaultValue=""
            className={`${fieldClass} border px-3 text-sm text-foreground`}
          >
            <option value="">Sélectionner…</option>
            {secteurs.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="site">Site actuel</Label>
          <Input
            id="site"
            name="site_actuel"
            placeholder="www.votre-site.fr"
            disabled={noSite}
            className={fieldClass}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="type">Type de projet</Label>
          <select
            id="type"
            name="type_projet"
            defaultValue=""
            className={`${fieldClass} border px-3 text-sm text-foreground`}
          >
            <option value="">Sélectionner…</option>
            {typesProjet.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="budget">Budget approximatif</Label>
          <select
            id="budget"
            name="budget"
            defaultValue=""
            className={`${fieldClass} border px-3 text-sm text-foreground`}
          >
            <option value="">Sélectionner…</option>
            {budgets.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <Checkbox
          id="aucun-site"
          name="aucun_site"
          checked={noSite}
          onCheckedChange={(v) => setNoSite(v === true)}
        />
        <Label htmlFor="aucun-site" className="text-sm font-normal text-muted-foreground">
          Je n'ai actuellement aucun site internet.
        </Label>
      </div>

      <div className="mt-4 grid gap-2">
        <Label htmlFor="message">Votre projet en quelques mots</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Votre activité, votre zone, ce que vous attendez du site…"
          className="rounded-xl border-border bg-background/60"
        />
      </div>

      <Button type="submit" variant="hero" size="xl" className="mt-6 w-full" disabled={loading}>
        {loading ? <Loader2 className="size-4 animate-spin" /> : null}
        Obtenir mon projet gratuitement
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Sans engagement • Réponse rapide • Vos informations restent confidentielles
      </p>
    </form>
  );
}
