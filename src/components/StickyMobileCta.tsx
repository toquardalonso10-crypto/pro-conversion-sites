import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { track } from "@/lib/analytics";

/** CTA sticky mobile — toujours à portée de pouce. */
export function StickyMobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 px-4 py-3 backdrop-blur-xl transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center gap-3">
        <a
          href={`tel:${site.phone.replace(/\s/g, "")}`}
          onClick={() => track("phone_click", { location: "sticky_mobile" })}
          aria-label="Nous appeler"
          className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-surface/60"
        >
          <Phone className="size-5 text-primary" />
        </a>
        <Link
          to="/"
          hash="contact"
          onClick={() => track("cta_click", { location: "sticky_mobile" })}
          className="shadow-glow flex h-11 flex-1 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground"
        >
          Demander un devis
        </Link>
      </div>
    </div>
  );
}
