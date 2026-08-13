import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, type LandingContent } from "@/components/LandingPage";

const title = "Site internet pour électricien : particuliers et pros | Web Boost";
const description =
  "Site internet pour électricien : mise aux normes, rénovation, domotique, bornes de recharge. Présentez vos interventions et recevez des demandes de devis qualifiées.";

export const Route = createFileRoute("/site-internet-electricien")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/site-internet-electricien" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/site-internet-electricien" }],
  }),
  component: () => <LandingPage content={content} />,
});

const content: LandingContent = {
  eyebrow: "Électriciens",
  h1: "Site internet pour électricien : des demandes claires, pas des questions vagues.",
  intro:
    "Mise aux normes, tableau électrique, rénovation complète, domotique, borne de recharge : vos prestations n'ont rien à voir entre elles, et vos clients non plus. Un site bien structuré filtre les demandes avant même votre premier appel.",
  bullets: [
    {
      t: "Une page par prestation",
      d: "Le visiteur atterrit sur ce qu'il cherche, comprend le périmètre et demande le bon devis.",
    },
    {
      t: "Particuliers et professionnels",
      d: "Deux discours distincts : rénovation de logement d'un côté, locaux et maintenance de l'autre.",
    },
    {
      t: "Preuves techniques",
      d: "Certifications réelles, marques installées, conformité : les éléments qui rassurent sur un poste sensible.",
    },
  ],
  bodyTitle: "Pourquoi la structure compte plus que le design seul",
  body: [
    "Un électricien qui présente « tous travaux d'électricité » reçoit des demandes floues, souvent hors périmètre. Le temps passé au téléphone à requalifier est du temps non facturé.",
    "En créant une page par prestation, avec un formulaire adapté à chacune, la demande arrive déjà cadrée : type de logement, ancienneté de l'installation, besoin précis. Vous répondez plus vite, avec un devis plus juste.",
    "Nous ajoutons uniquement les certifications et qualifications que vous détenez réellement. Aucune mention inventée : une allégation fausse se retourne toujours contre l'entreprise.",
  ],
  checklistTitle: "Structure recommandée",
  checklist: [
    "Pages : mise aux normes, tableau, rénovation, domotique, borne de recharge",
    "Formulaires adaptés à chaque type de demande",
    "Section professionnels : locaux, maintenance, dépannage",
    "Mise en avant des qualifications réelles",
    "Zone d'intervention et délais habituels",
    "Base technique rapide et sécurisée",
  ],
  ctaTitle: "Recevez des demandes déjà qualifiées.",
};
