import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, type LandingContent } from "@/components/LandingPage";

const title = "Site internet pour couvreur : générer des demandes de devis | Kliviq";
const description =
  "Site internet pour couvreur et zingueur : rassurer sur un chantier engageant, montrer vos toitures réalisées et capter les demandes de devis locales.";

export const Route = createFileRoute("/site-internet-couvreur")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/site-internet-couvreur" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/site-internet-couvreur" }],
  }),
  component: () => <LandingPage content={content} />,
});

const content: LandingContent = {
  eyebrow: "Couvreurs & zingueurs",
  h1: "Site internet pour couvreur : rassurer avant de chiffrer.",
  intro:
    "Une toiture est un chantier cher, technique et rarement urgent par choix. Le client se méfie, demande plusieurs devis et sélectionne d'abord sur la confiance. Votre site doit gagner cette étape avant même votre visite.",
  bullets: [
    {
      t: "Traiter la méfiance de front",
      d: "Démarche de diagnostic, matériaux utilisés, déroulé du chantier, propreté et sécurité : ce qui distingue une entreprise sérieuse.",
    },
    {
      t: "Montrer des toitures réelles",
      d: "Tuiles, ardoise, zinc, isolation, gouttières : des exemples classés par type de travaux, avec avant / après.",
    },
    {
      t: "Capter l'urgence",
      d: "Fuite, tempête, tuile déplacée : un accès direct à l'appel et un formulaire d'urgence en haut de page.",
    },
  ],
  bodyTitle: "Pourquoi les couvreurs perdent des devis sur Internet",
  body: [
    "Beaucoup de sites de couverture affichent une liste de prestations et un numéro de téléphone. Le visiteur ne sait pas si l'entreprise intervient chez lui, ni à quoi ressemble son travail, ni comment se passe un chantier. Il repart sur le premier site qui répond à ces questions.",
    "Nous construisons donc un parcours simple : je reconnais mon problème, je vois un chantier comparable, je comprends la méthode, je demande un devis. Chaque page a un objectif et un seul appel à l'action.",
    "Les pages par commune ne sont utiles que si elles apportent une information réelle : zone couverte, contraintes locales, types de toits rencontrés. Nous ne dupliquons pas de contenu pour manipuler Google.",
  ],
  checklistTitle: "Spécifique à la couverture",
  checklist: [
    "Pages par type de travaux : rénovation, réparation, zinguerie, isolation",
    "Formulaire de devis avec photo de la toiture",
    "Bloc urgence fuite / intempéries",
    "Zone d'intervention détaillée",
    "Réassurance : assurance décennale, expérience, méthode",
    "Optimisation des recherches « couvreur + ville »",
  ],
  ctaTitle: "Transformez les recherches locales en demandes de devis.",
};
