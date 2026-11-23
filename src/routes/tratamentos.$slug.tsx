import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { getTreatment, treatments } from "@/lib/treatments";
import logoAsset from "@/assets/vittara-header-logo.png.asset.json";

const whatsappUrl = "https://wa.me/5551997051276";

export const Route = createFileRoute("/tratamentos/$slug")({
  loader: ({ params }) => {
    const t = getTreatment(params.slug);
    if (!t) throw notFound();
    return { slug: t.slug };
  },
  head: ({ params, loaderData }) => {
    const t = loaderData ? getTreatment(loaderData.slug) : undefined;
    const title = t ? `${t.title} em Porto Alegre | Vittara Clinic` : "Tratamento | Vittara Clinic";
    const desc = t ? `${t.short} Conheça o tratamento de ${t.title} na Vittara Estética Avançada.` : "Tratamentos da Vittara Estética Avançada.";
    const url = `https://vittaraclinic.lovable.app/tratamentos/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-4xl text-rose-deep">Tratamento não encontrado</h1>
      <Button variant="vittara" asChild><Link to="/">Voltar para a home</Link></Button>
    </div>
  ),
  component: TreatmentPage,
});

function TreatmentPage() {
  const { slug } = Route.useLoaderData();
  const t = getTreatment(slug)!;
  const others = treatments.filter((o) => o.slug !== slug).slice(0, 4);
  const msg = `${whatsappUrl}?text=${encodeURIComponent(`Olá! Quero saber mais sobre ${t.title}.`)}`;
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/95">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link to="/"><img src={logoAsset.url} alt="Vittara" className="h-7 w-auto sm:h-8" /></Link>
          <Link to="/" hash="tratamentos" className="flex items-center gap-2 text-xs font-semibold uppercase text-primary"><ArrowLeft className="h-4 w-4" /> Tratamentos</Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 text-[0.68rem] font-semibold uppercase text-primary">Tratamento</p>
          <h1 className="text-4xl leading-[1.08] font-medium text-rose-deep sm:text-6xl">{t.title}</h1>
          <p className="mt-6 text-base leading-8 text-muted-foreground">{t.summary}</p>
          <ul className="mt-8 space-y-3">
            {t.indications.map((i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{i}</li>
            ))}
          </ul>
          <Button variant="vittara" size="cta" className="mt-10" asChild>
            <a href={msg} target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="h-5 w-5" /> Saber mais</a>
          </Button>
          <p className="mt-4 text-xs text-muted-foreground">A indicação é feita após avaliação individual. Resultados variam de pessoa para pessoa.</p>
        </div>
        <img src={t.gallery[0]} alt={t.title} className="aspect-[4/5] w-full object-cover" />
      </section>

      <section className="bg-rose-wash py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-3xl text-rose-deep sm:text-4xl">Galeria</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {t.gallery.map((src, i) => (
              <img key={src} src={src} alt={`${t.title} — foto ${i + 1}`} loading="lazy" className="aspect-[4/5] w-full object-cover" />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <h2 className="text-3xl text-rose-deep">Outros tratamentos</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((o) => (
            <Link key={o.slug} to="/tratamentos/$slug" params={{ slug: o.slug }} className="border border-border p-6 text-rose-deep transition-colors hover:bg-rose-wash/40">
              <span className="text-xl">{o.title}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
