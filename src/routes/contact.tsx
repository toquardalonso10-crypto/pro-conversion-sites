import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, Clock } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { track } from "@/lib/analytics";

const title = "Contact | Kliviq — Parlons de votre projet";
const description =
  "Parlez-nous de votre activité et de votre projet de site internet. Réponse rapide, sans engagement.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div aria-hidden className="bg-hero-glow absolute inset-0 -z-10" />
      <div className="container-page grid items-start gap-12 lg:grid-cols-[1fr_1.05fr]">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Contact
          </span>
          <h1 className="mt-6 text-[2rem] leading-[1.1] font-semibold sm:text-4xl md:text-[2.75rem]">
            Parlez-nous de votre projet.
          </h1>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            Nous vous expliquons ce qui serait le plus adapté à votre activité, sans jargon et sans
            engagement.
          </p>

          <div className="mt-8 flex flex-col gap-3 text-sm">
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              onClick={() => track("phone_click", { location: "contact_page" })}
              className="inline-flex items-center gap-3 text-foreground/90 hover:text-primary"
            >
              <Phone className="size-4 text-primary" aria-hidden />
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              onClick={() => track("email_click", { location: "contact_page" })}
              className="inline-flex items-center gap-3 text-foreground/90 hover:text-primary"
            >
              <Mail className="size-4 text-primary" aria-hidden />
              {site.email}
            </a>
            <p className="inline-flex items-center gap-3 text-muted-foreground">
              <Clock className="size-4 text-primary" aria-hidden />
              Réponse rapide, sans engagement
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
