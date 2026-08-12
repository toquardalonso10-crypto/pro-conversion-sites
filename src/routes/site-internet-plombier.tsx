import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, type LandingContent } from "@/components/LandingPage";

const title = "Site internet pour plombier : capter les urgences | Kliviq";
const description =
  "Site internet pour plombier chauffagiste : être joignable en cas d'urgence, présenter vos interventions et recevoir des demandes de devis dans votre secteur.";

export const Route = createFileRoute("/site-internet-plombier")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/site-internet-plombier" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/site-internet-plombier" }],
  }),
  component: () => <LandingPage content={content} />,
});

const content: LandingContent = {
  eyebrow: "Plombiers & chauffagistes",
  h1: "Site internet pour plombier : être trouvé au moment où ça fuit.",
  intro:
    "Une grande partie de vos clients vous cherchent dans l'urgence, sur un téléphone, souvent debout dans une salle de bain. À cet instant, ce qui compte c'est un numéro visible, une zone claire et un site qui s'affiche instantanément.",
  bullets: [
    {
      t: "Appel en un geste",
      d: "Numéro cliquable en haut de page et bouton fixe sur mobile, sans menu à explorer.",
    },
    {
      t: "Urgence et projets séparés",
      d: "Dépannage d'un côté, salle de bain, chaudière et rénovation de l'autre : deux besoins, deux parcours.",
    },
    {
      t: "Tarification transparente",
      d: "Déplacement, fourchettes indicatives, conditions : moins d'appels perdus, plus de demandes sérieuses.",
    },
  ],
  bodyTitle: "Urgence, entretien, rénovation : trois clients différents",
  body: [
    "Un dépannage se décide en une minute ; l'installation d'une chaudière ou la rénovation d'une salle de bain se compare pendant plusieurs jours. Un site qui mélange ces deux logiques perd les deux : trop long pour l'urgence, trop pauvre pour le projet.",
    "Nous séparons donc clairement les parcours. Pour l'urgence : appel immédiat, secteur couvert, horaires réels. Pour les projets : exemples de réalisations, étapes du chantier, matériels et marques utilisées, formulaire de devis détaillé.",
    "Enfin, la vitesse est ici une question commerciale. Un site lent sur mobile fait perdre des appels que vous n'entendrez jamais sonner.",
  ],
  checklistTitle: "Adapté à votre métier",
  checklist: [
    "Bloc dépannage avec appel direct et zone couverte",
    "Pages projets : salle de bain, chaudière, chauffage, rénovation",
    "Formulaire de devis avec photo de l'installation",
    "Horaires et conditions d'intervention affichés",
    "Optimisation des recherches « plombier + ville »",
    "Chargement rapide sur réseau mobile",
  ],
  ctaTitle: "Ne laissez plus filer les appels du secteur.",
};
