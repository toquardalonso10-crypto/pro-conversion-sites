import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, type LandingContent } from "@/components/LandingPage";

const title = "Site internet pour artisan : être trouvé et choisi | Kliviq";
const description =
  "Site internet pour artisan : montrez vos chantiers, rassurez vos clients et recevez des demandes de devis depuis votre zone d'intervention.";

export const Route = createFileRoute("/site-internet-artisan")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/site-internet-artisan" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/site-internet-artisan" }],
  }),
  component: () => <LandingPage content={content} />,
});

const content: LandingContent = {
  eyebrow: "Artisans",
  h1: "Site internet pour artisan : vos chantiers valent mieux qu'une page de garage.",
  intro:
    "Un particulier qui cherche un artisan compare trois entreprises en deux minutes. Il regarde le travail réalisé, la zone couverte, et la facilité de vous joindre. Votre site doit répondre à ces trois points avant tout le reste.",
  bullets: [
    {
      t: "Vos réalisations en premier",
      d: "Photos de chantiers, avant / après, types de travaux : la preuve visuelle fait plus que n'importe quel argument.",
    },
    {
      t: "Zone d'intervention affichée",
      d: "Villes et secteurs couverts, pour être trouvé sur les recherches locales et éviter les appels hors zone.",
    },
    {
      t: "Devis en quelques champs",
      d: "Un formulaire court, complétable sur un chantier, avec possibilité d'envoyer une photo du problème.",
    },
  ],
  bodyTitle: "Ce que vos clients cherchent réellement",
  body: [
    "Un client qui contacte un artisan a souvent un problème urgent ou un projet qu'il redoute de mal confier. Deux craintes reviennent : le sérieux de l'entreprise, et le flou sur les délais et les prix. Un site qui traite ces deux points obtient des demandes plus qualifiées.",
    "Nous structurons donc vos pages par prestation (et non par jargon métier), nous affichons ce que vous faites et ce que vous ne faites pas, et nous mettons en avant les éléments de réassurance réels : assurance, expérience, garanties légales, zone couverte, délais habituels.",
    "Aucun chiffre inventé, aucun faux avis : la crédibilité vient d'éléments vérifiables et d'un site qui ressemble à votre travail.",
  ],
  checklistTitle: "Pensé pour le terrain",
  checklist: [
    "Galerie de chantiers facile à alimenter",
    "Bouton d'appel visible en permanence sur mobile",
    "Pages par prestation et par zone d'intervention",
    "Formulaire de devis avec envoi de photo",
    "Fiche Google et horaires cohérents avec le site",
    "Chargement rapide même en 4G",
  ],
  ctaTitle: "Recevez plus de demandes de devis dans votre zone.",
};
