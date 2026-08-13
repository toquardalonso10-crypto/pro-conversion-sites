import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Value } from "@/components/sections/Value";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Sectors } from "@/components/sections/Sectors";
import { Portfolio } from "@/components/sections/Portfolio";
import { Pricing } from "@/components/sections/Pricing";
import { Roi } from "@/components/sections/Roi";
import { Process } from "@/components/sections/Process";
import { Trust } from "@/components/sections/Trust";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { faq, site } from "@/lib/site";

const title = "Création de sites internet qui apportent des clients | Web Boost";
const description =
  "Agence de création de sites internet professionnels pour artisans, commerces et PME. Des sites rapides, optimisés Google et conçus pour générer des demandes de devis.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: site.name,
          description,
          areaServed: "France",
          serviceType: "Création de sites internet professionnels",
          url: "/",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Value />
      <BeforeAfter />
      <Sectors />
      <Portfolio />
      <Pricing />
      <Roi />
      <Process />
      <Trust />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
