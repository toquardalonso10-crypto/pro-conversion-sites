import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, type LandingContent } from "@/components/LandingPage";

const title = "Site internet pour PME : crédibilité et prospection | Web Boost";
const description =
  "Site internet pour PME : appuyer votre prospection, crédibiliser l'entreprise auprès de vos clients et partenaires, et générer des demandes entrantes qualifiées.";

export const Route = createFileRoute("/site-internet-pme")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/site-internet-pme" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/site-internet-pme" }],
  }),
  component: () => <LandingPage content={content} />,
});

const content: LandingContent = {
  eyebrow: "PME & entreprises B2B",
  h1: "Site internet pour PME : l'outil que vos commerciaux montrent en rendez-vous.",
  intro:
    "En B2B, votre site est consulté avant l'appel, pendant la comparaison, et après le rendez-vous. Il doit expliquer ce que vous faites, pour qui, avec quelles preuves, et rendre le contact évident pour un décideur pressé.",
  bullets: [
    {
      t: "Positionnement lisible",
      d: "Métiers, marchés, capacités : un décideur doit comprendre votre périmètre en une page.",
    },
    {
      t: "Preuves et références",
      d: "Cas clients, secteurs servis, moyens techniques, certifications réelles, documentation téléchargeable.",
    },
    {
      t: "Recrutement inclus",
      d: "Votre site sert aussi à attirer des candidats : une page carrières sérieuse rapporte plus qu'une annonce isolée.",
    },
  ],
  bodyTitle: "Un site B2B se juge sur la clarté, pas sur l'effet",
  body: [
    "Un acheteur ou un donneur d'ordre cherche à réduire le risque. Il veut savoir si vous avez déjà traité un besoin comparable au sien, si votre taille est adaptée, et à qui il va parler. Un site qui répond en trois clics raccourcit le cycle de vente.",
    "Nous structurons donc l'offre par métier et par cas d'usage, nous documentons vos moyens et vos références, et nous proposons plusieurs niveaux d'engagement : contact direct, demande de documentation, ou prise de rendez-vous.",
    "Le suivi est intégré dès le départ : vous savez quelles pages précèdent les demandes entrantes et quelles sources amènent les meilleurs contacts.",
  ],
  checklistTitle: "Ce que nous mettons en place",
  checklist: [
    "Pages métiers et cas d'usage distincts",
    "Références et preuves vérifiables",
    "Documentation téléchargeable contre coordonnées",
    "Page carrières et candidature simple",
    "Suivi des conversions et des sources de trafic",
    "Base technique rapide, sécurisée et évolutive",
  ],
  ctaTitle: "Faites de votre site un appui commercial.",
};
