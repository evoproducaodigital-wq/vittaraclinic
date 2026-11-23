import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, GraduationCap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/vittara-header-logo.png.asset.json";

const whatsappUrl = "https://wa.me/5551997051276";
const academyUrl = "http://vittaraacademy.com.br/";

const links = [
  { hash: "sobre", label: "A Vittara", mobile: "A Vittara" },
  { hash: "tratamentos", label: "Tratamentos", mobile: "Tratamentos" },
  { hash: "metodo", label: "Método", mobile: "Método Vittara" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const prev = document.body.style.overflow;
    const onEsc = (e: KeyboardEvent) => { if (e.key === "Escape") setIsMenuOpen(false); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEsc);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onEsc); };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 ${
        isScrolled ? "border-border/80 bg-card/95 shadow-[var(--shadow-header)]" : "border-border/45 bg-card/75"
      }`}
    >
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 px-5 sm:h-24 sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto]">
        <Link to="/" hash="inicio" className="flex min-w-0 items-center" aria-label="Vittara — início">
          <img src={new URL(logoAsset.url, "https://vittaraclinic.lovable.app").href} alt="Vittara Estética Avançada" width={943} height={178} className="h-auto w-44 max-w-full object-contain sm:w-64" />
        </Link>
        <nav className="hidden items-center gap-5 text-[0.7rem] font-medium uppercase text-rose-deep lg:flex" aria-label="Navegação principal">
          {links.map((l) => (
            <Link key={l.hash} to="/" hash={l.hash} className="transition-colors hover:text-primary">{l.label}</Link>
          ))}
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
          onClick={() => setIsMenuOpen((o) => !o)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      {isMenuOpen && (
        <div id="menu-mobile" className="fixed inset-x-0 top-20 z-40 h-[calc(100dvh-5rem)] sm:top-24 sm:h-[calc(100dvh-6rem)] lg:hidden" role="dialog" aria-modal="true" aria-label="Menu de navegação">
          <button type="button" className="absolute inset-0 bg-rose-deep/20 backdrop-blur-sm" aria-label="Fechar menu" onClick={closeMenu} />
          <nav className="relative border-t border-border bg-card px-5 pb-7 pt-3 shadow-[var(--shadow-soft)]" aria-label="Navegação móvel">
            {links.map((l) => (
              <Link key={l.hash} to="/" hash={l.hash} onClick={closeMenu} className="flex min-h-14 items-center border-b border-border/70 text-base font-medium text-rose-deep">{l.mobile}</Link>
            ))}
            <Button variant="vittara" size="cta" className="mt-5 w-full" asChild><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Agendar avaliação <ArrowRight /></a></Button>
          </nav>
        </div>
      )}
    </header>
  );
}
