import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="font-display text-3xl tracking-wider text-primary">COVAI METALS</div>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-secondary-foreground/60">{SITE.tagline}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-secondary-foreground/75">
            Coimbatore's specialist supplier of PVC & UPVC ball valves, taps, foot valves, check valves and union fittings for agriculture, irrigation and plumbing.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/products" className="hover:text-primary">Products</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Reach us</h4>
          <ul className="mt-4 space-y-3 text-sm text-secondary-foreground/80">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{SITE.address}</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a></li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-secondary-foreground/60 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Covai Metals. All rights reserved.
        </div>
      </div>
    </footer>
  );
}