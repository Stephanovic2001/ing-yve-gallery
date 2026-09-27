import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { imagery, pageMeta } from "@/lib/gallery-data";

export const Route = createFileRoute("/")({
  head: () => pageMeta("Sculptural Lighting", "Handcrafted sculptural lighting and design objects, made slowly in the Netherlands.", "/"),
  component: HomePage,
});

function HomePage() {
  return <section className="relative h-full overflow-hidden bg-surface">
    <img src={imagery.heroImage} width={1920} height={1088} alt="The Rock sculptural lamp in the ING & YVE gallery" className="gallery-image absolute inset-0 size-full object-cover object-[42%_center] sm:object-center" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.08_0.005_250/.78),transparent_68%)]" />
    <div className="relative mx-auto grid h-full max-w-[1600px] items-end px-5 pb-7 sm:px-10 sm:pb-10 lg:grid-cols-[1fr_1.1fr_.5fr] lg:items-center">
      <div className="animate-rise max-w-xl lg:pb-10">
        <p className="editorial-kicker">Maatwerk · Sculptural light</p>
        <h1 className="editorial-title mt-4 text-5xl sm:text-7xl lg:text-8xl">Light, shaped<br/><i className="text-muted-foreground">by hand.</i></h1>
        <p className="mt-5 max-w-sm text-xs leading-6 text-muted-foreground sm:mt-7">Sculptural lighting objects, handcrafted in the Netherlands from honest materials and personal stories.</p>
        <Link to="/collections" className="group mt-6 inline-flex items-center gap-4 border-b border-border pb-2 text-[9px] uppercase tracking-[0.2em] transition-colors hover:border-accent hover:text-accent sm:mt-9">Explore collections <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" /></Link>
      </div>
      <div aria-hidden="true" />
      <div className="hidden self-end pb-10 text-right lg:block"><p className="text-[8px] uppercase tracking-[0.2em] text-muted-foreground">Current study</p><p className="mt-2 font-display text-lg">The Rock No. 1</p></div>
    </div>
  </section>;
}