import { createFileRoute, Link } from "@tanstack/react-router";
import ballAsset from "@/assets/pvc-ball-valve.jpeg.asset.json";
import footAsset from "@/assets/pvc-foot-valve.jpeg.asset.json";
import tapAsset from "@/assets/two-way-angle-tap.jpeg.asset.json";
import filterAsset from "@/assets/disc-type-filter.jpeg.asset.json";
import unionAsset from "@/assets/union-ball-valve.jpeg.asset.json";
import heavyBallAsset from "@/assets/Heavy_PVC_Ball_Valve.jpeg.asset.json";
import upvcBallAsset from "@/assets/UPVC_Ball_Valve.jpeg.asset.json";
import doubleUnionAsset from "@/assets/Double_Union.jpeg.asset.json";
import floatValveAsset from "@/assets/Float_valve.jpeg.asset.json";
import gardenTapAsset from "@/assets/Garden_hose_tap.jpeg.asset.json";
import longTapAsset from "@/assets/Long_body_tap.jpeg.asset.json";
import machineTapAsset from "@/assets/Machine_tap.jpeg.asset.json";
import pillarCockAsset from "@/assets/Pillar_cock.jpeg.asset.json";
import checkValveAsset from "@/assets/PVC_Check_Valve.jpeg.asset.json";
import sinkBasinAsset from "@/assets/Sink_cock_basin.jpeg.asset.json";
import sinkWallAsset from "@/assets/Sink_cock_wall.jpeg.asset.json";
import showerAsset from "@/assets/Shower.jpeg.asset.json";
import angleTapAsset from "@/assets/Angle_tap.jpeg.asset.json";
import stopCockAsset from "@/assets/Stop_cock.jpeg.asset.json";
import screenTypeAsset from "@/assets/Screen_Type.jpeg.asset.json";
import flapFootAsset from "@/assets/FLAP_Foot_valve.jpeg.asset.json";
import teflonTapeAsset from "@/assets/Teflon_tape.jpeg.asset.json";

const ball = ballAsset.url;
const foot = footAsset.url;
const taps = tapAsset.url;
const filters = filterAsset.url;
const union = unionAsset.url;
const heavyBall = heavyBallAsset.url;
const upvcBall = upvcBallAsset.url;
const doubleUnion = doubleUnionAsset.url;
const floatValve = floatValveAsset.url;
const gardenTap = gardenTapAsset.url;
const longTap = longTapAsset.url;
const machineTap = machineTapAsset.url;
const pillarCock = pillarCockAsset.url;
const checkValve = checkValveAsset.url;
const sinkBasin = sinkBasinAsset.url;
const sinkWall = sinkWallAsset.url;
const shower = showerAsset.url;
const angleTap = angleTapAsset.url;
const stopCock = stopCockAsset.url;
const screenType = screenTypeAsset.url;
const flapFoot = flapFootAsset.url;
const teflonTape = teflonTapeAsset.url;

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "PVC & UPVC Valves, Taps & Filters | COVAIMETALS" },
      { name: "description", content: "Shop PVC & UPVC ball valves, check valves, foot valves, union fittings, taps and irrigation filters in Coimbatore. All sizes in stock at COVAIMETALS, Ganapathy." },
      { property: "og:title", content: "Full product range — ball valves, foot valves, taps, filters & unions" },
      { property: "og:description", content: "Every size from ½″ to 6″ in stock: PVC & UPVC ball valves, heavy PVC valves, foot & check valves, union & double union valves, taps and drip-irrigation filters." },
      { property: "og:url", content: "https://covaimetals.com/products" },
    ],
    links: [{ rel: "canonical", href: "https://covaimetals.com/products" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "COVAIMETALS product categories",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "PVC & UPVC ball valves", url: "https://covaimetals.com/products#ball-valves" },
            { "@type": "ListItem", position: 2, name: "Foot valves & check valves", url: "https://covaimetals.com/products#foot-check" },
            { "@type": "ListItem", position: 3, name: "Union & double union ball valves", url: "https://covaimetals.com/products#union" },
            { "@type": "ListItem", position: 4, name: "PVC & UPVC taps", url: "https://covaimetals.com/products#taps" },
            { "@type": "ListItem", position: 5, name: "Irrigation filters", url: "https://covaimetals.com/products#filters" },
          ],
        }),
      },
    ],
  }),
  component: Products,
});

const sizes = {
  ballStd: ["½″", "¾″", "1″", "1¼″", "1½″", "2″"],
  ballHeavy: ["2½″", "3″", "4″", "6″"],
  upvcBall: ["½″", "¾″", "1″", "1¼″", "1½″", "2″", "2½″", "3″", "4″"],
  union: ["½″", "¾″", "1″", "1¼″", "1½″", "2″", "2½″", "3″", "4″"],
  filter: ["1″", "1¼″", "1½″", "2″"],
};

