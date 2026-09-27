import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { createContext, useContext, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

type GalleryContextValue = { cartCount: number; addToCart: () => void };
const GalleryContext = createContext<GalleryContextValue | undefined>(undefined);

export function useGallery() {
  const value = useContext(GalleryContext);
  if (!value) throw new Error("useGallery must be used within GalleryShell");
  return value;
}

const navItems = [
  { to: "/bespoke" as const, label: "Maatwerk" },
  { to: "/collections" as const, label: "Collections" },
  { to: "/our-craft" as const, label: "Our Craft" },
  { to: "/about" as const, label: "About · Contact" },
];

export function GalleryShell({ children }: { children: ReactNode }) {
  const [cartCount, setCartCount] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = useRouterState({ select: (state) => state.location.pathname === "/" });

  return (
    <GalleryContext.Provider value={{ cartCount, addToCart: () => setCartCount((count) => count + 1) }}>
      <div className={isHome ? "flex h-svh flex-col overflow-hidden bg-background text-foreground" : "min-h-screen bg-background text-foreground"}>
        <header className={isHome ? "z-40 shrink-0 border-b border-border/70 bg-background" : "sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-xl"}>
          <div className="mx-auto grid h-[72px] max-w-[1600px] grid-cols-[1fr_auto] items-center px-5 lg:grid-cols-[300px_1fr_170px] lg:px-10">
            <Link to="/" className="group flex flex-col leading-none" onClick={() => setMenuOpen(false)}>
              <span className="font-display text-2xl">ING <i className="font-normal text-accent">&</i> YVE</span>
              <span className="mt-1 text-[8px] uppercase tracking-[0.28em] text-muted-foreground">Sculptural Lighting</span>
            </Link>
            <nav className="hidden items-center justify-center gap-7 lg:flex" aria-label="Main navigation">
              {navItems.map((item) => <Link key={item.to} to={item.to} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>{item.label}</Link>)}
            </nav>
            <div className="flex justify-end gap-1">
              <Button variant="icon" size="icon" aria-label="Search"><Search /></Button>
              <Button variant="icon" size="icon" aria-label="Account" className="hidden sm:inline-flex"><UserRound /></Button>
              <Button variant="icon" size="icon" aria-label={`Cart with ${cartCount} items`} className="relative"><ShoppingBag /><span className="absolute right-0 top-0 flex size-4 items-center justify-center rounded-full bg-accent text-[8px] font-semibold text-accent-foreground">{cartCount}</span></Button>
              <Button variant="icon" size="icon" className="lg:hidden" aria-label="Toggle menu" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X /> : <Menu />}</Button>
            </div>
          </div>
          {menuOpen && <nav className="border-t border-border bg-background px-5 py-7 lg:hidden">{navItems.map((item) => <Link key={item.to} to={item.to} className="block border-b border-border py-4 text-xs uppercase tracking-[0.18em]" onClick={() => setMenuOpen(false)}>{item.label}</Link>)}</nav>}
        </header>
        <main className={isHome ? "min-h-0 flex-1" : undefined}>{children}</main>
        <Footer compact={isHome} />
      </div>
    </GalleryContext.Provider>
  );
}

function Footer({ compact = false }: { compact?: boolean }) {
  if (compact) return <footer className="flex h-10 shrink-0 items-center justify-between border-t border-border px-5 text-[8px] uppercase tracking-[0.18em] text-muted-foreground sm:px-10"><span>Handcrafted in the Netherlands</span><span className="hidden sm:inline">© 2026 ING & YVE</span><span>Made slowly</span></footer>;
  return <footer className="border-t border-border bg-surface px-5 py-14 sm:px-10"><div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
    <div><p className="font-display text-3xl">ING <i className="text-accent">&</i> YVE</p><p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">Sculptural lighting and handcrafted design objects, made slowly in the Netherlands.</p></div>
    <div className="text-[10px] uppercase tracking-[0.2em]"><p className="mb-5 text-muted-foreground">Explore</p>{navItems.map((item) => <Link key={item.to} to={item.to} className="mb-3 block hover:text-accent">{item.label}</Link>)}</div>
    <div className="text-sm leading-8"><p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Also discover</p><a href="https://kleinlicht.nl" target="_blank" rel="noreferrer" className="block hover:text-accent">KLEInlicht — voor een warme herinnering ↗</a><a href="https://yvettepen.com" target="_blank" rel="noreferrer" className="block hover:text-accent">Yvette Pen — Ceramic Art ↗</a></div>
  </div><div className="mx-auto mt-14 flex max-w-[1500px] flex-wrap justify-between gap-4 border-t border-border pt-6 text-[9px] uppercase tracking-[0.18em] text-muted-foreground"><span>© 2026 ING & YVE · The Netherlands</span><span>Privacy · Shipping · Terms</span></div></footer>;
}