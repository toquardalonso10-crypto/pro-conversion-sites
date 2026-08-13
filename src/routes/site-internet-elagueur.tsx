import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, type LandingContent } from "@/components/LandingPage";

const title = "Site internet pour élagueur : rassurer avant d'intervenir | Kliviq";
const description =
  "Site internet pour élagueur et arboriste : afficher vos garanties, montrer vos chantiers en hauteur et capter les demandes d'intervention et d'urgence dans votre secteur.";

export const Route = createFileRoute("/site-internet-elagueur")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/site-internet-elagueur" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/site-internet-elagueur" }],
  }),
  component: () => <LandingPage content={content} />,
});

const content: LandingContent = {
  eyebrow: "Élagueurs & arboristes",
  h1: "Site internet pour élagueur : rassurer avant de laisser un professionnel grimper chez soi.",
  intro:
    "Faire venir quelqu'un couper des branches en hauteur au-dessus d'une maison ou d'une voiture demande de la confiance. Le client veut voir que vous êtes assuré, équipé et expérimenté avant même de décrocher son téléphone.",
  bullets: [
    {
      t: "Sécurité affichée clairement",
      d: "Assurance responsabilité civile professionnelle, équipement de grimpe, certifications : les preuves qui rassurent avant le premier appel.",
    },
    {
      t: "Chantiers en images",
      d: "Élagage, abattage, dessouchage, taille de haies : des photos classées par type d'intervention, pas une liste de mots.",
    },
    {
      t: "Urgence après tempête",
      d: "Arbre tombé sur un toit ou une clôture : un accès direct à l'appel, visible dès l'arrivée sur le site.",
    },
  ],
  bodyTitle: "Un métier technique que peu de sites expliquent bien",
  body: [
    "La plupart des sites d'élagage se limitent à une liste de prestations sans expliquer ce qui distingue un professionnel formé d'un bricoleur avec une tronçonneuse. Le client ne le formule pas toujours ainsi, mais il le ressent : un site flou laisse craindre une intervention flou.",
    "Nous mettons en avant ce qui compte réellement : la formation du grimpeur, le matériel utilisé, la gestion des déchets verts, et la connaissance des réglementations locales (arbres protégés, déclarations préalables en copropriété ou en zone classée).",
    "Les particuliers ne sont pas vos seuls clients : mairies, syndics et paysagistes cherchent aussi un prestataire fiable pour des marchés récurrents. Une page dédiée aux professionnels change la nature des demandes que vous recevez.",
  ],
  checklistTitle: "Pensé pour l'élagage",
  checklist: [
    "Galerie de chantiers par type d'intervention (élagage, abattage, dessouchage)",
    "Bloc urgence tempête / arbre dangereux, appel direct",
    "Page dédiée aux professionnels (mairies, syndics, paysagistes)",
    "Réassurance : assurance, certifications, matériel",
    "Formulaire de devis avec photo de l'arbre",
    "Optimisation des recherches « élagueur + ville »",
  ],
  ctaTitle: "Donnez confiance avant même le premier rendez-vous.",
};