function SizeChips({ items }: { items: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {items.map((s) => (
        <span key={s} className="rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-semibold text-foreground/80">{s}</span>
      ))}
    </div>
  );
}

function Product({ title, desc, sizes, image }: { title: string; desc: string; sizes?: string[]; image?: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card transition hover:border-primary/40 hover:shadow-elegant">
      {image && (
        <div className="aspect-[4/3] w-full overflow-hidden bg-muted/40">
          <img src={image} alt={title} loading="lazy" width={800} height={600} className="h-full w-full object-cover" />
        </div>
      )}
      <div className="p-6">
        <h3 className="font-display text-xl tracking-wide text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
        {sizes && <SizeChips items={sizes} />}
      </div>
    </div>
  );
}

function Category({ id, eyebrow, title, intro, image, children }: {
  id: string; eyebrow: string; title: string; intro: string; image: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl leading-tight tracking-wide md:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>
            <div className="mt-6 overflow-hidden rounded-xl border border-border">
              <img src={image} alt={title} loading="lazy" width={1200} height={900} className="aspect-[4/3] w-full object-cover" />
            </div>
          </div>
          <div className="grid gap-5 lg:col-span-7 md:grid-cols-2">{children}</div>
        </div>
      </div>
    </section>
  );
}

const tapList: Array<[string, string, string?]> = [
  ["Short body tap", "Compact bib tap for wall or pipe mounting. Common in home water supply lines.", longTap],
  ["Long body tap", "Extended body for wall-recessed pipes. Clean finish for home and commercial use.", longTap],
  ["Angle tap", "90° outlet — used where pipe runs horizontally into a wall-mounted fitting.", angleTap],
  ["Two-way tap", "Two outlets from one inlet. Splits water flow to two points — useful in agriculture and home.", taps],
  ["Two-way angle tap", "Two outlets at 90°. Compact split for tight spaces and multi-line irrigation setups.", taps],
  ["Machine tap", "Heavy-duty tap for industrial equipment water supply. Durable handle and body.", machineTap],
  ["Garden hose tap", "Threaded nozzle outlet for hose attachment. Garden, farm, and outdoor use.", gardenTap],
  ["Pillar cock", "Upright tap for basin mounting. Common in kitchens and washbasins.", pillarCock],
  ["Stop cock", "In-line isolating valve for water supply lines. Quarter-turn shutoff for plumbing maintenance.", stopCock],
  ["Float valve", "Auto-shuts when tank is full. Used in overhead tanks, sumps, and storage systems.", floatValve],
  ["Shower", "Wall-mount shower head with arm. Even spray pattern for bathroom showers.", shower],
  ["Sink cock — wall mount", "Wall-mounted tap for kitchen and utility sinks. Long spout, wall connection.", sinkWall],
  ["Sink cock — basin mount", "Deck-mounted tap for sink and basin installation. Fits standard hole sizes.", sinkBasin],
  ["Short sink cock — wall mount", "Compact wall-mount version for smaller sinks and tight spaces.", sinkWall],
  ["Short sink cock — basin mount", "Short-spout deck-mount tap. Ideal for small hand-wash basins.", sinkBasin],
  ["Teflon tape (PTFE thread seal)", "PTFE thread seal tape for leak-proof threaded pipe joints. 10 meter roll — essential for plumbing and fittings.", teflonTape],
];

