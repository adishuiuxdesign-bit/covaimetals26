import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, MapPin } from "lucide-react";
import hero from "@/assets/hero-valves.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About COVAIMETALS — PVC Valve Supplier in Ganapathy, Coimbatore" },
      { name: "description", content: "Learn about COVAIMETALS — a specialist supplier of PVC & UPVC ball valves, taps and fittings serving farmers, plumbers and contractors across Coimbatore." },
      { property: "og:title", content: "About COVAIMETALS — Coimbatore" },
      { property: "og:description", content: "Specialist PVC & UPVC valve supplier based in Raja Nagar, Ganapathy, Coimbatore." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute inset-0">
          <img src={hero} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-secondary" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 md:py-28 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">About COVAIMETALS</p>
          <h1 className="mt-4 font-display text-4xl leading-tight tracking-wide text-white md:text-6xl">
            A specialist supplier built on <span className="text-primary">quality and trust</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-secondary-foreground/80">
            Serving farmers, plumbers, contractors and homeowners across Coimbatore with quality PVC fittings at fair prices.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none text-foreground/85">
          <h2 className="font-display text-3xl tracking-wide text-foreground">Our story</h2>
          <p>
            COVAIMETALS started in Raja Nagar, Ganapathy with a simple commitment: stock the right PVC and UPVC fittings, and help every customer find exactly what their pipeline needs. Today, we're known across Coimbatore as the go-to store for ball valves, taps and irrigation fittings.
          </p>
          <h2 className="mt-10 font-display text-3xl tracking-wide text-foreground">What we specialise in</h2>
          <p>
            We focus on what we know best — PVC ball valves and UPVC taps — while also stocking foot valves, check valves and union fittings for complete pipeline solutions. Our products are built for agriculture, irrigation systems, and home and commercial plumbing.
          </p>
          <h2 className="mt-10 font-display text-3xl tracking-wide text-foreground">Who we serve</h2>
          <ul className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Farmers running drip & sprinkler irrigation",
              "Plumbers and contractors",
              "Borewell and pump technicians",
              "Homeowners and DIY repairs",
              "Industrial water systems",
              "Bulk buyers and resellers",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-card p-8 shadow-elegant">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-6 w-6 text-primary" />
              <div>
                <h3 className="font-display text-2xl tracking-wide">Visit our store</h3>
                <p className="text-muted-foreground">Raja Nagar, Ganapathy, Coimbatore, Tamil Nadu</p>
              </div>
            </div>
            <Link to="/contact" className="rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90">Get directions</Link>
          </div>
        </div>
      </section>
    </>
  );
}