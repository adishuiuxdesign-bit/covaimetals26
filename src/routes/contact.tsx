import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { SITE } from "@/lib/site";
import { submitInquiry } from "@/lib/inquiries.functions";
import statesData from "@/data/states-districts.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact COVAIMETALS — Visit, Call or WhatsApp" },
      { name: "description", content: "Visit, call or WhatsApp COVAIMETALS in Raja Nagar, Ganapathy, Coimbatore for PVC & UPVC ball valves, taps, foot valves and pipe fittings." },
      { property: "og:title", content: "Reach COVAIMETALS — Ganapathy store, phone & WhatsApp" },
      { property: "og:description", content: "Send us your size list for a same-day quote, or visit our Raja Nagar, Ganapathy showroom for valves, taps & irrigation fittings." },
      { property: "og:url", content: "https://covaimetals.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://covaimetals.com/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  email: z.string().trim().email("Enter a valid email").max(255).optional().or(z.literal("")),
  state: z.string().trim().min(1, "Select your state"),
  district: z.string().trim().min(1, "Select your district"),
  message: z.string().trim().min(5, "Tell us a bit more").max(1000),
});

type StatesFile = { states: { state: string; districts: string[] }[] };
const STATES = (statesData as StatesFile).states;

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const saveInquiry = useServerFn(submitInquiry);

  const districts = useMemo(
    () => STATES.find((s) => s.state === selectedState)?.districts ?? [],
    [selectedState],
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const i of parsed.error.issues) errs[i.path[0] as string] = i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);

    try {
      await saveInquiry({
        data: {
          type: "contact",
          name: parsed.data.name,
          phone: parsed.data.phone,
          email: parsed.data.email ?? "",
          message: parsed.data.message,
          state: parsed.data.state,
          district: parsed.data.district,
        },
      });
      setSent(true);
      form.reset();
      setSelectedState("");
    } catch (err) {
      console.error("Failed to save inquiry", err);
      setErrors({ message: "Something went wrong. Please try again or WhatsApp us." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Get in touch</p>
          <h1 className="mt-3 font-display text-4xl leading-tight tracking-wide text-white md:text-6xl">
            Visit the store or send us a message
          </h1>
          <p className="mt-4 max-w-2xl text-secondary-foreground/80">
            Walk into our Ganapathy showroom, call us, or send a WhatsApp — we'll match the right fitting to your project.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            {[
              { icon: MapPin, title: "Store address", body: SITE.address },
              { icon: Phone, title: "Call us", body: SITE.phone, href: `tel:${SITE.phoneRaw}` },
              { icon: MessageCircle, title: "WhatsApp", body: SITE.phone, href: `https://wa.me/${SITE.whatsapp}` },
              { icon: Mail, title: "Email", body: SITE.email, href: `mailto:${SITE.email}` },
            ].map((c) => (
              <div key={c.title} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary"><c.icon className="h-5 w-5" /></div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.title}</p>
                    {c.href ? (
                      <a href={c.href} className="mt-1 block font-semibold text-foreground hover:text-primary">{c.body}</a>
                    ) : (
                      <p className="mt-1 font-semibold text-foreground">{c.body}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                title="Covai Metals — Ganapathy, Coimbatore"
                src="https://www.google.com/maps?q=covai+metals+apaxx,Ganapathy,Coimbatore&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant md:p-8">
              <h2 className="font-display text-2xl tracking-wide">Request a quote</h2>
              <p className="mt-1 text-sm text-muted-foreground">Fill in the form and we'll reply on WhatsApp.</p>

              {sent && (
                <div className="mt-5 flex items-start gap-2 rounded-lg border border-primary/30 bg-primary/5 p-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                  Thanks — your enquiry has been received. We'll get back to you soon.
                </div>
              )}

              <form className="mt-6 grid gap-4" onSubmit={onSubmit} noValidate>
                <Field label="Your name" name="name" error={errors.name} required />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Phone" name="phone" error={errors.phone} required type="tel" />
                  <Field label="Email (optional)" name="email" error={errors.email} type="email" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-semibold text-foreground">State<span className="text-primary"> *</span></span>
                    <select
                      name="state"
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                    >
                      <option value="">Select state</option>
                      {STATES.map((s) => (
                        <option key={s.state} value={s.state}>{s.state}</option>
                      ))}
                    </select>
                    {errors.state && <span className="mt-1 block text-xs text-primary">{errors.state}</span>}
                  </label>
                  <label className="block">
                    <span className="text-sm font-semibold text-foreground">District<span className="text-primary"> *</span></span>
                    <select
                      name="district"
                      disabled={!selectedState}
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <option value="">{selectedState ? "Select district" : "Select state first"}</option>
                      {districts.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                    {errors.district && <span className="mt-1 block text-xs text-primary">{errors.district}</span>}
                  </label>
                </div>
                <Field label="What do you need?" name="message" error={errors.message} required textarea placeholder="e.g. 50 nos. of 1″ UPVC ball valves and 10 nos. of 2″ foot valves" />
                <button type="submit" disabled={submitting} className="mt-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60">
                  {submitting ? "Sending..." : "Send enquiry"}
                </button>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener"
                  className="text-xs text-muted-foreground hover:text-primary"
                >
                  Prefer WhatsApp? Message us directly →
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, error, required, textarea, type = "text", placeholder }: {
  label: string; name: string; error?: string; required?: boolean; textarea?: boolean; type?: string; placeholder?: string;
}) {
  const cls = "mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30";
  return (
    <label className="block">
      <span className="text-sm font-semibold text-foreground">{label}{required && <span className="text-primary"> *</span>}</span>
      {textarea ? (
        <textarea name={name} rows={4} placeholder={placeholder} className={cls} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} className={cls} />
      )}
      {error && <span className="mt-1 block text-xs text-primary">{error}</span>}
    </label>
  );
}