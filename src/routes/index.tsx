import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  GraduationCap,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Microscope,
  Phone,
  ScanFace,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/vittara-hero.jpg";
import pdrnImage from "@/assets/vittara-pdrn.jpg";
import naturalImage from "@/assets/vittara-natural.jpg";
import logoAsset from "@/assets/vittara-header-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vittara Estética Avançada | Beleza com naturalidade" },
      { name: "description", content: "Tratamentos estéticos personalizados para valorizar sua beleza com técnica, tecnologia e resultados naturais." },
      { property: "og:title", content: "Vittara Estética Avançada" },
      { property: "og:description", content: "Cuidado estético com técnica, sensibilidade e propósito." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const whatsappUrl = "https://wa.me/5551997051276";
const instagramUrl = "https://www.instagram.com/vittara.clinic/";
const academyUrl = "http://vittaraacademy.com.br/";
const clinicAddress = "Dr. Nilo Peçanha, 1851 - Lj 1 - Boa Vista, Porto Alegre - RS, 91330-000";
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinicAddress)}`;

const treatments = [
  ["Botox", "Suaviza linhas de expressão e ajuda a prevenir marcas profundas."],
  ["Preenchimentos", "Devolve volume, proporção e contorno com naturalidade."],
  ["Bioestimuladores de colágeno", "Estimula firmeza, sustentação e qualidade da pele."],
  ["Skinboosters", "Promove hidratação profunda, viço e melhora da textura."],
  ["Ultraformer", "Atua na flacidez, no contorno facial e no estímulo de colágeno."],
  ["Laser CO₂", "Auxilia na renovação, textura, manchas e rejuvenescimento da pele."],
  ["Protocolo Coreano com PDRN", "Favorece regeneração, luminosidade e recuperação da pele."],
  ["Tricologia", "Cuidado personalizado para força capilar e saúde do couro cabeludo."],
];

const differences = [
  { icon: ScanFace, title: "Avaliação individualizada", text: "Cada tratamento começa com escuta, análise e planejamento." },
  { icon: Sparkles, title: "Resultados naturais", text: "Valorizamos a harmonia dos traços, sem excessos." },
  { icon: Microscope, title: "Tecnologias avançadas", text: "Protocolos modernos para potencializar cada resultado." },
  { icon: ShieldCheck, title: "Cuidado contínuo", text: "Acompanhamento antes, durante e depois dos procedimentos." },
];

const steps = [
  ["01", "Avaliação", "Entendemos suas queixas, objetivos e histórico."],
  ["02", "Planejamento", "Definimos o melhor caminho para seu rosto, pele ou corpo."],
  ["03", "Procedimento", "Aplicamos o protocolo indicado com técnica e segurança."],
  ["04", "Acompanhamento", "Monitoramos sua evolução e orientamos os próximos cuidados."],
];

function SectionTitle({ eyebrow, title, centered = false }: { eyebrow: string; title: string; centered?: boolean }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p className="mb-4 text-[0.68rem] font-semibold uppercase text-primary">{eyebrow}</p>
      <h2 className="text-4xl leading-[1.08] font-medium text-rose-deep sm:text-5xl lg:text-6xl">{title}</h2>
    </div>
  );
}

function Index() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="bg-background text-foreground">
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 ${
          isScrolled
            ? "border-border/80 bg-card/95 shadow-[var(--shadow-header)]"
            : "border-border/45 bg-card/75"
        }`}
      >
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 px-5 sm:h-24 sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto]">
          <a href="#inicio" className="flex min-w-0 items-center" aria-label="Vittara — início">
            <img src={logoAsset.url} alt="Vittara Estética Avançada" width={943} height={178} className="h-auto w-44 max-w-full object-contain sm:w-64" />
          </a>
          <nav className="hidden items-center gap-5 text-[0.7rem] font-medium uppercase text-rose-deep lg:flex" aria-label="Navegação principal">
            <a href="#sobre" className="transition-colors hover:text-primary">A Vittara</a>
            <a href="#tratamentos" className="transition-colors hover:text-primary">Tratamentos</a>
            <a href="#metodo" className="transition-colors hover:text-primary">Método</a>
            <Button variant="vittaraOutline" size="cta" asChild><a href={academyUrl} target="_blank" rel="noopener noreferrer"><GraduationCap /> Vittara Academy</a></Button>
            <Button variant="vittara" size="cta" asChild><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Agendar avaliação</a></Button>
          </nav>
          <Button variant="vittaraOutline" size="sm" className="h-11 px-3 lg:hidden" asChild><a href={academyUrl} target="_blank" rel="noopener noreferrer" aria-label="Conhecer a Vittara Academy"><GraduationCap /> Academy</a></Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-11 w-11 shrink-0 rounded-full border border-primary/35 text-primary hover:bg-muted lg:hidden"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="menu-mobile"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        {isMenuOpen && (
          <div id="menu-mobile" className="fixed inset-x-0 top-20 z-40 h-[calc(100dvh-5rem)] sm:top-24 sm:h-[calc(100dvh-6rem)] lg:hidden" role="dialog" aria-modal="true" aria-label="Menu de navegação">
            <button type="button" className="absolute inset-0 bg-rose-deep/20 backdrop-blur-sm" aria-label="Fechar menu" onClick={closeMenu} />
            <nav className="relative border-t border-border bg-card px-5 pb-7 pt-3 shadow-[var(--shadow-soft)]" aria-label="Navegação móvel">
              <a href="#sobre" onClick={closeMenu} className="flex min-h-14 items-center border-b border-border/70 text-base font-medium text-rose-deep">A Vittara</a>
              <a href="#tratamentos" onClick={closeMenu} className="flex min-h-14 items-center border-b border-border/70 text-base font-medium text-rose-deep">Tratamentos</a>
              <a href="#metodo" onClick={closeMenu} className="flex min-h-14 items-center border-b border-border/70 text-base font-medium text-rose-deep">Método Vittara</a>
              <Button variant="vittara" size="cta" className="mt-5 w-full" asChild><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Agendar avaliação <ArrowRight /></a></Button>
            </nav>
          </div>
        )}
      </header>

      <section id="inicio" className="relative min-h-[760px] overflow-hidden bg-rose-wash pt-24 lg:min-h-[820px]">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[54%]">
          <img src={heroImage} alt="Mulher com pele natural e iluminada" width={1280} height={1536} className="h-full w-full object-cover object-[52%_28%]" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-wash via-rose-wash/75 to-transparent lg:from-rose-wash lg:via-rose-wash/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-rose-wash/50 via-transparent to-transparent lg:hidden" />
        </div>
        <div className="relative mx-auto flex min-h-[670px] max-w-7xl items-end px-5 pb-12 pt-20 sm:px-8 lg:min-h-[725px] lg:items-center lg:pb-0 lg:pt-0">
          <div className="reveal max-w-3xl lg:max-w-[58%]">
            <p className="mb-5 text-[0.67rem] font-semibold uppercase text-primary">Estética avançada · Beleza natural</p>
            <h1 className="max-w-3xl text-5xl leading-[1.03] font-medium text-rose-deep sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
              Sua beleza já existe. <em className="font-normal text-primary">Nós realçamos</em> o que há de melhor em você.
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-foreground/80 sm:text-base">Estética avançada com planejamento, tecnologia e naturalidade para valorizar seus traços com equilíbrio e segurança.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="vittara" size="cta" asChild><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Agendar avaliação <ArrowRight /></a></Button>
              <Button variant="vittaraOutline" size="cta" asChild><a href="#tratamentos">Conhecer tratamentos</a></Button>
            </div>
            <div className="mt-8 grid max-w-2xl gap-x-5 gap-y-2 text-[0.61rem] font-medium uppercase text-rose-deep/75 sm:flex sm:flex-wrap sm:text-[0.64rem]">
              {['Atendimento personalizado', 'Estética avançada', 'Resultados naturais'].map((item) => <span key={item} className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" />{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="relative scroll-mt-20 overflow-hidden py-24 sm:scroll-mt-24 sm:py-32">
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full border border-copper/15" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <SectionTitle eyebrow="Sobre a Vittara" title="Cuidado estético com técnica, sensibilidade e propósito" />
          <div className="space-y-6 self-end text-base leading-8 text-muted-foreground">
            <p>Na Vittara Estética Avançada, cada paciente é avaliada de forma individual. Antes de qualquer procedimento, entendemos sua pele, sua anatomia, seus objetivos e aquilo que faz sentido para o seu rosto e corpo.</p>
            <p className="font-medium text-rose-deep">Nosso foco não é padronizar resultados. É construir beleza com naturalidade, estratégia e segurança.</p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle eyebrow="Nosso cuidado" title="Por que escolher a Vittara?" centered />
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg bg-border sm:grid-cols-2 lg:grid-cols-4">
            {differences.map(({ icon: Icon, title, text }) => (
              <article key={title} className="group min-h-64 bg-card p-8 transition-colors duration-300 hover:bg-muted">
                <Icon strokeWidth={1.25} className="h-9 w-9 text-primary" />
                <h3 className="mt-10 text-2xl text-rose-deep">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tratamentos" className="scroll-mt-20 py-24 sm:scroll-mt-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <SectionTitle eyebrow="Tratamentos" title="Soluções que realçam sua melhor versão" />
            <p className="max-w-sm text-sm leading-7 text-muted-foreground">Protocolos escolhidos a partir de uma avaliação cuidadosa, respeitando sua individualidade e seus objetivos.</p>
          </div>
          <div className="mt-14 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {treatments.map(([title, text], index) => (
              <article key={title} className="group flex min-h-72 flex-col border-b border-r border-border bg-background p-7 transition-colors duration-300 hover:bg-rose-wash/40">
                <span className="text-xs text-primary">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-8 text-2xl leading-tight text-rose-deep">{title}</h3>
                <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">{text}</p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={`Saiba mais sobre ${title} pelo WhatsApp`} className="mt-7 flex items-center gap-2 text-[0.68rem] font-semibold uppercase text-primary">Saiba mais <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rose-wash">
        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
          <div className="min-h-[420px] lg:min-h-[680px]"><img src={pdrnImage} alt="Sérum e flores em composição de skincare" width={1200} height={912} loading="lazy" className="h-full w-full object-cover" /></div>
          <div className="flex items-center px-6 py-16 sm:px-12 lg:px-20">
            <div className="max-w-xl">
              <p className="mb-4 text-[0.68rem] font-semibold uppercase text-primary">Protocolo em destaque</p>
              <h2 className="text-4xl leading-tight text-rose-deep sm:text-6xl">Protocolo Coreano <em className="font-normal text-primary">com PDRN</em></h2>
              <p className="mt-6 text-lg leading-8 text-rose-deep">Uma experiência regenerativa inspirada nos cuidados coreanos para uma pele mais luminosa, viçosa e revitalizada.</p>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">O protocolo combina ativos biotecnológicos, microagulhamento de alta precisão, drug delivery e fotobiomodulação para auxiliar na melhora da textura, viço, hidratação e qualidade global da pele.</p>
              <Button variant="vittara" size="cta" className="mt-8" asChild><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Quero conhecer o protocolo <ArrowRight /></a></Button>
              <p className="mt-5 text-xs text-muted-foreground">A indicação depende de avaliação individualizada.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" className="scroll-mt-20 py-24 sm:scroll-mt-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle eyebrow="Método Vittara" title="Como funciona sua jornada na Vittara" centered />
          <div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
            <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-border md:block" />
            {steps.map(([number, title, text]) => (
              <article key={number} className="relative text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-primary/40 bg-background font-display text-sm text-primary">{number}</span>
                <h3 className="mt-6 text-2xl text-rose-deep">{title}</h3>
                <p className="mx-auto mt-3 max-w-64 text-sm leading-6 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid min-h-[680px] bg-rose-deep lg:grid-cols-[0.9fr_1.1fr]">
        <div className="order-2 flex items-center px-6 py-16 text-primary-foreground sm:px-12 lg:order-1 lg:px-20">
          <div className="max-w-xl">
            <p className="mb-4 text-[0.68rem] font-semibold uppercase text-accent">Nossa filosofia</p>
            <h2 className="text-4xl leading-tight text-primary-foreground sm:text-6xl">O resultado mais bonito respeita quem você é</h2>
            <p className="mt-7 text-sm leading-7 text-primary-foreground/75">Na Vittara, estética avançada não é sobre transformar uma pessoa em outra. É sobre suavizar pontos de incômodo, preservar a expressão, melhorar a qualidade da pele e realçar sua beleza com equilíbrio.</p>
            <p className="mt-10 border-l border-accent pl-6 font-display text-3xl italic text-accent">Naturalidade é planejamento.</p>
          </div>
        </div>
        <div className="order-1 min-h-[520px] lg:order-2 lg:min-h-full"><img src={naturalImage} alt="Mulher com expressão natural e pele saudável" width={1200} height={1408} loading="lazy" className="h-full w-full object-cover object-center" /></div>
      </section>

      <section className="bg-cream py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle eyebrow="Experiências" title="Cuidado que se percebe em cada detalhe" centered />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {["Me senti acolhida desde a avaliação. O resultado ficou leve e natural.", "Eu queria melhorar sem perder minha identidade, e foi exatamente isso que encontrei.", "Cuidado, técnica e atenção em cada detalhe."].map((quote) => (
              <figure key={quote} className="rounded-lg border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
                <div className="flex gap-1 text-gold" aria-label="5 estrelas">★★★★★</div>
                <blockquote className="mt-7 font-display text-2xl leading-relaxed text-rose-deep">“{quote}”</blockquote>
                <figcaption className="mt-7 text-[0.64rem] font-semibold uppercase text-muted-foreground">Relato de paciente · exemplo</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="academy-title" className="border-y border-border bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-3 text-[0.68rem] font-semibold uppercase text-primary"><GraduationCap strokeWidth={1.25} className="h-6 w-6" /> Vittara Academy</p>
            <h2 id="academy-title" className="text-4xl leading-tight text-rose-deep sm:text-5xl">Conheça a Vittara Academy</h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">O cuidado com a beleza também inspira conhecimento. Descubra a Vittara Academy e conheça suas oportunidades de aprendizado.</p>
          </div>
          <Button variant="vittaraOutline" size="cta" className="w-full sm:w-fit" asChild><a href={academyUrl} target="_blank" rel="noopener noreferrer">Conhecer a Academy <ArrowRight /></a></Button>
        </div>
      </section>

      <section id="contato" className="paper-texture scroll-mt-20 bg-rose-wash py-24 sm:scroll-mt-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <CalendarDays strokeWidth={1.25} className="mx-auto h-10 w-10 text-primary" />
          <h2 className="mt-7 text-4xl leading-tight text-rose-deep sm:text-6xl">Agende sua avaliação e descubra o melhor protocolo para você</h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted-foreground">Cada pele, rosto e objetivo merecem uma indicação personalizada. Converse com a equipe da Vittara e dê o primeiro passo para cuidar de você com mais segurança e estratégia.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="vittara" size="cta" asChild><a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle /> Agendar pelo WhatsApp</a></Button>
            <Button variant="vittaraOutline" size="cta" asChild><a href={mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin /> Ver localização</a></Button>
          </div>
        </div>
      </section>

      <footer id="dados-contato" className="bg-rose-deep py-14 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl">VITTARA</p>
            <p className="mt-2 text-[0.6rem] uppercase text-primary-foreground/60">Estética Avançada</p>
          </div>
          <div className="space-y-3 text-sm text-primary-foreground/70">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-primary-foreground"><Instagram className="h-4 w-4 shrink-0" /> @vittara.clinic</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-primary-foreground"><MessageCircle className="h-4 w-4 shrink-0" /> WhatsApp · (51) 99705-1276</a>
            <a href="tel:+5551997051276" className="flex items-center gap-3 transition-colors hover:text-primary-foreground"><Phone className="h-4 w-4 shrink-0" /> Telefone · (51) 99705-1276</a>
            <a href={academyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-primary-foreground"><GraduationCap className="h-4 w-4 shrink-0" /> Vittara Academy <ArrowRight className="h-4 w-4 shrink-0" /></a>
          </div>
          <div className="space-y-3 text-sm text-primary-foreground/70">
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 leading-6 transition-colors hover:text-primary-foreground"><MapPin className="mt-1 h-4 w-4 shrink-0" /><span>{clinicAddress}</span></a>
            <p>Horário de atendimento — a confirmar</p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-primary-foreground/15 px-5 pt-6 text-xs leading-5 text-primary-foreground/50 sm:px-8">
          Resultados podem variar de acordo com cada paciente. Nenhuma informação substitui avaliação profissional individualizada.
        </div>
      </footer>

      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Agendar pelo WhatsApp" className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-button)] transition-transform hover:scale-105 sm:bottom-7 sm:right-7"><MessageCircle className="h-6 w-6" /></a>
    </main>
  );
}