import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { collections, pageMeta } from "@/lib/gallery-data";

export const Route = createFileRoute("/collections")({
  head: () => pageMeta("Collections", "Explore handcrafted table lamps, pendant lights and bespoke lighting objects by ING & YVE.", "/collections"),
  component: CollectionsPage,
});

function CollectionsPage() {
  return <>
    <header className="section-shell pb-14 pt-16 sm:pb-20 sm:pt-24"><p className="editorial-kicker">Maatwerk · Collection archive</p><div className="mt-5 grid gap-8 lg:grid-cols-[1fr_.7fr]"><h1 className="editorial-title text-6xl sm:text-8xl">Made for<br/><i>one place.</i></h1><p className="max-w-md self-end text-sm leading-8 text-muted-foreground">Maatwerk is the heart of ING & YVE. Each collection is a distinct material world, adapted by our studio to its setting and story.</p></div></header>
    <section className="border-t border-border">{collections.map((collection) => <Link key={collection.slug} to="/collections/$slug" params={{ slug: collection.slug }} className="group relative block min-h-[58svh] overflow-hidden border-b border-border"><img src={collection.image} width={1920} height={1088} loading="lazy" alt={`${collection.title} collection`} className={`gallery-image absolute inset-0 size-full object-cover ${collection.slug === "equestrian" ? "object-left" : "object-center"}`} /><div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.08_0.005_250/.8),oklch(0.08_0.005_250/.12)_72%)]"/><div className="section-shell relative flex min-h-[58svh] flex-col justify-between py-8 sm:py-12"><div className="flex justify-between text-[9px] uppercase tracking-[0.2em] text-muted-foreground"><span>Collection {collection.number}</span><span>{collection.mood} moodboard</span></div><div className="flex items-end justify-between gap-8"><div><h2 className="editorial-title text-5xl sm:text-7xl">{collection.title}</h2><p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{collection.subtitle}</p></div><ArrowRight className="mb-2 size-5 transition-transform duration-500 group-hover:translate-x-2" /></div></div></Link>)}</section>
  </>;
}