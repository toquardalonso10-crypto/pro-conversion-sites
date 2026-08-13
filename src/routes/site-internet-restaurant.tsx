import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, type LandingContent } from "@/components/LandingPage";

const title = "Site internet pour restaurant : donner envie de réserver | Web Boost";
const description =
  "Site internet pour restaurant : une carte lisible sur mobile, une réservation en un geste et des photos qui donnent envie de venir, sans commission sur chaque client.";

export const Route = createFileRoute("/site-internet-restaurant")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/site-internet-restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/site-internet-restaurant" }],
  }),
  component: () => <LandingPage content={content} />,
});

const content: LandingContent = {
  eyebrow: "Restaurants & cafés",
  h1: "Site internet pour restaurant : donner envie de réserver en moins de 30 secondes.",
  intro:
    "Un client hésite entre plusieurs adresses depuis son téléphone, souvent à l'heure du repas. S'il doit zoomer pour lire la carte ou chercher votre numéro pendant trois minutes, il choisit l'établissement d'à côté.",
  bullets: [
    {
      t: "Carte lisible immédiatement",
      d: "Menu à jour, sans PDF illisible sur mobile, avec prix visibles et mise à jour simple de votre côté.",
    },
    {
      t: "Réserver en deux clics",
      d: "Bouton de réservation ou d'appel toujours visible, sans passer par un agrégateur qui prend une commission.",
    },
    {
      t: "L'ambiance avant la carte",
      d: "Photos du lieu et des plats qui donnent envie, pas des visuels génériques de banque d'images.",
    },
  ],
  bodyTitle: "Pourquoi votre fiche Google ne suffit pas",
  body: [
    "Une fiche Google Maps affiche des horaires, des avis et parfois un menu périmé. Elle ne raconte rien de votre cuisine, de votre ambiance ou de ce qui vous distingue du restaurant voisin. Le site est l'endroit où vous reprenez la main sur votre image.",
    "Nous construisons une page pensée pour la décision rapide : ce que vous servez, l'ambiance, les horaires réels, et un chemin direct vers la réservation ou l'appel. Aucun clic superflu entre l'envie et la réservation.",
    "Si vous travaillez avec des plateformes de livraison, votre site reste le seul endroit où vous ne payez pas de commission sur chaque commande. C'est aussi le lieu où mettre en avant vos événements, menus spéciaux ou privatisations.",
  ],
  checklistTitle: "Pensé pour la restauration",
  checklist: [
    "Menu à jour, lisible sans zoom sur mobile",
    "Réservation ou appel en un geste, sans intermédiaire",
    "Photos du lieu et des plats qui reflètent l'ambiance réelle",
    "Horaires et jours de fermeture toujours à jour",
    "Fiche Google et réseaux sociaux synchronisés",
    "Page événements, privatisation ou menus spéciaux si besoin",
  ],
  ctaTitle: "Donnez à votre cuisine la vitrine qu'elle mérite.",
};