function Products() {
  return (
    <>
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Our Products</p>
          <h1 className="mt-3 font-display text-4xl leading-tight tracking-wide text-white md:text-5xl lg:text-6xl">
            PVC &amp; UPVC valves, taps, and irrigation fittings in Coimbatore
          </h1>
          <p className="mt-4 max-w-3xl text-secondary-foreground/80">
            Every category below is in stock at our Ganapathy store. Tap a category to jump straight to the products.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              ["ball-valves", "Ball valves"],
              ["foot-check", "Foot & check valves"],
              ["union", "Union ball valves"],
              ["taps", "Taps"],
              ["filters", "Irrigation filters"],
            ].map(([id, label]) => (
              <a key={id} href={`#${id}`} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/10">{label}</a>
            ))}
          </div>
        </div>
      </section>

      <Category
        id="ball-valves"
        eyebrow="Category 1"
        title="PVC & UPVC ball valves — all sizes in stock"
        intro="COVAIMETALS stocks PVC and UPVC ball valves in a full range of sizes for agriculture, irrigation, plumbing and industrial use. Quarter-turn shutoff, leak-free sealing and long service life — suitable for water lines, drip systems and borewell connections across Coimbatore and Tamil Nadu."
        image={ball}
      >
        <Product image={ball} title="PVC ball valve — standard" desc="Standard PVC ball valve with quarter-turn lever handle. Ideal for irrigation mainlines, water supply, and agriculture pipelines. Lightweight, corrosion-free, and easy to operate." sizes={sizes.ballStd} />
        <Product image={heavyBall} title="Heavy PVC ball valve — heavy duty" desc="Heavy-duty PVC ball valve for large-diameter industrial and agricultural pipelines. Thick-wall construction rated for higher pressure. Used in pumping stations, canal outlets and bulk water transfer." sizes={sizes.ballHeavy} />
        <Product image={upvcBall} title="UPVC ball valve" desc="UPVC ball valve for hot and cold water systems, chemical lines, and pressure-rated pipelines. Higher rigidity than standard PVC — preferred for overhead water tanks, pumping systems and long-run water mains." sizes={sizes.upvcBall} />
      </Category>

      <div className="bg-muted/40">
        <Category
          id="foot-check"
          eyebrow="Category 2"
          title="Foot valves & check valves for pumps and borewells"
          intro="PVC foot valves and check valves designed for borewell suction lines, sump pumps and irrigation pump systems. Foot valves keep your pump primed and prevent dry running. Check valves stop backflow in discharge pipes — protecting motors and saving power."
          image={foot}
        >
          <Product image={foot} title="PVC foot valve with strainer" desc="Installed at suction inlet. Keeps pump primed. SS strainer prevents debris entry. For borewell and open-well pumps." />
          <Product image={flapFoot} title="Flap foot valve" desc="Flap-type PVC foot valve with SS mesh strainer dome. Keeps pump primed and prevents debris entry. Ideal for open wells, sumps, and irrigation suction lines." />
          <Product image={checkValve} title="PVC check valve (non-return)" desc="Prevents water flowing back when pump stops. Swing or spring type. Protects pump motor from reverse rotation." />
        </Category>
      </div>

      <Category
        id="union"
        eyebrow="Category 3"
        title="Union ball valves & double union ball valves — ½″ to 4″"
        intro="Union and double union ball valves allow easy removal and replacement without cutting the pipeline. Available in PVC and UPVC from ½″ to 4″ — used in pump connections, filter assemblies, chemical dosing lines, and any system where regular maintenance is needed."
        image={union}
      >
        <Product image={union} title="Union ball valve" desc="Single union end for easy disconnection. Quarter-turn shutoff. Ideal for pump inlet/outlet connections." sizes={sizes.union} />
        <Product image={doubleUnion} title="Double union ball valve" desc="Both ends unscrew independently. Full isolation and removal without disturbing the pipeline. Used in filter and equipment assemblies." sizes={sizes.union} />
      </Category>

      <div className="bg-muted/40">
        <Category
          id="taps"
          eyebrow="Category 4"
          title="PVC & UPVC taps for home, agriculture, and plumbing"
          intro="COVAIMETALS stocks the widest range of PVC and UPVC taps in Coimbatore — for kitchens, bathrooms, gardens, agriculture and industrial plumbing. From basic bib cocks to two-way taps and pillar cocks, every type is available in our Ganapathy store."
          image={taps}
        >
          {tapList.map(([t, d, img]) => (
            <Product key={t} image={img} title={t} desc={d} />
          ))}
        </Category>
      </div>

      <Category
        id="filters"
        eyebrow="Category 5"
        title="Irrigation filters — disc type and screen type, 1″ to 2″"
        intro="Irrigation filters for drip and sprinkler systems — disc type and screen type from 1″ to 2″. Filters protect emitters and nozzles from sand, algae and debris, extending the life of your entire drip system. Suitable for borewell, canal and tank water sources."
        image={filters}
      >
        <Product image={filters} title="Disc type irrigation filter" desc="Stacked disc filtration — excellent for high-debris water sources like canals and open wells. Easy to clean by backwashing." sizes={sizes.filter} />
        <Product image={screenType} title="Screen type irrigation filter" desc="Woven mesh screen for borewell and clean water sources. Simple cartridge design — remove and rinse to clean." sizes={sizes.filter} />
        <div className="md:col-span-2">
          <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5 text-sm text-muted-foreground">
            Available sizes: <span className="font-semibold text-foreground">{sizes.filter.join("  ·  ")}</span>
          </div>
        </div>
      </Category>

      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <h2 className="font-display text-3xl tracking-wide md:text-4xl">Can't find a size? Need a bulk quote?</h2>
            <p className="mt-2 text-secondary-foreground/75">Message us — we usually reply within an hour.</p>
          </div>
          <Link to="/contact" className="rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90">Contact us</Link>
        </div>
      </section>
    </>
  );
}