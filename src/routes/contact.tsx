import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { SITE } from "@/lib/site";
import { submitInquiry } from "@/lib/inquiries.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact COVAIMETALS — PVC Valve Supplier in Coimbatore" },
      { name: "description", content: "Visit, call or WhatsApp COVAIMETALS in Raja Nagar, Ganapathy, Coimbatore for PVC & UPVC ball valves, taps, foot valves and pipe fittings." },
      { property: "og:title", content: "Contact COVAIMETALS — Coimbatore" },
      { property: "og:description", content: "Reach our Ganapathy store for valves, taps and pipe fittings." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  email: z.string().trim().email("Enter a valid email").max(255).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Tell us a bit more").max(1000),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const saveInquiry = useServerFn(submitInquiry);

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

    try {
      await saveInquiry({ data: { name: parsed.data.name, phone: parsed.data.phone, email: parsed.data.email ?? "", message: parsed.data.message } });
    } catch (err) {
      console.error("Failed to save inquiry", err);
    }

    const msg = `Hi Covai Metals,%0A%0AName: ${encodeURIComponent(parsed.data.name)}%0APhone: ${encodeURIComponent(parsed.data.phone)}%0A${parsed.data.email ? `Email: ${encodeURIComponent(parsed.data.email)}%0A` : ""}%0A${encodeURIComponent(parsed.data.message)}`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${msg}`, "_blank", "noopener");
    setSent(true);
    form.reset();
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
                  Thanks — we've opened WhatsApp so you can send your message.
                </div>
              )}

              <form className="mt-6 grid gap-4" onSubmit={onSubmit} noValidate>
                <Field label="Your name" name="name" error={errors.name} required />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Phone" name="phone" error={errors.phone} required type="tel" />
                  <Field label="Email (optional)" name="email" error={errors.email} type="email" />
                </div>
                <Field label="What do you need?" name="message" error={errors.message} required textarea placeholder="e.g. 50 nos. of 1″ UPVC ball valves and 10 nos. of 2″ foot valves" />
                <button type="submit" className="mt-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition hover:bg-primary/90">
                  Send via WhatsApp
                </button>
                <p className="text-xs text-muted-foreground">By submitting, you'll be redirected to WhatsApp to send your enquiry.</p>
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