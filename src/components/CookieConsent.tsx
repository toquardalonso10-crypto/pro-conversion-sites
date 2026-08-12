import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CONSENT_KEY, loadAnalytics } from "@/lib/analytics";

/**
 * Bandeau de consentement cookies (RGPD) : aucun script de mesure n'est chargé
 * avant un accord explicite.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (!stored) setVisible(true);
    else if (stored === "granted") loadAnalytics();
  }, []);

  function decide(value: "granted" | "denied") {
    window.localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);
    if (value === "granted") loadAnalytics();
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentement aux cookies"
      className="fixed inset-x-3 bottom-20 z-50 mx-auto max-w-2xl rounded-2xl border border-border bg-popover/95 p-5 shadow-elegant backdrop-blur-xl lg:bottom-5"
    >
      <p className="text-sm text-muted-foreground">
        Nous utilisons des cookies de mesure d'audience pour comprendre comment le site est utilisé.
        Vous pouvez refuser sans conséquence sur votre navigation.{" "}
        <Link to="/politique-de-confidentialite" className="text-primary underline">
          En savoir plus
        </Link>
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
        <Button variant="outlineSoft" size="sm" onClick={() => decide("denied")}>
          Refuser
        </Button>
        <Button variant="hero" size="sm" onClick={() => decide("granted")}>
          Accepter
        </Button>
      </div>
    </div>
  );
}
