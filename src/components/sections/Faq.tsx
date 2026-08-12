import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { faq } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="FAQ"
          title="Les questions que l'on nous pose avant de démarrer."
          subtitle="Si votre question n'y est pas, posez-la : nous répondons simplement."
        />
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faq.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="card-premium border-b px-5 data-[state=open]:border-primary/40"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
