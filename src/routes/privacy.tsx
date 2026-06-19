import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy & Trust — COVAIMETALS" },
      { name: "description", content: "How COVAIMETALS handles enquiry data submitted through the website, including what we collect, how we store it, and how to request deletion." },
      { property: "og:title", content: "Privacy & Trust — COVAIMETALS" },
      { property: "og:description", content: "What we collect, how we use it, and how to contact us about your data." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl tracking-wide text-foreground">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function Privacy() {
  return (
    <>
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Trust & Privacy</p>
          <h1 className="mt-3 font-display text-4xl leading-tight tracking-wide text-white md:text-5xl">
            How we handle your information
          </h1>
          <p className="mt-4 max-w-2xl text-secondary-foreground/80">
            This page is maintained by COVAIMETALS to answer common questions about the data you share when you contact us or request a quote. It is editable site content, not an independent certification.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Section title="What we collect">
          <p>
            When you submit the contact or quote form, we collect the name, phone number, optional email, state, district, and the message you write. We do not require an account, and we do not use cookies for advertising or third-party tracking on this site.
          </p>
        </Section>

        <Section title="How we use it">
          <p>
            Enquiry details are used only to respond to you about products, pricing, and delivery. We may contact you on the phone number or email you provide. We do not sell or rent your information.
          </p>
        </Section>

        <Section title="Where it is stored">
          <p>
            Submissions are appended to a private Google Sheet owned by COVAIMETALS for our sales team to follow up. Access is limited to staff who need it. Form values are stored as plain text (not interpreted as spreadsheet formulas) to prevent injection.
          </p>
        </Section>

        <Section title="Retention and deletion">
          <p>
            We keep enquiry records for as long as needed to serve you and to maintain reasonable business records. To request deletion or correction of your data, contact us at <a className="text-primary hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a> with the phone number or email you used to submit the form.
          </p>
        </Section>

        <Section title="Subprocessors and integrations">
          <p>
            We use Google Workspace (Google Sheets) to receive and organise enquiries, and standard web hosting to serve this website. WhatsApp and phone calls are handled directly through the contact details you choose to use.
          </p>
        </Section>

        <Section title="Security practices">
          <p>
            The website is served over HTTPS. Form input is validated on both the browser and the server, length-limited, and sanitised before being written to our records so that user-supplied content cannot be interpreted as spreadsheet formulas. We do not collect passwords or payment details through this website.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            For any privacy, security, or data-handling question, reach us at{" "}
            <a className="text-primary hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a> or{" "}
            <a className="text-primary hover:underline" href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>, or visit our store. See our <Link to="/contact" className="text-primary hover:underline">contact page</Link> for full address.
          </p>
        </Section>
      </section>
    </>
  );
}