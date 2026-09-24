import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { imagery, pageMeta } from "@/lib/gallery-data";

export const Route = createFileRoute("/")({
  head: () => pageMeta("Sculptural Lighting", "Handcrafted sculptural lighting and design objects, made slowly in the Netherlands.", "/"),
  component: HomePage,
});

function HomePage() {
  return <>
    <section className="relative min-h-[calc(100svh-116px)] overflow-hidden">
      <img src={imagery.heroImage} width={1920} height={1088} alt="The Rock sculptural lamp glowing in a gallery interior" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.12_0.01_250/.75),transparent_72%)]" />
      <div className="relative mx-auto flex min-h-[calc(100svh-116px)] max-w-[1600px] flex-col justify-end px-5 pb-14 sm:px-10 sm:pb-20">
        <p className="editorial-kicker animate-rise text-accent">Objects with a quiet presence</p>
        <h1 className="editorial-title mt-5 max-w-4xl text-5xl text-[oklch(0.96_0.01_85)] sm:text-7xl lg:text-8xl">Sculptural lighting objects.</h1>
        <div className="mt-7 flex max-w-3xl flex-col gap-7 border-t border-[oklch(1_0_0/.25)] pt-6 text-[oklch(0.92_0.01_85)] sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xl text-sm leading-7">Handcrafted in the Netherlands.<br/>Made to last, meant to be loved.</p>
          <Button asChild variant="quiet" className="border-[oklch(1_0_0/.35)] text-[oklch(0.96_0.01_85)]"><Link to="/collections">View collection <ArrowRight /></Link></Button>
        </div>
        <ArrowDown className="absolute bottom-5 right-6 size-4 text-[oklch(0.9_0.01_85)] sm:right-10" />
      </div>
    </section>

    <section className="section-shell py-24 sm:py-36"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
      <p className="editorial-kicker">Slow design · Dutch craft</p>
      <div><h2 className="editorial-title max-w-4xl text-4xl sm:text-6xl">Light that lives as an object, even when it is switched off.</h2><p className="mt-8 max-w-2xl text-sm leading-8 text-muted-foreground">Our lamps are composed by hand from honest materials, sculptural forms and personal stories. Each piece carries the touch of its maker—and is intended to move through generations.</p></div>
    </div></section>

    <section className="border-y border-border bg-surface py-20 sm:py-28"><div className="section-shell"><div className="mb-10 flex items-end justify-between"><div><p className="editorial-kicker">Selected works</p><h2 className="editorial-title mt-3 text-4xl sm:text-5xl">Three expressions</h2></div><Link to="/collections" className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.18em] sm:flex">All collections <ArrowRight className="size-3" /></Link></div>
      <div className="grid gap-px bg-border lg:grid-cols-3">
        <CollectionCard title="Ode to Iris" text="Ocean glaze · sculptural petals" position="left" />
        <CollectionCard title="The Rock" text="Primitive form · tactile warmth" position="center" />
        <Link to="/bespoke" className="group bg-background"><CardContent title="Bespoke Studio" text="Your memory · made into light" position="right" /></Link>
      </div>
    </div></section>

    <section className="grid min-h-[720px] lg:grid-cols-2"><div className="image-reveal min-h-[500px]"><img src={imagery.collectionImage} width={1808} height={1200} loading="lazy" alt="Bespoke printed lampshade in the gallery" className="size-full object-cover object-right" /></div><div className="flex items-center bg-muted px-6 py-20 sm:px-16"><div className="max-w-xl"><p className="editorial-kicker">Bespoke / Maatwerk</p><h2 className="editorial-title mt-5 text-5xl sm:text-6xl">A memory,<br/><i>illuminated.</i></h2><p className="mt-8 text-sm leading-8 text-muted-foreground">Transform a meaningful photograph, artwork or textile into a one-of-a-kind shade. We refine every composition with you before making begins.</p><Button asChild variant="gallery" className="mt-9"><Link to="/bespoke"><Upload /> Start your piece</Link></Button></div></div></section>

    <section className="section-shell py-24 sm:py-36"><div className="grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]"><div className="image-reveal aspect-[4/3]"><img src={imagery.craftImage} width={1600} height={1200} loading="lazy" alt="Leather piping hand-stitched onto a felt shade" className="size-full object-cover" /></div><div className="lg:pl-10"><p className="editorial-kicker">Our signature</p><h2 className="editorial-title mt-5 text-4xl sm:text-5xl">The line made<br/>by two hands.</h2><p className="mt-7 text-sm leading-8 text-muted-foreground">Our double-stitched leather bies is more than an edge. It is a quiet signature—drawn around every shade by hand, one considered stitch at a time.</p><Link to="/our-craft" className="mt-8 inline-flex items-center gap-3 border-b border-accent pb-2 text-[10px] uppercase tracking-[0.18em]">Discover our craft <ArrowRight className="size-3" /></Link></div></div></section>
  </>;
}

function CollectionCard({ title, text, position }: { title: string; text: string; position: string }) {
  return <Link to="/product/$id" params={{ id: "1" }} className="group bg-background"><CardContent title={title} text={text} position={position} /></Link>;
}

function CardContent({ title, text, position }: { title: string; text: string; position: string }) {
  return <><div className="image-reveal aspect-[4/5]"><img src={imagery.collectionImage} width={1808} height={1200} loading="lazy" alt={title} className="size-full object-cover" style={{ objectPosition: position }} /></div><div className="flex items-end justify-between p-6"><div><p className="font-display text-2xl">{title}</p><p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{text}</p></div><span className="transition-transform group-hover:translate-x-1">→</span></div></>;
}