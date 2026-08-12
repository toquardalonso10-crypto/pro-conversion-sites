import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, type LandingContent } from "@/components/LandingPage";

const title = "Création de site internet pour entreprise | Kliviq";
const description =
  "Création de site internet professionnel : structure, contenu et parcours pensés pour transformer vos visiteurs en demandes de contact. Devis clair, accompagnement complet.";

export const Route = createFileRoute("/creation-site-internet")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/creation-site-internet" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/creation-site-internet" }],
  }),
  component: () => <LandingPage content={content} />,
});

const content: LandingContent = {
  eyebrow: "Création de site internet",
  h1: "Création de site internet : un outil commercial, pas une brochure en ligne.",
  intro:
    "Un site utile répond à trois questions en quelques secondes : qui vous êtes, ce que vous faites, et comment vous joindre. Nous construisons le vôtre autour de cette logique, avec le contenu et les parcours qui correspondent réellement à vos clients.",
  bullets: [
    {
      t: "Un cadrage avant le design",
      d: "Nous listons vos services, votre zone, vos objections clients et le type de demande que vous voulez recevoir.",
    },
    {
      t: "Un parcours de contact évident",
      d: "Téléphone, formulaire, devis : l'action attendue reste accessible partout, sur mobile comme sur ordinateur.",
    },
    {
      t: "Une base technique saine",
      d: "Vitesse, structure des titres, données structurées, images optimisées : les fondations que Google lit en premier.",
    },
  ],
  bodyTitle: "Ce que change un site conçu pour convertir",
  body: [
    "La plupart des sites d'entreprise présentent une activité sans jamais guider le visiteur. Le résultat est simple : la personne lit, hésite, puis va comparer ailleurs. Un site conçu pour convertir fait l'inverse : il rassure, prouve, et propose une action claire au bon moment.",
    "Concrètement, nous travaillons la hiérarchie de l'information, la lisibilité mobile, la preuve (réalisations, avis, détails de vos prestations) et la simplicité du formulaire. Un champ inutile en moins, c'est une demande de devis en plus.",
    "Nous ne promettons pas de position sur Google ni de volume de clients : personne ne peut le faire sérieusement. Nous garantissons un site propre, rapide, compréhensible et mesuré, pour que chaque euro investi soit suivi.",
  ],
  checklistTitle: "Inclus dans un projet type",
  checklist: [
    "Arborescence et contenu rédigés avec vous",
    "Design personnalisé, pas de gabarit générique",
    "Version mobile conçue en priorité",
    "Titres, méta-descriptions et données structurées",
    "Formulaire de contact ou de devis optimisé",
    "Suivi des conversions prêt à configurer",
    "Mise en ligne et accompagnement après livraison",
  ],
  ctaTitle: "Parlons de votre projet de site internet.",
};
