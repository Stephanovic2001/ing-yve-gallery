import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { collections, imagery, pageMeta, products } from "@/lib/gallery-data";

export const Route = createFileRoute("/collections/$slug")({
  head: ({ params }) => {
    const collection = collections.find((item) => item.slug === params.slug);
    const name = collection?.title ?? "Collection";
    return pageMeta(name, `Discover the ${name} made-to-measure lighting collection by ING & YVE.`, `/collections/${params.slug}`);
  },
  component: CollectionDetailPage,
});

function CollectionDetailPage() {
  const { slug } = Route.useParams();
  const collection = collections.find((item) => item.slug === slug) ?? collections[0];
  const isNatural = collection.slug === "light-natural";
  const featured = isNatural ? products.filter((item) => item.id === "1" || item.id === "6") : products.filter((item) => item.materialFilter === "Felt");

  return <div className={isNatural ? "collection-natural" : "collection-iris"}>
    <section className="relative min-h-[76svh] overflow-hidden border-b border-border"><img src={collection.image} width={1920} height={1088} alt={`${collection.title} collection hero`} className={`gallery-image absolute inset-0 size-full object-cover ${isNatural ? "object-left" : "object-center"}`} /><div className="collection-hero-wash absolute inset-0"/><div className="section-shell relative flex min-h-[76svh] flex-col justify-between py-8 sm:py-12"><Link to="/collections" className="inline-flex w-fit items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"><ArrowLeft className="size-3"/> Collections</Link><div className="max-w-2xl"><p className="editorial-kicker">Maatwerk · Colour study</p><h1 className="editorial-title mt-4 text-6xl sm:text-8xl">{collection.title}</h1><p className="mt-6 max-w-md text-sm leading-8 text-muted-foreground">{isNatural ? "A quiet study in linen, warm stone and softly weathered tones, shaped for calm interiors." : "Ocean depth meets pearl light and gold detail in a collection inspired by the shifting colours of the iris."}</p></div></div></section>
    <section className="section-shell grid gap-14 py-20 lg:grid-cols-[.7fr_1.3fr] sm:py-28"><div><p className="editorial-kicker">Collection palette</p><div className="collection-palette mt-7 flex gap-2" aria-label={`${collection.mood} color palette`}>{[0, 1, 2, 3].map((index) => <span key={index} className={`palette-${index + 1} block aspect-square w-14 border border-border`} />)}</div><p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{isNatural ? "Linen · Greige · Warm taupe · Off-white" : "Ocean · Sea blue · Pearl · Gold leaf"}</p></div><div><h2 className="editorial-title text-4xl sm:text-6xl">A colour world,<br/><i>made personal.</i></h2><p className="mt-7 max-w-xl text-sm leading-8 text-muted-foreground">Every piece begins with proportion, material and atmosphere. Our studio adjusts scale, finish and detailing so the object belongs naturally in its space.</p><Link to="/bespoke" className="group mt-8 inline-flex items-center gap-4 border-b border-border pb-2 text-[9px] uppercase tracking-[0.2em] hover:border-accent hover:text-accent">Discuss your piece <ArrowRight className="size-3 transition-transform group-hover:translate-x-1"/></Link></div></section>
    <section className="section-shell pb-24"><div className="grid gap-5 sm:grid-cols-2">{featured.map((product) => <Link key={product.id} to="/product/$id" params={{ id: product.id }} className="group border-t border-border pt-5"><div className="aspect-[4/5] overflow-hidden bg-muted ring-1 ring-border"><img src={product.image} width={1808} height={1200} loading="lazy" alt={product.title} className="gallery-image size-full object-cover" style={{ objectPosition: product.position }}/></div><div className="mt-5 flex justify-between"><div><h2 className="font-display text-2xl">{product.title}</h2><p className="mt-2 text-[9px] uppercase tracking-[0.16em] text-muted-foreground">{product.material}</p></div><p className="text-sm">{product.price}</p></div></Link>)}</div></section>
  </div>;
}