import toiture from "@/assets/projet-toiture.jpg";
import restaurant from "@/assets/projet-restaurant.jpg";
import garage from "@/assets/projet-garage.jpg";
import pme from "@/assets/projet-pme.jpg";

/** Coordonnées de l'agence — à remplacer par les vraies informations. */
export const site = {
  name: "Kliviq",
  tagline: "Création de sites internet professionnels.",
  phone: "+33 0 00 00 00 00",
  email: "contact@example.com",
  city: "France",
  legalName: "[Raison sociale à compléter]",
};

export type ProjectCategory = "Artisans" | "Commerce" | "Services" | "Restaurants" | "PME";

export type Project = {
  slug: string;
  company: string;
  sector: string;
  category: ProjectCategory;
  goal: string;
  outcome: string;
  image: string;
  highlights: string[];
};

/**
 * Réalisations. Aucune donnée chiffrée n'est affichée : les résultats sont
 * décrits en termes d'intention tant que des mesures réelles ne sont pas
 * disponibles. Remplacez ces entrées par vos projets clients.
 */
export const projects: Project[] = [
  {
    slug: "entreprise-de-toiture",
    company: "Entreprise de toiture",
    sector: "Couverture / Zinguerie",
    category: "Artisans",
    goal: "Transformer les visiteurs locaux en demandes de devis.",
    outcome: "Une expérience pensée pour générer davantage de demandes de devis qualifiées.",
    image: toiture,
    highlights: [
      "Parcours de devis en 3 champs, accessible depuis chaque section",
      "Pages de zones d'intervention pour la visibilité locale",
      "Galerie de chantiers avant / après",
    ],
  },
  {
    slug: "restaurant-de-quartier",
    company: "Restaurant de quartier",
    sector: "Restauration",
    category: "Restaurants",
    goal: "Faciliter la réservation et la consultation de la carte sur mobile.",
    outcome: "Une navigation mobile pensée pour réserver en moins de deux clics.",
    image: restaurant,
    highlights: [
      "Menu lisible sans zoom, chargement instantané",
      "Bouton de réservation et appel toujours visibles",
      "Fiche Google et horaires synchronisés",
    ],
  },
  {
    slug: "garage-automobile",
    company: "Garage automobile",
    sector: "Entretien & réparation",
    category: "Services",
    goal: "Recevoir des demandes de rendez-vous sans passer par le téléphone.",
    outcome: "Un formulaire de rendez-vous simple, pensé pour être complété en une minute.",
    image: garage,
    highlights: [
      "Prise de rendez-vous par prestation",
      "Réassurance : délais, tarifs indicatifs, marques traitées",
      "Optimisation des recherches « garage + ville »",
    ],
  },
  {
    slug: "pme-industrielle",
    company: "PME industrielle",
    sector: "B2B / Industrie",
    category: "PME",
    goal: "Crédibiliser l'entreprise auprès de prospects et de futurs collaborateurs.",
    outcome: "Une présentation structurée pour appuyer les rendez-vous commerciaux.",
    image: pme,
    highlights: [
      "Pages métiers et références structurées",
      "Documentation téléchargeable contre coordonnées",
      "Base technique rapide et sécurisée",
    ],
  },
];

export const sectors = [
  "Artisans",
  "Bâtiment",
  "Couvreurs",
  "Plombiers",
  "Électriciens",
  "Paysagistes",
  "Garages",
  "Restaurants",
  "Commerces",
  "Coiffeurs",
  "Indépendants",
  "Agences immobilières",
  "PME",
  "Entreprises locales",
];

export type Offer = {
  name: string;
  price: string;
  priceNote: string;
  pitch: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

/**
 * Offres. Les tarifs sont volontairement indicatifs et centralisés ici :
 * modifiez `price` / `priceNote` pour faire évoluer la stratégie tarifaire.
 */
export const offers: Offer[] = [
  {
    name: "Essentiel",
    price: "Sur devis",
    priceNote: "Projet cadré, périmètre simple",
    pitch: "Pour les entreprises qui veulent une présence professionnelle en ligne.",
    features: [
      "Site professionnel",
      "Design personnalisé",
      "Responsive mobile, tablette, ordinateur",
      "Formulaire de contact",
      "Optimisation de base",
      "Mise en ligne",
    ],
    cta: "Choisir cette formule",
  },
  {
    name: "Performance",
    price: "Sur devis",
    priceNote: "Le meilleur équilibre valeur / résultat",
    pitch: "Pour les entreprises qui veulent transformer leur site en véritable outil commercial.",
    features: [
      "Tout ce qui est inclus dans Essentiel",
      "Stratégie de conversion",
      "Optimisation SEO",
      "Animations premium",
      "Intégration Google Maps",
      "Formulaire de devis avancé",
      "Optimisation de la vitesse",
      "Suivi des conversions",
    ],
    cta: "Choisir Performance",
    featured: true,
  },
  {
    name: "Premium",
    price: "Projet sur mesure",
    priceNote: "Périmètre défini avec vous",
    pitch: "Pour les entreprises qui veulent une expérience digitale haut de gamme.",
    features: [
      "Tout Performance",
      "Design entièrement sur mesure",
      "Animations avancées",
      "Fonctionnalités personnalisées",
      "Espace client ou fonctionnalités spécifiques selon besoin",
      "Accompagnement stratégique",
      "Optimisation avancée",
    ],
    cta: "Parler de mon projet",
  },
];

export const faq = [
  {
    q: "Combien coûte un site internet ?",
    a: "Le prix dépend du nombre de pages, du contenu et des fonctionnalités. Nous cadrons votre projet lors d'un premier échange, puis vous recevez un devis clair, sans coût caché. Vous savez exactement ce que vous payez et pourquoi.",
  },
  {
    q: "Combien de temps faut-il pour créer mon site ?",
    a: "La durée dépend du périmètre et de la rapidité des retours. Nous vous donnons un calendrier précis dès le devis et nous nous y tenons.",
  },
  {
    q: "Est-ce que je dois fournir les textes et les photos ?",
    a: "Non. Si vous les avez, nous les utilisons. Sinon, nous rédigeons les textes à partir d'un simple échange sur votre activité et nous vous guidons pour les photos.",
  },
  {
    q: "Le site sera-t-il adapté au téléphone ?",
    a: "Oui, systématiquement. La majorité de vos visiteurs viennent d'un smartphone : nous concevons d'abord la version mobile, puis les autres écrans.",
  },
  {
    q: "Est-ce que vous vous occupez du référencement Google ?",
    a: "Oui. Structure technique, titres, descriptions, vitesse, données structurées et pages locales sont pris en charge. Nous ne promettons pas de position garantie : personne ne peut le faire sérieusement.",
  },
  {
    q: "Puis-je modifier mon site plus tard ?",
    a: "Oui. Nous prévoyons une structure simple à faire évoluer et nous vous expliquons comment modifier vos contenus, ou nous le faisons pour vous.",
  },
  {
    q: "Que se passe-t-il après la mise en ligne ?",
    a: "Nous restons disponibles pour les ajustements, le suivi des performances et les évolutions. Vous n'êtes pas laissé seul le jour de la livraison.",
  },
  {
    q: "Puis-je demander des fonctionnalités personnalisées ?",
    a: "Oui : prise de rendez-vous, devis en ligne, espace client, catalogue... Nous étudions le besoin et vous indiquons ce qui est réellement utile pour votre activité.",
  },
  {
    q: "Travaillez-vous avec les entreprises locales ?",
    a: "C'est notre cœur de métier : artisans, commerces, PME et professions indépendantes qui veulent être trouvés et choisis dans leur zone.",
  },
];
