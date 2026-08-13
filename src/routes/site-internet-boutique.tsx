import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, type LandingContent } from "@/components/LandingPage";

const title = "Site internet pour boutique et commerce | Kliviq";
const description =
  "Site internet pour boutique de vêtements ou commerce : une vitrine qui reflète votre identité, met en avant vos collections et donne envie de pousser la porte ou de commander.";

export const Route = createFileRoute("/site-internet-boutique")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/site-internet-boutique" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/site-internet-boutique" }],
  }),
  component: () => <LandingPage content={content} />,
});

const content: LandingContent = {
  eyebrow: "Boutiques & commerces",
  h1: "Site internet pour boutique : donner envie de pousser la porte, ou de commander en ligne.",
  intro:
    "Avant de se déplacer, un client regarde si votre boutique lui ressemble. Une vitrine numérique floue ou datée donne l'impression d'un commerce à l'arrêt, même si votre boutique physique est vivante.",
  bullets: [
    {
      t: "Votre style, pas un gabarit",
      d: "Une identité visuelle qui reflète votre sélection et votre univers, pas un template générique qu'on retrouve partout.",
    },
    {
      t: "Collections mises en avant",
      d: "Nouveautés, pièces phares, univers de la saison : ce qui donne envie de venir voir en vrai ou de commander.",
    },
    {
      t: "Click & collect ou vente en ligne",
      d: "Selon vos besoins : un catalogue simple qui pousse à passer en boutique, ou une vraie boutique en ligne si vous vendez à distance.",
    },
  ],
  bodyTitle: "Un site vitrine n'est pas un site e-commerce, et ce n'est pas un problème",
  body: [
    "Beaucoup de commerçants pensent qu'un site sans vente en ligne n'a pas d'intérêt. C'est faux : un site qui donne envie de se déplacer, qui affiche vos horaires et votre adresse clairement, et qui montre vos dernières arrivées suffit souvent à remplir votre boutique.",
    "Si la vente en ligne a du sens pour votre activité, nous la construisons avec un catalogue réaliste à tenir à jour, pas une usine à gaz que vous abandonnerez au bout de deux mois.",
    "Dans les deux cas, l'objectif est le même : que votre boutique en ligne donne la même envie que votre vitrine en rue. C'est une question de photos, de mise en page et de rythme de mise à jour, bien plus que de fonctionnalités.",
  ],
  checklistTitle: "Pensé pour le commerce",
  checklist: [
    "Mise en avant des nouveautés et de vos coups de cœur",
    "Photos qui reflètent votre identité, pas des visuels génériques",
    "Horaires, adresse et accès visibles immédiatement",
    "Catalogue simple ou boutique en ligne selon votre besoin",
    "Click & collect si pertinent pour votre activité",
    "Mise à jour simple, sans compétence technique requise",
  ],
  ctaTitle: "Donnez à votre boutique la vitrine qu'elle mérite en ligne.",
};
