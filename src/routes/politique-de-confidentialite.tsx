import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/site";

const title = "Politique de confidentialité | Web Boost";
const description =
  "Politique de confidentialité : données collectées via le formulaire de contact, finalités, durée de conservation, cookies et exercice de vos droits.";

export const Route = createFileRoute("/politique-de-confidentialite")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/politique-de-confidentialite" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/politique-de-confidentialite" }],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="container-page max-w-3xl pt-32 pb-24">
      <h1 className="text-3xl font-semibold sm:text-4xl">Politique de confidentialité</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Document à compléter avec les informations réelles du responsable de traitement avant la mise
        en ligne publique.
      </p>

      <div className="mt-10 space-y-8 text-sm text-muted-foreground">
        <section>
          <h2 className="text-lg font-semibold text-foreground">Données collectées</h2>
          <p className="mt-2">
            Via les formulaires du site : nom, entreprise, téléphone, email, secteur d'activité, site
            actuel, type de projet, budget indicatif et message. Ces informations servent uniquement
            à répondre à votre demande et à préparer une proposition.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground">Base légale et conservation</h2>
          <p className="mt-2">
            Traitement fondé sur votre consentement et sur l'intérêt légitime de répondre à une
            demande commerciale. Les données sont conservées le temps nécessaire au traitement de la
            demande, puis archivées ou supprimées selon les obligations légales applicables.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground">Cookies et mesure d'audience</h2>
          <p className="mt-2">
            Aucun cookie de mesure d'audience n'est déposé avant votre consentement explicite via le
            bandeau prévu à cet effet. En cas d'acceptation, des outils de mesure (Google Analytics 4
            / Google Tag Manager) peuvent être activés pour comprendre l'usage du site. Vous pouvez
            modifier votre choix en supprimant les données du site dans votre navigateur.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground">Vos droits</h2>
          <p className="mt-2">
            Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et
            d'opposition. Pour l'exercer, écrivez à {site.email}. Vous pouvez également introduire une
            réclamation auprès de la CNIL.
          </p>
        </section>
      </div>
    </main>
  );
}
