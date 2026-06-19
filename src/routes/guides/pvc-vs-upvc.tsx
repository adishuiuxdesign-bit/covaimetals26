import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/guides/pvc-vs-upvc")({
  head: () => ({
    meta: [
      { title: "PVC vs UPVC Ball Valve Comparison & Price Guide | COVAIMETALS" },
      { name: "description", content: "Compare PVC and UPVC ball valves for durability, pressure ratings, irrigation vs plumbing use, and price trends in India. Expert guide from COVAIMETALS, Coimbatore." },
      { property: "og:title", content: "PVC vs UPVC Ball Valve Comparison & Price Guide" },
      { property: "og:description", content: "Which ball valve is right for your pipeline? A detailed comparison of PVC and UPVC materials, pressure ratings, durability, and pricing in the Indian market." },
      { property: "og:url", content: "https://covaimetals.com/guides/pvc-vs-upvc" },
    ],
    links: [{ rel: "canonical", href: "https://covaimetals.com/guides/pvc-vs-upvc" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "PVC vs UPVC Ball Valve Comparison & Price Guide",
          description: "Compare PVC and UPVC ball valves for durability, pressure ratings, irrigation vs plumbing use, and price trends in India.",
          url: "https://covaimetals.com/guides/pvc-vs-upvc",
          author: { "@type": "Organization", name: "COVAIMETALS" },
          publisher: { "@type": "Organization", name: "COVAIMETALS", url: "https://covaimetals.com/" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://covaimetals.com/guides/pvc-vs-upvc" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is the difference between PVC and UPVC ball valves?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "PVC ball valves contain plasticizers that make them more flexible and lower cost, ideal for irrigation and cold water lines. UPVC (unplasticized PVC) ball valves are rigid, stronger, and handle higher pressure and temperature — preferred for plumbing, pumping systems, and overhead tanks.",
              },
            },
            {
              "@type": "Question",
              name: "Which is better for agriculture irrigation — PVC or UPVC ball valve?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Standard PVC ball valves are usually the better choice for agriculture irrigation because they are lighter, cheaper, and adequate for the moderate pressures typical in drip and sprinkler systems. UPVC is recommended only if the system runs at high pressure or carries hot water.",
              },
            },
            {
              "@type": "Question",
              name: "What factors affect PVC ball valve price in India?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Key price factors include raw PVC resin costs, valve size (½″ to 6″), pressure class (standard vs heavy duty), brand quality, fittings included (threaded, solvent weld, or flange), and bulk order quantity. Prices typically range from ₹30 for small sizes to ₹800+ for large heavy-duty valves.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: PvcVsUpvcGuide,
});

function PvcVsUpvcGuide() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Buying Guide</p>
          <h1 className="mt-4 font-display text-3xl leading-tight tracking-wide text-white md:text-5xl">
            PVC vs UPVC Ball Valves — Durability, Pressure & Price Compared
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-secondary-foreground/80">
            Choosing between a <strong className="text-white">PVC ball valve</strong> and a <strong className="text-white">UPVC ball valve</strong> can save you money and extend the life of your pipeline. This guide breaks down material differences, pressure ratings, ideal use cases, and current price trends in the Indian market.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Quick comparison table */}
        <section className="overflow-hidden rounded-xl border border-border">
          <div className="bg-muted/40 px-6 py-4">
            <h2 className="font-display text-xl tracking-wide">At-a-glance comparison</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  <th className="px-6 py-3 text-left font-semibold text-foreground">Feature</th>
                  <th className="px-6 py-3 text-left font-semibold text-foreground">PVC Ball Valve</th>
                  <th className="px-6 py-3 text-left font-semibold text-foreground">UPVC Ball Valve</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Material", "Polyvinyl chloride with plasticizers", "Unplasticized polyvinyl chloride (rigid PVC)"],
                  ["Durability", "Good for cold water & moderate pressure", "Higher rigidity; longer life under stress"],
                  ["Pressure rating", "Up to ~6–10 bar (standard)", "Up to ~10–16 bar (pressure rated)"],
                  ["Temperature", "Up to ~45°C", "Up to ~60°C"],
                  ["Best for", "Irrigation, borewells, agriculture", "Plumbing, overhead tanks, pumping systems"],
                  ["Weight", "Lighter", "Slightly heavier"],
                  ["Price (India)", "Lower — budget friendly", "Moderately higher — pays back in longevity"],
                ].map(([feature, pvc, upvc], i) => (
                  <tr key={feature} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                    <td className="px-6 py-3 font-medium text-foreground">{feature}</td>
                    <td className="px-6 py-3 text-muted-foreground">{pvc}</td>
                    <td className="px-6 py-3 text-muted-foreground">{upvc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Durability */}
        <section className="mt-16">
          <h2 className="font-display text-2xl tracking-wide md:text-3xl">Durability & Material Strength</h2>
          <p className="mt-4 leading-relaxed text-foreground/80">
            The biggest difference between PVC and UPVC is the presence of plasticizers. Standard PVC contains additives that make it flexible and easy to mold — which keeps the <strong>PVC ball valve price</strong> low. UPVC removes those plasticizers, creating a much more rigid material that resists deformation, cracking, and chemical attack over time.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-display text-lg tracking-wide">PVC ball valve lifespan</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                In typical agriculture and irrigation settings, a quality PVC ball valve lasts 5–8 years. Exposure to direct sunlight (UV) can shorten this unless the valve is UV-stabilized. For buried or shaded lines, PVC offers excellent value.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-display text-lg tracking-wide">UPVC ball valve lifespan</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                UPVC ball valves commonly last 10–15 years in plumbing and pumping applications. The rigid structure resists fatigue from pressure cycling, making UPVC the safer choice for systems that start and stop frequently.
              </p>
            </div>
          </div>
        </section>

        {/* Pressure ratings */}
        <section className="mt-16">
          <h2 className="font-display text-2xl tracking-wide md:text-3xl">Pressure Ratings Explained</h2>
          <p className="mt-4 leading-relaxed text-foreground/80">
            Not all ball valves are rated for the same pressure. Choosing the wrong class can lead to leaks, cracked bodies, or burst fittings — especially in pump discharge lines and overhead tank systems.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Standard PVC ball valves: typically rated for 6 bar (87 psi) working pressure. Suitable for gravity-fed lines, drip irrigation laterals, and low-pressure sprinklers.",
              "Heavy-duty PVC ball valves: rated up to 10 bar (145 psi) with thicker walls. Used in mainlines, borewell pump outlets, and canal-fed systems.",
              "UPVC ball valves: commonly rated 10–16 bar (145–232 psi) depending on size and brand. The material's rigidity means the body does not flex or creep under sustained load.",
            ].map((text) => (
              <li key={text.slice(0, 30)} className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-foreground/80">{text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Use cases */}
        <section className="mt-16">
          <h2 className="font-display text-2xl tracking-wide md:text-3xl">Irrigation vs Plumbing — Which to Choose?</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-xl tracking-wide">Agriculture & Irrigation</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                For drip lines, sprinkler mains, and borewell connections, <strong>standard PVC ball valves</strong> are usually the right choice. The pressures are moderate, the lines may be long, and cost adds up quickly across acres of farmland. Farmers in Coimbatore and across Tamil Nadu typically choose PVC for field layouts and UPVC only at the pump house or filter station where pressure is highest.
              </p>
              <ul className="mt-4 space-y-2">
                {["Drip irrigation laterals", "Sprinkler mainlines", "Borewell suction & delivery", "Open-well pump connections"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-xl tracking-wide">Home & Commercial Plumbing</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                In buildings, overhead tanks, and pressurized municipal connections, <strong>UPVC ball valves</strong> are the safer long-term investment. They handle the higher static pressure of tall buildings, resist the heat of sun-exposed terrace lines, and do not warp when tightly fitted into metal-threaded adapters.
              </p>
              <ul className="mt-4 space-y-2">
                {["Overhead tank inlet/outlet", "Booster pump connections", "Hot & cold water distribution", "Chemical dosing & treatment lines"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Price section */}
        <section className="mt-16">
          <h2 className="font-display text-2xl tracking-wide md:text-3xl">PVC Ball Valve Price & UPVC Ball Valve Price Trends in India</h2>
          <p className="mt-4 leading-relaxed text-foreground/80">
            <strong>PVC ball valve price</strong> and <strong>UPVC ball valve price</strong> in India depend on resin costs, size, pressure class, and order volume. Below is a practical price guide based on current Tamil Nadu market rates for quality branded valves. Prices vary by manufacturer and bulk quantity — always confirm with your supplier for large orders.
          </p>

          <div className="mt-6 overflow-hidden rounded-xl border border-border">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/20">
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Size</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Standard PVC (approx.)</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">Heavy PVC (approx.)</th>
                    <th className="px-6 py-3 text-left font-semibold text-foreground">UPVC (approx.)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["½″ (15mm)", "₹25 – ₹45", "₹40 – ₹70", "₹50 – ₹90"],
                    ["¾″ (20mm)", "₹35 – ₹60", "₹55 – ₹95", "₹70 – ₹120"],
                    ["1″ (25mm)", "₹50 – ₹90", "₹90 – ₹150", "₹110 – ₹180"],
                    ["1½″ (40mm)", "₹120 – ₹200", "₹200 – ₹350", "₹250 – ₹400"],
                    ["2″ (50mm)", "₹180 – ₹300", "₹320 – ₹500", "₹400 – ₹650"],
                    ["3″ (75mm)", "₹450 – ₹700", "₹700 – ₹1,100", "₹900 – ₹1,400"],
                    ["4″ (100mm)", "₹800 – ₹1,200", "₹1,200 – ₹1,800", "₹1,500 – ₹2,200"],
                  ].map(([size, pvc, heavy, upvc], i) => (
                    <tr key={size} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                      <td className="px-6 py-3 font-medium text-foreground">{size}</td>
                      <td className="px-6 py-3 text-muted-foreground">{pvc}</td>
                      <td className="px-6 py-3 text-muted-foreground">{heavy}</td>
                      <td className="px-6 py-3 text-muted-foreground">{upvc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-dashed border-border bg-muted/30 p-5">
            <h4 className="font-semibold text-foreground">Price factors to keep in mind</h4>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {[
                "Raw PVC resin prices fluctuate with crude oil costs",
                "Heavy-duty and threaded-end valves cost more than solvent-weld",
                "ISI/AGMARK certified brands carry a small premium",
                "Bulk orders (50+ pieces) typically earn 10–20% discount",
                "Union and double-union styles add fittings cost",
                "Foot valves with SS strainers are priced higher than plain ball valves",
              ].map((item) => (
                <li key={item.slice(0, 20)} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Recommendation */}
        <section className="mt-16 rounded-xl bg-secondary p-8 text-secondary-foreground">
          <h2 className="font-display text-2xl tracking-wide text-white">Our Recommendation</h2>
          <p className="mt-4 leading-relaxed text-secondary-foreground/85">
            For most agriculture and irrigation projects in Coimbatore, <strong className="text-white">standard PVC ball valves</strong> deliver the best balance of cost and performance. Upgrade to <strong className="text-white">heavy PVC</strong> on mainlines and pump outlets where pressure spikes. Choose <strong className="text-white">UPVC ball valves</strong> for building plumbing, overhead tanks, and any system where temperature, pressure, or long-term reliability is critical.
          </p>
          <p className="mt-4 leading-relaxed text-secondary-foreground/85">
            Not sure which size or pressure class you need? Walk into our Ganapathy store with your pipeline specs — our team will match you to the right valve and give you a competitive bulk quote on the spot.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/products" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90">
              Browse Ball Valves <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-white/10">
              Get a Quote
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="font-display text-2xl tracking-wide md:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-4">
            {[
              {
                q: "What is the difference between PVC and UPVC ball valves?",
                a: "PVC ball valves contain plasticizers that make them more flexible and lower cost, ideal for irrigation and cold water lines. UPVC (unplasticized PVC) ball valves are rigid, stronger, and handle higher pressure and temperature — preferred for plumbing, pumping systems, and overhead tanks.",
              },
              {
                q: "Which is better for agriculture irrigation — PVC or UPVC ball valve?",
                a: "Standard PVC ball valves are usually the better choice for agriculture irrigation because they are lighter, cheaper, and adequate for the moderate pressures typical in drip and sprinkler systems. UPVC is recommended only if the system runs at high pressure or carries hot water.",
              },
              {
                q: "What factors affect PVC ball valve price in India?",
                a: "Key price factors include raw PVC resin costs, valve size (½″ to 6″), pressure class (standard vs heavy duty), brand quality, fittings included (threaded, solvent weld, or flange), and bulk order quantity. Prices typically range from ₹30 for small sizes to ₹800+ for large heavy-duty valves.",
              },
              {
                q: "Can I use a PVC ball valve for hot water?",
                a: "Standard PVC ball valves are not recommended for water above 45°C. For hot water lines, use UPVC ball valves rated up to 60°C, or switch to CPVC / metal valves if temperatures exceed that.",
              },
              {
                q: "Do UPVC ball valves last longer than PVC?",
                a: "Yes. Because UPVC is more rigid and does not contain plasticizers that can leach or degrade, UPVC ball valves typically outlast PVC valves by 3–7 years in the same conditions — especially in pressurized or sun-exposed installations.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground">{q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
