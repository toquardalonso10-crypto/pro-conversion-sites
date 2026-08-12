import { Phone, Mail } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { track } from "@/lib/analytics";

export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      <div aria-hidden className="bg-hero-glow absolute inset-0 -z-10" />
      <div className="container-page grid items-start gap-12 lg:grid-cols-[1fr_1.05fr]">
        <Reveal>
          <h2 className="text-3xl font-semibold sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
            Prêt à transformer votre site en véritable outil commercial ?
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            Parlez-nous de votre projet. Nous vous expliquons ce qui serait le plus adapté à votre
            entreprise.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">Sans engagement • Réponse rapide</p>

          <div className="mt-8 flex flex-col gap-3 text-sm">
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              onClick={() => track("phone_click", { location: "final_cta" })}
              className="inline-flex items-center gap-3 text-foreground/90 hover:text-primary"
            >
              <Phone className="size-4 text-primary" aria-hidden />
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              onClick={() => track("email_click", { location: "final_cta" })}
              className="inline-flex items-center gap-3 text-foreground/90 hover:text-primary"
            >
              <Mail className="size-4 text-primary" aria-hidden />
              {site.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
