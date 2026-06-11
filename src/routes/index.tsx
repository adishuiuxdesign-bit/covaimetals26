import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Droplets, Factory, ShieldCheck, Wrench } from "lucide-react";
import hero from "@/assets/hero-valves.jpg";
import ballAsset from "@/assets/pvc-ball-valve.jpeg.asset.json";
import footAsset from "@/assets/pvc-foot-valve.jpeg.asset.json";
import tapAsset from "@/assets/two-way-angle-tap.jpeg.asset.json";
import filterAsset from "@/assets/disc-type-filter.jpeg.asset.json";

const ball = ballAsset.url;
const foot = footAsset.url;
const taps = tapAsset.url;
const filters = filterAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "COVAIMETALS — Ball Valves, Check Valves & Foot Valves in Coimbatore" },
      { name: "description", content: "Coimbatore's trusted supplier of PVC & UPVC ball valves, taps, foot valves, check valves and union fittings for agriculture, irrigation and plumbing." },
      { property: "og:title", content: "COVAIMETALS — Ball Valves & Pipe Fittings, Coimbatore" },
      { property: "og:description", content: "Quality PVC & UPVC valves and taps in all sizes — visit our Ganapathy store." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute inset-0">
          <img src={hero} alt="" width={1600} height={1100} className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/85 to-secondary/20" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Quality is our passion
            </div>
            <h1 className="mt-5 font-display text-4xl leading-[0.95] tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Coimbatore's Trusted Supplier of <span className="text-primary">Ball Valves, Check Valves</span> & Foot Valves
            </h1>
            <h2 className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/85 md:text-xl" style={{ fontFamily: "var(--font-body)" }}>
              Quality PVC and UPVC valves for agriculture, plumbing, and irrigation — ball valves, taps, foot valves, check valves, and union fittings, all in one place.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-secondary-foreground/70">
              COVAIMETALS is Coimbatore's trusted supplier of PVC ball valves, UPVC taps, foot valves, check valves, and union fittings for agriculture, irrigation, and plumbing. Walk into our Ganapathy store and our team will match you with the right fitting for your pipeline.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-elegant transition hover:bg-primary/90">
                View All Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-white/10">
                Get a Bulk Quote
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      </section>

      {/* Who are we */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Who are we</p>
              <h2 className="mt-3 font-display text-3xl leading-tight tracking-wide text-foreground md:text-4xl lg:text-5xl">
                Coimbatore's go-to store for PVC valves, taps, and pipe fittings
              </h2>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-px w-12 bg-primary" />
                <span className="text-sm uppercase tracking-wider text-muted-foreground">Raja Nagar · Ganapathy</span>
              </div>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-foreground/80 lg:col-span-7">
              <p>
                COVAIMETALS is a specialist valve and fitting supplier based in Raja Nagar, Ganapathy, Coimbatore. We focus on what we know best — PVC ball valves and UPVC taps — while also stocking foot valves, check valves, and union fittings for complete pipeline solutions. Our products are built for agriculture, irrigation systems, and home and commercial plumbing.
              </p>
              <p>
                Farmers, plumbers, contractors, and homeowners across Coimbatore rely on COVAIMETALS for quality PVC fittings at fair prices. Whether you need a single UPVC tap for a household repair or a bulk order of ball valves for a drip irrigation project, we'll help you find the right size and material — and get it to you quickly from our in-stock inventory.
              </p>
              <p>
                Our range covers PVC and UPVC ball valves, quarter-turn taps, foot valves for borewell and sump pump systems, non-return check valves, and union fittings in all standard pipe sizes. Every product is chosen for durability and value — so your water system runs reliably, season after season.
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "PVC and UPVC ball valves — our core speciality, all sizes stocked",
                  "UPVC taps for agriculture, plumbing, and irrigation",
                  "Foot valves for borewell, sump, and open-well pump systems",
                  "Non-return check valves for pump discharge lines",
                  "Union fittings for easy pipeline maintenance and repair",
                  "Serving Coimbatore, Ganapathy, and surrounding",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick categories — nested under Who are we */}
          <div className="mt-16">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Our range</p>
                <h3 className="mt-2 font-display text-2xl tracking-wide md:text-3xl">Ball valves, foot valves, taps & union fittings</h3>
              </div>
              <Link to="/products" className="hidden text-sm font-semibold uppercase tracking-wider text-primary hover:underline sm:inline-flex">View all →</Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { img: ball, title: "Ball Valves", desc: "PVC & UPVC, ½″ to 6″" },
                { img: foot, title: "Foot & Check Valves", desc: "For borewell & sump pumps" },
                { img: taps, title: "Taps & Cocks", desc: "Pillar, angle, garden & more" },
                { img: filters, title: "Union Fittings", desc: "Easy maintenance, all sizes" },
              ].map((c) => (
                <Link key={c.title} to="/products" className="group relative overflow-hidden rounded-xl border border-border bg-card transition hover:shadow-elegant">
                  <div className="aspect-[4/3] overflow-hidden bg-white">
                    <img src={c.img} alt={c.title} loading="lazy" width={600} height={450} className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h4 className="font-display text-xl tracking-wide">{c.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                  <div className="absolute right-4 top-4 rounded-full bg-primary/90 p-2 text-primary-foreground opacity-0 transition group-hover:opacity-100">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { icon: Factory, title: "All sizes in stock", desc: "½″ to 6″ — walk in and walk out with what you need." },
            { icon: ShieldCheck, title: "Quality first", desc: "Hand-picked PVC & UPVC products built to last." },
            { icon: Droplets, title: "Built for water", desc: "Engineered for borewells, drip lines and pumps." },
            { icon: Wrench, title: "Expert guidance", desc: "Our team matches the right fitting to your job." },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-elegant">
              <f.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-display text-xl tracking-wide">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <h2 className="font-display text-3xl tracking-wide md:text-4xl">Need a bulk quote for your project?</h2>
            <p className="mt-2 text-secondary-foreground/75">Tell us your sizes and quantities — we'll get back the same day.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition hover:bg-primary/90">
            Request a quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
