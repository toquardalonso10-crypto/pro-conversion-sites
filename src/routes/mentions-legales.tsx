import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/site";

const title = "Mentions légales | Web Boost";
const description = "Mentions légales du site : éditeur, hébergement et propriété intellectuelle.";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/mentions-legales" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/mentions-legales" }],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="container-page max-w-3xl pt-32 pb-24">
      <h1 className="text-3xl font-semibold sm:text-4xl">Mentions légales</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Les informations ci-dessous doivent être complétées avec les données réelles de l'entreprise
        avant la mise en ligne publique.
      </p>

      <div className="mt-10 space-y-8 text-sm text-muted-foreground">
        <section>
          <h2 className="text-lg font-semibold text-foreground">Éditeur du site</h2>
          <p className="mt-2">
            {site.legalName} — [forme juridique], [adresse du siège], [numéro SIREN/SIRET], [numéro
            de TVA intracommunautaire].
            <br />
            Responsable de la publication : [nom du responsable].
            <br />
            Contact : {site.email} — {site.phone}
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground">Hébergement</h2>
          <p className="mt-2">[Nom de l'hébergeur], [adresse], [coordonnées].</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground">Propriété intellectuelle</h2>
          <p className="mt-2">
            L'ensemble des contenus présents sur ce site (textes, visuels, éléments graphiques,
            code) est protégé. Toute reproduction sans autorisation écrite préalable est interdite.
            Les visuels de réalisations sont des maquettes illustratives.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground">Litiges</h2>
          <p className="mt-2">
            Le présent site est soumis au droit français. En cas de litige, les tribunaux compétents
            sont ceux du ressort du siège de l'éditeur, sous réserve des dispositions légales
            applicables aux consommateurs.
          </p>
        </section>
      </div>
    </main>
  );
}
